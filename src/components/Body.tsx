import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BodyProps {
  children: ReactNode;
};

function Body({ children }: BodyProps) {
  return (
    <Box
      px={[0, 16]}
      py={[3, 10]}
    >
      { children }
    </Box>
  );
};

export default Body;