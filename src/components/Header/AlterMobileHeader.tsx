import { FC, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import { SideBar } from './SideBar';
import './MobileHeader.overrides.scss';

export const AlterMobileHeader: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => setOpen(true),
  });

  return (
    <div id={'Alter'}>
      <div
        {...handlers}
        className={'SwipeArea'}
        style={{
          float: 'left',
          position: 'fixed',
          width: '33%',
          height: '100%',
        }}
      />
      <SideBar
        isOpen={isOpen}
        onStateChange={(s) => setOpen(s.isOpen)}
        pageWrapId={'MainContainer'}
        outerContainerId={'Alter'}
      />
    </div>
  );
};
