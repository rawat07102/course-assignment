export const courses: Course[] = [
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/34/28d7b368e64d53bb65c37a0995cf4b/learn-react.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50", //Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
      },
      {
        week: 2,
        topic: "Building Your First App",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        progress: 30,
      },
      {
        id: 102,
        name: "Bob Smith",
        progress: 90,
      },
    ],
  },
  {
    id: 2, // Unique identifier for the course
    name: "IBM Full Stack Software Developer Professional Certificate",
    instructor: "Michelle Saltoun", // Name of the course instructor
    description:
      "In this program, you’ll learn in-demand skills and tools used by professionals for front-end, back-end.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/collections/product-images/ibm-full-stack-cloud-developer.jpeg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50", //Link to the course thumbnail
    duration: "28 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic computer literacy. No programming or web development experience required! ",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Application Development",
      },
      {
        week: 2,
        topic: "HTML Overview",
      },
      {
        week: 3,
        topic: "CSS Overview",
      },
    ],
    students: [
      {
        id: 103,
        name: "Saige Fuentes",
        progress: 30,
      },
    ],
  },
  {
    id: 3, // Unique identifier for the course
    name: "Introduction to Front-End Development",
    instructor: "Taught by Meta Staff", // Name of the course instructor
    description:
      " You will learn how front-end developers create websites and applications that work well and are easy to maintain.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50", //Link to the course thumbnail
    duration: "26 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic computer literacy. No programming or web development experience required! ",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Get started with web development",
      },
      {
        week: 2,
        topic: "Introduction to HTML and CSS",
      },
      {
        week: 3,
        topic: "UI Frameworks",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        progress: 100,
      },
      {
        id: 102,
        name: "Bob Smith",
        progress: 20,
      },
    ],
  },
  {
    id: 4, // Unique identifier for the course
    name: "Advanced Styling with Responsive Design",
    instructor: "Colleen van Lent, Ph.D.", // Name of the course instructor
    description:
      "This course will expand upon the basic knowledge of CSS3 to include topics such as wireframes, and the use of existing styling paradigms.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/c3/038a800f7c11e7b0a8b13715a02d09/wd4e_capstone_1x1.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50", //Link to the course thumbnail
    duration: "26 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic computer literacy. No programming or web development experience required! ",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Get started with web development",
      },
      {
        week: 2,
        topic: "Introduction to HTML and CSS",
      },
      {
        week: 3,
        topic: "UI Frameworks",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        progress: 0,
      },
    ],
  },
  {
    id: 5, // Unique identifier for the course
    name: "Python for Data Science, AI & Development",
    instructor: "Joseph Santarcangelo", // Name of the course instructor
    description:
      "You’ll also use Python to perform tasks such as data collection and web scraping with APIs.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/6d/fe4061025f407a9fdb3141528a7bfc/IBM-Back-End-Development-PC-Image.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop", //Link to the course thumbnail
    duration: "36 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic computer literacy. No programming or web development experience required! ",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Python Basics",
      },
      {
        week: 2,
        topic: "Python Data Structures",
      },
      {
        week: 3,
        topic: "Python Programming Fundamentals",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        progress: 90,
      },
      {
        id: 102,
        name: "Bob Smith",
        progress: 90,
      },
    ],
  },
];

