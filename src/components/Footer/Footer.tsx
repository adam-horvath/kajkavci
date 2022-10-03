import { FC } from 'react';

import logo from 'assets/images/logo.png';
import './Footer.scss';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={'Footer'}>
      <div className={'ScrollToTop'} onClick={scrollToTop}>
        <i className={'bi bi-chevron-up'} />
      </div>
      <img className={'Logo mx-3'} src={logo} alt={'Kajkavci logo'} />
      <div className={'FooterText'}>&copy; Kajkavci</div>
    </footer>
  );
};
