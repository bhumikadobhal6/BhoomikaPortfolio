# 🚀 Professional Senior-Tier Software Engineering Portfolio

A modern, high-impact portfolio designed specifically to attract tech recruiters and engineering hiring managers for **Software Engineer (SWE) Internships** and entry-level positions.

Built with **vanilla HTML5, modern CSS3, and clean modular ES6+ JavaScript**. Zero heavy dependencies, instant load times, 100/100 Google Lighthouse performance, and 100% customizable via a single file.

---

## 🌟 Key Features That Impress Recruiters

1. **15-Second Recruiter Fast Track**:
   - Immediate visibility into target roles, graduation year, core languages, and work authorization.
   - 1-click **Resume Preview & PDF Download**.
   - 1-click **Copy Email to Clipboard** with instant toast notification.
2. **Interactive Recruiter Terminal (Hero CLI)**:
   - Interactive terminal emulator with commands (`help`, `skills`, `projects`, `stats`, `hire`, `clear`).
   - Quick-click chips for recruiters who prefer not to type.
3. **STAR-Format Projects with Architectural Deep Dives**:
   - Each project highlights: **Problem Statement**, **Architecture Flow**, **Key Metrics** (e.g. *12,500 jobs/min*, *<15ms latency*), and **Live / GitHub links**.
   - Interactive native `<dialog>` modals with focus traps and ESC support.
4. **Skills Matrix with Tabs & Visual Proficiency**:
   - Categorized into Languages, Backend & APIs, Frontend, Cloud & Databases, and CS Fundamentals.
5. **Modern Visual Aesthetics**:
   - Obsidian Dark theme, pure OLED mode, and high-contrast Light mode with instant switcher.
   - Interactive ambient constellation particle canvas that reacts to mouse movement (GPU-accelerated and respects `prefers-reduced-motion`).
   - Fluid typography and glassmorphic cards.
6. **Print-Ready / ATS-Optimized Resume**:
   - Includes `assets/resume-preview.html` formatted for standard 1-page printing or PDF export.

---

## 📁 Project Architecture

```
portfolio/
├── index.html                   # Semantic, accessible HTML5 with Schema.org Person JSON-LD
├── README.md                    # Setup and customization manual
├── css/
│   ├── style.css                # CSS variables, glassmorphism, responsive grid & layout
│   └── animations.css           # Micro-interactions, glow animations, keyframes
├── js/
│   ├── data.js                  # ⭐ ALL YOUR DATA HERE (Edit this file to customize!)
│   ├── terminal.js              # Interactive recruiter terminal in hero section
│   ├── canvas.js                # Ambient interactive particle network
│   └── main.js                  # DOM renderer, modal manager, toast & filter controllers
└── assets/
    └── resume-preview.html      # ATS-friendly 1-page printable resume
```

---

## 🛠️ How to Customize in 2 Minutes

Open `js/data.js` in your favorite editor. You will find:

```javascript
const portfolioData = {
  personal: {
    name: "Sudhanshu Kumar",
    roleTitle: "Software Engineering Intern Candidate",
    subtitles: [
      "Aspiring Software Engineer",
      "Full-Stack Web & Systems Developer",
      "Cloud & Distributed Systems Enthusiast"
    ],
    email: "sudhanshu.dev@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    ...
  },
  ...
}
```

Updating fields in `js/data.js` automatically updates the entire website:
- Your name, titles, bio, and social links.
- Your project titles, metrics, architectures, and demo URLs.
- Your skills, proficiency levels, and categories.
- Your education, GPA, coursework, and internship timeline.

---

## ⚡ How to Run Locally

You don't need Node.js or npm! Simply:
1. Double click `index.html` to open it in Chrome / Edge / Firefox.

Or run a lightweight local server:
- **VS Code**: Install the "Live Server" extension and click **Go Live**.
- **Python**: Run `python -m http.server 8000` and visit `http://localhost:8000`.
- **Node**: Run `npx serve .`

---

## 🌐 Free 1-Click Deployment

### 1. GitHub Pages (Recommended)
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to your repository on GitHub -> **Settings** -> **Pages**.
3. Under **Branch**, select `main` and root (`/`), then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/portfolio`!

### 2. Vercel
1. Run `npx vercel` or import the GitHub repository on [vercel.com](https://vercel.com).
2. It detects static HTML automatically and deploys in 10 seconds with a free `.vercel.app` domain.

---

## 💡 Recruiter Advice from Senior Software Developers

- **Quantify Impact**: Notice how every project in `js/data.js` includes numbers (*"Reduced review time by 35%"*, *"12,500 jobs/min"*). Recruiters and hiring managers look for numbers, not just lists of features.
- **Link Working Repos**: Make sure your GitHub link in `js/data.js` points to your real profile and that your top repositories have clean `README.md` files with screenshots or GIFs.
- **Tailor the Headline**: If applying for backend roles, change `roleTitle` in `js/data.js` to `Backend Engineering Intern Candidate`.

