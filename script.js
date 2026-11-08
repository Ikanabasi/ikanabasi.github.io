
// ===========================================
// IKANABASI AKPAN PORTFOLIO
// PROJECT DATA & INTERACTIVITY
// ===========================================

// ===========================================
// 1. PROJECT DATA
// ===========================================

const projects = [

  // ----------------------------------------
  // PROJECT 1: DATAOPS SENTINEL
  // ----------------------------------------

  {
    id: "sentinel",

    title: "DataOps Sentinel",

    subtitle: "FDIC Banking Risk & Operations Monitor",

    // Project thumbnail image
    image: "assets/projects/dataops-sentinel.png",

    status: "Live project",
    statusClass: "live",

    short:
      "An end-to-end data engineering and financial monitoring platform built using real FDIC banking data.",

    description:
      "DataOps Sentinel is an end-to-end financial data engineering and analytics platform. It collects real banking financial records from the FDIC API, validates and transforms the data through a Bronze-Silver-Gold pipeline, and delivers interactive financial monitoring dashboards.",

    problem:
      "Banking data can be difficult to analyze when it contains inconsistencies, missing values, or is spread across multiple reporting periods. I wanted to design a reliable, automated pipeline that converts raw banking information into trustworthy datasets and meaningful financial insights.",

    built: [
      "Ingested and processed 102,983 bank-quarter records across 22 reporting quarters.",

      "Developed Python ingestion pipelines to collect real banking data through the FDIC API.",

      "Implemented Bronze, Silver and Gold data layers for ingestion, cleaning, transformation and analytics.",

      "Built reusable data-quality validation checks to detect missing values, duplicates and invalid records.",

      "Used AWS S3 for storing datasets and Amazon Athena for SQL-based analytics.",

      "Developed eight Gold SQL monitoring views to analyze banking risk and financial indicators.",

      "Built a Streamlit dashboard with an Executive Overview and Historical Explorer.",

      "Implemented automated tests and GitHub Actions workflows.",

      "Created validated, versioned snapshots with SHA-256 integrity verification.",

      "Deployed the interactive dashboard publicly using Streamlit Community Cloud."
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
      "Plotly",
      "pytest",
      "Data Quality",
      "REST APIs"
    ],

    note:
      "The public dashboard uses validated portfolio snapshots. The AWS pipeline runs separately; unattended new-quarter publishing has not been production-proven.",

    links: [
      [
        "View Live Dashboard",
        "https://data-ops-sentinel.streamlit.app/"
      ],
      [
        "View GitHub Repository",
        "https://github.com/Ikanabasi/data-ops-sentinel"
      ]
    ]
  },

  // ----------------------------------------
  // PROJECT 2: BANKING TRANSACTION MONITOR
  // ----------------------------------------

  {
    id: "risk",

    title: "Banking Transaction Risk Monitor",

    subtitle: "Banking Analytics & Transaction Quality",

    image: "assets/projects/banking-monitor.png",

    status: "Portfolio build",
    statusClass: "",

    short:
      "A banking analytics project focused on data quality, transaction validation and unusual activity.",

    description:
      "This project explores how banking transaction records can be cleaned, validated and analyzed to identify unusual transaction activity and support operational risk monitoring.",

    problem:
      "Financial transaction datasets can contain incomplete customer identifiers, duplicate transactions, invalid amounts and inconsistent information. If these issues are not addressed, downstream analytics and risk indicators can become unreliable.",

    built: [
      "Designed reusable Python data-quality validation functions.",

      "Implemented required-field, numeric, date, range and uniqueness checks.",

      "Separated valid and rejected transaction records.",

      "Generated rejection reasons to support data-quality investigations.",

      "Designed PostgreSQL tables for banking transaction analytics.",

      "Explored risk indicators such as abnormal transaction amounts, international activity and unusual channels."
    ],

    stats: [
      ["100K", "Sample transactions"],
      ["Python", "Validation"],
      ["SQL", "Analytics"]
    ],

    tech: [
      "Python",
      "Pandas",
      "SQL",
      "PostgreSQL",
      "Data Validation",
      "ETL",
      "Banking Analytics"
    ],

    note:
      "Portfolio build. Planned analytics and deployment components are not presented as fully completed.",

    links: []
  },

  // ----------------------------------------
  // PROJECT 3: SAFE TEXT-TO-SQL
  // ----------------------------------------

  {
    id: "textsql",

    title: "Safe Text-to-SQL",

    subtitle: "Trustworthy SQL Generation on Large Schemas",

    image: "assets/projects/text-to-sql.png",

    status: "Research prototype",
    statusClass: "",

    short:
      "An LLM-powered SQL generation research project with parsing, schema validation and safety checks.",

    description:
      "This research project investigates how large language models can generate SQL queries more reliably on complex database schemas, with validation safeguards and a mechanism for refusing uncertain outputs.",

    problem:
      "Large language models sometimes generate SQL queries that appear correct but reference invalid columns or tables, use incorrect joins or produce plausible but incorrect analytical results. These failures are particularly concerning in enterprise environments.",

    built: [
      "Implemented PostgreSQL schema introspection to retrieve table and column metadata.",

      "Integrated LLM-generated SQL into a validation pipeline.",

      "Used SQLGlot to parse generated queries.",

      "Developed table and column validation checks.",

      "Explored abstention and failure classification.",

      "Designed evaluation metrics including accuracy on answered queries and coverage."
    ],

    stats: [
      ["SQLGlot", "SQL parsing"],
      ["Schema", "Validation"],
      ["LLM", "Research"]
    ],

    tech: [
      "Python",
      "PostgreSQL",
      "SQLGlot",
      "OpenAI API",
      "LLMs",
      "Schema Validation",
      "AI Evaluation"
    ],

    note:
      "Ongoing research prototype. Evaluation metrics are not presented as production accuracy claims.",

    links: []
  },

  // ----------------------------------------
  // PROJECT 4: AI NETWORKING ASSISTANT
  // ----------------------------------------

  {
    id: "network",

    title: "AI Networking Assistant",

    subtitle: "Human-in-the-Loop Agentic AI",

    image: "assets/projects/ai-networking.png",

    status: "Prototype",
    statusClass: "",

    short:
      "An AI-powered assistant prototype designed to support professional networking research and engagement preparation.",

    description:
      "An agentic AI assistant prototype that explores how AI can help professionals discover relevant networking opportunities, track activity and prepare thoughtful engagement suggestions while keeping a human in control.",

    problem:
      "Professional networking takes time and research. Finding relevant contacts, understanding their professional activity and planning meaningful engagement can become repetitive and difficult to manage.",

    built: [
      "Prototyped professional connection discovery workflows.",

      "Designed candidate ranking and tracking processes.",

      "Explored activity monitoring and engagement suggestions.",

      "Developed human-review and approval concepts.",

      "Designed candidate cooldown and engagement tracking."
    ],

    stats: [
      ["Agentic", "AI workflow"],
      ["Human", "Approval"],
      ["Python", "Automation"]
    ],

    tech: [
      "Python",
      "Playwright",
      "OpenAI API",
      "PostgreSQL",
      "Streamlit",
      "AI Agents",
      "Automation"
    ],

    note:
      "Research prototype with human oversight; not presented as a fully deployed automatic outreach system.",

    links: []
  }

];


// ===========================================
// 2. GENERATE THE PROJECT CARDS
// ===========================================

const grid = document.getElementById("projectGrid");

projects.forEach((project) => {

  // Create project card
  const article = document.createElement("article");
  article.className = "project-card";

  // -----------------------------------------
  // PROJECT IMAGE
  // -----------------------------------------

  const visual = document.createElement("div");
  visual.className = "project-visual";

  const image = document.createElement("img");

  image.src = project.image;
  image.alt = `${project.title} project preview`;
  image.className = "project-image";

  image.loading = "lazy";
  image.decoding = "async";

  // Fallback text if the image is missing
  const fallback = document.createElement("div");

  fallback.className = "project-image-fallback";
  fallback.textContent = project.title;

  // If image cannot load, show fallback
  image.addEventListener("error", () => {
    visual.classList.add("image-missing");
  });

  image.addEventListener("load", () => {
    visual.classList.remove("image-missing");
  });

  visual.append(image, fallback);

  // -----------------------------------------
  // PROJECT INFORMATION
  // -----------------------------------------

  const content = document.createElement("div");
  content.className = "project-content";

  const subtitle = document.createElement("div");
  subtitle.className = "eyebrow";
  subtitle.textContent = project.subtitle;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.short;

  // -----------------------------------------
  // TECHNOLOGY TAGS
  // -----------------------------------------

  const tags = document.createElement("div");
  tags.className = "project-tags";

  project.tech.slice(0, 4).forEach((technology) => {

    const tag = document.createElement("span");

    tag.textContent = technology;

    tags.appendChild(tag);

  });

  // -----------------------------------------
  // CARD FOOTER
  // -----------------------------------------

  const footer = document.createElement("div");
  footer.className = "project-foot";

  const status = document.createElement("span");

  status.className = `status ${project.statusClass}`;

  status.textContent = project.status;

  const button = document.createElement("button");

  button.type = "button";
  button.textContent = "View project →";

  button.setAttribute(
    "aria-label",
    `View details for ${project.title}`
  );

  // Open details popup on click
  button.addEventListener("click", () => {
    openProject(project.id);
  });

  // -----------------------------------------
  // COMBINE CARD ELEMENTS
  // -----------------------------------------

  footer.append(status, button);

  content.append(
    subtitle,
    title,
    description,
    tags,
    footer
  );

  article.append(visual, content);

  // Add the card to the Projects section
  grid.appendChild(article);

});


// ===========================================
// 3. PROJECT DETAILS POPUP
// ===========================================

const dialog = document.getElementById("projectDialog");

let lastFocus = null;

function openProject(projectId) {

  const project = projects.find(
    (item) => item.id === projectId
  );

  if (!project) {
    return;
  }

  lastFocus = document.activeElement;

  // -----------------------------------------
  // PROJECT TITLE AND SUBTITLE
  // -----------------------------------------

  document.getElementById("modalTitle").textContent =
    project.title;

  document.getElementById("modalSubtitle").textContent =
    project.subtitle;

  document.getElementById("modalEyebrow").textContent =
    project.status;

  // -----------------------------------------
  // DESCRIPTION AND PROBLEM
  // -----------------------------------------

  document.getElementById("modalDescription").textContent =
    project.description;

  document.getElementById("modalProblem").textContent =
    project.problem;

  document.getElementById("modalNote").textContent =
    project.note;

  // -----------------------------------------
  // PROJECT STATISTICS
  // -----------------------------------------

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

  // -----------------------------------------
  // WHAT I BUILT
  // -----------------------------------------

  const builtList =
    document.getElementById("modalBuilt");

  builtList.replaceChildren();

  project.built.forEach((item) => {

    const listItem = document.createElement("li");

    listItem.textContent = item;

    builtList.appendChild(listItem);

  });

  // -----------------------------------------
  // TECHNOLOGIES
  // -----------------------------------------

  const technologyContainer =
    document.getElementById("modalTech");

  technologyContainer.replaceChildren();

  project.tech.forEach((technology) => {

    const tag = document.createElement("span");

    tag.className = "chip";
    tag.textContent = technology;

    technologyContainer.appendChild(tag);

  });

  // -----------------------------------------
  // LIVE DEMO AND GITHUB LINKS
  // -----------------------------------------

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

      link.textContent = `${label} ↗`;

      linksContainer.appendChild(link);

    });

  }

  // Show popup
  dialog.showModal();

}


// ===========================================
// 4. CLOSE PROJECT POPUP
// ===========================================

const closeButton =
  document.getElementById("modalClose");

// Close button
closeButton.addEventListener("click", () => {
  dialog.close();
});

// Close by clicking outside popup
dialog.addEventListener("click", (event) => {

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
// 5. AUTOMATIC FOOTER YEAR
// ===========================================

document.getElementById("year").textContent =
  new Date().getFullYear();
