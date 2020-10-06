[Link to task](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/TASKS.md)<br>
#### [Deadline: 23:59 06.10.2020](https://discord.com/channels/755676888680366081/755860337059823667/763103442054545411)

## [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
CLI-tool, based on Commander.js for encoding and decoding text messages.

### Implementation features:
A shift of 1 means that the current letter will be replaced with the next letter in the alphabet.<br>
A shift by a __negative number is possible__, with -1 the letter will be replaced by the letter in front of it.<br>
With a shift of more than __26__ characters (the length of the Latin alphabet), the characters will be taken from the beginning of the alphabet (___27__ - "__a__", __28__ - "__b__" and so on).<br>

#### Example:<br>
__Original text:__<br>
_`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`_<br>
__Encripted with shift 1:__<br>
_`Mpsfn jqtvn epmps tju bnfu, dpotfdufuvs bejqjtdjoh fmju, tfe ep fjvtnpe ufnqps jodjejevou vu mbcpsf fu epmpsf nbhob bmjrvb.`_<br>
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
__Entry point: app.js__<br>
<br>
- from __root of repo__:<br>
`$ node src/app -s 5 --input test.txt -o out.txt --action encode`<br>

- from __/src__:<br>
`$ node app -s 1 -a encode`<br>
`$ node app --shift 1 --action decode`<br>
`$ node app -s 2 -i example.txt -a decode`<br>
`$ node app -s 22 -i example.txt -a encode`<br>
`$ node app -s 14 --input example.txt --output test.txt -a encode`<br>

__stop execution of app:__ `control + C`
