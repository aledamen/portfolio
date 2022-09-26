import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar/Navbar'
import AboutMe from '../src/components/AboutMe/AboutMe'
import ProgressBar from 'react-progressbar-on-scroll'

export default function Home() {
    return (
        <div className={styles.container}>
            <ProgressBar color='#00f8ae'/>
            <Navbar />
            <AboutMe/>
            <div style={{height:'100vh', width:'90vw'}}></div>
        </div>
    )
}
