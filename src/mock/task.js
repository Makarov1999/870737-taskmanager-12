import {getRandomIntNumber} from "../util.js";
import {getRandomBoolean} from "../util.js";
import {COLORS, TASK_DESCRIPTIONS, DEFAULT_HOURS_FOR_DATE} from "../const.js";

const generateTaskDescription = () => {
  const randIndex = getRandomIntNumber(0, TASK_DESCRIPTIONS.length - 1);
  return TASK_DESCRIPTIONS[randIndex];
};

const generateRandomColor = () => {
  const randIndex = getRandomIntNumber(0, COLORS.length - 1);
  return COLORS[randIndex];
};

const generateDate = () => {
  const isDate = getRandomBoolean();
  if (!isDate) {
    return null;
  }

  const maxDaysInterval = 7;
  const daysInterval = getRandomIntNumber(-maxDaysInterval, maxDaysInterval);
  const currentDate = new Date();
  currentDate.setHours(...DEFAULT_HOURS_FOR_DATE);
  currentDate.setDate(currentDate.getDate() + daysInterval);
  return new Date(currentDate);
};

const generateRepeatingDays = () => {
  return {
    mo: getRandomBoolean(),
    tu: false,
    we: getRandomBoolean(),
    th: false,
    fr: getRandomBoolean(),
    sa: false,
    su: false
  };
};

export const generateTask = () => {
  const dueDate = generateDate();
  const repeatingDays = dueDate === null
    ? generateRepeatingDays()
    : {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false

    };

  return {
    description: generateTaskDescription(),
    dueDate,
    repeatingDays,
    color: generateRandomColor(),
    isArchive: getRandomBoolean(),
    isFavorite: getRandomBoolean()
  };
};
