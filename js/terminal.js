/**
 * RECRUITER CLI TERMINAL (MINIMAL & USER-FRIENDLY)
 * -------------------------------------------------------------
 * Clean developer terminal widget embedded in the hero section.
 * Provides interactive command parsing and quick-run buttons.
 */

class RecruiterTerminal {
  constructor(containerId, inputId, outputId) {
    this.container = document.getElementById(containerId);
    this.input = document.getElementById(inputId);
    this.output = document.getElementById(outputId);
    this.history = [];
    this.historyIndex = -1;

    this.commands = {
      help: () => `
<div class="terminal-text-purple">Available commands:</div>
  <span class="font-bold text-slate-800">skills</span>      - Core languages, frameworks & databases
  <span class="font-bold text-slate-800">projects</span>    - Key production projects & metrics
  <span class="font-bold text-slate-800">education</span>   - University, degree, GPA & coursework
  <span class="font-bold text-slate-800">contact</span>     - Direct channels to reach me
  <span class="font-bold text-slate-800">stats</span>       - LeetCode solved, GPA, and contest standing
  <span class="font-bold text-slate-800">hire</span>        - Why hire me for your internship!
  <span class="font-bold text-slate-800">clear</span>       - Clear the console
`,
      about: () => `
<div class="terminal-text-dark font-bold">Sudhanshu Kumar // Software Engineering Candidate</div>
<div class="text-slate-600 mt-1">${portfolioData.personal.shortBio}</div>
<div class="terminal-text-purple font-medium mt-1">Status: ${portfolioData.personal.availabilityBadge}</div>
`,
      skills: () => `
<div class="terminal-text-purple font-bold">Core Technical Stack:</div>
  • Languages:     C++, Python, TypeScript, JavaScript, Go, SQL
  • Frontend:      React 19, Next.js 14, Tailwind CSS, Redux Toolkit
  • Backend:       Node.js, Express, FastAPI, Microservices, REST, WebSockets
  • Infrastructure:Docker, AWS (S3/EC2), PostgreSQL, Redis, Linux, Git CI/CD
  • Fundamentals:  DSA (450+ solved), System Design, OOP (SOLID), TDD
`,
      projects: () => `
<div class="terminal-text-green font-bold">Featured Engineering Systems:</div>
  1. <strong>CloudScale</strong>: High-Throughput Distributed Task Queue (Go, Redis, Docker)
     <em>Metric: 12,500 jobs/min throughput with &lt;15ms latency</em>
  2. <strong>DevPulse</strong>: AI Pull Request & Code Reviewer (Next.js, FastAPI, Gemini API)
     <em>Metric: 35% reduction in manual PR review cycle</em>
  3. <strong>StreamSphere</strong>: Real-Time Collaborative Canvas (React, WebSockets, Redis)
     <em>Metric: 50 concurrent users with 60 FPS GPU acceleration</em>
<div class="text-slate-500 text-xs mt-1.5">💡 Tip: Scroll down to "Featured Projects" for full architecture diagrams!</div>
`,
      education: () => `
<div class="font-bold text-slate-800">${portfolioData.education[0].degree}</div>
<div class="text-slate-600">${portfolioData.education[0].institution} (${portfolioData.education[0].period})</div>
<div>Academic Record: <strong class="text-emerald-600">${portfolioData.education[0].gpa}</strong></div>
<div class="text-slate-500 text-xs mt-1">Core: Data Structures, Operating Systems, Networks, DBMS, System Design</div>
`,
      contact: () => `
<div class="terminal-text-purple font-bold">Direct Recruiter Channels:</div>
  • Email:    <a href="mailto:${portfolioData.personal.email}" class="terminal-link">${portfolioData.personal.email}</a>
  • LinkedIn: <a href="${portfolioData.personal.linkedin}" target="_blank" class="terminal-link">${portfolioData.personal.linkedin}</a>
  • GitHub:   <a href="${portfolioData.personal.github}" target="_blank" class="terminal-link">${portfolioData.personal.github}</a>
  • Phone:    ${portfolioData.personal.phone}
`,
      stats: () => `
<div class="terminal-text-purple font-bold">Candidate Metrics at a Glance:</div>
${portfolioData.personal.stats.map(s => `  • <strong>${s.label}:</strong> <span class="text-emerald-600 font-semibold">${s.value}</span> (${s.subtext})`).join('\n')}
`,
      hire: () => `
<div class="terminal-text-purple font-bold">🚀 Why Hire Sudhanshu for your SWE Internship?</div>
  ✓ Production-ready habits: Builds with clean architecture, tests & Docker.
  ✓ High algorithmic problem-solving stamina (450+ LeetCode problems solved).
  ✓ Fast ramp-up time: Capable of shipping meaningful PRs within the first sprint.
  ✓ Proactive ownership & clear team communication.
<div class="mt-2 text-slate-700">Ready to chat? Email me directly at <a href="mailto:${portfolioData.personal.email}" class="terminal-link font-semibold">${portfolioData.personal.email}</a></div>
`,
      sudo: (args) => {
        if (args.includes('hire')) {
          return `<div class="text-emerald-600 font-bold">⚡ [ACCESS GRANTED]: Privilege escalated! Reach out to schedule an interview today.</div>`;
        }
        return `<div class="text-slate-500">Permission denied: try 'hire' directly!</div>`;
      },
      clear: () => {
        this.output.innerHTML = '';
        return null;
      }
    };

    this.init();
  }

  init() {
    if (!this.input || !this.output) return;

    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const fullCmd = this.input.value.trim();
        if (fullCmd) {
          this.execute(fullCmd);
          this.history.push(fullCmd);
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
      } else if (e.key === 'ArrowUp') {
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.input.value = this.history[this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
      }
    });

    // Handle interactive pill button clicks
    document.querySelectorAll('[data-term-cmd]').forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-term-cmd');
        this.execute(cmd);
      });
    });

    this.printWelcome();
  }

  printWelcome() {
    this.output.innerHTML = `
<div class="text-slate-500 text-xs mb-1">Click quick tags below or type a command:</div>
<div class="mb-1"><span class="terminal-prompt-user">recruiter</span>:<span class="terminal-prompt-path">~</span>$ <span class="font-semibold text-slate-800">status</span></div>
<div class="bg-purple-50/60 border border-purple-100 rounded p-2 text-xs text-slate-700 leading-relaxed mb-1">
  <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span> Candidate: <strong class="text-slate-900">${portfolioData.personal.name}</strong>
  <br> Target: <span class="text-purple-700 font-semibold">${portfolioData.personal.roleTitle}</span>
  <br> Quick commands: <span class="text-purple-600 font-semibold">skills</span> | <span class="text-purple-600 font-semibold">projects</span> | <span class="text-purple-600 font-semibold">stats</span> | <span class="text-purple-600 font-semibold">hire</span>
</div>
`;
  }

  execute(cmdLine) {
    const parts = cmdLine.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ').toLowerCase();

    // Echo command
    const echoDiv = document.createElement('div');
    echoDiv.className = 'mt-2 mb-1';
    echoDiv.innerHTML = `<span class="terminal-prompt-user">recruiter</span>:<span class="terminal-prompt-path">~</span>$ <span class="font-semibold text-slate-900">${this.escapeHtml(cmdLine)}</span>`;
    this.output.appendChild(echoDiv);

    // Run command
    let responseHtml = '';
    if (this.commands[cmd]) {
      responseHtml = this.commands[cmd](args);
    } else {
      responseHtml = `<div class="text-rose-500 text-xs">Command not found: "${this.escapeHtml(cmd)}". Type <span class="text-purple-600 font-bold">help</span> for a list of commands.</div>`;
    }

    if (responseHtml !== null) {
      const resDiv = document.createElement('div');
      resDiv.className = 'text-xs text-slate-700 leading-relaxed pl-2 border-l-2 border-purple-200 my-1';
      resDiv.innerHTML = responseHtml;
      this.output.appendChild(resDiv);
    }

    this.output.scrollTop = this.output.scrollHeight;
  }

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}

if (typeof window !== "undefined") {
  window.RecruiterTerminal = RecruiterTerminal;
}
