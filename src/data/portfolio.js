export const personal = {
  name: "guilherme lopes",
  title: "software engineer",
  subtitle: "backend development & data engineering",
  bio: "i build backend systems, data pipelines, and machine learning infrastructure. cs student at ufpb, currently doing research across ai labs and audio intelligence.",
  email: "guilhermeulopes.work@gmail.com",
  github: "https://github.com/guilopeszw",
  linkedin: "https://linkedin.com/in/guilherme-u-lopes",
  location: "joão pessoa, brazil",
  tail: "technology and artificial intelligence league (tail), ufpb",
};

export const projects = [
  {
    id: "produceit",
    title: "produce.it",
    description:
      "ai mixing assistant powered by a convolutional recurrent neural network trained on mel-spectrogram feature pipelines. the model analyzes spectral and temporal audio characteristics to deliver intelligent mixing recommendations through a full-stack interface.",
    tech: ["Python", "PyTorch", "CRNN", "Next.js", "Mel-spectrograms"],
    status: "shipped",
    year: "2025",
  },
  {
    id: "marco-polo",
    title: "marco polo",
    description:
      "an ear-training application that evaluates user pitch accuracy in real-time. implemented using STFT-based time-frequency representations and signal alignment algorithms to provide low-latency feedback. focused on the intersection of DSP and MIR for interactive musical education.",
    tech: ["Python", "PyTorch", "Librosa", "STFT", "MIR"],
    status: "in progress",
    year: "2026",
  },
  {
    id: "auris",
    title: "auris iii — haptic chair",
    description:
      "joint research project between tail's music board and lavid laboratory at ufpb. building an ai-driven multisensory system that translates musical audio into haptic stimuli — making music physically perceivable for hearing-impaired users. the work sits at the intersection of sensory substitution research, signal processing, and accessibility.",
    tech: ["Python", "AI/ML", "DSP", "Haptics", "Sensory Substitution"],
    status: "in progress",
    year: "2026",
  },
  {
    id: "chordmax",
    title: "chordmax",
    description:
      "a real-time audio analysis api built around music information retrieval. the core problem: decomposing raw audio streams into their harmonic content — extracting individual chord notes using chroma-feature analysis, onset detection, and dsp signal processing pipelines. supports diverse musical genres with sub-100ms latency.",
    tech: ["Python", "FastAPI", "Librosa", "Pychord", "DSP"],
    status: "active",
    year: "2025",
  },
];

export const experience = [
  {
    id: "aria",
    role: "backend & infrastructure developer",
    org: "aria — ai applications laboratory, ufpb",
    period: "jul. 2025 – present",
    location: "joão pessoa, pb",
    type: "research",
    bullets: [
      "architected a high-throughput data lake handling 10m+ transactions, optimized for scalable ingestion and low-latency analytical querying.",
      "engineered fastapi microservices and rest apis for automated xml/json processing with strict schema validation layers.",
      "designed end-to-end data pipelines supporting backend services and downstream machine learning workloads.",
    ],
  },
  {
    id: "moises",
    role: "software researcher (volunteer)",
    org: "moises.ai",
    period: "sep. 2025 – dec. 2025",
    location: "joão pessoa, pb",
    type: "research",
    bullets: [
      "built fastapi rest endpoints for transient event detection in audio signals and structured metadata storage.",
      "developed an automated chord annotation pipeline using librosa and pychord, eliminating manual labeling and enabling scalable mir analysis.",
    ],
  },
  {
  id: "tail",
  role: "music & dsp researcher",
  org: "tail — technology and artificial intelligence league",
  period: "jul. 2025 – present",
  location: "joão pessoa, pb",
  type: "research",
  bullets: [
    "conducted research in sensory substitution, mapping audio signal frequencies to haptic feedback systems.",
    "developed auris iii — an ai-driven pipeline combining stem separation and midi-to-haptic encoding for tactile music representation.",
  ],
  },
  {
    id: "upenn",
    role: "machine learning researcher (remote, volunteer)",
    org: "university of pennsylvania",
    period: "jul. 2025 – sep. 2025",
    location: "philadelphia, pa",
    type: "research",
    bullets: [
      "worked on medical imaging research — trained and evaluated deep learning models for mammogram tissue classification on gpu-accelerated environments.",
      "benchmarked model performance across architectures to inform research direction and optimization trade-offs.",
    ],
  }
];

export const stack = {
  languages: ["Python", "C", "C++", "Java", "SQL", "Haskell", "HTML/CSS", "JavaScript"],
  "ai & data": ["PyTorch", "Scikit-learn", "NumPy", "Pandas", "Librosa", "NLTK"],
  backend: ["FastAPI", "Flask", "REST APIs", "Apache Kafka", "Apache Airflow"],
  frontend: ["React", "Tailwind CSS", "Vite", "Next.js"],
  infrastructure: ["Docker", "Git", "Linux", "PostgreSQL", "XML/JSON"],
};

export const education = {
  school: "federal university of paraíba (ufpb)",
  degree: "bachelor of science in computer science",
  period: "jul. 2024 – may 2028 (expected)",
  location: "joão pessoa, pb, brazil",
  courses: [
    "data structures & algorithms",
    "operating systems",
    "database systems",
    "linear algebra",
    "discrete mathematics",
  ],
};
