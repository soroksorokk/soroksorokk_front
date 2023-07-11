import React, { useState, useEffect } from 'react';

type WidthSize = {
  width: number;
};

const useWidthResize = (): WidthSize => {
  const [width, setWidth] = useState<WidthSize>({ width: window.innerWidth });

  useEffect(() => {
    const handleWidthSize = () => {
      const newWidth = window.innerWidth;
      setWidth({ width: newWidth });
    };

    window.addEventListener('resize', handleWidthSize);
    handleWidthSize();

    return () => window.removeEventListener('resize', handleWidthSize);
  }, []);
  return width;
};

export default useWidthResize;
