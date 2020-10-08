/* eslint-disable no-bitwise */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const fileValidation = (file) => {
  if (file !== null) {
    fs.access(file, fs.constants.F_OK | fs.constants.W_OK | fs.constants.R_OK, (err) => {
      if (err) {
        process.stderr.write(chalk.bgYellowBright.blackBright(` File: ${file} \n does not exist yet or not readable/writable. Please, try again. \n`));
        process.exit(-1);
      }
    });
  }

  return file;
};

const isCapitalized = (str, index) => str[index] === str[index].toUpperCase();

const pathResolver = (file) => ((file !== undefined)
  ? path.resolve(file)
  : null);

module.exports = { fileValidation, isCapitalized, pathResolver };
