import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sai Krishnaa",
  initials: "B",
  url: "https://saikrishnaa.vercel.app",
  location: "Chennai, Tamil Nadu, India",
  locationLink: "https://www.google.com/maps/place/Chennai",
  description:
    "Full-Stack Developer and AI Enthusiast with expertise in No-Code and Low-Code development, dedicated to building scalable solutions and leveraging emerging technologies to drive innovation and efficiency.",
  summary:
    "Currently pursuing a degree in Software Engineering, a Full-Stack Developer specializing in AI-powered solutions, scalable web applications, and No-Code/Low-Code development. With experience at top tech firms, expertise in AI-driven projects, and certifications in cloud computing and machine learning, committed to leveraging technology to enhance accessibility and efficiency.",
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Java",
    "Python",
    "Flask",
    "Django",
    "PHP",
    "Postgres",
    "MongoDB",
    "Firebase",
    "Supabase",
    "Docker",
    "Kubernetes",
    "WordPress",
    "Shopify",
    "Webflow",
    "Bubble.io",
    "Figma",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "saikrishnaab12b319@gmail.com",
    tel: "+919444397390",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SAIKRISHNA2005",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://linkedin.com/in/saikrishnaa0304",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1xGpjgElzLAQlALEHZ_WvmPwNl4fD3T15/view?usp=sharing",
        icon: Icons.resume,

        navbar: true,
      },
      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/Sai-Krishnaa_0304/",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:saikrishnaab12b319@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "StudentSpace",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Full Stack Developer",
      logoUrl: "/studentspace.png",
      start: "October 2024",
      end: "March 2025",
      description:
        "Architected a high-performance, scalable CMS platform with a security-first approach. Designed and implemented RESTful APIs to streamline content management workflows. Containerized microservices using Docker and orchestrated deployments on a production-ready Kubernetes cluster for enhanced scalability and resilience. Developed dynamic, component-driven front-end interfaces with React and TypeScript, optimizing performance and user experience.",
    },
    {
      company: "DSC Solutions",
      badges: [],
      href: "https://dscsolutions.webflow.io/",
      location: "Remote",
      title: "Wordpress & Shopify Developer Intern",
      logoUrl: "/dscsolutions.png",
      start: "June 2024",
      end: "August 2024",
      description:
        "Developed and maintained full-stack web applications, creating scalable and responsive user interfaces with React and TypeScript. Designed and implemented RESTful APIs using Node.js and Express, ensuring seamless integration between frontend and backend services. Optimized PostgreSQL queries to enhance performance and scalability. Worked closely with cross-functional teams to improve application features and user experience.",
    },
    {
      company: "RAMSAY",
      badges: [],
      href: "https://ramsay.webflow.io/",
      location: "Remote",
      title: "Wordpress Developer Intern",
      logoUrl: "/ramsay.png",
      start: "December 2023",
      end: "May 2024",
      description:
        "Developed and maintained full-stack web applications, creating scalable and responsive user interfaces with React and TypeScript. Designed and implemented RESTful APIs using Node.js and Express, ensuring seamless integration between frontend and backend services. Optimized PostgreSQL queries to enhance performance and scalability. Worked closely with cross-functional teams to improve application features and user experience.",
    },

  ],
  education: [
    {
      school: "Vellore Institue of Technology, Chennai",
      href: "https://chennai.vit.ac.in/",
      degree: "Integrated M.Tech. Software Engineering",
      logoUrl: "/vitlogo.png",
      start: "2022",
      end: "2027",
    },
    {
      school: "Sethu Bhaskara",
      href: "https://sethubhaskara.co.in/",
      degree: "12th Grade",
      logoUrl: "/schllogo.png",
      start: "2021",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "CapGen",
      href: "https://github.com/SAIKRISHNA2005/caption-generator",
      active: true,
      description: "An AI-powered tool that generates captions for images using deep learning, ideal for accessibility and automated content creation.",
      technologies: ["Next.js", "JavaScript", "TailwindCSS", "TensorFlow","Hugging Face Transformers", "OpenAI API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/SAIKRISHNA2005/caption-generator",
          icon: <Icons.github className='size-3' />
        }
      ],
      image: "/caption-generator.png"
    },
    {
      title: "CareForYou",
      href: "https://github.com/SAIKRISHNA2005/health-care",
      active: true,
      description: "A healthcare management system built on WordPress, enabling hospitals and clinics to manage patient records, schedule appointments, and facilitate secure doctor-patient communication.",
      technologies: [ "WordPress", "PHP", "WooCommerce", "MySQL", "Elementor", "REST API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/SAIKRISHNA2005/health-care",
          icon: <Icons.github className='size-3' />
        }
      ],
      image: "/healthcare.png"
    },
    {
      title: "Banking Application",
      href: "https://github.com/SAIKRISHNA2005/banking",
      active: true,
      description: "A secure and scalable platform built using Shopify for managing online banking services, including secure fund transfers, real-time transaction tracking, and secured account management.",
      technologies: ["Shopify", "GraphQL", "Node.js", "PostgreSQL", "Stripe API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/SAIKRISHNA2005/banking",
          icon: <Icons.github className='size-3' />
        }
      ],
      image: "/banking.png"
    },
    {
      title: "Ride Sharing Application",
      href: "https://github.com/SAIKRISHNA2005/ride-sharing",
      active: true,
      description: "A ride-hailing platform for booking rides, real-time driver tracking, secure payments, and dynamic fare calculation.",
      technologies: ["React Native", "PostgreSQL", "Expo", "Stripe", "Firebase", "Google Maps API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/SAIKRISHNA2005/ride-sharing",
          icon: <Icons.github className='size-3' />
        }
      ],
      image: "/ride-sharing.png"
    }
  ],

} as const;
