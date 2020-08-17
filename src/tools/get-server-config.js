const inquirer = require('inquirer');
const mysql = require('mysql2');
const Listr = require('listr');

let config;
const tasks = new Listr([
  {
    title: 'Checking MySQL connection',
    task: () => {
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
          connection.end();
          return resolve();
        });
      });
    },
  },
]);

module.exports = command => {
  return inquirer.prompt([
    {
      name: 'host',
      message: 'Server Host',
      default: 'localhost',
    },
    {
      name: 'port',
      type: 'number',
      message: 'Server Port',
      default: '3306',
    },
    {
      name: 'username',
      message: 'Server Username',
      default: 'root',
    },
    {
      name: 'password',
      type: 'password',
      message: 'Server Password',
      default: 'root',
    },
    {
      name: 'database',
      message: 'Server Database',
    },
    {
      name: 'ssl',
      message: 'SSL?',
      type: 'confirm',
      default: false,
    },
  ])
  .then(x => {
    config = x;
  })
  .then(x => tasks.run(x))
  .then(() => config)
  .catch(error => command.error(error));
};
