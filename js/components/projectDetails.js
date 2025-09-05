

export function projectDetails() {
  window.closeProjectDetails = function () {
    const modal = document.getElementById("projectModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  };

  window.showProjectDetails = function (project) {
    const modal = document.getElementById("projectModal");
    const detailContainer = document.getElementById("project-detail");
    let html = '';

    if(project.id != "1"){
     html += `
          <div class="p-1"> 
          <div class="mobile-card animate-pulse" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000"> 
            <div class="flex items-start justify-start"> 
              <h2 class="text-xs text-red-400 break-words hyphens-auto p-1 font-light text-start">
                This portfolio is in progress. For now, only the <b><i>Course Recommendation App</i></b> videos are available to view.
              </h2> 
            </div>
          </div>
          </div>
        `;
    };


    html += `
      <div class="mobile-card" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000}"> 
      <div class"flex items-start justify-start"> 
      <h2 class="text-sm font-bold text-start">${project.title}</h2> 
      <p class="text-xs font-noto italic text-gray-600 dark:text-gray-400 text-start mb-2">${project.overview}</p> 
      </div>
      </div>
    `;


    if (project.details) {
      project.details.forEach((section, idx) => {
        switch (section.section) {
          case "description":
            html += `
              <div class="mobile-card break-words hyphens-auto" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="${1000 + idx * 200}">
                <p class="text-xs font-lora leading-relaxed text-justify">${section.content}</p>
              </div>
            `;
            break;

          case "Key Features":
          case "Tech Stack":
          case "My Contributions":
            html += `
              <div class="mobile-card" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="${1000 + idx * 200}">
                <h3 class="font-semibold font-noto mb-2">${section.section}</h3>
                <ul class="list-disc list-outside pl-5 space-y-1 text-xs font-noto">
                  ${section.content.map(item => `<li>${item}</li>`).join("")}
                </ul>
              </div>
            `;
            break;

          
            case "videos":
  html += `
    <div class="grid gap-6">
      ${section.content.map((video, vIdx) => {
        return `
          <div class="w-full" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="${1000 + idx * 200 + vIdx * 100}">
            <!-- Label above video -->
            <h3 class="text-sm font-semibold text-gray-400 mb-1">${video.label || ''}</h3>
            <video controls poster="${video.thumbnail}" class="w-full h-150 rounded-b-3xl">
              <source src="${video.src}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        `;
      }).join("")}
    </div>
  `;
  break;


              







          case "link":
            html += `
            <div class="mobile-card">
              <div class="w-full flex justify-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="${1000 + idx * 200}">
                <a href="${section.content}" target="_blank"
                   class="block cursor-not-allowed pointer-events-none text-center bg-gray-400 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
                  🔗 App Link (unAvailable)
                </a>
              </div>
              </div>
            `;
            break;
        }
      });
    }

    detailContainer.innerHTML = html;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";

    // Re-init AOS for animations
    if (window.AOS) AOS.refresh();
  };
}

