
import { SOCIALS } from "/utils/socials.js";

const createSocialLink = (social) => `
  <a 
    id="${social.id}" 
    href="${social.link}" 
    target="_blank" 
    class="${social.hoverColor} flex items-center"
  >
    <i class="${social.icon}"></i>
    <span class="hidden md:block p-1">${social.title}</span>
  </a>
`;

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("socials-container");
    if (container) {
        container.innerHTML = SOCIALS.map(createSocialLink).join("");
    }
});
