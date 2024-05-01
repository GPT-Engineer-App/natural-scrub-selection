import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const scrubs = [
    {
      id: 1,
      name: "Lavender Bliss",
      description: "Soothing lavender for relaxation and calmness.",
      image: "https://images.unsplash.com/photo-1498843053639-170ff2122f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGJvZHklMjBzY3J1YnxlbnwwfHx8fDE3MTQ1ODk5NzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Citrus Burst",
      description: "Refreshing citrus to energize and refresh your skin.",
      image: "https://images.unsplash.com/photo-1506003094589-53954a26283f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXRydXMlMjBib2R5JTIwc2NydWJ8ZW58MHx8fHwxNzE0NTg5OTcyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Peppermint Cool",
      description: "Cooling peppermint to invigorate and smooth your skin.",
      image: "https://images.unsplash.com/photo-1532200846567-1bd8bd5b23aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXBwZXJtaW50JTIwYm9keSUyMHNjcnVifGVufDB8fHx8MTcxNDU5MDU0Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box p={5}>
      <Heading mb={4} textAlign="center">
        Figs by Grace Body Scrubs
      </Heading>
      <Text mb={10} fontSize="lg" textAlign="center">
        Discover our range of natural body scrubs, each crafted for a beautiful, modern aesthetic experience.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {scrubs.map((scrub) => (
          <Box key={scrub.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Image src={scrub.image} alt={scrub.name} borderRadius="md" mb={4} />
            <Heading fontSize="xl">{scrub.name}</Heading>
            <Text mt={2}>{scrub.description}</Text>
            <Button rightIcon={<FaShoppingCart />} colorScheme="teal" mt={4} w="full">
              Buy for $17.00
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
