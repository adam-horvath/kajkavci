export const intersection = (firstArray = [], secondArray = []) => {
  return [firstArray, secondArray].reduce((a, b) => a.filter((c) => b.includes(c)));
};
