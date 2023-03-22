'use client'
import { Flex } from '@chakra-ui/layout'
import { usePathname } from 'next/navigation'
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore'
import { collection, doc, orderBy, query } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useRef } from 'react'

import Topbar from '@/app/components/Topbar'
import Bottombar from '@/app/components/Bottombar'
import Message from '@/app/components/Message'
import { auth, db } from '@/firebaseconfig'
import { getOtherEmailOrName } from '@/utils/getOtherEmailOrName'

export default function ChatId() {
  const [user] = useAuthState(auth)
  const pathName = usePathname()
  const id = pathName.split('/').at(-1)
  const queryMessage = query(collection(db, 'chats', id || '', 'messages'), orderBy('timestamp'))

  const [messages] = useCollectionData(queryMessage)
  const [chat] = useDocumentData(doc(db, 'chats', id || ''))
  const bottomOfChat = useRef<HTMLDivElement>(null)

  const getMessages = () => {
    return messages?.map((message) => {
      const sender = message.sender === user?.email

      return (
        <Message
          key={message.timestamp}
          icon={message.senderIcon}
          isSender={sender}
          message={message.text}
        />
      )
    })
  }

  useEffect(() => {
    const scrollIntoView = () => {
      if (bottomOfChat.current) {
        bottomOfChat.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    setTimeout(() => {
      scrollIntoView()
    }, 100)
  }, [messages])

  return (
    <Flex bgImage="../background.jpg" direction="column" flex={1}>
      <Topbar email={getOtherEmailOrName(chat?.users, user ? user : undefined)} />
      <Flex
        direction="column"
        flex={1}
        opacity="0.9"
        overflowY="scroll"
        p={3}
        sx={{
          '::-WebKit-scrollbar': { display: 'none' },
        }}
      >
        {getMessages()}
        <div ref={bottomOfChat} />
      </Flex>

      <Bottombar email={user?.email || ''} icon={user?.photoURL || ''} id={id || ''} />
    </Flex>
  )
}
