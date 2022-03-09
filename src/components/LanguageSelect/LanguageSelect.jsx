import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Cookies from 'js-cookie';

import HuFlag from 'assets/images/hu-flag.png';
import HrFlag from 'assets/images/hr-flag.png';

const languages = [
  {
    flag: HuFlag,
    code: 'hu',
    label: 'Magyar',
  },
  {
    flag: HrFlag,
    code: 'hr',
    label: 'Hrvatski',
  },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      '& .MuiInput-underline:before, & .MuiInput-underline:after, & .MuiSelect-icon': {
        display: 'none',
      },
      '& .MuiSelect-select': {
        minWidth: 'unset',
        paddingRight: 0,
        display: 'flex',
        '& .langTextContainer': {
          display: 'none',
        },
      },
      '& .MuiSelect-select:focus': {
        backgroundColor: 'transparent',
      },
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    langText: {
      marginLeft: theme.spacing(1),
    },
    flag: {
      width: 40,
      height: 25,
    },
    MenuItem: {
      '&.Mui-selected': {
        backgroundColor: theme.palette.whiteHover,
      }
    }
  })
);

const LanguageSelect = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [value, setValue] = React.useState(i18n.language);
  const history = useHistory();

  const handleChange = async (event) => {
    const lang = event.target.value;
    Cookies.set('i18next', lang);
    history.push(`/${lang}`);
    i18n.changeLanguage(lang === 'gb' ? 'en' : lang);
    setValue(lang);
  };

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <Select value={(value || '').toLowerCase().substring(0, 2)} onChange={handleChange}>
          {languages.map((language) => (
            <MenuItem value={language.code} key={language.code} className={classes.MenuItem}>
              <img src={language.flag} className={classes.flag} />
              <span className={classNames('langTextContainer', classes.langText)}>{language.label}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default LanguageSelect;
