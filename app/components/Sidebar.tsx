'use client'

import { Flex, Text } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { Button, Stack } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/avatar'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiLogOut } from 'react-icons/bi'

import { auth } from '@/firebaseconfig'

import ChatCard from './ChatCard'

export default function Sidebar() {
  const [user] = useAuthState(auth)

  return (
    <Flex
      bg="gray.700"
      borderColor="gray.300"
      borderEnd="1px solid"
      direction="column"
      h="100vh"
      w="300px"
    >
      <Flex
        align="center"
        borderBottom="1px solid"
        borderColor="gray.300"
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
          onClick={() => signOut(auth)}
        />
      </Flex>

      <Button bg="gray.500" color="white" m={5} p={4}>
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
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
        </Stack>
      </Flex>
    </Flex>
  )
}
