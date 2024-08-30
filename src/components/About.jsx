import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import borderImg from "../assets/border.svg";
import fireCrackerImg from "../assets/firecrackerImg.svg"

const About = () => {
    return (
        <Box w="80%" m="auto" my="50px">
            <HStack justify="space-between" spacing={8}>
                <Image src={borderImg} alt="border-img" />
                <Heading color="#F27121">About</Heading>
                <Image src={borderImg} alt="border-img" />
            </HStack>

            <HStack justify="space-between" align="center" mt="20px">
                <Box pt="60px">
                    <Image src={fireCrackerImg} alt="fireCracker-svg" />
                </Box>
                <Text w="60%" textAlign="center" fontSize="18px" lineHeight="30px" letterSpacing="2px">
                    Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them.
                </Text>
                <Box pt="60px">
                    <Image src={fireCrackerImg} alt="fireCracker-svg" />
                </Box>
            </HStack>
        </Box>
    )
}

export default About
