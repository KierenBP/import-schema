const fs = require('fs');
const fsPromise = require('fs/promises');
const path = require('path');

const SKIP_FILES = ['node_modules', '.template.json', '.DS_Store'];

const currentTemplatePath = 'template';

function createProject(projectPath) {
  if (fs.existsSync(projectPath)) {
    return Promise.reject(new Error('Schema directory already exists'));
  }
  return fsPromise.mkdir(projectPath);
}

function createDirectoryContents(createLocation, templatePath) {
  return fsPromise.readdir(templatePath)
  .then(filesToCreate => Promise.all(filesToCreate.map(file => {
    const origFilePath = path.join(templatePath, file);

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    // skip files that should not be copied
    if (SKIP_FILES.indexOf(file) > -1) return Promise.resolve();

    if (stats.isFile()) {
      // read file content and transform it using template engine
      let contents = fs.readFileSync(origFilePath, 'utf8');
      // write file to destination folder
      const writePath = path.join(createLocation, file);
      return fsPromise.writeFile(writePath, contents, 'utf8');
    }

    if (stats.isDirectory()) {
      // create folder in destination folder
      fs.mkdirSync(path.join(createLocation, file));
      // copy files/folder inside current folder
      return createDirectoryContents(path.join(createLocation, file), path.join(templatePath, file));
    }
    return Promise.reject(new Error('Not a file or directory'));
  })));
}

module.exports = (passedLocation, command) => {
  const locationPath = `${passedLocation}/schema`;
  return createProject(locationPath)
  .then(() => createDirectoryContents(locationPath, currentTemplatePath))
  .then(() => command.log('Directory Created'))
  .catch(error => command.error(error));
};
