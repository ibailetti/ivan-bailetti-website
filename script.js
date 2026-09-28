const translations = {
  en: {
    photoAlt: "Portrait of Iván Bailetti Ferreyra",
    contact: "Contact",
    social: "Social",
    profile: "Profile",
    profileText: "I love building things on AWS. I work across design and code, turning ideas into products people actually enjoy using. Currently exploring AI‑assisted tooling and the craft of simple interfaces.",
    skills: "Skills",
    expertise: "Expertise",
    exp1: "AWS Cloud Architecture",
    exp2: "Highly Available Applications",
    exp3: "Cost Effective Solutions",
    exp4: "Core Security Concepts and High Quality Network Performance",
    role: "Software Engineer",
    experience: "Experience",
    tasks: "Tasks",
    stack: "Stack",
    d1: "2024 – Present",
    t1: "Working side by side with the engineering, QA and product teams to plan, review and move the StadiumGoods workloads from AWS to Azure.",
    s1: "AWS services and Azure services.",
    t2: "Tracked down infrastructure issues and kept making Cencommerce more reliable by automating its infrastructure deployments with AWS, Terraform and Gitlab.",
    t3: "Built REST APIs on AWS API Gateway, backed by Lambda and DynamoDB, all in Python.",
    t4: "Built REST APIs on AWS API Gateway, backed by Lambda and DynamoDB, all in JavaScript.",
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
    profileText: "Me encanta construir cosas en AWS. Trabajo entre el diseño y el código, convirtiendo ideas en productos que la gente realmente disfruta usar. Actualmente exploro herramientas asistidas por IA y el oficio de las interfaces simples.",
    skills: "Skills",
    expertise: "Expertise",
    exp1: "Arquitectura Cloud AWS",
    exp2: "Aplicaciones de alta disponibilidad",
    exp3: "Soluciones costo efectivas",
    exp4: "Fundamentos de seguridad y rendimiento de red de alta calidad",
    role: "Ingeniero en Software",
    experience: "Experiencia",
    tasks: "Tareas",
    stack: "Stack",
    d1: "2024 – Presente",
    t1: "Trabajando codo a codo con los equipos de ingeniería, calidad y producto para planificar, revisar y migrar las cargas de trabajo de StadiumGoods de AWS a Azure.",
    s1: "AWS services y Azure services.",
    t2: "Detectaba y resolvía problemas de infraestructura y seguí mejorando la confiabilidad de Cencommerce automatizando sus despliegues con AWS, Terraform y Gitlab.",
    t3: "Construí REST APIs en AWS API Gateway, con Lambda y DynamoDB, todo en Python.",
    t4: "Construí REST APIs en AWS API Gateway, con Lambda y DynamoDB, todo en JavaScript.",
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
