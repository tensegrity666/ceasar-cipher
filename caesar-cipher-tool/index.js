const program = require('./parser');
const app = require('./app');

const {
  input, shift, output, action,
} = program;

app(input, shift, output, action);
