/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
    Button,
    Center,
    Field,
    Fieldset,
    Heading,
    Input,
    Stack,
    VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const UserForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log("Dados do Cliente:", data);
    };

    return (
        <Center>
            <VStack>
                <Heading color="white" size="lg">Cadastro de Cliente</Heading>
                <Stack>
                    <Fieldset.Root display={"flex"} flexDirection={"column"} alignItems={"center"} gap={4} size="lg" maxW="md" as="form" onSubmit={handleSubmit(onSubmit)}>
                        <Stack alignItems={"center"}>
                            <Fieldset.Legend color="white">Detalhes de Contato</Fieldset.Legend>
                            <Fieldset.HelperText textAlign={"justify"}>
                                Por favor, forneça seus detalhes de contato abaixo.
                            </Fieldset.HelperText>
                        </Stack>

                        <Fieldset.Content>
                            <Field.Root border={"double"} borderColor="brand.accent" invalid={!!errors.name}>
                                <Input
                                    placeholder="Nome completo"
                                    {...register("name", { required: "Nome é obrigatório" })}
                                />
                            </Field.Root>

                            <Field.Root border={"double"} borderColor="brand.accent" invalid={!!errors.email}>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    {...register("email", { required: "Email é obrigatório" })}
                                />
                            </Field.Root>

                            <Field.Root border={"double"} borderColor="brand.accent" invalid={!!errors.phone}>
                                <Input
                                    type="tel"
                                    placeholder="Telefone"
                                    {...register("phone", { required: "Telefone é obrigatório" })}
                                />
                            </Field.Root>
                        </Fieldset.Content>

                        <Button type="submit" alignSelf="flex-center" colorScheme="blue">
                            Cadastrar como Cliente
                        </Button>
                    </Fieldset.Root>
                </Stack>
            </VStack>
        </Center>
    );
};

export default UserForm; 