

export function renderMobileMenu(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
//   console.log("Rendering mobile menu in container:", containerId);
//   alert("Mobile menu rendered successfully!"); // Debugging alert

  container.innerHTML = `
  <nav id="mobile-menu-container" class="mobile-menu-container hidden">
    <div class="mobile-menu-card">
      <a href="#home" class="mob-tab-link active" data-section="home"><span>Home</span></a>
      <a href="#about" class="mob-tab-link" data-section="about"><span>About</span></a>
      <a href="#experiences" class="mob-tab-link" data-section="experiences"><span>Experience</span></a>
      <a href="#skills" class="mob-tab-link" data-section="skills"><span>Skills</span></a>
      <a href="#projects" class="mob-tab-link" data-section="projects"><span>Projects</span></a>
      <a href="#contact" class="mob-tab-link" data-section="contact"><span>Contact</span></a>
    </div>
  </nav>
  `;
}
