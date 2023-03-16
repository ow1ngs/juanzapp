'use client'
import { Flex, Text } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'

interface ChatCardProps {
  displayName: string
  icon: string
  onClick: Function
}

export default function ChatCard({ displayName, icon, onClick }: ChatCardProps) {
  return (
    <Flex
      _hover={{ bg: 'brand.border', cursor: 'pointer' }}
      align="center"
      bg="brand.secondary"
      color="white"
      p={4}
      rounded={10}
      onClick={() => onClick()}
    >
      <Avatar marginEnd={3} src={icon} />
      <Text>{displayName}</Text>
    </Flex>
  )
}
