import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { cities } from "../../../service/data";
import City from "./City";

function Cities() {
  return (
    <Box
      mt={[2, 10]}
      p={[4, 0]}
    >
      <Heading
        color="heading"
        fontSize={25}
        fontWeight="medium"
      >
        Cidades +100
      </Heading>
      <SimpleGrid
        mt={30}
        minChildWidth={250}
        justifyContent="space-between"
        spacing={5}
      >
        {
          cities.map(city => {
            return (
              <City key={city.name} {...city}/>
            );
          })
        }
      </SimpleGrid>
    </Box>
  );
};

export default Cities;