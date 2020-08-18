const {Command, flags} = require('@oclif/command');
const getServerConfig = require('../tools/get-server-config');
const installSchema = require('../tools/install');

let serverConfig;

class InstallCommand extends Command {

  static flags = {
    version: flags.string({char: 'v', default: null})
  }

  static args = [
    {name: 'location', required: false}
  ];

  async run() {
    const {args, flags} = this.parse(InstallCommand);

    return getServerConfig(this)
    .then(returnedServerConfig => {
      serverConfig = returnedServerConfig;
    })
    .then(() => installSchema(serverConfig, args.location, flags.version, this));
  }
}

InstallCommand.description = `Fresh import of entire schema
...
Extra documentation goes here
`;

module.exports = InstallCommand;
