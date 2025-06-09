/**
 * Contains metadata that is referenced by App.js and its child components for rendering dynamic components
 */

import design from "./images/icon-design.svg";
import webdev from "./images/icon-dev.svg";
import mobapp from "./images/icon-app.svg";

import seashell from "./images/seashell.jpg";
import explore from "./images/explore.jpg";
import pocket from "./images/pocket.jpg";
import tryston from "./images/tryston.jpg";
import rik from "./images/rik-icon.jpg";
import cpp from "./images/c++.jpg";
import c from "./images/c.jpg";
import java from "./images/java.jpg";
import metallicity from "./images/metallicity.jpg";
import python from "./images/python.jpg";
import stk from "./images/stk.jpg";
import schrute from "./images/schrute.jpg";
import betting from "./images/betting-bot.jpg";

/**
 * Array of Social objects.
 *
 * Interface:
 *  - link (anchor tag hyperlink)
 *  - logo (name of the ion-icon logo)
 */
const SOCIALS = [
  {
    link: "https://www.linkedin.com/in/rikghosh/",
    logo: "linkedin",
  },
  {
    link: "https://gitlab.com/RikGhosh487",
    logo: "gitlab",
  },
  {
    link: "https://github.com/RikGhosh487",
    logo: "github",
  },
];

/**
 * Array of Interest objects
 *
 * Interface:
 *  - img (name of image for interest card)
 *  - alt (alternative text for image)
 *  - title (interest title)
 *  - text (description for interest)
 */
const INTERESTS = [
  {
    img: design,
    alt: "A design icon showing a pencil, a 45-degree set square, and a curled paper. This icon is used to convey interest in software and systems engineering and design",
    title: "Software and Systems Design",
    text: "Designing functional and user-friendly software and systems tools with emphasis on HCI",
  },
  {
    img: webdev,
    alt: "A webpage icon showing a web page displaying curly braces and a forwards slash. This icon is being used to convey interest in web development",
    title: "Web Development",
    text: "Designing high-quality web pages with both vanilla and framework based design",
  },
  {
    img: mobapp,
    alt: "A mobile phone outline icon. This icon is being used to convey interest in mobile app design and development",
    title: "Mobile Apps",
    text: "Professional development of iOS and Android compatible applications",
  },
];

/**
 * Array of Education objects
 *
 * Interface:
 *  - title (degree title)
 *  - uni (university)
 *  - time (duration of degree)
 *  - done (diploma received)
 *  - text (degree description)
 *
 * Note:
 * - New items must be entered sorted by time
 */
const EDUCATION = [
  {
    title: "M.S. in Computer Science",
    uni: "The University of Texas at Austin",
    time: "August 2023 — May 2025",
    done: true,
    texts: [
      "Completed a comprehensive Master's program focused on application and systems-level programming.",
      "During this time, I collaborated with the Human-Computer Interaction (HCI) research group at UT Austin and led several advanced projects, including a voice-based coding assistant. I also helped develop a custom thread pool in C++ and a user-level ELF loader and pager, both of which were implemented as part of my coursework.",
      "The program has provided me with a strong foundation in advanced software engineering principles, systems programming, and data analysis.",
    ],
  },
  {
    title: "B.S. in Computer Science with High Honors",
    uni: "The University of Texas at Austin",
    time: "August 2020 — May 2023 (Received in May 2025)",
    done: true,
    texts: [
      "Earned a Bachelor's degree in Computer Science with High Honors in just three years, balancing academic rigor with efficiency.",
      "The curriculum covered a wide range of technical areas — from embedded systems and systems programming to cloud infrastructure (AWS), web development with React, containerization using Docker, and machine learning using PyTorch.",
      "This degree laid a strong foundation for my continued growth in software development and system design, equipping me with the skills to tackle complex challenges in the field.",
    ],
  },
  {
    title: "B.S. in Mathematics with High Honors",
    uni: "The University of Texas at Austin",
    time: "August 2021 — May 2024",
    done: true,
    texts: [
      "Completed a Bachelor's degree in Mathematics with High Honors and a focus on statistics and applied mathematics, complemented by rigorous coursework in abstract and proof-based subjects such as algebraic structures, complex analysis, and differential equations.",
      "This program sharpened my analytical thinking and problem-solving skills, providing a strong theoretical backbone for my work in computer science.",
    ],
  },
];

/**
 * Array of Experience objects
 *
 * Interface:
 *  - title (position title)
 *  - emp (employer)
 *  - time (duration)
 *  - texts (array of description texts)
 */
const EXPERIENCE = [
  {
    title: "Research Assistant and Research Mentor",
    emp: "Freshman Research Initiative @ CNS",
    time: "January 2021 — Present",
    texts: [
      "I lead a team of 3 peer research mentors in assisting over 40 students each semester in the research program to design, refine, and finalize their research.",
      "I designed a machine learning model to process photometric data from astrophysics databases into spectroscopic measurements.",
    ],
  },
];

/**
 * Array of Publication objects
 *
 * Interface:
 *  - title (publication title)
 *  - href (link to article)
 *  - article (name of journal article)
 *  - time (time of publication)
 *  - texts (array of description texts)
 */
const PUBLICATIONS = [
  {
    title:
      "Approximating Stellar Metallicity Using Photometric Machine Learning",
    href: "https://iopscience.iop.org/article/10.3847/2515-5172/ac5f4e",
    article: "Research Notes of AAS, Volume 6, Number 3, Article 57",
    time: "March 2022",
    texts: [
      "I was the primary researcher for finding alternatives to spectroscopic data measurements. We used a random forest regressor that takes SDSS photometric color indices as input to produce stellar metallicity as output. The model achieved an RMSE similar to observations that can be made by studying low resolution spectra. This model subverts the problem of limited spectra, allowing metallicity measurements to be applied to several orders of magnitude more stars than previously possible.",
    ],
  },
];

/**
 * Array of Language objects
 *
 * Interface:
 *  - name (language name)
 *  - val (progress bar value)
 *  - level (level of proficiency)
 */
const LANGUAGES = [
  {
    name: "JavaScript",
    val: 80,
    level: "Advanced",
  },
  {
    name: "HTML",
    val: 90,
    level: "Advanced",
  },
  {
    name: "CSS",
    val: 80,
    level: "Advanced",
  },
  {
    name: "Java",
    val: 80,
    level: "Advanced",
  },
  {
    name: "Python",
    val: 90,
    level: "Advanced",
  },
  {
    name: "C++",
    val: 60,
    level: "Proficient",
  },
  {
    name: "C",
    val: 70,
    level: "Proficient",
  },
  {
    name: "TypeScript",
    val: 65,
    level: "Proficient",
  },
];

/**
 * Array of Skill objects
 *
 * Interface:
 *  - name (name of skill)
 *  - texts [OPTIONAL] (array of description texts)
 */
const SKILLS = [
  {
    name: "Software Development",
    texts: [
      "Experience with Software Development methodologies, tools, and frameworks: AGILE, CI/CD, React, Git, etc",
    ],
  },
  {
    name: "Data Migration, Deployment, and APIs",
    texts: [
      "Developing RESTful APIs, working with web frameworks, processing and coalescing large JSONs",
    ],
  },
  {
    name: "Database Management",
    texts: [
      "Experience with relational and non-relational databases and querying: SQL, PostgreSQL, MongoDB, SQLite",
    ],
  },
  {
    name: "Operating Systems",
    texts: ["Experience with Linux and Windows OS along with shell scripting"],
  },
  {
    name: "Networking",
    texts: ["Experience with Network stack, custom NFS and TCP implemetations"],
  },
  {
    name: "Communication",
  },
  {
    name: "Time Management",
  },
  {
    name: "Teamwork and Collaboration",
  },
  {
    name: "Creativity",
  },
  {
    name: "Problem Solving and Analytical Thinking",
  },
  {
    name: "Adaptability and Resourcefulness",
  },
  {
    name: "Leadership and Conflict Management",
  },
];

/**
 * Array of Project objects
 *
 * Interface:
 *  - name (name of the project)
 *  - desc (description of the project)
 *  - type (project type)
 *  - small_info (small info for recents section)
 *  - info (array of info objects)
 *  - date (project start date)
 *  - img (image source for project)
 *  - alt (alternative text for image)
 *  - team [OPTIONAL] (array of Member objects)
 *  - links [OPTIONAL] (array of links to important pages)
 *
 * Member Interface:
 *  - name (name of team member)
 *  - link [OPTIONAL] (link to their page)
 *
 * Info Interface:
 *  - title (section title)
 *  - text (section text)
 */
const PROJECTS = [
  {
    name: "SeaShell",
    desc: "Keyboard Drivers and Shell for Custom OS Implementation",
    type: "Systems",
    small_info:
      "A shell written in C, implemented on top of a custom libc for a 32-bit custom Linux-like OS virtualized by QEMU. I worked on implementing the PS/2 Keyboard drivers and the Ext2 File system.",
    info: [
      {
        title: "Summary",
        text: "This project was a culmination of the semester-long assignments where I worked on implementing a 32-bit Linux-like Operating System from scratch using C++. Prior work on this project included implementing an Ext2 file system and virtual memory for running user-level programs. For this project, we had to implement an application that runs on top of the custom OS we implemented. This included adding several system calls and expanding the libc library. We decided to implement a shell that performs many BASH-like utility tasks. The shell also included a built-in text editor to support editing and making files.",
      },
      {
        title: "Contributions",
        contributions: [
          "Writing keyboard driver and setting up hardware interrupts for PS/2 Keyboard in QEMU",
          "Adding system calls and functions to libc and implementing system side-support for them",
          "Adding support for writes in Ext2 file system",
          "Writing utility functions for C-Shell",
        ],
      },
      {
        title: "What I Learned",
        text: "This was a very informative experience for me and my fellow teammates. I learned how to write device drivers and how PICs work. I also learned a lot about system design and experimental computer science. This was also the first time I worked with a large group and understood the importance of proper communication and the need for continuous integration with git.",
      },
    ],
    date: "December 2021",
    img: seashell,
    alt: "A pink clam shell against a blue background. This is the name of the project and is supposed to be a play on the word C shell",
    team: [
      {
        name: "Rodrigo Brandao",
        link: "https://github.com/Reego",
      },
      {
        name: "Thuy Nguyen",
        link: "https://github.com/nhaithuy",
      },
      {
        name: "Adhan Razzaque",
        link: "https://github.com/adhan-razzaque",
      },
      {
        name: "Himanshu Reddy",
        link: "https://github.com/himanshur-dev",
      },
      {
        name: "Nathaniel Nemenzo",
        link: "https://github.com/Nathaniel-Nemenzo",
      },
      {
        name: "Rithik Batchu",
        link: "https://www.linkedin.com/in/rithik-batchu-4b5217206/",
      },
      {
        name: "Shreyas Satewar",
        link: "https://github.com/ShreyasSatewar",
      },
    ],
  },
  {
    name: "Explore & Give More",
    desc: "City Guide with RESTful API",
    type: "Web Development",
    small_info:
      "A city guide website with its own RESTful API implemented using React TypeScript (frontend) and Flask Python (backend). I was the project leader and the phase leader for the first phase.",
    info: [
      {
        title: "Summary",
        text: "This project was a culmination of a semester-long assignment, where our team had to design a RESTful API comprised of 3 or more interconnected models, and an informative website that queried our API to render the different views. For this project, I was the project leader and decided to go with a city guide which connected cities to attractions and charities. This project involved both frontend and backend knowledge using several tools and frameworks. The website had over 5000 model instances and included rich media in the form of maps, images, reviews. Our API supports sortability and searchability for the instances.",
      },
      {
        title: "Contributions",
        contributions: [
          "Project Leader and Phase I Leader",
          "Designed Attractions and Reviews templates for frontend",
          "Designed API endpoints, sorting and filtering functionality for backend",
          "Containerized the project",
        ],
      },
      {
        title: "What I Learned",
        text: "There was a lot to learn from this project. This was my first exposure to using React TypeScript and Python Flask. TypeScript was used for the front end, and Flask was used for the API. I also learned about Docker and containerization, Google Cloud Services and Amazon RDS for storing images and text data, using PostgreSQL, and AWS for hosting the website and the API. I also learned a lot of about unit testing, using Jest, Selenium, Python unit tests, and other testing frameworks in our CI/CD. Besides the technical skills, there was a lot to learn from writing technical reports and addressing user stories (stories from other teams where they would like us to implement a certain feature during the subsequent phases).",
      },
    ],
    date: "October 2022",
    img: explore,
    alt: "A city skyline and a moon against a dark blue background. This is the icon for the website for this project",
    team: [
      {
        name: "Katherine Eisen",
        link: "https://gitlab.com/katherine-eisen",
      },
      {
        name: "Daimu Iwata",
        link: "https://gitlab.com/dimeonvin",
      },
      {
        name: "Mariana Medina",
        link: "https://gitlab.com/marianamedina",
      },
      {
        name: "Jarrod Brown",
        link: "https://gitlab.com/jarrod-brown",
      },
    ],
    links: [
      "https://gitlab.com/RikGhosh487/exploreandgivemore",
      "https://documenter.getpostman.com/view/14067869/2s83Ycg2LW",
    ],
  },
  {
    name: "PocketCloset",
    desc: "Outfit Planner with suggestions based on Events and Weather",
    type: "Applications",
    small_info:
      "An outfit planner written in React JavaScript that lets the user digitize their closet and plan outfits for events with weather suggestions. I worked on the event calendar and integrating planned outfits with events.",
    info: [
      {
        title: "Summary",
        text: "This project involves designing a web application for a closet organizer and event outfit planner. The primary focus on designing this workable prototype was Human Computer Interaction semantics. The application features an outfit uploader, featuring a camera to take a picture and upload their items from the closet into the app's storage whilst adding tags and names for searchability, an outfit planner, where the added items can be grouped together to create an outfit, an event calendar, where an event can be created and an outfit can be attached to that event, and a user settings and preferences page. The application recommends certain outfits based on the weather conditions for the particular day of planning as well.",
      },
      {
        title: "Contributions",
        contributions: [
          "Designed wireframes and prototypes for the final design",
          "Conducted A/B testing and within subjects studies to refine prototype design",
          "Designed the calendar and event planner components",
          "Worked on the Camera component and integrating it with Firebase for cloud storage",
        ],
      },
      {
        title: "What I Learned",
        text: "This project gave me a lot of insight regarding the design cycle and HCI techniques for informing prototype design. This project was mostly done using React JavaScript, and Material UI. I learned about using Firebase for storing images and login information, and how subject testing is conducted.",
      },
    ],
    date: "March 2023",
    img: pocket,
    alt: "A denim jeans with a heart on the back pocket hung up on a red hangar against a light blue background. This is the logo for the application",
    team: [
      {
        name: "Malithy Wimalasooriya",
        link: "https://github.com/malithyw",
      },
      {
        name: "Lauren Warhola",
        link: "https://github.com/lwarhola",
      },
      {
        name: "Rahul Yadav",
        link: "https://github.com/rahuly0426",
      },
    ],
    links: ["https://github.com/malithyw/pocketcloset"],
  },
  {
    name: "Tryston's Website",
    desc: "Personal Website for a friend",
    type: "Web Development",
    small_info:
      "A personal website for showcasing projects and games developed by Tryston Minsquero. I worked on the frontend JS and CSS, along with the boilerplate for ExpressJS",
    info: [
      {
        title: "Summary",
        text: "I helped a friend implement his own personal website. This website features the games and projects Tryston has worked on,along with his resume and other information. The website uses ExpressJS for backend and Handlebars as the templating engine. The entire frontend is designed in vanilla JS and CSS. ShowdownJS is used to convert markdown into HTML, which is used by Tryston to render the dynamic content of the website.",
      },
      {
        title: "Contributions",
        contributions: [
          "Designed the Frontend UI using CSS and JavaScript",
          "Provided boilerplates for ExpressJS and Handlebars",
          "Implemented the contact form",
        ],
      },
      {
        title: "What I Learned",
        text: "Although it is more popular to use JavaScript frameworks for most websites, it was nice to go back to the roots and design a website using vanilla JS. I also got to work on AJAX for the contact form, which was something I hadn't done before. Working on this project, I also learned about tools such as ShowdownJS and EmailJS. Lastly, I learned about Heroku and deploying a website using Kaffine.",
      },
    ],
    date: "November 2022",
    img: tryston,
    alt: "A minimalist figure sketch of Tryston Minsquero wearing a black shirt against a white background. This is the logo for Tryston's website",
    team: [
      {
        name: "Tryston Minsquero",
        link: "https://trystonminsquero.com/linkedin",
      },
    ],
    links: [
      "https://trystonminsquero.com",
      "https://github.com/TrystonMinsquero/Portfolio-Website",
    ],
  },
  {
    name: "Rik's Website",
    desc: "Personal Website for hosting project summaries and resume",
    type: "Web Development",
    small_info:
      "A personal website for showcasing university and personal projects along with a digitized resume, written in React JavaScript.",
    info: [
      {
        title: "Summary",
        text: "This website is meant to showcase my projets and my technical skills and resume. It is almost entirely written in React JavaScript and uses GitHub pages for hosting. The website is fully responsive, and includes accessibility compliant code.",
      },
      {
        title: "Contributions",
        contributions: [
          "Component Design and structure",
          "Designing UI using CSS",
        ],
      },
      {
        title: "What I Learned",
        text: "This project involved working with a lot of React hooks for state management. I also learned how to best optimize media queries for devices of different sizes. Lastly, almost all of the code is ARIA compliant, which was something I had to learn about.",
      },
    ],
    date: "December 2023",
    img: rik,
    alt: "A monogram showing R and G in black against a yellow background. These are the initials of Rik Ghosh and also the logo for this website",
    links: [
      "rikghosh487.github.io/Portfolio",
      "https://github.com/RikGhosh487/Portfolio",
    ],
  },
  {
    name: "C++ Thread Pool",
    desc: "Custom Thread Pool implementation using C++20 Joinable Threads",
    type: "Systems",
    small_info:
      "A custom thread pool written in C++ using C++20 Joinable threads and compared against popular C++ thread pools for performance using a series of benchmarks. I worked on the thread pool implementation and a few benchmarks.",
    info: [
      {
        title: "Summary",
        text: "For this project we implemented our own C++ thread pool using C++20 Joinable threads and compared its performance against manual multithreading and other popular thread pools such as OneAPI TBB, BS thread pool, and Boost thread pool. The performance was measured using a series of micro-benchmarks.",
      },
      {
        title: "Contributions",
        contributions: [
          "Writing the Thread pool using C++20 Joinable Threads",
          "Including an optimization for C++23 move-only functions",
          "Designing micro-benchmarks",
        ],
      },
      {
        title: "What I Learned",
        text: "I learned a lot about experimental computer science and designing repeatable experiments. I also learned about joinable threads and how they differ from the regular threads. I also learned about the different thread pool implementations and some of the clever optimizations they use such as loop parallelization.",
      },
    ],
    date: "October 2023",
    img: cpp,
    alt: "The C++ poster logo against a black background. This project uses C++",
    team: [
      {
        name: "Altanali Nagji",
        link: "https://github.com/Altanali",
      },
    ],
    links: ["https://github.com/Altanali/Advanced-OS-Final-Project"],
  },
  {
    name: "ELF Loader and Pager",
    desc: "User-Level ELF Loader with support for dynamic paging",
    type: "Systems",
    small_info:
      "A user-level ELF loader in C and ASM that parses the ELF binary and loads the loadable segments into appropriate memory locations before jumping to the starting instruction.",
    info: [
      {
        title: "Summary",
        text: "For this project I used implemented a program loader and pager as a user-level program. This program reads an ELF binary and then uses the static virtual addresses to allocate sufficient memory to load the loadable segments of the program. The loader has three different settings. The all-at-once loader loads every program segment at once. The demand pager loads a page at a time, when a page-fault occurs. The hybrid pager loads multiple pages using a custom formula at each page-fault.",
      },
      {
        title: "Contributions",
        contributions: [
          "Designed the all-at-once program loader",
          "Implemented signal handlers for demand paging",
          "Designed custom formula for hybrid paging",
        ],
      },
      {
        title: "What I Learned",
        text: "I learned about signal handlers and implementing demand paging from a user program. I also learned about the details of the ELF binary and how programs get loaded and executed in Linux.",
      },
    ],
    date: "October 2023",
    img: c,
    alt: "The C poster logo against a black background. This project uses C",
  },
  {
    name: "Custom ICMP, ARP, and RIP",
    desc: "Implementation on ICMP, ARP and RIP for supporting ping and trace route operations in custom Network stack",
    type: "Networks",
    small_info:
      "A custom implementation of ICMP, ARP, and RIP in Java for communicating between two nodes over a simulated Virtual Network.",
    info: [
      {
        title: "Summary",
        text: "This project including implementing ICMP, ARP, and RIP in Java for a simulated Virtual Network. These components were built on top of the floodlight controller using several different network topologies.",
      },
      {
        title: "Contributions",
        contributions: [
          "Implemented ICMP for ping",
          "Implemented ARP for communication between nodes in a switch network",
          "Implemented RIP for updating routing tables in a large network",
        ],
      },
      {
        title: "What I Learned",
        text: "I learned how ICMP, ARP, and RIP is implemented and how nodes in a switched network communicate in the IP layer.",
      },
    ],
    date: "October 2022",
    img: java,
    alt: "The Java poster logo against a black background. This project uses Java",
  },
  {
    name: "Metallicity Approximator",
    desc: "Random Forest Regressor to approximate stellar metallicity using only photometric inputs",
    type: "Applications",
    small_info:
      "A Random Forest Regressor in Python which approximates Stellar Metallicity with an RMSE of 0.024 using Photometric color indices from SDSS. My work in this field got published in the Research Notes of AAS.",
    info: [
      {
        title: "Summary",
        text: "This was part of my research for the Freshman Research Initiative at UT Austin. This program is a Random Forest Regressor that takes 4 color indices from SDSS of stellar objects and regresses to a stellar metallicity value. Metallicity requires spectroscopic data, which is not as abundant as photometric data. Therefore, this program allows the computation of metallicity of stars that lack spectroscopic data. I have a paper published in the Research Notes of AAS regarding this project.",
      },
      {
        title: "Contributions",
        contributions: [
          "Wrote the Random Forest Regressor",
          "Implemented visualizations for model output",
        ],
      },
      {
        title: "What I Learned",
        text: "I learned about the scikit-learn package and SQL for querying the SDSS data base. I also ended up learning about the process of getting a paper published in a scientific journal.",
      },
    ],
    date: "March 2022",
    img: metallicity,
    alt: "A globular cluster showing a spherical distribution of stars with varying brightness and color.",
    team: [
      {
        name: "Soham Saha",
        link: "https://github.com/S-saha548",
      },
    ],
    links: ["https://github.com/RikGhosh487/Metallicity-Approximator"],
  },
  {
    name: "Color Filter Converter",
    desc: "Multilayer Perceptrons to convert color filters from SDSS to GAIA and vice versa",
    type: "Applications",
    small_info:
      "Two MLPs in Python for converting from SDSS color filters to GAIA color filters and vice versa. This utility tool is used by students at Geometry of Space Research group at UT Austin",
    info: [
      {
        title: "Summary",
        text: "This is a utility tool for converting the color indicies from one popular astronomy database to another and vice versa. The tool uses two Multilayer Perceptrons written using PyTorch. This tool is used by students in the FRI program till date.",
      },
      {
        title: "Contributions",
        contributions: [
          "Collected data from SDSS and GAIA data bases",
          "Designed MLP architecture for both models",
          "Trained and Validated models for accuracy",
          "Wrote a detailed API for future users of the models",
        ],
      },
      {
        title: "What I Learned",
        text: "I learned how to design MLPs in PyTorch. I read about a lot of optimization functions and regularization options before deciding which one to pick.",
      },
    ],
    date: "June 2022",
    img: python,
    alt: "The Python poster logo against a black background. This project uses Python",
    links: ["https://github.com/RikGhosh487/MLP-Filters"],
  },
  {
    name: "SuperTuxKart Guidance System",
    desc: "Deep Neural Network to process frames from SuperTuxKart and a controller to guide the kart to stay on the track",
    type: "Machine Learning",
    small_info:
      "A PyTorch DNN for finding the center of a track in image frames from SuperTuxKart, and a custom controller that moves the kart towards the center of the track to autonomously drive the kart.",
    info: [
      {
        title: "Summary",
        text: "This project involved designing a UNet CNN that looks at frames from the SuperTuxKart game on several different race tracks and uses segmentation to identify the center of a race track so that a controller can instruct the kart to drive towards the center and stay on the track to complete the race. Each race track had a certain time limit and the goal was to design a Neural Network that can guide the controller to beat that time.",
      },
      {
        title: "Contributions",
        contributions: [
          "Gathered the training data from SuperTuxKart",
          "Designed the UNet CNN architecture",
          "Designed the controller for driving the kart",
        ],
      },
      {
        title: "What I Learned",
        text: "I learned about the UNet architecture and how one-hot encoding works. I explored differnt architectures and hyperparameters before coming up with the final product.",
      },
    ],
    date: "April 2022",
    img: stk,
    alt: "Bold initials S T K for SuperTuxKart against a white background",
  },
  {
    name: "Simple REPL",
    desc: "REPL that evaluates expressions and stores variables for computation",
    type: "Systems",
    small_info:
      "A C REPL that uses Abstract Syntax Trees to parse and then evaluate simple expressions and assignments.",
    info: [
      {
        title: "Summary",
        text: "This REPL uses Abstract Syntax Trees to proecss expressions and store variables. Each character is tokenized by a tokenizer and then gets parsed by a parser, contructing the AST. Then the evaluator decomposes the AST to produce the output.",
      },
      {
        title: "Contributions",
        contributions: [
          "Implemented the Tokenizer",
          "Implemented the Parser",
          "Implemented the Evaluator",
          "Added support for creating and storing variables",
        ],
      },
      {
        title: "What I Learned",
        text: "This was my first program with C. I learned about Makefiles and combining several C files into a single program. I also learned about the compile and linker phases of program creation.",
      },
    ],
    date: "February 2021",
    img: c,
    alt: "The C poster logo against a black background. This project uses C",
  },
  {
    name: "Custom malloc and free",
    desc: "Malloc and free for a custom heap that support coalescing and fragmentation controls",
    type: "Systems",
    small_info:
      "A C malloc and umalloc (free) implementation for partitioning and growing the heap. The implementation support coalescing, and trying different fragmentation strategies for greater customizability of the heap usage.",
    info: [
      {
        title: "Summary",
        text: "In this project, I implemented my custom heap allocator. The program maintains a free list and finds appropriate memory segments from the list to service malloc requests. Passing a certain flag allows the free list to be coalesced. There are different finding algorithms such as first-fit, and best-fit which can be specified as flags to the malloc function. Each allocated block contains metadata in the header and the footer for memory management.",
      },
      {
        title: "Contributions",
        contributions: [
          "Implementing the heap data structure for memory management",
          "Implementing the malloc function",
          "Implementing the free function",
          "Implementing the coalescing",
        ],
      },
      {
        title: "What I Learned",
        text: "I learned how the heap works in C and the system calls used for acquiring and freeing memory. I also learned about the different search algorithms for finding free blocks to service malloc requests and how and when to coalesce for optimal performance.",
      },
    ],
    date: "March 2021",
    img: c,
    alt: "The C poster logo against a black background. This project uses C",
  },
  {
    name: "Dwightbot",
    desc: "Discord moderation and trivia bot inspired by Dwight Schrute from The Office",
    type: "Applications",
    small_info:
      "A discord bot written in JavaScript that performs simple moderation and utility tasks in a server. There are fun The Office themed functions that embody the personality of Dwight K. Schrute from The Office.",
    info: [
      {
        title: "Summary",
        text: "This is a discord bot that was initially created for profanity filtering. In subsequent updates lots of fun features were added to learn about The Office trivia, play sound tracks, and feature mini games. The bot is designed to act like Dwight Schrute from The Office and is capable of joining voice channels to play audio tracks, using Discord embeds to recommend episodes from The Office, and play hangman",
      },
      {
        title: "Contributions",
        contributions: [
          "Designing the profanity detection and moderation system",
          "Adding the feature to play music and audio tracks in a voice channel",
          "Adding an episode recommendation feature",
          "Adding mini games to the bot",
        ],
      },
      {
        title: "What I Learned",
        text: "This was my first project with DiscordJS. I learned about the API and how to use asynchronous functions. I started the bot with a very simple functionality and gradually added more features that other server members wanted to see. This included experimenting with audio files, adding embedded messages, and including mini games.",
      },
    ],
    date: "February 2021",
    img: schrute,
    alt: "Silhouette images of Dwight Schrute from The Office on a White Claw inspired logo saying Dwight Claw Beet Seltzer",
    links: ["https://github.com/RikGhosh487/Discord-Dwightbot"],
  },
  {
    name: "Bettingbot",
    desc: 'Discord bot that offers Twitch-inspired polls where users "bet" with virtual currency',
    type: "Applications",
    small_info:
      "A discord bot written in JavaScript that allows users in the server to create a Twitch-like poll and then other users can spend their virtual currency to bet on a certain poll outcome.",
    info: [
      {
        title: "Summary",
        text: 'This bot features a Twitch-inspired polling mechanism for members in a Discord server. Anyone can create a poll and pick a time period after which the poll will expire, and other members can "bet" on the choices by using a virtual currency tracked by the bot. After the time expires, the bot provides the outcome of the poll, and the members who picked the winning choice get awarded some of the virtual currency. Currency gets replenished every week.',
      },
      {
        title: "Contributions",
        contributions: [
          "Designing the polling mechanism and poll creation",
          "Implementing timer controls for the bot",
          "Adding and maintaining state for members of a Discord server",
        ],
      },
      {
        title: "What I learned",
        text: "This was the first Discord bot I worked on that used timer controls. Using time-sensitive events was a new experience for me to learn. I also learned about keeping track of state for each member of a server.",
      },
    ],
    date: "September 2021",
    img: betting,
    alt: "A logo showing the text Esports bets in white against a black background. This is the logo for the Discord bot.",
    links: ["https://github.com/RikGhosh487/Betting-Bot"],
  },
];

/**
 * @todo need to implement this for future edition
 * Array of Certificate Objects
 *
 * Interface:
 *  - name (name of the certificate)
 *  - date (date the certificate was issued)
 *  - link [OPTIONAL] (link to the certificate)
 *  - org (issuing organization)
 *  - skills (array of Skill objects)
 */
const CERTIFICATIONS = [{}];

export {
  SOCIALS,
  INTERESTS,
  EDUCATION,
  EXPERIENCE,
  PUBLICATIONS,
  LANGUAGES,
  SKILLS,
  PROJECTS,
};
