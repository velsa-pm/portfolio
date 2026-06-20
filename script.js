// 1. Select DOM Elements
const profileScreen = document.getElementById('profile-screen');
const contentScreen = document.getElementById('content-screen');
const backButton = document.getElementById('back-btn');
const profiles = document.querySelectorAll('.profile');
const dynamicContent = document.getElementById('dynamic-content');
const emailModal = document.getElementById('email-modal');
const skipBtn = document.getElementById('skip-email');
const closeIconBtn = document.getElementById('close-icon-btn');
const submitEmailBtn = document.getElementById('submit-email');

// 2. The Content Library
const portfolioData = {
    resume: `
        <div class="billboard">
            <div class="billboard-content">
                <h1 class="movie-title">PRITHVI VELSA</h1>
                <div class="meta-row">
                    <span class="match-score">99% Match</span>
                    <span class="year">2026</span>
                    <span class="maturity-rating">PM-Expert</span>
                    <span class="season-count">5 Seasons</span>
                    <span class="hd-badge">HD</span>
                </div>
                <p class="synopsis">
                    Product Manager specializing in Customer Onboarding and International Growth. 
                    Currently driving 'Acquisition Acceleration' at American Express. 
                    Proven track record of scaling revenue by $1M+, optimizing conversion funnels, 
                    and leading cross-functional teams across Japan, Canada, and Mexico.
                </p>
                <div class="billboard-actions">
                    <button id="open-modal-btn" class="net-btn primary-white">
                        <span class="icon">▶</span> Contact
                    </button>
                    <button class="net-btn secondary-gray">
                        <span class="icon">ℹ</span> More Info
                    </button>
                </div>
            </div>
            <div class="billboard-poster-container">
                <img src="assets/resume_movieposter.png" alt="Supercharging Onboarding Poster" class="billboard-poster">
            </div>
        </div>

        <div class="content-grid">
            <div class="episodes-col">
                <div class="section-header">
                    <h3>Episodes</h3>
                    <span class="section-tagline">Career History</span>
                </div>
                <div class="episode-row">
                    <div class="episode-thumb">2024</div>
                    <div class="episode-info">
                        <div class="episode-header">
                            <h4>1. The Amex Chapter</h4>
                            <span class="duration">Present</span>
                        </div>
                        <p class="episode-desc">
                            <strong>PM - Customer Onboarding (Gurugram).</strong> Driving international growth via 'Acquisition Acceleration'. 
                            Launched BYB Page optimization generating ~$1M in revenue. Orchestrating roadmap for Japan and Mexico markets 
                            to amplify new account growth.
                        </p>
                    </div>
                </div>
                <div class="episode-row">
                    <div class="episode-thumb">2022</div>
                    <div class="episode-info">
                        <div class="episode-header">
                            <h4>2. The Paisabazaar Arc</h4>
                            <span class="duration">2 Years</span>
                        </div>
                        <p class="episode-desc">
                            <strong>PM - Business Loans.</strong> Expanded lending portfolio by 40% (avg monthly disbursal 250 Cr). 
                            Led Mobile-First UI/UX revamp boosting conversions by 70%. Onboarded 10+ new partners to diversify credit availability.
                        </p>
                    </div>
                </div>
                <div class="episode-row">
                    <div class="episode-thumb">2020</div>
                    <div class="episode-info">
                        <div class="episode-header">
                            <h4>3. Now.gg Origins</h4>
                            <span class="duration">2 Years</span>
                        </div>
                        <p class="episode-desc">
                            <strong>Product Consultant - Gaming.</strong> Executed 0-1 launch in the US, driving growth to 1.5M DAUs. 
                            Orchestrated roadmap of 60+ features resulting in 20% engagement boost and increased Net ARR by ~$750k.
                        </p>
                    </div>
                </div>
            </div>
            <div class="details-col">
                <div class="detail-item">
                    <span class="detail-label">Genres:</span>
                    <span class="detail-text">Conversion Rate Optimization, GTM Strategy, Roadmap Planning</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Cast:</span>
                    <span class="detail-text">Engineers, Designers, Stakeholders</span>
                </div>
                <div class="detail-item" style="margin-top:20px;">
                    <span class="detail-label">Tags:</span>
                    <div class="skills-cloud">
                        <span class="pill">Agile</span>
                        <span class="pill">Product Discovery</span>
                        <span class="pill">User Research</span>
                        <span class="pill">A/B Testing</span>
                        <span class="pill">Compliance</span>
                        <span class="pill">Localization</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    projects: `
        <div class="billboard project-billboard">
            <div class="billboard-content">
                <h1 class="movie-title">Featured Project</h1>
                <p class="synopsis">
                    <strong>The Netflix Portfolio.</strong> A deep dive into the code behind this website. 
                    Pure HTML/CSS/JS implementation of a complex streaming UI without frameworks.
                </p>
                <div class="billboard-actions">
                    <button class="net-btn primary-white" onclick="window.open('https://github.com/prithvivelsa', '_blank')">
                        <span class="icon">▶</span> View Code
                    </button>
                </div>
            </div>
        </div>
        <div class="carousel-section">
            <h3 class="carousel-title">Trending Now</h3>
            <div class="carousel-container">
                <div class="project-card">
                    <div class="card-image" style="background: linear-gradient(135deg, #003366 0%, #0055aa 100%);"><span class="card-badge">New</span></div>
                    <div class="card-info"><div class="card-actions"><button class="round-btn">▶</button><button class="round-btn">+</button></div><h4 class="card-title">Acquisition Engine</h4><div class="card-meta"><span class="match-score">98% Match</span><span class="maturity-rating">Amex</span></div><div class="card-tags"><span>Growth</span> • <span>React</span></div></div>
                </div>
                <div class="project-card">
                    <div class="card-image" style="background: linear-gradient(135deg, #b31217 0%, #e52d27 100%);"><span class="card-badge">Top 10</span></div>
                    <div class="card-info"><div class="card-actions"><button class="round-btn">▶</button><button class="round-btn">+</button></div><h4 class="card-title">Lending Revamp</h4><div class="card-meta"><span class="match-score">95% Match</span><span class="maturity-rating">Fintech</span></div><div class="card-tags"><span>UX/UI</span> • <span>Mobile</span></div></div>
                </div>
                <div class="project-card">
                    <div class="card-image" style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);"></div>
                    <div class="card-info"><div class="card-actions"><button class="round-btn">▶</button><button class="round-btn">+</button></div><h4 class="card-title">US Launch GTM</h4><div class="card-meta"><span class="match-score">92% Match</span><span class="maturity-rating">Gaming</span></div><div class="card-tags"><span>Strategy</span> • <span>0-to-1</span></div></div>
                </div>
                <div class="project-card">
                    <div class="card-image" style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);"></div>
                    <div class="card-info"><div class="card-actions"><button class="round-btn">▶</button><button class="round-btn">+</button></div><h4 class="card-title">Netflix Clone</h4><div class="card-meta"><span class="match-score">100% Match</span><span class="maturity-rating">Web</span></div><div class="card-tags"><span>Frontend</span> • <span>Design</span></div></div>
                </div>
            </div>
        </div>
    `,
    blog: `
        <div class="billboard">
            <div class="billboard-content">
                <h1 class="movie-title">THE WRITERS' ROOM</h1>
                <div class="meta-row"><span class="match-score">New Episodes</span><span class="maturity-rating">Thoughts</span><span class="hd-badge">4K</span></div>
                <p class="synopsis">A collection of essays on Product Management, User Psychology, and the future of Fintech. Treat these as open-source strategy documents.</p>
            </div>
        </div>
        <div class="content-grid" style="grid-template-columns: 1fr;">
            <div class="episodes-col">
                <div class="section-header"><h3>Season 1: The AI Era</h3><span class="section-tagline">2026 - Present</span></div>
                <div class="episode-row blog-row" data-id="chat-ux">
                    <div class="episode-thumb">Ep. 1</div>
                    <div class="episode-info"><div class="episode-header"><h4>Why "Chat" is the Wrong UX for Finance</h4><span class="duration">5 min read</span></div><p class="episode-desc">Conversational AI is trending, but for high-stakes financial decisions, users prefer deterministic UI. Here is why the hybrid model wins.</p></div>
                </div>
                <div class="episode-row blog-row" data-id="onboarding">
                    <div class="episode-thumb">Ep. 2</div>
                    <div class="episode-info"><div class="episode-header"><h4>The "Onboarding" Fallacy</h4><span class="duration">3 min read</span></div><p class="episode-desc">We spend too much time optimizing sign-up forms and not enough time optimizing the "First Ah-Ha Moment".</p></div>
                </div>
            </div>
        </div>
    `,
    playground: `
        <div class="billboard">
            <div class="billboard-content">
                <h1 class="movie-title">VELSA LABS</h1>
                <p class="synopsis">Micro-SaaS tools and interactive prototypes built with vanilla JavaScript. Field-tested for Product Management.</p>
            </div>
        </div>
        <div class="section-header" style="padding: 0 40px;"><h3>Available Tools</h3></div>
        <div class="games-grid">
            <div class="game-card app-trigger" data-app="global-clock">
                <div class="game-poster" style="background: linear-gradient(135deg, #cc2b5e 0%, #753a88 100%); display:flex; align-items:center; justify-content:center;"><span style="font-size:3rem;">🌍</span></div>
                <div class="game-info"><h4 class="game-title">Global Sync</h4><span class="game-genre">Team Ops</span></div>
            </div>
             <div class="game-card" onclick="alert('Coming soon!')">
                <div class="game-poster" style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); display:flex; align-items:center; justify-content:center;"><span style="font-size:3rem; font-weight:700; color:rgba(255,255,255,0.2);">RICE</span></div>
                <div class="game-info"><h4 class="game-title">Prioritizer</h4><span class="game-genre">Coming Soon</span></div>
            </div>
        </div>
    `
};

// 3. LOGIC CONTROLLERS

// --- APP: Global Clock (DST Aware & Veto Logic) ---
const appData = {
    'global-clock': {
        title: "Global Standup Planner",
        date: "Team Ops v2.1",
        
        // Configuration: Use IANA Timezones for DST Awareness
        // Added 'city' for shorter labels in verdict text
        markets: {
            'india': { label: '🇮🇳 India (IST)', city: 'India', zone: 'Asia/Kolkata', default: true },
            'ny':    { label: '🇺🇸 New York (EST)', city: 'NYC', zone: 'America/New_York', default: true },
            'japan': { label: '🇯🇵 Tokyo (JST)', city: 'Tokyo', zone: 'Asia/Tokyo', default: true },
            'uk':    { label: '🇬🇧 London (GMT)', city: 'London', zone: 'Europe/London', default: false },
            'mst':   { label: '🇺🇸 Denver (MST)', city: 'Denver', zone: 'America/Denver', default: false },
            'aus':   { label: '🇦🇺 Sydney (AEST)', city: 'Sydney', zone: 'Australia/Sydney', default: false }
        },

        body: `
            <div class="app-container">
                <p class="app-intro">Find the "Golden Hour" for cross-border meetings. <strong>Drag any slider</strong> to sync the global team.</p>
                
                <div class="market-selector" id="market-chips"></div>

                <div class="time-control">
                    <label>Primary: India (IST)</label>
                    <input type="range" id="master-slider" min="0" max="1439" step="15" class="master-slider">
                    <div class="time-readout" id="master-readout">--:--</div>
                </div>

                <div class="zones-container" id="zones-list"></div>

                <div class="verdict-box">
                    <span class="result-label">MEETING FEASIBILITY</span>
                    <span id="verdict-text" class="result-value">--</span>
                </div>
            </div>
        `,

        init: () => {
            const config = appData['global-clock'].markets;
            const container = document.getElementById('zones-list');
            const chipContainer = document.getElementById('market-chips');
            const masterSlider = document.getElementById('master-slider');
            const masterReadout = document.getElementById('master-readout');
            const verdictText = document.getElementById('verdict-text');
            const verdictValue = document.querySelector('.result-value');

            let activeMarkets = Object.keys(config).filter(k => config[k].default);
            let currentUTC = 720; // Start at 12:00 UTC

            // --- Helpers ---
            // Calculate current offset in minutes for a given IANA Zone
            const getOffset = (timeZone) => {
                const now = new Date();
                const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
                const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timeZone }));
                return (tzDate.getTime() - utcDate.getTime()) / 60000;
            };

            const formatTime = (minutes) => {
                let m = minutes % 1440;
                if (m < 0) m += 1440;
                const h = Math.floor(m / 60);
                const min = Math.floor(m % 60);
                const ampm = h >= 12 ? 'PM' : 'AM';
                const h12 = h % 12 || 12;
                return `${h12}:${min.toString().padStart(2, '0')} ${ampm}`;
            };

            // STRICT STATUS CODES
            const STATUS = { SLEEP: 0, STRETCH: 1, WORK: 2 };
            
            const getStatus = (minutes) => {
                let m = minutes % 1440;
                if (m < 0) m += 1440;
                
                // Work: 9AM (540) to 6PM (1080)
                if (m >= 540 && m <= 1080) return STATUS.WORK;
                
                // Stretch: 7AM-9AM (420-540) OR 6PM-10PM (1080-1320)
                if ((m >= 420 && m < 540) || (m > 1080 && m <= 1320)) return STATUS.STRETCH;
                
                // Sleep: 10PM to 7AM
                return STATUS.SLEEP;
            };

            // --- Renderers ---
            const renderChips = () => {
                chipContainer.innerHTML = '';
                Object.keys(config).forEach(key => {
                    const chip = document.createElement('div');
                    chip.className = `market-chip ${activeMarkets.includes(key) ? 'active' : ''}`;
                    chip.innerText = config[key].city; 
                    chip.onclick = () => toggleMarket(key);
                    chipContainer.appendChild(chip);
                });
            };

            const toggleMarket = (key) => {
                if (activeMarkets.includes(key)) {
                    if (activeMarkets.length > 1) activeMarkets = activeMarkets.filter(k => k !== key);
                } else {
                    activeMarkets.push(key);
                }
                renderChips(); renderZones(); updateAll(currentUTC);
            };

            const renderZones = () => {
                container.innerHTML = '';
                activeMarkets.forEach(key => {
                    if(key === 'india') return; 

                    const m = config[key];
                    const row = document.createElement('div');
                    row.className = 'zone-row';
                    row.innerHTML = `
                        <div class="zone-label">${m.label}</div>
                        <div class="zone-slider-container">
                            <div class="daylight-gradient"></div>
                            <div class="zone-cursor" id="cursor-${key}"></div>
                            <input type="range" class="zone-input" id="input-${key}" min="0" max="1439" step="15" data-zone="${m.zone}">
                        </div>
                        <div class="zone-time" id="time-${key}">--:--</div>
                    `;
                    container.appendChild(row);

                    const input = row.querySelector('input');
                    input.addEventListener('input', (e) => {
                        const localVal = parseInt(e.target.value);
                        const offset = getOffset(m.zone);
                        const utc = localVal - offset;
                        updateAll(utc);
                    });
                });
            };

            // --- Sync & Verdict Logic (UPDATED) ---
            const updateAll = (utcMinutes) => {
                currentUTC = utcMinutes;
                
                // 1. Update Master (India)
                const istOffset = getOffset(config['india'].zone);
                const istTime = currentUTC + istOffset;
                let istSliderVal = istTime % 1440;
                if (istSliderVal < 0) istSliderVal += 1440;
                masterSlider.value = istSliderVal;
                masterReadout.innerText = formatTime(istTime);

                // 2. Collect Stats from ALL Active Markets (Including India)
                const asleep = [];
                const stretching = [];
                
                // Check India First
                const istStatus = getStatus(istTime);
                if (istStatus === STATUS.SLEEP) asleep.push(config['india'].city);
                if (istStatus === STATUS.STRETCH) stretching.push(config['india'].city);

                // Check Other Zones
                activeMarkets.forEach(key => {
                    if(key === 'india') return;

                    const m = config[key];
                    const offset = getOffset(m.zone);
                    const localTime = currentUTC + offset;
                    
                    let uiVal = localTime % 1440;
                    if (uiVal < 0) uiVal += 1440;

                    const cursor = document.getElementById(`cursor-${key}`);
                    const timeTxt = document.getElementById(`time-${key}`);
                    const input = document.getElementById(`input-${key}`);
                    
                    // Update UI
                    if (document.activeElement !== input) input.value = uiVal;
                    cursor.style.left = (uiVal / 1440 * 100) + '%';
                    timeTxt.innerText = formatTime(localTime);

                    // Collect Status
                    const status = getStatus(localTime);
                    if (status === STATUS.SLEEP) asleep.push(m.city);
                    if (status === STATUS.STRETCH) stretching.push(m.city);
                });

               // 3. Strict Verdict Logic (UPDATED)
    if (asleep.length > 0) {
        // Fail State: List ALL sleeping locations
        // New: Join them with '&' just like the stretch logic
        const list = asleep.join(' & ');
        
        // Truncate if too long (e.g., "Impossible: NYC & London & Denver...")
        if (asleep.length > 2) {
            verdictText.innerText = `Impossible: ${asleep.length} mkts`;
        } else {
            verdictText.innerText = `Impossible: ${list}`;
        }
        
        verdictValue.style.color = "#e50914"; // Red
        
        // Dynamic font size: Smaller if the text is long
        verdictText.style.fontSize = list.length > 10 ? "1.8rem" : "2.5rem";

    } else if (stretching.length > 0) {
        // Warn State: Everyone awake, but someone is stretching
        const list = stretching.join(' & ');
        verdictText.innerText = `Stretch: ${list}`;
        verdictValue.style.color = "#f5c518"; // Yellow
        verdictText.style.fontSize = list.length > 10 ? "1.8rem" : "2.5rem";

    } else {
        // Success State: Everyone is 9-6
        verdictText.innerText = "🦄 GOLDEN HOUR";
        verdictValue.style.color = "#46d369"; // Green
        verdictText.style.fontSize = "2.5rem";
    }
            };

            // --- Init ---
            masterSlider.addEventListener('input', (e) => {
                const local = parseInt(e.target.value);
                const offset = getOffset(config['india'].zone);
                const utc = local - offset;
                updateAll(utc);
            });

            renderChips(); renderZones(); updateAll(currentUTC);
        }
    }
};

function setupAppClicks() {
    const triggers = document.querySelectorAll('.app-trigger');
    const blogModal = document.getElementById('blog-modal');
    const titleEl = document.getElementById('blog-title');
    const dateEl = document.getElementById('blog-date');
    const bodyEl = document.getElementById('blog-body');
    const closeBtn = document.getElementById('close-blog-btn');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const appId = trigger.getAttribute('data-app');
            const app = appData[appId];
            if(app) {
                titleEl.innerText = app.title;
                dateEl.innerText = app.date;
                bodyEl.innerHTML = app.body;
                blogModal.classList.remove('hidden');
                setTimeout(() => { if (app.init) app.init(); }, 100);
            }
        });
    });
    
    // Close Logic shared with blog
    const closeBlog = () => { blogModal.classList.add('hidden'); };
    if(closeBtn) closeBtn.addEventListener('click', closeBlog);
}

// --- PROJECT & BLOG LOGIC ---
const projectDetails = {
    'Acquisition Engine': { title: "Acquisition Engine", desc: "A walkthrough of how we optimized the 'Book Your Business' page for Amex, resulting in $1M revenue.", videoSrc: "" },
    'Lending Revamp': { title: "Lending Revamp", desc: "Exploring the Mobile-First UI overhaul for Paisabazaar.", videoSrc: "" },
    'US Launch GTM': { title: "US Launch Strategy", desc: "A breakdown of the 0-1 launch strategy for Now.gg in the US market.", videoSrc: "" },
    'Netflix Clone': { title: "The Code Behind This Site", desc: "A technical deep dive into how I built this portfolio using vanilla JavaScript.", videoSrc: "" }
};
function setupProjectClicks() {
    const cards = document.querySelectorAll('.project-card');
    const videoModal = document.getElementById('video-modal');
    const player = document.getElementById('main-video-player');
    const title = document.getElementById('video-title');
    const desc = document.getElementById('video-desc');
    const closeBtn = document.getElementById('close-video-btn');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardTitle = card.querySelector('.card-title').innerText;
            const data = projectDetails[cardTitle] || projectDetails['Netflix Clone']; 
            title.innerText = data.title; desc.innerText = data.desc; player.src = data.videoSrc;
            videoModal.classList.remove('hidden');
        });
    });
    const closeVideo = () => { videoModal.classList.add('hidden'); player.pause(); player.currentTime = 0; };
    if(closeBtn) closeBtn.addEventListener('click', closeVideo);
    window.addEventListener('click', (e) => { if (e.target === videoModal) closeVideo(); });
}

const blogPosts = {
    'chat-ux': {
        title: 'Why "Chat" is the Wrong UX for Finance', date: 'January 15, 2026',
        body: `<p>We are currently witnessing a massive shift in interface design...</p><h3>The Problem with Ambiguity</h3><p>In finance, precision is everything...</p>`
    },
    'onboarding': {
        title: 'The "Onboarding" Fallacy', date: 'December 20, 2025',
        body: `<p>Most Product Managers treat onboarding as a funnel optimization problem...</p><h3>The "First Ah-Ha Moment"</h3><p>True onboarding isn't about getting a user to fill out a profile...</p>`
    }
};
function setupBlogClicks() {
    const rows = document.querySelectorAll('.blog-row');
    const blogModal = document.getElementById('blog-modal');
    const titleEl = document.getElementById('blog-title');
    const dateEl = document.getElementById('blog-date');
    const bodyEl = document.getElementById('blog-body');
    rows.forEach(row => {
        row.addEventListener('click', () => {
            const id = row.getAttribute('data-id'); const post = blogPosts[id];
            if(post) { titleEl.innerText = post.title; dateEl.innerText = post.date; bodyEl.innerHTML = post.body; blogModal.classList.remove('hidden'); }
        });
    });
}

// --- ROUTER & HELPERS ---
const validateEmail = (email) => String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const extractNameFromEmail = (email) => { try { return email.split('@')[0].split(/[._0-9]/).filter(p => p.length>0).map(n => n.charAt(0).toUpperCase()+n.slice(1)).join(' '); } catch (e) { return "there"; } };

function handleRoute() {
    const hash = window.location.hash.substring(1);
    if (!hash) {
        profileScreen.classList.remove('hidden'); contentScreen.classList.remove('visible'); 
        setTimeout(() => contentScreen.classList.add('hidden'), 200); profiles.forEach(p => p.classList.remove('selected', 'muted'));
        document.body.style.justifyContent = 'flex-start'; document.body.style.height = '100vh';
        document.body.style.backgroundImage = "radial-gradient(circle at 30% 20%, rgba(40,40,40,1) 0%, rgba(20,20,20,1) 40%, #141414 100%)";
        return;
    }
    if (portfolioData[hash]) {
        dynamicContent.innerHTML = portfolioData[hash];
        profileScreen.classList.add('hidden'); contentScreen.classList.remove('hidden');
        requestAnimationFrame(() => contentScreen.classList.add('visible'));
        document.body.style.justifyContent = 'flex-start'; document.body.style.height = 'auto';
        document.body.style.backgroundImage = "radial-gradient(circle at 30% 20%, rgba(40,40,40,1) 0%, rgba(20,20,20,1) 40%, #141414 100%)";
        
        if (hash === 'resume' && !sessionStorage.getItem('hasSeenResumeModal')) setTimeout(() => { emailModal.classList.remove('hidden'); sessionStorage.setItem('hasSeenResumeModal', 'true'); }, 1000);
        if (hash === 'projects') setTimeout(setupProjectClicks, 100);
        if (hash === 'blog') setTimeout(setupBlogClicks, 100);
        if (hash === 'playground') setTimeout(setupAppClicks, 100);
    }
}

window.addEventListener('load', handleRoute);
window.addEventListener('hashchange', handleRoute);
profiles.forEach(profile => {
    profile.addEventListener('click', (e) => {
        e.preventDefault(); const contentKey = profile.getAttribute('data-content'); profile.classList.add('selected');
        profiles.forEach(other => { if (other !== profile) other.classList.add('muted'); });
        setTimeout(() => { window.location.hash = contentKey; }, 100); 
    });
});
backButton.addEventListener('click', () => { history.pushState("", document.title, window.location.pathname + window.location.search); handleRoute(); });
const closeModal = () => emailModal.classList.add('hidden');
if(skipBtn) skipBtn.addEventListener('click', closeModal);
if(closeIconBtn) closeIconBtn.addEventListener('click', closeModal);
if(submitEmailBtn) {
    submitEmailBtn.addEventListener('click', () => {
        const emailInput = document.getElementById('recruiter-email'); const email = emailInput.value.trim(); const originalBtnText = submitEmailBtn.textContent;
        if (!validateEmail(email)) { alert("Please enter a valid email address."); emailInput.style.borderColor = "#e50914"; return; }
        emailInput.style.borderColor = "#555"; const inferredName = extractNameFromEmail(email);
        submitEmailBtn.textContent = "Sending..."; submitEmailBtn.disabled = true;
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { user_email: email, user_name: inferredName })
        .then(() => { alert(`Success! Check your inbox, ${inferredName}.`); closeModal(); emailInput.value = ""; })
        .finally(() => { submitEmailBtn.textContent = originalBtnText; submitEmailBtn.disabled = false; });
    });
}
window.addEventListener('click', (e) => { if (e.target === emailModal) closeModal(); });