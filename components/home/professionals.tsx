"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react"
import { categories, CategoryEnum } from "@/lib/data"
import { useState } from "react"
import ProfessionalGridDynamic from "@/components/professional-grid-dynamic"

export default function ProfessionalsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryEnum>(CategoryEnum.TODAS)

  return (
    <Box minH="100vh" bg="white">

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
    </Box>
  )
}