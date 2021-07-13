const arvish = require('arvish');
const { formatBytes, getPackageStats } = require('./util');

async function main() {
	try {
		const { name, version, gzip, size } = await getPackageStats(arvish.input);

		arvish.output([
			{
				title: `${name}@${version}`,
				subtitle: `Size: ${formatBytes(size)}, Gzip: ${formatBytes(
					gzip
				)}`,
				arg: `https://bundlephobia.com/result?p=${name}@${version}`,
				quicklookurl: `https://bundlephobia.com/result?p=${name}@${version}`
			}
		]);
	} catch (e) {
		arvish.error(e.message);
	}
}

main();
