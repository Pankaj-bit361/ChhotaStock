import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {SlLogin} from "react-icons/sl"

import { Search2Icon } from "@chakra-ui/icons";
import PhoneImage from "../Images/mobile.png"
import Logo from "../Images/InvestPayLogo.png"
import frame from "../Images/Frame.jpeg"


const Home = () => {

    const boxStyle = {
        height: '60vh',
        width: '55%',
        border: '1px solid rgb(87, 52, 158)',
        borderRadius: '500px 500px 0px 0px',
      
      };
      const boxStyle2 = {
        height: '50vh',
        width: '85%',
        border: '1px solid rgb(87, 52, 158)',
        borderRadius: '500px 500px 0px 0px',
       
      };
      const boxStyle3 = {
        height: '41vh',
        width: '85%',
        border: '1px solid rgb(87, 52, 158)',
        borderRadius: '500px 500px 0px 0px',
       
      };
      const boxStyle4 = {
        height: '34vh',
        width: '85%',
        border: '1px solid rgb(87, 52, 158)',
        borderRadius: '500px 500px 0px 0px',
       
      };
  return (
    <Box bg="#f7f7f7">
    <Box bg="#161f27" >
      <Box>
        <Flex
          justifyContent={"space-around"}
          placeItems={"center"}
          color={"white"}
          bg="#161f27"
        >
          <Box>
            <MdOutlineKeyboardArrowLeft />
          </Box>

          <Flex gap="4%" fontSize={"13px"} lineHeight={"18px"}>
            <Text fontWeight={"500"}>ANK</Text>
            <Text>43,851.05</Text>
            <Flex placeItems={"center"} color={"red"}>
              <Box>
                <TiArrowSortedDown size={15} />
              </Box>
              <Text>0.09%</Text>
            </Flex>
          </Flex>

          <Flex gap="4%" fontSize={"13px"} lineHeight={"18px"}>
            <Text fontWeight={"500"}>BAJFINANCE</Text>
            <Text>6,862.10</Text>
            <Flex placeItems={"center"} color={"red"}>
              <Box>
                <TiArrowSortedDown size={15} />
              </Box>
              <Text>0.88%</Text>
            </Flex>
          </Flex>

          <Flex gap="4%" fontSize={"13px"} lineHeight={"18px"}>
            <Text fontWeight={"500"}>BHARTIARTL</Text>
            <Text>8516.25</Text>
            <Flex placeItems={"center"} color="red">
              <Box>
                <TiArrowSortedDown size={15} />
              </Box>
              <Text>0.04%</Text>
            </Flex>
          </Flex>

          <Flex gap="4%" fontSize={"13px"} lineHeight={"18px"}>
            <Text fontWeight={"500"}>HDFCBANK</Text>
            <Text>1,590.75</Text>
            <Flex placeItems={"center"} color="red">
              <Box>
                <TiArrowSortedDown size={15} />
              </Box>
              <Text>0.41%</Text>
            </Flex>
          </Flex>

          <Flex gap="4%" fontSize={"13px"} lineHeight={"18px"}>
            <Text fontWeight={"500"}>HINDUNILVR</Text>
            <Text>2,554.75</Text>
            <Flex placeItems={"center"} color="green">
              <Box>
                <TiArrowSortedUp size={15} />
              </Box>
              <Text>0.45%</Text>
            </Flex>
          </Flex>

          <Flex gap="4%" fontSize={"13px"} lineHeight={"18px"}>
            <Text fontWeight={"500"}>INDIGO</Text>
            <Text>2,454.30</Text>
            <Flex placeItems={"center"} color="green">
              <Box>
                <TiArrowSortedUp size={15} />
              </Box>
              <Text>0.22%</Text>
            </Flex>
          </Flex>

          <Flex  gap="4%" fontSize={"13px"} lineHeight={"18px"}>
            <Text fontWeight={"500"}>ITC</Text>
            <Text>441.65</Text>
            <Flex placeItems={"center"} color="green">
              <Box>
                <TiArrowSortedUp size={15} />
              </Box>
              <Text>0.15%</Text>
            </Flex>
          </Flex>

          <Flex gap="4%" fontSize={"13px"} lineHeight={"18px"}>
            <Text fontWeight={"500"}>MARUTI</Text>
            <Text>8,456.05</Text>
            <Flex placeItems={"center"} color="green">
              <Box>
                <TiArrowSortedUp size={15} />
              </Box>
              <Text>0.86%</Text>
            </Flex>
          </Flex>

          <MdOutlineKeyboardArrowRight />
        </Flex>
      </Box>
      <Divider />

      <Flex mt="2%" color={"white"} w="75%" margin={"auto"} h="12vh"  placeItems={"center"} justifyContent={"space-between"}>
        <Box  w={"20%"} >
 <Image  w={"100%"} src={Logo}/>

        </Box>
        <Text position={"absolute"} top="8.5%" left="17.7%" fontSize={"11px"}>INVEST TO PAY. INVEST TO SPEND</Text>
        <Box w="33%" mr="4%" h="4vh" color={"white"}>
          <InputGroup borderRadius={"25px"}>
            <InputLeftElement pointerEvents="none">
              <Search2Icon boxSize={3} mt="-10px" color="white" />
            </InputLeftElement>
            <Input borderRadius={"5px"} border={"none"} color={"white"} _placeholder={{ color: 'white' ,marginLeft:"5%"}} bg="#81878c" h="4vh" type="tel" size={"sm"} placeholder="Search stocks, ETFs, indicies" />
          </InputGroup>
        </Box>
        <Flex w="10%"  p="0.7%" borderRadius={"25px"} bg="#f7b421" color="black" placeContent={"center"} placeItems={"center"} gap="5%" >
            <SlLogin size={22}/>
            <Text fontWeight={"600"} fontSize={"20px"}>Login</Text>
        </Flex>
      </Flex>

<Heading mt="2%" fontSize={"45px"} letterSpacing={"1.5px"} lineHeight={"70px"} textAlign={"center"} color="white">Knowledge Based</Heading>
<Heading fontSize={"42px"} letterSpacing={"1.5px"} textAlign={"center"} color={"white"}>Investing & Trading</Heading>
<Text w="75%" fontSize={"28px"} color="white" margin={"auto"} mt="1%">Ready-made solutions + Deep Research + Disciplined Investing + Advanced Trading tools</Text>


{/* <Box mt="5%">
<Box  border={"1px solid #57349e"}  style={boxStyle} margin={"auto"} >
    <Box  border={"1px solid rgb(87,52,158)"} style={boxStyle2} margin={"auto"} mt="8.5%">
    <Box  border={"1px solid rgb(87,52,158)"} style={boxStyle3} margin={"auto"} mt="8.5%">
    <Box  border={"1px solid rgb(87,52,158)"} style={boxStyle4} margin={"auto"} mt="8.5%">

    </Box>
    </Box>
    </Box>
</Box>
</Box> */}

<Box w="60%" margin={"auto"}  mt="2%">
  <Image src={PhoneImage} alt="phone"/>
</Box>
    </Box>



    <Box
    mt="5%"
  h="70vh"
  backgroundImage={`url(${frame})`} 
  bgSize="cover"
  bgPosition="center"
  bgRepeat="no-repeat"


>
 <Flex w="80%" m="auto">
<Box>
  <Text>FEATURES</Text>
  <Text>SAVE NOW. BUY LATER.</Text>
  <Text>SIMPLE & REALISTIC</Text>

  <Text>Get what you love and save up over weeks or months to achieve it much lower price. Time & Flexibility on your side.</Text>

  <Flex>
    <Box>
      Get the App
    </Box>
    <Text>Learn More</Text>
  </Flex>
</Box>




<Box></Box>
 </Flex>
</Box>
    </Box>
  );
};

export default Home;
