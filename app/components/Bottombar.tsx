'use-client'
import { Flex } from '@chakra-ui/layout'
import { FormControl, Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/button'
import { AiOutlineSend } from 'react-icons/ai'

export default function Bottombar() {
  return (
    <FormControl bg="gray.700" borderColor="gray.300" borderTop="1px solid" p={3}>
      <Flex direction="row">
        <Input
          autoComplete="off"
          border="1px solid"
          borderColor="gray.300"
          color="white"
          marginEnd={2}
          placeholder="Type your message here..."
        />
        <IconButton
          aria-label="Send message..."
          border="1px solid"
          borderColor="gray.300"
          icon={<AiOutlineSend color="white" size="25px" />}
          type="submit"
          variant="ghost"
        />
      </Flex>
    </FormControl>
  )
}
