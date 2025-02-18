/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react";
import {
    Box,
    VStack,
    HStack,
    Heading,
    Button,
    TabsList,
    TabsTrigger,
    TabsContent,
    Input,
    Textarea,
    SimpleGrid,
    TabsRoot,
} from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";
import Navbar from "@/components/navbar";
import { Education } from "./Education";
import { ImageUpload } from "./ImageUpload";
import { Schedule } from "./Schedule";
import { SocialLinks } from "./SocialLinks";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function ProfilePage() {
    const [profile, setProfile] = useState<any>(null);

    const cardBg = useColorModeValue("white", "gray.800");
    const accentColor = useColorModeValue("brand.accent", "brand.accentDark");
    const cardShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setProfile(JSON.parse(storedUser));
        }
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(profile));
    };

    const inputStyles = {
        bg: cardBg,
        borderColor: "gray.200",
        _hover: { borderColor: "brand.primary" },
        _focus: { borderColor: "brand.primary", boxShadow: "0 0 0 3px rgba(66,153,225,0.6)" },
        p: 4,
        borderRadius: "md",
    };

    const cardStyles = {
        bg: useColorModeValue("white", "gray.800"),
        borderRadius: "2xl",
        boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        _hover: { transform: "translateY(-4px)", boxShadow: "0 15px 30px rgba(0,0,0,0.2)" },
    };

    if (!profile) return null;

    return (
        <Box minH="100vh" >
            <Navbar />
            <Box maxW="container.lg" mx="auto" py={12} px={{ base: 4, md: 8 }}>
                <form onSubmit={handleSubmit}>
                    <TabsRoot defaultValue="basic" variant="enclosed" colorScheme="brand">
                        <TabsList
                            mb={8}
                            bg={cardBg}
                            p={2}
                            borderRadius="lg"
                            boxShadow="sm"
                            gap={2}
                            flexWrap={{ base: "wrap", md: "nowrap" }}
                        >
                            <TabsTrigger
                                value="basic"
                                _selected={{ bg: "brand.primary", color: "white" }}
                                px={5}
                                py={3}
                                borderRadius="md"
                                flex="1"
                            >
                                Informações Básicas
                            </TabsTrigger>
                            {profile.type === "profissional" && (
                                <>
                                    <TabsTrigger
                                        value="professional"
                                        _selected={{ bg: "brand.primary", color: "white" }}
                                        px={5}
                                        py={3}
                                        borderRadius="md"
                                        flex="1"
                                    >
                                        Detalhes Profissionais
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="social"
                                        _selected={{ bg: "brand.primary", color: "white" }}
                                        px={5}
                                        py={3}
                                        borderRadius="md"
                                        flex="1"
                                    >
                                        Redes & Agenda
                                    </TabsTrigger>
                                </>
                            )}
                        </TabsList>

                        {/* Aba: Informações Básicas */}
                        <TabsContent value="basic">
                            <Box {...cardStyles} p={0}>
                                <Box bg="brand.primary" px={8} py={6}>
                                    <Heading size="md" color="white">
                                        Informações Básicas
                                    </Heading>
                                </Box>
                                <Box px={8} py={8}>
                                    <VStack m={8}>
                                        <ImageUpload
                                            value={profile.avatar}
                                            onChange={(url) =>
                                                setProfile({ ...profile, avatar: url })
                                            }
                                        />
                                        <Box w="full">
                                            <HStack m={6} wrap="wrap">
                                                {["name", "email"].map((field) => (
                                                    <Field.Root key={field} mb={4} flex="1">
                                                        <Field.Label fontSize="sm" color="gray.600" mb={2}>
                                                            {{
                                                                name: (
                                                                    <>
                                                                        <FaUser /> Nome
                                                                    </>
                                                                ),
                                                                email: (
                                                                    <>
                                                                        <FaEnvelope /> Email
                                                                    </>
                                                                ),
                                                            }[field]}
                                                        </Field.Label>
                                                        <Input
                                                            name={field}
                                                            value={profile[field]}
                                                            onChange={handleChange}
                                                            {...inputStyles}
                                                        />
                                                    </Field.Root>
                                                ))}
                                            </HStack>
                                        </Box>
                                    </VStack>
                                </Box>
                            </Box>
                        </TabsContent>

                        {/* Aba: Detalhes Profissionais */}
                        {profile.type === "profissional" && (
                            <TabsContent value="professional">
                                <Box {...cardStyles} mt={6}>
                                    <Box bg={accentColor} px={8} py={6} borderBottomWidth="1px">
                                        <Heading size="md">Detalhes Profissionais</Heading>
                                    </Box>
                                    <Box px={8} py={8}>
                                        <VStack m={8}>
                                            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                                                {[
                                                    { name: "specialty", icon: <FaUser />, label: "Especialidade" },
                                                    { name: "category", icon: <FaUser />, label: "Categoria" },
                                                    { name: "location", icon: <FaMapMarkerAlt />, label: "Localização" },
                                                    { name: "phone", icon: <FaPhone />, label: "Telefone" },
                                                ].map((field) => (
                                                    <Field.Root key={field.name} mb={4}>
                                                        <Field.Label fontSize="sm" color="gray.600" mb={2}>
                                                            {field.icon} {field.label}
                                                        </Field.Label>
                                                        <Input
                                                            name={field.name}
                                                            value={profile[field.name]}
                                                            onChange={handleChange}
                                                            {...inputStyles}
                                                        />
                                                    </Field.Root>
                                                ))}
                                            </SimpleGrid>
                                            <Field.Root mb={4}>
                                                <Field.Label fontSize="sm" color="gray.600" mb={2}>
                                                    Sobre
                                                </Field.Label>
                                                <Textarea
                                                    name="about"
                                                    value={profile.about}
                                                    onChange={handleChange}
                                                    {...inputStyles}
                                                    minH="120px"
                                                />
                                            </Field.Root>
                                            <Education
                                                value={profile.education || []}
                                                onChange={(education) =>
                                                    setProfile({ ...profile, education })
                                                }
                                            />
                                        </VStack>
                                    </Box>
                                </Box>
                            </TabsContent>
                        )}

                        {/* Aba: Redes Sociais & Agenda */}
                        {profile.type === "profissional" && (
                            <TabsContent value="social">
                                <Box {...cardStyles} mt={6}>
                                    <Box bg={cardShadow} px={8} py={6} borderBottomWidth="1px">
                                        <Heading size="md">Redes Sociais & Agenda</Heading>
                                    </Box>
                                    <Box px={8} py={8}>
                                        <VStack m={8}>
                                            <SocialLinks
                                                value={profile.social}
                                                onChange={(social) =>
                                                    setProfile({ ...profile, social })
                                                }
                                            />
                                            <Schedule
                                                value={profile.schedule || []}
                                                onChange={(schedule) =>
                                                    setProfile({ ...profile, schedule })
                                                }
                                            />
                                        </VStack>
                                    </Box>
                                </Box>
                            </TabsContent>
                        )}
                    </TabsRoot>

                    <Button
                        type="submit"
                        mt={8}
                        bg="brand.primary"
                        color="white"
                        size="lg"
                        width="full"
                        _hover={{ bg: "brand.dark" }}
                        _active={{ bg: "brand.tertiary" }}
                        shadow="md"
                        fontSize="md"
                    >
                        Salvar Alterações
                    </Button>
                </form>
            </Box>
        </Box>
    );
}
