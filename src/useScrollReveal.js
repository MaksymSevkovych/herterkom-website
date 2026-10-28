import { useLayoutEffect } from 'react';

// Reveal navigation and keyboard targets immediately, including hidden ancestors.
export function revealTarget(target, includeChildren = false) {
  for (let element = target; element; element = element.parentElement) {
    if (element.hasAttribute('data-reveal')) element.dataset.revealState = 'shown';
  }
  if (includeChildren) {
    target.querySelectorAll('[data-reveal]').forEach(element => { element.dataset.revealState = 'shown'; });
  }
}

export default function useScrollReveal(path) {
  useLayoutEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting, boundingClientRect }) => {
        if (isIntersecting || boundingClientRect.bottom <= 0) {
          if (target.dataset.revealState === 'pending') {
            target.dataset.revealState = isIntersecting ? 'visible' : 'shown';
          }
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -24px 0px' });

    elements.forEach(element => {
      const delay = Math.min(240, Math.max(0, Number(element.dataset.reveal) || 0));
      element.style.setProperty('--reveal-delay', `${delay}ms`);
      element.dataset.revealState = 'pending';
      observer.observe(element);
    });

    const onFocus = event => revealTarget(event.target);
    const onAnimationEnd = event => {
      const element = event.animationName === 'cable-arrive'
        ? event.target.closest('[data-reveal-motion]')
        : event.animationName === 'content-reveal' ? event.target : null;
      if (element?.hasAttribute('data-reveal')) {
        element.dataset.revealState = 'shown';
      }
    };
    const onMotionChange = () => {
      if (motion.matches) {
        elements.forEach(element => { element.dataset.revealState = 'shown'; });
        observer.disconnect();
      }
    };
    // A route change may preserve focus until the router moves it to its heading.
    if (document.activeElement) revealTarget(document.activeElement);
    document.addEventListener('focusin', onFocus);
    document.addEventListener('animationend', onAnimationEnd);
    motion.addEventListener('change', onMotionChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('focusin', onFocus);
      document.removeEventListener('animationend', onAnimationEnd);
      motion.removeEventListener('change', onMotionChange);
      elements.forEach(element => {
        delete element.dataset.revealState;
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, [path]);
}
