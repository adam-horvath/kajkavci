import { useLayoutEffect } from 'react';
import throttle from 'lodash/throttle';

const isBrowser = typeof window !== `undefined`;

function useScrollListener(effect, wait = 250) {
  const handleScroll = throttle(effect, wait);

  useLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
}

export default useScrollListener;
