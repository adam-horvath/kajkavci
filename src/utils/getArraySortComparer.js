import get from 'lodash/get';

export default (arr, prop) => {
  if (arr.length && get(arr[0], prop) && get(arr[0], prop).localeCompare) {
    return (a, b) => get(a, prop).localeCompare(get(b, prop));
  }
  return prop;
};
