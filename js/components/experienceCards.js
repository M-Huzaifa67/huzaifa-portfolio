// components/experienceCards.js
import { experienceData } from "../data/experienceData.js";

function createExperienceCard(exp, index) {
  const delay = index * 100 + 100;
  return `
    <div 
      class="experience-card w-full" 
      data-aos="fade-up" 
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1000"
      data-aos-delay="${delay}"
    >
      <!-- Position & Company -->
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h3 class="experience-title">${exp.position}</h3>
          <p class="experience-subtitle">
            ${exp.company} • ${exp.place} | ${exp.date}
          </p>
        </div>
      </div>

      <!-- Role -->
      <p class="experience-desc">${exp.role}</p>

      <!-- Work / Achievements -->
      <div class="pl-4">
        <ul class="experience-desc list-disc">
          ${exp.work.map(item => item ? `<li>${item}</li>` : "").join("")}
        </ul>
      </div>
    </div>
  `;
}

export function experienceCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = experienceData.map(createExperienceCard).join("");
}
