'use-client'
import { Flex, Text } from '@chakra-ui/layout'

interface MessageProps {
  isSender: boolean,
  message: string
}

export default function Message({ isSender, message }: MessageProps) {
  return (
    <Flex
      bg={isSender ? "green.100" : "blue.100"}
      minWidth="100px"
      m={1}
      p={3}
      alignSelf={isSender ? "flex-end" : "flex-start"}
      rounded={10}
      w="fit-content"
    >
      <Text>{message}</Text>
    </Flex>
  )
}