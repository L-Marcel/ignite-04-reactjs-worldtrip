import { Box, Flex, Image, Text } from "@chakra-ui/react";

function City({ image, name, country, flag }: City) {
  return (
    <Box
      position="relative"
      bg="whiteHeading"
      display="flex"
      flexDir="column"
      borderRadius={6}
      transition="filter .5s linear"
      filter="brightness(0.98)"
      _hover={{
        filter: "brightness(0.92)"
      }}
    >
      <Image w="100%" src={`/cities/${image}`} alt={name}/>
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        p={5}
      >
        <Text
          color="heading"
          fontWeight="bold"
        >
          {name}
        </Text>
        <Text
          color="info"
        >
          {country}
        </Text>
      </Flex>
      <Image 
        position="absolute" 
        right={4}
        top={4} 
        src={`/cities/${flag}`} 
        alt={country}
      />
    </Box>
  );
};

export default City;