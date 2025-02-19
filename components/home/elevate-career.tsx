"use client"

import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    Button,
} from "@chakra-ui/react"

export default function ElevateCareerPage() {
    return (
        <Box minH="100vh" bg="white">

            {/* ELEVATE CAREER SECTION */}
            <Container bg="gray.50" maxW="full" py={{ base: 10, md: 16 }}>
                <VStack m={10}>
                    <Box textAlign="center" maxW="800px">
                        <Heading color="brand.primary" mb={4} fontSize={{ base: "2xl", md: "3xl" }}>
                            Eleve sua Carreira a um Novo Patamar
                        </Heading>
                        <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} lineHeight="1.6">
                            Imagine uma plataforma onde sua expertise é a estrela principal, abrindo portas para oportunidades exclusivas e parcerias que transformam o seu dia a dia. No Conect Saúde, cada agendamento se torna uma chance de ampliar seu alcance e reforçar sua reputação no mercado.
                            <br /><br />
                            Aqui, não se trata apenas de estar presente; trata-se de se destacar com uma experiência premium, onde a tecnologia e a inovação trabalham a seu favor. Você está a um passo de fazer parte de um ecossistema pensado para impulsionar seu sucesso profissional, conectando-o a um público ávido por qualidade e excelência.
                        </Text>
                    </Box>
                    <Box textAlign="center" maxW="800px">
                        <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} lineHeight="1.6">
                            Junte-se aos profissionais que já descobriram um novo mundo de possibilidades. Deixe sua marca, potencialize seus resultados e transforme cada consulta em uma experiência memorável. O futuro da saúde é agora, e ele começa com você.
                        </Text>
                    </Box>
                    <Button
                        size="lg"
                        p={8}
                        bg="brand.primary"
                        color="white"
                        _hover={{ bg: "brand.dark" }}
                    >
                        Cadastre-se aqui
                    </Button>
                </VStack>
            </Container>
        </Box>
    )
}