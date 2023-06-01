import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import product from '../Assets/HomePage/bag.png'

const Product = () => {
  return (
    <Box width='155px' height={'240px'}>
      <Image
        src={product}
        width='155px'
        height='170px'
        ml={'2px'}
        mb='4px'
        mr='1px'
        borderRadius={'15px'}
      />
      <Box mt='12px' textAlign={'center'} width={'125px'}>
        <Heading fontSize={'14px'}>The Marc Jacobs</Heading>
        <Text>Traveler Tote</Text>
        <Heading fontSize={'14px'}>$195.00</Heading>
      </Box>
    </Box>
  )
}

export default Product
