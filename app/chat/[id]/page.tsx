'use client'
import { Flex } from '@chakra-ui/layout'
import Sidebar from "@/app/components/Sidebar"
import Topbar from '@/app/components/Topbar'
import Bottombar from '@/app/components/Bottombar'
import Message from '@/app/components/Message'

export default function ChatId() {
  return (
    <Flex h="100vh">
      <Sidebar />

      <Flex
        flex={1}
        direction="column"
      >
        <Topbar />
        <Flex
          flex={1} direction="column"
          overflowY="scroll"
          p={3}
          sx={{
            "::-WebKit-scrollbar":
              { display: "none" }
          }}
        >
          <Message isSender={true} message="dummy Message For this" />
        </Flex>

        <Bottombar />
      </Flex>
    </Flex>
  )
}