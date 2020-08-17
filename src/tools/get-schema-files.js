const fs = require('fs/promises');

const ignoreFiles = require('./ignore-files');

module.exports = async (location, lastVersion) => {
  let versions = await fs.readdir(`${location}/structure`);
  versions.sort();
  versions = ignoreFiles(versions);
  if (lastVersion) {
    const lastVersionIndex = versions.findIndex(e => e === `${lastVersion}.sql`);
    versions = versions.slice(lastVersionIndex);
  }
  return versions;
};
