const {Command} = require('@oclif/command');
const getVersion = require('../tools/get-version');
const getServerConfig = require('../tools/get-server-config');

class VersionCommand extends Command {
  async run() {
    let serverConfig;
    return getServerConfig(this)
    .then(returnedServerConfig => {
      serverConfig = returnedServerConfig;
    })
    .then(() => getVersion(serverConfig))
    .then(version => this.log('The current version is:', version));
  }
}

VersionCommand.description = `Get Current Version From Database
...
Extra documentation goes here
`;

module.exports = VersionCommand;
