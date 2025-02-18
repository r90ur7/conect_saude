"use client"

import {
    Box,
    Container,
    VStack,
    HStack,
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
    FaMapMarkerAlt
} from "react-icons/fa";
import { professionals } from "@/lib/data";
import { useParams } from "next/navigation";
import Navbar from "@/components/navbar";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function InfoProfessional() {
    const params = useParams();
    const professional = professionals.find(p => p.id === params.id);


    // Cores e estilos modernos usando hooks do Chakra UI
    const cardBg = useColorModeValue("whiteAlpha.900", "blackAlpha.700");
    const accentColor = useColorModeValue("brand.accent", "brand.accentDark");
    const cardShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    const navbarBg = useColorModeValue("brand.tertiary", "gray.800");

    if (!professional) {
        return (
            <Container maxW="container.xl" py={20}>
                <Heading>Profissional não encontrado</Heading>
            </Container>
        );
    }

    const whatsappLink = `https://wa.me/${professional.phone.replace(/\D/g, '')}`;

    return (
        <Box minH="100vh" bgGradient="linear(to-b, gray.50, white)">
            {/* Navbar */}
            <Box bg={navbarBg} boxShadow="sm">
                <Navbar />
            </Box>

            <Container maxW="container.xl" py={12}>
                <VStack m={8} align="stretch">
                    {/* Card do Profissional */}
                    <Box
                        bg={cardBg}
                        p={8}
                        borderRadius="2xl"
                        boxShadow={cardShadow}
                        transition="transform 0.2s"
                        _hover={{ transform: "scale(1.02)" }}
                    >
                        <HStack m={8} align="start">
                            <Image
                                src={professional.image}
                                alt={professional.name}
                                borderRadius="2xl"
                                w="300px"
                                h="300px"
                                objectFit="cover"
                                boxShadow="md"
                            />
                            <VStack m={4} align="start" flex={1}>
                                <Heading size="xl" color={accentColor}>
                                    {professional.name}
                                </Heading>
                                <Text fontSize="xl" fontWeight="semibold">
                                    {professional.specialty}
                                </Text>
                                <HStack m={3}>
                                    <Icon as={FaMapMarkerAlt} color="gray.600" />
                                    <Text>{professional.location}</Text>
                                </HStack>
                                <HStack m={3}>
                                    <Icon as={FaPhone} color="gray.600" />
                                    <Text>{professional.phone}</Text>
                                </HStack>
                                <HStack m={3}>
                                    <Icon as={FaEnvelope} color="gray.600" />
                                    <Text>{professional.email}</Text>
                                </HStack>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                >
                                    <Link href={whatsappLink} >
                                        <Icon as={FaWhatsapp} />
                                        Contatar via WhatsApp
                                    </Link>
                                </Button>
                            </VStack>
                        </HStack>
                    </Box>

                    {/* Redes Sociais */}
                    <Box
                        bg={cardBg}
                        p={8}
                        borderRadius="2xl"
                        boxShadow={cardShadow}
                        transition="transform 0.2s"
                        _hover={{ transform: "scale(1.02)" }}
                    >
                        <Heading size="md" mb={4}>Redes Sociais</Heading>
                        <HStack m={4}>
                            {professional.social.instagram && (
                                <Link href={professional.social.instagram}>
                                    <Button colorScheme="pink" variant="outline">
                                        <Icon as={FaInstagram} />
                                        Instagram
                                    </Button>
                                </Link>
                            )}
                            {professional.social.facebook && (
                                <Link href={professional.social.facebook}>
                                    <Button colorScheme="facebook" variant="outline">
                                        <Icon as={FaFacebook} />
                                        Facebook
                                    </Button>
                                </Link>
                            )}
                            {professional.social.linkedin && (
                                <Link href={professional.social.linkedin}>
                                    <Button colorScheme="linkedin" variant="outline">
                                        <Icon as={FaLinkedin} />
                                        LinkedIn
                                    </Button>
                                </Link>
                            )}
                        </HStack>
                    </Box>

                    {/* Horários de Atendimento */}
                    <Box
                        bg={cardBg}
                        p={8}
                        borderRadius="2xl"
                        boxShadow={cardShadow}
                        transition="transform 0.2s"
                        _hover={{ transform: "scale(1.02)" }}
                    >
                        <Heading size="md" mb={4}>Horários de Atendimento</Heading>
                        <VStack m={2} align="start">
                            {professional.schedule?.map((day, index) => (
                                <HStack key={index} justify="space-between" w="full" maxW="400px">
                                    <Text fontWeight="bold">{day.weekDay}:</Text>
                                    <Text>{day.hours}</Text>
                                </HStack>
                            ))}
                        </VStack>
                    </Box>

                    {/* Agenda Semanal */}
                    <Box
                        bg={cardBg}
                        p={8}
                        borderRadius="2xl"
                        boxShadow={cardShadow}
                        transition="transform 0.2s"
                        _hover={{ transform: "scale(1.02)" }}
                    >
                        <Heading size="md" mb={4}>Agenda Semanal</Heading>
                        <VStack m={4} align="start">
                            {professional.weeklySchedule?.map((activity, index) => (
                                <Box key={index}>
                                    <Text fontWeight="bold">{activity.day}</Text>
                                    <Text>{activity.activities}</Text>
                                </Box>
                            ))}
                        </VStack>
                    </Box>

                    {/* Sobre o Profissional */}
                    <Box
                        bg={cardBg}
                        p={8}
                        borderRadius="2xl"
                        boxShadow={cardShadow}
                        transition="transform 0.2s"
                        _hover={{ transform: "scale(1.02)" }}
                    >
                        <Heading size="md" mb={4}>Sobre {professional.name}</Heading>
                        <Text whiteSpace="pre-wrap" mb={4}>
                            {professional.about}
                        </Text>
                        {professional.education && (
                            <VStack m={2} align="start">
                                <Heading size="sm">Formação</Heading>
                                {professional.education.map((edu, index) => (
                                    <Text key={index}>• {edu}</Text>
                                ))}
                            </VStack>
                        )}
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
}