const { Command } = require('@oclif/command');
const createSchemaFolder = require('../tools/create-schema-folder');

class GenerateCommand extends Command {
    static args = [
        { name: 'location', required: false }
    ];

    async run () {
        const { args } = this.parse(GenerateCommand);
        const location = args.location || process.cwd();
        return createSchemaFolder(location, this);
    }
}

GenerateCommand.description = `Create schema directory
...
Extra documentation goes here
`;

module.exports = GenerateCommand;
