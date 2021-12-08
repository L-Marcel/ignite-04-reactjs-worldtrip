import { Box, Stack, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      w="100%"
      maxH={["225px", "300px"]}
      mb={25}
      position="relative"
    >
      <Stack
        w="100%"
        h="100%"
        bgSize="cover"
        bgImage="url('/background.png')"
        px={[8, 16]}
        py={[8, 14]}
      >
        <Heading
          fontWeight="medium"
          color="whiteHeading"
          lineHeight={["35px", "50px"]}
          fontSize={[25, 35]}
          mb={[2, 4]}
        >
          5 Continentes,<br/> infinitas posibilidades.
        </Heading>
        <Text
          fontWeight="regular"
          color="whiteInfo"
          fontSize={[15, 20]}
          maxW={["100%", "40%"]}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>
      { isWideVersion && <Image 
        src="./airplane.svg"
        position="absolute"
        bottom={-25}
        maxH="80%"
        right={[0, 175]}
      /> }
    </Box>
  );
};

export default Banner;