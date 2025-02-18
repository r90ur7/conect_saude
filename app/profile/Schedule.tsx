/* eslint-disable @typescript-eslint/no-explicit-any */
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
    Field,
    createListCollection,
    SelectLabel,
    SelectValueText,
} from "@chakra-ui/react"
import { FaClock, FaTrash, FaPlus } from "react-icons/fa"
import { SelectContent, SelectItem, SelectRoot, SelectTrigger } from "@/components/ui/select"

interface ScheduleItem {
    weekDay: string
    hours: string
}

interface ScheduleProps {
    value: ScheduleItem[]
    onChange: (schedule: ScheduleItem[]) => void
}

const weekDays = createListCollection({
    items: [
        { label: "Segunda-feira", value: "Segunda-feira" },
        { label: "Terça-feira", value: "Terça-feira" },
        { label: "Quarta-feira", value: "Quarta-feira" },
        { label: "Quinta-feira", value: "Quinta-feira" },
        { label: "Sexta-feira", value: "Sexta-feira" },
        { label: "Sábado", value: "Sábado" },
        { label: "Domingo", value: "Domingo" },
    ],
})

export function Schedule({ value, onChange }: ScheduleProps) {
    const [newSchedule, setNewSchedule] = useState<ScheduleItem>({
        weekDay: "",
        hours: "",
    })

    const handleAdd = () => {
        if (newSchedule.weekDay && newSchedule.hours) {
            onChange([...value, newSchedule])
            setNewSchedule({ weekDay: "", hours: "" })
        }
    }

    const handleRemove = (index: number) => {
        onChange(value.filter((_, i) => i !== index))
    }

    return (
        <VStack m={4} w="full">
            <Text fontWeight="bold" color="white">Horários de Atendimento</Text>

            {value.map((schedule, index) => (
                <HStack key={index} w="full" m={4}>
                    <Field.Root flex={1}>
                        <Field.Label color="white">
                            <FaClock style={{ marginRight: 8 }} />
                            Dia da Semana
                        </Field.Label>
                        <Input
                            value={schedule.weekDay}
                            readOnly
                            bg="gray.700"
                            color="white"
                            borderColor="gray.600"
                        />
                    </Field.Root>
                    <Field.Root flex={1}>
                        <Field.Label color="white">Horários</Field.Label>
                        <Input
                            value={schedule.hours}
                            readOnly
                            bg="gray.700"
                            color="white"
                            borderColor="gray.600"
                        />
                    </Field.Root>
                    <IconButton
                        aria-label="Remover horário"
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
                            <Field.Label color="white"> <FaClock style={{ marginRight: 8 }} /> Dia da Semana</Field.Label>
                            <SelectRoot collection={weekDays} size="sm" width="320px">
                                <SelectLabel>Agendamento das Semanas</SelectLabel>
                                <SelectTrigger>
                                    <SelectValueText placeholder="Selecione os Dias Da Semana" />
                                </SelectTrigger>
                                <SelectContent>
                                    {weekDays.items.map((day) => (
                                        <SelectItem item={day} key={day.value}>
                                            {day.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </SelectRoot>
                        </Field.Root>
                        <Field.Root flex={1}>
                            <Field.Label color="white">Horários</Field.Label>
                            <Input
                                value={newSchedule.hours}
                                onChange={(e) => setNewSchedule({
                                    ...newSchedule,
                                    hours: e.target.value
                                })}
                                placeholder="Ex: 08:00 - 18:00"
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
                        <FaPlus style={{ marginRight: 8 }} />
                        Adicionar Horário
                    </Button>
                </VStack>
            </Box>
        </VStack>
    )
}