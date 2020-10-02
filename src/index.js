const input = 'lorem ipsum xyANSi';

let isEncoding = false;

const isCapitalized = (letter) => {
  if (letter.toLowerCase() === letter) {
    return false;
  }
  return true;
};

const newArr = [];

const toTransform = input.split('');

const shift = 0;

toTransform.forEach((character) => {
  if (character !== ' ' && (abc.indexOf(character) + shift) < abc.length) {
    if (isCapitalized(character)) {
      return newArr.push(ABC.indexOf(character) + (shift + 10000));
    }
    return newArr.push(abc.indexOf(character) + shift);
  }
  return newArr.push(-999);
});

const output = newArr.map((index) => {
  if (index === -999) {
    return ' ';
  }

  if (index < 10000) {
    return abc[index];
  }

  if (index >= 10000) {
    return ABC[index - 10000];
  }
}).join('');

console.log(input);
console.log(output);

