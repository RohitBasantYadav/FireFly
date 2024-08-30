import { Box, Heading, HStack, Image, Stack } from "@chakra-ui/react"
import footerBorder from "../assets/footerBorder.svg";
import footerDeco from "../assets/footerDeco.svg";

function Footer() {
  return (
    <>
      <Image src={footerBorder} alt="border-svg" w="100%"/>
    <Box bgColor="#25A769">
      <HStack justify="space-between">
        <Image src={footerDeco} alt="" />
        <Stack justify="center" align="center">
            <Heading color="#ECE14C">Follow us On</Heading>
            <HStack>
                <Image src="" alt="instagram" />
                <Image src="" alt="youtube" />
                <Image src="" alt="twitter" />
                <Image src="" alt="facebook" />
                <Image src="" alt="linkedin" />
            </HStack>
        </Stack>
        <Image src={footerDeco} alt="" />
      </HStack>

    </Box>
      <Image src={footerBorder} alt="border-svg" w="100%"/>
      </>
  )
}

export default Footer
