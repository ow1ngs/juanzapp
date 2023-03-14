'use client'
import { Flex, Text } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'

export default function ChatCard() {
  return (
    <Flex
      _hover={{ bg: 'gray.200', cursor: 'pointer' }}
      align="center"
      bg="gray.500"
      color="white"
      p={4}
      rounded={10}
    >
      <Avatar marginEnd={3} src="" />
      <Text>Hello</Text>
    </Flex>
  )
}
