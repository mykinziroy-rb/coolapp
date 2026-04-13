const modules = {
  policy: {
    id: "policy",
    title: "AI Policy Lab",
    price: 2500,
    stack: "A",
    description: "Comprehensive handbook for student and faculty AI usage.",
    details: [
      "Custom usage guidelines and institutional definitions",
      "Plagiarism versus co-creation frameworks",
      "Faculty training presentation deck",
      "Annual policy update review"
    ],
    start: 5,
    width: 30,
    color: "#800101",
    iconColor: "#800101",
    iconBg: "rgba(128, 1, 1, 0.12)",
    icon: "shield"
  },
  admin: {
    id: "admin",
    title: "Admin Automator",
    price: 1800,
    stack: "A",
    description: "Streamline scheduling, emails, and reporting workflows.",
    details: [
      "Email triage prompt library",
      "Report summarization templates",
      "Meeting note and action item automations",
      "2-hour admin staff workshop"
    ],
    start: 15,
    width: 20,
    color: "#2463d4",
    iconColor: "#2463d4",
    iconBg: "rgba(59, 130, 246, 0.14)",
    icon: "gear"
  },
  safety: {
    id: "safety",
    title: "Data Safety Shield",
    price: 2000,
    stack: "A",
    description: "Protecting student privacy in a generative world.",
    details: [
      "AI vendor vetting checklist",
      "PII anonymization guide",
      "FERPA and COPPA compliance mapping",
      "Institutional risk assessment tool"
    ],
    start: 0,
    width: 12,
    color: "#0f8b61",
    iconColor: "#0f8b61",
    iconBg: "rgba(16, 185, 129, 0.14)",
    icon: "lock"
  },
  feedback: {
    id: "feedback",
    title: "The Feedback Loop",
    price: 2800,
    stack: "B",
    description: "AI-driven assessment for faster, deeper student feedback.",
    details: [
      "Automated grading rubric builders",
      "Draft feedback prompt frameworks",
      "Peer review integration strategy",
      "LMS integration guide"
    ],
    start: 40,
    width: 30,
    color: "#7c3aed",
    iconColor: "#7c3aed",
    iconBg: "rgba(124, 58, 237, 0.12)",
    icon: "message"
  },
  bots: {
    id: "bots",
    title: "Custom Socratic Bots",
    price: 3500,
    stack: "B",
    description: "Personalized tutoring agents for your specific courses.",
    details: [
      "One custom tutor persona setup",
      "Course-specific syllabus ingestion",
      "AI guardrails and safety boundaries",
      "Faculty deployment handbook"
    ],
    start: 50,
    width: 40,
    color: "#d97706",
    iconColor: "#d97706",
    iconBg: "rgba(217, 119, 6, 0.12)",
    icon: "bot"
  },
  brand: {
    id: "brand",
    title: "Brand Spark",
    price: 2200,
    stack: "C",
    description: "Generate high-fidelity school assets and communications.",
    details: [
      "Brand voice tuning profiles",
      "Image generation prompt guide",
      "Newsletter and social copy templates",
      "Marketing alignment workshop"
    ],
    start: 30,
    width: 25,
    color: "#b86d06",
    iconColor: "#b86d06",
    iconBg: "rgba(245, 158, 11, 0.16)",
    icon: "sparkles"
  },
  video: {
    id: "video",
    title: "AI Video Faculty",
    price: 4000,
    stack: "C",
    description: "Create digital twin lectures for flipped classrooms.",
    details: [
      "AI avatar and studio creation guide",
      "Voice cloning ethical compliance framework",
      "Script-to-video workflow",
      "Automated multilingual captioning setup"
    ],
    start: 60,
    width: 35,
    color: "#4f46e5",
    iconColor: "#4f46e5",
    iconBg: "rgba(99, 102, 241, 0.14)",
    icon: "video"
  },
  grants: {
    id: "grants",
    title: "Grant & Proposal AI",
    price: 3200,
    stack: "D",
    description: "Train systems on successful past grants to accelerate new proposals.",
    details: [
      "Grant proposal structuring prompts",
      "Budget narrative templates",
      "Past-grant ingestion setup",
      "Specialized writing workshop"
    ],
    start: 20,
    width: 25,
    color: "#0f766e",
    iconColor: "#0f766e",
    iconBg: "rgba(20, 184, 166, 0.14)",
    icon: "document"
  },
  scholarship: {
    id: "scholarship",
    title: "Scholarship Tracker",
    price: 2600,
    stack: "D",
    description: "Automate matching, monitor applications, and track funding activity.",
    details: [
      "Student-to-scholarship matching logic",
      "Application triage framework",
      "Automated outreach templates",
      "Fund utilization dashboard setup"
    ],
    start: 45,
    width: 30,
    color: "#db2777",
    iconColor: "#db2777",
    iconBg: "rgba(219, 39, 119, 0.12)",
    icon: "award"
  }
};

const selectedModules = new Set();
const state = {
  unlocked: false,
  profile: null
};

const stackMounts = {
  A: document.getElementById("stack-a"),
  B: document.getElementById("stack-b"),
  C: document.getElementById("stack-c"),
  D: document.getElementById("stack-d")
};

const assessmentForm = document.getElementById("assessment-form");
const builder = document.getElementById("builder");
const sidebarName = document.getElementById("sidebar-client-name");
const totalPrice = document.getElementById("total-price");
const selectedList = document.getElementById("selected-list");
const finalizeButton = document.getElementById("finalize-btn");
const modal = document.getElementById("chart-modal");
const modalTitle = document.getElementById("modal-org-title");
const phaseDeliverables = document.getElementById("phase-2-deliverables");
const chartRows = document.getElementById("chart-rows");
const navLockIcon = document.getElementById("nav-lock-icon");
const requestProposalButton = document.getElementById("request-proposal-btn");
const closeChartButton = document.getElementById("close-chart");

function formatCurrency(value) {
  return `$${value.toLocaleString()}`;
}

function renderIcon(name) {
  const paths = {
    shield: '<path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z"></path><path d="m9.5 12 1.8 1.8L15 10.2"></path>',
    gear: '<path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z"></path><path d="m19.4 15-.9 1.6-1.8-.1a6.8 6.8 0 0 1-1.2 1l.2 1.8-1.7 1-1.4-1.1a7 7 0 0 1-1.5 0l-1.4 1.1-1.7-1 .2-1.8a6.8 6.8 0 0 1-1.2-1l-1.8.1-.9-1.6 1.2-1.3a7 7 0 0 1 0-1.7L2.6 11l.9-1.6 1.8.1a6.8 6.8 0 0 1 1.2-1L6.3 6.7l1.7-1 1.4 1.1a7 7 0 0 1 1.5 0l1.4-1.1 1.7 1-.2 1.8a6.8 6.8 0 0 1 1.2 1l1.8-.1.9 1.6-1.2 1.3a7 7 0 0 1 0 1.7Z"></path>',
    lock: '<path d="M16 10V7a4 4 0 1 0-8 0v3"></path><rect x="4" y="10" width="16" height="10" rx="2"></rect>',
    message: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v8A1.5 1.5 0 0 1 18.5 15H8l-4 4v-13.5Z"></path>',
    bot: '<rect x="7" y="8" width="10" height="8" rx="2"></rect><path d="M12 4v4"></path><path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M8 18h8"></path>',
    sparkles: '<path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z"></path><path d="m18 15 .9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15Z"></path><path d="m5 14 .7 1.8L7.5 16l-1.8.7L5 18.5l-.7-1.8L2.5 16l1.8-.7L5 14Z"></path>',
    video: '<rect x="3" y="6" width="14" height="12" rx="2"></rect><path d="m17 10 4-2v8l-4-2"></path>',
    document: '<path d="M8 3h6l4 4v14H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"></path><path d="M14 3v5h5"></path><path d="M10 13h4"></path><path d="M10 17h4"></path>',
    award: '<circle cx="12" cy="8" r="4"></circle><path d="m8.5 14.5-1 6L12 18l4.5 2.5-1-6"></path>'
  };

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      ${paths[name] || paths.sparkles}
    </svg>
  `;
}

function buildModuleCard(module) {
  const article = document.createElement("article");
  article.className = "module-card";
  article.dataset.moduleId = module.id;

  article.innerHTML = `
    <div class="module-card-header">
      <div class="module-icon" style="background:${module.iconBg}; color:${module.iconColor};">
        ${renderIcon(module.icon)}
      </div>
      <span class="module-price">${formatCurrency(module.price)}</span>
    </div>
    <h4>${module.title}</h4>
    <p>${module.description}</p>
    <button class="module-details-toggle" type="button" aria-expanded="false">
      <span>What's included?</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </button>
    <ul class="module-details">
      ${module.details.map((detail) => `<li>${detail}</li>`).join("")}
    </ul>
  `;

  article.addEventListener("click", () => {
    if (!state.unlocked) {
      scrollToSection("assessment");
      return;
    }

    toggleModule(module.id, article);
  });

  const toggleButton = article.querySelector(".module-details-toggle");
  const details = article.querySelector(".module-details");

  toggleButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const expanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", String(!expanded));
    details.classList.toggle("open", !expanded);
  });

  return article;
}

function renderModuleCards() {
  Object.values(modules).forEach((module) => {
    const mount = stackMounts[module.stack];
    if (mount) {
      mount.appendChild(buildModuleCard(module));
    }
  });
}

function toggleModule(id, card) {
  if (selectedModules.has(id)) {
    selectedModules.delete(id);
    card.classList.remove("selected");
  } else {
    selectedModules.add(id);
    card.classList.add("selected");
  }

  updateBudget();
}

function updateBudget() {
  if (selectedModules.size === 0) {
    selectedList.innerHTML = '<div class="empty-state">Select modules on the left to build your estimate.</div>';
    totalPrice.textContent = "$0";
    finalizeButton.disabled = true;
    finalizeButton.classList.add("is-disabled");
    return;
  }

  const selectedItems = Array.from(selectedModules).map((id) => modules[id]);
  const total = selectedItems.reduce((sum, module) => sum + module.price, 0);

  selectedList.innerHTML = selectedItems.map((module) => `
    <div class="selected-item">
      <strong>${module.title}</strong>
      <span>${formatCurrency(module.price)}</span>
    </div>
  `).join("");

  totalPrice.textContent = formatCurrency(total);
  finalizeButton.disabled = false;
  finalizeButton.classList.remove("is-disabled");
}

function unlockBuilder(profile) {
  state.unlocked = true;
  state.profile = profile;

  builder.classList.remove("is-locked");
  builder.classList.add("is-unlocked");

  sidebarName.textContent = `Prepared for ${profile.orgName}`;
  modalTitle.textContent = `${profile.orgName} Project Chart`;
  navLockIcon.innerHTML = '<path d="M7 10V7a5 5 0 0 1 9.9-1"></path><rect x="4" y="10" width="16" height="10" rx="2"></rect>';
}

function persistAssessment(profile) {
  try {
    window.localStorage.setItem("redstride-assessment", JSON.stringify(profile));
  } catch (error) {
    console.warn("Unable to persist assessment", error);
  }
}

function loadAssessment() {
  try {
    const raw = window.localStorage.getItem("redstride-assessment");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (error) {
    console.warn("Unable to load saved assessment", error);
    return null;
  }
}

function applyAssessmentToForm(profile) {
  Object.entries(profile).forEach(([key, value]) => {
    const field = assessmentForm.elements.namedItem(key);
    if (field && typeof value === "string") {
      field.value = value;
    }
  });
}

function collectFormData(form) {
  const data = new FormData(form);
  return Object.fromEntries(data.entries());
}

function openChart() {
  if (selectedModules.size === 0) return;

  const chosen = Array.from(selectedModules).map((id) => modules[id]);
  phaseDeliverables.innerHTML = chosen.map((module) => `<li>${module.title}</li>`).join("");

  chartRows.innerHTML = chosen.map((module) => `
    <div class="chart-row">
      <div class="chart-row-title">
        <strong>${module.title}</strong>
        <span>Stack ${module.stack}</span>
      </div>
      <div class="chart-row-timeline">
        <div
          class="chart-bar"
          style="left:${module.start}%; width:${module.width}%; background:${module.color};"
        >
          Implementation
        </div>
      </div>
    </div>
  `).join("");

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeChart() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-scroll-target]").forEach((element) => {
  element.addEventListener("click", () => {
    const target = element.getAttribute("data-scroll-target");
    if (target) scrollToSection(target);
  });
});

assessmentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const profile = collectFormData(assessmentForm);
  persistAssessment(profile);
  unlockBuilder(profile);
  scrollToSection("builder");
});

finalizeButton.addEventListener("click", openChart);
closeChartButton.addEventListener("click", closeChart);
modal.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLElement && target.dataset.closeModal === "true") {
    closeChart();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeChart();
  }
});

requestProposalButton.addEventListener("click", () => {
  const email = state.profile?.email || "your inbox";
  window.alert(`Proposal request captured. A follow-up will be sent to ${email}.`);
});

renderModuleCards();

const savedProfile = loadAssessment();
if (savedProfile) {
  applyAssessmentToForm(savedProfile);
  unlockBuilder(savedProfile);
}
