import { Box, HStack, Stack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.svg"
const Navbar = () => {
  return (
    <Stack bg="transparent" position="fixed" top="0" left="0" zIndex="1000" w="100%" h="8vh" bgColor="rgba(0,0,0, 0.5)">
        <HStack w="80%" m="auto">
            <Box pt={8}>
                <Image src={logo} alt="firefly-logo" w="70%" />
            </Box>
        </HStack>
    </Stack>
  )
}

export default Navbar
