import { Box, Flex, Grid, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../Images/InvestPayLogo.png";
import store from "../Images/playstore.png";
import fb from "../Images/fb.png";
import insta from "../Images/insta.png";
import twitter from "../Images/twitter.png";
import youtube from "../Images/youtube.png";

const Footer = () => {
  return (
    <Box mt="10%" bg="#171E27" pb="10">
      <Box w="90%" margin="auto" fontSize={"14px"} color={"#D9D9D9"}>
        <Box w={"20%"} mt="3%" ml="-3%">
          <Image w={"90%"} src={logo} />
        </Box>
        <Flex columns={[2, 2, 4, 4]} mt="3%" color={"white"} gap="2%">
          <Box w="20%">
            <Text color="white" fontSize={"15px"} fontWeight={600}>
              Contact Us
            </Text>
            <Text mt="7%" fontWeight={"100"}>
              8589225625
            </Text>
            <Text fontWeight={"100"}>contact@chhotastock.com</Text>
          </Box>
          <Box w="20%">
            <Text fontWeight={600} fontSize={"15px"}>
              Company
            </Text>
            <Text mt="7%" fontWeight={"100"}>
              About Us
            </Text>
            <Text fontWeight={100}>Privacy policy</Text>
            <Text fontWeight={100}>Terms and Condition</Text>
          </Box>
          <Box w="20%">
            <Text color="white" fontSize={"15px"} fontWeight={600}>
              Quick Links
            </Text>
            <Text color="#D9D9D9" mt="7%">
              Home
            </Text>
            <Text color="#D9D9D9">Gateway</Text>
            <Text color="#D9D9D9">Blog</Text>
          </Box>
          <Box w="20%">
            <Text fontSize={"15px"} color="white" fontWeight={"600"}>
              Download the App Now !
            </Text>
            <Box w={"60%"}>
              <Image w={"100%"} src={store} />
            </Box>
          </Box>
        </Flex>

        <Text mt="2%" fontSize={"16px"} fontWeight={600}>
          Find Us on
        </Text>
        <Flex w="25%" placeItems={"center"} mt="1.2%">
          <Box w="20%">
            <Image w="55%" src={fb} />
          </Box>
          <Box w="20%">
            <Image w="70%" src={youtube} />
          </Box>
          <Box w="20%">
            <Image w="60%" src={insta} />
          </Box>
          <Box w="20%">
            <Image w="60%" src={twitter} />
          </Box>
        </Flex>

        <Box w="95%" mt="5%" fontSize={"12px"} color={"#D9D9D9"} fontWeight={100}>
          <Text>
            © 2022 Chhotastock Technologies Private Limited. All rights
            reserved. CIN - U74999WB2012PTC184187 Chhotastock Technologies
            Private Limited.
          </Text>
          <Text mt="1.2%">
            Chhotastock Technologies builds platforms & investment products to
            invest better in Indian investment asset classes.{" "}
          </Text>
          <Text>
            Investing in Stocks/ETFs (Exchange Traded Funds) are subject to
            market risks. Read all the related documents before investing.
            Investors should consider all risk factors and consult their
            financial advisor before investing
          </Text >
         
          <Text mt="1.2%">
          Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR
          Layout Sector 6, Bengaluru, Karnataka - 560102, India
          </Text>
          <Text mt="1.2%">
            For any query / feedback / clarifications, email at
            contact@chhotastock.com
          </Text>
          <Text mt="1.2%">
            All Investment ideas, model portfolios & advisory are built by SEBI
            Registered Investment advisors (RIAs) & Chhotastock only facilitates
            investments
          </Text>
          <Text>in such baskets, portfolios.</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
