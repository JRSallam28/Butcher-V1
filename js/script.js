document.getElementById('year').textContent = new Date().getFullYear();

const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 500));
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('.navbar .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.navbar .nav-link.active')?.classList.remove('active');
    link.classList.add('active');
    const nav = document.getElementById('navLinks');
    bootstrap.Collapse.getInstance(nav)?.hide();
  });
});
