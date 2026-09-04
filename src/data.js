// single source of truth for everything on the home page. all lowercase by design.

export const personal = {
  name: "guilherme lopes",
  roleLines: ["software engineer @ tela", "cs @ ufpb"],
  geo: "🇧🇷 joão pessoa, paraíba → 🇺🇸 san francisco, ca",
  blogTagline: "blablabla'ing",
};

export const socials = {
  email: "guilhermeulopes.work@gmail.com",
  calendar: "https://cal.com/guilhermeulopes",
  github: "https://github.com/guilopeszw",
  linkedin: "https://www.linkedin.com/in/guilherme-u-lopes/",
  twitter: "https://x.com/guilopeszw",
};

// the about-me prose, one entry per paragraph
export const about = [
  "i joined tail when i started computer science at ufpb — which led me to volunteer at upenn, evaluating the separation of breast and muscular tissue made by a machine-learning model.",
  "then i volunteered at moises, building a sub-5ms chord-recognition api that became the master's thesis of a moises employee and ufpb student. i idealized produce.it as my final trainee project at tail and led a team of five to build an audio-engineering assistant that balances mixes with pytorch and a crnn.",
  "after that i joined aria as a senior researcher, working with the civil police of paraíba and lotep to monitor betting across the state. i am now building tela and making enterprise ai easier and better.",
];

// newest first
// `url` is optional; the graph card links to it when present.
export const experience = [
  {
    org: "tela", role: "software engineer", when: "jun 2026 — now",
    desc: "making enterprises focus on what matters by automating the rest",
    url: "https://www.tela.com/",
  },
  {
    org: "stealth", role: "software engineer", when: "jun 2026 — now", where: "san francisco",
    desc: "goblin mode.",
  },
  {
    org: "aria / lotep", role: "senior researcher", when: "nov 2025 — now", where: "joão pessoa",
    desc: "built scalable apis processing 3m+ betting events monthly with the civil police of paraíba and lotep.",
  },
  {
    org: "moises", role: "volunteer swe", when: "sep — dec 2025", where: "remote",
    desc: "built a sub-5ms chord-recognition api that became a master's thesis.",
  },
  {
    org: "upenn", role: "volunteer researcher", when: "jul — sep 2025", where: "remote",
    desc: "evaluated a machine-learning model separating breast and muscular tissue.",
  },
  {
    org: "tail", role: "ai researcher & team lead", when: "jul 2025 — now", where: "joão pessoa",
    desc: "led a team of 5 to create produce.it and then built a frequency-to-haptics model.",
  },
];

export const education = [
  { org: "ufpb", role: "b.sc. computer science", when: "2024 — dec 2027 (expected)" },
];

export const projects = [
  {
    name: "susflow",
    desc: "high-performance etl pipeline and standardized local data-lake builder for datasus public-health data.",
    url: "https://github.com/OncoAtlas/susflow",
  },
  {
    name: "produce.it",
    desc: "led a team of 5 building a crnn / pytorch-based audio assistant for audio engineers.",
    url: "https://github.com/guilopeszw/Produce.it",
  },
  {
    name: "sente.ai",
    desc: "a model that converts music into haptic mappings.",
    url: "https://github.com/TailUFPB/SENTE-AI",
  },
];
