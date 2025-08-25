


export function toastCard(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
      <div id="global-toast-inner" class="toast-card"></div>
  `;
}