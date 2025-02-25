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
import Masonry from 'react-masonry-css';
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { professionals, COLORS } from "@/lib/data";
import { useParams } from "next/navigation";
import Navbar from "@/components/header/navbar";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useEffect, useState } from "react";
import { DialogContent, DialogRoot } from "@/components/ui/dialog";
export default function InfoProfessional() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const params = useParams();
    const professional = professionals.find((p) => p.id === params.id);

    const colorMode = useColorModeValue("light", "dark");
    const cardBg = COLORS.cardBg[colorMode];
    const accentColor = COLORS.accentColor[colorMode];
    const navbarBg = COLORS.navbarBg[colorMode];
    const backgroundFrom = COLORS.background.from[colorMode];
    const backgroundTo = COLORS.background.to[colorMode];


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (!professional) {
        return (
            <Container maxW="container.xl" py={4}>
                <Heading>Profissional não encontrado</Heading>
            </Container>
        );
    }

        // Add this CSS near your imports
    const masonryStyles = {
    display: "flex",
    marginLeft: "-16px", // gutter size offset
    width: "auto"
    };


    const whatsappLink = `https://wa.me/${professional.phone.replace(/\D/g, "")}`;

    return (
        <Box
            width="full"
            minH="100vh"
            display="flex"
            flexDirection="column"
            bgGradient="to-r" gradientFrom={backgroundFrom} gradientTo={backgroundTo}
        >
            {/* Navbar */}
            <Box bg={navbarBg}>
                <Navbar />
            </Box>

            {/* Container principal */}
            <Container m={[0,12]} maxW={"fit-content"} p={4} flex="1">
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr", lg: "repeat(2, 1fr)" }}
                    gap={6}
                >
                    {/* Card 1: Informações Básicas */}
                    <GridItem colSpan={1}>
                        <Flex
                            direction="column"
                            bg={cardBg}
                            borderRadius="lg"
                            boxShadow="md"
                            p={4}
                            minH="fit-content"
                        >
                            <Flex mb={4} align="center" direction={{ base: "column", sm: "row" }}>
                                <Image
                                    src={professional.image}
                                    alt={professional.name}
                                    borderRadius="full"
                                    boxSize="80px"
                                    objectFit="cover"
                                    mb={{ base: 2, sm: 0 }}
                                    mr={{ sm: 3 }}
                                />
                                <VStack align="start" m={1}>
                                    <Heading size="sm" color={accentColor}>
                                        {professional.name}
                                    </Heading>
                                    <Text fontSize="xs">{professional.specialty}</Text>
                                    <HStack>
                                        <Icon as={FaMapMarkerAlt} boxSize="12px" color="gray.600" />
                                        <Text fontSize="xs">{professional.location}</Text>
                                    </HStack>
                                </VStack>
                            </Flex>

                            <VStack align="start" m={1}>
                                <HStack>
                                    <Icon as={FaPhone} boxSize="12px" color="gray.600" />
                                    <Text fontSize="xs">{professional.phone}</Text>
                                </HStack>
                                <HStack>
                                    <Icon as={FaEnvelope} boxSize="12px" color="gray.600" />
                                    <Text fontSize="xs">{professional.email}</Text>
                                </HStack>
                            </VStack>

                            <HStack mt={4} m={3}>
                                <Button size="xs" colorPalette="teal">
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

                            <Heading mt={4} size="xs">Horários de Atendimento</Heading>
                            {professional.schedule?.map((day, index) => (
                                <HStack key={index} justify="space-between" width="100%">
                                    <Text fontSize="xs" fontWeight="bold">
                                        {day.weekDay}:
                                    </Text>
                                    <Text fontSize="xs">{day.hours}</Text>
                                </HStack>
                            ))}

                            <Heading mt={4} size="xs">
                                Sobre {professional.name}
                            </Heading>
                            <Text fontSize="xs" textAlign="justify">
                                {professional.about}
                            </Text>
                        </Flex>
                    </GridItem>

                    {/* Card 2: Horários & Agenda */}
                    <GridItem colSpan=  {1}>
                        <VStack align="start" m={4} width="100%">

                            <Box width="100%" px={4} py={6}>
                                <Text fontSize="md" fontWeight="bold" mb={2} color={accentColor}>
                                    Atividades
                                </Text>
                                <Text fontSize="sm" mb={4}>
                                    {professional.weeklySchedule?.activities}
                                </Text>
                                    <DialogRoot placement={"center"} open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}
                                    >
                                            <Masonry
                                                breakpointCols={{
                                                    default: 3,
                                                    1024: 2,
                                                    700: 2,
                                                    500: 1
                                                }}
                                                className="masonry-grid"
                                                columnClassName="masonry-grid_column"
                                                style={masonryStyles}
                                            >
                                                {professional.weeklySchedule?.image.map((image, index) => (
                                                    <Box
                                                        key={index}
                                                        mb={4}
                                                        cursor="pointer"
                                                        onClick={() => setSelectedImage(image)}
                                                        borderRadius="md"
                                                        overflow="hidden"
                                                        transition="all 0.3s"
                                                        _hover={{
                                                            transform: "scale(1.02)",
                                                            boxShadow: "lg",
                                                        }}
                                                    >
                                                        <Image
                                                            src={image}
                                                            alt={`Imagem ${index + 1}`}
                                                            w="100%"
                                                            h="auto"
                                                            objectFit="cover"
                                                            loading="lazy"
                                                            borderRadius="md"
                                                        />
                                                    </Box>
                                                ))}
                                            </Masonry>
                                        <DialogContent
                                        >
                                            <Image
                                                src={selectedImage ?? undefined}
                                                alt="Galeria imagem"
                                                width="100%"
                                                height="auto"
                                                objectFit="contain"
                                            />
                                        </DialogContent>
                                    </DialogRoot>
                            </Box>
                        </VStack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
}
