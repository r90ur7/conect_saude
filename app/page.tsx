/* eslint-disable react/no-unescaped-entities */
"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react"
import Navbar from "@/components/header/navbar"
import Footer from "@/components/footer/footer"
import { useColorModeValue } from "@/components/ui/color-mode";

export default function Home() {

  const bgColor = useColorModeValue("brand.tertiary", "brand.subdark");
  return (
    <Box bg="gray.50">
      <Navbar />
      <Box
        bg={bgColor}
        py={{ base: 16, md: 20 }}
        color="white"
      >
        <Box
          w="full"
          h="full"
          bg="blackAlpha.600"
          zIndex={0}
        />
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack w={"full"} pl={8} flexDirection={"row-reverse"} justifyContent={"start"} alignItems={"center"} align="center">
            <Heading color="green.100" fontSize={{ base: "3xl", md: "4xl" }} lineHeight="shorter" marginBottom="4">
              Connect Saúde
            </Heading>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-14%20%C3%A0(s)%2009.46.14_26537de3.jpg-L4LVfevrgLEIqOMNqt0NOSPVQR5W3Q.jpeg"
              alt="Conect Saúde Logo"
              w="100px"
              borderRadius={"full"}
            />
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2 }} m={8} mt={0} alignItems="center">
            <VStack align="flex-start" m={6}>

              <Heading fontSize={{ base: "3xl", md: "3xl" }} lineHeight="shorter">
                Conectando você aos melhores profissionais de saúde
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} maxW="500px">
                Encontre especialistas qualificados perto de você e agende  de forma rápida e fácil.
              </Text>
              <Button
                size="lg"
                bg="brand.primary"
                p={8}
                color="white"
                _hover={{ bg: "brand.dark" }}
              >
                Agende agora
              </Button>
            </VStack>
            <Box display={{ base: "none", md: "block" }} justifySelf="end">
              <Image
                src="/assets/banner.png"
                alt="Healthcare Professionals Illustration"
                borderRadius="xl"
                w="auto"
                h="auto"
                width={"35vw"}
                maxW="500px"
                objectFit="cover"
                shadow="lg"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}