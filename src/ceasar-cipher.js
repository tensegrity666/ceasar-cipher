/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */

const { abc } = require('./constants');
const { isCapitalized } = require('./helpers');

const ceasarCipher = (string, number) => {
  const input = string.toLowerCase();
  const output = [];

  const inputArr = input.split('');

  inputArr.forEach((letter, i) => {
    let index = abc.indexOf(letter) + (number % abc.length);
    if (index > (abc.length - 1)) index -= abc.length;
    if (index < 0) index += abc.length;

    if (abc.indexOf(letter) !== -1) {
      isCapitalized(string, i)
        ? output.push(abc[index].toUpperCase())
        : output.push(abc[index]);
    } else {
      output.push(string[i]);
    }
  });

  return output.join('');
};

module.exports = ceasarCipher;
