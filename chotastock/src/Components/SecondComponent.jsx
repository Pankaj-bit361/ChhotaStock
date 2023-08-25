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
        h="80vh"
        backgroundImage={`url(${frame})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
       
      >
        <Flex w="80%" m="auto">
          <Box w="47.5%" gap="5%">
            <Text mt="7%" fontSize={"20px"} color="#00C390">FEATURES</Text>
            <Text mt="2%" fontSize={"32px"} fontWeight={700}>SAVE NOW. BUY LATER.</Text>
            <Text mt="-1%" fontSize={"32px"} fontWeight={700}>SIMPLE & REALISTIC</Text>

            <Text fontSize={"25px"} mt="4%" lineHeight={"30px"} color="#777777" fontWeight={400} w="90%">
              Get what you love and save up over weeks or months to achieve it
              much lower price. Time & Flexibility on your side.
            </Text>

            <Flex mt="12%" gap="10%" placeItems={"center"}>
              <Box  p="1%" pr="2%" pl="2%" borderRadius={"25px"} bgGradient="linear(to-r, #FEC826, #F3A61D)">
              <Text fontSize={"20px"} fontWeight={500}>Get the App</Text></Box>
              <Text  fontSize={"20px"} fontWeight={500} textDecoration={"underline"}>Learn More</Text>
            </Flex>
          </Box>

          <Box w="47.5%"  position={"relative"}>
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
                    <Text color="#9C9C9C" fontSize={"12px"}>Bounce Infinity EV</Text>
                  </Flex>
                  <Box position={"relative"}>
                    <Text mt="2%" fontWeight={500} fontSize={"14px"}>
                      Save up for your next Bike{" "}
                    </Text>
                    <Box position={"absolute"} top="60%" left={"20%"}>
                      <BsArrowRight size={20} color="#00C390" />
                    </Box>
                  </Box>
                </Box>
              </Flex>
              <Box borderRadius={"0px 0px 5px 5px"} bg="black">
                <Flex h="4vh" ml="35%" gap="5%" placeItems={"center"}>
                  <Text color={"#04936D"} fontSize={"12px"}>
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
                    <Text color={"black"} fontWeight={600} fontSize={"12px"}>
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
                    <Text color="#9C9C9C" fontSize={"12px"}>Bounce Infinity EV</Text>
                  </Flex>
                  <Box position={"relative"}>
                    <Text mt="2%" fontWeight={500} w={"80%"} fontSize={"14px"}>
                      Save up for your next laptop{" "}
                    </Text>
                    <Box position={"absolute"} top="60%" left={"25%"}>
                      <BsArrowRight size={20} color="#00C390" />
                    </Box>
                  </Box>
                </Box>
              </Flex>
              <Box borderRadius={"0px 0px 5px 5px"} bg="black">
                <Flex h="4vh" ml="50%" gap="5%" placeItems={"center"}>
                  <Text color={"#04936D"} fontSize={"12px"}>
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
                    <Text color={"black"} fontWeight={600} fontSize={"12px"}>
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
              mt="2%"
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
                    <Text color="#9C9C9C" fontSize={"12px"}>Bounce Infinity EV</Text>
                  </Flex>
                  <Box position={"relative"}>
                    <Text mt="2%" fontWeight={500} fontSize={"14px"}>
                      Save up for your next iphone{" "}
                    </Text>
                    <Box position={"absolute"} top="60%" left={"30%"}>
                      <BsArrowRight size={20} color="#00C390" />
                    </Box>
                  </Box>
                </Box>
              </Flex>
              <Box borderRadius={"0px 0px 5px 5px"} bg="black">
                <Flex h="4vh" ml="35%" gap="5%" placeItems={"center"}>
                  <Text color={"#04936D"} fontSize={"12px"}>
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
                    <Text color={"black"} fontWeight={600} fontSize={"12px"}>
                      Flat ₹400 off
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>





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
        </Flex>
      </Box>
    </div>
  )
}

export default SecondComponent