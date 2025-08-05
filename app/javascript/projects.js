document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({ 
    duration: 800, 
    once: true,
    offset: 100
  });

  // Filter functionality
  const filter = document.getElementById("tech-filter");
  const clearFilter = document.getElementById("clear-filter");
  const projects = document.querySelectorAll("#projects .project-item");
  const emptyState = document.getElementById("empty-state");

  function filterProjects() {
    const value = filter.value.toLowerCase();
    let visibleCount = 0;

    projects.forEach((project, index) => {
      const techs = project.dataset.tech.toLowerCase();
      const isVisible = !value || techs.includes(value);
      
      project.style.display = isVisible ? "block" : "none";
      if (isVisible) visibleCount++;
      
      // Add staggered animation
      if (isVisible) {
        project.style.animationDelay = `${index * 50}ms`;
        project.classList.add("fade-in");
      }
    });

    // Show/hide empty state
    emptyState.style.display = visibleCount === 0 ? "flex" : "none";
  }

  filter.addEventListener("change", filterProjects);
  
  clearFilter.addEventListener("click", () => {
    filter.value = "";
    filterProjects();
  });

  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(el => new bootstrap.Tooltip(el));

  // Particle animation
  createParticles();
});

function createParticles() {
  const particlesContainer = document.querySelector('.particles');
  if (!particlesContainer) return;
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
  }
} 