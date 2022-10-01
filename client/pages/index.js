import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar/Navbar'
import AboutMe from '../src/components/AboutMe/AboutMe'
import ProgressBar from 'react-progressbar-on-scroll'
import ContactLine from '../src/components/ContactLine/ContactLine'
import Init from '../src/components/Home/Init'
import Script from 'next/script'
import Projects from '../src/components/Projects/Projects'

export default function Home() {
    return (
        <div className={styles.container}>
            <Script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js"/>
            <ContactLine />
            <Navbar />
            <Init/>
            <AboutMe />
            <Projects />
            <div style={{height:'100vh', width:'90vw'}}></div>
        </div>
    )
}
