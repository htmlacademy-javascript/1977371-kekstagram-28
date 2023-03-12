// eslint-disable-next-line no-unused-vars
const PHOTO_CARD = 25;
const randomNumber = {
  randomStartNumber: 1, // От какого числа генерировать
  randomEndNumber: 25, // До какого числа генерировать
};


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.
const getArrayId = [];
for (let i = randomNumber.randomStartNumber; i <= randomNumber.randomEndNumber; i++) {
  getArrayId.push(i);
}

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
const getArrayUrl = [];
for (let i = randomNumber.randomStartNumber; i <= randomNumber.randomEndNumber; i++) {
  getArrayUrl.push(i);
}

// description, строка — описание фотографии. Описание придумайте самостоятельно.
const DESCRIPTIONS = [
  'Солнечный день',
  'Хорошее настроение',
  'Счастливая улыбка',
  'Счастливые будни веселого человека',
  'Радость и только',
];

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

function getRandomIntInc(min, max) {
  const a = Math.ceil(min);
  const b = Math.floor(max);
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:
const Message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// имена авторов комментариев
const Names = [
  'Иван',
  'Константин',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Лолита',
  'Бергамонт',
];


const randomFotoDescriptions = () => {
  const randomIdIndex = getArrayId.shift();
  const randomNamesIndex = getRandomPositiveInteger(0, Names.length - 1);
  const randomMessageIndex = getRandomPositiveInteger(0, Message.length - 1);

  return {
    id: randomIdIndex,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: Message[randomMessageIndex],
    name: Names[randomNamesIndex],
  };
};

const createComments = (number) => {
  const comments = [];
  for (let i = 0; i < number; i++) {
    const comment = randomFotoDescriptions();
    comments.push(comment);
  }
  return comments;
};


const randomFoto = () => {
  const randomUrlIndex = getArrayUrl.shift();
  const descriptions = DESCRIPTIONS[getRandomPositiveInteger(0, 4)];
  const likes = getRandomIntInc(15, 200);

  return {
    id: randomUrlIndex,
    url: `photos/${randomUrlIndex}.jpg `,
    likes,
    descriptions,
    comments: createComments(getRandomPositiveInteger(1, 2)),
  };
};

const createFotos = () => Array.from({length: PHOTO_CARD}, randomFoto);
// eslint-disable-next-line no-console
console.log(createFotos());
// eslint-disable-next-line no-console
console.log(randomFotoDescriptions());