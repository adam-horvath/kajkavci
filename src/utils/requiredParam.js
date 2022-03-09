export default (name) => {
  throw new Error(`Missing parameter${name ? ` ${name}.` : '.'}`);
};
