import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import star from '../../Assets/ProductPage/star.png'
import Size from './Size'
const ProductBottomSection = () => {
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()

  const handleDec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const handleInc = () => {
    setQuantity(quantity + 1)
  }
  return (
    <Box
      minH={'4rem'}
      borderTopRadius={'30px'}
      pos={'relative'}
      zIndex={'10'}
      top={'-42px'}
      bg={'white'}
      pt={'20px'}
    >
      {/* product meta */}
      <Flex width={'90%'} height={'75px'} ml='24px' justify={'space-between'}>
        <Box>
          <Box lineHeight={'200%'}>
            <Heading fontSize={'18px'}>Roller Rabbit</Heading>
            <Text>Vado Odelle Dress</Text>
          </Box>
          <Flex align={'center'} mt='5px'>
            <Flex gap='3px'>
              {new Array(5).fill(1).map((item) => {
                return <Image src={star} alt='star' />
              })}
            </Flex>
            <Text ml={'10px'} fontSize={'11px'}>
              (320) Reviews
            </Text>
          </Flex>
        </Box>
        <Flex mr='1rem' flexDir={'column'} alignContent={'flex-end'}>
          <Box textAlign={'end'}>
            <Button
              size={'xs'}
              className='btn'
              height={'30px'}
              borderLeftRadius={'30px'}
              borderRightRadius={0}
              onClick={handleDec}
              display={'inline-block'}
              px={'3px'}
            >
              -
            </Button>
            <Button
              size={'xs'}
              className='btn'
              height={'30px'}
              borderRadius={0}
              p='0px'
            >
              {quantity}
            </Button>
            <Button
              size={'xs'}
              height={'30px'}
              onClick={handleInc}
              borderRightRadius={'30px'}
              borderLeftRadius={'0px'}
              px='0'
            >
              +
            </Button>
          </Box>
          <Text mt='11px' fontSize={'11px'} fontWeight={'600'}>
            Available in stocks
          </Text>
        </Flex>
      </Flex>
      {/* size */}
      <Size />
      {/* descripton */}
      <Box mt='25px' mx='25px'>
        <Heading fontSize={'16px'} fontWeight={'600'} lineHeight={'150%'}>
          Description
        </Heading>
        <Text
          mt='15px'
          fontSize={'11px'}
          frontWeight='400'
          color={'#666666'}
          lineHeight={'150%'}
        >
          Get a little lift from these Sam Edelman sandals featuring ruched
          straps and leather lace-up ties, while a braided jute sole makes a
          fresh statement for summer.
        </Text>
      </Box>
      {/* price */}
      <Flex mx='25px' mt='30px' justify={'space-around'} mb={'1rem'}>
        <Box>
          <Text fontSize={'9px'}>Total Price</Text>
          <Heading fontSize={'18px'} fontWeight={'600'}>
            ${198 * quantity}
          </Heading>
        </Box>
        <Box>
          <Button
            width={'200px'}
            height={'50px'}
            borderRadius={'30px'}
            bg='black'
            color='white'
            onClick={() => {
              navigate('/pay')
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default ProductBottomSection
