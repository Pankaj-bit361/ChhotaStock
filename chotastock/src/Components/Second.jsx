import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import bgComp from '../Images/bgPattern.png'
import hand from '../Images/hand.png'

const Second = () => {
    return (
        <Box m={'2% 8%'} mt={'50%'} h={'60vh'} borderRadius={'50px'} bgColor={'#171E27'}>
            <Box bgImage={`url(${bgComp})`} borderRadius={'50px'} h={'60vh'}>
                <Flex alignItems={'center'} justifyContent={'space-between'} p={'1% 4%'}>
                    <Box color={'white'} pr={'10%'} mt={'6%'}>
                        <Heading>Connect your platform finances now with InvestPe Gateway</Heading>
                        <Text mt={'4%'}>We help brokers, wealth managers, fund managers & other businesses / startups server their customers better with our suite of modern digital investment stack</Text>
                        <Button mt={'5%'} bg={'linear-gradient(99deg, #FEC826 0%, #F3A61D 100%);'} borderRadius={'35px'}>Try Investpe Now</Button>
                    </Box>
                    <Box mt={'15%'}> 
                        <Image transform={'rotate(-6.349deg);'} src={hand}/>
                    </Box>
                </Flex>

            </Box>

        </Box>
    )
}

export default Second
