

import { CV } from '../cv.js';

document.addEventListener('DOMContentLoaded', () => {
  
function showToast(message) {
  const toast = document.getElementById('cv-toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

function setDownloadLinks() {
  const link = CV.PDF.CV;

  const desktopLink = document.getElementById('cvInDesktop');
  const mobileLink = document.getElementById('cvInMobile');

  if (desktopLink) {
    desktopLink.href = link;
    desktopLink.addEventListener('click', () => {
      showToast('📁 CV Download Started');
    });
  }

  if (mobileLink) {
    mobileLink.href = link;
    mobileLink.addEventListener('click', () => {
      showToast('📁 CV Download Started');
    });
  }
}

document.addEventListener('DOMContentLoaded', setDownloadLinks);

});
