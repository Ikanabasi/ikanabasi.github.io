
// ===========================================
// IKANABASI AKPAN PORTFOLIO
// PROJECT DATA AND INTERACTIVITY
// ===========================================

// Add and edit your projects here.

const projects = [

  // PROJECT 1: DATAOPS SENTINEL

  {
    id: "sentinel",

    title: "DataOps Sentinel",

    subtitle: "FDIC Banking Risk & Operations Monitor",

    emoji: "🏦",

    gradient: "visual-pink",

    status: "Live project",

    statusClass: "live",

    short:
      "An end-to-end data engineering and financial monitoring platform built on real FDIC data.",

    description:
      "I built a banking data platform that collects FDIC financial records through an API, transforms them into validated analytics-ready datasets and powers an interactive dashboard for exploring bank performance and monitoring signals.",

    problem:
      "Banking data is useful only when it can be collected reliably, checked for quality and made understandable. I wanted to create a reproducible workflow that turns raw public financial reports into meaningful, explorable information.",

    built: [
      "Ingested and processed 102,983 bank-quarter records across 22 reporting quarters.",

      "Created Bronze, Silver and Gold data layers with quality validation and historical backfills.",

      "Used AWS S3, Glue and Athena for cloud storage and eight monitoring SQL views.",

      "Built an interactive Streamlit Executive Overview and Historical Explorer.",

      "Implemented automated testing, GitHub Actions and versioned snapshot integrity verification.",

      "Deployed a public financial monitoring dashboard using validated portfolio snapshots."
    ],

    stats: [
      ["102,983", "Bank-quarter records"],
      ["22", "Reporting quarters"],
      ["4,313", "Latest-quarter institutions"]
    ],

    tech: [
      "Python",
      "Pandas",
      "SQL",
      "AWS S3",
      "AWS Glue",
      "Amazon Athena",
      "GitHub Actions",
      "Streamlit",
      "Plotly"
    ],

    note:
      "The public dashboard uses validated portfolio snapshots. The AWS pipeline runs separately; unattended new-quarter publishing has not been production-proven.",

    links: [
      [
        "Live Dashboard",
        "https://data-ops-sentinel.streamlit.app/"
      ],
      [
        "GitHub Repository",
        "https://github.com/Ikanabasi/data-ops-sentinel"
      ]
    ]
  },

  // PROJECT 2: BANKING RISK MONITOR

  {
    id: "risk",

    title: "Banking Transaction Risk Monitor",

    subtitle: "Transaction Quality & Operational Risk",

    emoji: "📉",

    gradient: "visual-yellow",

    status: "Portfolio build",

    statusClass: "",

    short:
      "A transaction data-quality and monitoring project focused on unusual banking activity.",

    description:
      "This project explores how to clean and validate banking transactions before producing transparent operational-risk indicators.",

    problem:
      "Banking transaction feeds can contain missing identifiers, duplicates and inconsistent values. Reliable risk analysis depends on trustworthy records.",

    built: [
      "Designed reusable data-validation functions.",

      "Implemented required-field, numeric, date and uniqueness checks.",

      "Separated valid and rejected records with clear rejection reasons.",

      "Designed monitoring indicators for abnormal amounts, unusual channels and international transactions."
    ],

    stats: [
      ["100K", "Sample transactions"],
      ["Python", "Data quality"],
      ["SQL", "Analytics"]
    ],

    tech: [
      "Python",
      "Pandas",
      "PostgreSQL",
      "SQL",
      "Data Validation"
    ],

    note:
      "Portfolio build. Planned analytics and deployment components are not presented as fully completed.",

    links: []
  },

  // PROJECT 3: SAFE TEXT-TO-SQL

  {
    id: "textsql",

    title: "Safe Text-to-SQL",

    subtitle: "Trustworthy SQL Generation on Large Schemas",

    emoji: "🧠",

    gradient: "visual-purple",

    status: "Research prototype",

    statusClass: "",

    short:
      "An LLM-powered SQL generation prototype with syntax and schema validation.",

    description:
      "A research-oriented system exploring when generated SQL is safe enough to return—and when the system should abstain.",

    problem:
      "LLM-generated SQL can look plausible while referencing nonexistent tables or columns, or producing incorrect answers on large schemas.",

    built: [
      "Implemented PostgreSQL schema introspection.",

      "Used SQLGlot to parse generated SQL queries.",

      "Designed table and column validation.",

      "Explored abstention and failure classification.",

      "Developed a framework for evaluating query accuracy and coverage."
    ],

    stats: [
      ["SQLGlot", "Query parsing"],
      ["Schema", "Validation"],
      ["LLM", "Research"]
    ],

    tech: [
      "Python",
      "PostgreSQL",
      "SQLGlot",
      "OpenAI API",
      "LLMs"
    ],

    note:
      "Ongoing research prototype. Evaluation metrics are not presented as production accuracy claims.",

    links: []
  },

  // PROJECT 4: AI NETWORKING ASSISTANT

  {
    id: "network",

    title: "AI Networking Assistant",

    subtitle: "Human-in-the-Loop AI Workflows",

    emoji: "🤖",

    gradient: "visual-peach",

    status: "Prototype",

    statusClass: "",

    short:
      "An AI-assisted workflow for researching professional connections and preparing thoughtful engagement.",

    description:
      "A human-reviewed AI assistant concept for helping professionals discover relevant connections, track activity and prepare context-aware engagement.",

    problem:
      "Professional networking requires research, relevance and thoughtful follow-up. Fully automated engagement can produce unreliable or inappropriate results.",

    built: [
      "Prototyped connection and candidate discovery.",

      "Designed relevance ranking and activity tracking.",

      "Developed human approval workflows.",

      "Explored tracking, cooldown logic and engagement preparation."
    ],

    stats: [
      ["Human", "Approval"],
      ["Agentic", "Workflows"],
      ["AI", "Prototype"]
    ],

    tech: [
      "Python",
      "Playwright",
      "OpenAI API",
      "PostgreSQL",
      "Streamlit"
    ],

    note:
      "Research prototype with human oversight. Not presented as a fully deployed automatic outreach system.",

    links: []
  }

];

// ===========================================
// GENERATE THE PROJECT CARDS
// ===========================================

const grid = document.getElementById("projectGrid");

projects.forEach(project => {

  const article = document.createElement("article");
  article.className = "project-card";

  // Project visual
  const visual = document.createElement("div");

  visual.className =
    `project-visual ${project.gradient}`;

  visual.setAttribute("aria-hidden", "true");

  const emoji = document.createElement("span");
  emoji.textContent = project.emoji;

  visual.appendChild(emoji);

  // Card content
  const content = document.createElement("div");
  content.className = "project-content";

  const subtitle = document.createElement("div");
  subtitle.className = "eyebrow";
  subtitle.textContent = project.subtitle;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.short;

  // Technology tags
  const tags = document.createElement("div");
  tags.className = "project-tags";

  project.tech.slice(0, 4).forEach(technology => {

    const tag = document.createElement("span");
    tag.textContent = technology;

    tags.appendChild(tag);

  });

  // Card bottom area
  const footer = document.createElement("div");
  footer.className = "project-foot";

  const status = document.createElement("span");

  status.className =
    `status ${project.statusClass}`;

  status.textContent = project.status;

  const button = document.createElement("button");

  button.type = "button";
  button.textContent = "View project details →";

  button.setAttribute(
    "aria-label",
    `View details for ${project.title}`
  );

  button.addEventListener("click", () => {
    openProject(project.id);
  });

  footer.append(status, button);

  content.append(
    subtitle,
    title,
    description,
    tags,
    footer
  );

  article.append(visual, content);
  grid.appendChild(article);

});

// ===========================================
// PROJECT DETAILS POPUP
// ===========================================

const dialog = document.getElementById("projectDialog");

let lastFocus = null;

function openProject(projectId) {

  const project = projects.find(
    item => item.id === projectId
  );

  if (!project) return;

  lastFocus = document.activeElement;

  // Title
  document.getElementById("modalTitle").textContent =
    project.title;

  document.getElementById("modalSubtitle").textContent =
    project.subtitle;

  document.getElementById("modalEyebrow").textContent =
    project.status;

  // Description and problem
  document.getElementById("modalDescription").textContent =
    project.description;

  document.getElementById("modalProblem").textContent =
    project.problem;

  document.getElementById("modalNote").textContent =
    project.note;

  // Stats
  const statsContainer =
    document.getElementById("modalStats");

  statsContainer.replaceChildren();

  project.stats.forEach(([value, label]) => {

    const box = document.createElement("div");

    const strong = document.createElement("strong");
    strong.textContent = value;

    const caption = document.createElement("span");
    caption.textContent = label;

    box.append(strong, caption);
    statsContainer.appendChild(box);

  });

  // What I built
  const builtList =
    document.getElementById("modalBuilt");

  builtList.replaceChildren();

  project.built.forEach(item => {

    const listItem = document.createElement("li");

    listItem.textContent = item;

    builtList.appendChild(listItem);

  });

  // Technologies
  const technologyContainer =
    document.getElementById("modalTech");

  technologyContainer.replaceChildren();

  project.tech.forEach(item => {

    const tag = document.createElement("span");
    tag.className = "chip";
    tag.textContent = item;

    technologyContainer.appendChild(tag);

  });

  // Links
  const linksContainer =
    document.getElementById("modalLinks");

  linksContainer.replaceChildren();

  if (project.links.length === 0) {

    const message = document.createElement("p");

    message.textContent =
      "Project links will be added when ready.";

    linksContainer.appendChild(message);

  } else {

    project.links.forEach(([label, url], index) => {

      const link = document.createElement("a");

      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      link.className =
        index === 0 ? "btn" : "btn secondary";

      link.textContent = label + " ↗";

      linksContainer.appendChild(link);

    });

  }

  dialog.showModal();

}

// ===========================================
// CLOSE PROJECT POPUP
// ===========================================

const closeButton =
  document.getElementById("modalClose");

closeButton.addEventListener("click", () => {
  dialog.close();
});

// Close when clicking outside modal
dialog.addEventListener("click", event => {

  if (event.target === dialog) {
    dialog.close();
  }

});

// Restore keyboard focus
dialog.addEventListener("close", () => {

  if (lastFocus) {
    lastFocus.focus();
  }

});

// ===========================================
// AUTOMATIC FOOTER YEAR
// ===========================================

document.getElementById("year").textContent =
  new Date().getFullYear();
