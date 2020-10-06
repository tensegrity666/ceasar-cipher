[Link to task](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/TASKS.md)

## [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
CLI-tool, based on Commander.js for encoding and decoding text messages.

- - -

- Clone repo (via SSH)<br>
`$ git clone git@github.com:tensegrity666/ceasar-cipher.git`

- then checkout to origin/dev:<br>
`$ git fetch origin`<br>
`$ git checkout -b dev origin/dev`

- - -

- Install<br>
`$ npm i`

- Run example<br>
`$ npm run example`

- Watch info<br>
`$ npm run help`
- - -



## Tool accept 5 options:
- -h, --help: _info about options_;
- -s, --shift: _shift_ (__must be a NUMBER, required option__);
- -i, --input: _path to input file_;
- -o, --output: _path to output file_;
- -a, --action: encode/decode (__case insensitive, required option__)


## Usage example:
- from __root of repo__:<br>
`node src/app -s 5 --input test.txt -o out.txt --action encode`<br>

- from __/src__:<br>
`$ node app -s 1 -a encode`<br>
`$ node app --shift 1 --action decode`<br>
`$ node app -s 2 -i example.txt -a decode`<br>
`$ node app -s 22 -i example.txt -a encode`<br>
`$ node app -s 14 --input example.txt --output test.txt -a encode`<br>

__stop execution of app:__ `control + C`
