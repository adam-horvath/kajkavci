import { FC, useState } from 'react';
import { Dropdown } from 'react-bootstrap';

import HuFlag from 'assets/images/hu-flag.png';
import HrFlag from 'assets/images/hr-flag.png';
import { Language, SupportedLanguage } from 'models';
import { getLanguage } from 'i18n';
import { useTranslation } from '../Hooks/useTranslation';
import classes from './LanguageSelect.module.scss';

const languages: Language[] = [
  {
    flag: HuFlag,
    code: SupportedLanguage.HU,
    label: 'Magyar',
  },
  {
    flag: HrFlag,
    code: SupportedLanguage.HR,
    label: 'Hrvatski',
  },
];

export const LanguageSelect: FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<SupportedLanguage>(getLanguage());

  const handleClick = async (code: SupportedLanguage) => {
    i18n.changeLanguage(code);
    setLanguage(code);
    localStorage.setItem('lang', code);
  };

  const getSelectedLanguage = (code?: SupportedLanguage): Language =>
    languages.find((lang) => lang.code === code) || languages[0];

  const getRow = (code: SupportedLanguage) => {
    const language = getSelectedLanguage(code);
    return (
      <Dropdown.Item key={code} className={'SubMenuItem'} onClick={() => handleClick(code)}>
        <div className={'py-3'}>
          <img src={language.flag} className={classes.LanguageFlag} alt={language.label} />
          <span className={classes.LanguageText}>{language.label}</span>
        </div>
      </Dropdown.Item>
    );
  };

  return (
    <Dropdown className={'mx-2'}>
      <Dropdown.Toggle className={'MenuItem'}>
        <img src={getSelectedLanguage(language).flag} className={classes.LanguageFlag} alt={''} />
        <span className={classes.LanguageText}>{getSelectedLanguage(language).label}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>{languages.map((lang) => getRow(lang.code))}</Dropdown.Menu>
    </Dropdown>
  );
};
