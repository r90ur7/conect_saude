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
  Input,
  IconButton,
  Collapsible,
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
import { usePathname, useRouter } from "next/navigation";
import ToggleColorModeButton from "../ToggleColorModeButton";
import { useColorModeValue } from "../ui/color-mode";
import { InputGroup } from "@/components/ui/input-group";
import { HiOutlineXMark, HiOutlineBars3 } from "react-icons/hi2";
interface NavbarProps {
  searchTerm?: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
}

export default function Navbar({ searchTerm, setSearchTerm }: NavbarProps) {
  // useDisclosure para o diálogo de login
  const { open, onOpen, onClose } = useDisclosure();
  // useDisclosure para o menu mobile
  const {
    open: mobileIsOpen,
    onToggle: mobileOnToggle,
    onClose: mobileOnClose,
  } = useDisclosure();
  const [loggedUser, setLoggedUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();
  const showSearch = pathname === "/dashboard" && loggedUser;

  // Recupera usuário do localStorage ao montar o componente
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

  // Define a cor de fundo conforme o modo de cor
  const bgColor = useColorModeValue("gray.50", "brand.dark");

  return (
    <Box px={4} shadow="sm" bg={bgColor}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/assets/logo3.png"
            alt="Conect Saúde Logo"
            borderRadius="full"
            width={14}
            h={14}
          />
        </Link>

        {/* Barra de pesquisa para desktop */}
        {showSearch && (
          <Box
            ml={{ base: 0, md: 64 }}
            display={{ base: "none", md: "block" }}
          >
            <InputGroup flex="1" w="30vw" startElement={<FaSearch />}>
              <Input
                size="lg"
                placeholder="Buscar por nome, especialidade ou localização..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchTerm?.(e.target.value)
                }
                bg="gray.50"
                borderRadius="md"
                px={6}
                _placeholder={{ color: "gray.500", fontSize: "15px" }}
                _hover={{ bg: "gray.100", borderColor: "blue.300" }}
                _focus={{
                  bg: "white",
                  borderColor: "blue.400",
                  boxShadow: "outline",
                }}
              />
            </InputGroup>
          </Box>
        )}

        <Flex alignItems="center">
          {/* Itens do menu para desktop */}
          <HStack m={4} display={{ base: "none", md: "flex" }}>
            <ToggleColorModeButton />
            {loggedUser ? (
              <HStack m={4}>
                <Link href="/dashboard">
                  <Button
                    variant="ghost"
                    color="black"
                    fontFamily="Geist Mono"
                  >
                    Agendar Consulta
                  </Button>
                </Link>
                <Avatar
                  size="md"
                  name={loggedUser.name || "Usuário"}
                  src={
                    loggedUser.avatar ||
                    "https://i.pravatar.cc/150?img=3"
                  }
                  cursor="pointer"
                  onClick={() => router.push("/profile")}
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
                <DialogContent
                  bg="gray.800"
                  borderRadius="xl"
                  boxShadow="dark-lg"
                >
                  <DialogHeader>
                    <DialogTitle
                      color="white"
                      fontFamily="Geist Mono"
                    >
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
          </HStack>
          {/* Botão do menu mobile */}
          <IconButton
            size="md"
            aria-label="Open Menu"
            display={{ base: "flex", md: "none" }}
            onClick={mobileOnToggle}
            ml={2}
          >
            {mobileIsOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
          </IconButton>
        </Flex>
      </Flex>

      {/* Menu mobile colapsável */}
      <Collapsible.Root open={mobileIsOpen} onOpenChange={mobileOnToggle}>
        <Collapsible.Content>

          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" m={4}>
              {showSearch && (
                <Box>
                  <InputGroup flex="1" w="full" startElement={<FaSearch />}>
                    <Input
                      size="lg"
                      placeholder="Buscar por nome, especialidade ou localização..."
                      value={searchTerm}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSearchTerm?.(e.target.value)
                      }
                      bg="gray.50"
                      borderRadius="md"
                      px={6}
                      _placeholder={{
                        color: "gray.500",
                        fontSize: "15px",
                      }}
                      _hover={{
                        bg: "gray.100",
                        borderColor: "blue.300",
                      }}
                      _focus={{
                        bg: "white",
                        borderColor: "blue.400",
                        boxShadow: "outline",
                      }}
                    />
                  </InputGroup>
                </Box>
              )}

              {/* Itens do menu mobile */}
              <ToggleColorModeButton />
              {loggedUser ? (
                <>
                  <Link href="/dashboard">
                    <Button
                      variant="ghost"
                      color="black"
                      fontFamily="Geist Mono"
                      onClick={mobileOnClose}
                      textAlign="center"
                    >
                      Agendar Consulta
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    color="black"
                    fontFamily="Geist Mono"
                    onClick={() => {
                      mobileOnClose();
                      router.push("/profile");
                    }}
                  >
                    Perfil
                  </Button>
                  <Button
                    variant="ghost"
                    color="black"
                    fontFamily="Geist Mono"
                    onClick={() => {
                      handleLogout();
                      mobileOnClose();
                    }}
                  >
                    Sair
                  </Button>
                </>
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
                  <DialogContent
                    bg="gray.800"
                    borderRadius="xl"
                    boxShadow="dark-lg"
                  >
                    <DialogHeader>
                      <DialogTitle
                        color="white"
                        fontFamily="Geist Mono"
                      >
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
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
}
