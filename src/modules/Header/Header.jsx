import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';

const Header = ({ pages, history }) => {
  const { t } = useTranslation();

  const getPath = (linkName) => {
    return pages.filter((page) => page.linkName).find((page) => page.linkName === linkName).path;
  };

  const onLogoClick = () => {
    history.push(getPath(t('menu_item_home')));
  };

  return (
    <>
      <MobileHeader onLogoClick={onLogoClick} getPath={getPath} />
      <DesktopHeader getPath={getPath} onLogoClick={onLogoClick} />
    </>
  );
};

Header.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default withRouter(Header);
