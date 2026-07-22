// ===================================================================
// Lumen — AI Learning Platform
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initSmoothClose();
  initSmoothScroll();
  initScrollReveal();
  initNavShadow();
  initBackToTop();
  initFooterForm();
  initContactForm();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/**
 * Mobile navigation toggle.
 */
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

/**
 * Close the mobile menu after a nav link is tapped.
 */
function initSmoothClose() {
  const links = document.getElementById('navLinks');
  const toggle = document.getElementById('navToggle');
  if (!links || !toggle) return;

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Smoothly scroll to in-page anchors, accounting for the sticky nav height.
 * CSS scroll-padding-top already handles most browsers, but this keeps
 * behavior consistent everywhere and works for any future anchor links.
 */
function initSmoothScroll() {
  const navHeight = document.querySelector('.nav-wrap')?.offsetHeight || 0;

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 1;

      window.scrollTo({ top, behavior: 'smooth' });

      // keep the URL shareable without an extra jump
      history.pushState(null, '', targetId);
    });
  });
}

/**
 * Add a soft shadow under the nav once the page has scrolled.
 */
function initNavShadow() {
  const nav = document.querySelector('.nav-wrap');
  if (!nav) return;

  const toggleShadow = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  toggleShadow();
  window.addEventListener('scroll', toggleShadow, { passive: true });
}

/**
 * Show a "back to top" button once the user scrolls past the hero,
 * and scroll smoothly back up when it's clicked.
 */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  const toggleVisibility = () => {
    btn.classList.toggle('is-visible', window.scrollY > 480);
  };

  toggleVisibility();
  window.addEventListener('scroll', toggleVisibility, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Reveal feature cards as they scroll into view.
 */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // slight stagger so cards don't all pop at once
          setTimeout(() => entry.target.classList.add('is-visible'), i * 90);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

/**
 * Footer email signup — front-end only, no backend wired up.
 */
function initFooterForm() {
  const form = document.getElementById('footerForm');
  const note = document.getElementById('formNote');
  if (!form || !note) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('footerEmail').value.trim();
    if (!email) return;

    note.textContent = `You're on the list — we'll write to ${email}.`;
    form.reset();
  });
}

/**
 * Contact section form — front-end only, no backend wired up.
 * Validates the basics and shows an inline confirmation on submit.
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('contactNote');
  if (!form || !note) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      note.style.color = '#DC2626';
      note.textContent = 'Please fill in your name, email, and message.';
      return;
    }

    note.style.color = '';
    note.textContent = `Thanks, ${name.split(' ')[0]} — we'll reply to ${email} within a business day.`;
    form.reset();
  });
}