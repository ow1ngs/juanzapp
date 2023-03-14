'use client'
import { Flex, Text } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'

export default function ChatCard() {
  return (
    <Flex
      _hover={{ bg: "gray.500", cursor: "pointer" }}
      p={4}
      bg="gray.100"
      rounded={10}
      align="center"
    >
      <Avatar src="" marginEnd={3} />
      <Text>Hello</Text>
    </Flex>
  )
}