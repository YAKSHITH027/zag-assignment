import { Box, Flex, Grid, Heading, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

import Menubar from '../Components/HomePage/Menubar'
import SearchBarSection from '../Components/HomePage/SearchBarSection'
import OfferCardSection from '../Components/HomePage/OfferCardSection'
import ProductListSection from '../Components/HomePage/ProductListSection'

const HomePage = () => {
  return (
    <Box pos='relative'>
      <Box px={'25px'} pt='44px'>
        <Menubar />
        <Heading mt='22px' fontSize={'25px'}>
          Welcome,
        </Heading>
        <Text color='#666666'>Our Fashions App</Text>
        <SearchBarSection />
      </Box>
      <OfferCardSection />
      <Box ml={'24px'} mt='25px'>
        <Heading fontSize={'18px'} lineHeight={'150%'} fontWeight={'700'}>
          New Arrivals
        </Heading>
        {/* products list */}
        <ProductListSection />
      </Box>
      s
    </Box>
  )
}

export default HomePage
