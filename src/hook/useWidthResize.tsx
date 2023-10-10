import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

type WidthSize = {
  width: number;
};

const useWidthResize = (): WidthSize => {
  const [width, setWidth] = useState<WidthSize>({ width: window.innerWidth });

  const handleWidthSize = () => {
    const newWidth = window.innerWidth;
    setWidth({ width: newWidth });
  };

  const handleWidthDebounce = useCallback(debounce(handleWidthSize, 200), []);

  useEffect(() => {
    window.addEventListener('resize', handleWidthDebounce);
    handleWidthSize();

    return () => window.removeEventListener('resize', handleWidthDebounce);
  }, [handleWidthDebounce]);
  // console.log(width, '0.2초');
  return width;
};

export default useWidthResize;
