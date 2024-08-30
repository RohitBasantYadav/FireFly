import { Box, Button, Heading, Image } from "@chakra-ui/react";
import bannerImg from "../assets/bannerImage.jpeg";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <Box position="relative">
        <Navbar/>
        <Image src={bannerImg} alt="banner-img" w="100%" height="95vh" objectFit="fill"/>
        <Box position="absolute" top="30%" left="5%">
            <Heading color="white" w="50%" fontSize="55px">The choice is yours.  Because they don’t have one.</Heading>
            <Button py={15} px={45} border="none" color="#FE0000" fontWeight="bold">QUICK VIEW</Button>
        </Box>
    </Box>
  )
}

export default Banner
