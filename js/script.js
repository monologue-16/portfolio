const projectData = [
  {
    title: 'CyberShield Awareness Portal',
    category: 'web',
    image: 'assets/IMG_1754.jpeg',
    description: 'An interactive security education platform designed to train users on password safety, phishing prevention, and digital hygiene.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/',
    live: 'https://cybersecurity-three-omega.vercel.app/',
    details: 'Features educational modules, interactive quizzes with dynamic score feedback, a theme toggle, and responsive layouts to promote online safety.'
  },
  {
    title: 'Brick & Beam Real Estate Showcase',
    category: 'web',
    image: 'assets/IMG_1747.jpeg',
    description: 'A premium real estate platform showcasing luxury properties, complete with dynamic search filters, detail modals, and responsive layouts.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/',
    live: 'https://real-estate-two-livid-66.vercel.app/',
    details: 'Enables users to browse elite properties, filter by budget and size, view high-fidelity mock architectural listings, and interact with property detail popups.'
  },
  {
    title: 'Elite American Academy Portal',
    category: 'web',
    image: 'assets/IMG_1752.jpeg',
    description: 'A comprehensive and responsive academic portal featuring institutional information, curriculum showcases, student leadership highlights, and structured layouts.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/',
    live: 'https://eaa-school-portal.vercel.app/',
    details: 'Developed to provide a modern interface for students and parents. Built with optimized assets, clean semantic structure, visual hierarchies, and interactive galleries.'
  }
];

const skillData = [
  // Technical Skills
  {
    name: 'HTML5',
    category: 'technical',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm16.5 6.2H7.7l.3 3.4h8.3l-.4 4-3.9 1.1-3.9-1.1-.3-2.6H6.1l.5 5.6 5.4 1.5 5.4-1.5.8-9.1.1-1.3z"/></svg>`,
    description: 'Semantic structure, accessibility, and forms for robust page foundations.',
    percent: 95,
    details: ['Semantic HTML', 'Forms and Validation', 'Accessibility Basics', 'Responsive Structure']
  },
  {
    name: 'CSS3',
    category: 'technical',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm16.4 6.2H7.8l.3 3.4h8.3l-.3 3-4.1 1.1-4.1-1.1-.3-2.6H6.1l.5 5.6 5.4 1.5 5.4-1.5.7-8.1.1-1.3z"/></svg>`,
    description: 'Flexbox, Grid, responsive design, and animations for polished interfaces.',
    percent: 92,
    details: ['Flexbox', 'CSS Grid', 'Responsive Design', 'Animations and Transitions']
  },
  {
    name: 'JavaScript',
    category: 'technical',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm18.974 11.125c.08-.9-.556-1.643-1.86-1.954-1.336-.31-2.317-.61-2.317-1.258 0-.482.4-.76 1.066-.76.713 0 1.21.265 1.467.755l1.637-.964C18.423 6.077 17.067 5 14.887 5c-2.42 0-4.044 1.344-4.044 3.498 0 2.377 2.054 3.037 3.93 3.473 1.954.454 2.455.857 2.455 1.543 0 .666-.632 1.1-1.528 1.1-.96 0-1.638-.472-1.972-1.125l-1.688 1.01c.71 1.378 2.15 2.164 4.015 2.164 2.863 0 4.81-1.51 4.81-4.04 0-1.418-.742-2.115-2.072-2.52zM9.53 10.375V5H7.42v5.375c0 1.355-.78 1.76-1.56 1.76-.73 0-1.23-.42-1.23-1.25V5H2.52v5.526c0 2.16 1.47 3.46 3.37 3.46 1.955 0 3.64-1.166 3.64-3.61z"/></svg>`,
    description: 'Dynamic content rendering, DOM updates, event handling, and logic.',
    percent: 88,
    details: ['Variables and Functions', 'Arrays and Loops', 'DOM Manipulation', 'Event Handling', 'Dynamic Content Rendering']
  },
  {
    name: 'Git',
    category: 'technical',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L8.9 3.4l3.2 3.2c.8-.3 1.8-.1 2.4.6.6.6.8 1.5.5 2.3l3.2 3.2c.8-.3 1.8-.1 2.4.6.9.9.9 2.3 0 3.2-.9.9-2.3.9-3.2 0-.7-.7-.9-1.7-.6-2.5L13.6 11c-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5L8.2 14.2c.3.8.1 1.8-.6 2.4-.9.9-2.3.9-3.2 0-.9-.9-.9-2.3 0-3.2.7-.7 1.7-.9 2.5-.6l3.2-3.2c-.3-.8-.1-1.8.6-2.4.6-.6 1.5-.8 2.3-.5l-3.2-3.2-6.1 6.1c-.4.4-.4 1.1 0 1.5l10.2 10.2c.4.4 1.1.4 1.5 0l10.2-10.2c.5-.4.5-1.1 0-1.5z"/></svg>`,
    description: 'Version control practices for safe iteration and structured development.',
    percent: 85,
    details: ['Version Control', 'Branch Management', 'Commit Best Practices']
  },
  {
    name: 'GitHub',
    category: 'technical',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    description: 'Repository management, project sharing, and collaboration workflows.',
    percent: 90,
    details: ['Repository Management', 'Project Collaboration', 'Portfolio Hosting']
  },

  // Professional Skills
  {
    name: 'Professional Branding',
    category: 'professional',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    description: 'Building a consistent, professional developer brand across digital channels.',
    percent: 88,
    details: ['Visual Identity', 'Resume Design', 'Online Presence', 'Portfolio Crafting']
  },
  {
    name: 'UI/UX Design Principles',
    category: 'professional',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.25 0 2.25-1 2.25-2.25 0-.53-.22-1.01-.57-1.37.09-.08.19-.16.29-.25.59-.53 1.28-1.15 1.28-2.13 0-2.22 3.77-4 6.75-4C22 12 22 2 12 2zm-6 9.5c-.83 0-1.5-.67-1.5-1.5S5.17 8.5 6 8.5s1.5 0.67 1.5 1.5-0.67 1.5-1.5 1.5zm3-4c-.83 0-1.5-.67-1.5-1.5S7.17 4.5 8 4.5s1.5 0.67 1.5 1.5-0.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5S12.17 4.5 13 4.5s1.5 0.67 1.5 1.5-0.67 1.5-1.5 1.5zm4.5 4c-.83 0-1.5-.67-1.5-1.5s0.67-1.5 1.5-1.5 1.5 0.67 1.5 1.5-0.67 1.5-1.5 1.5z"/></svg>`,
    description: 'Designing user-centered layouts with clear hierarchy and premium typography.',
    percent: 86,
    details: ['Visual Hierarchy', 'Wireframing', 'User Flows', 'Interface Aesthetics']
  },
  {
    name: 'Problem Solving',
    category: 'professional',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-3.3l-.85-.6C7.8 11.16 7 10.12 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.12-.8 2.16-2.15 3.1z"/></svg>`,
    description: 'Approaching bugs systematically and writing structured, logical solutions.',
    percent: 92,
    details: ['Debugging', 'Algorithm Design', 'Analytical Thinking', 'Logic Verification']
  },
  {
    name: 'Project Presentation',
    category: 'professional',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h5v3H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2v-3h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H3V5h18v10z"/></svg>`,
    description: 'Effectively demonstrating project value, architecture, and design decisions.',
    percent: 90,
    details: ['Public Speaking', 'Technical Documentation', 'Product Demos']
  },
  {
    name: 'Front-End Development',
    category: 'professional',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6zm5.3 2.7L6.6 11.4l2.7 2.7.7-.7-2-2 2-2-.7-.7zm5.4 0l-.7.7 2 2-2 2 .7.7 2.7-2.7-2.7-2.7z"/></svg>`,
    description: 'Transforming custom design concepts into highly performant and accessible web pages.',
    percent: 94,
    details: ['Clean Code', 'Modern Standards', 'Performance Tuning']
  },
  {
    name: 'Responsive Web Design',
    category: 'professional',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 10h-4v-7h4v7z"/></svg>`,
    description: 'Ensuring consistent usability and aesthetic appeal across all viewport sizes.',
    percent: 95,
    details: ['Mobile-First Layouts', 'Media Queries', 'Fluid Grids', 'Flexbox & CSS Grid']
  },
  {
    name: 'Attention to Detail',
    category: 'professional',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>`,
    description: 'Validating markup, ensuring color consistency, and refining micro-interactions.',
    percent: 92,
    details: ['Pixel Perfection', 'Code Audits', 'Design Accuracy']
  },
  {
    name: 'Time Management',
    category: 'professional',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
    description: 'Organizing tasks and timelines to consistently deliver high-quality work on schedule.',
    percent: 88,
    details: ['Task Prioritization', 'Milestone Tracking', 'Self-Discipline']
  },
  {
    name: 'Collaboration',
    category: 'professional',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
    description: 'Working productively with peers and mentors through open communication and version control.',
    percent: 90,
    details: ['Teamwork', 'Communication', 'Git Workflows', 'Constructive Feedback']
  },
  {
    name: 'Continuous Learning',
    category: 'professional',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 14.5c-3.1 0-6.17-1.12-8.5-3.2v3.7c2.33 2.08 5.4 3.2 8.5 3.2s6.17-1.12 8.5-3.2v-3.7c-2.33 2.08-5.4 3.2-8.5 3.2z"/></svg>`,
    description: 'Actively exploring new libraries, standards, and engineering habits to grow.',
    percent: 95,
    details: ['Self-Education', 'Skill Expansion', 'Tech Research', 'Curiosity']
  }
];

const state = {
  projects: 'all',
  skillsFilter: 'all',
  expandedSkills: false
};

const typingPhrases = [
  'Front-End Developer',
  'Creative Designer',
  'Future Software Engineer'
];

const counters = document.querySelectorAll('[data-counter]');
const typingTarget = document.querySelector('[data-typing]');
const projectGrid = document.querySelector('[data-project-grid]');
const projectFilters = document.querySelector('[data-project-filters]');
const skillsGrid = document.querySelector('[data-skills-grid]');
const skillToggle = document.querySelector('[data-skill-toggle]');
const skillsFilters = document.querySelector('[data-skills-filters]');
const projectToggleButtons = document.querySelectorAll('[data-project-toggle]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const backToTop = document.querySelector('[data-back-top]');
const revealElements = document.querySelectorAll('.reveal');
const contactForm = document.querySelector('[data-contact-form]');

let revealObserver;

const storageKey = 'moena-theme-preference';

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    return;
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
    themeToggle.innerHTML = theme === 'dark' ? '☀ Light Mode' : '🌙 Dark Mode';
  }
  safeStorageSet(storageKey, theme);
}

function initTheme() {
  const savedTheme = safeStorageGet(storageKey);
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
}

function animateCounter(element) {
  const target = Number(element.getAttribute('data-counter')) || 0;
  const suffix = element.getAttribute('data-suffix') || '';
  const duration = 1300;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function startTyping() {
  if (!typingTarget) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function loop() {
    const phrase = typingPhrases[phraseIndex];
    typingTarget.textContent = phrase.slice(0, charIndex);

    if (!deleting) {
      charIndex += 1;
      if (charIndex > phrase.length) {
        deleting = true;
        setTimeout(loop, 1200);
        return;
      }
    } else {
      charIndex -= 1;
      if (charIndex < 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        charIndex = 0;
      }
    }

    setTimeout(loop, deleting ? 45 : 90);
  }

  loop();
}

function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card reveal';
  card.setAttribute('data-project-category', project.category);

  const technologies = project.technologies.map((tech) => `<span class="tag">${tech}</span>`).join('');

  card.innerHTML = `
    <div class="project-media">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="project-meta">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tag-list">${technologies}</div>
      <div class="project-actions">
        <a class="link-pill" href="${project.github}" target="_blank" rel="noreferrer">GitHub Repository</a>
        <a class="link-pill" href="${project.live}" target="_blank" rel="noreferrer">Live Demo</a>
        <button class="button button-ghost" type="button" data-project-toggle>Expand Details</button>
      </div>
      <div class="project-details" hidden>
        <strong>Project focus</strong>
        <p>${project.details}</p>
      </div>
    </div>
  `;

  return card;
}

function renderProjects(filter = 'all') {
  if (!projectGrid) return;
  projectGrid.innerHTML = '';

  projectData.forEach((project) => {
    if (filter !== 'all' && project.category !== filter) {
      return;
    }

    const card = createProjectCard(project);
    projectGrid.appendChild(card);
    
    if (revealObserver) {
      revealObserver.observe(card);
    } else {
      card.classList.add('is-visible');
    }
  });

  bindProjectToggles();
}

function bindProjectToggles() {
  document.querySelectorAll('[data-project-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const details = button.closest('.project-card')?.querySelector('.project-details');
      if (!details) return;
      const isHidden = details.hasAttribute('hidden');
      details.toggleAttribute('hidden');
      button.textContent = isHidden ? 'Hide Details' : 'Expand Details';
    });
  });
}

function createSkillCard(skill) {
  const card = document.createElement('article');
  card.className = 'skill-card reveal';

  const detailChips = skill.details.map((item) => `<span class="tag">${item}</span>`).join('');

  card.innerHTML = `
    <div class="skill-head">
      <div class="skill-icon">${skill.icon}</div>
      <div>
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
      </div>
    </div>
    <div class="skill-meta">
      <strong>Proficiency</strong>
      <span class="skill-percent">0%</span>
    </div>
    <div class="skill-track" aria-hidden="true">
      <div class="skill-fill" style="width: 0%"></div>
    </div>
    <div class="skills-extra" hidden>
      <div class="tag-list">${detailChips}</div>
    </div>
  `;

  card.dataset.percent = String(skill.percent);
  return card;
}

function renderSkills(filter = 'all', expanded = false) {
  if (!skillsGrid) return;
  skillsGrid.innerHTML = '';
  skillData.forEach((skill) => {
    if (filter !== 'all' && skill.category !== filter) {
      return;
    }
    const card = createSkillCard(skill);
    const extra = card.querySelector('.skills-extra');
    if (extra && expanded) {
      extra.removeAttribute('hidden');
    }
    skillsGrid.appendChild(card);

    if (revealObserver) {
      revealObserver.observe(card);
    } else {
      card.classList.add('is-visible');
    }
  });
  animateSkills();
}

function animateSkills() {
  document.querySelectorAll('.skill-card').forEach((card) => {
    const percent = Number(card.dataset.percent || '0');
    const fill = card.querySelector('.skill-fill');
    const percentLabel = card.querySelector('.skill-percent');
    if (!fill || !percentLabel) return;

    fill.style.width = `${percent}%`;
    let current = 0;
    const step = () => {
      current += 2;
      percentLabel.textContent = `${Math.min(current, percent)}%`;
      if (current < percent) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  });
}

function setActiveFilter(activeFilter) {
  state.projects = activeFilter;
  projectFilters?.querySelectorAll('.filter-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === activeFilter);
  });
  renderProjects(activeFilter);
}

function setupFilters() {
  projectFilters?.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => setActiveFilter(button.dataset.filter || 'all'));
  });
}

function setupProjectExpandButtons() {
  projectToggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.closest('.panel-card, .feature-card')?.querySelector('[data-project-details]');
      if (!target) return;
      const hidden = target.hasAttribute('hidden');
      target.toggleAttribute('hidden');
      button.textContent = hidden ? 'Hide More' : 'Show More';
    });
  });
}

function setupSkillToggle() {
  skillToggle?.addEventListener('click', () => {
    state.expandedSkills = !state.expandedSkills;
    document.querySelectorAll('.skills-extra').forEach((section) => {
      if (state.expandedSkills) {
        section.removeAttribute('hidden');
      } else {
        section.setAttribute('hidden', '');
      }
    });
    skillToggle.textContent = state.expandedSkills ? 'Hide Skill Details' : 'Show Skill Details';
  });
}

function setupThemeToggle() {
  themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

function setupNavigation() {
  navToggle?.addEventListener('click', () => {
    const isOpen = navMenu?.getAttribute('data-open') === 'true';
    navMenu?.setAttribute('data-open', String(!isOpen));
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  navMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.setAttribute('data-open', 'false');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupRevealAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
}

function setupSkillsFilters() {
  skillsFilters?.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';
      state.skillsFilter = filter;
      skillsFilters.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.classList.toggle('active', btn === button);
      });
      renderSkills(filter, state.expandedSkills);
    });
  });
}

function setupBackToTop() {
  if (!backToTop) return;
  const onScroll = () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 650);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function setupContactForm() {
  if (!contactForm) return;

  const status = contactForm.querySelector('[data-form-status]');
  const fields = Array.from(contactForm.querySelectorAll('input, textarea'));

  function setError(field, message) {
    const error = field.closest('.field')?.querySelector('small');
    field.classList.add('is-invalid');
    if (error) error.textContent = message;
  }

  function clearError(field) {
    const error = field.closest('.field')?.querySelector('small');
    field.classList.remove('is-invalid');
    if (error) error.textContent = '';
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    fields.forEach(clearError);
    if (status) {
      status.className = 'form-status';
      status.textContent = '';
    }

    const nameField = contactForm.querySelector('[name="name"]');
    const emailField = contactForm.querySelector('[name="email"]');
    const subjectField = contactForm.querySelector('[name="subject"]');
    const messageField = contactForm.querySelector('[name="message"]');

    if (!nameField.value.trim()) {
      setError(nameField, 'Please enter your full name.');
      valid = false;
    }

    if (!emailField.value.trim() || !/^\S+@\S+\.\S+$/.test(emailField.value)) {
      setError(emailField, 'Please enter a valid email address.');
      valid = false;
    }

    if (!subjectField.value.trim()) {
      setError(subjectField, 'Please add a subject.');
      valid = false;
    }

    if (messageField.value.trim().length < 20) {
      setError(messageField, 'Message should be at least 20 characters.');
      valid = false;
    }

    if (!valid) {
      if (status) {
        status.textContent = 'Please correct the highlighted fields and try again.';
        status.classList.add('error');
      }
      return;
    }

    contactForm.reset();
    if (status) {
      status.textContent = 'Thanks for reaching out. Your message has been prepared successfully.';
      status.classList.add('success');
    }
  });

  fields.forEach((field) => {
    field.addEventListener('input', () => clearError(field));
  });
}

function markCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach((link) => {
    const isActive = link.getAttribute('href') === path;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function initCounters() {
  counters.forEach((counter) => animateCounter(counter));
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  markCurrentPage();
  setupNavigation();
  setupThemeToggle();
  setupRevealAnimations();
  setupBackToTop();
  setupContactForm();
  setupFilters();
  setupSkillsFilters();
  setupSkillToggle();
  setupProjectExpandButtons();
  startTyping();
  initCounters();

  if (projectGrid) {
    renderProjects(state.projects);
  }

  if (skillsGrid) {
    renderSkills(state.skillsFilter, state.expandedSkills);
  }
});
