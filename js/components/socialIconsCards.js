import { SOCIALS } from "../data/socialsData.js";

export function socialIconsCard(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = SOCIALS.map((s, i) => `
    <a href="${s.link}" id="${s.id}" target="_blank" rel="noopener"
       class="flex items-center gap-2 px-2 py-2 rounded">
      <i class="${s.icon}"></i>
      <span class="hidden md:inline">${s.title}</span>
    </a>
  `).join("");

  if (window.AOS) AOS.refresh();
}
