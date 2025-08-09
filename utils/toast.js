

export function showToast(message = "Success!", duration = 3000) {
  const toast = document.getElementById('global-toast');
  if (!toast) return;

  // Set the message
  toast.textContent = message;

  // Show with animation
  toast.classList.remove("opacity-0", "translate-y-5", "pointer-events-none");

  // Hide after duration
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-5", "pointer-events-none");
  }, duration);
}


// export function showToast(message = "Success!", duration = 3000) {
//   let toast = document.getElementById('global-toast');
//   // Show the toast
//   toast.textContent = message;
//   toast.classList.remove("hidden");

//   // Hide it after duration
//   setTimeout(() => {
//     toast.classList.add("hidden");
//   }, duration);
// }
