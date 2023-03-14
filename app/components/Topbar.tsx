'use-client'
import { Flex, Heading } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'

export default function Topbar() {
  return (
    <Flex
      align="center"
      bg="gray.100"
      h="81px"
      p={5}
      w="100%"
    >
      <Avatar src="" marginEnd={3} />
      <Heading size="sm">User@gmail.com</Heading>
    </Flex>
  )
} 