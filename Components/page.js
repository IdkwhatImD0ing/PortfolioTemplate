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

// Hook for animation check
export function useIntersectionObserver(
  elementRef,
  {threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false},
) {
  const [entry, setEntry] = useState();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = {threshold, root, rootMargin};
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}
