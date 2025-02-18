/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
    Tabs,
    Button,
    VStack,
    Heading,
    Box,
    Input,
    TabsList,
    Field,
    NativeSelect
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock, FaStethoscope } from "react-icons/fa";
import { toaster } from "@/components/ui/toaster";

// Define the form data types
interface UserFormData {
    accountType: string;
    name: string;
    email: string;
    password: string;
}

interface ProFormData extends UserFormData {
    category: string;
}

/**
 * Componente de cadastro com duas subabas: Usuário e Profissional.
 * A especialidade (category) só é obrigatória se o accountType for "profissional".
 */
export default function RegisterTabs({
    onRegister,
    onClose,
    setLoggedUser
}: {
    onRegister: (user: any) => void;
    onClose: () => void;
    setLoggedUser: (user: any) => void;
}) {
    const [isLoading, setIsLoading] = useState(false);

    // Formulário para usuários comuns
    const {
        register: registerUser,
        handleSubmit: handleSubmitUser,
        formState: { errors: errorsUser },
    } = useForm<UserFormData>({
        defaultValues: {
            accountType: "usuario",
        },
    });

    console.log(isLoading);

    // Formulário para profissionais
    const {
        register: registerPro,
        handleSubmit: handleSubmitPro,
        formState: { errors: errorsPro },
    } = useForm<ProFormData>({
        defaultValues: {
            accountType: "profissional",
        },
    });

    const onSubmitUser = async (data: any) => {
        setIsLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const newUser = {
                name: data.name,
                email: data.email,
                password: data.password,
                type: "usuario",
                avatar: "https://i.pravatar.cc/150?img=4",
                category: null,
            };

            localStorage.setItem("user", JSON.stringify(newUser));
            setLoggedUser(newUser);

            toaster.create({
                title: "Cadastro realizado!",
                description: "Sua conta foi criada com sucesso.",
                duration: 3000,
            });
            onRegister(newUser);
            onClose();
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmitPro = async (data: ProFormData) => {
        if (!data.category) {
            toaster.create({
                title: "Erro no cadastro",
                description: "Por favor, selecione uma especialidade",
                duration: 3000,
            });
            return;
        }

        setIsLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const newUser = {
                name: data.name,
                email: data.email,
                password: data.password,
                type: "profissional",
                avatar: "https://i.pravatar.cc/150?img=5",
                category: data.category,
            };

            localStorage.setItem("user", JSON.stringify(newUser));
            setLoggedUser(newUser);

            toaster.create({
                title: "Cadastro realizado!",
                description: "Sua conta foi criada com sucesso.",
                duration: 3000,
            });
            onRegister(newUser);
            onClose();
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box w="100%" p={4} color="white">
            <Heading size="md" mb={4}>
                Escolha seu tipo de conta
            </Heading>

            <Tabs.Root defaultValue="usuario" fitted>
                <TabsList mb={6}>
                    <Tabs.Trigger
                        value="usuario"
                        _selected={{ color: "brand.400", borderColor: "brand.400" }}
                        color="white"
                    >
                        Usuário
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value="profissional"
                        _selected={{ color: "brand.400", borderColor: "brand.400" }}
                        color="white"
                    >
                        Profissional
                    </Tabs.Trigger>
                </TabsList>

                {/* Aba de Usuário */}
                <Tabs.Content value="usuario">
                    <form onSubmit={handleSubmitUser(onSubmitUser)}>
                        <VStack m={4}>
                            {/* Nome */}
                            <Field.Root invalid={!!errorsUser.name}>
                                <Field.Label color="white">
                                    <FaUser style={{ marginRight: 8 }} />
                                    Nome Completo
                                </Field.Label>
                                <Input
                                    placeholder="Digite seu nome completo"
                                    // focusBorderColor="brand.400"
                                    bg="gray.700"
                                    color="white"
                                    _placeholder={{ color: "gray.400" }}
                                    borderColor="gray.600"
                                    {...registerUser("name", { required: "Nome é obrigatório" })}
                                />
                                {errorsUser.name && (
                                    <Field.ErrorText color="red.300">
                                        {errorsUser.name.message as string}
                                    </Field.ErrorText>
                                )}
                            </Field.Root>

                            {/* Email */}
                            <Field.Root invalid={!!errorsUser.email}>
                                <Field.Label color="white">
                                    <FaEnvelope style={{ marginRight: 8 }} />
                                    Email
                                </Field.Label>
                                <Input
                                    type="email"
                                    placeholder="exemplo@clinica.com"
                                    // focusBorderColor="brand.400"
                                    bg="gray.700"
                                    color="white"
                                    _placeholder={{ color: "gray.400" }}
                                    borderColor="gray.600"
                                    {...registerUser("email", { required: "Email é obrigatório" })}
                                />
                                {errorsUser.email && (
                                    <Field.ErrorText color="red.300">
                                        {errorsUser.email.message as string}
                                    </Field.ErrorText>
                                )}
                            </Field.Root>

                            {/* Senha */}
                            <Field.Root invalid={!!errorsUser.password}>
                                <Field.Label color="white">
                                    <FaLock style={{ marginRight: 8 }} />
                                    Senha
                                </Field.Label>
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    // focusBorderColor="brand.400"
                                    bg="gray.700"
                                    color="white"
                                    _placeholder={{ color: "gray.400" }}
                                    borderColor="gray.600"
                                    {...registerUser("password", { required: "Senha é obrigatória" })}
                                />
                                {errorsUser.password && (
                                    <Field.ErrorText color="red.300">
                                        {errorsUser.password.message as string}
                                    </Field.ErrorText>
                                )}
                            </Field.Root>

                            <Button
                                type="submit"
                                w="full"
                                bg="brand.500"
                                color="white"
                                _hover={{ bg: "brand.600" }}
                                _active={{ bg: "brand.700" }}
                                // isLoading={isLoading}
                                loadingText="Criando conta..."
                            >
                                Criar Conta de Usuário
                            </Button>
                        </VStack>
                    </form>
                </Tabs.Content>

                {/* Aba de Profissional */}
                <Tabs.Content value="profissional">
                    <Field.Root onSubmit={handleSubmitPro(onSubmitPro)}>
                        <VStack m={4}>
                            {/* Nome */}
                            <Field.Root invalid={!!errorsPro.name}>
                                <Field.Label color="white">
                                    <FaUser style={{ marginRight: 8 }} />
                                    Nome Completo
                                </Field.Label>
                                <Input
                                    placeholder="Digite seu nome completo"
                                    // focusBorderColor="brand.400"
                                    bg="gray.700"
                                    color="white"
                                    _placeholder={{ color: "gray.400" }}
                                    borderColor="gray.600"
                                    {...registerPro("name", { required: "Nome é obrigatório" })}
                                />
                                {errorsPro.name && (
                                    <Field.ErrorText color="red.300">
                                        {errorsPro.name.message as string}
                                    </Field.ErrorText>
                                )}
                            </Field.Root>

                            {/* Email */}
                            <Field.Root invalid={!!errorsPro.email}>
                                <Field.Label color="white">
                                    <FaEnvelope style={{ marginRight: 8 }} />
                                    Email
                                </Field.Label>
                                <Input
                                    type="email"
                                    placeholder="exemplo@clinica.com"
                                    // focusBorderColor="brand.400"
                                    bg="gray.700"
                                    color="white"
                                    _placeholder={{ color: "gray.400" }}
                                    borderColor="gray.600"
                                    {...registerPro("email", { required: "Email é obrigatório" })}
                                />
                                {errorsPro.email && (
                                    <Field.ErrorText color="red.300">
                                        {errorsPro.email.message as string}
                                    </Field.ErrorText>
                                )}
                            </Field.Root>

                            {/* Senha */}
                            <Field.Root invalid={!!errorsPro.password}>
                                <Field.Label color="white">
                                    <FaLock style={{ marginRight: 8 }} />
                                    Senha
                                </Field.Label>
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    // focusBorderColor="brand.400"
                                    bg="gray.700"
                                    color="white"
                                    _placeholder={{ color: "gray.400" }}
                                    borderColor="gray.600"
                                    {...registerPro("password", { required: "Senha é obrigatória" })}
                                />
                                {errorsPro.password && (
                                    <Field.ErrorText color="red.300">
                                        {errorsPro.password.message as string}
                                    </Field.ErrorText>
                                )}
                            </Field.Root>

                            {/* Especialidade */}
                            <Field.Root invalid={!!errorsPro.category}>
                                <Field.Label color="white">
                                    <FaStethoscope style={{ marginRight: 8 }} />
                                    Especialidade
                                </Field.Label>
                                <NativeSelect.Root>
                                    <NativeSelect.Field
                                        placeholder="Selecione sua especialidade"
                                        {...registerPro("category")}
                                        // items={[
                                        //     "Cardiologia",
                                        //     "Dermatologia",
                                        //     "Pediatria",
                                        //     "Outras",
                                        // ]}
                                        // focusBorderColor="brand.400"
                                        bg="gray.700"
                                        color="white"
                                        borderColor="gray.600"
                                    />
                                </NativeSelect.Root>
                                {errorsPro.category && (
                                    <Field.ErrorText color="red.300">
                                        {errorsPro.category.message as string}
                                    </Field.ErrorText>
                                )}
                            </Field.Root>

                            <Button
                                type="submit"
                                w="full"
                                bg="brand.500"
                                color="white"
                                _hover={{ bg: "brand.600" }}
                                _active={{ bg: "brand.700" }}
                                // isLoading={isLoading}
                                loadingText="Criando conta..."
                            >
                                Criar Conta de Profissional
                            </Button>
                        </VStack>
                    </Field.Root>
                </Tabs.Content>
            </Tabs.Root>
        </Box>
    );
}
