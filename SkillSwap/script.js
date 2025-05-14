
// Theme handling
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function getPreferredTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function toggleTheme() {
  const checkbox = document.querySelector('.theme-toggle input');
  const nextTheme = checkbox.checked ? 'dark' : 'light';
  setTheme(nextTheme);
}

// Initialize theme and smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('.theme-toggle input');
  checkbox.checked = getPreferredTheme() === 'dark';
  setTheme(getPreferredTheme());

  // Add smooth scrolling to navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

window.toggleTheme = toggleTheme;
