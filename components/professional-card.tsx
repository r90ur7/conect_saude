"use client"
import { Box, VStack, Heading, Text, HStack, Icon, Link as ChakraLink, Image, Badge } from "@chakra-ui/react"
import { LuMapPin, LuInstagram, LuFacebook, LuLinkedin } from "react-icons/lu"
import Link from "next/link"
import { FaStar } from "react-icons/fa";
import { Professional } from "@/types/professional";

interface ProfessionalCardProps {
  professional: Professional & {
    rating?: number;
    availability?: string;
  };
}


export default function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <Link href={`/infoProfessional/${professional.id}`} style={{ textDecoration: 'none' }} legacyBehavior>
      <Box
        bg="gray.700"
        m={2}
        borderRadius="xl"
        overflow="hidden"
        boxShadow="xl"
        transition="all 0.2s"
        cursor="pointer"
        _hover={{ transform: "translateY(-4px)" }}
      >
        <Image
          src={professional.image}
          alt={professional.name}
          objectFit="cover"
          h="200px"
          w="full"
        />
        <VStack p={6} align="stretch" m={4}>
          <VStack align="stretch" m={2}>
            <Heading size="md" color="white">
              {professional.name}
            </Heading>
            <Text color="brand.secondary" fontSize="medium">
              {professional.specialty}
            </Text>
          </VStack>

          <HStack color="brand.secondary">
            <Icon as={LuMapPin} />
            <Text>{professional.location}</Text>
          </HStack>

          <HStack p={4} justify="center" m={4}>
            {professional.social.instagram && (
              <ChakraLink target="_blank" href={professional.social.instagram}>
                <Icon as={LuInstagram} boxSize={5} color="white" />
              </ChakraLink>
            )}
            {professional.social.facebook && (
              <ChakraLink target="_blank" href={professional.social.facebook}>
                <Icon as={LuFacebook} boxSize={5} color="white" />
              </ChakraLink>
            )}
            {professional.social.linkedin && (
              <ChakraLink target="_blank" href={professional.social.linkedin}>
                <Icon as={LuLinkedin} boxSize={5} color="white" />
              </ChakraLink>
            )}
          </HStack>
          <HStack justify="space-between">
            <HStack>
              <Icon as={FaStar} color="yellow.400" />
              <Text color="white" fontWeight="bold">
                {professional.rating ?? 0}
              </Text>
            </HStack>
            {professional.availability && (
              <Badge
                colorScheme={professional.availability.includes("Hoje") ? "green" : "red"}
                borderRadius="full"
                px={3}
                py={1}
              >
                {professional.availability}
              </Badge>
            )}
          </HStack>
        </VStack>
      </Box>
    </Link>
  )
}