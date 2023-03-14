'use client'
import { Center, Heading, Image, Button, Stack } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/layout";
import { GoMarkGithub } from "react-icons/go"
import { CgGoogle } from "react-icons/cg"
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebaseconfig";


export default function Login() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  console.log(error)

  return (
    <Center h="100vh" bgImage="background.jpg">
      <Flex
        w="500px"
        h="500px"
        align="center"
        direction="column"
        boxShadow="lg"
        bgColor="gray.900"
        rounded={25}
        border="1px solid" borderColor="gray.300"
      >
        <Flex direction="row" align="center" justify="center" w="100%" h="100px" p={4} m={7}>
          <Image src="juanzapp-logo.png" w="50px" h="50px" alt="Juanzapp Logo" rounded={15} m={2} />
          <Heading size="lg" color="white">JuanZapp</Heading>
        </Flex>
        <Stack spacing={10} w="100%" p={8} align="center">
          <Text size="sm" color="white">Sign In With Your Accounts!</Text>
          <Button
            leftIcon={<CgGoogle size="30px" color="white" />}
            w="100%"
            variant='outline'
            gap={5}
            color="white"
            p={6}
            onClick={() => signInWithGoogle(undefined, { prompt: "select_account" })}
          >
            Login With Google
          </Button>
          <Button
            leftIcon={<GoMarkGithub size="30px" color="white" />}
            w="100%"
            variant='outline'
            gap={5}
            color="white"
            p={6}
            onClick={() => signInWithGithub()}
          >
            Login With GitHub
          </Button>
        </Stack>
      </Flex>
    </Center>
  )
}