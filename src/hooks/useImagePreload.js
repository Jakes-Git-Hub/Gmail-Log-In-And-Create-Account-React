import { useState, useEffect } from 'react';

function useImagePreload(src) {
  const [isImagePreloaded, setImagePreloaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImagePreloaded(true);
    };
  }, [src]);

  return isImagePreloaded;
}

export default useImagePreload;