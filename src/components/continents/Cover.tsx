import { Box, Heading } from "@chakra-ui/react";

interface CoverProps {
  image: string;
  title: string;
};

function Cover({ image, title }: CoverProps) {
  return (
    <Box
      w="100%"
      h="100%"
      minH={300}
      display="flex"
      flexDir="column"
      justifyContent="flex-end"
      bgSize="cover"
      bgPos="center"
      bgImage={`url("/continents/${image}")`}
      bgRepeat="no-repeat"
      px={[8, 16]}
      py={8}
    >
      <Heading
        fontWeight="semibold"
        color="whiteHeading"
      >
        {title}
      </Heading>
    </Box>
  );
};

export default Cover;