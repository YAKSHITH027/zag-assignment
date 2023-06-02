import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Product = ({ image, title, desc, price }) => {
  return (
    <Box width='155px' height={'240px'}>
      <Image
        src={image}
        width='155px'
        height='170px'
        ml={'2px'}
        mb='4px'
        mr='1px'
        borderRadius={'15px'}
      />
      <Box mt='12px' textAlign={'center'} width={'125px'}>
        <Heading fontSize={'14px'}>{title}</Heading>
        <Text fontSize={'11px'}>{desc}</Text>
        <Heading fontSize={'14px'}>${price}</Heading>
      </Box>
    </Box>
  )
}

export default Product
