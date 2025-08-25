
function renderProjectDetails(project) {
  const container = document.getElementById("project-details");
  if (!container) return;

  container.innerHTML = `
    <h2 class="text-xl font-bold mb-2">${project.title}</h2>
    ${project.details.map(section => renderSection(section)).join("")}
  `;
}

function renderSection(section) {
  if (section.section === "video") {
    return `
      <div class="mt-4">
        <h3 class="text-lg font-semibold mb-2">Demo Video</h3>
        <video controls class="w-full rounded-lg shadow">
          <source src="${section.content}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
  }

  // If content is array → render as list
  if (Array.isArray(section.content)) {
    return `
      <div class="mt-4">
        <h3 class="text-lg font-semibold mb-2">${section.section}</h3>
        <ul class="list-disc pl-5 space-y-1">
          ${section.content.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  // Default: simple paragraph
  return `
    <div class="mt-4">
      <h3 class="text-lg font-semibold mb-2">${section.section}</h3>
      <p class="text-gray-700 dark:text-gray-300">${section.content}</p>
    </div>
  `;
}
