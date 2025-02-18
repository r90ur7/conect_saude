import { Box, Container, SimpleGrid, VStack, Icon, Heading, Text } from "@chakra-ui/react";
import { LuUsers, LuHeart, LuStethoscope } from "react-icons/lu";

const stats = [
  { icon: LuUsers, title: "+1000", desc: "Profissionais cadastrados" },
  { icon: LuHeart, title: "+5000", desc: "Pacientes atendidos" },
  { icon: LuStethoscope, title: "+20", desc: "Especialidades" },
];

export default function StatsPage() {
  return (
    <Box minH="100vh" bg="white">
      <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} m={8}>
          {stats.map((stat, idx) => (
            <VStack
              key={idx}
              p={8}
              bg="gray.50"
              borderRadius="xl"
              boxShadow="md"
              align="center"
              m={4}
            >
              <Icon as={stat.icon} boxSize={12} color="brand.primary" />
              <Heading size="xl" color="brand.primary">
                {stat.title}
              </Heading>
              <Text color="gray.700" textAlign="center" fontSize="lg">
                {stat.desc}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

