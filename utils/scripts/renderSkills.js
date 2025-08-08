



import { SKILLS } from '../skills.js';

const createSkillsCard = (skill, index) => {
  const delay = index * 150; // Delay each skill slightly

  return `
    <div 
      class="skills-card w-full h-auto p-2 border-3 border-blue-300/10 rounded-lg shadow-md " 
      data-aos="fade-up" 
      data-aos-duration="800" 
      data-aos-delay="${delay}"
    >
      <p class="skills-title">${skill.title}</p>
      <div class="flex space-x-5 items-center">
        <i class="${skill.icon}"></i>
        <div class="flex w-full bg-gray-200 rounded-full dark:bg-gray-700 min-h-fit">
          <div class="skills-bar bg-blue-600 flex items-center justify-center text-xs px-2" style="width: ${skill.percent}%">
            ${skill.percent}%
          </div>
        </div>
      </div>
    </div>
  `;
};

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('skills-container');
  if (container) {
    container.innerHTML = SKILLS.map((skill, index) => createSkillsCard(skill, index)).join('');
  }
});




