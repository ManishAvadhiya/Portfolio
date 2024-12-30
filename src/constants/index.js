import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience in modern web technologies, I aim to deliver innovative solutions that enhance user experience and drive growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With professional experience in front-end and back-end technologies, I continuously strive to learn and adapt to new challenges. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led the development of scalable web applications using modern technologies. Collaborated with cross-functional teams to define project requirements and deliver high-quality solutions.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Next.js"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Developed responsive user interfaces and optimized frontend performance. Worked closely with backend developers to integrate and deliver seamless user experiences.`,
    technologies: ["React.js", "Next.js", "MySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Designed and maintained scalable full-stack applications. Created RESTful APIs and developed user interfaces for high-traffic platforms.`,
    technologies: ["React.js", "Node.js", "PostgreSQL"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to web application development and database management. Prioritized features and enhancements in collaboration with product teams.`,
    technologies: ["Ruby", "Rails", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "StyleVerse: E-Commerce Platform",
    image:project1,
    description:
      "Designed a dynamic e-commerce platform delivering the latest trends in fashion with a seamless user experience.Customers can add items to their cart, apply coupon codes for discounts, and complete payments via Stripe. The Admin panel enables sellers to manage products, feature items, delete listings, and track analytics, including total sales, revenue, customer count, and a dynamic 7-day sales graph.",
    technologies: ["React.js", "Tailwind CSS","Framer Motion","Node.js","Express","Redis","Cloudinary", "MongoDB", "Stripe"],
    link: "https://style-verse.onrender.com/",
    git:"https://github.com/ManishAvadhiya/Style_Verse",
  },
  {
    title: "ChitChat: Real-Time Chatting Platform",
    image:project2,

    description:
      "Designed a platform for real-time communication, enabling seamless one-to-one and groupinteractions Real-time chatting via WebSockets, emphasizing instant interactions.Additional functionalities like sharing photos and files, and the ability to search for new users and form groups, demonstrating advanced features beyond basic messaging.",
    technologies: ["React.js","Tailwind CSS", "Shadcn", "Node.js","Express", "MongoDB", "WebSockets"],
    link: "https://chitchatapp-i2jg.onrender.com/",
    git:"https://github.com/ManishAvadhiya/ChitChatApp",
  },
  {
    title: "RealEstate: Property Buy-Sell Platform",
    image:project3,

    description:
      "Designed a user-friendly interface for buying or renting real estate properties, including flats, houses, mansions, condos, and apartments. The platform allows users to view property photos and explore locations on an interactive React Leaflet map, enhancing the browsing experience. Users can also message landlords directly for inquiries and additional details.",
    technologies: ["React.js", "Leaflet", "SCSS"],
    link: "https://real-estate-manish.vercel.app/",
    git:"https://github.com/ManishAvadhiya/RealEstate",
  },
];

export const CONTACT = {
  address: "Anand, Gujarat 388120",
  phoneNo: "+91 9601697384",
  email: "avadhiyamanish@gmail.com",
  linkedIn: "https://www.linkedin.com/in/manish-avadhiya-a54563281/",
  github: "https://github.com/ManishAvadhiya",
};
