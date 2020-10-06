/* eslint-disable no-restricted-globals */

const path = require('path');
const fs = require('fs');
const { pipeline, Transform } = require('stream');
const chalk = require('chalk');

const ceasarCipher = require('./ceasar-cipher');
const program = require('./parser');
const { actions, messages } = require('./constants');
const { fileValidation } = require('./helpers');

const app = (inputFile, num, outputFile, actionWithString) => {
  const { log } = console;
  let shiftNum = +num;
  const normalizedAction = actionWithString.toString().toLowerCase();

  const {
    actionRequired, invalidParam, encriptMode, decriptMode, information,
  } = messages;
  const [encode, decode] = actions;

  const readFromFile = (inputFile !== undefined)
    ? path.resolve(inputFile) : null;

  const writeToFile = (outputFile !== undefined)
    ? path.resolve(__dirname, `./${outputFile}`) : null;

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
    log(chalk.blue(information));
  }

  if (normalizedAction === encode) {
    log(chalk.magenta(encriptMode));
    log(chalk.blue(information));
  }

  const streamIn = readFromFile !== null ? fs.createReadStream(fileValidation(readFromFile), { encoding: 'utf8' }) : process.stdin;

  const streamOut = writeToFile !== null ? fs.createWriteStream(fileValidation(writeToFile), { encoding: 'utf8', flags: 'a' }) : process.stdout;

  const streamTransform = new Transform({
    transform: (chunk, encoding, callback) => {
      try {
        const data = ceasarCipher(chunk.toString('utf8'), shiftNum);
        callback(null, data);
      } catch (error) {
        callback(error);
      }
    },
  });

  return pipeline(
    streamIn,
    streamTransform,
    streamOut,
    (error) => {
      if (error) {
        process.stderr.write(`Some error: ${error.ENOENT} \n`);
        process.exit(-1);
      }
    },
  );
};

const {
  input, shift, output, action,
} = program;

app(input, shift, output, action);
