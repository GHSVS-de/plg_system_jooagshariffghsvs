const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const replaceXml = require('./build/replaceXml.js');
const helper = require('./build/helper.js');

const {
	name,
	filename,
	version,
} = require("./package.json");

const manifestFileName = `${filename}.xml`;
const Manifest = `${__dirname}/package/${manifestFileName}`;
let versionSub = '';

(async function exec()
{
	let cleanOuts = [
		`./package`,
	];

	await helper.cleanOut(cleanOuts);

	versionSub = await helper.findVersionSub (
		path.join(__dirname, `package.json`), 'Shariff');
	console.log(chalk.magentaBright(`versionSub identified as: "${versionSub}"`));

	await fse.copy(`./src/plg_system_jooagshariffghsvs`, `./package`
	).then(
		answer => console.log(chalk.yellowBright(
			`Copied "./src/plg_system_jooagshariffghsvs/*" into "./package".`))
	);

	await fse.copy(`./dist/shariff.min.js`, `./package/assets/shariff.min.js`
	).then(
		answer => console.log(chalk.yellowBright(
			`Copied compiled "./dist/shariff.min.js" to "./package/assets".`))
	);

	await fse.copy(`./dist/shariff.min.css`, `./package/assets/shariff.min.css`
	).then(
		answer => console.log(chalk.yellowBright(
			`Copied compiled "./dist/shariff.min.css" to "./package/assets".`))
	);

	cleanOuts = [
		`./dist`,
	];
	await helper.cleanOut(cleanOuts);
	await fse.mkdir("./dist"
	).then(
		answer => console.log(chalk.yellowBright(`Created "./dist".`))
	);

	const zipFilename = `${name}-${version}_${versionSub}.zip`;

	await replaceXml.main(Manifest, zipFilename);
	await fse.copy(`${Manifest}`, `./dist/${manifestFileName}`).then(
		answer => console.log(chalk.yellowBright(
			`Copied "${manifestFileName}" to "./dist".`))
	);

	// Create zip file and detect checksum then.
	const zipFilePath = `./dist/${zipFilename}`;

	const zip = new (require('adm-zip'))();
	zip.addLocalFolder("package", false);
	await zip.writeZip(`${zipFilePath}`);
	console.log(chalk.cyanBright(chalk.bgRed(
		`"./dist/${zipFilename}" written.`)));

	const Digest = 'sha256'; //sha384, sha512
	const checksum = await helper.getChecksum(zipFilePath, Digest)
  .then(
		hash => {
			const tag = `<${Digest}>${hash}</${Digest}>`;
			console.log(chalk.greenBright(`Checksum tag is: ${tag}`));
			return tag;
		}
	)
	.catch(error => {
		console.log(error);
		console.log(chalk.redBright(`Error while checksum creation. I won't set one!`));
		return '';
	});

	let xmlFile = 'update.xml';
	await fse.copy(`./${xmlFile}`, `./dist/${xmlFile}`).then(
		answer => console.log(chalk.yellowBright(
			`Copied "${xmlFile}" to ./dist.`))
	);
	await replaceXml.main(`${__dirname}/dist/${xmlFile}`, zipFilename, checksum);

	xmlFile = 'changelog.xml';
	await fse.copy(`./${xmlFile}`, `./dist/${xmlFile}`).then(
		answer => console.log(chalk.yellowBright(
			`Copied "${xmlFile}" to ./dist.`))
	);
	await replaceXml.main(`${__dirname}/dist/${xmlFile}`, zipFilename, checksum);

	xmlFile = 'release.txt';
	await fse.copy(`./${xmlFile}`, `./dist/${xmlFile}`).then(
		answer => console.log(chalk.yellowBright(
			`Copied "${xmlFile}" to ./dist.`))
	);
	await replaceXml.main(`${__dirname}/dist/${xmlFile}`, zipFilename, checksum);

	cleanOuts = [
		`./package`,
	];
	await helper.cleanOut(cleanOuts).then(
		answer => console.log(chalk.cyanBright(chalk.bgRed(
			`Finished. Good bye!`)))
	);
})();
