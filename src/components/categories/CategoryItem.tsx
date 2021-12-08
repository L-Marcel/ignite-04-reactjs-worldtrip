import { Circle, Image, ListIcon, ListItem, Text, useBreakpointValue } from "@chakra-ui/react";

function CategoryItem({ name, image }: CategoryItem) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <ListItem
      display="flex"
      flexDir={ isWideVersion ? "column":"row" }
      justifyContent="center"
      alignItems="center"
      minWidth={ isWideVersion ? "100px":"120px"}
      mb={6}
      _hover={{
        "img": {
          filter: "drop-shadow(0 0 0.12rem #f0c455)"
        }
      }}
    >
      { isWideVersion ? 
        <Image 
          alt={name} src={image} size="sm"
          transition="filter .5s linear"
        />:
        <ListIcon as={Circle} bg="highlight" mt="1px"/> 
      }
      <Text
        mt={ isWideVersion? 3:0 }
      >
        {name}
      </Text>
    </ListItem>
  );
};

export default CategoryItem;