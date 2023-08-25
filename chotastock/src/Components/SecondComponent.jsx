import React from 'react'
import frame from "../Images/Frame.jpeg";
import bike from "../Images/bike.png";
import iphone from "../Images/Iphone.png";
import laptop from "../Images/laptop.png";
import my from "../Images/my.png"
import bounce from "../Images/Bounce.png"
import apple from "../Images/apple.png"
import myntra from "../Images/myntra.png"
import amazon from "../Images/amzaon.png"
import croma from "../Images/croma.png"
import caratlane from "../Images/cartlane.png"
import ease from "../Images/ease.png"
import pepperfry from "../Images/pepperfry.png"
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { BsArrowRight } from "react-icons/bs";


const SecondComponent = () => {
  return (
    <div>
    <Box
        mt="5%"
        h={["40vh","50vh","50vh","60vh"]}
        backgroundImage={`url(${frame})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
       
      >
        <Flex flexDirection={["column","column","column","row"]}  w="80%" m="auto">
          <Box w={["100%","100%","100%","47.5%"]}gap="5%">
            <Text margin={["auto","auto","auto","0px"]} mt="7%" fontSize={"20px"}  color="#00C390">FEATURES</Text>
            <Text mt={["2%"]} fontSize={["26px","28px","30px","32px"]} fontWeight={700}>SAVE NOW. BUY LATER.</Text>
            <Text mt="-1%" fontSize={["26px","28px","30px","32px"]} fontWeight={700}>SIMPLE & REALISTIC</Text>

            <Text fontSize={["19px","21px","23px","25px"]} mt={["1%","1%","1%","4%"]} lineHeight={"30px"} color="#777777" fontWeight={400} w="90%">
              Get what you love and save up over weeks or months to achieve it
              much lower price. Time & Flexibility on your side.
            </Text>

            <Flex mt={["5%","5%","5%","12%"]} gap="10%" placeItems={"center"}>
              <Box  p="1%" pr="2%" pl="2%" borderRadius={"25px"} bgGradient="linear(to-r, #FEC826, #F3A61D)">
              <Text fontSize={["17px","18px","19px","20px"]} fontWeight={500}>Get the App</Text></Box>
              <Text fontSize={["17px","18px","19px","20px"]} fontWeight={500} textDecoration={"underline"}>Learn More</Text>
            </Flex>
          </Box>

          <Box  display={["flex","flex","flex","block"]} gap="5%" w={["100%","100%","100%","47.5%"]}  position={"relative"} mt={["5%","5%","5%","0%"]}>
            <Box
              className="card-1"
              bg={"rgba(59, 59, 60, 1)"}
              color="white"
              w="46%"
              margin={"auto"}
              borderRadius={"5px"}
              mt="10%"
            >
              <Flex>
                <Box w={"46%"}>
                  <Image w={"100%"} src={bike} />
                </Box>
                <Box>
                  <Flex gap="2%" mt="5%" placeItems={"center"}>
                    <Box
                      h="25px"
                      w="25px"
                      bg="black"
                      borderRadius={"50%"}
                    ></Box>
                    <Text color="#9C9C9C" fontSize={"0.8vw"}>Bounce Infinity EV</Text>
                  </Flex>
                  <Box position={"relative"}>
                    <Text mt="2%" fontWeight={500} fontSize={"1vw"}>
                      Save up for your next Bike
                    </Text>
                    <Box position={"absolute"} top="60%" left={"20%"}>
                      <BsArrowRight size={20} color="#00C390" />
                    </Box>
                  </Box>
                </Box>
              </Flex>
              <Box borderRadius={"0px 0px 5px 5px"} bg="black">
                <Flex h="4vh" ml="27%" gap="5%" placeItems={"center"}>
                  <Text color={"#04936D"} fontSize={"0.9vw"}>
                    10% return +
                  </Text>
                  <Flex
                    h="3.8vh"
                    bg="#04936D"
                    pr="5%"
                    pl="5%"
                    mt="-2%"
                    placeItems={"center"}
                  >
                    <Text color={"black"} fontWeight={600} fontSize={"0.9vw"}>
                      Flat ₹400 off
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>

            <Box
              className="card-1"
              bg={"rgba(59, 59, 60, 1)"}
              color="white"
              w="61%"
              margin={"auto"}
              borderRadius={"5px"}
              mt="2%"
            >
              <Flex>
                <Box w={"46%"}>
                  <Image w={"100%"} src={laptop} />
                </Box>
                <Box>
                  <Flex gap="2%" mt="5%" placeItems={"center"}>
                    <Box
                      h="25px"
                      w="25px"
                      bg="black"
                      borderRadius={"50%"}
                    ></Box>
                    <Text color="#9C9C9C" fontSize={"0.8vw"}>Bounce Infinity EV</Text>
                  </Flex>
                  <Box position={"relative"}>
                    <Text mt="2%" fontWeight={500} w={"80%"} fontSize={"1vw"}>
                      Save up for your next laptop{" "}
                    </Text>
                    <Box position={"absolute"} top="60%" left={"25%"}>
                      <BsArrowRight size={20} color="#00C390" />
                    </Box>
                  </Box>
                </Box>
              </Flex>
              <Box borderRadius={"0px 0px 5px 5px"} bg="black">
                <Flex h="4vh" ml="45%" gap="5%" placeItems={"center"}>
                  <Text color={"#04936D"} fontSize={"0.9vw"}>
                    10% return +
                  </Text>
                  <Flex
                    h="3.8vh"
                    bg="#04936D"
                    pr="5%"
                    pl="5%"
                    mt="-2%"
                    placeItems={"center"}
                  >
                    <Text color={"black"} fontWeight={600} fontSize={"0.9vw"}>
                      Flat ₹400 off
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
            <Box
              className="card-3"
              bg={"rgba(59, 59, 60, 1)"}
              color="white"
              w="46%"
              margin={"auto"}
              borderRadius={"5px"}
              mt={["10%","10%","10%","2%"]}
            >
              <Flex>
                <Flex w={"46%"} justifyContent={"center"}>
                  <Image   w={"55%"} src={iphone} />
                </Flex>
                <Box>
                  <Flex gap="2%" mt="5%" placeItems={"center"}>
                    <Box
                      h="25px"
                      w="25px"
                      bg="black"
                      borderRadius={"50%"}
                    ></Box>
                    <Text color="#9C9C9C" fontSize={"0.8vw"}>Bounce Infinity EV</Text>
                  </Flex>
                  <Box position={"relative"}>
                    <Text mt="2%" fontWeight={500} fontSize={"1vw"}>
                      Save up for your next iphone{" "}
                    </Text>
                    <Box position={"absolute"} top="60%" left={"30%"}>
                      <BsArrowRight size={20} color="#00C390" />
                    </Box>
                  </Box>
                </Box>
              </Flex>
              <Box borderRadius={"0px 0px 5px 5px"} bg="black">
                <Flex h="4vh" ml="26%" gap="5%" placeItems={"center"}>
                  <Text color={"#04936D"} fontSize={"0.9vw"}>
                    10% return +
                  </Text>
                  <Flex
                    h="3.8vh"
                    bg="#04936D"
                    pr="5%"
                    pl="5%"
                    mt="-2%"
                    placeItems={"center"}
                  >
                    <Text color={"black"} fontWeight={600} fontSize={"0.9vw"}>
                      Flat ₹400 off
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>




<Box display={["none","none","none","block"]}>
<Box top="30%" position={"absolute"}> <Image w={"80%"} src={my}/></Box>
<Box top="15%" left={"5%"}  position={"absolute"}><Image w={"80%"} mixBlendMode={"darken"} src={bounce}/></Box>
<Box top="-3%" left={"18%"} position={"absolute"}><Image w={"80%"} mixBlendMode={"darken"} src={apple}/></Box>
<Box top="-6%" left="33%" position={"absolute"}><Image w={"80%"} mixBlendMode={"darken"} src={myntra}/></Box>
<Box top="-8%" left="55%"  position={"absolute"}><Image w={"80%"} mixBlendMode={"darken"} src={amazon}/></Box>
<Box top="-4.5%" left="70%" position={"absolute"}><Image w={"80%"} mixBlendMode={"darken"} src={croma}/></Box>
<Box w={"25%"} top="10%" left="82%" position={"absolute"}><Image  mixBlendMode={"darken"} src={caratlane}/></Box>
<Box w="18%" top="25%" left="85%" position={"absolute"}><Image  mixBlendMode={"darken"} src={ease}/></Box>
<Box w={"35%"} top="45%" left="90%" position={"absolute"}> <Image w={"80%"} mixBlendMode={"darken"} src={pepperfry}/></Box>


</Box>



          </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default SecondComponent