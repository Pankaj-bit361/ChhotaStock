import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SlLogin } from "react-icons/sl";

import { Search2Icon } from "@chakra-ui/icons";
import PhoneImage from "../Images/mobile.png";
import Logo from "../Images/InvestPayLogo.png";

import SecondComponent from "../Components/SecondComponent";
import ThirdComponent from "../Components/ThirdComponent";
import FourthComponent from "../Components/FourthComponent";
import FifthComponet from "../Components/FifthComponet";
import Footer from "../Components/Footer";
import SixthComponent from "../Components/SixthComponent";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const boxStyle = {
    height: "60vh",
    width: "55%",
    border: "1px solid rgb(87, 52, 158)",
    borderRadius: "500px 500px 0px 0px",
  };
  const boxStyle2 = {
    height: "50vh",
    width: "85%",
    border: "1px solid rgb(87, 52, 158)",
    borderRadius: "500px 500px 0px 0px",
  };
  const boxStyle3 = {
    height: "41vh",
    width: "85%",
    border: "1px solid rgb(87, 52, 158)",

    borderRadius: "500px 500px 0px 0px",
  };
  const boxStyle4 = {
    height: "34vh",
    width: "85%",
    border: "1px solid rgb(87, 52, 158)",
    borderRadius: "500px 500px 0px 0px",
  };

  const navigate = useNavigate();

  return (
    <Box bg="#f7f7f7">
      <Box bg="#161f27">
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

            <Flex gap="4%" fontSize={"0.9vw"} lineHeight={"18px"}>
              <Text fontWeight={"500"}>ANK</Text>
              <Text>43,851.05</Text>
              <Flex placeItems={"center"} color={"red"}>
                <Box>
                  <TiArrowSortedDown size={15} />
                </Box>
                <Text>0.09%</Text>
              </Flex>
            </Flex>

            <Flex gap="4%" fontSize={"0.9vw"} lineHeight={"18px"}>
              <Text fontWeight={"500"}>BAJFINANCE</Text>
              <Text>6,862.10</Text>
              <Flex placeItems={"center"} color={"red"}>
                <Box>
                  <TiArrowSortedDown size={15} />
                </Box>
                <Text>0.88%</Text>
              </Flex>
            </Flex>

            <Box display={["none", "none", "block", "block"]}>
              <Flex gap="4%" fontSize={"0.9vw"} lineHeight={"18px"}>
                <Text fontWeight={"500"}>BHARTIARTL</Text>
                <Text>8516.25</Text>
                <Flex placeItems={"center"} color="red">
                  <Box>
                    <TiArrowSortedDown size={15} />
                  </Box>
                  <Text>0.04%</Text>
                </Flex>
              </Flex>
            </Box>

            <Box display={["none", "none", "none", "block"]}>
              <Flex gap="4%" fontSize={"0.9vw"} lineHeight={"18px"}>
                <Text fontWeight={"500"}>HDFCBANK</Text>
                <Text>1,590.75</Text>
                <Flex placeItems={"center"} color="red">
                  <Box>
                    <TiArrowSortedDown size={15} />
                  </Box>
                  <Text>0.41%</Text>
                </Flex>
              </Flex>
            </Box>

            <Box display={["none", "none", "none", "block"]}>
              <Flex gap="4%" fontSize={"0.9vw"} lineHeight={"18px"}>
                <Text fontWeight={"500"}>HINDUNILVR</Text>
                <Text>2,554.75</Text>
                <Flex placeItems={"center"} color="green">
                  <Box>
                    <TiArrowSortedUp size={15} />
                  </Box>
                  <Text>0.45%</Text>
                </Flex>
              </Flex>
            </Box>

            <Box display={["none", "none", "block", "block"]}>
              <Flex gap="4%" fontSize={"0.9vw"} lineHeight={"18px"}>
                <Text fontWeight={"500"}>INDIGO</Text>
                <Text>2,454.30</Text>
                <Flex placeItems={"center"} color="green">
                  <Box>
                    <TiArrowSortedUp size={15} />
                  </Box>
                  <Text>0.22%</Text>
                </Flex>
              </Flex>
            </Box>
            <Flex gap="4%" fontSize={"0.9vw"} lineHeight={"18px"}>
              <Text fontWeight={"500"}>ITC</Text>
              <Text>441.65</Text>
              <Flex placeItems={"center"} color="green">
                <Box>
                  <TiArrowSortedUp size={15} />
                </Box>
                <Text>0.15%</Text>
              </Flex>
            </Flex>

            <Flex gap="4%" fontSize={"0.9vw"} lineHeight={"18px"}>
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

        <Flex
          mt="2%"
          color={"white"}
          w="75%"
          margin={"auto"}
          h="12vh"
          placeItems={"center"}
          justifyContent={"space-between"}
          position={"relative"}
        >
          <Box w={["26%", "24%", "22%", "20%"]}>
            <Image w={"100%"} src={Logo} onClick={() => navigate("/")} />
          </Box>
          <Text
            position={"absolute"}
            top={["58%", "60%", "62%", "65%"]}
            color={"white"}
            left={["9.5%", "8.5%", "8%", "7%"]}
            fontSize={["1vw", "1vw", "0.9vw", "0.8vw"]}
          >
            INVEST TO PAY. INVEST TO SPEND
          </Text>
          <Box w="33%" mr="4%" h="4vh" color={"white"}>
            <InputGroup borderRadius={"25px"}>
              <InputLeftElement pointerEvents="none">
                <Search2Icon
                  boxSize={3}
                  mt={["-10px", "-12px", "-10px"]}
                  color="white"
                />
              </InputLeftElement>
              <Input
                borderRadius={"5px"}
                border={"none"}
                color={"white"}
                _placeholder={{ color: "white", marginLeft: "5%" }}
                bg="#81878c"
                h="4vh"
                type="tel"
                size={"sm"}
                placeholder="Search stocks, ETFs, indicies"
              />
            </InputGroup>
          </Box>
          <Flex
            w={["16%", "14%", "12%", "10%"]}
            p="0.7%"
            borderRadius={"25px"}
            bg="#f7b421"
            color="black"
            placeContent={"center"}
            placeItems={"center"}
            gap="5%"
          >
            <SlLogin size={[16, 18, 20, 22]} />
            <Text
              onClick={() => navigate("/home2")}
              fontWeight={"600"}
              fontSize={["12px", "15px", "19px", "1.3vw"]}
            >
              Login
            </Text>
          </Flex>
        </Flex>

        <Heading
          mt="2%"
          fontSize={["16px", "26px", "35px", "45px"]}
          letterSpacing={"1.5px"}
          lineHeight={["24px", "36px", "48px", "60px"]}
          textAlign={"center"}
          color="white"
        >
          Knowledge Based
        </Heading>
        <Heading
          fontSize={["15px", "24px", "33px", "42px"]}
          letterSpacing={"1.5px"}
          textAlign={"center"}
          color={"white"}
        >
          Investing & Trading
        </Heading>
        <Text
          w="75%"
          fontSize={["13px", "17px", "22px", "28px"]}
          textAlign={"center"}
          color="white"
          margin={"auto"}
          mt="1%"
        >
          Ready-made solutions + Deep Research + Disciplined Investing +
          Advanced Trading tools
        </Text>

        <Box w="60%" margin={"auto"} mt="2%">
          <Image src={PhoneImage} alt="phone" />
        </Box>
      </Box>

      <SecondComponent />
      <SixthComponent />
      <ThirdComponent />
      <Divider w="80%" margin={"auto"} mt="5%" border="1px solid black" />
      <FourthComponent />
      <Divider w="80%" margin={"auto"} mt="5%" border="1px solid black" />
      <FifthComponet />

      <Footer />
    </Box>
  );
};

export default Home;
