
import { SOCIALS } from "/utils/socials.js";

const createSocialLink = (social, index) => {
    const delay = index * 150; // Delay each skill slightly
  return `
  <a 
    id="${social.id}" 
    href="${social.link}" 
    target="_blank" 
    class="${social.hoverColor} flex items-center"
     data-aos="fade-up" 
      data-aos-duration="800" 
      data-aos-delay="${delay}"
  >
    <i class="${social.icon}"></i>
    <span class="hidden md:block p-1">${social.title}</span>
  </a>
`;
}




document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("socials-container");
  if (container) {
    // container.innerHTML = SOCIALS.map(createSocialLink).join("");
    container.innerHTML = SOCIALS.map((social, index) => createSocialLink(social, index)).join('');
    
  }
});
