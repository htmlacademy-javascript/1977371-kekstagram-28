import {getRandomPositiveInteger, createRandomUniqId, getRandomIntInc} from './util.js';
const PHOTO_CARD = 25;

// description, строка — описание фотографии. Описание придумайте самостоятельно.
const DESCRIPTIONS = [
  'Солнечный день',
  'Хорошее настроение',
  'Счастливая улыбка',
  'Счастливые будни веселого человека',
  'Радость и только',
];

// Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:
const MESSEGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// имена авторов комментариев
const NAMES = [
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
  const randomIdIndex = createRandomUniqId(1, 25);
  const randomNamesIndex = getRandomPositiveInteger(0, NAMES.length - 1);
  const randomMessageIndex = getRandomPositiveInteger(0, MESSEGES.length - 1);

  return {
    id: randomIdIndex(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: MESSEGES[randomMessageIndex],
    name: NAMES[randomNamesIndex],
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
  const randomIdIndex = createRandomUniqId(1, 25);
  const randomUrlIndex = createRandomUniqId(1, 25);
  const descriptions = DESCRIPTIONS[getRandomPositiveInteger(0, 4)];
  const likes = getRandomIntInc(15, 200);

  return {
    id: randomIdIndex(),
    url: randomUrlIndex(),
    likes,
    descriptions,
    comments: createComments(getRandomPositiveInteger(1, 2)),
  };
};

const createFotos = () => Array.from({length: PHOTO_CARD}, randomFoto);

// module5-task1
export {createFotos, randomFotoDescriptions};
