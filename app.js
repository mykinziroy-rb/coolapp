const modules = {
  policy: {
    id: "policy",
    title: "Corporate AI Policy",
    price: 2500,
    stack: "A",
    description: "Draft company handbooks for acceptable AI use across teams.",
    details: [
      "Custom acceptable-use guidelines and definitions",
      "Internal approval and escalation framework",
      "Leadership-ready policy rollout deck",
      "Quarterly policy review recommendations"
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
    title: "Operations Automator",
    price: 1800,
    stack: "A",
    description: "Streamline internal workflows, email handling, and reporting operations.",
    details: [
      "Workflow audit and automation opportunities",
      "Email triage and reporting prompt library",
      "Meeting note and action item automations",
      "Red Beans-led operations training session"
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
    title: "Enterprise Data Shield",
    price: 2000,
    stack: "A",
    description: "Protect proprietary company and client data from leaking into public LLMs.",
    details: [
      "AI vendor vetting checklist",
      "Confidential data handling guide",
      "Internal risk classification template",
      "Safe prompt and tooling standards"
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
    title: "Copilot Mastery",
    price: 2800,
    stack: "B",
    description: "Train teams to use AI to dramatically increase daily administrative output.",
    details: [
      "Role-based prompt training for daily work",
      "Task acceleration playbooks for teams",
      "Meeting, writing, and planning workflows",
      "Hands-on productivity workshop"
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
    title: "Custom Knowledge Bots",
    price: 3500,
    stack: "B",
    description: "Build internal chatbots trained on your company SOPs and knowledge base.",
    details: [
      "Custom internal bot use-case design",
      "SOP and knowledge-base ingestion planning",
      "AI guardrails and access boundaries",
      "Deployment and handoff guide"
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
    title: "Brand Content Engine",
    price: 2200,
    stack: "C",
    description: "Scale social media, newsletters, and copywriting with AI-supported workflows.",
    details: [
      "Brand voice tuning profiles",
      "Campaign content prompt library",
      "Newsletter and social templates",
      "Marketing workflow alignment session"
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
    title: "AI Video & Communications",
    price: 4000,
    stack: "C",
    description: "Create digital avatars for internal training or external communications.",
    details: [
      "AI avatar and studio creation guide",
      "Voice and likeness governance framework",
      "Script-to-video workflow",
      "Captioning and communications distribution setup"
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
    title: "RFP & Proposal AI",
    price: 3200,
    stack: "D",
    description: "Train models on past successful proposals to accelerate new bids and RFP responses.",
    details: [
      "Proposal structuring prompt system",
      "Past-response ingestion planning",
      "Approval-ready drafting workflows",
      "Bid and proposal training workshop"
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
    title: "CRM & Lead AI",
    price: 2600,
    stack: "D",
    description: "Automate lead triage, CRM hygiene, and outreach tracking for sales teams.",
    details: [
      "Lead triage workflow design",
      "CRM cleanup and tagging logic",
      "Sales outreach template system",
      "Follow-up tracking recommendations"
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
const downloadSnapshotButton = document.getElementById("download-snapshot-btn");
const submissionStatus = document.getElementById("submission-status");
const RESULTS_EMAIL = "david-ceo@redbeans.io";

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

function getSelectedModules() {
  return Array.from(selectedModules).map((id) => modules[id]);
}

function buildResultsPayload() {
  const chosen = getSelectedModules();
  const totalInvestment = chosen.reduce((sum, module) => sum + module.price, 0);

  return {
    submittedAt: new Date().toISOString(),
    pointOfContact: {
      name: state.profile?.clientName || "",
      title: state.profile?.jobTitle || "",
      phone: state.profile?.phone || "",
      email: state.profile?.email || ""
    },
    organization: {
      name: state.profile?.orgName || "",
      participants: state.profile?.participants || "",
      budget: state.profile?.budget || ""
    },
    goals: {
      challenges: state.profile?.challenges || "",
      desiredOutcomes: state.profile?.goals || ""
    },
    selectedModules: chosen.map((module) => ({
      title: module.title,
      stack: module.stack,
      price: module.price,
      timelineStartPercent: module.start,
      timelineWidthPercent: module.width
    })),
    totalInvestment
  };
}

function buildSummaryText(payload) {
  const moduleLines = payload.selectedModules.length
    ? payload.selectedModules
        .map((module) => `- ${module.title} (Stack ${module.stack}) - ${formatCurrency(module.price)}`)
        .join("\n")
    : "- No modules selected";

  return [
    "RedStride AI Business Blueprint Summary",
    "",
    `Submitted: ${payload.submittedAt}`,
    "",
    "Point of Contact",
    `Name: ${payload.pointOfContact.name}`,
    `Title: ${payload.pointOfContact.title}`,
    `Phone: ${payload.pointOfContact.phone}`,
    `Email: ${payload.pointOfContact.email}`,
    "",
    "Organization",
    `Name: ${payload.organization.name}`,
    `Participants: ${payload.organization.participants}`,
    `Budget: ${payload.organization.budget}`,
    "",
    "Challenges",
    payload.goals.challenges || "Not provided",
    "",
    "Desired Outcomes",
    payload.goals.desiredOutcomes || "Not provided",
    "",
    "Selected Modules",
    moduleLines,
    "",
    `Total Investment: ${formatCurrency(payload.totalInvestment)}`
  ].join("\n");
}

function setSubmissionStatus(message, kind = "") {
  submissionStatus.textContent = message;
  submissionStatus.classList.remove("is-success", "is-error");
  if (kind) {
    submissionStatus.classList.add(kind);
  }
}

function addWrappedText(doc, text, x, y, maxWidth, lineHeight = 6, options = {}) {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y, options);
  return y + lines.length * lineHeight;
}

function downloadSnapshot() {
  const payload = buildResultsPayload();
  const orgSlug = (payload.organization.name || "redstride-results")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const fileName = `${orgSlug || "redstride-results"}-ai-blueprint.pdf`;

  if (!window.jspdf?.jsPDF) {
    setSubmissionStatus("PDF export is not available right now. Please refresh and try again.", "is-error");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const pageHeight = doc.internal.pageSize.getHeight();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  const ensureSpace = (needed = 16) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = 20;
    }
  };

  doc.setFillColor(128, 1, 1);
  doc.roundedRect(margin, y, contentWidth, 22, 4, 4, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("RedStride AI Business Blueprint", margin + 6, y + 9);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Generated ${new Date(payload.submittedAt).toLocaleString()}`, margin + 6, y + 16);
  y += 32;

  doc.setTextColor(45, 46, 48);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Point of Contact", margin, y);
  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(`Name: ${payload.pointOfContact.name}`, margin, y);
  y += 6;
  doc.text(`Title: ${payload.pointOfContact.title}`, margin, y);
  y += 6;
  doc.text(`Phone: ${payload.pointOfContact.phone}`, margin, y);
  y += 6;
  doc.text(`Email: ${payload.pointOfContact.email}`, margin, y);
  y += 10;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Business", margin, y);
  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(`Name: ${payload.organization.name}`, margin, y);
  y += 6;
  doc.text(`Participants: ${payload.organization.participants}`, margin, y);
  y += 6;
  doc.text(`Budget: ${payload.organization.budget}`, margin, y);
  y += 10;

  ensureSpace(24);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Challenges", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  y = addWrappedText(doc, payload.goals.challenges || "Not provided", margin, y, contentWidth, 6);
  y += 6;

  ensureSpace(24);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Desired Outcomes", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  y = addWrappedText(doc, payload.goals.desiredOutcomes || "Not provided", margin, y, contentWidth, 6);
  y += 8;

  ensureSpace(30);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Selected Modules", margin, y);
  y += 8;

  if (payload.selectedModules.length === 0) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("No modules selected", margin, y);
    y += 8;
  } else {
    payload.selectedModules.forEach((module) => {
      ensureSpace(18);
      doc.setFillColor(232, 223, 216);
      doc.roundedRect(margin, y - 5, contentWidth, 14, 3, 3, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(module.title, margin + 4, y);
      doc.setFont("helvetica", "normal");
      doc.text(`Stack ${module.stack}`, margin + 4, y + 5);
      doc.setFont("helvetica", "bold");
      doc.text(formatCurrency(module.price), pageWidth - margin - 4, y, { align: "right" });
      y += 18;
    });
  }

  ensureSpace(18);
  doc.setDrawColor(180, 112, 109);
  doc.line(margin, y, pageWidth - margin, y);
  y += 9;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text(`Total Investment: ${formatCurrency(payload.totalInvestment)}`, margin, y);

  doc.save(fileName);
  setSubmissionStatus("PDF snapshot downloaded.", "is-success");
}

async function sendResultsSummary() {
  if (!state.profile?.email) {
    setSubmissionStatus("Please complete the assessment form before sending results.", "is-error");
    return;
  }

  const payload = buildResultsPayload();
  const summary = buildSummaryText(payload);
  const body = new FormData();

  body.append("contact_name", payload.pointOfContact.name);
  body.append("contact_title", payload.pointOfContact.title);
  body.append("contact_phone", payload.pointOfContact.phone);
  body.append("email", payload.pointOfContact.email);
  body.append("organization_name", payload.organization.name);
  body.append("participant_count", payload.organization.participants);
  body.append("budget_range", payload.organization.budget);
  body.append("selected_modules", payload.selectedModules.map((module) => module.title).join(", "));
  body.append("total_investment", formatCurrency(payload.totalInvestment));
  body.append("summary", summary);
  body.append("_subject", `RedStride AI business blueprint for ${payload.organization.name || "New inquiry"}`);
  body.append("_template", "table");
  body.append("_captcha", "false");

  requestProposalButton.disabled = true;
  setSubmissionStatus("Sending results summary...", "");

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${RESULTS_EMAIL}`, {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body
    });
    const result = await response.json();

    if (!response.ok || result.success === false) {
      throw new Error(result.message || "Unable to send summary.");
    }

    setSubmissionStatus(
      "Results summary sent. The first submission may require an activation click in David's inbox before later submissions flow automatically.",
      "is-success"
    );
  } catch (error) {
    setSubmissionStatus(
      "Email send failed in-browser. The PDF download still works, and we can switch to a dedicated backend for guaranteed delivery.",
      "is-error"
    );
  } finally {
    requestProposalButton.disabled = false;
  }
}

function openChart() {
  if (selectedModules.size === 0) return;

  const chosen = getSelectedModules();
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
  setSubmissionStatus("");
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
  sendResultsSummary();
});
downloadSnapshotButton.addEventListener("click", downloadSnapshot);

renderModuleCards();

const savedProfile = loadAssessment();
if (savedProfile) {
  applyAssessmentToForm(savedProfile);
  unlockBuilder(savedProfile);
}
