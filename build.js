const Fs = require('fs-extra');
const util = require("util");
const rimRaf = util.promisify(require("rimraf"));

const {
	version,
	minimumPhp,
	maximumPhp,
	minimumJoomla,
	maximumJoomla,
	allowDowngrades,
} = require("./package.json");

process.exit(0);

(async function exec()
{
	await rimRaf("./package");
	await Fs.copy("./src/plg_system_jooagshariffghsvs", "./package");

	let xml = await Fs.readFile("./package/jooagshariffghsvs.xml", { encoding: "utf8" });
	xml = xml.replace(/{{version}}/g, version);
	xml = xml.replace(/{{minimumPhp}}/g, minimumPhp);
	xml = xml.replace(/{{maximumPhp}}/g, maximumPhp);
	xml = xml.replace(/{{minimumJoomla}}/g, minimumJoomla);
	xml = xml.replace(/{{maximumJoomla}}/g, maximumJoomla);
	xml = xml.replace(/{{allowDowngrades}}/g, allowDowngrades);
	Fs.writeFileSync("./package/jooagshariffghsvs.xml", xml, { encoding: "utf8" });

	Fs.copySync("./dist/shariff.min.js", "./package/assets/shariff.min.js");
	Fs.copySync("./dist/shariff.min.css", "./package/assets/shariff.min.css");

	await rimRaf("./dist");
	await Fs.mkdir("./dist");

  const zip = new (require("adm-zip"))();
  zip.addLocalFolder("package", false);
  zip.writeZip(`dist/plg_system_jooagshariffghsvs-${version}.zip`);

})();
