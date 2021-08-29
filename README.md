# This is a clone of https://github.com/heiseonline/shariff
# combined with a clone of https://github.com/joomla-agency/plg_jooag_shariff .

- Don't use it if you don't know why, where and how.
- **You should always use the original plugin(s) and not mine!**
- **This plugin does not provide all features of plg_jooag_shariff!**

#### What?
- A half-assed, **not really supported**, scrawly, experimental repository for domestic use (and my private Joomla web site).
- It embeds `<svg>` icons in shariff.min.js and related services instead of using FontAwesome webfonts.
- Afterwards it pushes the created JS script in a changed and renamed clone of Joomla system plugin plg_jooag_shariff, version 5.0.1, developed by https://joomla-agentur.de , Ufuk Avcu .
- Afterwards it creates a Joomla plugin package named `plg_system_jooagshariffghsvs`.

- **All credits to the creator(s) of the original scripts!!!**

-----------------------------------------------------

# My personal build procedure (WSL 1, Debian, Win 10)
- Prepare/adapt `./package.json`.
- `cd /mnt/z/git-kram/plg_system_jooagshariffghsvs`

- If new version of Shariff available:
- Download source code of that new release:
- - Compare Shariff's `src/js` and `src/style` with pendants in `./src` of this repo.
- - Adjust `./src/js/shariff.js`.
- - Main code change is (see svg parts):

```
if (
	typeof service.faPrefix !== 'undefined'
	&& typeof service.faName !== 'undefined'
	&& typeof service.svg !== 'undefined'
){
	var $svgGhsvs = $('<span/>')
		.addClass(`${service.faPrefix} ${service.faName}`)
		.attr('aria-hidden', 'true')
		.html(service.svg);
	$shareLink.prepend($svgGhsvs);
}
```

- - The svg icons are to be embedded in JS files in `./src/js/services`.
- - - Example from addthis.js (See changed properties faPrefix, faName and added(!) svg):

```
name: 'addthis',
faPrefix: 'svg-icon',
faName: 'svgs_solid_plus',
svg: '<svg viewBox="0 0 448 512" class="bi solid-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>',
```

- If not merged yet: https://github.com/heiseonline/shariff/pull/381/files
- If not merged yet: https://github.com/heiseonline/shariff/pull/382/files and `popup: true,`
- Don't forget to adpat copyright block `shariffData` in `package.json` of this repository here.
- - `shariffData` is used in `webpack.config.js` to set copyright blocks in head of all compiled files.

- Adjust `./src/plg_system_jooagshariffghsvs` if new version of plg_jooag_shariff available and if it makes sense to overtake something.

## node/npm updates/installation
- **(DON'T DO! Live with outdated dependencies and shit):**
- - <strike>`npm run g-npm-update-check` or (faster) `ncu`</strike>
- - <strike>`npm run g-ncu-override-json` (if needed) or (faster) `ncu -u`</strike>
- - <strike>`npm install` (if needed)</strike>

## Start build
- `npm run build`
- - `npm run build` runs `"build": "rm -fr dist && webpack -p && node ./build.js"`.
- - - First: Shariff webpack build.
- - - Second: `build.js` (copy and zip actions of this Joomla plugin).
- New, installable ZIP is in `./dist` afterwards.
- All packed files for this ZIP can be seen in `./package`. **But only if you disable deletion of this folder at the end of `build.js`**.s

#
- Example output

`<li class="shariff-button twitter"><a href="https://twitter.com/intent/tweet?text=Dein%20Web%20mit%20Mehr!%20GHSVS%20Berlin%20Neuk%C3%B6lln%20-%20GHSVS-Dein%20Web%20mit%20Mehr&amp;url=https%3A%2F%2Frelaunch-bs3.ghsvs.de%2F" data-rel="popup" rel="nofollow" title="Bei Twitter teilen" role="button" aria-label="Bei Twitter teilen"><span class="svg-icon svgs_brands_twitter" aria-hidden="true"><svg viewBox="0 0 512 512" class="bi brands-twitter" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></span><span class="share_text">tweet</span></a></li>`
