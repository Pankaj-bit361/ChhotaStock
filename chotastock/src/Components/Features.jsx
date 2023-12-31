import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.png'
import img4 from '../Images/img4.png'
import img5 from '../Images/img5.png'



const Features = () => {
    return (
        <Box bgColor={'white'} mt={'-5%'} position={'relative'} >
            <Box position={'absolute'} bg={'white'} p={'4% 0%'} pt={'10%'}>
                <Text p={'0% 10%'} color={'green.300'}>FEATURES</Text>
                <Flex alignItems={'center'} justifyContent={'space-between'} p={'1% 10%'}>
                    <Box w={'50%'} pr={'6%'}>
                        <Heading>Launch the most Engaging Invest-Tech Solutions</Heading>
                        <Text fontSize={'1.4rem'} mt={'5%'}>We offer a suite of B2B Invest-tech solutions, that are cost-effective way to offer an engaging investment experience to your customers, with a faster time to market</Text>

                        <Flex mt={'15%'} alignItems={'center'} >
                            <Button borderRadius={'50px'} bg={'linear-gradient(99deg, #FEC826 0%, #F3A61D 100%);'}>Get Started</Button>
                            <Text ml={'8%'}>Learn more..</Text>
                        </Flex>
                    </Box>

                    <SimpleGrid columns={['2','2','2','2']} gap={'20px 0px'}>
                    <Box w={'80%'} p={'3% 2%'} textAlign={'center'} h={'30vh'} bgColor={'#F3F3F3'} borderRadius={'50px'} color={'#979797'}>
                        <Text mt={'4%'}>Protection</Text>
                        <Box ><Image src={img2} w={'25%'} display={'flex'} m={'auto'}/></Box>
                        <Text mt={'4%'} p={'0% 5%'}>Data protection guarentees</Text>
                    </Box>
                    <Box w={'80%'} p={'3% 2%'} textAlign={'center'} h={'30vh'} bgColor={'#171E27'} borderRadius={'50px'} color={'white'}>
                        <Text mt={'4%'}>Tracking</Text>
                        <Box ><Image src={img3} w={'25%'} display={'flex'} m={'auto'}/></Box>
                        <Text mt={'4%'} p={'0% 5%'}>Track all your users’ financial transactions</Text>
                    </Box>
                    <Box w={'80%'} p={'3% 2%'} textAlign={'center'} h={'30vh'} bgColor={'#F3F3F3'} borderRadius={'50px'} color={'#979797'}>
                        <Text mt={'4%'}>Flexibility</Text>
                        <Box ><Image src={img4} w={'25%'} display={'flex'} m={'auto'}/></Box>
                        <Text mt={'4%'} p={'0% 5%'}>Custom made for your requirements</Text>
                    </Box>
                    <Box w={'80%'} p={'3% 2%'} textAlign={'center'} h={'30vh'} bgColor={'#F3F3F3'} borderRadius={'50px'} color={'#979797'}>
                        <Text mt={'4%'}>Easiness</Text>
                        <Box ><Image src={img5} w={'25%'} display={'flex'} m={'auto'}/></Box>
                        <Text mt={'4%'} p={'0% 5%'}>Go-to market in less than 7 days</Text>
                    </Box>
                </SimpleGrid>


                </Flex>

               
            </Box>

        </Box>
    )
}

export default Features
