"use client";

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    VStack,
    HStack,
    Flex,
    Button,
    Text,
    Icon,
    Input,
    Group,
    InputAddon,
} from "@chakra-ui/react";
import { FaClock, FaSearch, FaStar, FaUser } from "react-icons/fa";
import { professionals, categories, CategoryEnum } from "@/lib/data";
import ProfessionalCard from "@/components/professional-card";
import Navbar from "@/components/navbar";
import { useState, useMemo, useEffect } from "react";
import {
    PaginationRoot,
    PaginationPrevTrigger,
    PaginationPageText,
    PaginationNextTrigger,
} from "@/components/ui/pagination";
import React from "react";

const ITEMS_PER_PAGE = 6;

export default function DashboardPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<CategoryEnum>(CategoryEnum.TODAS);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProfessionals = useMemo(() => {
        return professionals.filter((professional) => {
            const matchesSearch =
                professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                professional.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                professional.location.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory =
                selectedCategory === CategoryEnum.TODAS ||
                professional.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    const totalPages = Math.max(1, Math.ceil(filteredProfessionals.length / ITEMS_PER_PAGE));
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [totalPages, currentPage]);

    const currentProfessionals = filteredProfessionals.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (nextPage: number) => {
        setCurrentPage(nextPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleClearFilters = () => {
        setSearchTerm("");
        setSelectedCategory(CategoryEnum.TODAS);
        setCurrentPage(1);
    };

    return (
        <Box minH="100vh" bg={"gray.50"} bgGradient="linear(to-br, var(--chakra-colors-brand-primary), var(--chakra-colors-brand-primary))" p={4}>
            <Box bg="brand.tertiary" shadow="md" borderRadius="md" mb={8}>
                <Navbar />
            </Box>
            <Flex direction={{ base: "column", lg: "row" }} gap={4}>
                {/* Sidebar */}
                <Box
                    w={{ base: "100%", lg: "280px" }}
                    bg="brand.tertiary"
                    borderRadius="xl"
                    p={6}
                    position={{ base: "static", lg: "sticky" }}
                    top="80px"
                    shadow="lg"
                >
                    <VStack align="stretch" m={6} color="white">
                        <Box>
                            <Heading size="sm" color="gray.300" mb={2}>FILTROS RÁPIDOS</Heading>
                            <VStack align="stretch">
                                <Button
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    color="white"
                                    _hover={{ bg: 'brand.dark' }}
                                    transition="background 0.3s"
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedCategory(CategoryEnum.TODAS);
                                        setCurrentPage(1);
                                    }}
                                >
                                    <Icon as={FaStar} /> Todos os Profissionais
                                </Button>
                                <Button
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    color="white"
                                    _hover={{ bg: 'brand.dark' }}
                                    transition="background 0.3s"
                                    onClick={() => {
                                        setSearchTerm("Hoje");
                                        setCurrentPage(1);
                                    }}
                                >
                                    <Icon as={FaClock} /> Disponível Hoje
                                </Button>
                            </VStack>
                        </Box>
                        <Box>
                            <Heading size="sm" color="gray.300" mb={2}>CATEGORIAS</Heading>
                            <VStack align="stretch">
                                {categories.slice(0, 7).map((category) => (
                                    <Button
                                        key={category.id}
                                        variant="ghost"
                                        justifyContent="flex-start"
                                        color="white"
                                        _hover={{ bg: 'brand.dark' }}
                                        transition="background 0.3s"
                                        onClick={() => {
                                            setSelectedCategory(category.id as CategoryEnum);
                                            setCurrentPage(1);
                                        }}
                                    >
                                        <Icon as={FaUser} /> {category.name}
                                    </Button>
                                ))}
                            </VStack>
                        </Box>
                        <Box>
                            <Heading size="sm" color="gray.300" mb={2}>INFORMAÇÕES</Heading>
                            <Text fontSize="sm" color="gray.300">
                                Total de profissionais: {professionals.length}
                            </Text>
                            <Text fontSize="sm" color="gray.300">
                                Categorias disponíveis: {categories.length}
                            </Text>
                        </Box>
                    </VStack>
                </Box>

                {/* Conteúdo principal */}
                <Container maxW="container.xl" bg="transparent" borderRadius="xl" p={8}>
                    <VStack align="stretch">

                        <Box bg="brand.tertiary" p={6} borderRadius="xl" shadow="lg">
                            <Box textAlign="center">
                                <Heading color="white" size="2xl" mb={2} fontFamily="Geist Mono">
                                    Profissionais de Saúde
                                </Heading>
                                <Text color="gray.800" fontSize="lg">
                                    Encontre o profissional ideal para seu atendimento
                                </Text>
                            </Box>
                            <VStack>
                                <HStack m={4} wrap="wrap">
                                    <HStack flexDirection={{ base: "column", md: "column" }} wrap="wrap" gap={4} w="full">
                                        <Group
                                            attached
                                            flex={1}
                                            minW={{ base: "100%", md: "320px" }}
                                            position="relative"
                                            overflow="hidden"
                                            borderRadius="md"
                                            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                                        >
                                            <InputAddon
                                                variant={"flushed"}
                                                border="none"
                                                color="gray.300"
                                                p={4}
                                                transition="all 0.3s ease"
                                                bg={"blackAlpha.300"}
                                            >
                                                <FaSearch size={10} />
                                            </InputAddon>
                                            <Input
                                                placeholder="Buscar por nome, especialidade ou localização..."
                                                value={searchTerm}
                                                variant={"flushed"}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                color="gray.300"
                                                w={"16vw"}
                                                p={6}
                                                bg={"blackAlpha.300"}
                                                _placeholder={{ color: "whites.ghost" }}
                                                borderColor="transparent"
                                                _hover={{
                                                    bg: "gray.600",
                                                    borderColor: "brand.400"
                                                }}
                                                _focus={{
                                                    bg: "gray.600",
                                                    borderColor: "brand.500",
                                                    boxShadow: "0 0 0 2px var(--chakra-colors-brand-500)"
                                                }}
                                                transition="all 0.3s ease"
                                            />
                                        </Group>

                                        {/* <NativeSelect.Root>
                                            <NativeSelect.Field
                                                value={selectedCategory}
                                                onChange={(e) => setSelectedCategory(e.target.value as CategoryEnum)}
                                                style={{
                                                    backgroundColor: "var(--chakra-colors-gray-600)",
                                                    color: "white",
                                                    borderColor: "var(--chakra-colors-gray-500)",
                                                    minWidth: "200px",
                                                    padding: "8px",
                                                    borderRadius: "4px"
                                                }}
                                            >
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </NativeSelect.Field>
                                        </NativeSelect.Root> */}
                                        <Button
                                            onClick={handleClearFilters}
                                            variant="outline"
                                            colorScheme="brand"
                                            borderColor="brand.500"
                                            color="brand.400"
                                            _hover={{ bg: "brand.500", color: "white" }}
                                        >
                                            Limpar
                                        </Button>
                                    </HStack>
                                </HStack>

                                {filteredProfessionals.length === 0 ? (
                                    <Text color="gray.300" textAlign="center" py={8}>
                                        Nenhum profissional encontrado com os filtros selecionados.
                                    </Text>
                                ) : (
                                    <Text color="gray.300" textAlign="center">
                                        {filteredProfessionals.length} profissionais encontrados
                                    </Text>
                                )}
                            </VStack>
                        </Box>

                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
                            {currentProfessionals.map((professional) => (
                                <ProfessionalCard
                                    key={professional.id}
                                    professional={professional}
                                />
                            ))}
                        </SimpleGrid>

                        {filteredProfessionals.length > ITEMS_PER_PAGE && (
                            <Box display="flex" justifyContent="center" mt={8}>
                                <PaginationRoot
                                    variant="outline"
                                    count={filteredProfessionals.length}
                                    page={currentPage}
                                    pageSize={ITEMS_PER_PAGE}
                                    defaultPage={1}
                                    style={{
                                        display: 'flex',
                                        gap: '1rem',
                                        alignItems: 'center',
                                        padding: '1rem',
                                        backgroundColor: 'var(--chakra-colors-brand-primary)',
                                        borderRadius: '0.5rem'
                                    }}
                                >
                                    <PaginationPrevTrigger
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    />
                                    <PaginationPageText />
                                    <PaginationNextTrigger
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    />
                                </PaginationRoot>
                            </Box>
                        )}
                    </VStack>
                </Container>
            </Flex>
        </Box>
    );
}
