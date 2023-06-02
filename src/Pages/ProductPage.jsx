import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'

import ProductTopSection from '../Components/ProductPage/ProductTopSection'

import ProductBottomSection from '../Components/ProductPage/ProductBottomSection'

const ProductPage = () => {
  return (
    <Box pb={'2rem'}>
      {/* top  image section*/}
      <ProductTopSection />
      {/* bottom part */}
      <ProductBottomSection />
    </Box>
  )
}

export default ProductPage
