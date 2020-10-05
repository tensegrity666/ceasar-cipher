/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */

const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
const isCapitalized = (str, index) => str[index] === str[index].toUpperCase();

const ceasarCipher = (string, number) => {
  const input = string.toLowerCase();
  const output = [];

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    const index = abc.indexOf(letter) + (number % 26);

    if (abc.indexOf(letter) !== -1) {
      isCapitalized(string, i)
        ? output.push(abc[index].toUpperCase())
        : output.push(abc[index]);
    } else {
      output.push(string[i]);
    }
  }

  return output.join('');
};

module.exports = ceasarCipher;
