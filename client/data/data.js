const data = {
    en: {
        navbar: ['Home', 'About me', 'Projects', 'Skills', 'Contact'],
        init: [
            'Hi, my name is',
            "Alejandro D'Amen.",
            "I'm a ",
            [
                'Full Stack Developer.',
                'MERN Developer.',
                'PERN Developer.',
                'Node.js Developer.',
                'React.js Developer.',
                'Next.js Developer.',
            ],
            'I enjoy experimenting with new technologies, acquiring new knowledge and working in a team.',
            'Check my projects',
        ],
        aboutMe: [
            'About me',
            'Since I was a child I was passionate about technology and sport. For 6 years I worked as a PE teacher and played rugby at the San Fernando Club.',
            'I chose to challenge myself and did a programming bootcamp at Platform 5, consisting of more than 800hs during 4 months, working in pair programming and in teams, applying agile methodologies like SCRUM, which helped me to strengthen both my hard and soft skills.',
            'I am a pro-active, dedicated and responsible person. Being involved in teaching and sport allowed me to acquire a passion for teamwork and communication.',
            'Download Resume',
        ],
        projects: {
            title: 'Projects',
            projects: [
                {
                    name: 'Portfolio',
                    path: '/assets/images/portfolio.png',
                    linkGit: 'https://github.com/aledamen/portfolio',
                    linkWeb: '#home',
                    description: 'My first personal portfolio.',
                    skills: ['Next.js', 'ChakraUI'],
                },
                {
                    name: 'RevistaWOW',
                    path: '/assets/images/revistaWOW.png',
                    linkGit: '#home',
                    linkWeb: 'https://p5-wow-git-develop-joaquinreiners.vercel.app/',
                    description: 'Professional project for Hogarth WorldWide.',
                    skills: ['Strapi', 'MongoDB', 'Next.js', 'ChakraUI'],
                },
                {
                    name: 'Pasion Argenta',
                    path: '/assets/images/e-commerce.png',
                    linkGit: 'https://github.com/aledamen/E-Commerce-Pasion-Argenta',
                    linkWeb: '#home',
                    description: 'Project in a SCRUM team of five members.',
                    skills: ['Node.js','MongoDB','React.js', 'MUI'],
                },
                {
                    name: 'TMDB',
                    path: '/assets/images/TMDB.png',
                    linkGit: 'https://github.com/aledamen/TMDB.',
                    linkWeb: 'https://alejandrodamen-tmdb.vercel.app/',
                    description: 'Individual project for one week.',
                    skills: ['Node.js','MongoDB','React.js', 'SASS']
                },
            ],
        },
        skills: {
            title: 'Skills',
            skills:["/assets/skills/node.png","/assets/skills/express.png", "/assets/skills/sequelize.png", "/assets/skills/postgresql.png", "/assets/skills/mongo.png", "/assets/skills/mongoose.png", "/assets/skills/jwt.png", "/assets/skills/socket.png", "/assets/skills/docker.png", "/assets/skills/npm.png", "/assets/skills/react.png", "/assets/skills/next2.png", "/assets/skills/chakra.png", "/assets/skills/redux.png", "/assets/skills/sass.png", "/assets/skills/git.png"]
        },
        contact: {
            title: 'Contact',
            description: ['I am always open to listen to proposals, talk about technology or sports.', 'Why not have a coffee?'],
            button:'Contact me'
        },
        footer: {
            title: 'Made with',
            copyright:"Site developed by Alejandro D'Amen 2022."
        }
    },
    es: {
        navbar: ['Inicio', 'Sobre mí', 'Proyectos', 'Tecnologías', 'Contacto'],
        init: [
            'Hola, mi nombre es',
            "Alejandro D'Amen.",
            'Soy ',
            [
                'Full Stack Developer.',
                'MERN Developer.',
                'PERN Developer.',
                'Node.js Developer.',
                'React.js Developer.',
                'Next.js Developer.',
            ],
            'Me gusta experimentar con nuevas tecnologías, adquirir nuevos conocimientos y trabajar en equipo.',
            'Mirá mis proyectos',
        ],
        aboutMe: [
            'Sobre mí',
            'Desde chico fui un apasionado por la tecnología y el deporte. Durante 6 años trabajé como profesor de Educación Física y juego al rugby en el Club San Fernando.',
            'Elegí desafiarme e hice un bootcamp de programación en Plataforma 5, compuesto por mas de 800hs durante 4 meses, trabajando en pair programming y en equipos, aplicando metodologías ágiles como SCRUM, lo cual me ayudó a fortalecer tanto mis habilidades duras como blandas.',
            'Soy una persona proactiva, dedicada y responsable. Estar relacionado con la docencia y el deporte me permitió adquirir esa pasión por el trabajo en equipo y la comunicación.',
            'Descargar CV',
        ],
        projects: {
            title: 'Proyectos',
            projects: [
                {
                    name: 'Portfolio',
                    path: '/assets/images/portfolio.png',
                    linkGit: 'https://github.com/aledamen/portfolio',
                    linkWeb: '#home',
                    description: 'Mi Primer portfolio personal.',
                    skills: ['Next.js', 'ChakraUI'],
                },
                {
                    name: 'RevistaWOW',
                    path: '/assets/images/revistaWOW.png',
                    linkGit: '#home',
                    linkWeb: 'https://p5-wow-git-develop-joaquinreiners.vercel.app/',
                    description: 'Proyecto profesional para Hogarth WorldWide.',
                    skills: ['Strapi', 'MongoDB', 'Next.js', 'ChakraUI'],
                },
                {
                    name: 'Pasion Argenta',
                    path: '/assets/images/e-commerce.png',
                    linkGit: 'https://github.com/aledamen/E-Commerce-Pasion-Argenta',
                    linkWeb: '#home',
                    description: 'Proyecto en un equipo SCRUM de cinco integrantes.',
                    skills: ['Node.js', 'MongoDB', 'React.js', 'MUI'],
                },
                {
                    name: 'TMDB',
                    path: '/assets/images/TMDB.png',
                    linkGit: 'https://github.com/aledamen/TMDB.',
                    linkWeb: 'https://alejandrodamen-tmdb.vercel.app/',
                    description: 'Proyecto individual durante una semana.',
                    skills: ['Node.js', 'MongoDB', 'React.js', 'SASS']
                },
            ],
        },
        skills: {
            title: 'Tecnologías',
            skills:["/assets/skills/node.png","/assets/skills/express.png", "/assets/skills/sequelize.png", "/assets/skills/postgresql.png", "/assets/skills/mongo.png", "/assets/skills/mongoose.png", "/assets/skills/jwt.png", "/assets/skills/socket.png", "/assets/skills/docker.png", "/assets/skills/npm.png", "/assets/skills/react.png", "/assets/skills/next2.png", "/assets/skills/chakra.png", "/assets/skills/redux.png", "/assets/skills/sass.png", "/assets/skills/git.png"]
        },
        contact: {
            title: 'Contacto',
            description: ['Siempre estoy abierto a escuchar propuestas, hablar sobre tecnología o deporte.', '¿Por qué no tomarnos un café?'],
            button:'Contactame'
        },
        footer: {
            title: 'Hecho con',
            copyright: "Sitio desarrollado por Alejandro D'Amen 2022."
        }
    },
}

export default data
