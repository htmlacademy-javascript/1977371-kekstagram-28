const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    // eslint-disable-next-line no-undef
    let currentValue = getRandomInteger(min, max);

    while (previousValues.includes(currentValue)) {
      // eslint-disable-next-line no-undef
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);

function createRandomUrlFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    // eslint-disable-next-line no-undef
    let currentValue = getRandomInteger(min, max);

    while (previousValues.includes(currentValue)) {
      // eslint-disable-next-line no-undef
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoUrl = createRandomUrlFromRangeGenerator(1, 25);

// description, строка — описание фотографии. Описание придумайте самостоятельно.
const DESCRIPTION = [
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
  'Станислав',
  'Евгений',
];

const randomFotoDescription = () => {
  const randomIdIndex = generatePhotoId.shift();
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
    const comment = randomFotoDescription();
    comments.push(comment);
  }
  return comments;
};

const randomFoto = () => {
  const randomUrlIndex = generatePhotoUrl.shift();
  const description = DESCRIPTION[getRandomPositiveInteger(0, 4)];
  const likes = getRandomIntInc(15, 200);

  return {
    id: randomUrlIndex,
    url: `photos/${randomUrlIndex}.jpg `,
    likes,
    description,
    comments: createComments(getRandomPositiveInteger(1, 2)),
  };
};

// eslint-disable-next-line no-unused-vars
const createFotos = (count) => Array.from({length: count}, randomFoto);
