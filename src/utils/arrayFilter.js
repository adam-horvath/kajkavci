import get from 'lodash/get';
import requiredParam from './requiredParam';

const filter = (object, key, term) => {
  const value = get(object, key);

  if (value) {
    return value.toLowerCase().indexOf(term.toString().toLowerCase()) > -1;
  }

  return !term;
};

export default (
  collection = requiredParam('collection'),
  term = requiredParam('term'),
  filterKeys = requiredParam('filterKeys')
) => {
  return collection.filter((item) => {
    return filterKeys.reduce((result, value) => {
      return result || filter(item, value, term);
    }, false);
  });
};
