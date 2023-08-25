import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import frame from "../Images/frame3.png"
import bg5 from "../Images/bg5.png"

const Banner = () => {
    return (
        <Box bgImage={`url(${frame})`} >
            <Flex p={'6% 15%'} justifyContent={'space-between'} >
                <Box pr={'3%'}>
                    <Heading fontSize={'2.5rem'} color={'#F3A61D'}> INVESTMENT STACK</Heading>
                    <Heading>for India</Heading>
                    <Text fontSize={'1.4rem'} mt={'4%'}>Elevate Your Investment Strategy with Our Comprehensive APIs</Text>
                </Box>
                <Box w={'50%'}>
                    <Text fontSize={'1.4rem'}>Launch financial services in a matter of days. Take your pick from our flexible APIs, SDKs, or ready-to-use screens.</Text>
                    <Text mt={'4%'}>See our products</Text>
                    <Button mt={'5%'} borderRadius={'20px'} bg={'linear-gradient(99deg, #FEC826 0%, #F3A61D 100%);'} color={'black'}>Contact Us</Button>
                </Box>
            </Flex>

            <Flex  mt={'8%'} alignItems={'center'} justifyContent={'center'}>
                <Box bg={'linear-gradient(337deg, #C0CEED 0%, #CDBFD3 7.81%, #D100CE 31.77%, #FC583D 44.27%, #E5CCD1 71.35%, #FDD8D0 78.13%, #FA8A77 99.91%);'} color={'black'} transform={'rotate(2.739deg);'} w={'15%'} mt={'-8%'} h={'40vh'} borderRadius={'25px'} p={'1%'}>
                    <Box w={'25%'}><Image src={bg5} w={'100%'} /></Box>
                    <Text fontSize={'1.4rem'} fontWeight={'600'}>Mutual Fund</Text>
                </Box>
            </Flex>

            <Flex alignItems={'center'} justifyContent={'center'} >
                <Box bg={'linear-gradient(138deg,  #74DB96 0%, #1DF5F4 99.91%);'} color={'black'} w={'15%'} h={'30vh'} borderRadius={'25px'} p={'1%'} transform={'rotate(-14.407deg);'} mt={'-11%'}>
                    <Box w={'25%'}><Image src={bg5} w={'100%'} /></Box>
                    <Text fontSize={'1.4rem'} fontWeight={'600'}>Stocks</Text>
                </Box>

                <Box bg={'linear-gradient(85deg, #FEC974 0%, #FA8A77 99.91%);'} color={'black'} w={'15%'} h={'30vh'} borderRadius={'25px'} transform={'rotate(25.199deg)'}  ml={'5%'} mt={'-11%'} p={'1%'}>
                    <Box w={'25%'}><Image src={bg5} w={'100%'} /></Box>
                    <Text fontSize={'1.4rem'} fontWeight={'600'}>Digital Gold</Text>
                </Box>
            </Flex>

        </Box>
    )
}

export default Banner
