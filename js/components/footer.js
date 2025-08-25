export function renderFooter(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <footer class="flex justify-center pt-1">
    <div class="footer w-[92%] sm:w-[80%] p-3 text-center text-sm text-gray-500">
      <p>&copy; ${new Date().getFullYear()} M. Huzaifa. All rights reserved.</p>
    </div>
  </footer>
  `;
}

