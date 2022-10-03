import i18n from 'i18next';

import { Calendar } from 'models';

export const getDate = (calendar: Calendar) => {
  const { month, day } = calendar;
  return i18n.language === 'hr' ? `${day} ${i18n.t(`month.${month}`)}` : `${i18n.t(`month.${month}`)} ${day}`;
};
