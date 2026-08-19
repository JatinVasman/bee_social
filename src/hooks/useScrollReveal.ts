import { useCallback, useRef, useEffect } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Returns a ref callback — attach it to any element to animate on viewport entry.
 * Adds 'scroll-revealed' class when visible. Respects prefers-reduced-motion.
 */
export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = options;
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<Element>>(new Set());

  useEffect(() => {
    // If user prefers reduced motion, immediately reveal everything
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || prefersReduced) {
            entry.target.classList.add('scroll-revealed');
            if (once && observerRef.current) {
              observerRef.current.unobserve(entry.target);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe any elements already registered
    elementsRef.current.forEach((el) => {
      if (prefersReduced) {
        el.classList.add('scroll-revealed');
      } else {
        observerRef.current?.observe(el);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, once]);

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    elementsRef.current.add(node);
    // Add the base class so the element starts hidden
    if (!node.classList.contains('scroll-reveal')) {
      node.classList.add('scroll-reveal');
    }
    if (observerRef.current) {
      observerRef.current.observe(node);
    }
  }, []);

  return ref;
}
