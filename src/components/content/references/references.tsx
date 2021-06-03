import { StaticImage } from "gatsby-plugin-image"
import React from "react"
// const logo = require("../../../images/arrow.svg") as string
// import adfa from "../../../images/arrow.svg"
import SectionTitle from "../../shared/section_title"
import {
  Avatar,
  Flex,
  Box,
  Center,
  Button,
  Text,
  Icon,
  HStack,
} from "@chakra-ui/react"
import ArrowRight from "../../shared/arrow-right"
import ArrowLeft from "../../shared/arrow-left"

const References = () => {
  return (
    <Box height="800px" background="inherit">
      <SectionTitle title=".references()" id="references" />
      <Box height="40px"></Box>
      {/* reference box */}
      <Center>
        <Box height="293.3px" width="544px" position="relative">
          {/* background img */}
          <StaticImage src="../../../images/references_bkg.png" alt="" />

          {/* content*/}
          <Box
            position="absolute"
            top="50px"
            left="18.7px"
            right="30.7px"
            bottom="32px"
          >
            <Flex direction="column">
              {/* avi & name */}
              <Flex direction="row" alignItems="center">
                {/* avi */}
                <Avatar
                  name="Lewis Mwaki"
                  src="https://bit.ly/kent-c-dodds"
                  h="53.3px"
                  w="53.3px"
                />
                {/* /name */}
                <Flex direction="column" alignItems="flex-start" pl="8px">
                  <Text
                    textColor="#442882"
                    fontWeight="semibold"
                    fontSize="12px"
                  >
                    Lewis Mwaki
                  </Text>
                  <Text textColor="#4D00FF" fontWeight="bold" fontSize="13px">
                    Software Engineer at Spotify
                  </Text>
                </Flex>
              </Flex>

              <Text
                fontWeight="semibold"
                textColor="#707070"
                pt="13.3px"
                noOfLines={4}
              >
                What people are saying. What people are saying. What people are
                saying. What people are saying. What people are saying. What
                people are saying. What people are saying. What people are
                saying. What people are saying. What people are saying. What
                people are saying. saying. What people are saying. What people
                are saying. What people are saying
              </Text>

              {/* <Flex direction="row" justifyContent="space-between">
                <Box width="10px"></Box>
                <Box width="46px" height="13.3px">
                  <ArrowRight />
                </Box>
              </Flex> */}
            </Flex>
          </Box>

          {/* buttons */}
          <Box position="absolute" right="32px" bottom="32px">
            <Flex direction="row">
              <ArrowLeft cursor="pointer" />
              <Box width="28px"></Box>
              <ArrowRight cursor="pointer" />
            </Flex>
          </Box>
        </Box>
      </Center>
    </Box>
  )
}

export default References
