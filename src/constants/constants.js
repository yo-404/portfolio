import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jobit,
  tripguide,
  github,
  cognizant,
  wordpress,
  go,
  bootstrap,
  aws,
  argocd,
  ansible,
  k8s,
  terraform,
  jenkins,
  python,
  cpp,
  mysql,
  bash,
  ubuntu,
  gitactions,
  autocicd,
  myfitness,
  beetune,
  cyber,
  hospital,
  packers,
  valeries,
  musicrnn,
  tunelives,
  cinevault,
  cicd,
  bookingprx,
  back,
  devops,
  opensource,
  webdev,
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: webdev,
    },
    {
      title: "Backend Developer",
      icon: back,
    },
    {
      title: "Cloud & DevOps Enthusiast",
      icon: devops,
    },

    {
      title: "OpenSource Contributor",
      icon: opensource,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "wordpress",
      icon: wordpress,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      name: "docker",
      icon: docker,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "terraform",
      icon: terraform,
    },
    {
      name: "go",
      icon: go,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "argocd",
      icon: argocd,
    },
    {
      name: "ansible",
      icon: ansible,
    },
    {
      name: "k8s",
      icon: k8s,
    },
    {
      name: "jenkins",
      icon: jenkins,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "bash",
      icon: bash,
    },
    {
      name: "ubuntu",
      icon: ubuntu,
    },
    {
      name: "gitactions",
      icon: gitactions,
    },


  ];
  
  const experiences = [
    {
        title: "Open Source Contributions",
        company_name: "Github",
        icon: github,
        iconBg: "#383E56",
        date: "May 2023 - Present",
        points: [
          "Working on new technologies and contributed to various projects.",
          "Collaborating with other developers to fix bugs / enhancing exisiting code.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },
      {
        title: "Web development",
        company_name: "Freelancing",
        icon: reactjs,
        iconBg: "#383E56",
        date: "May 2022 - Oct 2022",
        points: [
          "Developing and maintaining web applications React JS , Node. ",
          "Collaborating with other developers to fix bugs / enhancing exisiting code.",
          "Implementing SEO "
        ],
      },  
    {
      title: "PEGA Jr. - Programmer Analyst",
      company_name: "Cognizant Technology Solutions",
      icon: cognizant,
      iconBg: "#383E56",
      date: "Feb 2021 - May 2021",
      points: [
        "Maintaining existing workflows and creating new workflows as per business needs",
        "Automating existing tasks using PEGA BPM",
        "Implementing design changes and ensuring cross-browser compatibility.",
        "Participating in workflow reviews and recieving constructive feedback from senior developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelancing",
      icon: wordpress,
      iconBg: "#383E56",
      date: "Jan 2019 - Jan 2021",
      points: [
        "Developing and maintaining web applications using Wordpress ,Javascript other related technologies.",
        "Collaborating with team members to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Implementing Search engine optimization to rank in top 5 results on various search Engines",
      ],
    },
    
  ];
  
//   const testimonials = [
//     {
//       testimonial:
//         "Yogesh has always been the tech guy in our groups who comes up with solutions to our problems",
//       name: "Nirankar",
//       designation: "Senior Dev",
//       company: "Precient Technologies",
//       image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
  
//   ];
  
  const projects = [
    {
      name: "Booking_PRX (In progress)",
      description:
        "Booking pRX is an innovative and user-friendly online platform designed to streamline the process of booking turf facilities for sports, events, and recreational activities. This project aims to provide a comprehensive and efficient solution for individuals, sports enthusiasts, and event organizers who require easy access to turf facilities. ",
      tags: [
        {
          name: "Go",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: bookingprx,
      source_code_link: "https://github.com/yo-404/Booking_pRX",
    },
    {
      name: "Beetune",
      description:
        "This music player is an open-source, cross-platform desktop music client which allows you to play music from sources like Youtube, Spotify or local files seamlessly in just a simple click.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "axios",
          color: "pink-text-gradient",
        },
        {
            name: "css",
            color: "yellow-text-gradient",
        },
      ],
      image: beetune,
      source_code_link: "https://github.com/yo-404/beeTune",
    },
    {
        name: "CINEVAULT",
        description:
          "RESTful API based application to that allows you to interact with your MongoDB database using HTTP methods and store your movies wishlist",
        tags: [
          {
            name: "Go",
            color: "blue-text-gradient",
          },
          {
            name: "Gorrila MUX",
            color: "green-text-gradient",
          },
          {
            name: "MONGO Atlas",
            color: "pink-text-gradient",
          },
          {
              name: "REST API",
              color: "yellow-text-gradient",
          },
        ],
        image: cinevault,
        source_code_link: "https://github.com/yo-404/GolangBasics101/tree/main/25mongoapi",
      },
      {
        name: "TUNELIVES.COM",
        description:
          "Blog website with well managed SEO consisting of more than 35k impressions",
        tags: [
          {
            name: "WORDPRESS",
            color: "blue-text-gradient",
          },
          {
            name: "HOSTINGER",
            color: "green-text-gradient",
          },
       
        ],
        image: tunelives,
        source_code_link: "https://tunelives.com/",
      },
      {
        name: "ALGORITHMIC MUSIC GENERATION USING RNN",
        description:
          "an RNN based music generation algorithm which generates background music from the provided MIDI tones",
        tags: [
          {
            name: "Python",
            color: "blue-text-gradient",
          },
          {
            name: "Keras",
            color: "green-text-gradient",
          },
          {
            name: "music21 Library",
            color: "pink-text-gradient",
          },
          {
              name: "Tensorflow",
              color: "yellow-text-gradient",
          },
        ],
        image: musicrnn,
        source_code_link: "https://github.com/yo-404/Music_composition_using_RNN",
      },
      {
        name: "CICD PIPELINE FOR JAVA APPLICATION TO DEPLOY ON K8S CLUSTER USING JENKINS",
        description:
          "integration of sonarqube and dockerization of image to registry",
         
        tags: [
          {
            name: "Kubernetes",
            color: "blue-text-gradient",
          },
          {
            name: "Docker",
            color: "green-text-gradient",
          },
          {
            name: "Datree",
            color: "pink-text-gradient",
          },
          {
              name: "Sonarqube",
              color: "yellow-text-gradient",
          },
        ],
        image: autocicd,
        source_code_link: "https://github.com/YO-404/JAVA-MAVEN-K8S",
      },
      {
        name: "AUTOMATED CI/CD PIPELINE FOR NODEJS APPLICATION",
        description:
          " A real time CI/CD Pipeline on Jenkins with Github Integration along with server orchestration using K8s ,Used Sonarqube for continuous inspection of code quality and vulnerability , Used ARGO CD for deployment of YAML manifest with autohealing",
                 
        tags: [
          {
            name: "Jenkins",
            color: "blue-text-gradient",
          },
          {
            name: "ArgoCD",
            color: "green-text-gradient",
          },
          {
            name: "Kubernetes",
            color: "pink-text-gradient",
          },
          {
              name: "AWS EC2",
              color: "yellow-text-gradient",
          },
        ],
        image: cicd,
        source_code_link: "https://github.com/yo-404/node-todo-app-cicd.git",
      },
      {
        name: "VALERIE'S DAYCARE AND PRESCHOOL",
        description:
          " A well managed SEO site for preschool and Daycare created for client .",
            tags: [
          {
            name: "PHP",
            color: "blue-text-gradient",
          },
          {
            name: "JAVASCRIPT",
            color: "green-text-gradient",
          },
          {
            name: "HTML",
            color: "pink-text-gradient",
          },
          {
              name: "MYSQL",
              color: "yellow-text-gradient",
          },
        ],
        image: valeries,
        source_code_link: "https://valeriesdaycare.in/",
      }, 
      {
        name: "PACKERS AND MOVERS",
        description:
          " A website for packers and movers services with Added paytm payments gateway for payment transactions .Seperate user and admin CRM panel",
            tags: [
          {
            name: "PHP",
            color: "blue-text-gradient",
          },
          {
            name: "JAVASCRIPT",
            color: "green-text-gradient",
          },
          {
            name: "Bootstrap",
            color: "pink-text-gradient",
          },
          {
              name: "HTML",
              color: "yellow-text-gradient",
          },
        ],
        image: packers,
        source_code_link: "https://github.com/yo-404/Packers_movers_ug_proj.git",
      }, 
      {
        name: "HOSPITAL MANAGEMENT SYSTEM",
        description:
          " Web Based Application for OPD and appointment solution",
            tags: [
          {
            name: "PHP",
            color: "blue-text-gradient",
          },
          {
            name: "JAVASCRIPT",
            color: "green-text-gradient",
          },
          {
            name: "MYSQL",
            color: "pink-text-gradient",
          },
          {
              name: "HTML",
              color: "yellow-text-gradient",
          },
        ],
        image: hospital,
        source_code_link: "https://github.com/yo-404/Hospital_mgmt_ug_proj.git",
      }, 
      {
        name: "CyberCafe Management System ",
        description:
          " an VB based application to remotely control and manage computers over local network • Features like bill generation and usage amount calculation along with confuguration of multiple computers ",
            tags: [
          {
            name: "VB.Net",
            color: "blue-text-gradient",
          },
          {
            name: "MS Access",
            color: "green-text-gradient",
          },
        
        ],
        image: cyber,
        source_code_link: "https://github.com/yo-404/Cyber_cafe_mgmt_vb.git",
      }, 
      {
        name: "MYFITNESS - UI/UX",
        description:
          " A health app demo ui created on figma ",
            tags: [
          {
            name: "Figma",
            color: "blue-text-gradient",
          },
                
        ],
        image: myfitness,
        source_code_link: "https://www.figma.com/file/150hF7vpjh8HjkqzmHAs8i/Figma-health?type=design&node-id=0-1&mode=design",
      }, 
  
  ];
  
  export { services, technologies, experiences, projects };