'use client'

import { Flex, Text } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { Button, Stack } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/avatar'

import { signOut } from 'firebase/auth'
import { auth } from '@/firebaseconfig'
import { useAuthState } from 'react-firebase-hooks/auth';

import { AiOutlineLogout } from 'react-icons/ai';
import ChatCard from './ChatCard'

export default function Sidebar() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <Flex
      w="300px" h="100vh"
      borderEnd="1px solid" borderColor="gray.300"
      direction="column"
    >

      <Flex
        h="81px" w="100%"
        align="center"
        justifyContent="space-between"
        borderBottom="1px solid" borderColor="gray.300"
        p={3}
      >
        <Flex
          align="center"
        >
          <Avatar src={user?.photoURL || ""} marginEnd={3} />
          <Text>{user?.displayName}</Text>
        </Flex>
        <IconButton
          icon={<AiOutlineLogout size="30px" />}
          aria-label='LogOut' isRound
          onClick={() => signOut(auth)}
        />
      </Flex>

      <Button m={5} p={4}>
        New Chat
      </Button>

      <Flex
        direction="column"
        p={2}
        flex={1}
        overflowY="scroll"
        sx={{
          "::-WebKit-scrollbar":
            { display: "none" }
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
};

