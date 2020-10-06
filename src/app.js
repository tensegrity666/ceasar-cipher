/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */

const path = require('path');
const fs = require('fs');
const { pipeline, Transform } = require('stream');
const chalk = require('chalk');

const ceasarCipher = require('./ceasar-cipher');
const program = require('./parser');

const {
  input, shift, output, action,
} = program;

const actions = ['encode', 'decode'];

const app = (inputFile, num, outputFile, actionWithString) => {
  let shiftNum = +num;
  const normalizedAction = actionWithString.toString().toLowerCase();

  const readFromFile = (inputFile !== undefined)
    ? path.resolve(inputFile) : null;

  const writeToFile = (outputFile !== undefined)
    ? path.resolve(__dirname, `./${outputFile}`) : null;

  if (actionWithString === undefined || typeof actionWithString !== 'string') {
    process.stderr.write(chalk.red('Action ("encode" or "decode") is reqired! \n'));
    process.exit(-1);
  }

  if (!actions.includes(normalizedAction)) {
    process.stderr.write(chalk.red('Action ("encode" or "decode") is reqired! \n'));
    process.exit(-1);
  }

  if (isNaN(shiftNum)) {
    process.stderr.write(chalk.red('Invalid parameter, shift must be a number. \n'));
    process.exit(-1);
  }

  const fileValidation = (file) => {
    if (file !== null) {
      fs.access(file, fs.F_OK, (err) => {
        if (err) {
          process.stderr.write(`File: ${file} does not exist. \n`);
          process.exit(-1);
        }
      });
    }

    return file;
  };

  if (normalizedAction === 'decode') {
    shiftNum = -shiftNum;
    console.log('\x1b[32m', 'The application is running in decryption mode. \n');
  }

  if (normalizedAction === 'encode') {
    console.log(chalk.magenta(' The application is running in encryption mode. \n'));
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
      if (error) process.stderr.write(`Some error: ${error.ENOENT} \n`);
    },
  );
};

app(input, shift, output, action);
