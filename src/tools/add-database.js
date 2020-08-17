const mysql = require('mysql2');

// create the connection
function getConnection(config) {
  const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.username,
    password: config.password,
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
function createDatabase(connection, databaseName) {
  return new Promise((resolve, reject) => {
    return connection.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`, err => {
      if (err) {
        return reject(err);
      }
      return resolve(connection);
    });
  });
}

module.exports = config => {
  return getConnection(config)
  .then(connection => createDatabase(connection, config.database))
  .then(connection => connection.end());
};
