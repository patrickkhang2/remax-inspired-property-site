// ── LOADER ──
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1200);
  }
});

// ── CUSTOM CURSOR ──
const cursor = document.querySelector('.cursor');

if (cursor && window.innerWidth > 768) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  const hoverTargets = document.querySelectorAll('a, button, .project-item, .reel-card, .skill-tag, .nav-toggle');

  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    target.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });
}

// ── NAV SCROLL ──
const nav = document.querySelector('.nav');

if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// ── MOBILE NAV ──
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
  revealObserver.observe(el);
});

// ── SMOOTH SCROLL ──
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// ── COUNTER ANIMATION ──
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || '';
        let count = 0;
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;
        const increment = target / steps;

        const updateCounter = () => {
          count += increment;
          if (count < target) {
            counter.innerText = Math.floor(count).toLocaleString() + suffix;
            setTimeout(updateCounter, stepTime);
          } else {
            counter.innerText = target.toLocaleString() + suffix;
          }
        };

        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach(counter => counterObserver.observe(counter));

// ── PARALLAX (subtle) ──
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const parallaxEls = document.querySelectorAll('.parallax');

  parallaxEls.forEach(el => {
    const speed = el.getAttribute('data-speed') || 0.3;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
