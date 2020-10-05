/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */

import { abc, isCapitalized } from './constants.js';

const lorem = 'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы). Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку[1]. Распространился в 1970-х годах из-за трафаретов компании Letraset, a затем — из-за того, что служил семплом в программе PageMaker. Испорченный текст, вероятно, происходит от его издания в Loeb Classical Library 1914 года, в котором слово dolorem разбито переносом так, что страница 36 начинается с lorem ipsum… (do- осталось на предыдущей)';

const caesarCipher = (string, number) => {
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

// eslint-disable-next-line no-console
console.log(caesarCipher(lorem, 1));
