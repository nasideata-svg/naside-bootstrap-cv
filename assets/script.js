// Small enhancement: display the current year. Bootstrap handles the mobile navbar.
document.getElementById('year').textContent = new Date().getFullYear();
// Collapse the mobile menu after selecting an in-page anchor.
document.querySelectorAll('#mainNav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('mainNav');
    if (window.bootstrap && nav.classList.contains('show')) {
      window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});
