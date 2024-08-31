import bannerImg from "../assets/bannerImage.jpeg";
import { Image, Heading, HStack, Box, Button, Modal, Text, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure, Stack, UnorderedList, ListItem } from "@chakra-ui/react"
import bannerImage from "../assets/bannerImage.jpeg";
import multiBannerImg from "../assets/multiBannerImg.svg";
import productDetailBorder from "../assets/productDetailBorder.svg"
import Navbar from "./Navbar";

const Banner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Background Image Banner */}
      <Box position="relative">
        <Navbar />
        <Image src={bannerImg} alt="banner-img" w="100%" height="95vh" objectFit="fill" />
        {/* Text and Button section on Banner */}
        <Box position="absolute" top="30%" left="5%">
          <Heading color="white" w="50%" fontSize={{ sm: "20px", md: "40px", lg: "55px", xl: "55px" }}>The choice is yours.  Because they don’t have one.</Heading>
          <Button onClick={onOpen} _hover={{ bgColor: "rgba(255,255,255,0.8)" }} cursor="pointer" py={15} px={45} border="none" color="#FE0000" fontWeight="bold">QUICK VIEW</Button>
        </Box>
      </Box>


      {/* Modal Section*/}
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl" >
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='auto'
          backdropInvert='30%'
          backdropBlur='2px'
        />
        {/* Modal Content section */}
        <ModalContent p="20px 20px 0 20px" bgColor="white" h="75vh" w="50vw" top="10vh" left="50vh">

          <ModalBody m="0" >

            {/* Single Product Details */}
            <HStack spacing={10}>
              {/* Product Image Section in Modal*/}
              <Box w="100%" h="100%">
                <Image w="100%" h="100%" src={bannerImage} alt="product-img" />
                <Image w="100%" src={multiBannerImg} alt="product-img" />
              </Box>

              {/* Product Detail section in Modal*/}
              <Stack h="100%" w="100%" align="flex-start" m="0" p="0">
                <HStack w="100%" justify="space-between">
                  <Heading m="0">Raju Rassibomb</Heading>

                  {/* Modal Button for closing */}
                  <ModalCloseButton cursor="pointer" border="none" width="40px" p="5px" bg="none" fontSize="18px" color="lightgray" />
                </HStack>
                <Text fontSize="20px" m="0" textAlign="start">MRP</Text>
                <Heading mt="0">{`Raju's Dreams/-`}</Heading>

                <Image src={productDetailBorder} />

                <Box fontSize="16px">
                  <Text fontWeight="bold">Product Description:</Text>
                  <Text>This product packs an extra punch, thanks to the literal blood, sweat and tears of a young boy. </Text>
                </Box>

                <Image src={productDetailBorder} />

                <Box fontSize="16px">
                  <Text m="0" fontWeight="bold">Product Contents:</Text>
                  <UnorderedList>
                    <ListItem>
                      <Text>10 hand-hurting pieces of rassi bombs</Text>
                    </ListItem>
                    <ListItem>
                      <Text>Jilled with great pain</Text>
                    </ListItem>
                    <ListItem>
                      <Text>Raju’s hopes</Text>
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Image src={productDetailBorder} />

                <Box>
                  <Text m="0" fontWeight="bold">Product Contents:</Text>
                  <Text m="0">Before Raju understands that his dreams do not matter. </Text>
                </Box>

              </Stack>
            </HStack>

            {/* Choose Button section */}
            <Box mt="20px">
              <Button w="100%" h="40px" border="none" bgColor="#FE0000" color="white" fontSize="18px" fontWeight="bold">Choose Now</Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Banner
