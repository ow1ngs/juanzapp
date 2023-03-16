'use-client'
import { Flex } from '@chakra-ui/layout'
import { FormControl, Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/button'
import { AiOutlineSend } from 'react-icons/ai'
import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

import { db } from '@/firebaseconfig'

interface BottombarProps {
  email: string
  id: string
}

export default function Bottombar({ email, id }: BottombarProps) {
  const [input, setInput] = useState('')
  const sendMessage = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    await addDoc(collection(db, `chats/${id}/messages`), {
      text: input,
      sender: email,
      timestamp: serverTimestamp(),
      senderIcon: '',
    })
    setInput('')
  }

  return (
    <FormControl
      as="form"
      borderColor="brand.border"
      borderTop="1px solid"
      colorScheme={'brand.main'}
      p={3}
      onSubmit={(e: React.FormEvent<HTMLInputElement>) => {
        sendMessage(e)
      }}
    >
      <Flex direction="row">
        <Input
          autoComplete="off"
          border="1px solid"
          borderColor="brand.border"
          color="white"
          marginEnd={2}
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <IconButton
          aria-label="Send message..."
          border="1px solid"
          borderColor="brand.border"
          icon={<AiOutlineSend color="white" size="25px" />}
          type="submit"
          variant="ghost"
        />
      </Flex>
    </FormControl>
  )
}
