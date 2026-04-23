/* =========================
   APPLE PRODUCT LAUNCH ENGINE
========================= */

/* Cinematic scroll reveal (staged like keynote slides) */
const sections = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, 180); // staged reveal = keynote feel
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((s) => observer.observe(s));

/* =========================
   HERO INTRO (SUBTLE SCALE-IN)
========================= */

window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = "scale(1.02)";

    setTimeout(() => {
      hero.style.transition = "all 1.2s ease";
      hero.style.opacity = 1;
      hero.style.transform = "scale(1)";
    }, 200);
  }
});

/* =========================
   APPLE COUNTER (PREMIUM PACE)
========================= */

const counters = document.querySelectorAll(".counter");

const animateCounter = (el) => {
  const target = +el.getAttribute("data-target");
  let current = 0;
  const duration = 2000;
  const step = target / (duration / 16);

  const update = () => {
    current += step;

    if (current < target) {
      el.innerText = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      el.innerText = target;
    }
  };

  update();
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => animateCounter(entry.target), 500);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach((c) => counterObserver.observe(c));

/* =========================
   APPLE HEADER DEPTH SHIFT
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  header.style.background =
    y > 50
      ? "rgba(11,18,32,0.85)"
      : "rgba(11,18,32,0.55)";

  header.style.boxShadow =
    y > 50 ? "0 30px 60px rgba(0,0,0,0.35)" : "none";
});
