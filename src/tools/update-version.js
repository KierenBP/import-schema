const mysql = require('mysql2');

const settingsTable = '_setting';

// create the connection
function getConnection(config) {
  const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.username,
    password: config.password,
    database: config.database,
    ssl: config.ssl,
  });
  return new Promise((resolve, reject) => {
    return connection.connect(err => {
      if (err) {
        return reject(err);
      }
      return resolve(connection);
    });
  });
}
// create the database
function createSettingsTable(connection) {
  return new Promise((resolve, reject) => {
    return connection.query(`CREATE TABLE IF NOT EXISTS ${settingsTable} (\`name\` varchar(128) NOT NULL, \`value\` varchar(128) NOT NULL, PRIMARY KEY (\`name\`))`, err => {
      if (err) {
        return reject(err);
      }
      return resolve(connection);
    });
  });
}
// create the database
function updateVersionValue(connection, version) {
  const newVersion = version.replace('.sql', '');
  console.log('Updating to version: ', newVersion);
  return new Promise((resolve, reject) => {
    return connection.query(`REPLACE INTO \`${settingsTable}\` (\`name\`, \`value\`) VALUES ('version', ${connection.escape(newVersion)})`, err => {
      if (err) {
        return reject(err);
      }
      return resolve(connection);
    });
  });
}

module.exports = (config, version) => {
  return getConnection(config)
  .then(connection => createSettingsTable(connection, config.database))
  .then(connection => updateVersionValue(connection, version))
  .then(connection => connection.end());
};
