import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Samyak Jain",
  initials: "SJ",
  url: "https://jainsamyak.vercel.app",
  location: "Bangalore, IN",
  locationLink: "https://www.google.com/maps/place/bangalore",
  description:
    "Full Stack Developer specializing in web and mobile development. Passionate about creating innovative solutions with modern technologies.",
  summary:
    "Innovative Full Stack Developer with experience working in diverse projects. Former Web Development Head of the ISA VIT, Pune Student Section, where I cultivated leadership and technical skills. Currently working at Rugas Technologies, specializing in front-end and back-end development with expertise in integrating Generative AI LLM API's. Passionate about web development, consistently delivering high-quality projects, and dedicated to continuous skill enhancement.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "React Native",
    "Typescript",
    "MongoDB",
    "Tailwind CSS",
    "Generative AI",
    "Express.js",
    "Node.js",
    "FeathersJS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jainsamyak2002.sj@gmail.com",
    tel: "+918828913614",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sammy970",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/samyak-jain-3a6639172/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Rugas Technologies",
      href: "https://rugastech.com/",
      badges: [],
      location: "Bangalore, IN",
      title: "Full Stack Developer",
      logoUrl: "/rugas.png", // You'll need to add this logo to your assets
      start: "June 2024",
      end: "Present",
      description:
        "Analyzed and contributed to a complex mobile application codebase written in React Native for the ShiftPartner Project - BankShift. Currently working on a framework specifically made for Server Driven UI in React Native. Developed and enhanced features across both frontend and backend domains, incorporating Generative AI LLM capabilities. Implemented AWS SES for email services, and utilized AWS Lambda functions and S3 for data storage and processing in the iRXSafe Project. Experimented with and implemented Progressive Web Apps (PWA) to convert websites into mobile applications for both iOS and Android.",
    },
    {
      company: "Rugas Technologies",
      href: "https://rugastech.com/",
      badges: [],
      location: "Bangalore, IN",
      title: "Full Stack Developer Intern",
      logoUrl: "/rugas.png", // You'll need to add this logo to your assets
      start: "November 2023",
      end: "May 2024",
      description:
        "Assisted in the development of new features and bug resolution in the ShiftPartner Project - BankShift. Collaborated on the iRXSafe Project, employing Next.js and FeathersJS, and integrating Generative AI features. Supported the development of specific features in the KARMA TICKETS project.",
    },
  ],
  education: [
    {
      school: "Vishwakarma Institute of Technology",
      href: "https://www.vit.edu/",
      degree: "BTech in Instrumentation and Control (CGPA: 9.30)",
      logoUrl: "/vit.png", // You'll need to add this logo to your assets
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "StackIt CLI",
      href: "https://www.npmjs.com/package/stackit-cli",
      dates: "Mar 2025 - Mar 2025",
      active: true,
      description:
        "A powerful CLI tool that scaffolds frontend projects with a single command. Provides an interactive CLI interface that guides developers through setting up complete projects with all necessary dependencies and configuration in minutes instead of hours.",
      technologies: [
        "Node.js",
        "TypeScript",
        "React",
        "Next.js",
        "Vite",
        "Inquirer",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rohitvs252/ultimate-cli",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/stackit-cli",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/stackit.png",
      video: "",
      features: [
        "Interactive CLI with intuitive prompts for project configuration",
        "Support for React and Next.js project templates",
        "UI framework integration (Tailwind CSS, Material UI, Chakra UI, etc.)",
        "State management setup (Redux, Zustand, Jotai, etc.)",
        "Auth integration with multiple providers",
        "Database setup options",
        "Payment gateway integration",
        "Animation libraries configuration",
        "Documentation generator setup",
        "PWA support enablement",
        "Testing framework installation and configuration",
      ],
      installation:
        "npm install -g stackit-cli\n# or use directly\nnpx stackit-cli init",
    },
    {
      title: "Link-Kar",
      href: "https://linkkar.vercel.app/",
      dates: "Jul 2023 - Jul 2023",
      active: false,
      description:
        "Simplified link sharing with Smart Links directing users to apps, enhanced user engagement with built-in link analytics. Integrated Google signup for security and utilized cloud-based MongoDB for efficient data management.",
      technologies: [
        "React.js",
        "Chakra UI",
        "Express.js",
        "MongoDB",
        "Node.js",
        "API",
      ],
      links: [
        {
          type: "Website",
          href: "https://linkkar.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sammy970/linkkar-Frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/linkkar.png",
      video: "",
    },
    {
      title: "LinkedIn Postmaker",
      href: "https://postit.is-an.app/",
      dates: "Jun 2023 - Oct 2023",
      active: false,
      description:
        "Utilized OpenAI's GPT-3.5-turbo-16k model for post creation, provided predefined categories like Certifications, Publications, and Internships. Included a user-friendly interface with a 'Copy' button for easy content transfer and securely hosted, enhancing LinkedIn engagement.",
      technologies: ["React.js", "Tailwind CSS", "Express.js", "OpenAI API"],
      links: [
        {
          type: "Website",
          href: "https://postit.is-an.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sammy970/linkedin-post-maker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/linkedin-postmaker.png",
      video: "",
    },
  ],
  certifications: [
    {
      title: "Meta Front-End Developer Professional Certificate",
      logoUrl: "/coursera.png",
      provider: "Meta",
      href: "https://www.coursera.org/account/accomplishments/specialization/certificate/WQVBGVFF9JE6",
      date: "May 2023",
      issuer: "Coursera",
      image: "/coursera.png",
    },
    {
      title: "Meta React Native",
      logoUrl: "/coursera.png",
      provider: "Meta",
      href: "https://coursera.org/share/93d8aa3744661b12b377d33fe0aade47",
      date: "May 2023",
      issuer: "Coursera",
      image: "/coursera.png",
    },
    {
      title: "React Basics",
      logoUrl: "/coursera.png",
      provider: "Meta",
      href: "https://www.coursera.org/account/accomplishments/certificate/ZC854WR8C9DK",
      date: "Feb 2023",
      issuer: "Coursera",
      image: "/coursera.png",
    },
    {
      title: "Advanced React",
      logoUrl: "/coursera.png",
      provider: "Meta",
      href: "https://www.coursera.org/account/accomplishments/certificate/Y82LJARS9ZV7",
      date: "Mar 2023",
      issuer: "Coursera",
      image: "/coursera.png",
    },
  ],
  hackathons: [
    {
      title: "Kavach 2023",
      dates: "December 3rd - 5th, 2023",
      location: "Delhi, IN",
      description:
        "Design and develop a technological solution for detecting usage of LoRa (low-power wide-area network modulation derived from chirp spread spectrum) in a given area",
      image: "/kavach.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Kavach Website",
          href: "https://kavach.mic.gov.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
