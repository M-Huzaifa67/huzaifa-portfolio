


export function showToastMessage(message = "Success!", duration = 3000) {
  const toastInner = document.getElementById("global-toast-inner");
  if (!toastInner) return;

  toastInner.textContent = message;

  // Show immediately
  toastInner.classList.remove("hidden", "opacity-0", "translate-y-5", "pointer-events-none");
  toastInner.classList.add("opacity-100", "translate-y-0");

  // Fade out after duration
  setTimeout(() => {
    toastInner.classList.remove("opacity-100", "translate-y-0");
    toastInner.classList.add("opacity-0", "translate-y-5", "pointer-events-none");

    // Fully hide after animation finishes
    setTimeout(() => {
      toastInner.classList.add("hidden");
    }, 500); // matches your transition duration (0.5s)
  }, duration);
}




// export function renderToast(message = "Done", duration = 3000) {
//   const el = document.getElementById("global-toast-inner");
//   if (!el) return;
//   el.textContent = message;
//   el.classList.remove("opacity-0", "translate-y-4");
//   setTimeout(() => {
//     el.classList.add("opacity-0", "translate-y-4");
//   }, duration);
// }