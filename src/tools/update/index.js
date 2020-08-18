const getDir = require('../get-dir');
const getSchemaFiles = require('../get-schema-files');
const getVersion = require('../get-version');
const importSql = require('../import-sql');

module.exports = (serverConfig, passedLocation, passedVersion, command) => {
  let location;
  return getDir(passedLocation, command)
  .then(returnedLocation => {
    location = returnedLocation;
    return getVersion(serverConfig);
  })
  .then(currentVersion => getSchemaFiles(location, currentVersion, passedVersion))
  .then(schemaFilesArr => importSql(schemaFilesArr, location, serverConfig));
};
