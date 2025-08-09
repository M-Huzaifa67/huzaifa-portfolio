


import { showToast } from '../toast.js';

function downloadCV() {
  showToast("📁 CV Download");

  const link = document.createElement('a');
  link.href = '/assets/Huzaifa_Flutter_CV.pdf';
  link.download = 'Huzaifa_Flutter_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // disabled and gray buttons after download
  const cvInDesktop = document.getElementById('cvInDesktop');
  const cvInMobile = document.getElementById('cvInMobile');
  if (cvInDesktop) {
    cvInDesktop.disabled = true;
    cvInDesktop.classList.add('bg-gray-500', 'cursor-not-allowed');
  }
  if (cvInMobile) {
    cvInMobile.disabled = true;
    cvInMobile.classList.add('bg-gray-500', 'cursor-not-allowed');
        const icon = cvInMobile.querySelector('div');
    if (icon) {
      icon.classList.remove('animate-bounce');
      icon.classList.add('animate-none', 'opacity-50');
    }
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const cvInDesktop = document.getElementById('cvInDesktop');
  const cvInMobile = document.getElementById('cvInMobile');

  if (cvInDesktop) cvInDesktop.addEventListener('click', downloadCV);
  if (cvInMobile) cvInMobile.addEventListener('click', downloadCV);
});

module.exports = { downloadCV};


   