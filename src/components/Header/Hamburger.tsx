import { FC } from 'react';
import classNames from 'classnames';

import classes from './Hamburger.module.scss';

export interface HamburgerProps {
  open: boolean;
  onClick: VoidFunction;
}

export const Hamburger: FC<HamburgerProps> = ({ onClick, open }) => (
    <div className={classes.HamburgerContainer} onClick={onClick}>
      <div className={classNames(classes.Bar, { [classes.Bar1]: open })} />
      <div className={classNames(classes.Bar, { [classes.Bar2]: open })} />
      <div className={classNames(classes.Bar, { [classes.Bar3]: open })} />
    </div>
  );
