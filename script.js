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
    projects: `<div class="billboard"><h1 class="movie-title">PROJECTS</h1><p class="synopsis">Select a title to watch.</p></div>`,
    blog: `<div class="billboard"><h1 class="movie-title">THE BLOG</h1><p class="synopsis">Thoughts on PM and Tech.</p></div>`,
    playground: `<div class="billboard"><h1 class="movie-title">LABORATORY</h1><p class="synopsis">Experimental code and prototypes.</p></div>`
};

// 3. HELPER FUNCTIONS

// Regex to validate email format
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

// Logic to guess name from email string (e.g. prithvi.velsa@gmail -> Prithvi Velsa)
const extractNameFromEmail = (email) => {
    try {
        const localPart = email.split('@')[0];
        const nameParts = localPart.split(/[._0-9]/).filter(part => part.length > 0);
        
        if (nameParts.length > 0) {
            return nameParts.map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(' ');
        }
        return "there"; 
    } catch (e) {
        return "there";
    }
};

// 4. ROUTER LOGIC
function handleRoute() {
    const hash = window.location.hash.substring(1);

    if (!hash) {
        profileScreen.classList.remove('hidden');
        contentScreen.classList.remove('visible'); 
        setTimeout(() => contentScreen.classList.add('hidden'), 200);

        profiles.forEach(p => {
            p.classList.remove('selected', 'muted');
        });

        document.body.style.justifyContent = 'flex-start'; 
        document.body.style.height = '100vh';
        document.body.style.backgroundImage = "radial-gradient(circle at 30% 20%, rgba(40,40,40,1) 0%, rgba(20,20,20,1) 40%, #141414 100%)";
        return;
    }

    if (portfolioData[hash]) {
        dynamicContent.innerHTML = portfolioData[hash];
        
        profileScreen.classList.add('hidden');
        contentScreen.classList.remove('hidden');
        
        requestAnimationFrame(() => {
            contentScreen.classList.add('visible');
        });

        document.body.style.justifyContent = 'flex-start';
        document.body.style.height = 'auto';
        document.body.style.backgroundImage = "radial-gradient(circle at 30% 20%, rgba(40,40,40,1) 0%, rgba(20,20,20,1) 40%, #141414 100%)";
        
        // Modal Logic
        if (hash === 'resume') {
            const openBtn = document.getElementById('open-modal-btn');
            
            if (openBtn) {
                openBtn.addEventListener('click', () => {
                    emailModal.classList.remove('hidden');
                });
            }
            
            // Auto-trigger on first visit logic
            if (!sessionStorage.getItem('hasSeenResumeModal')) {
                setTimeout(() => {
                    emailModal.classList.remove('hidden');
                    sessionStorage.setItem('hasSeenResumeModal', 'true');
                }, 1000);
            }
        }
    }
}

// 5. EVENT LISTENERS
window.addEventListener('load', handleRoute);
window.addEventListener('hashchange', handleRoute);

profiles.forEach(profile => {
    profile.addEventListener('click', (e) => {
        e.preventDefault(); 
        const contentKey = profile.getAttribute('data-content');
        
        profile.classList.add('selected');
        profiles.forEach(otherProfile => {
            if (otherProfile !== profile) otherProfile.classList.add('muted');
        });

        setTimeout(() => {
            window.location.hash = contentKey;
        }, 100); 
    });

    profile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            profile.click();
        }
    });
});

backButton.addEventListener('click', () => {
    history.pushState("", document.title, window.location.pathname + window.location.search);
    handleRoute(); 
});

// MODAL CONTROLS
const closeModal = () => {
    emailModal.classList.add('hidden');
};

if(skipBtn) skipBtn.addEventListener('click', closeModal);
if(closeIconBtn) closeIconBtn.addEventListener('click', closeModal);

// EMAIL SUBMISSION LOGIC
if(submitEmailBtn) {
    submitEmailBtn.addEventListener('click', () => {
        const emailInput = document.getElementById('recruiter-email');
        const email = emailInput.value.trim();
        const originalBtnText = submitEmailBtn.textContent;

        // Validation
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            emailInput.style.borderColor = "#e50914"; // Error Red
            return;
        }
        emailInput.style.borderColor = "#555"; // Reset

        // Extract Name
        const inferredName = extractNameFromEmail(email);

        // UI Feedback
        submitEmailBtn.textContent = "Sending...";
        submitEmailBtn.disabled = true;

        // Send to EmailJS
        // TODO: Replace with your actual IDs
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            user_email: email,
            user_name: inferredName 
        })
        .then(() => {
            alert(`Success! Check your inbox, ${inferredName}.`);
            closeModal();
            emailInput.value = "";
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert("Oops! Something went wrong. Please try again.");
        })
        .finally(() => {
            submitEmailBtn.textContent = originalBtnText;
            submitEmailBtn.disabled = false;
        });
    });
}

window.addEventListener('click', (e) => {
    if (e.target === emailModal) closeModal();
});