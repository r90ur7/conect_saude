/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
    Box,
    VStack,
    Heading,
    Text,
    Tabs,
    HStack,
    useDisclosure,
} from "@chakra-ui/react";
import UserForm from "./components/UserForm";
import { useState } from "react";
import RegisterTabs from "./professional/register";

const Register = () => {
    const { onClose } = useDisclosure();
    const [user, setUser] = useState<any>(null);
    const [loggedUser, setLoggedUser] = useState<any>(null);

    console.log(user);
    console.log(loggedUser);
    return (
        <VStack w="full">
            <Box textAlign="center">
                <Heading color="brand.primary" size="xl" mb={2}>
                    Criar Conta
                </Heading>
                <Text color="gray.600" fontSize="md">
                    Escolha o tipo de conta que melhor se adequa a você
                </Text>
            </Box>

            <Box w="full">
                <Tabs.Root defaultValue="user" w="full">
                    <HStack justify="center" mb={8}>
                        <Tabs.Trigger
                            value="user"
                            px={6}
                            py={2}
                            borderRadius="12px"
                            bg="white"
                            color="brand.primary"
                            fontFamily="Geist Mono"
                            textAlign={"center"}
                            textWrap={"wrap"}
                            _selected={{ bg: "brand.primary", color: "white" }}
                        >
                            <Text fontSize={"xs"}>Sou Cliente</Text>
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="professional"
                            px={6}
                            py={2}
                            borderRadius="12px"
                            bg="white"
                            textAlign={"center"}
                            textWrap={"wrap"}
                            color="brand.primary"
                            fontFamily="Geist Mono"
                            _selected={{ bg: "brand.primary", color: "white" }}
                        >
                            <Text fontSize={"xs"}>Sou Profissional</Text>
                        </Tabs.Trigger>
                    </HStack>
                    <Tabs.Content value="user">
                        <UserForm />
                    </Tabs.Content>
                    <Tabs.Content value="professional">
                        <RegisterTabs 
                            setLoggedUser={setLoggedUser}
                            onClose={onClose}
                            onRegister={setUser}
                        />
                    </Tabs.Content>
                </Tabs.Root>
            </Box>
        </VStack>
    );
};

export default Register;
