import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds scroll animations to elements
 * Uses Intersection Observer API to trigger animations when elements enter viewport
 * 
 * Element animation types are determined by data attributes:
 * - data-animation="fade" - fade in animation
 * - data-animation="slide-left" - slide in from left
 * - data-animation="slide-right" - slide in from right
 * - data-animation="slide" - auto-detect based on grid position
 */
export const useScrollAnimation = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.getAttribute('data-animation');

          if (animationType) {
            element.classList.add('animate-in', `animate-${animationType}`);
            observer.unobserve(element);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return elementRef;
};

/**
 * Utility function to determine animation type based on element position in grid
 * Returns "slide-left" for left items, "slide-right" for right items, "fade" for center
 */
export const getGridAnimationType = (element) => {
  const parent = element.parentElement;
  const siblings = Array.from(parent.children);
  const index = siblings.indexOf(element);
  const totalItems = siblings.length;

  if (totalItems === 1) return 'fade';
  
  // For two items: left and right
  if (totalItems === 2) {
    return index === 0 ? 'slide-left' : 'slide-right';
  }

  // For three or more items: left, center, right pattern
  const midpoint = totalItems / 2;
  if (index < midpoint) {
    return 'slide-left';
  } else if (index > midpoint) {
    return 'slide-right';
  } else {
    return 'fade';
  }
};
