// Функция проверки длины строки.
const checkLength = (string, number) => string.Length <= number;
checkLength('Hello', 10);

// Функция для проверки, является ли строка палиндромом.
const isPalindrom = (string) => {
  const tempString = string.toLowerCase();
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

// Функция? которая принимает строку, извлекает содержащейся в ней цифры от 0 до 9 и озвращает их в виде целого положительного числа. Если в строке нет цифры, то возвращает NaN
const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i),10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

// Функция, принимающая три параметра: исходную строку, мин. длину и строку с добавочными символами - и возвращает исходную строку, дополненную указанными символами до заданной длины.
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
