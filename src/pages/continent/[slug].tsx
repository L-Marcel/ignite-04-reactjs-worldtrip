import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Body from "../../components/Body";
import Cities from "../../components/continents/cities/Cities";
import Cover from "../../components/continents/Cover";
import Info from "../../components/continents/Info";
import { continentsData } from "../../service/data";

function Continent({ name, image, description, cities, qtd_cities, qtd_countries, qtd_languages }: ContinentInfo) {
  const info = { qtd_countries, qtd_languages, qtd_cities };

  return (
    <Box>
      <Cover
        image={image}
        title={name}
      />
      <Body>
        <SimpleGrid
          spacing={[4, 8]}
          minChildWidth={250}
          px={[4, 0]}
        >
          <Text
            textAlign="justify"
          >
            {description}
          </Text>
          <Info {...info}/>
        </SimpleGrid>
        <Cities/>
      </Body>
    </Box>
  );
};

export default Continent;

export const getStaticPaths: GetStaticPaths = async() => {
  return {
      paths: [
        { params: { slug: "america-do-norte" } },
        { params: { slug: "america-do-sul" } },
        { params: { slug: "asia" } },
        { params: { slug: "africa" } },
        { params: { slug: "europa" } },
        { params: { slug: "oceania" } },
      ],
      fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps<ContinentInfo> = async({ params }) => {
  const { slug } = params;

  return {
    props: continentsData[String(slug)],
    revalidate: 1000 * 60 * 60 * 24
  };
};