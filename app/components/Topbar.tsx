'use-client'
import { Flex, Heading } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'

export default function Topbar() {
  return (
    <Flex
      align="center"
      bg="gray.700"
      borderBottom="1px solid"
      borderColor="gray.300"
      h="81px"
      p={5}
      w="100%"
    >
      <Avatar marginEnd={3} src="" />
      <Heading color="white" size="sm">
        User@gmail.com
      </Heading>
    </Flex>
  )
}
