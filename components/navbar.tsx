/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Box,
  Flex,
  Button,
  Stack,
  Image,
  HStack,
  useDisclosure,
  Group,
} from "@chakra-ui/react";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { LoginForm } from "@/app/login/auth";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import ToggleColorModeButton from "./ToggleColorModeButton";

/**
 * Navbar estática que usa localStorage para armazenar o usuário.
 * Se o usuário estiver logado, exibe o avatar; caso contrário, exibe o botão "Entrar" (que abre o diálogo).
 */
export default function Navbar() {
  const { open, onOpen, onClose } = useDisclosure();
  const [loggedUser, setLoggedUser] = useState<any>(null);
  const router = useRouter();

  // Ao montar, recupera o usuário do localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setLoggedUser(JSON.parse(storedUser));
    }
  }, []);

  // Função de logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedUser(null);
  };

  return (
    <Box px={4} shadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-6uwyXwm0Y2S8DA6fXjT6k5b1HybicU.jpeg"
            alt="Conect Saúde Logo"
            borderRadius="full"
            h={10}
          />
        </Link>
        <Group>
          <ToggleColorModeButton />
          {/* SEÇÃO DA DIREITA */}
          <Stack direction="row" align="center">
            {loggedUser ? (
              <HStack p={4} m={4}>
                <Link href="/dashboard">
                  <Button
                    variant="ghost"
                    color="black"
                    fontFamily="Geist Mono"
                  >
                    Dashboard
                  </Button>
                </Link>

                {/* Avatar e botão de sair */}
                <HStack m={2}>
                  <Avatar
                    size="md"
                    name={loggedUser.name || "Usuário"}
                    src={loggedUser.avatar || "https://i.pravatar.cc/150?img=3"}
                    cursor="pointer"
                    onClick={() => router.push('/profile')}
                  />
                  <Button
                    variant="ghost"
                    color="black"
                    fontFamily="Geist Mono"
                    onClick={handleLogout}
                  >
                    Sair
                  </Button>
                </HStack>
              </HStack>
            ) : (
              <DialogRoot placement="center" open={open}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    color="brand.primary"
                    fontFamily="Geist Mono"
                    onClick={onOpen}
                  >
                    Entrar
                  </Button>
                </DialogTrigger>
                <DialogContent bg="gray.800" borderRadius="xl" boxShadow="dark-lg">
                  <DialogHeader>
                    <DialogTitle color="white" fontFamily="Geist Mono">
                      Login
                    </DialogTitle>
                    <DialogCloseTrigger onClick={onClose} color="white" />
                  </DialogHeader>
                  <DialogBody>
                    <LoginForm
                      onClose={onClose}
                      setLoggedUser={setLoggedUser}
                    />
                  </DialogBody>
                </DialogContent>
              </DialogRoot>
            )}
          </Stack>
        </Group>
      </Flex>
    </Box>
  );
}