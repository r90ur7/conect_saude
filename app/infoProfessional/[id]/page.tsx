"use client";

import {
    Box,
    Container,
    Grid,
    GridItem,
    VStack,
    HStack,
    Flex,
    Heading,
    Text,
    Image,
    Button,
    Icon,
    Link,
} from "@chakra-ui/react";
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { professionals } from "@/lib/data";
import { useParams } from "next/navigation";
import Navbar from "@/components/header/navbar";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function InfoProfessional() {
    const params = useParams();
    const professional = professionals.find((p) => p.id === params.id);

    const cardBg = useColorModeValue("whiteAlpha.900", "blackAlpha.700");
    const accentColor = useColorModeValue("brand.accent", "brand.accentDark");
    const navbarBg = useColorModeValue("brand.tertiary", "gray.800");

    if (!professional) {
        return (
            <Container maxW="container.xl" py={4}>
                <Heading>Profissional não encontrado</Heading>
            </Container>
        );
    }

    const whatsappLink = `https://wa.me/${professional.phone.replace(/\D/g, "")}`;

    return (
        <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            bgGradient="linear(to-b, gray.50, white)"
        >
            {/* Navbar */}
            <Box bg={navbarBg}>
                <Navbar />
            </Box>

            {/* Container principal */}
            <Container maxW="container.xl" flex="1" p={4}>
                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={4}
                    height="100%"
                >
                    {/* Card 1: Informações Básicas */}
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                        <Flex
                            direction="column"
                            bg={cardBg}
                            borderRadius="lg"
                            boxShadow="md"
                            p={4}
                            h="50%"
                            overflow="hidden"
                        >
                            <Flex mb={4} align="center">
                                <Image
                                    src={professional.image}
                                    alt={professional.name}
                                    borderRadius="full"
                                    boxSize="80px"
                                    objectFit="cover"
                                    mr={3}
                                />
                                <VStack align="start" m={1}>
                                    <Heading size="sm" color={accentColor}>
                                        {professional.name}
                                    </Heading>
                                    <Text fontSize="xs">{professional.specialty}</Text>
                                    <HStack m={1}>
                                        <Icon as={FaMapMarkerAlt} boxSize="12px" color="gray.600" />
                                        <Text fontSize="xs">{professional.location}</Text>
                                    </HStack>
                                </VStack>
                            </Flex>
                            <VStack m={1} align="start">
                                <HStack m={1}>
                                    <Icon as={FaPhone} boxSize="12px" color="gray.600" />
                                    <Text fontSize="xs">{professional.phone}</Text>
                                </HStack>
                                <HStack m={1}>
                                    <Icon as={FaEnvelope} boxSize="12px" color="gray.600" />
                                    <Text fontSize="xs">{professional.email}</Text>
                                </HStack>
                            </VStack>
                            <HStack m={2} mt={4}>
                                <Button size="xs" colorPalette={"teal"} ml={2}>
                                    <Link href={whatsappLink}>
                                        <Icon as={FaWhatsapp} boxSize="16px" color="green.500" />
                                    </Link>
                                    <Link href={whatsappLink}>WhatsApp</Link>
                                </Button>
                                {professional.social.instagram && (
                                    <Link href={professional.social.instagram}>
                                        <Icon as={FaInstagram} boxSize="16px" color="pink.400" />
                                    </Link>
                                )}
                                {professional.social.facebook && (
                                    <Link href={professional.social.facebook}>
                                        <Icon as={FaFacebook} boxSize="16px" color="blue.600" />
                                    </Link>
                                )}
                                {professional.social.linkedin && (
                                    <Link href={professional.social.linkedin}>
                                        <Icon as={FaLinkedin} boxSize="16px" color="blue.500" />
                                    </Link>
                                )}
                            </HStack>
                            <Heading size="xs" mb={1}>
                                Sobre {professional.name}
                            </Heading>
                            <Text m={2} fontSize="xs" textAlign="justify">
                                {professional.about}
                            </Text>
                            <VStack
                                align="start"
                                // bg={cardBg}
                                // borderRadius="lg"
                                // boxShadow="md"
                                p={4}
                                m={2}
                                // h="100%"
                                overflow="hidden"
                            >
                                {professional.education && (
                                    <VStack align="start" m={1} mt={2}>
                                        <Heading size="xs">Formação</Heading>
                                        {professional.education.map((edu, index) => (
                                            <Text key={index} fontSize="xx-small">
                                                • {edu}
                                            </Text>
                                        ))}
                                    </VStack>
                                )}
                            </VStack>
                        </Flex>
                    </GridItem>

                    {/* Card 2: Horários & Agenda */}
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                        <VStack
                            align="start"
                            bg={cardBg}
                            borderRadius="lg"
                            boxShadow="md"
                            p={4}
                            m={2}
                            h="50%"
                            overflow="hidden"
                        >
                            <Heading size="xs">Horários de Atendimento</Heading>
                            {professional.schedule?.map((day, index) => (
                                <HStack key={index} justify="space-between" width="100%">
                                    <Text fontSize="xs" fontWeight="bold">
                                        {day.weekDay}:
                                    </Text>
                                    <Text fontSize="xs">{day.hours}</Text>
                                </HStack>
                            ))}
                            <Heading size="xs" mt={2}>
                                Agenda Semanal
                            </Heading>
                            {professional.weeklySchedule?.map((activity, index) => (
                                <Box key={index} width="100%">
                                    <Text fontSize="xs" fontWeight="bold">
                                        {activity.day}
                                    </Text>
                                    <Text fontSize="xs">{activity.activities}</Text>
                                </Box>
                            ))}
                        </VStack>
                    </GridItem>

                    {/* Card 3: Galeria de fotos */}
                    {/* <GridItem colSpan={{ base: 1, md: 2 }}>
                        
                    </GridItem> */}
                </Grid>
            </Container>
        </Box>
    );
}