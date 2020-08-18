const fs = require('fs/promises');

const ignoreFiles = require('./ignore-files');

module.exports = async (location, startVersion, lastVersion) => {
  let versions = await fs.readdir(`${location}/structure`);
  versions.sort();
  versions = ignoreFiles(versions);

  if (startVersion) {
    const startVersionIndex = versions.findIndex(e => e === `${startVersion}.sql`);
    versions = versions.slice(startVersionIndex + 1);
  }
  if (lastVersion) {
    const lastVersionIndex = versions.findIndex(e => e === `${lastVersion}.sql`);
    versions = versions.slice(0, lastVersionIndex + 1);
  }
  console.log(versions);
  return versions;
};
