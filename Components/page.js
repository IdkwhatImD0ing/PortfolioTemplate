import React, {createContext, useState, useEffect} from 'react';

export const WidthContext = createContext();
//Hook for page size
export function WidthContextProvider({children}) {
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
  return (
    <WidthContext.Provider value={width}>{children}</WidthContext.Provider>
  );
}

// Hook for scroll y
export function useScrollY() {
  const [scrollY, setScrollY] = useState(undefined);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleScroll() {
        setScrollY(window.scrollY);
      }

      window.addEventListener('scroll', handleScroll);
      // Call handler right away so state gets updated with initial window size
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return scrollY;
}
