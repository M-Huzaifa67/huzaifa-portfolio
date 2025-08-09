// utils/scripts/toast.js

export function showToast(message = "Success!", duration = 3000) {
  let toast = document.getElementById('global-toast');
  // Show the toast
  toast.textContent = message;
  toast.classList.remove("hidden");

  // Hide it after duration
  setTimeout(() => {
    toast.classList.add("hidden");
  }, duration);
}
