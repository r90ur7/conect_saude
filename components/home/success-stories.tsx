"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
} from "@chakra-ui/react"

export default function SuccessStoriesPage() {
  return (
    <Box minH="100vh" bg="white">
      {/* SUCCESS STORIES SECTION */}
      <Container bg="gray.50" maxW="full" py={{ base: 10, md: 16 }}>
        <VStack m={10}>
          <Box textAlign="center" maxW="800px">
            <Heading color="brand.primary" mb={4} fontSize={{ base: "2xl", md: "3xl" }}>
              Histórias de Sucesso
            </Heading>
            <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} lineHeight="1.6">
              Veja como profissionais que se juntaram ao Conect Saúde transformaram suas carreiras. Depoimentos reais de sucesso que ilustram o poder de uma plataforma feita para impulsionar sua presença e resultados.
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} m={8}>
            <VStack
              p={8}
              bg="gray.50"
              borderRadius="xl"
              boxShadow="md"
              align="center"
              m={4}
            >
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
                alt="Depoimento 1"
                borderRadius="full"
                boxSize="80px"
                objectFit="cover"
              />
              <Heading size="sm" color="brand.primary">
                Dr. Carlos Santos
              </Heading>
              <Text color="gray.700" textAlign="center">
                &quot;Desde que me cadastrei, meus agendamentos cresceram exponencialmente. A plataforma é intuitiva e conectou-me a um público realmente qualificado.&quot;
              </Text>
            </VStack>
            <VStack
              p={8}
              bg="gray.50"
              borderRadius="xl"
              boxShadow="md"
              align="center"
              m={4}
            >
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                alt="Depoimento 2"
                borderRadius="full"
                boxSize="80px"
                objectFit="cover"
              />
              <Heading size="sm" color="brand.primary">
                Dra. Ana Silva
              </Heading>
              <Text color="gray.700" textAlign="center">
                &quot;O Conect Saúde abriu novas portas para minha carreira, proporcionando uma visibilidade incrível e oportunidades únicas.&quot;
              </Text>
            </VStack>
            <VStack
              p={8}
              bg="gray.50"
              borderRadius="xl"
              boxShadow="md"
              align="center"
              m={4}
            >
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d"
                alt="Depoimento 3"
                borderRadius="full"
                boxSize="80px"
                objectFit="cover"
              />
              <Heading size="sm" color="brand.primary">
                Dr. Roberto Oliveira
              </Heading>
              <Text color="gray.700" textAlign="center">
                &quot;A inovação e a praticidade do Conect Saúde revolucionaram a forma como gerencio meus agendamentos. Uma ferramenta indispensável para o sucesso.&quot;
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}