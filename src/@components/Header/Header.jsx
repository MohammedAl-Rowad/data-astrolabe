import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex as="nav" flex="1" padding="1.5rem" bg="#023E5B" color="white">
      <Flex align="center">
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          Data Astrolabe
        </Heading>
      </Flex>
    </Flex>
  )
}

export default Header
