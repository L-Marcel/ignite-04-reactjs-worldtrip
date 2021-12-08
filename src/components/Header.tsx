import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, IconButton, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const renderReturnButton = router.pathname !== "/";

  return (
    <Box
      display="flex"
      bg="white"
      justifyContent="center"
      alignItems="center"
      minH={["50px","70px"]}
      p={[4, 8]}
    >
      { renderReturnButton && <IconButton 
        icon={<ChevronLeftIcon/>} 
        aria-label="return-button"
        position="absolute"
        left={[6, 10]}
        bg="transparent"
        onClick={() => router.push("/")}
      /> }
      <Image h={["30px", "40px"]} src="/logo.svg"/>
    </Box>
  );
};

export default Header;