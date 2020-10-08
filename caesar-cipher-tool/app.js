/* eslint-disable no-restricted-globals */

const { pipeline } = require('stream');
const chalk = require('chalk');

const ceasarCipher = require('./ceasar-cipher');
const { streamIn, streamOut, streamTransform } = require('./streams');
const { actions, messages } = require('./constants');
const { pathResolver } = require('./helpers');

const app = (inputFile, num, outputFile, actionWithString) => {
  const { log } = console;
  let shiftNum = +num;
  const normalizedAction = actionWithString.toString().toLowerCase();

  const {
    actionRequired, invalidParam, encriptMode, decriptMode,
  } = messages;
  const [encode, decode] = actions;

  const readFromFile = pathResolver(inputFile);
  const writeToFile = pathResolver(outputFile);

  if (actionWithString === undefined || typeof actionWithString !== 'string') {
    process.stderr.write(chalk.red(actionRequired));
    process.exit(-1);
  }

  if (!actions.includes(normalizedAction)) {
    process.stderr.write(chalk.red(actionRequired));
    process.exit(-1);
  }

  if (shiftNum === undefined) {
    process.stderr.write(chalk.red(invalidParam));
    process.exit(-1);
  }

  if (isNaN(shiftNum)) {
    process.stderr.write(chalk.red(invalidParam));
    process.exit(-1);
  }

  if (normalizedAction === decode) {
    shiftNum = -shiftNum;
    log(decriptMode);
  }

  if (normalizedAction === encode) {
    log(chalk.magenta(encriptMode));
  }

  return pipeline(
    streamIn(readFromFile),
    streamTransform(ceasarCipher, shiftNum),
    streamOut(writeToFile),
    (error) => {
      if (error) {
        process.stderr.write(`Some error: ${error.ENOENT} \n`);
        process.exit(-1);
      }
    },
  );
};

module.exports = app;
