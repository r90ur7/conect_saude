"use client"

import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Button,
} from "@chakra-ui/react"

export default function FAQPage() {
    return (
        <Box minH="100vh" bg="white">
            <Box bg="gray.900" color="gray.100" py={{ base: 10, md: 16 }}>
                <Container maxW="container.xl">
                    {/* FAQ */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} m={8} mb={12}>
                        <VStack align="flex-start" m={4}>
                            <Heading size="md" color="white">
                                Por que o Conect Saúde é diferente?
                            </Heading>
                            <Text color="gray.300">
                                Nossa plataforma foi projetada para otimizar seu tempo e facilitar o agendamento de consultas, permitindo que você foque no que mais importa: o bem-estar dos pacientes.
                            </Text>
                        </VStack>
                        <VStack align="flex-start" m={4}>
                            <Heading size="md" color="white">
                                Preciso ter conhecimentos técnicos?
                            </Heading>
                            <Text color="gray.300">
                                Não se preocupe! Nossa interface é intuitiva e você consegue configurar tudo em poucos cliques, sem precisar de experiência avançada em tecnologia.
                            </Text>
                        </VStack>
                        <VStack align="flex-start" m={4}>
                            <Heading size="md" color="white">
                                Como personalizo meu perfil?
                            </Heading>
                            <Text color="gray.300">
                                Você pode incluir informações sobre suas especialidades, imagens, depoimentos e até materiais informativos, tudo para evidenciar seu trabalho e atrair mais pacientes.
                            </Text>
                        </VStack>
                        <VStack align="flex-start" m={4}>
                            <Heading size="md" color="white">
                                Quais são os custos envolvidos?
                            </Heading>
                            <Text color="gray.300">
                                Oferecemos planos flexíveis para diferentes necessidades e portes de consultório. Fale conosco para descobrir qual opção melhor se encaixa no seu perfil.
                            </Text>
                        </VStack>
                    </SimpleGrid>

                    <Text textAlign="center" mb={8} color="gray.400">
                        Ainda tem dúvidas?{" "}
                        <Text as="span" color="brand.primary" cursor="pointer">
                            Entre em contato
                        </Text>
                    </Text>

                    {/* CTA FINAL */}
                    <Box textAlign="center" bg="gray.800" p={8} borderRadius="xl">
                        <Heading color="white" size="lg" mb={2}>
                            Pronto para impulsionar sua carreira?
                        </Heading>
                        <Text color="gray.300" mb={6}>
                            Não deixe que os desafios do dia a dia limitem seu potencial. O Conect Saúde é o parceiro que vai além de uma simples plataforma: estamos aqui para ajudar você a crescer.
                        </Text>
                        <Button
                            size="lg"
                            p={8}
                            bg="brand.primary"
                            color="white"
                            _hover={{ bg: "brand.dark" }}
                        >
                            Experimente agora!
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}