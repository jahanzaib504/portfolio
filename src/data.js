export const profile = {
  name: "Jahanzaib Arif Awan",
  roles: ["Full-Stack Developer", "DevOps / Cloud Engineer"],
  location: "Karachi, Pakistan",
  email: "jahanzaibawan2008@gmail.com",
  phone: "+92 344 2101179",
  github: "github.com/jahanzaib504",
  githubUrl: "https://github.com/jahanzaib504",
  linkedin: "linkedin.com/in/jahanzaib-arif-awan",
  linkedinUrl: "https://www.linkedin.com/in/jahanzaib-arif-awan",
  summary:
    "I build products end to end — the interface, the API, and the infrastructure that keeps it running. Most recently that's meant shipping a full streaming platform on AWS with a self-built CI/CD pipeline, and gluing together CDN, DNS, and SSL by hand until it held.",
};

export const stats = [
  { value: "<50ms", label: "socket event latency", detail: "under concurrent multiplayer load" },
  { value: "60%", label: "search space cut", detail: "alpha-beta pruning on the chess AI" },
  { value: "5", label: "systems shipped", detail: "designed, built, and deployed solo" },
  { value: "3.10", label: "CGPA / 4.00", detail: "BS Computer Science, FAST-NUCES" },
];

export const projects = [
  {
    year: "2026",
    title: "Edge-Stream",
    role: "Streaming platform — architecture & deployment",
    tags: ["AWS EC2", "Docker", "Nginx", "GitHub Actions", "Cloudflare", "S3"],
    link: "https://edge-stream.awanlabs.space",
    linkLabel: "edge-stream.awanlabs.space",
    summary:
      "A full-stack streaming platform built and operated end to end — the app, the pipeline that ships it, and the infrastructure it runs on.",
    bullets: [
      "Containerized every service with Docker and deployed to AWS EC2 for reproducible environments across dev and prod.",
      "Built a GitHub Actions pipeline that runs build, test, and deploy on every push, cutting manual release steps to zero.",
      "Configured S3 for media storage and Nginx with a signed SSL certificate to serve the app over HTTPS.",
      "Registered the domain, set up DNS, and layered Cloudflare caching and CDN rules on top to cut latency and origin load.",
      "Wired Brevo for transactional email and wrote the bash script that bootstraps containers on a fresh instance.",
    ],
  },
  {
    year: "2026",
    title: "LeoGPT",
    role: "AI chatbot with real-time sync",
    tags: ["React", "Supabase", "Groq API", "Google OAuth", "Tailwind"],
    link: "https://leo-gpt.netlify.app/",
    linkLabel: "leo-gpt.netlify.app",
    summary:
      "A production chatbot that keeps chat history in sync across devices the moment a message is sent, no refresh needed.",
    bullets: [
      "Built the API layer on Supabase, persisting full chat history in Postgres.",
      "Used Supabase's real-time subscriptions to sync conversations across devices without a page reload.",
      "Integrated Google OAuth 2.0 for sign-in and the Groq Llama 3 API for sub-500ms response times.",
    ],
  },
  {
    year: "2025",
    title: "Online Chess Game",
    role: "Real-time multiplayer + AI opponent",
    tags: ["Flask", "React", "Socket.IO", "MySQL", "Tailwind"],
    link: "https://github.com/jahanzaib504/gochess",
    linkLabel: "github.com/jahanzaib504/gochess",
    summary:
      "A multiplayer chess platform with live board sync",
    bullets: [
      "Synced board state over Socket.IO with under 50ms event latency across concurrent games.",
      "Persisted games and accounts in MySQL behind a Flask API.",
    ],
  },
  {
    year: "2025",
    title: "Connect-4",
    role: "Multliplayer + AI opponent",
    tags: ["html", "css", "js"],
    link: "https://jahanzaib504.github.io/Connect-4/",
    linkLabel: "github.io/Connect-4/",
    summary:
      "A multiplayer connect-4 game with AI opponent",
    bullets: [
      "Built an AI opponent using Minimax with alpha-beta pruning, cutting the search tree by up to 60% and evaluating moves within 200ms.",
    ],
  },
  {
    year: "2026",
    title: "AI Assistant for the Visually Impaired",
    role: "Final year project — multi-model perception pipeline",
    tags: ["FastAPI", "YOLO", "FasterWhisper", "MiDaS", "EasyOCR", "ONNX"],
    link: null,
    summary:
      "A single low-latency pipeline that fuses vision, speech, and depth so a visually impaired user gets real-time spoken context about their surroundings.",
    bullets: [
      "Unified object detection, speech, depth estimation, and text recognition into one real-time pipeline.",
      "Exposed the pipeline as a FastAPI service for low-latency inference.",
      "Converted models to ONNX with quantization to make real-time inference viable on CPU.",
    ],
  },
  {
    year: "2026",
    title: "Image Matching & 3D Reconstruction",
    role: "Visual localization pipeline",
    tags: ["Python", "DINOv2", "LightGlue", "PyCOLMAP"],
    link: null,
    summary:
      "A modular pipeline that reconstructs 3D scenes from unordered, unlabeled photo collections.",
    bullets: [
      "Combined DINOv2, ALIKED, and LightGlue for feature matching across unordered image sets.",
      "Reconstructed scene geometry with PyCOLMAP from the matched features.",
      "Scored 46% on the associated Kaggle benchmark dataset.",
    ],
  },
];

export const stack = [
  {
    group: "frontend",
    items: ["React", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "backend",
    items: ["Node.js", "Express", "Flask", "FastAPI", "Socket.IO"],
  },
  {
    group: "cloud & devops",
    items: ["AWS (EC2, S3)", "Docker", "GitHub Actions", "Nginx", "Cloudflare", "Azure", "Firebase", "Azure"],
  },
  {
    group: "data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    group: "auth & integrations",
    items: ["Google OAuth 2.0", "Brevo", "Groq API"],
  },
  {
    group: "languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C/C++"],
  },
];

export const education = {
  school: "FAST — National University of Computer and Emerging Sciences",
  location: "Karachi, Pakistan",
  degree: "B.S. Computer Science",
  dates: "Sep 2022 – Jun 2026",
  gpa: "3.10 / 4.00",
  honors: ["Dean's List — Fall 2025", "Dean's List — Spring 2026"],
};
