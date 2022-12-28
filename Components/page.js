import React, {useState, useEffect} from 'react';

//Hook for page size
export function useWindowSize() {
  const [width, setWidth] = useState(undefined);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return width;
}
