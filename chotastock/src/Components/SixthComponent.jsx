import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import bgComp from "../Images/bgPattern.png";
import hand from "../Images/hand.png";
import bulb from "../Images/bulb.png"
import img1 from "../Images/img1.png"
import img2 from "../Images/img50.png"
import img3 from "../Images/img51.png"


const SixthComponent = () => {
  return (
    <Box
      m={"2% 8%"}
      mt={"5%"}
      h={"65vh"}
      borderRadius={"50px"}
      bgColor={"#171E27"}
    >
      <Box bgImage={`url(${bgComp})`} borderRadius={"50px"} h={"60vh"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          p={"1% 4%"}
        >
          <Box color={"white"} pr={"10%"} w={"80%"} >
            <Heading fontSize={"45px"} w={"100%"}> 
              Essential Features for the Super Trader in You - All in{" "}
              <Text as={"span"} color="#f8b721">
                One Platform
              </Text>
            </Heading>
            <Text color="#CECECE"  ml="2%" mt={"5%"} lineHeight={"22px"} fontSize={"24px"} w="70%">
              Save hours of research by using our readymade screens to find your
              next investment 
            </Text>
            <Flex color="#CECECE" ml="2%" mt="3%" gap="2%" w="75%" placeItems={"center"}>
            <Box >
                <Image src={bulb}/>
            </Box>
            <Text fontSize={"24px"} lineHeight={"30px"}>30+ ANALYTICAL TOOLS & CHARTING + LIVE TRADES +
              STOCK PICKS & MUCH MORE</Text>
              </Flex>
              <Flex  mt={"8%"} gap="5%" placeItems={"center"}>
            <Button
            
              bg={"linear-gradient(99deg, #FEC826 0%, #F3A61D 100%);"}
              borderRadius={"35px"}
              ml="2%"
            >
              Get started now
            </Button>
            <Text fontSize={"20px"} textDecoration={"underline"}>See all features</Text></Flex>
          </Box>
          <Box position={"relative"} w={"30%"} mt="-10%">
            <Image  src={img1} />
            <Image position={"absolute"} top="40%" right="25%"  src={img2} />
            <Image position={"absolute"} top="75%" right="40%" src={img3} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SixthComponent;
