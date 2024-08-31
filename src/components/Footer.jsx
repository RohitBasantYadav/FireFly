import { Box, Heading, HStack, Image, Stack } from "@chakra-ui/react"
import footerBorder from "../assets/footerBorder.svg";
import footerDeco from "../assets/footerDeco.svg";

function Footer() {
  return (
    <>
      <Image src={footerBorder} alt="border-svg" w="100%" />
      <Box bgColor="#25A769">
        <HStack justify="space-between">
          <Image src={footerDeco} alt="" />
          <Stack justify="center" align="center">
            <Heading color="#ECE14C">Follow us On</Heading>

            {/* Social Media links */}
            <HStack justify="space-between" p="10px">
              <Image w="10%" src="https://s3-alpha-sig.figma.com/img/a569/a252/98ad4bac62c5d9f48886f4cc17a7a334?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eCmeFv2mrs-e3cF3waIZdWZtGfqTCK1WatvdK~sLkhIagIMat1BTNGabsW3TllLtUEj84R6gNtNNujry96NVB6oGYs37c48Ic~WDELuHsb08oanstu4CRE~6Mcuxs3wu~DxjGzkWBZQudSGyA4pYZUS3yPc7SFoGUozDpc7wL8qihr5eN9Xz6mBXMRZ3XStn3JkXum4DgQ19D1DBdRwROUs-1wgp0tzJV379IMvgXEuqcSTWYxLsZjCOekAP3SJsqzUbALeBPJ2pNoTJvasmknsmV367~SfTf82acbUPXBZgniVanodncxBMmhpA0xRJuHzVMcDLonNYN0HjDsMF6Q__" alt="instagram" />
              <Image w="10%" src="https://s3-alpha-sig.figma.com/img/afff/a78b/0c0a25d9e71be520bb460ddb410bbb7a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVK4o-v8IOEjsrZDSil~yKRd7aIT2QzhG29rzjLmNWHWmzENwef2rc4-i-bDDvdijPI0PWc0laQ8yLBuOE7nxYtuLOuNDrcB79WzZ6d9cnSkE7DYGd1FUuKu0H5EquI4ZxbuKwJJYCeoCJVBAa1~-V3WpjMZn9S5r7-jai3zWHqjWtRTx-dqn9MVoOHrxsCkqqaPI~4Pj6dhlirajffuUln8trutj7SagsEBLkX08T7pTMgNOx2teeD7immFYWFh0hmzMjJrKR22ocDHaCx2j5Ml0mb9RqAR5YM0PxocMyjhewxoeInk3xO7unVr1XWywKjwymzeGy-rCdqCtyRPxg__" alt="youtube" />
              <Image w="10%" src="https://s3-alpha-sig.figma.com/img/4c5c/a965/cf3f5538ea0e143e7bb2c01d74a24c88?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZ~HvUAHagX0jf747kyiG4rXN74MEG6puliXnsLMjF0XS7f1uwU273xIWvdfqXPVWch7es9wD5gu-udkOYdYTccW4b2h9UBD0Z483k26j2eYNFAH-tIVdnV47GYIHBtfOzhFJiGd~09xV1v1oieMv8ixqHXv~u8tjquc3PW8HEXEDD2oXoEha1VWqDqCt3gkoyr08zEdPnJYfMvtQAJ7kGEWdBFwO0BiftJ8ZIvrjcIfCfylJtnEeKEaCxQDMKeYNq8mKgfmIZmKaThr83S2NfzS1tYA2SWFz1Tx27XkSeJU5p9yPrcotqeGReYW3VrniA3BEW7M1wMBDrueBTL6lg__" alt="twitter" />
              <Image w="10%" src="https://s3-alpha-sig.figma.com/img/098b/6848/74eda9afaa6a343c38d1e4e5a7c62078?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UceB3IBK-P4Kdynntq83Vezi7w-mzbwIQSClkDWPPpVxhafTDm0u~hnoP06hLSqG1pLlbL4R1sFF4r7kOY0pgPYqB9zn8B6MF1mnv-fZrhaG1BnRIfH0aA2TZQdBC7FP-KwN8dFtCOK6bTNinQh8ZwgKUfRMcVn1-2h7yXpcCtDg2flcRReTaPTXEc52tShkMdGlmYdLCNrwFePPNbrzVWMYyoDXqCrq-mSGkcSu8kGAF0OJhg8YRaraQnbeDhjIP~K0NagPzxBAev4XbMfU~TD-xzrRwVHLiMSiW-OvSROcRSexwh0FoEAJ7XTBueTHBlgPQakyaK7~4uay1hKFjA__" alt="facebook" />
              <Image w="10%" src="https://s3-alpha-sig.figma.com/img/d190/69d0/b2b64a6f5cf2f6897396b3bda7068949?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObtESTNNWZNFSpLJVdnlKsN2~Aj0wBwWrgJx-Dm0~Q0KN~NZaJOjr5qIkNachWrljVR90X1zRxZPFMmRdkoia0e0cjURl8JJ0tD7r-9CraRv4lQR88MPWXYWrO~c-B-7ls8t8t0N-tF~QY-LAkbiOe9LUyoaF7JNIb0dGgupNpheTRByQlt1XJuvomgrWR1Bu1mDIIuTyTDanrpom3HOBs-oS3mtjz5reSbP48tK859MAh0hb3SByRegFADoL0w8n8L0eq~OwxjBD1siQBqpIZlO7imnSQdPEqZpBrGY5YxaVU-83goJIDno07QWBHIiJ~zxDtZ62-YFgO9ib61~2A__" alt="linkedin" />
            </HStack>
          </Stack>
          <Image src={footerDeco} alt="" />
        </HStack>

      </Box>
      <Image src={footerBorder} alt="border-svg" w="100%" />
    </>
  )
}

export default Footer
