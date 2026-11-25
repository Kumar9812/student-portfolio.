document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? '×' : '☰';
    });
  }

  const printButton = document.getElementById('printBtn');
  if (printButton) printButton.addEventListener('click', () => window.print());
});
