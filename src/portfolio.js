

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Saurabh Kumar',
  logo: '/assets/p-logo.png'
}

const about = [{
  // all the properties are optional - can be left empty or deleted
  name: 'Saurabh',
  role: ' Passionate Full Stack Web Developer 👨‍💻 ',
  description:
    "Let’s build something amazing together.",
  resume: 'https://drive.google.com/file/d/1pyFaMUb28vzi83JO6Q2mt0BEFrbue5R_/view?usp=sharing',
  
}]

const aboutme = [{
  // all the properties are optional - can be left empty or delete
  description:
    "I'm a Computer Science student at NIT Arunachal Pradesh with a passion for building innovative web applications and solving complex problems.Currently maintaining a CGPA of 8.86, I combine strong academic foundations with practical development experience in modern web technologies.I specialize in full-stack development using the MERN stack  with a focus on creating efficient, scalable, and user-friendly applications."
}]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'TuneHive',
    description:
      'Built TuneHive, a Spotify-like music player using HTML, CSS and Javascript. ',
    stack: ['HTML', 'CSS', 'JAVASCRIPT'],
    sourceCode: 'https://github.com/SaurabhK85/TuneHive',
    livePreview: 'https://www.example.com',
    image:'https://cdn.pixabay.com/photo/2015/09/21/00/54/plant-949111_640.jpg'
  },
  {
    name: 'ClimGo',
    description:
      'Designed and developed a user-centric weather app that empowers users to make informed decisions with hyperlocal, real-time weather insights based on their location search.',
    stack: ['React','Axios', 'Weather API'],
    sourceCode: 'https://github.com/SaurabhK85/ClimGo',
    livePreview: 'https://clim-go.vercel.app/',
    image:'https://img.icons8.com/?size=100&id=T1RMfH9r5Nkq&format=png&color=000000'
  },
  {
    name: 'Quiz App',
    description:
      'Built a fun and interactive Quizz App Using ReactJS,Hooks, and the Context API.',
    stack:['React'],
    sourceCode: 'https://github.com/SaurabhK85/quizz-App',
    livePreview: 'https://www.example.com',
    image:'https://cdn.pixabay.com/photo/2021/10/11/21/28/quick-quiz-6701919_640.png'
  },
  {
    name: 'Hotel Reservation System',
    description:
      'Developed key features such as Reserve a room ,View, Edit, and Delete Reservations details',
    stack:['Java', 'MySQL'],
    sourceCode: 'https://github.com/SaurabhK85/Hotel-Reservation-System',
    livePreview: 'https://www.example.com',
    image:'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_640.jpg'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  ['/skills/java.png',"Java"],
  ['/skills/python.png',"Python"],
  ['/skills/html.png',"HTML"],
  ['/skills/css.png',"CSS"],
  ['/skills/BootStrap.png',"BootStrap"],
  ['/skills/javascript.png',"JavaScript"],
  ['/skills/react.png',"ReactJS"],
  ['/skills/node.png',"NodeJS"],
  ['/skills/ExpressJS.png',"ExpressJS"],
  ['/skills/MySql.png',"MySQL"],
  ['/skills/Git.png',"Git"],
  ['/skills/Github.jpeg',"Github"],


]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'skbarh85@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/saurabh-kumar-b67024268/',
    github: 'https://github.com/SaurabhK85',
  },
}

export { header, about, projects, skills, contact,aboutme }
