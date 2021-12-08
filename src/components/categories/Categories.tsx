import { List } from "@chakra-ui/react";
import { categories } from "../../service/data";
import CategoryItem from "./CategoryItem";

function Categories() {
  return (
    <List
      display="flex"
      flexDir="row"
      flexWrap="wrap"
      justifyContent="space-around"
      px={[4, 0]}
    >
      { 
        categories.map(category => {
          return (
            <CategoryItem key={category.name} {...category}/>
          );
        }) 
      }
    </List>
  );
};

export default Categories;