/* =========================
   STRIPE-LEVEL SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".fade").forEach((el) => {
  observer.observe(el);
});

/* =========================
   STRIPE-STYLE COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const duration = 1200;
  const stepTime = 16;
  const steps = duration / stepTime;
  const increment = target / steps;

  let current = 0;

  const update = () => {
    current += increment;

    if (current < target) {
      counter.innerText = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.6,
  }
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

/* =========================
   STRIPE-STYLE SMOOTH NAV FEEL
========================= */

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* =========================
   PREMIUM MICRO INTERACTIONS
========================= */

const cards = document.querySelectorAll(".project-card, .stat-card, .video-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `translateY(-6px) rotateX(${(y - rect.height / 2) / 20}deg) rotateY(${(x - rect.width / 2) / 20}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
  });
});

/* =========================
   HEADER SCROLL SHADOW (STRIPE FEEL)
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
  } else {
    header.style.boxShadow = "none";
  }
});
