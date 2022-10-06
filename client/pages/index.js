import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar/Navbar'
import AboutMe from '../src/components/AboutMe/AboutMe'
import ContactLine from '../src/components/ContactLine/ContactLine'
import Init from '../src/components/Home/Init'
import Script from 'next/script'
import Projects from '../src/components/Projects/Projects'
import Skills from '../src/components/Skills/Skills'
import Contact from '../src/components/Contact/Contact'
import Footer from '../src/components/Footer/Footer'

export default function Home() {
    return (
        <div className={styles.container}>
            <Script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js" />
            <ContactLine />
            <Navbar />
            <Init />
            <AboutMe />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}
