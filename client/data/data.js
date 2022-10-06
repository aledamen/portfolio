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
            'Since I was a child I have always been passionate about technology and sports. For 6 years I worked as a Physical Education Teacher.',
            'Then I decided to give a twist to my career and I did a programming bootcamp at Plataforma 5, composed by more than 800hs during 4 months, working in pair programming and in teams, applying agile methodologies like SCRUM, which helped me to strengthen both my hard and soft skills.',
            'I am a proactive, dedicated and responsible person. In my work experiences, teamwork was always important and each one of them helped me to grow.',
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
                    description: 'Mi Primer portfolio personal, utilizando:',
                    skills: ['Next.js', 'ChakraUI'],
                },
                {
                    name: 'RevistaWOW',
                    path: '/assets/images/revistaWOW.png',
                    linkGit: '#home',
                    linkWeb: 'https://p5-wow-git-develop-joaquinreiners.vercel.app/',
                    description: 'Proyecto profesional en un equipo SCRUM de 5, durante un mes para Hogarth WorldWide, utilizando:',
                    skills: ['Node.js', 'Strapi', 'MongoDB', 'Next.js', 'ChakraUI'],
                },
                {
                    name: 'Pasion Argenta',
                    path: '/assets/images/e-commerce.png',
                    linkGit: 'https://github.com/aledamen/E-Commerce-Pasion-Argenta',
                    linkWeb: '#home',
                    description: 'Proyecto en un equipo SCRUM de 5 durante dos semanas, utilizando:',
                    skills: ['Node.js', 'Express', 'MongoDB','JWT', 'React.js', 'MaterialUI'],
                },
                {
                    name: 'TMDB',
                    path: '/assets/images/TMDB.png',
                    linkGit: 'https://github.com/aledamen/TMDB.',
                    linkWeb: '#home',
                    description: 'Proyecto individual durante una semana, utilizando:',
                    skills: ['Node.js', 'Express', 'MongoDB', 'JWT', 'React.js', 'SASS']
                },
            ],
        },
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
            'Desde chico fui un apasionado por la tecnología y el deporte. Durante 6 años trabajé como Profesor de Educación Física.',
            'Luego decidí dar un giro a mi carrera e hice un bootcamp de programación en Plataforma 5, compuesto por mas de 800hs durante 4 meses, trabajando en pair programming y en equipos, aplicando metodologías ágiles como SCRUM, lo cual me ayudó a fortalecer tanto mis habilidades duras como blandas.',
            'Soy una persona pro activa, dedicada y responsable. En mis experiencias laborales siempre fue importante tanto el trabajo en equipo como la comunicación y cada una de ellas me ayudaron a crecer personalmente.',
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
                    skills: ['Node.js', 'MongoDB', 'React.js', 'MaterialUI'],
                },
                {
                    name: 'TMDB',
                    path: '/assets/images/TMDB.png',
                    linkGit: 'https://github.com/aledamen/TMDB.',
                    linkWeb: '#home',
                    description: 'Proyecto individual durante una semana.',
                    skills: ['Node.js', 'MongoDB', 'React.js', 'SASS']
                },
            ],
        },
    },
}

export default data
