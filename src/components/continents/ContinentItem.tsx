import { Box, Heading, Text, SlideFade, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Router from "next/router";

interface ContinentItemProps extends ContinentItem {
  isActive?: boolean;
};

function ContinentItem({ isActive = false, slug, image, description, name }: ContinentItemProps) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setFadeIn(isActive);
    }, 400);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      backgroundImage={`url('/continents/${image}')`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      minH="350px"
    >
      <Heading
        color="highlight"
        fontSize={[30, 35]}
      >
        {name}
      </Heading>
      <SlideFade offsetY='20px' in={fadeIn}>
        <Text
          color="whiteHeading"
          fontWeight="bold"
          fontSize={[18, 24]}
          textAlign="center"
          mt={1}
        >
          {description}
        </Text>
      </SlideFade>
      <Button
        onClick={() => Router.push(`/continent/${slug}`)}
        size="sm"
        mt={5}
        _hover={{
          bg: "highlight"
        }}
      >
        Explorar
      </Button>
    </Box>
  );
};

export default ContinentItem;