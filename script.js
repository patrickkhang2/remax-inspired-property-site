/* SMOOTH FADE */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, 120);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

/* COUNTER */
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = +counter.getAttribute("data-target");
  let count = 0;

  const update = () => {
    const step = target / 120;
    count += step;

    if (count < target) {
      counter.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
});
