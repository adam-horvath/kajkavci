import { FC } from 'react';
import classNames from 'classnames';
import Spinner from 'react-bootstrap/Spinner';

import './AppLoader.scss';

export interface AppLoaderProps {
  show: boolean;
}

export const AppLoader: FC<AppLoaderProps> = ({ show = false }) => (
  <div
    className={classNames('AppLoader', {
      show,
    })}
  >
    <Spinner animation={'border'} />
  </div>
);
