import React from "react"
import { Center, Text } from "@chakra-ui/layout"

import { css } from "@emotion/react"

const titleStyle = css`
  -webkit-text-stroke: 0.75px yellow;
  -webkit-text-fill-color: transparent;
`

interface TitleText {
  title: string
  id?: string
}

const SectionTitle = (props: TitleText) => {
  return (
    <Center>
      <Text
        fontFamily="Fira Mono"
        fontSize="96px"
        color="yellow"
        id={props.id}
        css={titleStyle}
      >
        {props.title}
      </Text>
    </Center>
  )
}

export default SectionTitle
