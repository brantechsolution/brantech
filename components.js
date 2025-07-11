document.addEventListener('DOMContentLoaded', () => {
  const components = ['navbar', 'hero', 'clients', 'services', 'stats', 'cta', 'footer'];

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
