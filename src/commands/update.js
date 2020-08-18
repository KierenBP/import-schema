const { Command, flags } = require('@oclif/command');
const getServerConfig = require('../tools/get-server-config');
const updateSchema = require('../tools/update');

let serverConfig;

class UpdateCommand extends Command {

  static flags = {
    version: flags.string({ char: 'v', default: null })
  }

  static args = [
    { name: 'location', required: false }
  ];

  async run () {
    const { args, flags } = this.parse(UpdateCommand);

    return getServerConfig(this)
      .then(returnedServerConfig => {
        serverConfig = returnedServerConfig;
      })
      .then(() => updateSchema(serverConfig, args.location, flags.version, this));
  }
}

UpdateCommand.description = `Update schema to passed version
...
Extra documentation goes here
`;

module.exports = UpdateCommand;
