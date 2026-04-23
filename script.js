/* FADE IN */
const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));

/* COUNTER */
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    let current = 0;

    const step = target / 100;

    const run = () => {
      current += step;
      if (current < target) {
        counter.innerText = Math.floor(current);
        requestAnimationFrame(run);
      } else {
        counter.innerText = target;
      }
    };

    run();
  };

  update();
});
