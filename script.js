// Smooth scroll helper
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

/* ===== COUNTERS ===== */
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const step = target / 120;

    if (current < target) {
      counter.innerText = Math.ceil(current + step);
      setTimeout(update, 15);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

/* ===== APPLE-STYLE SCROLL REVEAL ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('.fade').forEach(el => {
  observer.observe(el);
});
