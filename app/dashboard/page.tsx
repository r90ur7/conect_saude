"use client";

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    VStack,
    Flex,
    Button,
    Text,
    Icon,
    Input,
    Group,
} from "@chakra-ui/react";
import { FaClock, FaSearch, FaStar, FaUser } from "react-icons/fa";
import { professionals, categories, CategoryEnum } from "@/lib/data";
import ProfessionalCard from "@/components/professional-card";
import Navbar from "@/components/header/navbar";
import { InputGroup } from "@/components/ui/input-group";
import { useState, useMemo, useEffect } from "react";
import {
    PaginationRoot,
    PaginationPrevTrigger,
    PaginationPageText,
    PaginationNextTrigger,
} from "@/components/ui/pagination";
import React from "react";
import { useColorModeValue } from "@/components/ui/color-mode";

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
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleClearFilters = () => {
        setSearchTerm("");
        setSelectedCategory(CategoryEnum.TODAS);
        setCurrentPage(1);
    };

    // Variáveis para cores
    const sidebarBg = useColorModeValue("brand.primary", "brand.dark");
    const cardBg = useColorModeValue("white", "gray.800");
    const paginationBg = useColorModeValue("#ebf8ff", "#2a4365");

    return (
        <Box bgGradient="to-r" gradientFrom="gray.50" gradientTo="gray.100" minH="100vh" p={4}>
            <Box bg={sidebarBg} shadow="md" borderRadius="md" mb={8}>
                <Navbar />
            </Box>
            <Flex direction={{ base: "column", lg: "row" }} gap={4}>
                {/* Sidebar */}
                <Box
                    w={{ base: "100%", lg: "280px" }}
                    bg={sidebarBg}
                    borderRadius="xl"
                    p={6}
                    position={{ base: "static", lg: "sticky" }}
                    top="80px"
                    shadow="lg"
                >
                    <VStack align="stretch" gap={6}>
                        <Box>
                            <Heading size="sm" color="brand.primary" mb={2}>
                                FILTROS RÁPIDOS
                            </Heading>
                            <VStack align="stretch" gap={2}>
                                <Button
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    color="white"
                                    _hover={{ bg: "gray.100" }}
                                    transition="background 0.3s"
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedCategory(CategoryEnum.TODAS);
                                        setCurrentPage(1);
                                    }}
                                >
                                    <Icon as={FaStar} mr={2} /> Todos os Profissionais
                                </Button>
                                <Button
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    color="white"
                                    _hover={{ bg: "gray.100" }}
                                    transition="background 0.3s"
                                    onClick={() => {
                                        setSearchTerm("Hoje");
                                        setCurrentPage(1);
                                    }}
                                >
                                    <Icon as={FaClock} mr={2} /> Disponível Hoje
                                </Button>
                            </VStack>
                        </Box>
                        <Box>
                            <Heading size="sm" color="white" mb={2}>
                                CATEGORIAS
                            </Heading>
                            <VStack align="stretch" gap={2}>
                                {categories.slice(0, 7).map((category) => (
                                    <Button
                                        key={category.id}
                                        variant="ghost"
                                        justifyContent="flex-start"
                                        color="white"
                                        _hover={{ bg: "gray.100" }}
                                        transition="background 0.3s"
                                        onClick={() => {
                                            setSelectedCategory(category.id as CategoryEnum);
                                            setCurrentPage(1);
                                        }}
                                    >
                                        <Icon as={FaUser} mr={2} /> {category.name}
                                    </Button>
                                ))}
                            </VStack>
                        </Box>
                        <Box>
                            <Heading size="sm" color="white" mb={2}>
                                INFORMAÇÕES
                            </Heading>
                            <Text fontSize="sm" color="white">
                                Total de profissionais: {professionals.length}
                            </Text>
                            <Text fontSize="sm" color="white">
                                Categorias disponíveis: {categories.length}
                            </Text>
                        </Box>
                    </VStack>
                </Box>

                {/* Conteúdo principal */}
                <Container maxW="container.xl" bg="transparent" borderRadius="xl" p={8}>
                    <VStack align="stretch" gap={8}>
                        <Box bg={cardBg} p={6} borderRadius="xl" shadow="lg">
                            <Box textAlign="center" mb={6}>
                                <Heading color="blue.600" size="2xl" mb={2} fontFamily="Inter, sans-serif">
                                    Profissionais de Saúde
                                </Heading>
                                <Text color="gray.600" fontSize="lg">
                                    Encontre o profissional ideal para seu atendimento
                                </Text>
                            </Box>
                            <VStack gap={4}>
                                <Group>
                                    <InputGroup flex="1" startElement={<FaSearch />}>
                                        <Input
                                            size="lg"
                                            placeholder="Buscar por nome, especialidade ou localização..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            bg="gray.50"
                                            borderRadius="md"
                                            _placeholder={{ color: "gray.500", fontSize: "15px" }}
                                            _hover={{ bg: "gray.100", borderColor: "blue.300" }}
                                            _focus={{ bg: "white", borderColor: "blue.400", boxShadow: "outline" }}
                                        />
                                    </InputGroup>
                                </Group>
                                <Button
                                    onClick={handleClearFilters}
                                    variant="outline"
                                    colorScheme="blue"
                                    borderColor="blue.400"
                                    color="blue.400"
                                    _hover={{ bg: "blue.400", color: "white" }}
                                >
                                    Limpar
                                </Button>
                                {filteredProfessionals.length === 0 ? (
                                    <Text color="gray.500" textAlign="center" py={8}>
                                        Nenhum profissional encontrado com os filtros selecionados.
                                    </Text>
                                ) : (
                                    <Text color="gray.500" textAlign="center">
                                        {filteredProfessionals.length} profissionais encontrados
                                    </Text>
                                )}
                            </VStack>
                        </Box>

                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} m={6}>
                            {currentProfessionals.map((professional) => (
                                <ProfessionalCard key={professional.id} professional={professional} />
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
                                        display: "flex",
                                        gap: "1rem",
                                        alignItems: "center",
                                        padding: "1rem",
                                        backgroundColor: paginationBg,
                                        borderRadius: "0.5rem",
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
