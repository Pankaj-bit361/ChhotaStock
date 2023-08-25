import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logos from "../Images/logos.png"

const Nav = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} bgColor={'#171E27'} p={['1% 2%']} pr={'5%'}>
        <Flex alignItems={'center'} justifyContent={'center'} w={['40%']}>
            <Box w={['35%']}><Image src={logos} w={'100%'}/></Box>
            <Button>Gateway &nbsp; <Box w={'23px'} h={'23px'} borderRadius={'50%'} bgColor={'#F05656'}></Box></Button>

        </Flex>

        <Flex alignItems={'center'} justifyContent={'space-around'} color={'white'} w={['25%']}>
            <Text fontSize={['1.3rem']}>Products</Text>
            <Text fontSize={['1.3rem']}>About Us</Text>
        </Flex>

      
    </Flex>
  )
}

export default Nav
