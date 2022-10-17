import { Box } from '@chakra-ui/react'
import React, { useRef } from 'react'
import styles from './Tag.module.css'

const Tag = () => {
    const ref = useRef(null)
    const myTags = [
        'JavaScript',
        'CSS',
        'HTML',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'MongoDB',
        'Sequelize',
        'Docker',
        'Strapi',
        'JWT',
        'React.js',
        'Next.js',
        'Redux',
        'ChakraUI',
        'MaterialUI',
        'SASS',
        'Bootstrap',
        'Git',
        'Github',
    ]

    setTimeout(() => {
        const el = ref.current?.children.length
        if (!el) {
            const tagCloud = TagCloud('#content', myTags, {
                // radius in px
                radius: 270,
                // animation speed
                // slow, normal, fast
                maxSpeed: 'fast',
                initSpeed: 'fast',
                containerClass: styles.content,
                itemClass: styles.tags,
                // 0 = top
                // 90 = left
                // 135 = right-bottom
                direction: 135,

                // interact with cursor move on mouse out
                keep: true,
            })
        }
    }, 3000)


    
    return (
        <Box
            ref={ref}
            className={styles.content}
            id="content"
            display={{ base: 'none', xml: 'flex' }}
            fontFamily="body"
        ></Box>
    )
}

export default Tag
