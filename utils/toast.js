// utils/scripts/toast.js

export function showToast(message = "Success!", duration = 3000) {
  let toast = document.getElementById('global-toast');

  // Create toast if not present
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = `
      fixed bottom-5 left-1/2 transform -translate-x-1/2 
      bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg 
      opacity-0 pointer-events-none transition-opacity duration-300 z-50
    `;
    document.body.appendChild(toast);
  }

  // Show the toast
  toast.textContent = message;
  toast.classList.remove('opacity-0', 'pointer-events-none');

  // Hide it after duration
  setTimeout(() => {
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, duration);
}
