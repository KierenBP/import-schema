const ignoreFiles = ['.DS_Store'];

module.exports = arr => {
  return arr.filter(x => !ignoreFiles.includes(x));
};
