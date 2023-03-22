'use client'

import { Flex } from '@chakra-ui/layout'

import Sidebar from '../components/Sidebar'

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex flex={1}>
      <Sidebar />
      {children}
    </Flex>
  )
}
