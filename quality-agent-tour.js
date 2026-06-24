/** In-post nav for Quality Agent Platform tour */
function initQualityAgentTour() {
  const root = document.querySelector('.qat-tour');
  if (!root) return;

  const links = root.querySelectorAll('.qat-nav a');
  const sections = root.querySelectorAll('.qat-section[id]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id?.startsWith('#')) return;
      e.preventDefault();
      root.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if (!sections.length) return;

  const onScroll = () => {
    let current = '';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 140) current = section.id;
    });
    links.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
