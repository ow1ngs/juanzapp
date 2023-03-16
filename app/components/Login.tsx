'use client'
import { Center, Heading, Image, Button, Stack } from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/layout'
import { GoMarkGithub } from 'react-icons/go'
import { CgGoogle } from 'react-icons/cg'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'

import { auth } from '@/firebaseconfig'

export default function Login() {
  const [signInWithGoogle] = useSignInWithGoogle(auth)
  const [signInWithGithub] = useSignInWithGithub(auth)

  return (
    <Center bgImage="background.jpg" h="100vh">
      <Flex
        align="center"
        bgColor="brand.main"
        border="1px solid"
        borderColor="brand.border"
        boxShadow="lg"
        direction="column"
        h="500px"
        rounded={25}
        w="500px"
      >
        <Flex align="center" direction="row" h="100px" justify="center" m={7} p={4} w="100%">
          <Image alt="Juanzapp Logo" h="50px" m={2} rounded={15} src="juanzapp-logo.png" w="50px" />
          <Heading color="white" size="lg">
            JuanZapp
          </Heading>
        </Flex>
        <Stack align="center" p={8} spacing={10} w="100%">
          <Text color="white" size="sm">
            Sign In With Your Accounts!
          </Text>
          <Button
            color="white"
            gap={5}
            leftIcon={<CgGoogle color="white" size="30px" />}
            p={6}
            variant="outline"
            w="100%"
            onClick={() => signInWithGoogle(undefined, { prompt: 'select_account' })}
          >
            Login With Google
          </Button>
          <Button
            color="white"
            gap={5}
            leftIcon={<GoMarkGithub color="white" size="30px" />}
            p={6}
            variant="outline"
            w="100%"
            onClick={() => signInWithGithub()}
          >
            Login With GitHub
          </Button>
        </Stack>
      </Flex>
    </Center>
  )
}
