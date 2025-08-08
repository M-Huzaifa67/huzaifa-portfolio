import { PROJECTS } from '/utils/projects.js';
import { showToast } from '../toast.js';

function showProjectDetails(project) {
  const title = project.title || 'Project';
  showToast(`🔍 ${title} in progress! More details coming soon!`);
}


const createProjectCard = (project, index) => {
  const delay = index * 200;

  return `
    <div 
      class="project-card transition duration-300 ease-in-out flex h-full bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-delay="${delay}"
      data-project-index="${index}"
    >
      <div class="aspect-video w-25 h-auto">
        <img src="${project.image}" alt="${project.title}" loading="lazy" class="object-cover rounded-lg">
      </div>
      <div class="pl-5 flex-1 flex flex-col">
        <div class="flex-1">
          <h3 class="project-title text-md font-semibold pb-2">${project.title}</h3>
          <p class="project-desc text-sm">${project.description}</p>
        </div>
        <div class="text-center pt-2">
          <button class="view-project-btn text-blue-500 hover:underline" data-project-index="${index}">
            View Project
          </button>
        </div>
      </div>
    </div>
  `;
};

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = PROJECTS.map(createProjectCard).join('');

  // 🔁 Attach event listeners AFTER rendering HTML
  container.querySelectorAll('.view-project-btn').forEach((btn) => {
    const index = btn.getAttribute('data-project-index');
    btn.addEventListener('click', () => showProjectDetails(PROJECTS[index]));
  });
});
