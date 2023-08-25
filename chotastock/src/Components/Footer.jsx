import { Box, Flex, Grid, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../Images/InvestPayLogo.png"
import store from "../Images/playstore.png"
const Footer = () => {
  return (
    <Box mt="10%" bg="#171E27" h="90vh">
    <Box w="90%" margin="auto"  fontSize={"14px"} color={"#D9D9D9"}>

    <Box w={"20%"} mt="3%" ml="-3%"><Image w={"90%"}  src={logo}/></Box>
<Flex columns={[2,2,4,4]} mt="3%"   color={"white"} gap="2%">
<Box  w="20%">
    <Text color="white" fontSize={"15px"} fontWeight={600}>Contact Us</Text>
    <Text mt="7%" fontWeight={"100"}>8589225625</Text>
    <Text fontWeight={"100"}>contact@chhotastock.com</Text>
</Box>
<Box w="20%">
<Text fontWeight={600} fontSize={"15px"}>Company</Text>
<Text mt="7%" fontWeight={"100"}>About Us</Text>
<Text fontWeight={100}>Privacy policy</Text>
<Text fontWeight={100}>Terms and Condition</Text>
</Box>
<Box  w="20%">
<Text color="white" fontSize={"15px"} fontWeight={600}>Quick Links</Text>
<Text color="#D9D9D9" mt="7%">Home</Text>
<Text color="#D9D9D9" >Gateway</Text>
<Text color="#D9D9D9">Blog</Text>
</Box>
<Box w="20%">
<Text fontSize={"15px"} color="white" fontWeight={"600"}>Download the App Now !</Text>
<Box w={"60%"}>
    <Image w={"100%"} src={store}/>
</Box>
</Box>

</Flex>
    </Box>
  
    </Box>
  )
}

export default Footer