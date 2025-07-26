
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      mobileMenu.classList.add('hidden');
    }
  });
});

  // Form submission
  document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
});

  // Add active navigation highlighting
  window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  let current = '';
  sections.forEach(section => {
  const sectionTop = section.offsetTop - 100;
  const sectionHeight = section.clientHeight;
  if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
  current = section.getAttribute('id');
}
});

  navLinks.forEach(link => {
  link.classList.remove('text-blue-600', 'font-semibold');
  if (link.getAttribute('href').substring(1) === current) {
  link.classList.add('text-blue-600', 'font-semibold');
}
});
});

  // Add scroll animation for elements
  const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

  // Observe elements for animation
  document.querySelectorAll('.card-hover, .skill-card').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
