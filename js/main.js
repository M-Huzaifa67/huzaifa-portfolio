
// import and load all elements  which you have used in your index.html file
// This is the main entry point for your JavaScript application

import { renderHeader } from "./components/header.js";
import { experienceCards } from "./components/experienceCards.js";
import { projectCards } from "./components/projectsCards.js";
import { skillsCards } from "./components/skillsCards.js";
import { contactForm } from "./components/contactForm.js";
import { socialIconsCard } from "./components/socialIconsCards.js";
import { renderFooter } from "./components/footer.js";
import { cvBtn } from "./components/cvBtn.js";
import { toastCard } from "./components/toastCard.js";
import { projectDetails } from "./components/projectDetails.js";
import { initPageScripts } from "./components/initPageScripts.js";
import { initCVDownload } from "./events/btnCvEvent.js";
import { initContactUs } from "./events/contactEvent.js";
import { initAOS } from "./components/aos.js";

document.addEventListener("DOMContentLoaded", () => {
  renderHeader("header-container");
  experienceCards("experience-container");
  projectCards("projects-container");
  skillsCards("skills-container");
  contactForm("contact-form-container");
  cvBtn("cv-download-container");
  renderFooter("footer-container");
  socialIconsCard("socials-container");
  
  projectDetails();
  toastCard("global-toast");


  initPageScripts();
  initCVDownload(); 
  initContactUs(); 
  initAOS();

});
