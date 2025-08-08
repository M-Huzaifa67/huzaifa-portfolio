


import { showToast } from '../toast.js';

export function downloadCV() {
  showToast("📁 CV Download");

  const link = document.createElement('a');
  link.href = '/assets/Huzaifa_Flutter_CV.pdf';
  link.download = 'Huzaifa_Flutter_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', () => {
  const cvInDesktop = document.getElementById('cvInDesktop');
  const cvInMobile = document.getElementById('cvInMobile');

  if (cvInDesktop) cvInDesktop.addEventListener('click', downloadCV);
  if (cvInMobile) cvInMobile.addEventListener('click', downloadCV);
});


   