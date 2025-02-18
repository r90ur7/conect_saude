/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import {
  Tabs,
  Input,
  Button,
  VStack,
  Heading,
  Text,
  Box,
  Image,
  TabsList,
} from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";
import { toaster } from "@/components/ui/toaster";
import { useForm } from "react-hook-form";
import RegisterTabs from "../register/professional/register";

/**
 * LoginForm que utiliza localStorage para armazenar o usuário
 * e, ao concluir o login, chama onClose() e setLoggedUser() passados via props.
 */
export function LoginForm({
  onClose,
  setLoggedUser,
}: {
  onClose: () => void;
  setLoggedUser: (user: any) => void;
}) {
  const [user, setUser] = useState<any>(null);
  const [tabIndex] = useState("login");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Carrega do localStorage ao montar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Simula login/registro
  const onSubmit = (data: any) => {
    setTimeout(() => {
      toaster.create({
        title: tabIndex === "login" ? "Login realizado!" : "Conta criada!",
        description: "Conectando...",
        duration: 3000,
      });
      const loggedUser = {
        name: data.email,
        email: data.email,
        avatar: "https://i.pravatar.cc/150?img=3",
      };
      // Salva no localStorage
      localStorage.setItem("user", JSON.stringify(loggedUser));
      // Atualiza o estado interno
      setUser(loggedUser);
      // Notifica a Navbar que há um novo usuário logado
      setLoggedUser(loggedUser);
      // Fecha o dialog
      onClose();
    }, 1000);
  };

  // Se já estiver logado (carregado do localStorage), mostra um "você está logado"
  if (user) {
    return (
      <Box textAlign="center" color="white">
        <Image
          src={user.avatar}
          alt="Avatar do Usuário"
          boxSize="80px"
          borderRadius="full"
          mx="auto"
          mb={4}
        />
        <Heading size="md" mb={2}>
          Você já está logado como {user.name}
        </Heading>
        <Text>Feche este diálogo para continuar.</Text>
      </Box>
    );
  }

  // Formulário de Login/Registro
  return (
    <Box
      w="100%"
      h="100%"
      maxW="xl"
      mx="auto"
      mt={4}
      p={4}
      bg="gray.800"
      borderRadius="xl"
      boxShadow="dark-lg"
    >
      {/* Logo Circular */}
      <Box display="flex" justifyContent="center" mb={6}>
        <Box
          width="80px"
          height="80px"
          borderRadius="full"
          overflow="hidden"
          border="2px solid"
          borderColor="brand.500"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-6uwyXwm0Y2S8DA6fXjT6k5b1HybicU.jpeg"
            alt="Logo Sistema Hospitalar"
            width={80}
            height={80}
            objectFit="cover"
          />
        </Box>
      </Box>

      <Heading size="lg" textAlign="center" mb={2} color="white">
        Bem-vindo de volta!
      </Heading>
      <Text textAlign="center" mb={6} color="gray.300">
        Faça login ou registre sua conta para continuar
      </Text>

      <Tabs.Root
        defaultValue="login"
        key={tabIndex}
        fitted
        bg="gray.700"
        p={4}
        borderRadius="lg"
      >
        <TabsList mb={8}>
          <Tabs.Trigger
            value="login"
            _selected={{ color: "brand.400", borderColor: "brand.400" }}
            color="white"
          >
            Entrar
          </Tabs.Trigger>
          <Tabs.Trigger
            value="register"
            _selected={{ color: "brand.400", borderColor: "brand.400" }}
            color="white"
          >
            Registrar
          </Tabs.Trigger>
        </TabsList>

        {/* Login Tab */}
        <Tabs.Content value="login">
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack p={4} m={4}>
              <Field.Root invalid={!!errors.email}>
                <Field.Label color="brand.800">
                  <FaUser style={{ marginRight: 8 }} />
                  Email
                </Field.Label>
                <Input
                  type="email"
                  placeholder="exemplo@clinica.com"
                  borderColor="brand.500"
                  {...register("email", { required: "Email é obrigatório" })}
                />
                {errors.email && (
                  <Field.ErrorText color="red.500">
                    {errors.email.message as string}
                  </Field.ErrorText>
                )}
              </Field.Root>

              <Field.Root invalid={!!errors.password}>
                <Field.Label color="brand.800">
                  <FaLock style={{ marginRight: 8 }} />
                  Senha
                </Field.Label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  borderColor="brand.500"
                  {...register("password", { required: "Senha é obrigatória" })}
                />
                {errors.password && (
                  <Field.ErrorText color="red.500">
                    {errors.password.message as string}
                  </Field.ErrorText>
                )}
              </Field.Root>

              <Button
                type="submit"
                w="full"
                bg="brand.600"
                color="white"
                _hover={{ bg: "brand.700" }}
                _active={{ bg: "brand.800" }}
              >
                Acessar Sistema
              </Button>
            </VStack>
          </form>
        </Tabs.Content>

        {/* Register Tab */}
        <Tabs.Content value="register">
          <RegisterTabs
            onRegister={setUser}
            onClose={onClose}
            setLoggedUser={setLoggedUser}
          />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}
