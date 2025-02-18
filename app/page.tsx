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
  HStack,
  Icon,
  Button,
  Flex,
} from "@chakra-ui/react"
import Navbar from "@/components/navbar"
import { categories, CategoryEnum } from "@/lib/data"
import { useState } from "react"
import { LuHeart, LuStethoscope, LuUsers } from "react-icons/lu"
import ProfessionalGridDynamic from "@/components/professional-grid-dynamic"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryEnum>(CategoryEnum.TODAS)

  return (
    <Box minH="100vh" bg="white">
      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <Box
        position="relative"
        bg={"brand.tertiary"}
        py={{ base: 16, md: 28 }}
        color="white"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          bg="blackAlpha.600"
          zIndex={0}
        />
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 1, md: 2 }} m={8} alignItems="center">
            <VStack align="flex-start" m={6}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-14%20%C3%A0(s)%2009.46.14_26537de3.jpg-L4LVfevrgLEIqOMNqt0NOSPVQR5W3Q.jpeg"
                alt="Conect Saúde Logo"
                w="100px"
                borderRadius={"full"}
              />
              <Heading fontSize={{ base: "3xl", md: "5xl" }} lineHeight="shorter">
                Conectando você aos melhores profissionais de saúde
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} maxW="500px">
                Encontre especialistas qualificados perto de você e agende sua consulta de forma rápida e fácil.
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
                src="/assets/banner.webp"
                alt="Healthcare Professionals"
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

      {/* STATS SECTION */}
      <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} m={8}>
          {[
            { icon: LuUsers, title: "+1000", desc: "Profissionais cadastrados" },
            { icon: LuHeart, title: "+5000", desc: "Pacientes atendidos" },
            { icon: LuStethoscope, title: "+20", desc: "Especialidades" },
          ].map((stat, idx) => (
            <VStack
              key={idx}
              p={8}
              bg="gray.50"
              borderRadius="xl"
              boxShadow="md"
              align="center"
              m={4}
            >
              <Icon as={stat.icon} boxSize={12} color="brand.primary" />
              <Heading size="xl" color="brand.primary">
                {stat.title}
              </Heading>
              <Text color="gray.700" textAlign="center" fontSize="lg">
                {stat.desc}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>

      {/* PROFESSIONALS SECTION (Para clientes) */}
      <Container bg="gray.50" maxW="full">

        <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
          <VStack m={8}>
            <Box textAlign="center" maxW="700px">
              <Heading color="brand.primary" mb={4} fontSize={{ base: "2xl", md: "3xl" }}>
                Nossos Profissionais
              </Heading>
              <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
                Escolha entre diversas especialidades e encontre o profissional ideal para você.
              </Text>
            </Box>
            <Flex py={4} px={2} m={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" alignContent="center" flexWrap="wrap" w="full">
              <HStack overflowX="auto" py={4} px={2} m={4}>
                {categories.map((category) => (
                  <Box
                    key={category.id}
                    px={6}
                    py={2}
                    borderRadius="full"
                    bg={selectedCategory === category.id ? "brand.primary" : "gray.100"}
                    color={selectedCategory === category.id ? "white" : "brand.primary"}
                    cursor="pointer"
                    onClick={() => setSelectedCategory(category.id as CategoryEnum)}
                    transition="all 0.2s"
                    whiteSpace="nowrap"
                    _hover={{
                      bg: selectedCategory === category.id ? "brand.primary" : "gray.200",
                    }}
                  >
                    {category.name}
                  </Box>
                ))}
              </HStack>
              <Box mt={8}>
                <ProfessionalGridDynamic selectedCategory={selectedCategory} />
              </Box>
            </Flex>
          </VStack>
        </Container>
      </Container>
      {/* SEÇÃO PARA PROFISSIONAIS */}
      <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
        <VStack m={8}>
          <Box textAlign="center" maxW="700px">
            <Heading color="brand.primary" mb={4} fontSize={{ base: "2xl", md: "3xl" }}>
              Conecte-se sua carreira ao futuro
            </Heading>
            <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
              Amplie sua visibilidade, receba agendamentos online e tenha acesso a oportunidades exclusivas para crescer na sua carreira.
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
              <Icon as={LuUsers} boxSize={12} color="brand.primary" />
              <Heading size="md" color="brand.primary">
                Mais Visibilidade
              </Heading>
              <Text color="gray.700" textAlign="center">
                Aumente sua exposição e alcance novos pacientes.
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
              <Icon as={LuStethoscope} boxSize={12} color="brand.primary" />
              <Heading size="md" color="brand.primary">
                Agendamentos Online
              </Heading>
              <Text color="gray.700" textAlign="center">
                Receba consultas diretamente na plataforma com facilidade.
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
              <Icon as={LuHeart} boxSize={12} color="brand.primary" />
              <Heading size="md" color="brand.primary">
                Crescimento Profissional
              </Heading>
              <Text color="gray.700" textAlign="center">
                Faça parte de uma rede de profissionais e tenha acesso a oportunidades exclusivas.
              </Text>
            </VStack>
          </SimpleGrid>
          <Button
            size="lg"
            p={8}
            bg="brand.primary"
            color="white"
            _hover={{ bg: "brand.dark" }}
          >
            Cadastre-se como Profissional
          </Button>
        </VStack>
      </Container>
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
      {/* SEÇÃO DE PERGUNTAS FREQUENTES + CTA FINAL */}
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
                "Desde que me cadastrei, meus agendamentos cresceram exponencialmente. A plataforma é intuitiva e conectou-me a um público realmente qualificado."
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
                "O Conect Saúde abriu novas portas para minha carreira, proporcionando uma visibilidade incrível e oportunidades únicas."
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
                "A inovação e a praticidade do Conect Saúde revolucionaram a forma como gerencio meus agendamentos. Uma ferramenta indispensável para o sucesso."
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>


      {/* FOOTER SECTION */}
      <Box bg="gray.900" color="gray.300" py={8}>
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
            &copy; {new Date().getFullYear()} Conect Saúde. Todos os direitos reservados.
          </Text>
        </Container>
      </Box>
    </Box>
  )
}