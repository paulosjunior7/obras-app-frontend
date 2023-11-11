import { useState, useRef, useMemo, useLayoutEffect, useEffect } from 'react';

function useDebounce(callback: any, delay: number) {
  const [loading, setLoading] = useState(false);
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  let timerRef = useRef<number | any>(0);
  const startFunction = useMemo(() => {
    return (...args: any) => {
      setLoading(true);
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setLoading(false);
        callbackRef.current(...args);
      }, delay);
    };
  }, [delay]);

  useEffect(() => () => timerRef.current && clearTimeout(timerRef.current), []);

  return [startFunction, loading];
}

export default useDebounce;
