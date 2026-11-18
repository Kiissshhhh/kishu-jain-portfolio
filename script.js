const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const downloadBtn = document.getElementById('downloadBtn');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  themeToggle.textContent = body.classList.contains('light-mode') ? '☾' : '☼';
});
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
downloadBtn.addEventListener('click', () => window.print());
document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progress').style.width = `${max > 0 ? window.scrollY / max * 100 : 0}%`;
});
