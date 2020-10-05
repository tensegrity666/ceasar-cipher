const path = require('path');
const fs = require('fs');
const { pipeline } = require('stream');

const ceasarCipher = require('./ceasar-cipher');
const program = require('./parse');

const {
  input, shift, output, action,
} = program;

const readFromFile = typeof input === 'string' ? path.resolve(input) : null;
const writeToFile = typeof output === 'string' ? path.resolve(output) : null;

const app = (stringToEncode, shiftNumber, outputFilePath, actionWithString) => {
  const dataPath = path.resolve(__dirname, `./${outputFilePath}`);

  if (actionWithString.toLowerCase() === 'decode') {
    shift = -shift;
  }

  if (isNaN(shiftNumber)) {
    process.stderr.write('Invalid parameter, shift must be a number.');
    process.exit(-1);
  }

  const encodedData = ceasarCipher(stringToEncode, shift);

  const streamIn = readFromFile !== null ? fs.createReadStream(readFromFile, 'utf8') : process.stdin;

  const streamOut = writeToFile !== null ? fs.createWriteStream(writeToFile, 'utf8') : process.stdout;

  return pipeline(
    streamIn,
    streamOut,
    (error) => {
      if (error) {
        console.log('error', error);
      } else {
        console.log(`${action} from ${input}, saved to ${output}`);
      }
    },
  );
};

app(input, shift, output, action);
