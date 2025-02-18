"use client"

import { useState } from "react"
import {
    VStack,
    HStack,
    Button,
    Input,
    IconButton,
    Box,
    Text,
} from "@chakra-ui/react"
import { Field } from "@chakra-ui/react"
import { FaGraduationCap, FaTrash, FaPlus } from "react-icons/fa"

interface Education {
    institution: string
    degree: string
    year: string
}

interface EducationProps {
    value: Education[]
    onChange: (education: Education[]) => void
}

export function Education({ value, onChange }: EducationProps) {
    const [newEducation, setNewEducation] = useState<Education>({
        institution: "",
        degree: "",
        year: "",
    })

    const handleAdd = () => {
        if (newEducation.institution && newEducation.degree && newEducation.year) {
            onChange([...value, newEducation])
            setNewEducation({ institution: "", degree: "", year: "" })
        }
    }

    const handleRemove = (index: number) => {
        onChange(value.filter((_, i) => i !== index))
    }

    return (
        <VStack m={4} w="full">
            <Text fontWeight="bold" color="white">Formação Acadêmica</Text>

            {value.map((edu, index) => (
                <HStack key={index} w="full" m={4}>
                    <Field.Root flex={1}>
                        <Field.Label>
                            <FaGraduationCap style={{ marginRight: 8 }} />
                            Instituição
                        </Field.Label>
                        <Input
                            value={edu.institution}
                            readOnly
                            bg="gray.700"
                            color="white"
                            borderColor="gray.600"
                        />
                    </Field.Root>
                    <Field.Root flex={1}>
                        <Field.Label>Curso</Field.Label>
                        <Input
                            value={edu.degree}
                            readOnly
                            bg="gray.700"
                            color="white"
                            borderColor="gray.600"
                        />
                    </Field.Root>
                    <Field.Root w="120px">
                        <Field.Label>Ano</Field.Label>
                        <Input
                            value={edu.year}
                            readOnly
                            bg="gray.700"
                            color="white"
                            borderColor="gray.600"
                        />
                    </Field.Root>
                    <IconButton
                        aria-label="Remover formação"
                        onClick={() => handleRemove(index)}
                        colorScheme="red"
                        variant="ghost"
                    >
                        <FaTrash />
                    </IconButton>
                </HStack>
            ))}

            <Box w="full" p={4} borderRadius="md" bg="gray.700">
                <VStack m={4}>
                    <HStack w="full" m={4}>
                        <Field.Root flex={1}>
                            <Field.Label color="white">Instituição</Field.Label>
                            <Input
                                value={newEducation.institution}
                                onChange={(e) => setNewEducation({
                                    ...newEducation,
                                    institution: e.target.value
                                })}
                                bg="gray.600"
                                color="white"
                                borderColor="gray.500"
                            />
                        </Field.Root>
                        <Field.Root flex={1}>
                            <Field.Label color="white">Curso</Field.Label>
                            <Input
                                value={newEducation.degree}
                                onChange={(e) => setNewEducation({
                                    ...newEducation,
                                    degree: e.target.value
                                })}
                                bg="gray.600"
                                color="white"
                                borderColor="gray.500"
                            />
                        </Field.Root>
                        <Field.Root w="120px">
                            <Field.Label color="white">Ano</Field.Label>
                            <Input
                                value={newEducation.year}
                                onChange={(e) => setNewEducation({
                                    ...newEducation,
                                    year: e.target.value
                                })}
                                bg="gray.600"
                                color="white"
                                borderColor="gray.500"
                            />
                        </Field.Root>
                    </HStack>
                    <Button
                        onClick={handleAdd}
                        colorScheme="brand"
                        w="full"
                    >
                        <FaPlus />
                        Adicionar Formação
                    </Button>
                </VStack>
            </Box>
        </VStack>
    )
} 