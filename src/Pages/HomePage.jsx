import { Box, Flex, Grid, Heading, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import menu from '../Assets/HomePage/menu.png'
import profile from '../Assets/HomePage/profileImage.png'
import filter from '../Assets/HomePage/filtter.png'
import searchIcon from '../Assets/HomePage/searchIcon.png'
import OfferCard from '../Components/OfferCard'
import Product from '../Components/Product'
import NavigationBar from '../Components/NavigationBar'

const HomePage = () => {
  return (
    <Box pos='relative'>
      <Box px={'25px'} pt='44px'>
        <Flex justify={'space-between'} align={'center'}>
          <Image src={menu} width={'35px'} height={'35px'} alt='menu' />
          <Image
            src={profile}
            width={'56px'}
            height={'56px'}
            alt='profile-pic'
          />
        </Flex>
        <Heading mt='22px' fontSize={'25px'}>
          Welcome,
        </Heading>
        <Text color='#666666'>Our Fashions App</Text>
        <Flex
          mt='19px'
          justify={'space-between'}
          width='325px'
          height={'50px'}
          position={'relative'}
        >
          <Box>
            <Input
              width={'260px'}
              height={'50px'}
              borderRadius={'30px'}
              pl={'58px'}
              bg='#F3F4F5'
              placeholder='Search...'
            />
            <Image
              src={searchIcon}
              position={'absolute'}
              left='26px'
              top='50%'
              transform={'translateY(-50%)'}
              zIndex={'10'}
            />
          </Box>

          <Image width={'50px'} height='50px' src={filter} />
        </Flex>
      </Box>
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
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </Flex>
      <Box ml={'24px'} mt='25px'>
        <Heading fontSize={'18px'} lineHeight={'150%'} fontWeight={'700'}>
          New Arrivals
        </Heading>
        {/* products list */}
        <Grid mt='11px' gap='10px' templateColumns={'repeat(2,1fr)'} pb='80px'>
          <Product />
          <Product />
          <Product />
          <Product />
        </Grid>
      </Box>
      s
    </Box>
  )
}

export default HomePage
