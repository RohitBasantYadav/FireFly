import { Box, HStack, Image, Heading, SimpleGrid, } from "@chakra-ui/react"
import borderImg from "../assets/border.svg";
import CardComponent from "./CardComponent";

const Product = () => {
    return (
        <Box w="80%" m="auto">
            <HStack justify="space-between" spacing={8}>
                <Image src={borderImg} alt="border-img" />
                <Heading color="#F27121">Our Product</Heading>
                <Image src={borderImg} alt="border-img" />
            </HStack>
            
            <SimpleGrid spacing={20} columns={2} >
                <CardComponent productName="Raju Rassibomb"/>
                <CardComponent productName="Ladiyon ki Rani Chani" />
            </SimpleGrid>
            {/* <Image src={borderImg} alt="border-img" w="100%" mt="-200px"/> */}
        </Box>
    )
}

export default Product
