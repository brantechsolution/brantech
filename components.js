document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // Component loading
  const components = ['footer']; // Only keep components that exist
  
  components.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      fetch(`partials/${id}.html`)
        .then(res => {
          if (!res.ok) throw new Error(`Failed to fetch ${id}.html`);
          return res.text();
        })
        .then(html => element.innerHTML = html)
        .catch(err => console.warn(err.message));
    }
  });
});
// Add mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Rest of your existing component loading code...
});
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Component loading - now includes header
  const components = ['header', 'footer']; // Load both header and footer
  
  components.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      fetch(`partials/${id}.html`)
        .then(res => {
          if (!res.ok) throw new Error(`Failed to fetch ${id}.html`);
          return res.text();
        })
        .then(html => element.innerHTML = html)
        .catch(err => console.warn(err.message));
    }
  });
});