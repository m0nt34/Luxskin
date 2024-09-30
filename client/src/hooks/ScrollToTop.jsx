import { useEffect } from 'react';

function useScrollToTopOnMount() {
  useEffect(() => {

    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);
}

export default useScrollToTopOnMount;
