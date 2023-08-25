import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const BlackCard = ({image,text}) => {
  return (
    <Box border={"1px solid black"} bg="#222529" color="white" borderRadius={"10px"} pb="5%">
    <Flex w="90%" margin={"auto"} gap="5%" placeItems={"center"}>
        <Flex mt="7%" h="53px" bg="#171E27" boxShadow={"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;"} w="80px" border={"0.5px solid white"} p="2%" placeContent={"center"} borderRadius={"10px"}>
            <Image  w="40px" h="27px"  src={image}/>

        </Flex>
        <Text  fontWeight={600} fontSize={"18px"}>{text}</Text>
    </Flex>
    <Text w="90%" color="#D9D9D9" fontSize={"13.5px"} fontWeight={200} margin={"auto"} mt="3%">For the people who would love to risk huge to get rewararded. People who would love to risk huge to get rewarded</Text>

    <Flex  gap="15%" w="90%" margin={"auto"} mt="10%" >
        <Box>
            <Text fontSize={"10px"} fontWeight={100}>CAGR</Text>
            <Text fontSize={"14px"} fontWeight={600}>17.80%</Text>
        </Box>
        <Box>
            <Text fontSize={"10px"} fontWeight={100}>Min Amount</Text>
            <Text fontSize={"14px"} fontWeight={600}>120</Text>
        </Box>
    </Flex>

    </Box>
  )
}

export default BlackCard