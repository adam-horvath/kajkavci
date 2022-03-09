export default (translations, idName, id) => {
  return Object.values(translations).map((item) => {
    return {
      ...item,
      [idName]: id,
    };
  });
};
