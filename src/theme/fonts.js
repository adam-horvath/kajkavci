import MerryWeatherFont from '../assets/fonts/merriweather.regular.ttf';
import MerryWeatherBoldFont from '../assets/fonts/merriweather.bold.ttf';

export const MerryWeather = {
  fontFamily: 'MerryWeather',
  fontWeight: 400,
  src: `
    local('MerryWeather'),
    local('MerryWeather-Regular'),
    url(${MerryWeatherFont}) format('woff2')
  `,
};

export const MerryWeatherBold = {
  fontFamily: 'MerryWeather',
  fontWeight: 700,
  src: `
    local('MerryWeather'),
    local('MerryWeather-Bold'),
    url(${MerryWeatherBoldFont}) format('woff2')
  `,
};

