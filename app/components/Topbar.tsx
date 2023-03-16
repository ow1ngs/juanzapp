'use-client'
import { Flex, Heading } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'

interface TopbarProps {
  email: string
}

export default function Topbar({ email }: TopbarProps) {
  return (
    <Flex
      align="center"
      bg="brand.main"
      borderBottom="1px solid"
      borderColor="brand.border"
      h="81px"
      p={5}
      w="100%"
    >
      <Avatar marginEnd={3} src="" />
      <Heading color="white" size="sm">
        {email}
      </Heading>
    </Flex>
  )
}
