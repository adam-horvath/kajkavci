import qs from 'query-string';

export default (location) => {
  const search = qs.parse(location.search);
  return search.redirect ? atob(search.redirect) : null;
};
