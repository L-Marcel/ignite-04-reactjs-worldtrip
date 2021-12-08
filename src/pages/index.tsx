import { Box, Divider, Text } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Body from "../components/Body";
import Categories from "../components/categories/Categories";
import Continents from "../components/continents/Continents";

export default function Home() {
  return (
    <Box>
      <Banner/>
      <Body>
        <Categories/>
        <Divider 
          maxW={50}
          borderBottomWidth={3} 
          borderColor="black"
          mx="auto"
          my={5}
        />
        <Text
          textAlign="center"
          fontWeight="medium"
          color="heading"
          fontSize={20}
          lineHeight={8}
          my={8}
        >
          Vamos nessa? <br/> Então escolha o seu continente
        </Text>
        <Continents/>
      </Body>
    </Box>
  );
};
