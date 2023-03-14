'use-client'
import { Flex } from '@chakra-ui/layout'
import { FormControl, Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/button'
import { AiOutlineSend } from 'react-icons/ai';

export default function Bottombar() {
  return (

    <FormControl
      p={3}
      borderTop="1px solid"
      borderColor="gray.300"
      bg="gray.100"
    >
      <Flex direction="row">
        <Input
          placeholder='Type your message here...'
          border="1px solid"
          borderColor="gray.300"
          marginEnd={2}
          autoComplete="off"
        />
        <IconButton
          icon={<AiOutlineSend />}
          type="submit"
          aria-label='Send message...'
          border="1px solid"
          borderColor="gray.300"
        />
      </Flex>
    </FormControl>
  )
}