import { useWindowResize } from '@src/hooks/index';
import { MutableRefObject, useRef, useState } from 'react';

export default function useDimension(delay: number): [
  MutableRefObject<HTMLDivElement>,
  {
    width: number;
    height: number;
  }
] {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useWindowResize(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    }
  }, delay);

  return [ref, dimensions];
}
