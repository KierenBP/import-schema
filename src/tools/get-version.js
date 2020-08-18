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
function getVersionFromTable(connection) {
  return new Promise((resolve, reject) => {
    return connection.query(`SELECT value FROM ${settingsTable} WHERE \`name\` = 'version'`, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
}

module.exports = config => {
  let connection;
  let currentVersion;
  return getConnection(config)
  .then(passedConnection => {
    connection = passedConnection;
    return getVersionFromTable(connection, config.database);
  })
  .then(returnedValue => {
    if (returnedValue.length === 1) {
      currentVersion = returnedValue[0].value;
    }
  })
  .then(() => connection.end())
  .then(() => currentVersion);
};
