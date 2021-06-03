import { Box, Center, Flex, Text } from "@chakra-ui/layout"
import React from "react"
import SectionDescription from "../../shared/section_description"
import SectionTitle from "../../shared/section_title"
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => {
  return (
    <Box height="500px" background="inherit">
      <SectionTitle title=".projects()" id="projects" />
      <SectionDescription description="Some of my proudest works. Enjoy. :)" />

      {/* projects images here*/}

      {/* projects controller */}
      <Center>
        <Box width="978px" height="240px" position="relative">
          {/* bkg */}
          <StaticImage
            src="../../../images/projects_controller_bkg.png"
            alt=""
          />

          {/* content */}
          <Flex
            position="absolute"
            top="56px"
            left="37.3px"
            right="46.7px"
            bottom="31.3px"
            background="red"
            justifyContent="space-between"
          >
            {/* section 1 */}
            <Text textColor="black">text section 1</Text>
            {/* section 2 */}
            <Text textColor="black">text section 2</Text>
            {/* section 3 */}
            <Text textColor="black">text section 3</Text>
          </Flex>
        </Box>
      </Center>
    </Box>
  )
}

export default Projects
