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
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { professionals, categories, CategoryEnum } from "@/lib/data";
import ProfessionalCard from "@/components/professional-card";
import Navbar from "@/components/header/navbar";
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
    const paginationBg = useColorModeValue("#ebf8ff", "#2a4365");
    const backgrounfrom = useColorModeValue("gray.50", "gray.500");
    const backgrounto = useColorModeValue("gray.100", "gray.900");


    return (
        <Box bgGradient="to-r" gradientFrom={backgrounfrom} gradientTo={backgrounto} minH="100vh" p={4}>
            <Box bg={sidebarBg} shadow="md" borderRadius="md" mb={8}>
                <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
                            <Heading size="sm" color="light.snow" mb={2}>
                                FILTRE POR CATEGORIA
                            </Heading>
                            <VStack align="stretch" gap={2}>
                                <Button
                                    onClick={handleClearFilters}
                                    variant="outline"
                                    colorScheme="blue"
                                    borderColor="blue.400"
                                    color="blue.400"
                                    _hover={{ bg: "blue.400", color: "white" }}
                                >
                                    Limpar Filtros
                                </Button>
                            </VStack>
                        </Box>
                        <Box>
                            <Heading size="sm" color="white" mb={2}>
                                Exames
                            </Heading>
                            <VStack align="stretch" gap={2}>
                                {categories.slice(1, 11).map((category) => (
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
                    <VStack flexDirection={"row-reverse"} justifyContent={"space-between"} gap={4}>
                        <Box>
                            <Heading
                                color="blue.600"
                                size="xl"
                                mb={2}
                                fontFamily="Inter, sans-serif"
                                textAlign="right"
                            >
                                Profissionais de Saúde
                            </Heading>
                            <Text
                                color="gray.600"
                                fontSize="md"
                                textAlign="right"
                            >
                                Encontre o profissional ideal para seu atendimento
                            </Text>
                        </Box>
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
                    <VStack align="stretch" gap={8}>

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
