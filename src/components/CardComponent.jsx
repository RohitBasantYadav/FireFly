import {Image, Heading, HStack, Box, Button } from "@chakra-ui/react"
import bannerImage from "../assets/bannerImage.jpeg";

const CardComponent = ({productName}) => {
    return (
        <Box border="1px solid gray" p="20px" mt="40px" h="60%">
            <Image w="100%" h="80%" src={bannerImage} alt="product-img" objectFit="cover" />
            <HStack justify="space-between" align="center">
                <Heading>{productName}</Heading>
                <Button py={10} px={40} border="none" bgColor="#FE0000" color="white" fontWeight="bold">QUICK VIEW</Button>
            </HStack>
        </Box>
    )
}

export default CardComponent
