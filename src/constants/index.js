import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  jquery,
  php,
  laravel,
  livewire,
  git,
  figma,
  vuejs,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  react,
  trust,
  hblab,
  vegas,
  overflow,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Front End Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Livewire",
    icon: livewire,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "vuejs",
    icon: vuejs,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    // company_name: "Starbucks",
    // icon: starbucks,
    company_name: "Nulab ",
    icon: trust,
    iconBg: "#383E56",
    date: "March 2016 - Auguest 2018",
    points: [
      "Developed and maintained websites using HTML, CSS, and JavaScript",
      "Collaborated with designers to create visually appealing and user friendly websites",
      "Implemented responsive design techniques to optimize websites for mobile devices",
      "Collaborated with UI/UX designers to create user-friendly decentralized applications",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "ZIZO International ",
    icon: hblab,
    iconBg: "#E6DEDD",
    date: "September 2018 - July 2020",
    points: [
      "Developed and implemented graph database solutions to optimize data retrieval and analysis processes",
      "Designed and maintained graph schemas for efficient data modeling and querying",
      "Collaborated with cross-functional teams to identify business requirements and translate them into graph database solutions",
      "Conducted performance tuning and optimization of graph database queries for enhanced efficiency",
      "Created visualizations and reports to present insights derived from graph analysis to stakeholders",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "WeCode Inc",
    icon: vegas,
    iconBg: "#383E56",
    date: "September 2020 - Auguest 2023",
    points: [
      "Developed responsive and user-friendly web applications using HTML, CSS and JavaScript frameworks such as React and Angular",
      "Utilized RESTful APIs to integrate the front-end and back-end systems enabling seamless data exchange and application functionality",
      "Collaborated with a cross-functional team to design and develop robust back-end systems using Node.js, Python, and Java",
      "Managed the design and implementation of graph database systems for data integration and analysis",
      "Provided training and guidance to team members on graph database concepts and best practices",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kenji proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kenji does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kenji optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DNI (Daily Need Items)",
    description:
      "DNI is an online shopping store for selling and buying products. By just having a smartphone, it can easily accomplish all HR procedures, which is impressive. With this application, it’s easyto order your favorite products even though when you are on the go. It also includes delivery system and invoice system.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "liviwire",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    project_link: "https://dnistore.com/",
  },
  {
    name: "SG Myanmar Info",
    description:
      "Web-based platform that allows users to search, book, and manage Lands, Jobs from various providers. This website is an Information Sharing website. All front-end data are retrieved from the database using API.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Livewire",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    project_link: "https://sgmyanmarinfo.com/",
  },
  {
    name: "Invoce Ecommerce",
    description:
      "Developed an invoice system that allows businesses to easily create, manage, and send invoices to their clients. The system is built using Laravel Livewire and MySQL, and includes a user friendly interface that allows businesses to easily create and customize invoices, track payments, and generate reports.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Livewire",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    project_link: "https://mmeasyinvoice.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
