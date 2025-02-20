"use client"

import { useEffect, useState } from "react"
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("")

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <Box 
      display="flex"
      flexDirection="column"
      bg="gray.50"
      width="full"
    >
      <Box 
        as="footer"
        bg="gray.900"
        color="gray.300"
        py={8}
        width="100%"
        mt="auto"
      >
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} m={8}>
            <VStack align="flex-start" m={2}>
              <Heading size="md" color="white">
                Conect Saúde
              </Heading>
              <Text maxW="250px" fontSize="sm">
                Conectando você aos melhores profissionais de saúde.
              </Text>
            </VStack>
            <VStack align="flex-start" m={2}>
              <Heading size="md" color="white">
                Links Úteis
              </Heading>
              <Text fontSize="sm">Sobre Nós</Text>
              <Text fontSize="sm">Contato</Text>
              <Text fontSize="sm">Termos de Serviço</Text>
            </VStack>
            <VStack align="flex-start" m={2}>
              <Heading size="md" color="white">
                Siga-nos
              </Heading>
              <Text fontSize="sm">Facebook</Text>
              <Text fontSize="sm">Instagram</Text>
              <Text fontSize="sm">LinkedIn</Text>
            </VStack>
          </SimpleGrid>
          <Text textAlign="center" mt={8} fontSize="sm">
            &copy; {currentYear} Conect Saúde. Todos os direitos reservados.
          </Text>
        </Container>
      </Box>
    </Box>
  )
}