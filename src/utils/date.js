export const getDate = (language, t, year, month, day) => {
  return language.toLowerCase() === 'hu'
    ? year + '. ' + t(month) + ' ' + day + '.'
    : day + '. ' + t(month) + ' ' + year + '.';
};
