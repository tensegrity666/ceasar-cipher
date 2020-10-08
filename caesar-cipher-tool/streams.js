const fs = require('fs');
const { Transform } = require('stream');
const { fileValidation } = require('./helpers');

const streamIn = (filename) => ((filename !== null)
  ? fs.createReadStream(fileValidation(filename), { encoding: 'utf8' })
  : process.stdin);

const streamOut = (filename) => ((filename !== null)
  ? fs.createWriteStream(fileValidation(filename), { encoding: 'utf8', flags: 'a' })
  : process.stdout);

const streamTransform = (cb, shift) => new Transform({
  transform: (chunk, encoding, callback) => {
    try {
      const data = cb(chunk.toString('utf8'), shift);
      callback(null, data);
    } catch (error) {
      callback(error);
    }
  },
});

module.exports = { streamIn, streamOut, streamTransform };
