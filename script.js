const translations = {
  en: {
    photoAlt: "Portrait of Iván Bailetti Ferreyra",
    contact: "Contact",
    social: "Social",
    profile: "Profile",
    profileText: "Strong expertise in Linux-based systems, networking, security, AWS Cloud (VPC, EC2, ECS, RDS) and AI.",
    skills: "Skills",
    expertise: "Expertise",
    exp1: "AWS Cloud Architecture",
    exp2: "Highly Available Applications",
    exp3: "Cost Effective Solutions",
    exp4: "Core Security Concepts and High Quality Network Performance",
    personal: "Personal",
    p1: "Team Player",
    p2: "Communicative",
    p3: "Creative",
    p4: "Organized",
    role: "Software Engineer",
    experience: "Experience",
    tasks: "Tasks",
    stack: "Stack",
    d1: "2024 – Present",
    t1: "Collaborate with the engineering, QA and product teams to plan, review and migrate the StadiumGoods project workloads from AWS to Azure.",
    s1: "AWS services and Azure services.",
    t2: "Troubleshoot issues across infrastructure and continuously improve system reliability by automating infrastructure deployments for the Cencommerce project using AWS services, Terraform and Gitlab.",
    t3: "Build AWS API Gateway REST APIs with Lambda integration and DynamoDB using Python.",
    t4: "Build AWS API Gateway REST APIs with Lambda integration and DynamoDB using JavaScript.",
    education: "Education",
    degree: "Software Engineer",
    uni: "Siglo 21 University",
    certifications: "Certifications",
    ai: "AI",
  },
  es: {
    photoAlt: "Retrato de Iván Bailetti Ferreyra",
    contact: "Contacto",
    social: "Social",
    profile: "Perfil",
    profileText: "Fuerte experiencia en sistemas basados en Linux, redes, seguridad, AWS Cloud (VPC, EC2, ECS, RDS) e IA.",
    skills: "Skills",
    expertise: "Expertise",
    exp1: "Arquitectura Cloud AWS",
    exp2: "Aplicaciones de alta disponibilidad",
    exp3: "Soluciones costo efectivas",
    exp4: "Fundamentos de seguridad y rendimiento de red de alta calidad",
    personal: "Personal",
    p1: "Jugador de equipo",
    p2: "Comunicativo",
    p3: "Creativo",
    p4: "Organizado",
    role: "Ingeniero en Software",
    experience: "Experiencia",
    tasks: "Tareas",
    stack: "Stack",
    d1: "2024 – Presente",
    t1: "Colaborar con los equipos de ingeniería, calidad y producto para planificar, revisar y migrar las cargas de trabajo del proyecto StadiumGoods de AWS a Azure.",
    s1: "AWS services y Azure services.",
    t2: "Solucionar problemas en la infraestructura y mejorar continuamente la confiabilidad del sistema automatizando los despliegues de infraestructura para el proyecto Cencommerce usando servicios de AWS, Terraform y Gitlab.",
    t3: "Construir REST APIs de AWS API Gateway con integración Lambda y DynamoDB usando Python.",
    t4: "Construir REST APIs de AWS API Gateway con integración Lambda y DynamoDB usando JavaScript.",
    education: "Educación",
    degree: "Ingeniero en Software",
    uni: "Universidad Siglo 21",
    certifications: "Certificaciones",
    ai: "IA",
  },
};

const titles = {
  en: "Iván Bailetti Ferreyra — Software Engineer",
  es: "Iván Bailetti Ferreyra — Ingeniero en Software",
};

const STORAGE_KEY = "lang";
const buttons = document.querySelectorAll("[data-lang]");

function setLang(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.title = titles[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (dict[el.dataset.i18n] !== undefined) el.textContent = dict[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.alt = dict[el.dataset.i18nAlt];
  });
  buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
}

function initialLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (translations[fromUrl]) return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (translations[saved]) return saved;
  } catch {}
  return navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

buttons.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
document.getElementById("year").textContent = new Date().getFullYear();
setLang(initialLang());
