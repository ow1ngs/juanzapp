'use client'
import { Flex, Text } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { Button, Stack } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/avatar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiLogOut } from 'react-icons/bi'
import { signOut } from 'firebase/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, addDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'

import { auth, db } from '@/firebaseconfig'
import { getOtherEmailOrName } from '@/utils/getOtherEmailOrName'

import ChatCard from './ChatCard'

interface Chat {
  id: string
  users: Array<string>
}

export default function Sidebar() {
  const defaultChat: Chat[] = [
    {
      id: '0',
      users: [''],
    },
  ]
  const [user] = useAuthState(auth)
  const [snapshot] = useCollection(collection(db, 'chats'))

  const chatExists = (email: string) => {
    chats?.find((chat) => chat.users.includes(user?.email || '') && chat.users.includes(email))
  }

  const newChat = async () => {
    const input = prompt('Enter email of chat recipient')

    if (!chatExists && user?.email !== input)
      await addDoc(collection(db, 'chats'), { users: [user?.email, input] })
  }
  const chats: Chat[] =
    snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Chat)) || defaultChat

  const router = useRouter()
  const redirect = (id: string) => {
    router.push(`/chat/${id}`)
  }

  return (
    <Flex
      bg="brand.main"
      borderColor="brand.border"
      borderEnd="1px solid"
      direction="column"
      h="100vh"
      w="300px"
    >
      <Flex
        align="center"
        borderBottom="1px solid"
        borderColor="brand.border"
        h="81px"
        justifyContent="space-between"
        p={3}
        w="100%"
      >
        <Flex align="center">
          <Avatar marginEnd={3} src={user?.photoURL || ''} />
          <Text color="white">{user?.displayName || user?.email}</Text>
        </Flex>
        <IconButton
          isRound
          aria-label="LogOut"
          icon={<BiLogOut color="white" size="30px" />}
          variant="ghost"
          onClick={() => {
            signOut(auth)
            router.push('/')
          }}
        />
      </Flex>

      <Button color="white" colorScheme={'whatsapp'} m={5} p={4} onClick={() => newChat()}>
        New Chat
      </Button>

      <Flex
        direction="column"
        flex={1}
        overflowY="scroll"
        p={2}
        sx={{
          '::-WebKit-scrollbar': { display: 'none' },
        }}
      >
        <Stack spacing={2}>
          {user &&
            chats
              ?.filter((chat) => chat.users.includes(user.email || ''))
              .map((chat: Chat) => (
                <ChatCard
                  key={chat.id}
                  displayName={getOtherEmailOrName(chat.users, user ? user : undefined)}
                  icon=""
                  onClick={() => redirect(chat.id)}
                />
              ))}
        </Stack>
      </Flex>
    </Flex>
  )
}
