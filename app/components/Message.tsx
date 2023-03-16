'use-client'
import { Flex, Text } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'

interface MessageProps {
  isSender: boolean
  message: string
  icon: string
}

export default function Message({ isSender, message, icon }: MessageProps) {
  return (
    <Flex align="flex-end" alignSelf={isSender ? 'flex-end' : 'flex-start'} order={0}>
      <Flex order={isSender ? 2 : 1}>
        <Avatar m={1} size="xs" src={icon} />
      </Flex>
      <Flex
        bg={isSender ? 'green.100' : 'blue.100'}
        m={1}
        minWidth="100px"
        order={isSender ? 1 : 2}
        p={3}
        rounded={10}
        w="fit-content"
      >
        <Text>{message}</Text>
      </Flex>
    </Flex>
  )
}
