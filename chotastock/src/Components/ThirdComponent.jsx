import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import BlackCard from './BlackCard'

import BlackCard1 from "../Images/blackCard-1.png"
import BlackCard2 from "../Images/BlackCard2.png"
import BlackCard3 from "../Images/BlackCard-3.png"
import BlackCard4 from "../Images/BlackCard-4.png"

const ThirdComponent = () => {
  return (
    <Box w="80%" margin="auto" mt="5%" fontFamily={"inter,san-serif;"}>
    <Box w={["100%","100%","100%","50%"]}>
        <Text fontSize={["26px","28px","30px","32px"]} fontWeight={600}>STOCK INVESTING SIMPLIFIED</Text>
        <Text mt="4%" color="#777777" lineHeight={"32px"} fontSize={["19px","20px","21px","22px"]} w={["100%","100%","100%","80%"]}>Online trading and investing in the market does not have ot be bring</Text>
        <Text mt="3%" color="#777777" lineHeight={"32px"} fontSize={["19px","20px","21px","22px"]} >While we adopt a technology-led approach in</Text>
        <Text  color="#777777" lineHeight={"32px"} fontSize={["19px","20px","21px","22px"]}>building our product, we are keeping our users-investors and traders even before that</Text>
    </Box>
    <SimpleGrid mt="5%" columns={[2,2,2,4]} gap="2%">
<BlackCard image={BlackCard1} text={"Value Deals"}/>
<BlackCard image={BlackCard2} text={"EV Revolution"}/>
<BlackCard image={BlackCard3} text={"Hidden Gems"}/>
<BlackCard image={BlackCard4} text={"Hidden Gems"}/>
</SimpleGrid>
    </Box>
  )
}

export default ThirdComponent