const  initialQuestions = [
  {
    question: "What does MERN stack stand for?",
    options: [
      "MongoDB, Express.js, React, Node.js",
      "MySQL, Express.js, React, Node.js",
      "MongoDB, Express.js, Redux, Node.js",
      "MongoDB, Express.js, React, Next.js",
    ],
    correctAnswer: "MongoDB, Express.js, React, Node.js",
  },
  {
    question:
      "Which of the following is a NoSQL database used in the MERN stack?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    correctAnswer: "MongoDB",
  },
  {
    question: "What is the purpose of Express.js in the MERN stack?",
    options: [
      "To handle the frontend",
      "To handle the database",
      "To handle the backend and routing",
      "To handle state management",
    ],
    correctAnswer: "To handle the backend and routing",
  },
  {
    question: "In React, what is the purpose of the useState hook?",
    options: [
      "To manage side effects",
      "To manage state in a functional component",
      "To handle routing",
      "To connect to a database",
    ],
    correctAnswer: "To manage state in a functional component",
  },
  {
    question:
      "Which HTTP method is typically used to update a resource on the server?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "PUT",
  },
  {
    question: "Which of the following is a JavaScript runtime environment?",
    options: ["React", "Node.js", "Express.js", "MongoDB"],
    correctAnswer: "Node.js",
  },
  {
    question: "What is the purpose of the useEffect hook in React?",
    options: [
      "To handle state",
      "To handle side effects",
      "To handle props",
      "To handle routing",
    ],
    correctAnswer: "To handle side effects",
  },
  {
    question:
      "Which programming language is primarily used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    question:
      "In MongoDB, which command is used to insert a document into a collection?",
    options: ["insert()", "insertOne()", "add()", "addOne()"],
    correctAnswer: "insertOne()",
  },
  {
    question: "Which of the following is used to style a React component?",
    options: ["CSS", "HTML", "JavaScript", "SQL"],
    correctAnswer: "CSS",
  },
  {
    question: "Which former British colony was given back to China in 1997?",
    options: ["Russia", "America", "Australia", "Hong Kong"],
    correctAnswer: "Hong Kong",
  },
  {
    question:
      "For which of the following disciplines is the Nobel Prize awarded?",
    options: [
      "Physics and Chemistry",
      "Physiology or Medicine",
      "Literature Economics",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question:
      "Fire temple is the place of worship for which of the following religions?",
    options: ["Taoism", "Judaism", "Zoroastrianism", "Shintoism"],
    correctAnswer: "Zoroastrianism",
  },
  {
    question:
      "Who was the first Indian Commander-in-Chief (C-in-C) of the Indian Army?",
    options: [
      "Gen. K.M. Cariappa",
      "Vice-Admiral R.D. Katari",
      "Rajendra Singhji",
      "None of the above",
    ],
    correctAnswer: "Gen. K.M. Cariappa",
  },
  {
    question: "For galvanizing iron, which of the following metals is used?",
    options: ["Aluminium", "Copper", "Lead", "Zinc"],
    correctAnswer: "Zinc",
  },
  {
    question: "What does MERN stack stand for?",
    options: [
      "MongoDB, Express.js, React, Node.js",
      "MySQL, Express.js, React, Node.js",
      "MongoDB, Express.js, Redux, Node.js",
      "MongoDB, Express.js, React, Next.js",
    ],
    correctAnswer: "MongoDB, Express.js, React, Node.js",
  },
  {
    question:
      "Which of the following is a NoSQL database used in the MERN stack?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    correctAnswer: "MongoDB",
  },
  {
    question: "What is the purpose of Express.js in the MERN stack?",
    options: [
      "To handle the frontend",
      "To handle the database",
      "To handle the backend and routing",
      "To handle state management",
    ],
    correctAnswer: "To handle the backend and routing",
  },
  {
    question: "In React, what is the purpose of the useState hook?",
    options: [
      "To manage side effects",
      "To manage state in a functional component",
      "To handle routing",
      "To connect to a database",
    ],
    correctAnswer: "To manage state in a functional component",
  },
  {
    question:
      "Which HTTP method is typically used to update a resource on the server?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "PUT",
  },
  {
    question: "Which of the following is a JavaScript runtime environment?",
    options: ["React", "Node.js", "Express.js", "MongoDB"],
    correctAnswer: "Node.js",
  },
  {
    question: "What is the purpose of the useEffect hook in React?",
    options: [
      "To handle state",
      "To handle side effects",
      "To handle props",
      "To handle routing",
    ],
    correctAnswer: "To handle side effects",
  },
  {
    question:
      "Which programming language is primarily used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    question:
      "In MongoDB, which command is used to insert a document into a collection?",
    options: ["insert()", "insertOne()", "add()", "addOne()"],
    correctAnswer: "insertOne()",
  },
  {
    question: "Which of the following is used to style a React component?",
    options: ["CSS", "HTML", "JavaScript", "SQL"],
    correctAnswer: "CSS",
  },
  {
    question: "What does JSX stand for in React?",
    options: [
      "JavaScript XML",
      "JavaScript XHTML",
      "JavaScript Extension",
      "Java Syntax Extension",
    ],
    correctAnswer: "JavaScript XML",
  },
  {
    question:
      "Which lifecycle method is invoked immediately after a component is mounted in React?",
    options: [
      "componentDidMount",
      "componentWillMount",
      "componentDidUpdate",
      "componentWillUpdate",
    ],
    correctAnswer: "componentDidMount",
  },
  {
    question:
      "What is the command to create a new React application using Create React App?",
    options: [
      "create-react-app my-app",
      "react-create-app my-app",
      "npx create-react-app my-app",
      "npm create-react-app my-app",
    ],
    correctAnswer: "npx create-react-app my-app",
  },
  {
    question:
      "Which of the following is used to handle state in a functional React component?",
    options: ["this.state", "useState", "setState", "state"],
    correctAnswer: "useState",
  },
  {
    question: "Which command is used to start a Node.js server?",
    options: [
      "node server.js",
      "npm start server.js",
      "node start",
      "npm run server",
    ],
    correctAnswer: "node server.js",
  },
  {
    question: "Which HTTP method is used to delete a resource on the server?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "DELETE",
  },
  {
    question:
      "In MongoDB, which method is used to find a document in a collection?",
    options: ["findOne()", "searchOne()", "getOne()", "fetchOne()"],
    correctAnswer: "findOne()",
  },
  {
    question: "What is the primary purpose of Node.js?",
    options: [
      "To create desktop applications",
      "To create mobile applications",
      "To create server-side applications",
      "To create database applications",
    ],
    correctAnswer: "To create server-side applications",
  },
  {
    question: "Which of the following is a frontend framework used with React?",
    options: ["Bootstrap", "Express.js", "Django", "Spring"],
    correctAnswer: "Bootstrap",
  },
  {
    question:
      "What is the main advantage of using the MongoDB database in the MERN stack?",
    options: [
      "It is relational",
      "It is schema-less",
      "It is SQL-based",
      "It is in-memory",
    ],
    correctAnswer: "It is schema-less",
  },
  {
    question:
      "Which of the following hooks is used to perform side effects in functional components in React?",
    options: ["useState", "useContext", "useEffect", "useReducer"],
    correctAnswer: "useEffect",
  },
  {
    question:
      "What is the main purpose of the package.json file in a Node.js project?",
    options: [
      "To store environment variables",
      "To list project dependencies",
      "To configure the database",
      "To manage user sessions",
    ],
    correctAnswer: "To list project dependencies",
  },
  {
    question:
      "Which tool is commonly used to manage versions of JavaScript libraries and frameworks?",
    options: ["Git", "npm", "Docker", "Webpack"],
    correctAnswer: "npm",
  },
  {
    question:
      "In JavaScript, what does the 'this' keyword refer to in a method?",
    options: [
      "The global object",
      "The method itself",
      "The object that the method is a property of",
      "The class",
    ],
    correctAnswer: "The object that the method is a property of",
  },
  {
    question:
      "Which React feature allows for the reuse of component logic across multiple components?",
    options: ["Fragments", "Hooks", "Portals", "Refs"],
    correctAnswer: "Hooks",
  },
];

module.exports = {initialQuestions};