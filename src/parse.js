const { Command } = require('commander');

const program = new Command().storeOptionsAsProperties(true);

program
  .version('0.0.1')
  .option('-s, --shift <number>', 'Enter shift', 0)
  .option('-i, --input [path]', 'Input file', 'input.txt')
  .option('-o, --output [path]', 'Output file', 'output.txt')
  .option('-a, --action <type>', 'Action (encode or decode)', 'encode')
  .parse(process.argv);

module.exports = program;
