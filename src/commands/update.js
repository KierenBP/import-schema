const {Command, flags} = require('@oclif/command');

class InstallCommand extends Command {
  async run() {
    // const {flags} = this.parse(InstallCommand);
    // const name = flags.name || 'world';
  }
}

InstallCommand.description = `Update to latest schema in folder
...
Extra documentation goes here
`;

InstallCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
};

module.exports = InstallCommand;
