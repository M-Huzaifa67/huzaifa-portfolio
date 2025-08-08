
import { SOCIALS } from "/utils/socials.js";

const createSocialLink = (social, index) => `
  <a 
    id="${social.id}" 
    href="${social.link}" 
    target="_blank" 
    class="${social.hoverColor} flex items-center"
    data-aos="zoom-in"
    data-aos-delay="${index * 150}"
    data-aos-duration="700"
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
