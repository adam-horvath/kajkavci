import Cookies from 'js-cookie';
import Settings from '../env';

export const detectLanguage = (pathname) =>
  pathname.includes('/hr') ? 'HR' : Cookies.get(Settings.I18NEXT) ? Cookies.get(Settings.I18NEXT).toUpperCase() : 'HU';

