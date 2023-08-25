import { Box } from '@chakra-ui/react'
import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Features from './Features'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Footer from "./Footer"
import FourthComponent from './FourthComponent'


const Main = () => {
  return (
    <Box>
      <Nav />
      <Banner />
      <Features />
      <Second />
      <Third />
      <FourthComponent/>
      <Fourth />
        <Footer/>
        
      
    </Box>
  )
}

export default Main
