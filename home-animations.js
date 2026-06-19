/** Homepage scroll reveals and stat counters */
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    document.querySelectorAll('[data-animate]').forEach((el) => el.classList.add('is-visible'));
    document.querySelectorAll('.stat-value').forEach((el) => {
      el.textContent = el.dataset.target || el.textContent;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        if (entry.target.id === 'home-stats') animateStats(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

  function animateStats(container) {
    container.querySelectorAll('.stat-value').forEach((el) => {
      const target = Number(el.dataset.target);
      if (Number.isNaN(target)) return;
      const duration = 900;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    });
  }
})();
