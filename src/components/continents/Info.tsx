import { QuestionIcon } from "@chakra-ui/icons";
import { Heading, HStack, Stack, Text, Tooltip } from "@chakra-ui/react";

interface InfoProps {
  qtd_countries?: number;
  qtd_languages?: number;
  qtd_cities?: number;
};

function Info({ qtd_countries = 0, qtd_languages = 0, qtd_cities = 0 }: InfoProps) {
  return (
    <HStack
      spacing={10}
      justifyContent="center"
      mt={[2, 0]}
    >
      <Stack
        alignItems="center"
      >
        <Heading
          color="highlight"
          lineHeight={5}
        >
          {qtd_countries}
        </Heading>
        <Text
          color="heading"
          fontWeight="semibold"
        >
          países
        </Text>
      </Stack>
      <Stack
        alignItems="center"
      >
        <Heading
          color="highlight"
          lineHeight={5}
        >
          {qtd_languages}
        </Heading>
        <Text
          color="heading"
          fontWeight="semibold"
        >
          línguas
        </Text>
      </Stack>
      <Stack
        alignItems="center"
      >
        <Heading
          color="highlight"
          lineHeight={5}
        >
          {qtd_cities}
        </Heading>
        <Text
          color="heading"
          fontWeight="semibold"
        >
          cidades +100
          <Tooltip label="Exemplo">
            <QuestionIcon size="sm" fontSize="sm" mb={1} ml={1}/>
          </Tooltip>
        </Text>
      </Stack>
    </HStack>
  );
};

export default Info;