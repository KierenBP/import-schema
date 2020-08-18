const getDir = require('./../get-dir');
const getSchemaFiles = require('./../get-schema-files');
const importSql = require('./../import-sql');

module.exports = (serverConfig, passedLocation, passedVersion, command) => {
  let location;
  return getDir(passedLocation, command)
  .then(returnedLocation => {
    location = returnedLocation;
    return getSchemaFiles(location, null, passedVersion);
  })
  .then(schemaFilesArr => importSql(schemaFilesArr, location, serverConfig));
};
