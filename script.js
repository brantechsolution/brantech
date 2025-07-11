<script>
// BranTech script with tab and animation logic
document.addEventListener('DOMContentLoaded', function() {
  // Tab switching
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('tab-active'));
        tabContents.forEach(content => content.classList.add('hidden'));
        
        button.classList.add('tab-active');
        const tabId = button.getAttribute('data-tab') + '-tab';
        document.getElementById(tabId).classList.remove('hidden');
      });
    });
  }

  // Animation observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  }, { threshold: 0.1 });

  // 🔧 Fix: Target your actual class in HTML
  document.querySelectorAll('#services .service-card-fancy').forEach(card => {
    observer.observe(card);
  });

  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
</script>
