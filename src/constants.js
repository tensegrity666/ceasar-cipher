const actions = ['encode', 'decode'];

const messages = {
  actionRequired: ' Action ("encode" or "decode") and Shift (number) are reqired options! \n',
  invalidParam: ' Invalid parameter, shift must be a number. \n',
  encriptMode: ' The application is running in encryption mode. \n',
  decriptMode: '\x1b[32m The application is running in decryption mode. \n',
  information: ' Press "Control + C" to complete. \n',
};

const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');

module.exports = { actions, messages, abc };
