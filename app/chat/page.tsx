'use client'

import { Flex } from '@chakra-ui/layout'

import Sidebar from '../components/Sidebar'

export default function Chat() {
  return (
    <Flex bg={'brand.main'} h="100vh">
      <Sidebar />

      <Flex bgImage="background.jpg" direction="column" flex={1} />
    </Flex>
  )
}
