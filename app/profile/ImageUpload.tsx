"use client"

import { useState } from "react"
import {
    Box,
    Image,
    VStack,
    Text,
} from "@chakra-ui/react"
import {
    FileUploadRoot,
    FileUploadTrigger,
} from "@/components/ui/file-upload"
import { HiCamera } from "react-icons/hi"
import { FaImage } from "react-icons/fa"

interface ImageUploadProps {
    value?: string
    onChange: (url: string) => void
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(value || null)

    const handleFileChange = async (files: FileList) => {
        if (files && files[0]) {
            const file = files[0]

            // Converter a imagem para base64 para salvar no localStorage
            const reader = new FileReader()
            reader.onloadend = () => {
                const base64String = reader.result as string
                setPreview(base64String)
                onChange(base64String)

                // Atualizar o usuário no localStorage com a nova imagem
                const storedUser = localStorage.getItem("user")
                if (storedUser) {
                    const user = JSON.parse(storedUser)
                    user.avatar = base64String
                    localStorage.setItem("user", JSON.stringify(user))
                }
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <VStack alignItems="center" m={4} w="full">
            <FileUploadRoot
                alignItems={"center"}
                accept="image/*"
                onChange={(e: React.FormEvent<HTMLDivElement>) => {
                    const target = e.target as HTMLInputElement;
                    if (target.files) {
                        handleFileChange(target.files);
                    }
                }}
            >
                <FileUploadTrigger asChild>
                    <Box
                        position="relative"
                        w="150px"
                        h="150px"
                        borderRadius="full"
                        overflow="hidden"
                        bg="gray.700"
                        cursor="pointer"
                        transition="all 0.2s"
                        _hover={{
                            opacity: 0.8,
                        }}
                    >
                        {preview ? (
                            <Image
                                src={preview}
                                alt="Profile preview"
                                w="full"
                                h="full"
                                objectFit="cover"
                            />
                        ) : (
                            <Box
                                w="full"
                                h="full"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <FaImage size={40} color="gray.400" />
                            </Box>
                        )}

                        {/* Overlay com ícone da câmera */}
                        <Box
                            position="absolute"
                            bottom={0}
                            left={0}
                            right={0}
                            bg="blackAlpha.600"
                            py={2}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <HiCamera color="white" size={20} />
                        </Box>
                    </Box>
                </FileUploadTrigger>
            </FileUploadRoot>
            <Text fontSize="sm" color="gray.400">
                Clique na imagem para alterar a foto
            </Text>
        </VStack>
    )
} 