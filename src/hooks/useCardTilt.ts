import { useCallback, useRef } from 'react';

/**
 * Lightweight 3D card tilt hook.
 * Tracks mouse position relative to card center and applies subtle rotateX/Y.
 * Resets smoothly on mouse leave. Disabled if prefers-reduced-motion is set.
 * Max tilt: ±3 degrees. Only applies on non-touch devices.
 */
export function useCardTilt(maxTilt: number = 3) {
  const cardRef = useRef<HTMLElement | null>(null);
  const prefersReduced = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
  const isTouchDevice = typeof window !== 'undefined'
    ? 'ontouchstart' in window
    : false;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (prefersReduced || isTouchDevice || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate relative position from -1 to 1
    const relX = (e.clientX - centerX) / (rect.width / 2);
    const relY = (e.clientY - centerY) / (rect.height / 2);

    // Apply inverse rotation for natural tilt direction
    const rotateY = relX * maxTilt;
    const rotateX = -relY * maxTilt;

    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, [maxTilt, prefersReduced, isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }, []);

  const ref = useCallback((node: HTMLElement | null) => {
    cardRef.current = node;
  }, []);

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}
