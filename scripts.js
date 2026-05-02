/* ============================================================
   Scroll-triggered fade-in animations
   Uses IntersectionObserver to add .is-visible when elements
   enter the viewport, triggering CSS transitions.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animate once, not on re-scroll
      }
    });
  }, {
    threshold: 0.08
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
