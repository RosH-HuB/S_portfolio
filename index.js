// !! Function to initialize event listeners for the header
function initializeHeaderEventListeners() {
  const bar = document.getElementById("bar");
  const navbar = document.getElementById("navbar");
  const closebutton = document.getElementById("close");

  if (bar) {
    bar.addEventListener("click", () => {
      console.log("Bar clicked");
      navbar.classList.toggle("active");
      closebutton.classList.toggle("active");
      bar.classList.toggle("active");
    });
  }

  if (closebutton) {
    closebutton.addEventListener("click", () => {
      console.log("Close button clicked");
      navbar.classList.toggle("active");
      closebutton.classList.toggle("active");
      bar.classList.toggle("active");
    });
  }
}

// !!Function to load the hero section
function loadHero() {
  fetch("hero.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("hero-section").innerHTML = data;
    });
}

// !!Function to load the about section
function loadAbout() {
  fetch("about.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("about-section").innerHTML = data;
    });
}

// !----------------------------------------------- Project section code ------------------------------------------------*/

const projectsData = [
  {
    imgSrc:
      "data:image/jpeg;base64,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",
    projectName: "VIP ENGINEER- E3",
    projectDescription: "Delivered dedicated technical support to senior leadership, managing escalations and optimizing devices for performance and security. Collaborated with IT teams to align strategies and ensured smooth transitions during upgrades, acting as a liaison for efficient issue resolution. ",
  },
  {
    imgSrc: "https://static.businessworld.in/Motilal_Oswal_sept10_Tz8af7K.jpg",
    projectName: "VIP SUPPORT ENGINEER: / JSW GROUP (SYSNET GLOBAL)",
    projectDescription: "Delivered executive-level technical support for VIP users, ensuring system performance, resolving issues, and providing remote support, especially during the pandemic.",
  },
  {
    imgSrc:
      "https://media.licdn.com/dms/image/v2/C511BAQEGtXaA8wAbcQ/company-background_10000/company-background_10000/0/1584440538070?e=2147483647&v=beta&t=j7hivTBMs8JAop-sk_A3oO29Ojw62YsYgI4QpAmgNuw",
    projectName: "Vip support Engineer",
    projectDescription:
      "Promoted to VIP Support Engineer for excellent performance, providing technical support for Mac, Windows, and mobile devices. Managed backups, system upgrades, and coordinated help desk and IT operations to ensure security and connectivity.",
  },
  {
    imgSrc:
      "https://images.drive.com.au/driveau/image/upload/t_wp-default/v1/cms/uploads/kininb6m4imxda6ppnxu",
    projectName: "Remote Support Engineer",
    projectDescription:
      "Provided remote IT support, resolving technical issues and assisting with user account management. Coordinated with server teams on critical cases and handled incident reporting and audits.",
  },
];

const projectsSection = document.getElementById("projects-section");

projectsData.forEach((project) => {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");

  const projectImage = document.createElement("div");
  projectImage.classList.add("project-image");
  const img = document.createElement("img");
  img.src = project.imgSrc;
  img.alt = project.projectName;
  projectImage.appendChild(img);

  const projectInformation = document.createElement("div");
  projectInformation.classList.add("project-info");

  const projectName = document.createElement("h2");
  projectName.classList.add("project-name");
  projectName.textContent = project.projectName;

  const projectDescription = document.createElement("p");
  projectDescription.classList.add("project-description");
  projectDescription.textContent = project.projectDescription;

  projectInformation.appendChild(projectName);
  projectInformation.appendChild(projectDescription);

  projectContainer.appendChild(projectImage);
  projectContainer.appendChild(projectInformation);

  // Add click event listener to navigate to GitHub link

  projectsSection.appendChild(projectContainer);
});

// ! ---------------------------------------------------------------- skills section------------------------------------------------








const skillsData = [
  {
    name: "Project Management ",
    description: "",
  },
  {
    name: "Public Relations",
    description: "",
  },
  {
    name: "Teamwork",
    description: "",
  },
  {
    name: "Time Management",
    description: "",
  },
  {
    name: "Leadership",
    description: "",
  },
  {
    name: "Effective Communication",
    description: "",
  },
  {
    name: "Critical Thinking",
    description: "",
  },
  {
    name: "Vendor management",
    description: "",
  },
];

const skillsSection = document.getElementById("skills-section");

skillsData.forEach((skill) => {
  const skillContainer = document.createElement("div");
  skillContainer.classList.add("skill-container");

  const skillName = document.createElement("div");
  skillName.classList.add("skill-name");
  skillName.textContent = skill.name;

  const skillDescription = document.createElement("div");
  skillDescription.classList.add("skill-description");
  skillDescription.textContent = skill.description;

  skillContainer.appendChild(skillName);
  skillContainer.appendChild(skillDescription);

  skillsSection.appendChild(skillContainer);
});

// !-------------------------- footer section code ------------------------------//

function loadfooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-section").innerHTML = data;
    });
}

// Initialize event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeHeaderEventListeners();
  loadHero();
  loadAbout();
  loadfooter();
});
