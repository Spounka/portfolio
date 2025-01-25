const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://nazih.me/',
  title: 'Nazih B.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nazih Boudaakkar',
  role: 'Software Engineer and DevOps Specialist',
  description: `I'm Nazih, a versatile engineer with over 3 years experience creating and designing intricate applications in a sophisticated way. I love making videos games and tinkering with anything that's low level`,
  social: {
    linkedin: 'https://linkedin.com/in/nazih-boudaakkar/',
    github: 'https://github.com/spounka/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Medex',
    description: 'An Alibaba-like Quotations platform for medical equipment',
    stack: ['TypeScript', 'React', 'Django'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'DzSkills',
    description:
      'An online e-learning platform for algerian students with custom payment options and full dashboard management',
    stack: ['Django', 'TypeScript', 'React', 'ReactQuery', 'Redux'],
    sourceCode: 'https://github.com',
    livePreview: 'https://dzskills-frontend.onrender.com',
  },
  {
    name: 'ClickR Photography',
    description: `Quick landing page for a photography website. Design from Figma`,
    stack: ['React', 'TailwindCSS', 'SaaS'],
    sourceCode: 'https://github.com/spounka/clickr-landing-page',
    livePreview: 'https://clickr-sr6x.onrender.com/',
  },
  {
    name: 'PainSuvival',
    description:
      'A game made entirely in 48H for the LudumDare50 game jam using Unity Engine',
    stack: ['Unity', 'C#'],
    sourceCode: 'https://github.com/Spounka/ldjam-50/',
    livePreview: 'https://spounka.itch.io/pain-survival',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C',
  'C++',
  'C#',
  'Python',
  'Bash',

  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',

  'Tailwind CSS',
  'React',
  'NextJS',
  'Redux',
  'Django',
  'RestAPI',
  'Swagger',
  'NodeJS',
  'ExpressJS',
  'ReactQuery',

  'Unity',

  'Git',
  'GitHub',
  'GitLab',
  'CI/CD',
  'Docker',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nazih.boudaakkar@proton.me',
}

export { header, about, projects, skills, contact }
