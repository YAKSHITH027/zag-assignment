import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const OfferCard = ({ image, offerPercent }) => {
  return (
    <Box
      width={'260px'}
      height={'160px'}
      flexShrink={'0'}
      position={'relative'}
    >
      <Image src={image} width={'260px'} h={'160px'} borderRadius={'20px'} />
      <Box position={'absolute'} top={'0'} mt={'17px'} ml={'15px'}>
        <Box>
          <Heading fontSize={'25px'}>{offerPercent}% off</Heading>
          <Text>On everything Today</Text>
        </Box>
        <Text mt='10px' fontSize={'11px'} lineHeight={'150%'}>
          with code:FSCREATION
        </Text>
        <Button
          width='70px'
          height='25px'
          mt='15px'
          borderRadius={'30px'}
          bg={'#000000'}
          fontSize={'10px'}
          color='#FFFFFF'
          lineHeight={'150%'}
        >
          Get Now
        </Button>
      </Box>
    </Box>
  )
}

export default OfferCard
