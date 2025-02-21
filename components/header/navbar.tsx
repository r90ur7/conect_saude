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
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
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
import { SetStateAction, Dispatch, useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import ToggleColorModeButton from "../ToggleColorModeButton";
import { useColorModeValue } from "../ui/color-mode";
import { InputGroup } from "@/components/ui/input-group";

/**
 * Navbar estática que usa localStorage para armazenar o usuário.
 * Se o usuário estiver logado, exibe o avatar; caso contrário, exibe o botão "Entrar" (que abre o diálogo).
 */

interface NavbarProps {
  searchTerm?: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
}


export default function Navbar({ searchTerm, setSearchTerm }: NavbarProps) {
  const { open, onOpen, onClose } = useDisclosure();
  const [loggedUser, setLoggedUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();
  const showSearch = pathname === '/dashboard' && loggedUser;

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

  // Define a cor de fundo com base no modo de cor
  const bgColor = useColorModeValue("gray.50", "brand.dark");

  return (
    <Box px={4} shadow="sm" bg={bgColor}>
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
        {/* Barra de pesquisa*/}
        {showSearch && (
          <Box ml={[0,0,0,0,64]}>
            <InputGroup flex="1" w="30vw" startElement={<FaSearch />}>
              <Input
                size="lg"
                placeholder="Buscar por nome, especialidade ou localização..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm?.(e.target.value)}
                bg="gray.50"
                borderRadius="md"
                px={6}
                _placeholder={{ color: "gray.500", fontSize: "15px" }}
                _hover={{ bg: "gray.100", borderColor: "blue.300" }}
                _focus={{ bg: "white", borderColor: "blue.400", boxShadow: "outline" }}
              />
            </InputGroup>
          </Box>
        )}
        <Group>

          {/* SEÇÃO DA DIREITA */}
          <Stack direction="row" align="center">
            <ToggleColorModeButton />
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