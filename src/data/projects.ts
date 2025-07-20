export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    category: "Full Stack Social Media Platform",
    title: "✍️ Qalam: Social Media Platform",
    description: "A comprehensive social media platform built with modern full-stack technologies. Features user authentication with OAuth (Google/GitHub), real-time posts with rich text editing, image uploads to AWS S3, comments and likes system, user profiles, and responsive design. Implements GraphQL and REST APIs, role-based authorization, and real-time updates. Deployed on Render (backend) and Netlify (frontend) with DynamoDB for scalable data storage.",
    images: [
      "/projects/qalam_1.png",
      "/projects/qalam_2.png",
      "/projects/qalam_3.png",
    ],
    technologies: [
      "React", 
      "TypeScript", 
      "NestJS", 
      "GraphQL", 
      "Apollo Client", 
      "AWS DynamoDB", 
      "AWS S3", 
      "JWT", 
      "OAuth", 
      "Passport.js",
      "Tailwind CSS",
      "Docker", 
      "Render", 
      "Netlify"
    ],
    demoUrl: "https://rad-truffle-6266c3.netlify.app/",
    sourceUrl: "https://github.com/axjh03/Qalam",
  },
  {
    id: "2",
    category: "Coming Soon",
    title: "🚀 New Project: To Be Added",
    description: "A new exciting project is in development. Stay tuned for updates! This will showcase the latest technologies and innovative solutions.",
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
    ],
    technologies: ["Coming Soon"],
  },
  {
    id: "3",
    category: "Full Stack Application",
    title: "💬 Ornale: Messaging App",
    description: "Built a full-featured messaging app with React and Firebase (Auth + Firestore) enabling real-time chats, user auth, and clean UI. Includes robust state management and error handling.",
    images: [
      "/projects/ornale_1.png",
      "/projects/ornale_2.png",
    ],
    technologies: ["React", "Firebase", "Real-time", "Authentication"],
    demoUrl: "https://ornale.netlify.app/",
    sourceUrl: "https://github.com/axjh03/ornale",
  },
  {
    id: "4",
    category: "Multiplayer Game",
    title: "🎮 TWSG: The Word Search Game",
    description: "Multiplayer word search game using Java, WebSockets, and JavaScript. Features real-time communication, score tracking, chat, and dynamic UI with game rooms and grid generation.",
    images: [
      "/twsg.png",
    ],
    technologies: ["Java", "WebSockets", "JavaScript", "Multiplayer"],
    demoUrl: "http://sp24.cse3310.org:9018/",
    sourceUrl: "https://github.com/axjh03/twsg",
  },
  {
    id: "5",
    category: "AI/ML Application",
    title: "🕵️ Object Detect",
    description: "Real-time object detection app using TensorFlow.js, OpenCV.js, and React. Supports live camera input, image uploads, and multiple pre-trained model options for bounding box detection.",
    images: [
      "/objdetect.png",
    ],
    technologies: ["TensorFlow.js", "OpenCV.js", "React", "AI/ML"],
    demoUrl: "https://objdetect-aalok.web.app/",
    sourceUrl: "https://github.com/axjh03/object-detect",
  },
  {
    id: "6",
    category: "AI Document System",
    title: "🤖 Anatomy AI: Document Query System",
    description: "Built an intelligent document query system using Python, Chainlit, FAISS, and Hugging Face embeddings. Enables natural language search across PDFs, with 95% retrieval accuracy and fast response times.",
    images: [
      "/chainlit.png",
    ],
    technologies: ["Python", "Chainlit", "FAISS", "NLP"],
    demoUrl: "https://huggingface.co/spaces/axjh03/anatomy/tree/main",
    sourceUrl: "https://github.com/axjh03/anatomy-ai",
  },
];