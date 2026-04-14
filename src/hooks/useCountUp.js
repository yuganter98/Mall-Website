import { useState, useEffect, useRef } from 'react';

export function useCountUp(target, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  const start = () => {
    if (isActive) return;
    setIsActive(true);
  };

  useEffect(() => {
    if (!isActive) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setCount(parseFloat(current.toFixed(decimals)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isActive, target, duration, decimals]);

  return { count, start };
}
