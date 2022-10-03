import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

import { breakpoints } from 'constants/Constants';

export enum ScreenMode {
  MobileLandscape = 'mobile_landscape',
  Mobile = 'mobile',
  TabletLandscape = 'tablet_landscape',
  Tablet = 'tablet',
}

export interface SizeInfo {
  width: number;
  height: number;
  underSm: boolean;
  underMd: boolean;
  underLg: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  screenMode: ScreenMode;
}

export function useWindowResize(task?: VoidFunction) {
  const setScreenMode = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 576) {
      return ScreenMode.Mobile;
    }
    if (screenWidth <= 992) {
      return ScreenMode.MobileLandscape;
    }
    if (screenWidth <= 1200) {
      return ScreenMode.Tablet;
    }
    return ScreenMode.TabletLandscape;
  };

  const [windowSize, setWindowSize] = useState<SizeInfo>({
    width: 0,
    height: 0,
    underSm: window.innerWidth < breakpoints.sm,
    underMd: window.innerWidth < breakpoints.md,
    underLg: window.innerWidth < breakpoints.lg,
    sm: window.innerWidth < breakpoints.md && window.innerWidth >= breakpoints.sm,
    md: window.innerWidth < breakpoints.lg && window.innerWidth >= breakpoints.md,
    lg: window.innerWidth < breakpoints.xl && window.innerWidth >= breakpoints.lg,
    xl: window.innerWidth >= breakpoints.xl,
    screenMode: setScreenMode(),
  });

  useEffect(() => {
    const handleResize = throttle(() => {
      if (task) {
        task();
      }
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        underSm: window.innerWidth < breakpoints.sm,
        underMd: window.innerWidth < breakpoints.md,
        underLg: window.innerWidth < breakpoints.lg,
        sm: window.innerWidth < breakpoints.md && window.innerWidth >= breakpoints.sm,
        md: window.innerWidth < breakpoints.lg && window.innerWidth >= breakpoints.md,
        lg: window.innerWidth < breakpoints.xl && window.innerWidth >= breakpoints.lg,
        xl: window.innerWidth >= breakpoints.xl,
        screenMode: setScreenMode(),
      });
    }, 150);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowResize;
