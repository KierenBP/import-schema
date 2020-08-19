const Importer = require('mysql-import');
const Listr = require('listr');

const addDatabase = require('./add-database');
const updateVersion = require('./update-version');

let serverConfig;
let filesArr;
let currentVersion;

const tasks = new Listr([
  // Check if database exists
  {
    title: 'Checking if database exists',
    task: () => {
      return addDatabase(serverConfig);
    },
  },
  // Import using mysql-import
  {
    title: 'Importing Schema...',
    task: () => {
      const importer = new Importer({
        host: serverConfig.host,
        port: serverConfig.port,
        user: serverConfig.username,
        password: serverConfig.password,
        database: serverConfig.database,
      });
      return importer.import(filesArr);
    },
  },
  // Import using mysql-import
  {
    title: 'Update Version',
    task: () => {
      return updateVersion(serverConfig, currentVersion);
    },
  },
]);
module.exports = (fArr, location, config) => {
  serverConfig = config;
  filesArr = fArr.map(x => `${location}/structure/${x}`);
  currentVersion = fArr[fArr.length - 1];
  return tasks.run();
};
