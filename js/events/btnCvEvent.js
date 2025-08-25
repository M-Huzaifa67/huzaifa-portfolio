

import { showToastMessage } from "./toastEvent.js";
import { CV } from "../data/cvData.js"; // assuming your CV link/filename is here


export function initCVDownload() {
  const desktopBtn = document.getElementById("cvInDesktop");
  const mobileBtn = document.getElementById("cvInMobile");

  if (!desktopBtn && !mobileBtn) return;

  const startDownload = (btn) => {
    showToastMessage("📁 CV download started");
    gtag('event', 'cv_download', {
      event_category: 'engagement',
      event_label: 'Download CV Button',
      value: 1
    });

    const a = document.createElement("a");
    a.href = CV.PDF.CV;
    a.download = CV.PDF.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    btn.disabled = true;
    btn.classList.add("bg-gray-400", "cursor-not-allowed");
    const icon = btn.querySelector(".animate-bounce");
    if (icon) {
      icon.classList.remove("animate-bounce");
      icon.classList.add("opacity-50");
    }

  };

  if (desktopBtn) desktopBtn.addEventListener("click", () => startDownload(desktopBtn));
  if (mobileBtn) mobileBtn.addEventListener("click", () => startDownload(mobileBtn));
}

