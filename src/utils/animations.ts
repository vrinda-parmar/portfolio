// Custom animations for the portfolio site

/**
 * Animates elements when they enter the viewport
 * This is a utility for the IntersectionObserver setup
 * that's used in multiple components
 */
export const setupIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  animationClass: string = 'animate-fade-in',
  threshold: number = 0.1
) => {
  if (!ref.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
      }
    },
    { threshold }
  );

  observer.observe(ref.current);
  
  return () => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  };
};

/**
 * Smooth scroll to element function
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};