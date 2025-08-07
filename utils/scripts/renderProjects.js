

import { PROJECTS } from '/utils/projects.js';

const createProjectCard = (project) => `
  <div class="project-card transition duration-300 ease-in-out flex h-full bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">
    <div class="aspect-video w-25 h-auto">
      <img src="${project.image}" alt="${project.title}" loading="lazy" class="object-cover rounded-lg">
    </div>
    <div class="pl-5 flex-1 flex flex-col">
      <div class="flex-1">
        <h3 class="project-title text-md font-semibold pb-2">${project.title}</h3>
        <p class="project-desc text-sm">${project.description}</p>
      </div>
      <div class="text-center pt-2">
        <a href="${project.link}" aria-label="View ${project.title} project" class="text-blue-500 hover:underline">View Project</a>
      </div>
    </div>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projects-container');
  if (container) {
    container.innerHTML = PROJECTS.map(createProjectCard).join('');
  }
});


