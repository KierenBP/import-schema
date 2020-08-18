const fs = require('fs/promises');
const inquirer = require('inquirer');
const Listr = require('listr');

const ignoreFiles = require('./ignore-files');

const dirSchema = ['structure'];

let location;

const tasks = new Listr([
  {
    title: 'Checking folder matches directory schema',
    task: async () => {
      let fileArr = await fs.readdir(location);
      fileArr = ignoreFiles(fileArr);
      const filteredArr = fileArr.filter(x => !dirSchema.includes(x));
      return filteredArr.length === 0 ? Promise.resolve() : Promise.reject(new Error('Folder doesn\'t match'));
    },
  },
]);

module.exports = (passedLocation, command) => {
  return inquirer.prompt([
    {
      name: 'location',
      message: 'Location of schema folder',
      default: passedLocation || '',
    },
  ])
  .then(obj => {
    location = obj.location;
  })
  .then(() => tasks.run())
  .then(() => location)
  .catch(error => command.error(error));
};
