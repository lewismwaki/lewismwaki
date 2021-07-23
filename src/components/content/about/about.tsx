import { Box, Flex } from "@chakra-ui/layout"
import React from "react"
import SectionTitle from "../../shared/section_title"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <Box height="100vh" background="inherit">
      <SectionTitle title=".aboutMe()" id="about" />
      <Flex alignItems="flex-start" pl="96px" pt="40px">
        <Box width={384} height={468}>
          <StaticImage src="../../../images/about_img.png" alt="" />
        </Box>
      </Flex>
    </Box>
  )
}

export default About
