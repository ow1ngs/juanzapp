'use client'
import Head from 'next/head'
import { Center, Spinner } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '@/firebaseconfig'

import Login from './components/Login'
import ChatLayout from './chat/layout'
import Chat from './chat/page'

export default function Home() {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    )
  }

  if (!user) {
    return (
      <>
        <Head>
          <title>JuanZapp</title>
        </Head>
        <Login />
      </>
    )
  }

  return (
    <ChatLayout>
      <Chat />
    </ChatLayout>
  )
}
