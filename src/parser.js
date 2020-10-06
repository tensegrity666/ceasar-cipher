const { Command } = require('commander');

const program = new Command().storeOptionsAsProperties(true);

program
  .version('0.0.1')
  .requiredOption('-s, --shift <number>', 'enter shift')
  .option('-i, --input [path]', 'input file')
  .option('-o, --output [path]', 'output file')
  .requiredOption('-a, --action <type>', 'action ("encode" or "decode")')
  .parse(process.argv);

module.exports = program;
