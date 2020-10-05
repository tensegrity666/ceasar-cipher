- Clone repo
`$ git clone git@github.com:tensegrity666/x-check-app.git`

- then checkout to origin/dev:
`$ git fetch origin`
`$ git checkout -b dev origin/dev`

- Install
`$ npm i`

Tool accept 5 options:
- --help: _info about options_;
- -s, --shift: _shift_ (__must be a NUMBER__);
- -i, --input: _path to input file_;
- -o, --output: _path to output file_;
- -a, --action: encode/decode (encode by default)

### Usage example:
`node app -s 5 --input test.txt -o out.txt --action encode`<br>
`node app --help`
