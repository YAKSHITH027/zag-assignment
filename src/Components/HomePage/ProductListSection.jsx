import { Grid } from '@chakra-ui/react'
import React from 'react'
import Product from './Product'
import bag from '../../Assets/HomePage/bag.png'
import shoe from '../../Assets/HomePage/shoe.png'
const ProductListSection = () => {
  const products = [
    {
      id: 1,
      image: bag,
      title: 'The Marc Jacobs',
      desc: 'Traveler Tote',
      price: 195.0,
    },
    {
      id: 2,
      image: shoe,
      title: 'Axel Arigato',
      desc: ' Clean 90 Triple Sneakers',
      price: 245.0,
    },
    {
      id: 3,
      image: bag,
      title: 'The Marc Jacobs',
      desc: 'Traveler Tote',
      price: 195.0,
    },
    {
      id: 4,
      image: shoe,
      title: 'Axel Arigato',
      desc: ' Clean 90 Triple Sneakers',
      price: 245.0,
    },
  ]
  return (
    <Grid
      mt='11px'
      gap='10px'
      templateColumns={{
        sm: 'repeat(2,1fr)',
        md: 'repeat(3,1fr)',
        lg: 'repeat(4,1fr)',
      }}
      pb='80px'
      placeItems={'center'}
    >
      {products.map((product) => {
        return <Product key={product.id} {...product} />
      })}
    </Grid>
  )
}

export default ProductListSection
