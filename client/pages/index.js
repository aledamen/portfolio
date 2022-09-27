import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar/Navbar'
import AboutMe from '../src/components/AboutMe/AboutMe'
import ProgressBar from 'react-progressbar-on-scroll'
import ContactLine from '../src/components/ContactLine/ContactLine'
import Init from '../src/components/Home/Init'
import { Flex } from '@chakra-ui/react'

export default function Home() {
    return (
        <div className={styles.container}>
            <ContactLine/>
            <Navbar />
            <Init/>
            <AboutMe />
            <div style={{height:'100vh', width:'90vw'}}></div>
        </div>
    )
}
