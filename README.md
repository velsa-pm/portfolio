<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Amex Header Injector</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      
      body { font-family: 'Inter', sans-serif; }
      
      /* Amex Blue Color Utility */
      .text-amex-blue { color: #006fcf; }
      
      /* Custom Scrollbar */
      .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #4b5563 #1f2937; }
      .custom-scrollbar::-webkit-scrollbar { width: 6px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: #1f2937; }
      .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #4b5563; border-radius: 10px; }

      .fade-in { animation: fadeIn 0.3s ease-in-out; }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    </style>
  </head>
  <body class="bg-gray-100 text-gray-900 h-screen overflow-hidden flex">

    <aside class="w-80 bg-gray-800 border-r border-gray-700 flex flex-col h-full shadow-xl z-20 shrink-0">
      
      <div class="p-6 border-b border-gray-700 bg-gray-900">
        <h1 class="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <i data-lucide="layers" class="w-5 h-5 text-sky-400"></i>
          Header Mask
        </h1>
        <p class="text-xs text-gray-400 mt-1">Logo Injection Tool</p>
      </div>

      <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
        
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold border border-sky-500/30">1</span>
            <h2 class="text-sm font-semibold text-white">Source Image</h2>
          </div>
          <div class="relative">
            <input type="file" accept="image/*" id="image-upload" class="hidden" />
            <label for="image-upload" class="flex flex-col items-center justify-center w-full px-4 py-6 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer hover:bg-gray-700 hover:border-sky-500 transition-all group">
              <i data-lucide="upload" class="w-8 h-8 text-gray-400 group-hover:text-sky-400 mb-2"></i>
              <span id="upload-label-text" class="text-xs text-gray-400 group-hover:text-gray-300 font-medium">Click to Upload Screenshot</span>
            </label>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold border border-sky-500/30">2</span>
            <h2 class="text-sm font-semibold text-white flex items-center gap-2">
              <i data-lucide="move" class="w-4 h-4"></i> Placement
            </h2>
          </div>
          <div class="space-y-5 bg-gray-700/30 p-4 rounded-lg border border-gray-700">
            
            <div class="w-full">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs font-medium text-gray-300">Vertical Position (Y)</span>
                <span id="disp-top" class="text-xs text-gray-400 font-mono">0px</span>
              </div>
              <input type="range" id="top-slider" min="0" max="1000" value="0" disabled class="w-full accent-sky-500 disabled:opacity-50 cursor-pointer" />
            </div>

            <div class="w-full">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs font-medium text-gray-300">Bar Height (Mask Size)</span>
                <span id="disp-height" class="text-xs text-gray-400 font-mono">80px</span>
              </div>
              <input type="range" id="height-slider" min="40" max="300" value="80" disabled class="w-full accent-sky-500 disabled:opacity-50 cursor-pointer" />
            </div>

          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold border border-sky-500/30">3</span>
            <h2 class="text-sm font-semibold text-white flex items-center gap-2">
              <i data-lucide="settings-2" class="w-4 h-4"></i> Features
            </h2>
          </div>
          <div class="bg-gray-700/30 p-4 rounded-lg border border-gray-700">
            
            <div class="flex items-center justify-between">
              <label class="text-sm font-medium text-gray-300 cursor-pointer" for="exit-toggle">Show "Exit" Link</label>
              <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="exit-toggle" class="peer absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 right-5" />
                <label for="exit-toggle" class="block overflow-hidden h-5 rounded-full bg-gray-600 cursor-pointer peer-checked:bg-sky-500"></label>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="p-6 border-t border-gray-700 bg-gray-900">
        <button id="download-btn" disabled class="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors">
          <i data-lucide="download" class="w-4 h-4 mr-2"></i>
          Download Mockup
        </button>
      </div>
    </aside>

    <main class="flex-1 h-full bg-gray-200 overflow-auto p-8 flex justify-center relative">
      
      <div id="placeholder-view" class="flex flex-col items-center justify-center text-center max-w-lg animate-in fade-in duration-500 mt-20">
        <div class="bg-gray-300 p-6 rounded-full mb-6">
          <i data-lucide="image" class="w-16 h-16 text-gray-500"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-700 mb-2">No Image Uploaded</h3>
        <p class="text-gray-500">Upload a screenshot to inject the header.</p>
      </div>

      <div id="canvas-wrapper" class="hidden w-full max-w-[1200px] min-w-[320px]">
        
        <div id="capture-target" class="relative bg-white shadow-2xl mx-auto w-full inline-block">
          
          <img id="base-img" src="" alt="Base" class="w-full block" />

          <div id="header-overlay" class="absolute left-0 w-full bg-white z-10 flex items-center justify-center px-8 border-b border-gray-100 shadow-sm" style="top: 0px; height: 80px;">
            
            <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <span class="text-2xl md:text-3xl font-bold tracking-tighter text-amex-blue whitespace-nowrap uppercase" style="font-family: Arial, sans-serif; letter-spacing: -0.5px;">
                 American Express
               </span>
            </div>

            <div id="exit-link-container" class="hidden absolute right-8 top-1/2 transform -translate-y-1/2">
              <a href="#" class="text-sm font-medium text-amex-blue hover:underline">Exit</a>
            </div>

          </div>

        </div>
      </div>
    </main>

    <script>
      // --- INITIALIZE ICONS ---
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }

      // --- STATE ---
      const state = {
        imageSrc: null,
        topPos: 0,
        height: 80,
        showExit: false,
        imgHeight: 0
      };

      // --- ELEMENTS ---
      const fileInput = document.getElementById('image-upload');
      const uploadLabelText = document.getElementById('upload-label-text');
      
      const topSlider = document.getElementById('top-slider');
      const dispTop = document.getElementById('disp-top');
      
      const heightSlider = document.getElementById('height-slider');
      const dispHeight = document.getElementById('disp-height');
      
      const exitToggle = document.getElementById('exit-toggle');
      const downloadBtn = document.getElementById('download-btn');

      // Preview Elements
      const placeholderView = document.getElementById('placeholder-view');
      const canvasWrapper = document.getElementById('canvas-wrapper');
      const baseImg = document.getElementById('base-img');
      const headerOverlay = document.getElementById('header-overlay');
      const exitLinkContainer = document.getElementById('exit-link-container');

      // --- LISTENERS ---

      // 1. File Upload
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          state.imageSrc = event.target.result;
          const img = new Image();
          img.onload = () => {
            state.imgHeight = img.naturalHeight;
            
            // Set image
            baseImg.src = state.imageSrc;
            
            // Show canvas
            placeholderView.classList.add('hidden');
            canvasWrapper.classList.remove('hidden');
            
            // Enable controls
            topSlider.disabled = false;
            topSlider.max = state.imgHeight - 50; // Prevent scrolling off screen
            heightSlider.disabled = false;
            downloadBtn.disabled = false;
            
            if (uploadLabelText) uploadLabelText.innerText = "Replace Image";
          };
          img.src = state.imageSrc;
        };
        reader.readAsDataURL(file);
        e.target.value = ''; 
      });

      // 2. Sliders
      topSlider.addEventListener('input', (e) => {
        state.topPos = parseInt(e.target.value);
        dispTop.innerText = `${state.topPos}px`;
        headerOverlay.style.top = `${state.topPos}px`;
      });

      heightSlider.addEventListener('input', (e) => {
        state.height = parseInt(e.target.value);
        dispHeight.innerText = `${state.height}px`;
        headerOverlay.style.height = `${state.height}px`;
      });

      // 3. Toggle
      exitToggle.addEventListener('change', (e) => {
        state.showExit = e.target.checked;
        if (state.showExit) {
          exitLinkContainer.classList.remove('hidden');
        } else {
          exitLinkContainer.classList.add('hidden');
        }
      });

      // 4. Download
      downloadBtn.addEventListener('click', async () => {
        if (!state.imageSrc) return;
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = 'Generating...';
        downloadBtn.disabled = true;

        try {
          const canvas = await html2canvas(document.getElementById('capture-target'), {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: null
          });
          
          const link = document.createElement('a');
          link.download = `amex-mockup-${Date.now()}.png`;
          link.href = canvas.toDataURL('image/png');
          link.click();
        } catch (err) {
          console.error(err);
          alert('Export failed.');
        } finally {
          downloadBtn.innerHTML = originalText;
          downloadBtn.disabled = false;
        }
      });

    </script>
  </body>
</html>
