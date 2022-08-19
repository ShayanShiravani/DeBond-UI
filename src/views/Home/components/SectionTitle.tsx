import React from "react"
import { PropsWithChildren } from "react"
import { Flex } from "rebass"

const SectionHeader: React.FC<PropsWithChildren> = (props) => {
  const {children} = props
  return (
    <Flex className="justify-center">
      <h1
        className="font-semibold text-3xl lg:text-3xl inline-block pr-2 text-gradient"
      >
      {children}
      </h1>
    </Flex>
  )
}

export default SectionHeader