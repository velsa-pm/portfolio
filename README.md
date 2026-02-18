<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Feature Expansion Mockup Generator</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap'); /* For Credit Card Number */
      
      body { font-family: 'Inter', sans-serif; }
      
      /* Custom Scrollbar */
      .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #4b5563 #1f2937; }
      .custom-scrollbar::-webkit-scrollbar { width: 6px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: #1f2937; }
      .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #4b5563; border-radius: 10px; }

      /* Animation classes */
      .fade-in { animation: fadeIn 0.3s ease-in-out; }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

      /* Card Shimmer Effect */
      .card-shine {
        background: linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.4) 45%, transparent 50%);
        background-size: 200% 100%;
        animation: shine 5s infinite linear;
      }
      @keyframes shine { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
    </style>
  </head>
  <body class="bg-gray-100 text-gray-900 h-screen overflow-hidden flex">

    <aside class="w-80 bg-gray-800 border-r border-gray-700 flex flex-col h-full shadow-xl z-20 shrink-0">
      
      <div class="p-6 border-b border-gray-700 bg-gray-900">
        <h1 class="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <i data-lucide="sliders" class="w-5 h-5 text-indigo-400"></i>
          Split & Stitch
        </h1>
        <p class="text-xs text-gray-400 mt-1">Mockup Generator</p>
      </div>

      <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
        
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold border border-indigo-500/30">1</span>
            <h2 class="text-sm font-semibold text-white">Source Image</h2>
          </div>
          <div class="relative">
            <input type="file" accept="image/*" id="image-upload" class="hidden" />
            <label for="image-upload" class="flex flex-col items-center justify-center w-full px-4 py-6 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer hover:bg-gray-700 hover:border-indigo-500 transition-all group">
              <i data-lucide="upload" class="w-8 h-8 text-gray-400 group-hover:text-indigo-400 mb-2"></i>
              <span id="upload-label-text" class="text-xs text-gray-400 group-hover:text-gray-300 font-medium">Click to Upload Screenshot</span>
            </label>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold border border-indigo-500/30">2</span>
            <h2 class="text-sm font-semibold text-white flex items-center gap-2">
              <i data-lucide="layout" class="w-4 h-4"></i> Layout
            </h2>
          </div>
          <div class="space-y-5 bg-gray-700/30 p-4 rounded-lg border border-gray-700">
            
            <div class="w-full">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs font-medium text-gray-300">Split Position (Y)</span>
                <span id="disp-split" class="text-xs text-gray-400 font-mono">600px</span>
              </div>
              <input type="range" id="split-slider" min="0" max="2000" value="600" step="10" disabled class="w-full accent-indigo-600 opacity-50 disabled:cursor-not-allowed transition-opacity" />
            </div>

            <div class="w-full">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs font-medium text-gray-300">Container Width (X)</span>
                <span id="disp-width" class="text-xs text-gray-400 font-mono">80%</span>
              </div>
              <input type="range" id="width-slider" min="20" max="100" value="80" class="w-full accent-indigo-600" />
            </div>

            <div class="w-full">
              <div class="flex justify-between items-center mb-1">
                <span class="text-xs font-medium text-gray-300">Vertical Spacing (Height)</span>
                <span id="disp-height" class="text-xs text-gray-400 font-mono">60px</span>
              </div>
              <input type="range" id="height-slider" min="0" max="200" value="30" class="w-full accent-indigo-600" />
            </div>

          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold border border-indigo-500/30">3</span>
            <h2 class="text-sm font-semibold text-white flex items-center gap-2">
              <i data-lucide="type" class="w-4 h-4"></i> Content
            </h2>
          </div>
          <div class="space-y-3 bg-gray-700/30 p-4 rounded-lg border border-gray-700">
            
            <div>
              <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">Accordion Title</label>
              <input type="text" id="input-title" value="Card design selection" class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 flex justify-between">
                No. of Options
                <span id="opt-count-display" class="text-indigo-400">2</span>
              </label>
              <input type="range" id="input-num-options" min="1" max="5" value="2" class="w-full accent-indigo-600 cursor-pointer" />
            </div>

            <div id="dynamic-labels-container" class="space-y-3 border-t border-gray-700 pt-3 mt-2">
              </div>

          </div>
        </div>
      </div>

      <div class="p-6 border-t border-gray-700 bg-gray-900">
        <button id="download-btn" disabled class="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors">
          <i data-lucide="download" class="w-4 h-4 mr-2"></i>
          Download Mockup
        </button>
      </div>
    </aside>

    <main class="flex-1 h-full bg-gray-200 overflow-auto p-8 flex justify-center relative">
      
      <div id="placeholder-view" class="flex flex-col items-center justify-center text-center max-w-lg animate-in fade-in duration-500">
        <div class="bg-gray-300 p-6 rounded-full mb-6">
          <i data-lucide="image" class="w-16 h-16 text-gray-500"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-700 mb-2">No Image Uploaded</h3>
        <p class="text-gray-500">Upload a screenshot from the sidebar to start editing your mockup.</p>
      </div>

      <div id="canvas-wrapper" class="hidden w-full max-w-[1200px] min-w-[320px]">
        
        <div id="capture-target" class="relative bg-white shadow-2xl mx-auto w-full">
          
          <div id="top-section" class="relative overflow-hidden w-full h-[600px] bg-gray-100">
            <img id="top-img" src="" alt="Top" class="w-full object-cover object-top block" />
          </div>

          <div id="injected-strip" class="w-full bg-white relative z-10 transition-all duration-300" style="padding-top: 30px; padding-bottom: 30px;">
            <div id="component-wrapper" class="mx-auto transition-all duration-300 w-[80%]">
              
              <div class="w-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden font-sans text-gray-900">
                
                <button id="acc-toggle" class="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-gray-50 transition-colors text-left">
                  <div class="flex items-center gap-3">
                    <i data-lucide="credit-card" class="w-6 h-6 text-blue-900"></i>
                    <span id="display-title" class="font-bold text-lg text-gray-800">Card design selection</span>
                  </div>
                  <i data-lucide="chevron-up" class="w-5 h-5 text-gray-400 transition-transform duration-200"></i>
                </button>

                <div id="acc-body" class="transition-all duration-300 ease-in-out max-h-[600px] opacity-100 overflow-hidden border-t border-gray-100">
                  <div class="p-8 bg-gray-50/50">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                      
                      <div class="space-y-6">
                        <h3 class="text-lg font-bold text-gray-800">Please select the design you want.</h3>
                        <div id="radio-list" class="space-y-4">
                           </div>
                        <p class="text-xs text-gray-500 mt-6">*The card image is for illustrative purposes only and may differ from the actual color.</p>
                      </div>

                      <div class="flex items-center justify-center p-4">
                         
                         <div id="card-preview" class="relative w-full aspect-[1.586/1] rounded-xl shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border-t border-white/40 overflow-hidden group">
                            
                            <div id="card-bg" class="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 transition-colors duration-500"></div>
                            <div class="card-shine absolute inset-0"></div>

                            <div class="absolute inset-0 p-6 flex flex-col justify-between text-white/90 drop-shadow-md">
                               <div class="flex justify-between items-start">
                                  <div class="w-12 h-9 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-md border border-yellow-500/30 flex items-center justify-center opacity-90">
                                     <div class="w-8 h-6 border border-gray-400/50 rounded-sm grid grid-cols-2 grid-rows-2 gap-[1px]"></div>
                                  </div>
                                  <div class="text-sm font-bold tracking-widest opacity-80">PREMIUM BANK</div>
                               </div>

                               <div class="space-y-1">
                                  <div class="text-xs opacity-75">CARD NUMBER</div>
                                  <div class="font-mono text-xl tracking-widest" style="font-family: 'Share Tech Mono', monospace;">•••• •••• •••• 8842</div>
                               </div>

                               <div class="flex justify-between items-end">
                                  <div class="space-y-0.5">
                                     <div class="text-[10px] opacity-75">CARD HOLDER</div>
                                     <div class="text-sm font-bold tracking-wider">C F FROST</div>
                                  </div>
                                  <i data-lucide="nfc" class="w-8 h-8 opacity-60"></i>
                               </div>
                            </div>
                         </div>
                         </div>

                    </div>

                  </div>
                </div>
              </div>
              </div>
          </div>

          <div id="bottom-section" class="relative overflow-hidden w-full h-auto bg-white">
            <img id="bot-img" src="" alt="Bottom" class="w-full block" style="margin-top: -600px;" />
          </div>

        </div>
      </div>
    </main>

    <script>
      // --- INITIALIZE ICONS ---
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }

      // --- STATE MANAGEMENT ---
      const state = {
        imageSrc: null,
        splitPos: 600,
        containerWidth: 80,
        verticalPadding: 30, // New Height/Padding state
        imgHeight: 0,
        imgWidth: 0,
        title: "Card design selection",
        numOptions: 2,
        selectedIndex: 0,
        // Preset Styles simulating Gold, Rose Gold, Platinum, Black, Blue
        optionsData: [
          { label: "Preferred Gold", from: "from-yellow-200", via: "via-yellow-400", to: "to-yellow-600", text: "text-gray-900" },
          { label: "Rose Gold", from: "from-rose-200", via: "via-rose-300", to: "to-rose-400", text: "text-rose-900" },
          { label: "Platinum", from: "from-gray-300", via: "via-gray-100", to: "to-gray-400", text: "text-gray-800" },
          { label: "Centurion Black", from: "from-gray-800", via: "via-gray-900", to: "to-black", text: "text-white" },
          { label: "Sky Blue", from: "from-sky-300", via: "via-sky-500", to: "to-blue-600", text: "text-white" }
        ]
      };

      // --- DOM ELEMENTS ---
      const fileInput = document.getElementById('image-upload');
      const uploadLabelText = document.getElementById('upload-label-text');
      const splitSlider = document.getElementById('split-slider');
      const dispSplit = document.getElementById('disp-split');
      const widthSlider = document.getElementById('width-slider');
      const heightSlider = document.getElementById('height-slider'); // New Slider
      const dispHeight = document.getElementById('disp-height');     // New Display
      const inputTitle = document.getElementById('input-title');
      const inputNumOptions = document.getElementById('input-num-options');
      const optCountDisplay = document.getElementById('opt-count-display');
      const dynamicLabelsContainer = document.getElementById('dynamic-labels-container');
      const downloadBtn = document.getElementById('download-btn');

      // Preview Elements
      const displayTitle = document.getElementById('display-title');
      const radioList = document.getElementById('radio-list');
      const cardBg = document.getElementById('card-bg');
      const topSection = document.getElementById('top-section');
      const topImg = document.getElementById('top-img');
      const botImg = document.getElementById('bot-img');
      const placeholderView = document.getElementById('placeholder-view');
      const canvasWrapper = document.getElementById('canvas-wrapper');
      const componentWrapper = document.getElementById('component-wrapper');
      const injectedStrip = document.getElementById('injected-strip'); // New reference

      // Accordion Logic
      const accToggle = document.getElementById('acc-toggle');
      const accBody = document.getElementById('acc-body');

      // --- INIT ---
      function init() {
        renderSidebarInputs();
        renderRadioList();
        updateCardPreview();
        updateSplit(); 
      }

      // --- RENDER FUNCTIONS ---

      // 1. Render Sidebar Inputs (The Text Fields)
      function renderSidebarInputs() {
        dynamicLabelsContainer.innerHTML = ''; 

        for (let i = 0; i < state.numOptions; i++) {
          const data = state.optionsData[i];
          
          const wrapper = document.createElement('div');
          wrapper.className = "fade-in";
          wrapper.innerHTML = `
            <div class="mb-2">
              <label class="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-gradient-to-r ${data.from} ${data.to}"></span>
                Option ${i + 1} Label
              </label>
              <input type="text" 
                     data-index="${i}" 
                     value="${data.label}" 
                     class="option-input w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
              />
            </div>
          `;
          dynamicLabelsContainer.appendChild(wrapper);
        }

        // Attach listeners
        document.querySelectorAll('.option-input').forEach(input => {
          input.addEventListener('input', (e) => {
            const idx = e.target.getAttribute('data-index');
            state.optionsData[idx].label = e.target.value;
            renderRadioList(); // Update preview text
          });
        });
      }

      // 2. Render The Radio List (Preview Side)
      function renderRadioList() {
        radioList.innerHTML = ''; 

        for (let i = 0; i < state.numOptions; i++) {
          const data = state.optionsData[i];
          const isSelected = i === state.selectedIndex;
          
          const label = document.createElement('label');
          label.className = `flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${isSelected ? 'bg-blue-50/50' : 'hover:bg-gray-100'}`;
          
          label.innerHTML = `
            <div class="relative flex items-center justify-center w-5 h-5">
               <input type="radio" name="card-radio" ${isSelected ? 'checked' : ''} class="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-blue-600 transition-colors" />
               <div class="absolute w-2.5 h-2.5 bg-blue-600 rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
            </div>
            <span class="text-base ${isSelected ? 'font-semibold text-gray-900' : 'text-gray-600'}">${data.label}</span>
          `;

          label.addEventListener('click', () => {
             state.selectedIndex = i;
             renderRadioList(); // Re-render to update active styling
             updateCardPreview(); // Update the big card image
          });

          radioList.appendChild(label);
        }
      }

      // 3. Update the Big Card Graphic
      function updateCardPreview() {
         const data = state.optionsData[state.selectedIndex];
         // Remove old gradient classes
         cardBg.className = `absolute inset-0 bg-gradient-to-br ${data.from} ${data.via} ${data.to} transition-all duration-700`;
      }

      // --- EVENT LISTENERS ---

      // Title
      inputTitle.addEventListener('input', (e) => {
        state.title = e.target.value;
        displayTitle.innerText = state.title;
      });

      // Number of Options Slider
      inputNumOptions.addEventListener('input', (e) => {
        state.numOptions = parseInt(e.target.value);
        optCountDisplay.innerText = state.numOptions;
        // Reset selection if out of bounds
        if (state.selectedIndex >= state.numOptions) state.selectedIndex = 0;
        renderSidebarInputs();
        renderRadioList();
        updateCardPreview();
      });

      // File Upload
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          state.imageSrc = event.target.result;
          const img = new Image();
          img.onload = () => {
            state.imgHeight = img.naturalHeight;
            state.imgWidth = img.naturalWidth;
            
            topImg.src = state.imageSrc;
            botImg.src = state.imageSrc;
            
            placeholderView.classList.add('hidden');
            canvasWrapper.classList.remove('hidden');
            
            splitSlider.disabled = false;
            splitSlider.classList.remove('opacity-50', 'disabled:cursor-not-allowed');
            splitSlider.max = state.imgHeight;
            downloadBtn.disabled = false;
            
            if (uploadLabelText) uploadLabelText.innerText = "Replace Image";

            if(state.splitPos === 600 && state.imgHeight > 1000) {
                state.splitPos = Math.floor(state.imgHeight * 0.3);
                splitSlider.value = state.splitPos;
            }
            updateSplit();
          };
          img.src = state.imageSrc;
        };
        reader.readAsDataURL(file);
        e.target.value = ''; 
      });

      // Layout Sliders
      splitSlider.addEventListener('input', (e) => {
        state.splitPos = parseInt(e.target.value);
        updateSplit();
      });

      widthSlider.addEventListener('input', (e) => {
        state.containerWidth = parseInt(e.target.value);
        if (componentWrapper) componentWrapper.style.width = `${state.containerWidth}%`;
      });
      
      // NEW: Height Slider Logic
      heightSlider.addEventListener('input', (e) => {
        state.verticalPadding = parseInt(e.target.value);
        dispHeight.innerText = `${state.verticalPadding * 2}px`; // Show total extra height
        injectedStrip.style.paddingTop = `${state.verticalPadding}px`;
        injectedStrip.style.paddingBottom = `${state.verticalPadding}px`;
      });

      // Accordion Toggle
      if (accToggle) {
        accToggle.addEventListener('click', () => {
          const isClosed = accBody.style.maxHeight === '0px' || accBody.classList.contains('max-h-0');
          const icon = accToggle.querySelector('.lucide-chevron-up') || accToggle.querySelector('.lucide-chevron-down');
          
          if (isClosed) {
            accBody.style.maxHeight = '600px'; 
            accBody.classList.remove('max-h-0', 'opacity-0');
            accBody.classList.add('opacity-100');
            if(icon) icon.style.transform = "rotate(0deg)";
          } else {
            accBody.style.maxHeight = '0px';
            accBody.classList.add('max-h-0', 'opacity-0');
            accBody.classList.remove('opacity-100');
            if(icon) icon.style.transform = "rotate(180deg)";
          }
        });
      }

      // Download Button
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
          link.download = `mockup-${Date.now()}.png`;
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

      function updateSplit() {
        if (dispSplit) dispSplit.innerText = `${state.splitPos}px`;
        if (topSection) topSection.style.height = `${state.splitPos}px`;
        if (botImg) botImg.style.marginTop = `-${state.splitPos}px`;
      }

      // Start
      init();
    </script>
  </body>
</html>
