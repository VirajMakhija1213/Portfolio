// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import giphy from "./assets/work_logo/giphy.jpeg";
import webTemp from "./assets/work_logo/webTemp.jpeg";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Software Development Engineer Intern",
    company: "Bluestock Fintech",
    date: "1st May 2025 - 30th June 2025",
    desc: "Contributed to building the Bluestock IPO Web App using the MERN stack as part of a development team. Implemented responsive React components and integrated RESTful APIs to enhance user experience and app performance. Worked alongside three backend engineers to refactor API endpoints, which led to noticeable improvements in response time and overall system efficiency.",
    skills: [
        "MongoDb",
        "Express JS",
      "React JS",
      "Node JS",
      "Redux Toolkit",
      "Tailwind CSS",
      "API Integration",
      "Git/GitHub",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Front-End Developer Intern",
    company: "Techplement",
    date: "Feb 2025 - March 2025",
    desc: "Worked as a Front-End Developer Intern on a Conversion Calculator App using React.js, Redux Toolkit, and Tailwind CSS. Focused on building responsive UI components, managing application state efficiently, and ensuring cross-browser compatibility. Followed Agile development practices and Git-based workflows, which helped reduce integration issues by 15% and improve collaboration within the team.",
    skills: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "Redux Toolkit"],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Institute of Engineering and Technology, DAVV",
    date: "Oct 2022 – Present",
    grade: "8.81 CGPA",
    desc: "Currently pursuing my Bachelor of Engineering in Computer Science, and I am in my final year. Throughout the course, I have developed a strong foundation in software engineering, data structures, algorithms, object-oriented programming, databases, and full-stack web development. I have actively participated in coding competitions, workshops, and tech events, which have enhanced my problem-solving abilities and practical knowledge.",
    degree: "Bachelor of Engineering – Computer Science Engineering",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "St. Norbert School, Indore",
    date: "Apr 2021 – Mar 2022",
    grade: "94.4%",
    desc: "Completed Class 12 under the CBSE board with Physics, Chemistry, Mathematics, and Computer Science (PCM + CS). This academic foundation sparked my interest in technology and problem-solving, which led me toward a career in software development.",
    degree: "CBSE (XII) – PCM with Computer Science",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "St. Norbert School, Indore",
    date: "Apr 2019 – Mar 2020",
    grade: "89.5%",
    desc: "Completed Class 10 under the CBSE board with a strong academic record, focusing on Science and Computer Applications. This early exposure to computers laid the groundwork for my journey into the world of programming.",
    degree: "CBSE (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Study Notion - An EdTech Platform",
    description:
      "A full-stack EdTech web application where authenticated users can browse, purchase, and enroll in online courses using integrated Razorpay payment gateway. Instructors can register, create, and manage courses, including publishing content. Role-based access control and secure authentication/authorization are implemented using JWT. The platform features a dynamic dashboard for both learners and instructors, real-time form validation, and seamless navigation for an optimized user experience.",
    image: githubdetLogo,
    tags: [
      "MongoDB",
      "Express JS",
      "React JS",
      "NodeJS",
      "Redux Toolkit",
      "REST API",
    ],
    github: "https://github.com/VirajMakhija1213/Study-Notion-App-Full-Stack",
    webapp: "https://study-notion-viraj.vercel.app/",
  },
  {
    id: 1,
    title: "Mini E-Commerce Website",
    description:
      "A React-based mini e-commerce web app where users can browse and purchase products. Product data is dynamically fetched from a public API. Implemented global state management with Redux Toolkit for seamless cart operations and real-time updates. Responsive layout built using modern React best practices.",
    image: csprepLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Redux Toolkit"],
    github:
      "https://github.com/VirajMakhija1213/Shopping-App-Using-React-Redux",
    webapp: "https://viraj1213-ecomzy-shopping-react-redux.netlify.app/",
  },
  {
    id: 2,
    title: "Country Information Tracker App",
    description:
      "A responsive React application that retrieves and displays real-time country data including flags, population, languages, and region using a public REST API. The project demonstrates API integration, conditional rendering, and user-friendly UI components.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/VirajMakhija1213/React-Country-Tracker",
    webapp: "https://viraj1213countrytracker.netlify.app/",
  },
  {
    id: 3,
    title: "Top Courses Display",
    description:
      "A front-end project that displays a curated list of top courses using dummy JSON data. Built with React.js to demonstrate dynamic rendering, state management, filtering, and component-based architecture. Designed with a focus on responsiveness and user experience.",
    image: taskremLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://github.com/VirajMakhija1213/Top-Course-Display",
    webapp: "https://viraj-top-courses.netlify.app/",
  },
  {
    id: 4,
    title: "GIF Generator Web App",
    description:
      "A fun web app built with React.js that fetches random and keyword-based GIFs using the Giphy API. Designed to experiment with external APIs, user input handling, and asynchronous data fetching with loading states. Tailwind CSS used for fast and responsive UI styling.",
    image: giphy,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://github.com/VirajMakhija1213/GIF-Generator-App-React",
    webapp: "https://viraj1213-random-gif-generator.netlify.app/",
  },
  {
    id: 5,
    title: "Simon Says Game",
    description:
      "A classic memory-based game built using vanilla JavaScript, HTML, and CSS. Players repeat color sequences that get progressively harder. Demonstrates logic handling, sound integration, and DOM manipulation for game states.",
    image: webTemp,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/VirajMakhija1213/Simon-Says-Game",
    webapp: "https://virajmakhija1213.github.io/Simon-Says-Game/",
  },
  {
    id: 6,
    title: "Tic Tac Toe",
    description:
      "A browser-based 2-player Tic Tac Toe game built with HTML, CSS, and JavaScript. Handles win/draw conditions, turn tracking, and game reset logic. Great for demonstrating game logic, conditional rendering, and interactivity without any frameworks.",
    image: cmLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/VirajMakhija1213/Tic-Tac-Toe-Game",
    webapp: "https://virajmakhija1213.github.io/Tic-Tac-Toe-Game/",
  },
];
