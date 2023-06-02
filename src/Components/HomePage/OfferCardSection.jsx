import React from 'react'
import OfferCard from './OfferCard'
import { Flex } from '@chakra-ui/react'
import handbag from '../..//Assets/HomePage/handbag.png'
const OfferCardSection = () => {
  const data = [
    {
      id: 1,
      image: handbag,
      offerPercent: 50,
    },
    {
      id: 2,
      image: handbag,
      offerPercent: 70,
    },
    {
      id: 3,
      image: handbag,
      offerPercent: 60,
    },
  ]
  return (
    <Flex
      gap={'15px'}
      mt={'35px'}
      ml={'25px'}
      height={'160px'}
      overflowY={'scroll'}
      overflowX={'scroll'}
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {data.map((item) => {
        return <OfferCard key={item.id} {...item} />
      })}
    </Flex>
  )
}

export default OfferCardSection
