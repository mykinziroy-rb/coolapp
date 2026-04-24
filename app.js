const moduleCatalog = {
  policy: {
    title: "Corporate AI Policy",
    stack: "A",
    stackTitle: "Security & Operational Stack",
    icon: "shield-check",
    iconWrap: "bg-brand-rose/10",
    iconColor: "text-brand-red",
    description: "Draft company handbooks for acceptable and secure AI use.",
    audience: "CISO, VP of HR, Chief Legal Officer.",
    pain: "Employees are using unapproved shadow AI tools, exposing proprietary company data and creating legal liabilities.",
    details: [
      "Custom usage and compliance guidelines",
      "Security versus co-creation frameworks",
      "Employee onboarding presentation",
      "Annual policy update review"
    ],
    start: 5,
    width: 30,
    color: "bg-brand-red"
  },
  admin: {
    title: "Operations Automator",
    stack: "A",
    stackTitle: "Security & Operational Stack",
    icon: "cog",
    iconWrap: "bg-blue-50",
    iconColor: "text-blue-600",
    description: "Streamline scheduling, email triage, and reporting workflows.",
    audience: "COO, VP of Operations, PMO.",
    pain: "Teams are drowning in inbox triage, meeting notes, and manual reporting, leaving no time for deep, strategic work.",
    details: [
      "Email triage prompt library",
      "Report summarization templates",
      "Meeting note and action item automations",
      "2-hour ops staff training workshop"
    ],
    start: 15,
    width: 20,
    color: "bg-blue-500"
  },
  safety: {
    title: "Enterprise Data Shield",
    stack: "A",
    stackTitle: "Security & Operational Stack",
    icon: "lock",
    iconWrap: "bg-emerald-50",
    iconColor: "text-emerald-600",
    description: "Protecting proprietary company info in a generative world.",
    audience: "CIO, IT Directors, Compliance Officers.",
    pain: "Fear of SOC2 violations and client data leakage is preventing the company from adopting AI tools that competitors are using.",
    details: [
      "AI vendor vetting checklist",
      "PII and client data anonymization guide",
      "SOC2 compliance alignment mapping",
      "Corporate risk assessment tool"
    ],
    start: 0,
    width: 10,
    color: "bg-emerald-500"
  },
  feedback: {
    title: "Copilot Mastery",
    stack: "B",
    stackTitle: "Team Productivity Stack",
    icon: "briefcase",
    iconWrap: "bg-purple-50",
    iconColor: "text-purple-600",
    description: "Train teams to use AI to multiply daily administrative output.",
    audience: "Department Heads, Managers, General Staff.",
    pain: "The company bought expensive enterprise AI licenses, but usage is virtually zero because teams don't know how to integrate it into daily workflows.",
    details: [
      "Document drafting prompt frameworks",
      "Advanced data synthesis tutorials",
      "Cross-department productivity strategy",
      "Microsoft Copilot / ChatGPT integration"
    ],
    start: 40,
    width: 30,
    color: "bg-purple-500"
  },
  bots: {
    title: "Custom Knowledge Bots",
    stack: "B",
    stackTitle: "Team Productivity Stack",
    icon: "bot",
    iconWrap: "bg-orange-50",
    iconColor: "text-orange-600",
    description: "Internal chat agents trained on your specific company SOPs.",
    audience: "Director of Knowledge Management, Ops Leads.",
    pain: "Institutional knowledge is buried in disjointed PDFs and Confluence pages, causing staff to waste hours searching for basic internal answers.",
    details: [
      "1 custom trained internal assistant",
      "SOP and knowledge base ingestion",
      "AI guardrails and access boundaries",
      "Manager deployment and update handbook"
    ],
    start: 50,
    width: 40,
    color: "bg-orange-500"
  },
  brand: {
    title: "Brand Content Engine",
    stack: "C",
    stackTitle: "Marketing & Comms Stack",
    icon: "sparkles",
    iconWrap: "bg-amber-50",
    iconColor: "text-amber-600",
    description: "Scale social media, newsletters, and marketing copywriting.",
    audience: "CMO, VP of Marketing, Content Directors.",
    pain: "Content demands are scaling faster than headcount. The team is burning out trying to produce multi-channel copy while maintaining brand voice.",
    details: [
      "Brand voice fine-tuning profiles",
      "Custom image generation prompt guide",
      "Campaign and ad copy templates",
      "1-hour marketing team alignment workshop"
    ],
    start: 30,
    width: 25,
    color: "bg-amber-500"
  },
  video: {
    title: "AI Video & Avatars",
    stack: "C",
    stackTitle: "Marketing & Comms Stack",
    icon: "video",
    iconWrap: "bg-indigo-50",
    iconColor: "text-indigo-600",
    description: "Create digital avatars for corporate training or marketing.",
    audience: "VP of Comms, L&D Directors, Marketing Leads.",
    pain: "Producing high-quality video for internal training or external social media is too expensive, slow, and requires complex studio setups.",
    details: [
      "AI avatar and studio creation guide",
      "Voice cloning ethical compliance framework",
      "End-to-end script-to-video workflow",
      "Automated multi-language localization setup"
    ],
    start: 60,
    width: 35,
    color: "bg-indigo-500"
  },
  grants: {
    title: "RFP & Proposal AI",
    stack: "D",
    stackTitle: "Sales & Growth Stack",
    icon: "file-signature",
    iconWrap: "bg-teal-50",
    iconColor: "text-teal-600",
    description: "Train models on successful past proposals to accelerate new bids.",
    audience: "VP of Sales, Sales Engineers, Bid Managers.",
    pain: "Answering RFPs is soul-crushing, takes weeks, and pulls top salespeople away from actually closing deals.",
    details: [
      "Proposal structuring prompts",
      "Pricing narrative generation templates",
      "Past-bid data ingestion and training setup",
      "1-hour sales engineering workshop"
    ],
    start: 20,
    width: 25,
    color: "bg-teal-500"
  },
  scholarship: {
    title: "CRM & Lead AI",
    stack: "D",
    stackTitle: "Sales & Growth Stack",
    icon: "trending-up",
    iconWrap: "bg-pink-50",
    iconColor: "text-pink-600",
    description: "Automate lead triage, CRM data hygiene, and outbound tracking.",
    audience: "CRO, Sales Operations Directors.",
    pain: "Sales reps hate data entry. The CRM is a mess of unqualified leads, and automated outreach sounds robotic, ruining conversion rates.",
    details: [
      "Lead qualification algorithms",
      "Sales inbox triage and sorting frameworks",
      "Automated outreach and follow-up templates",
      "CRM integration optimization session"
    ],
    start: 45,
    width: 30,
    color: "bg-pink-500"
  },
  recruiting: {
    title: "AI Recruiting & Sourcing",
    stack: "E",
    stackTitle: "HR & Talent Stack",
    icon: "search",
    iconWrap: "bg-sky-50",
    iconColor: "text-sky-600",
    description: "Accelerate recruiting, sourcing, and candidate research workflows.",
    audience: "CHRO, Talent Acquisition Leads, Recruiting Managers.",
    pain: "Recruiters are buried in repetitive sourcing work and struggle to move strong candidates through the funnel quickly.",
    details: [
      "AI-assisted sourcing workflow design",
      "Candidate research and screening prompts",
      "Recruiter outreach templates",
      "Talent pipeline operating guide"
    ],
    start: 10,
    width: 22,
    color: "bg-sky-500"
  },
  onboarding: {
    title: "Automated Onboarding",
    stack: "E",
    stackTitle: "HR & Talent Stack",
    icon: "clipboard-check",
    iconWrap: "bg-violet-50",
    iconColor: "text-violet-600",
    description: "Automate onboarding content, checklists, and role-based enablement.",
    audience: "People Ops, HR Business Partners, L&D Leads.",
    pain: "New hire onboarding is inconsistent, manual, and overly dependent on busy managers to carry the experience.",
    details: [
      "Onboarding workflow mapping",
      "Role-based onboarding content prompts",
      "Checklist and document automation setup",
      "Manager handoff and enablement guide"
    ],
    start: 24,
    width: 24,
    color: "bg-violet-500"
  },
  strategy: {
    title: "C-Suite AI Strategy",
    stack: "F",
    stackTitle: "Executive & Data Stack",
    icon: "briefcase",
    iconWrap: "bg-brand-rose/10",
    iconColor: "text-brand-red",
    description: "High-ticket executive strategy for AI adoption, governance, and investment decisions.",
    audience: "CEO, COO, CFO, Board and Executive Teams.",
    pain: "Leadership knows AI matters, but lacks a unified plan for where to invest, how to govern it, and what should happen first.",
    details: [
      "Executive AI opportunity mapping",
      "Risk, governance, and investment framework",
      "Leadership decision workshop",
      "Strategic rollout summary document"
    ],
    start: 6,
    width: 30,
    color: "bg-brand-red"
  },
  finance: {
    title: "Financial Data Synthesizer",
    stack: "F",
    stackTitle: "Executive & Data Stack",
    icon: "bar-chart-3",
    iconWrap: "bg-emerald-50",
    iconColor: "text-emerald-600",
    description: "Secure spreadsheet analysis and financial synthesis for high-value reporting.",
    audience: "CFO, FP&A Leaders, Finance Directors.",
    pain: "Finance teams spend too much time combining spreadsheets, summarizing results, and pressure-testing scenarios under tight deadlines.",
    details: [
      "Secure spreadsheet analysis workflow",
      "Financial reporting synthesis prompts",
      "Access and data-handling safeguards",
      "Leadership-ready insights template pack"
    ],
    start: 42,
    width: 34,
    color: "bg-emerald-500"
  }
};

const stackOrder = [
  { key: "A", title: "Security & Operational Stack" },
  { key: "B", title: "Team Productivity Stack" },
  { key: "C", title: "Marketing & Comms Stack" },
  { key: "D", title: "Sales & Growth Stack" },
  { key: "E", title: "HR & Talent Stack" },
  { key: "F", title: "Executive & Data Stack" }
];

const resultsEmails = ["david-ceo@redbeans.io", "mykinzi.roy@redbeans.io"];
const selected = new Set();
const state = { profile: null };

const stackSections = document.getElementById("stack-sections");
const assessmentForm = document.getElementById("assessment-form");
const selectedList = document.getElementById("selected-list");
const finalizeBtn = document.getElementById("finalize-btn");
const sidebarName = document.getElementById("sidebar-client-name");
const modalTitle = document.getElementById("modal-org-title");
const modal = document.getElementById("chart-modal");
const chartRows = document.getElementById("chart-rows");
const phase2Deliverables = document.getElementById("phase-2-deliverables");
const submissionStatus = document.getElementById("submission-status");
const quoteButton = document.getElementById("submit-quote-btn");
const downloadButton = document.getElementById("download-snapshot-btn");
const emailButton = document.getElementById("request-proposal-btn");
const orgNameInput = document.getElementById("orgName");

function formatCurrency(value) {
  return `$${value.toLocaleString()}`;
}

function safeIcon(name) {
  return `<i data-lucide="${name}" class="w-5 h-5"></i>`;
}

function updateSidebarName() {
  const orgName = orgNameInput.value.trim();
  sidebarName.textContent = orgName ? `Prepared for ${orgName}` : "Custom Implementation";
  modalTitle.textContent = orgName ? `${orgName} Project Chart` : "Your AI Adoption Project Chart";
}

function renderStacks() {
  stackSections.innerHTML = stackOrder.map((stack) => {
    const cards = Object.entries(moduleCatalog)
      .filter(([, module]) => module.stack === stack.key)
      .map(([id, module]) => `
        <div class="module-card p-6 rounded-2xl shadow-sm border border-brand-beige" data-module-id="${id}">
          <div class="flex items-center gap-3 mb-4">
            <div class="p-2 ${module.iconWrap} rounded-lg">${safeIcon(module.icon).replace('class="w-5 h-5"', `class="${module.iconColor} w-5 h-5"`)}</div>
            <h4 class="font-bold text-brand-dark text-lg">${module.title}</h4>
          </div>
          <p class="text-sm text-slate-500 mb-4">${module.description}</p>
          <div class="bg-slate-50 p-4 rounded-xl mb-4 border border-slate-100 flex-grow">
            <div class="mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Target Audience</span>
              <p class="text-xs text-brand-dark font-medium">${module.audience}</p>
            </div>
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">The Pain</span>
              <p class="text-xs text-slate-600 leading-relaxed">${module.pain}</p>
            </div>
          </div>
          <div class="border-t border-brand-beige pt-3 mt-auto">
            <button type="button" class="text-xs font-bold text-brand-rose hover:text-brand-darkerRed flex items-center justify-between w-full transition-colors detail-toggle" data-details-id="details-${id}">
              What's included? <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-200" id="icon-${id}"></i>
            </button>
            <div id="details-${id}" class="hidden mt-3 text-xs text-slate-500">
              <ul class="list-disc pl-4 space-y-1.5">
                ${module.details.map((detail) => `<li>${detail}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      `).join("");

    return `
      <div>
        <div class="flex items-center gap-3 mb-6">
          <span class="w-8 h-8 rounded-full bg-brand-dark text-brand-beige flex items-center justify-center text-xs font-bold">${stack.key}</span>
          <h3 class="text-xl font-bold text-brand-dark">${stack.title}</h3>
        </div>
        <div class="grid grid-cols-1 gap-4">${cards}</div>
      </div>
    `;
  }).join("");

  lucide.createIcons();

  document.querySelectorAll(".module-card").forEach((card) => {
    card.addEventListener("click", () => toggleModule(card, card.dataset.moduleId));
  });

  document.querySelectorAll(".detail-toggle").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleDetails(button.dataset.detailsId);
    });
  });
}

function toggleDetails(id) {
  const detailsDiv = document.getElementById(id);
  const icon = document.getElementById(id.replace("details-", "icon-"));
  const isHidden = detailsDiv.classList.contains("hidden");
  detailsDiv.classList.toggle("hidden", !isHidden);
  icon.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
}

function toggleFaq(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById(id.replace("faq-", "icon-faq-"));
  const isHidden = content.classList.contains("hidden");
  content.classList.toggle("hidden", !isHidden);
  icon.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
}

function toggleChat() {
  document.getElementById("chat-window").classList.toggle("hidden");
}

function handleChatKeyPress(event) {
  if (event.key === "Enter") sendMessage();
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (!message) return;

  const messagesDiv = document.getElementById("chat-messages");
  messagesDiv.insertAdjacentHTML("beforeend", `
    <div class="flex items-start gap-2 max-w-[85%] self-end flex-row-reverse animate-fade">
      <div class="w-6 h-6 rounded-full bg-brand-dark flex-shrink-0 flex items-center justify-center font-bold text-white text-[10px]">U</div>
      <div class="bg-brand-dark text-white p-3 rounded-xl rounded-tr-none shadow-sm">${message}</div>
    </div>
  `);
  input.value = "";
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  const typingId = `typing-${Date.now()}`;
  messagesDiv.insertAdjacentHTML("beforeend", `
    <div id="${typingId}" class="flex items-start gap-2 max-w-[85%] animate-fade">
      <div class="w-6 h-6 rounded-full bg-brand-red flex-shrink-0 flex items-center justify-center font-bold text-white text-[10px]">R</div>
      <div class="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-slate-200 text-slate-400 italic text-xs">Reed is typing...</div>
    </div>
  `);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  setTimeout(() => {
    document.getElementById(typingId)?.remove();
    messagesDiv.insertAdjacentHTML("beforeend", `
      <div class="flex items-start gap-2 max-w-[85%] animate-fade">
        <div class="w-6 h-6 rounded-full bg-brand-red flex-shrink-0 flex items-center justify-center font-bold text-white text-[10px]">R</div>
        <div class="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-slate-200 text-slate-700 leading-relaxed">
          That's a great question. Build your roadmap above and a Red Beans strategist can tailor the answer to your exact business context.
        </div>
      </div>
    `);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }, 1200);
}

function updateBudget() {
  if (selected.size === 0) {
    selectedList.innerHTML = '<div class="text-slate-400 italic text-sm py-4 border-b border-dashed border-brand-rose/30">Select modules on the left to build your roadmap...</div>';
    finalizeBtn.disabled = true;
    finalizeBtn.classList.add("bg-slate-200", "text-slate-500", "cursor-not-allowed");
    finalizeBtn.classList.remove("bg-brand-red", "text-white", "hover:bg-brand-darkerRed", "shadow-lg", "cursor-pointer");
    return;
  }

  finalizeBtn.disabled = false;
  finalizeBtn.classList.remove("bg-slate-200", "text-slate-500", "cursor-not-allowed");
  finalizeBtn.classList.add("bg-brand-red", "text-white", "hover:bg-brand-darkerRed", "shadow-lg", "cursor-pointer");

  selectedList.innerHTML = Array.from(selected).map((id) => `
    <div class="flex justify-between items-center py-3 border-b border-brand-beige animate-fade">
      <span class="text-sm font-semibold text-brand-dark">${moduleCatalog[id].title}</span>
      <span class="text-xs font-bold text-slate-400 uppercase">Selected</span>
    </div>
  `).join("");
}

function toggleModule(card, id) {
  if (selected.has(id)) {
    selected.delete(id);
    card.classList.remove("selected");
  } else {
    selected.add(id);
    card.classList.add("selected");
  }
  updateBudget();
}

function collectProfile() {
  const formData = new FormData(assessmentForm);
  const goalsCard = document.querySelector('#builder textarea[name="challenges"]');
  const outcomesCard = document.querySelector('#builder textarea[name="goals"]');
  const budgetSelect = document.querySelector('#builder select[name="budget"]');
  const profile = Object.fromEntries(formData.entries());
  profile.challenges = goalsCard.value.trim();
  profile.goals = outcomesCard.value.trim();
  profile.budget = budgetSelect.value;
  return profile;
}

function buildResultsPayload() {
  const profile = collectProfile();
  state.profile = profile;
  return {
    submittedAt: new Date().toISOString(),
    pointOfContact: {
      name: profile.clientName || "",
      title: profile.jobTitle || "",
      phone: profile.phone || "",
      email: profile.email || ""
    },
    organization: {
      name: profile.orgName || "",
      participants: profile.participants || "",
      budget: profile.budget || ""
    },
    goals: {
      challenges: profile.challenges || "",
      desiredOutcomes: profile.goals || ""
    },
    selectedModules: Array.from(selected).map((id) => ({
      id,
      title: moduleCatalog[id].title,
      stack: moduleCatalog[id].stack,
      start: moduleCatalog[id].start,
      width: moduleCatalog[id].width
    }))
  };
}

function buildSummaryText(payload) {
  return [
    "Red Beans AI Business Blueprint Summary",
    "",
    `Submitted: ${payload.submittedAt}`,
    "",
    `Contact: ${payload.pointOfContact.name} | ${payload.pointOfContact.title}`,
    `Email: ${payload.pointOfContact.email}`,
    `Phone: ${payload.pointOfContact.phone}`,
    `Business: ${payload.organization.name}`,
    `Participants: ${payload.organization.participants}`,
    `Budget: ${payload.organization.budget}`,
    "",
    "Challenges:",
    payload.goals.challenges || "Not provided",
    "",
    "Desired Outcomes:",
    payload.goals.desiredOutcomes || "Not provided",
    "",
    "Selected Modules:",
    payload.selectedModules.map((module) => `- ${module.title} (Stack ${module.stack})`).join("\n") || "- None selected"
  ].join("\n");
}

function setSubmissionStatus(message, type = "") {
  submissionStatus.textContent = message;
  submissionStatus.className = "text-sm ";
  submissionStatus.classList.add(type === "error" ? "text-brand-red" : type === "success" ? "text-emerald-600" : "text-slate-500");
}

function openChart() {
  if (selected.size === 0) return;
  updateSidebarName();
  const payload = buildResultsPayload();
  phase2Deliverables.innerHTML = payload.selectedModules.map((module) => `<li>${module.title}</li>`).join("");
  chartRows.innerHTML = payload.selectedModules.map((module) => `
    <div class="flex items-center">
      <div class="w-1/3">
        <h5 class="font-bold text-sm text-brand-dark">${module.title}</h5>
        <span class="text-[10px] uppercase text-slate-400 font-bold">Stack ${module.stack}</span>
      </div>
      <div class="w-2/3 relative h-8">
        <div class="gantt-bar ${moduleCatalog[module.id].color} shadow-sm" style="width: ${module.width}%; left: ${module.start}%">
          <span class="absolute -top-5 left-0 text-[9px] font-bold text-slate-400">IMPLEMENTATION</span>
        </div>
      </div>
    </div>
  `).join("");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  setSubmissionStatus("");
  lucide.createIcons();
}

function closeChart() {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

function addWrappedText(doc, text, x, y, maxWidth, lineHeight = 6) {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}

function downloadSnapshot() {
  const payload = buildResultsPayload();
  if (!window.jspdf?.jsPDF) {
    setSubmissionStatus("PDF export is not available right now.", "error");
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
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
  doc.text("Red Beans AI Business Blueprint", margin + 6, y + 9);
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
  [
    `Name: ${payload.pointOfContact.name}`,
    `Title: ${payload.pointOfContact.title}`,
    `Phone: ${payload.pointOfContact.phone}`,
    `Email: ${payload.pointOfContact.email}`,
    `Business: ${payload.organization.name}`,
    `Participants: ${payload.organization.participants}`,
    `Budget: ${payload.organization.budget}`
  ].forEach((line) => {
    doc.text(line, margin, y);
    y += 6;
  });
  y += 4;

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
  payload.selectedModules.forEach((module) => {
    ensureSpace(18);
    doc.setFillColor(232, 223, 216);
    doc.roundedRect(margin, y - 5, contentWidth, 14, 3, 3, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(module.title, margin + 4, y);
    doc.setFont("helvetica", "normal");
    doc.text(`Stack ${module.stack}`, margin + 4, y + 5);
    y += 18;
  });

  const slug = (payload.organization.name || "red-beans-blueprint").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "red-beans-blueprint";
  doc.save(`${slug}-ai-blueprint.pdf`);
  setSubmissionStatus("PDF snapshot downloaded.", "success");
}

async function sendResultsSummary() {
  const payload = buildResultsPayload();
  if (!payload.pointOfContact.email || selected.size === 0) {
    setSubmissionStatus("Please complete the assessment and select at least one module before sending results.", "error");
    return;
  }

  setSubmissionStatus("Sending results summary to Red Beans...", "");
  emailButton.disabled = true;
  quoteButton.disabled = true;

  try {
    for (const recipient of resultsEmails) {
      const body = new FormData();
      body.append("contact_name", payload.pointOfContact.name);
      body.append("contact_title", payload.pointOfContact.title);
      body.append("contact_phone", payload.pointOfContact.phone);
      body.append("email", payload.pointOfContact.email);
      body.append("organization_name", payload.organization.name);
      body.append("participant_count", payload.organization.participants);
      body.append("budget_range", payload.organization.budget);
      body.append("selected_modules", payload.selectedModules.map((module) => module.title).join(", "));
      body.append("summary", buildSummaryText(payload));
      body.append("_subject", `Red Beans AI business blueprint for ${payload.organization.name || "New inquiry"}`);
      body.append("_template", "table");
      body.append("_captcha", "false");

      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body
      });
      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error(result.message || `Unable to send summary to ${recipient}.`);
      }
    }

    setSubmissionStatus("Results summary sent to David and MyKinzi.", "success");
  } catch (error) {
    setSubmissionStatus("Email send failed. The PDF download still works, and we can switch to a dedicated backend for guaranteed delivery.", "error");
  } finally {
    emailButton.disabled = false;
    quoteButton.disabled = false;
  }
}

assessmentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.profile = collectProfile();
  updateSidebarName();
  document.getElementById("builder").scrollIntoView({ behavior: "smooth" });
});

orgNameInput.addEventListener("input", updateSidebarName);
finalizeBtn.addEventListener("click", openChart);
downloadButton.addEventListener("click", downloadSnapshot);
emailButton.addEventListener("click", sendResultsSummary);
quoteButton.addEventListener("click", sendResultsSummary);

renderStacks();
updateSidebarName();
lucide.createIcons();

window.toggleFaq = toggleFaq;
window.toggleChat = toggleChat;
window.handleChatKeyPress = handleChatKeyPress;
window.sendMessage = sendMessage;
window.closeChart = closeChart;
