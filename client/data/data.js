const data = {
    en: {
        navbar: ['Home', 'About me', 'Projects', 'Skills', 'Contact'],
        init: [
            'Hi, my name is',
            "Alejandro D'Amen.",
            "I'm a ",
            [
                'Full Stack Developer.',
            ],
            'I enjoy experimenting with new technologies, acquiring new knowledge and working in a team.',
            'Check my projects',
        ],
        aboutMe: [
            'About me',
            'I am a programmer passionate about what I do, I love to create new things and the more difficult the challenge, the more I enjoy it.\nI cannot remain in doubt or without knowing something, and as knowledge does not take up space, I take advantage of my free time to continue my education.',
            'I  consider myself super proactive, I need to be always doing things or coming up with something new.\nMy other passion is sport, I have played team sports since I was a child until today, this taught me to put the team above the individual.',
            'I also have training and experience as a teacher, which helps me to apply assertive communication in all areas of my life.',
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
                    linkGit: 'https://github.com/aledamen/Magazine-WOW',
                    linkWeb: 'https://magazine-wow.vercel.app/',
                    description: 'Professional project for Hogarth WorldWide.',
                    skills: ['Strapi', 'MongoDB', 'Next.js', 'ChakraUI'],
                },
                {
                    name: 'Pasion Argenta',
                    path: '/assets/images/e-commerce.png',
                    linkGit: 'https://github.com/aledamen/E-Commerce-Pasion-Argenta',
                    linkWeb: '#home',
                    description: 'Project in a SCRUM team of five members for two weeks.',
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
            skills:["/assets/skills/node.png","/assets/skills/express.png", "/assets/skills/postgresql.png", "/assets/skills/mongo.png", "/assets/skills/react.png", "/assets/skills/next2.png", "/assets/skills/redux.png", "/assets/skills/chakra.png", "/assets/skills/vue.png","/assets/skills/nuxt.png","/assets/skills/tailwind.png","/assets/skills/docker.png","/assets/skills/git.png", "/assets/skills/github.png", "/assets/skills/linux.png"]
        },
        contact: {
            title: 'Contact',
            description: ['I am always open to listen to proposals, talk about technology or sports.', 'Why not have a coffee?'],
            button:'Contact me'
        },
        footer: {
            title: 'Made with',
            copyright:"Site developed by Alejandro D'Amen 2023."
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
            ],
            'Me gusta experimentar con nuevas tecnologías, adquirir nuevos conocimientos y trabajar en equipo.',
            'Mirá mis proyectos',
        ],
        aboutMe: [
            'Sobre mí',
            'Soy un programador apasionado por lo que hace, me encanta crear cosas nuevas y cuando más difícil es el desafío, más lo disfruto.\nNo me puedo quedar con la duda o sin saber algo, y como el saber no ocupa espacio, aprovecho mi tiempo libre para seguir formándome.',
            'Me considero super proactivo, necesito estar siempre haciendo cosas o ideando algo nuevo.\nMi otra pasión es el deporte, practiqué deporte en equipo desde chicho hasta la actualidad, esto me enseño a poner al equipo por sobre las individualidades.',
            'También tengo formación y experiencia como docente, lo cual me ayuda a aplicar una comunicación asertiva en todos los ámbitos de mi vida.',
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
                    linkGit: 'https://github.com/aledamen/Magazine-WOW',
                    linkWeb: 'https://magazine-wow.vercel.app/',
                    description: 'Proyecto profesional para Hogarth WorldWide.',
                    skills: ['Strapi', 'MongoDB', 'Next.js', 'ChakraUI'],
                },
                {
                    name: 'Pasion Argenta',
                    path: '/assets/images/e-commerce.png',
                    linkGit: 'https://github.com/aledamen/E-Commerce-Pasion-Argenta' ,
                    linkWeb: '#home',
                    description: 'Proyecto en equipo SCRUM de cinco integrantes durante dos semanas.',
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
            skills:["/assets/skills/node.png","/assets/skills/express.png", "/assets/skills/postgresql.png", "/assets/skills/mongo.png", "/assets/skills/react.png", "/assets/skills/next2.png", "/assets/skills/redux.png", "/assets/skills/chakra.png", "/assets/skills/vue.png","/assets/skills/nuxt.png","/assets/skills/tailwind.png","/assets/skills/docker.png","/assets/skills/git.png", "/assets/skills/github.png", "/assets/skills/linux.png"]
        },
        contact: {
            title: 'Contacto',
            description: ['Siempre estoy abierto a escuchar propuestas, hablar sobre tecnología o deporte.', '¿Por qué no tomarnos un café?'],
            button:'Contactame'
        },
        footer: {
            title: 'Hecho con',
            copyright: "Sitio desarrollado por Alejandro D'Amen 2023."
        }
    },
}

export default data
