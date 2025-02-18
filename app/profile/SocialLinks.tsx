"use client"

import {
    VStack,
    Input,
    Text,
} from "@chakra-ui/react"
import { Field } from "@chakra-ui/react"
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa"

interface SocialLinksProps {
    value: {
        instagram?: string
        facebook?: string
        linkedin?: string
        whatsapp?: string
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (social: any) => void
}

export function SocialLinks({ value = {}, onChange }: SocialLinksProps) {
    const handleChange = (network: string, url: string) => {
        onChange({ ...value, [network]: url })
    }

    return (
        <VStack m={4} w="full">
            <Text fontWeight="bold" color="white">Links Sociais</Text>

            <Field.Root>
                <Field.Label>
                    <FaInstagram style={{ marginRight: 8 }} />
                    Instagram
                </Field.Label>
                <Input
                    value={value.instagram || ""}
                    onChange={(e) => handleChange("instagram", e.target.value)}
                    placeholder="https://instagram.com/seu.perfil"
                    bg="gray.700"
                    color="white"
                    borderColor="gray.600"
                />
            </Field.Root>

            <Field.Root>
                <Field.Label>
                    <FaFacebook style={{ marginRight: 8 }} />
                    Facebook
                </Field.Label>
                <Input
                    value={value.facebook || ""}
                    onChange={(e) => handleChange("facebook", e.target.value)}
                    placeholder="https://facebook.com/seu.perfil"
                    bg="gray.700"
                    color="white"
                    borderColor="gray.600"
                />
            </Field.Root>

            <Field.Root>
                <Field.Label>
                    <FaLinkedin style={{ marginRight: 8 }} />
                    LinkedIn
                </Field.Label>
                <Input
                    value={value.linkedin || ""}
                    onChange={(e) => handleChange("linkedin", e.target.value)}
                    placeholder="https://linkedin.com/in/seu.perfil"
                    bg="gray.700"
                    color="white"
                    borderColor="gray.600"
                />
            </Field.Root>

            <Field.Root>
                <Field.Label>
                    <FaWhatsapp style={{ marginRight: 8 }} />
                    WhatsApp
                </Field.Label>
                <Input
                    value={value.whatsapp || ""}
                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                    placeholder="+55 (11) 99999-9999"
                    bg="gray.700"
                    color="white"
                    borderColor="gray.600"
                />
            </Field.Root>
        </VStack>
    )
}