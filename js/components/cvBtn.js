

export function cvBtn(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
//  onclick="startDownload()
  container.innerHTML = `
            <div class="flex-1 w-full hidden lg:block justify-center lg:justify-end">
              <button id="cvInDesktop""
                class="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap">
                📄 Download CV
              </button>
            </div>

            
            <div class="flex-1 flex w-full lg:hidden justify-center">
              <button id="cvInMobile""
                class="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 flex items-center gap-2">
                <span class="px-3">CV</span>
                <div
                  class="w-6 h-6 bg-[url('/assets/downloadIcon.png')] bg-contain bg-no-repeat bg-center animate-bounce">
                </div>
              </button>
            </div>
  `;

  }
