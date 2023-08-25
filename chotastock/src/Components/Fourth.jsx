import { Box, Button, Flex, Heading, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import img12 from '../Images/img12.png'
import img16 from '../Images/img16.png'
import img14 from '../Images/img14.png'
import img15 from '../Images/img15.png'

const Fourth = () => {
    return (
        <Box m={'4% 10%'} borderRadius={'50px'} h={'80vh'} bg={'linear-gradient(180deg, #FEC175 0%, #FB9077 100%);'}>
            <Flex p={'4% 5%'}>
                <Box w={'50%'}>
                    <Heading>How would you like to work with us?</Heading>
                    <Text mt={'5%'}>Tell us more about yourself, and we’ll reach out to you as soon as possible.</Text>
                    <Text mt={'5%'}>Email</Text>
                    <Input placeholder='abc@gmail.com' bgColor={'white'}/>
                    <Text mt={'5%'}>Company Name</Text>
                    <Input bgColor={'white'}/>
                    <Text mt={'5%'}>Mobile Number</Text>
                    <Input bgColor={'white'}/>
                </Box>

                <Box pl={'10%'} mt={'5%'}>
                    <Text fontWeight={'600'}>Which products are you interested in?</Text>
                    <SimpleGrid columns={['3']} gap={'20px'} mt={'3%'}>
                        <Box bgColor={'#FFF '} borderRadius={'25px'} h={'20vh'} p={'8% 8%'} position={'relative'}>
                            <Text fontWeight={'600'}>Mutual Funds</Text>
                            <Text mt={'5%'} fontSize={'0.8rem'}>E2E infrastructure for mutual fund investing</Text>
                            <Image src={img12} w={'20%'} position={'absolute'} bottom={'0%'} right={'0%'}/>
                        </Box>
                        <Box bgColor={'#FFF '} borderRadius={'25px'} h={'20vh'} p={'8% 8%'} position={'relative'}>
                            <Text fontWeight={'600'}>Mutual Funds</Text>
                            <Text mt={'5%'} fontSize={'0.8rem'}>E2E infrastructure for mutual fund investing</Text>
                            <Image src={img16} w={'20%'} position={'absolute'} bottom={'0%'} right={'5%'}/>
                        </Box>
                        <Box bgColor={'#FFF '} borderRadius={'25px'} h={'20vh'} p={'8% 8%'} position={'relative'}>
                            <Text fontWeight={'600'}>Mutual Funds</Text>
                            <Text mt={'5%'} fontSize={'0.8rem'}>E2E infrastructure for mutual fund investing</Text>
                            <Image src={img14} w={'20%'} position={'absolute'} bottom={'0%'} right={'5%'}/>
                        </Box>
                        <Box bgColor={'#FFF '} borderRadius={'25px'} h={'20vh'} p={'8% 8%'} position={'relative'}>
                            <Text fontWeight={'600'}>Mutual Funds</Text>
                            <Text mt={'5%'} fontSize={'0.8rem'}>E2E infrastructure for mutual fund investing</Text>
                            <Image src={img15} w={'20%'} position={'absolute'} bottom={'0%'} right={'5%'}/>
                        </Box>

                    </SimpleGrid>
                    <Flex justifyContent={'right'} ><Button bgColor={'black'} color={'white'} borderRadius={'25px'}>Submit</Button></Flex>
                </Box>
            </Flex>

        </Box>
    )
}

export default Fourth
