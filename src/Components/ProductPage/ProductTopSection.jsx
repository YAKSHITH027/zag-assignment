import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import product from '../../Assets/ProductPage/product.png'
import love from '../../Assets/ProductPage/love.png'
import cart from '../../Assets/ProductPage/cartIcon.png'
import firstMenuIcon from '../../Assets/ProductPage/firstMenuIcon.png'
const ProductTopSection = () => {
  return (
    <Box pos={'relative'}>
      <Image src={product} height={'430px'} width={'100%'} />
      {/* love icon */}
      <Button
        size={'xs'}
        pos={'absolute'}
        bottom={'4rem'}
        right='2rem'
        borderRadius={'50%'}
        width={'30px'}
        height='30px'
        padding={0}
      >
        <Image src={love} width={'13px'} height={'13px'} />
      </Button>
      {/* top icons */}
      <Flex
        pos={'absolute'}
        top={'44px'}
        left={'50%'}
        transform={'translate(-50%)'}
        justify={'space-between'}
        width={'85%'}
        align={'center'}
      >
        <Button
          size={'xs'}
          borderRadius={'50%'}
          width={'35px'}
          height='35px'
          bg={'black'}
          padding={0}
        >
          <Image src={firstMenuIcon} width={'13px'} height={'13px'} />
        </Button>
        <Button
          size={'xs'}
          borderRadius={'50%'}
          width={'30px'}
          bg='white'
          height='30px'
          padding={0}
        >
          <Image src={cart} width={'13px'} height={'13px'} />
        </Button>
      </Flex>
    </Box>
  )
}

export default ProductTopSection
