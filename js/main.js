/**
 * CORE APPLICATION CONTROLLER (TAILWIND & MINIMAL LIGHT SYSTEM)
 * -------------------------------------------------------------
 * Controls DOM population, mobile navigation drawer, modals,
 * project filters, copy email toast, and dynamic typing effect.
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.portfolioData;
  if (!data) {
    console.error('portfolioData is not found.');
    return;
  }

  // Initialize all subsystems
  initHeaderAndHero(data);
  initMobileMenu();
  initTypingEffect(data.personal.subtitles);
  initRecruiterSnapshot(data);
  initSkillsSection(data.skills);
  initProjectsSection(data.projects);
  initExperienceSection(data.experience, data.education);
  initAchievements(data.achievements);
  initRecommendations(data.recommendations);
  initProjectModal();
  initContactForm(data.personal);
  initScrollSpy();
  initStatsCounter();
  initTerminal();
});

/* -------------------------------------------------------------
   1. HEADER, HERO & MOBILE MENU
   ------------------------------------------------------------- */
function initHeaderAndHero(data) {
  document.querySelectorAll('.data-name').forEach(el => el.textContent = data.personal.name);
  document.querySelectorAll('.data-role').forEach(el => el.textContent = data.personal.roleTitle);
  
  const statusBadge = document.getElementById('hero-status-badge');
  if (statusBadge) statusBadge.textContent = data.personal.availabilityBadge;

  const shortBio = document.getElementById('hero-short-bio');
  if (shortBio) shortBio.textContent = data.personal.shortBio;

  // Social Links
  document.querySelectorAll('.data-github-link').forEach(el => el.href = data.personal.github);
  document.querySelectorAll('.data-linkedin-link').forEach(el => el.href = data.personal.linkedin);
  document.querySelectorAll('.data-email-link').forEach(el => {
    el.href = `mailto:${data.personal.email}`;
    if (el.classList.contains('email-text')) el.textContent = data.personal.email;
  });

  // Resume Download / Preview Trigger
  document.querySelectorAll('.data-resume-download').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close when clicking a link inside mobile menu
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

/* -------------------------------------------------------------
   2. HERO DYNAMIC TYPING EFFECT
   ------------------------------------------------------------- */
function initTypingEffect(phrases) {
  const typingEl = document.getElementById('typing-text');
  if (!typingEl || !phrases || phrases.length === 0) return;

  let phraseIdx = 0;
  let letterIdx = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      typingEl.textContent = currentPhrase.substring(0, letterIdx - 1);
      letterIdx--;
      typingSpeed = 35;
    } else {
      typingEl.textContent = currentPhrase.substring(0, letterIdx + 1);
      letterIdx++;
      typingSpeed = 75;
    }

    if (!isDeleting && letterIdx === currentPhrase.length) {
      typingSpeed = 2200; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && letterIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 400; // Pause before next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* -------------------------------------------------------------
   3. RECRUITER 15-SECOND CHEAT SHEET
   ------------------------------------------------------------- */
function initRecruiterSnapshot(data) {
  const container = document.getElementById('recruiter-snapshot-content');
  if (!container) return;

  const snap = data.recruiterSnapshot;
  container.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="p-4 rounded-xl bg-purple-50/50 border border-purple-100 transition hover:border-purple-200">
        <span class="block text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">🎯 Targeted Roles</span>
        <span class="text-sm font-semibold text-slate-800">${snap.targetRoles}</span>
      </div>
      <div class="p-4 rounded-xl bg-purple-50/50 border border-purple-100 transition hover:border-purple-200">
        <span class="block text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">🎓 Expected Graduation</span>
        <span class="text-sm font-semibold text-slate-800">${snap.targetGraduation}</span>
      </div>
      <div class="p-4 rounded-xl bg-purple-50/50 border border-purple-100 transition hover:border-purple-200">
        <span class="block text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">⚡ Primary Languages</span>
        <span class="text-sm font-semibold text-slate-800">${snap.primaryLanguages}</span>
      </div>
      <div class="p-4 rounded-xl bg-purple-50/50 border border-purple-100 transition hover:border-purple-200">
        <span class="block text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">🛠️ Core Frameworks</span>
        <span class="text-sm font-semibold text-slate-800">${snap.coreFrameworks}</span>
      </div>
      <div class="p-4 rounded-xl bg-purple-50/50 border border-purple-100 transition hover:border-purple-200">
        <span class="block text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">📍 Location & Relocation</span>
        <span class="text-sm font-semibold text-slate-800">${data.personal.location}</span>
      </div>
      <div class="p-4 rounded-xl bg-purple-50/50 border border-purple-100 transition hover:border-purple-200">
        <span class="block text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">🌐 Work Authorization</span>
        <span class="text-sm font-semibold text-slate-800">${snap.workAuthorization}</span>
      </div>
    </div>
  `;
}

/* -------------------------------------------------------------
   4. TECHNICAL SKILLS MATRIX (TABS & PROGRESS BARS)
   ------------------------------------------------------------- */
function initSkillsSection(skillsData) {
  const categories = [
    { key: 'languages', title: 'Languages', icon: '⚡' },
    { key: 'backend', title: 'Backend & APIs', icon: '⚙️' },
    { key: 'frontend', title: 'Frontend UI', icon: '🎨' },
    { key: 'databaseCloud', title: 'Cloud & DevOps', icon: '☁️' },
    { key: 'fundamentals', title: 'CS Fundamentals', icon: '🧠' }
  ];

  const tabsContainer = document.getElementById('skills-tabs');
  const cardsContainer = document.getElementById('skills-grid');
  if (!tabsContainer || !cardsContainer) return;

  // Render Tabs
  tabsContainer.innerHTML = categories.map((cat, idx) => `
    <button class="skill-tab-btn px-4 py-2 text-sm font-semibold rounded-full border border-slate-200 text-slate-700 bg-white hover:border-purple-300 transition ${idx === 0 ? 'active' : ''}" data-category="${cat.key}">
      <span class="mr-1">${cat.icon}</span>
      <span>${cat.title}</span>
    </button>
  `).join('');

  function renderCategory(key) {
    const list = skillsData[key] || [];
    cardsContainer.innerHTML = list.map(skill => `
      <div class="minimal-card p-5">
        <div class="flex justify-between items-center mb-2.5">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-purple-600"></span>
            <span class="font-bold text-slate-900">${skill.name}</span>
          </div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">${skill.badge}</span>
        </div>
        <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div class="bg-gradient-to-r from-purple-600 to-indigo-500 h-full rounded-full transition-all duration-700" style="width: ${skill.level}%"></div>
        </div>
      </div>
    `).join('');
  }

  renderCategory('languages');

  tabsContainer.querySelectorAll('.skill-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.skill-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCategory(btn.getAttribute('data-category'));
    });
  });
}

/* -------------------------------------------------------------
   5. FEATURED PROJECTS SECTION
   ------------------------------------------------------------- */
function initProjectsSection(projects) {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  if (!grid) return;

  function renderProjects(filter = 'all') {
    const filtered = filter === 'all' 
      ? projects 
      : projects.filter(p => p.category === filter || (filter === 'featured' && p.featured));

    grid.innerHTML = filtered.map(p => `
      <article class="minimal-card p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">${p.category}</span>
            ${p.featured ? '<span class="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">⭐ Featured</span>' : ''}
          </div>
          
          <h3 class="text-lg font-bold text-slate-900 mb-2 leading-snug">${p.title}</h3>
          <p class="text-sm text-slate-600 mb-4 leading-relaxed">${p.tagline}</p>

          <div class="flex flex-wrap gap-1.5 mb-4">
            ${p.technologies.slice(0, 4).map(t => `<span class="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">${t}</span>`).join('')}
            ${p.technologies.length > 4 ? `<span class="text-xs font-medium bg-purple-50 text-purple-700 px-2 py-1 rounded-md border border-purple-200">+${p.technologies.length - 4}</span>` : ''}
          </div>

          <div class="bg-emerald-50 border border-emerald-200/80 rounded-lg p-3 text-xs text-emerald-800 leading-snug mb-5 flex items-start gap-2">
            <span class="text-emerald-600 font-bold">📈</span>
            <span><strong>Impact Metric:</strong> ${p.metrics[0]}</span>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button class="text-xs font-bold text-purple-700 hover:text-purple-900 transition flex items-center gap-1" data-open-modal="${p.id}">
            Architecture & Deep Dive →
          </button>
          
          <div class="flex items-center gap-2">
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" title="View Source on GitHub" class="p-1.5 rounded-lg text-slate-500 hover:text-purple-700 hover:bg-purple-50 transition">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" title="View Live Demo" class="p-1.5 rounded-lg text-slate-500 hover:text-purple-700 hover:bg-purple-50 transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </article>
    `).join('');

    // Attach modal open handlers
    grid.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.getAttribute('data-open-modal');
        const proj = projects.find(item => item.id === pId);
        if (proj) openProjectModal(proj);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
    });
  });

  renderProjects('all');
}

/* -------------------------------------------------------------
   6. PROJECT MODAL (STAR ARCHITECTURE DEEP-DIVE)
   ------------------------------------------------------------- */
function initProjectModal() {
  const modal = document.getElementById('project-detail-dialog');
  const closeBtn = document.getElementById('btn-close-project-modal');
  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.close());
  }

  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
      && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      modal.close();
    }
  });
}

function openProjectModal(p) {
  const modal = document.getElementById('project-detail-dialog');
  if (!modal) return;

  document.getElementById('modal-project-title').textContent = p.title;
  document.getElementById('modal-project-tagline').textContent = p.tagline;
  document.getElementById('modal-project-summary').textContent = p.summary;
  document.getElementById('modal-project-architecture').textContent = p.architecture;

  // Tech stack pills
  const techContainer = document.getElementById('modal-project-tech');
  techContainer.innerHTML = p.technologies.map(t => `<span class="text-xs font-semibold bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md border border-purple-200">${t}</span>`).join('');

  // Key metrics
  const metricsList = document.getElementById('modal-project-metrics');
  metricsList.innerHTML = p.metrics.map(m => `
    <li class="flex items-start gap-2 text-slate-700 text-sm">
      <span class="text-emerald-600 font-bold">✓</span>
      <span>${m}</span>
    </li>
  `).join('');

  // Engineering highlights
  const highlightsList = document.getElementById('modal-project-highlights');
  highlightsList.innerHTML = p.highlights.map(h => `
    <li class="flex items-start gap-2 text-slate-700 text-sm">
      <span class="text-purple-600 font-bold">▶</span>
      <span>${h}</span>
    </li>
  `).join('');

  document.getElementById('modal-project-github').href = p.githubUrl;
  document.getElementById('modal-project-live').href = p.liveUrl;

  modal.showModal();
}

/* -------------------------------------------------------------
   7. EXPERIENCE & EDUCATION
   ------------------------------------------------------------- */
function initExperienceSection(experience, education) {
  const expContainer = document.getElementById('experience-timeline');
  if (expContainer) {
    expContainer.innerHTML = experience.map(exp => `
      <div class="relative pl-8 pb-8 last:pb-2">
        <div class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm ring-2 ring-purple-100"></div>
        <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-purple-200 transition">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h4 class="text-base font-bold text-slate-900">${exp.role}</h4>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">${exp.badge}</span>
          </div>
          <div class="text-xs font-semibold text-purple-700 mb-3">${exp.organization} • <span class="text-slate-500 font-normal">${exp.period}</span></div>
          <ul class="space-y-1.5 text-xs text-slate-600 leading-relaxed">
            ${exp.responsibilities.map(r => `<li class="flex items-start gap-2"><span class="text-purple-500 font-bold">▹</span><span>${r}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  const eduContainer = document.getElementById('education-cards');
  if (eduContainer && education && education.length > 0) {
    const edu = education[0];
    eduContainer.innerHTML = `
      <div class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-purple-200 transition">
        <div class="flex flex-wrap items-start justify-between gap-3 mb-2">
          <div>
            <h4 class="text-base font-bold text-slate-900">${edu.degree}</h4>
            <div class="text-sm font-semibold text-purple-700">${edu.institution}</div>
          </div>
          <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">GPA: ${edu.gpa}</span>
        </div>
        <div class="text-xs text-slate-500 mb-3">${edu.period} | ${edu.location}</div>
        <p class="text-xs text-slate-600 mb-4 leading-relaxed">${edu.highlights}</p>
        <div class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Relevant Core Coursework:</div>
        <div class="flex flex-wrap gap-1.5">
          ${edu.coursework.map(c => `<span class="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">${c}</span>`).join('')}
        </div>
      </div>
    `;
  }
}

/* -------------------------------------------------------------
   8. ACHIEVEMENTS & ENDORSEMENTS
   ------------------------------------------------------------- */
function initAchievements(achievements) {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  container.innerHTML = achievements.map(ach => `
    <div class="minimal-card p-5">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-bold uppercase tracking-wider text-purple-700">${ach.category}</span>
        <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">${ach.badge}</span>
      </div>
      <h4 class="text-sm font-bold text-slate-900 mb-1">${ach.title}</h4>
      <p class="text-xs text-slate-600 leading-relaxed">${ach.description}</p>
    </div>
  `).join('');
}

function initRecommendations(recommendations) {
  const container = document.getElementById('recommendations-grid');
  if (!container) return;

  container.innerHTML = recommendations.map(rec => `
    <div class="minimal-card p-6 flex flex-col justify-between">
      <p class="text-sm text-slate-700 italic leading-relaxed mb-4">"${rec.quote}"</p>
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center font-bold text-sm">
          ${rec.author.charAt(0)}
        </div>
        <div>
          <div class="text-sm font-bold text-slate-900">${rec.author}</div>
          <div class="text-xs text-slate-500">${rec.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* -------------------------------------------------------------
   9. CONTACT FORM & TOAST
   ------------------------------------------------------------- */
function initContactForm(personal) {
  const form = document.getElementById('contact-form');
  const copyBtn = document.getElementById('btn-copy-email');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(personal.email).then(() => {
        showToast('✓ Email address copied to clipboard!');
      }).catch(() => {
        showToast(`Email: ${personal.email}`);
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('⚠️ Please fill out all fields.');
        return;
      }

      const subject = encodeURIComponent(`Internship Opportunity / Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi ${personal.preferredName},\n\n${message}\n\nBest regards,\n${name}\n${email}`);
      
      showToast('🚀 Opening email client...');
      setTimeout(() => {
        window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      }, 400);

      form.reset();
    });
  }
}

function showToast(msg) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-message';
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* -------------------------------------------------------------
   10. RESUME MODAL
   ------------------------------------------------------------- */
function openResumeModal() {
  const dialog = document.getElementById('resume-dialog');
  if (dialog) {
    dialog.showModal();
    const closeBtn = document.getElementById('btn-close-resume-modal');
    if (closeBtn) {
      closeBtn.onclick = () => dialog.close();
    }
  }
}

/* -------------------------------------------------------------
   11. STATS ROW
   ------------------------------------------------------------- */
function initStatsCounter() {
  const statsContainer = document.getElementById('hero-stats-row');
  if (!statsContainer) return;

  statsContainer.innerHTML = portfolioData.personal.stats.map(s => `
    <div class="minimal-card p-4 sm:p-5 text-center">
      <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">${s.value}</div>
      <div class="text-xs sm:text-sm font-bold text-purple-700">${s.label}</div>
      <div class="text-xs text-slate-500 mt-0.5">${s.subtext}</div>
    </div>
  `).join('');
}

/* -------------------------------------------------------------
   12. SCROLL SPY
   ------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* -------------------------------------------------------------
   13. TERMINAL WIDGET
   ------------------------------------------------------------- */
function initTerminal() {
  if (window.RecruiterTerminal) {
    new window.RecruiterTerminal('recruiter-terminal', 'terminal-cli-input', 'terminal-output-area');
  }
}
