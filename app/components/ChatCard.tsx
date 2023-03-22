'use client'
import { Flex, Text } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'
import { BsFillTrashFill } from 'react-icons/bs'
import { IconButton } from '@chakra-ui/react'
import { deleteDoc, doc } from 'firebase/firestore'

import { db } from '@/firebaseconfig'

interface ChatCardProps {
  displayName: string
  icon: string
  onClick: Function
  id: string
}

export default function ChatCard({ displayName, icon, onClick, id }: ChatCardProps) {
  const deleteConversation = async (id: string) => {
    await deleteDoc(doc(db, `chats/${id}`))
  }

  return (
    <Flex
      _hover={{ bg: 'brand.border', cursor: 'pointer' }}
      bg="brand.secondary"
      color="white"
      justifyContent="space-between"
      p={3}
      rounded={10}
      onClick={() => onClick()}
    >
      <Flex align="center">
        <Avatar marginEnd={3} src={icon} />
        <Text>{displayName}</Text>
      </Flex>
      <Flex align="flex-end">
        <IconButton
          isRound
          _hover={{ background: 'transparent' }}
          aria-label="LogOut"
          icon={<BsFillTrashFill color="white" size="30px" />}
          size="xs"
          variant="ghost"
          onClick={() => {
            deleteConversation(id)
          }}
        />
      </Flex>
    </Flex>
  )
}
