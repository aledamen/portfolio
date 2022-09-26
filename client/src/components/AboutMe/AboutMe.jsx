import { Flex } from '@chakra-ui/react'
import React from 'react'
import Typed from "react-typed";

const AboutMe = () => {
  return (
    <Flex mt='90px'><Typed
    strings={["Full Stack Web ", "Node.js", "MERN", "React.js"]}
    typeSpeed={150}
    backSpeed={50}
    // loop
      stopped={true}
  /></Flex>
  )
}

export default AboutMe