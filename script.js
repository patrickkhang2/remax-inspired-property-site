// Smooth scroll
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// Counter animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const step = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + step);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// Scroll reveal animation
const elements = document.querySelectorAll('.project-card, .stat-card, .about, .videos');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => {
  el.classList.add('fade');
  observer.observe(el);
});
