const { Command } = require('commander');

const program = new Command().storeOptionsAsProperties(true);

program
  .version('0.0.1')
  .requiredOption('-s, --shift <number>', 'enter shift')
  .option('-i, --input [path]', 'input file path or name')
  .option('-o, --output [path]', 'output file path or name')
  .requiredOption('-a, --action <type>', 'action ("encode" or "decode")')
  .parse(process.argv);

module.exports = program;
