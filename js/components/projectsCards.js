// components/projects.js
import { PROJECTS } from '../data/projectsData.js';
import { showToastMessage } from '../events/toastEvent.js';


export function projectCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = PROJECTS.map((project, i) => `
    <div 
      class="project-card transition duration-300 ease-in-out flex h-full bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-delay="${i*100 + 100}"
    >
      <div class="aspect-video w-25 h-auto"    
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="${i*150 + 200}">
        <img src="${project.image}" alt="${project.title}" loading="lazy" class="object-cover rounded-lg">
      </div>
      <div class="pl-5 flex-1 flex flex-col">
        <div class="flex-1">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.overview}</p>
        </div>
        <div class="text-center pt-2">
          <button class="view-project-btn text-blue-500 hover:underline" data-project-index="${i}">
            View Project
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Attach modal show handler
  container.querySelectorAll('.view-project-btn').forEach(btn => {
    const index = btn.dataset.projectIndex;
    btn.addEventListener('click', () => window.showProjectDetails(PROJECTS[index]));
  });

  if (window.AOS) AOS.refresh();
}

