const projectsData = [
  {
    id: 1,
    category: "NxtWave Project",
    title: "Tasty Kitchen App",
    image: "/photos/about/Login_Empty.png",
    description: [
      "🔐 Authentication & Routing – Implement login/logout, protect routes using JWT, and use React Router for navigation.",
      "🍽 Restaurant & Menu Features – Display restaurants list, show restaurant details with menu items, and fetch data using APIs.",
      "🛒 Cart & Order Management – Add items to cart, update quantity, calculate total price, and place orders with responsive UI.",
    ],
    tools: [
      "React.js",
      "React Router",
      "JWT Authentication",
      "REST API",
      "CSS",
    ],
    link: "https://tastykichenapp.ccbp.tech/login",
  },
  {
    id: 2,
    category: "Internship Project",
    title: "Mscribe",
    image: "/photos/about/doctorsproject.png",
    description: [
      "🏥 Healthcare Documentation System – Platform to manage patient records, prescriptions, and medical notes.",
      "⚙️ Frontend Development – Built using React.js, Tailwind CSS, and shadcn/ui.",
      "🔐 Secure Data Handling – Protected routes and secure API communication.",
    ],
    tools: ["React.js", "Tailwind CSS", "Shadcn UI", "Spring Boot", "MySQL"],
    link: "https://github.com/mohansaiveeranki/mscribe",
  },
  {
    id: 3,
    category: "Personal Project",
    title: "My Portfolio",
    image: "/photos/about/portfolio.png",
    description: [
      "💻 Dynamic and responsive frontend using React.js.",
      "⚙️ Scalable backend using Spring Boot and REST APIs.",
      "🔄 Seamless frontend-backend integration.",
    ],
    tools: ["React.js", "Spring Boot", "REST API", "Java", "CSS"],
    link: "https://tastykichenapp.ccbp.tech/login",
  },
  {
    id: 4,
    category: "Personal Project",
    title: "Bank Application Using CRUD Operations",
    location: "Hyderabad",
    duration: "Dec 2024 - Feb 2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnMyEJQN60YRmyfgBYhn4e94mVBkCNIXrkw&s",
    description: [
      "🏦 Engineered a banking application enabling users to create, update, delete, and retrieve account information efficiently.",
      "💳 Implemented secure transaction processing mechanisms ensuring data consistency.",
      "🛡 Applied effective database management strategies to maintain integrity and security.",
    ],
    tools: ["Java", "Hibernate", "MySQL", "CRUD Operations"],
    link: "#",
  },

  {
    id: 5,
    category: "Major Project",
    title: "Video Summarization Using Deep Neural Networks",
    location: "Vijayawada",
    duration: "Jan 2023 - May 2023",
    image:
      "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/image_4ba3c278ed.png",
    description: [
      "🎥 Built a deep learning model to extract keyframes from long videos.",
      "📉 Reduced storage requirements and processing time by 30%.",
      "🧠 Preserved essential video content using neural network optimization.",
    ],
    tools: ["Python", "Neural Networks", "TensorFlow", "Deep Learning"],
    link: "#",
  },
];

export default projectsData;
