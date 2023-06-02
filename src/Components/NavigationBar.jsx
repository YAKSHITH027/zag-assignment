import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import home from '../Assets/HomePage/home.png'
import cart from '../Assets/HomePage/cart.svg'
import bell from '../Assets/HomePage/bell.svg'
import profile from '../Assets/HomePage/profile.svg'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  const [selected, setSelected] = useState('home')
  return (
    <Box
      height={'70px'}
      pos={'fixed'}
      width={'100%'}
      bg='white'
      borderTopRadius={'30px'}
      bottom={'0'}
      zIndex={'100'}
      boxShadow={'0px -2px 7px 0px #0000001A'}
      margin={'auto'}
    >
      <Flex align={'center'} height={'100%'} justify={'space-around'} px='50px'>
        <Link to='/'>
          <Flex
            height={'30px'}
            gap='2px'
            align={'center'}
            bg={'#EEEEEE'}
            width={selected === 'home' ? '76px' : '20px'}
            pr={selected === 'home' ? '8px' : '0px'}
            borderRadius={'30px'}
            transition={'all 0.5s'}
            onClick={() => {
              setSelected('home')
            }}
          >
            <Image src={home} width='20px' />

            {selected === 'home' && (
              <Text
                fontSize={'11px'}
                whiteSpace={'nowrap'}
                // width={selected === 'home' ? '30px' : '0px'}
                overflow={'hidden'}
                lineHeight={'16px'}
                fontWeight={'600'}
              >
                Home
              </Text>
            )}
          </Flex>
        </Link>
        <Link to='/product'>
          <Flex
            height={'30px'}
            gap='2px'
            align={'center'}
            bg={'#EEEEEE'}
            width={selected === 'product' ? '80px' : '20px'}
            pr={selected === 'product' ? '8px' : '0px'}
            borderRadius={'30px'}
            transition={'all 0.5s'}
            onClick={() => {
              setSelected('product')
            }}
          >
            <Image src={cart} width={'30px'} height={'20px'} />

            {selected === 'product' && (
              <Text
                fontSize={'11px'}
                whiteSpace={'nowrap'}
                // width={selected === 'product' ? '30px' : '0px'}
                overflow={'hidden'}
                lineHeight={'16px'}
                fontWeight={'600'}
              >
                Product
              </Text>
            )}
          </Flex>
        </Link>
        <Link to='/pay'>
          <Flex
            height={'30px'}
            gap='2px'
            align={'center'}
            bg={'#EEEEEE'}
            width={selected === 'pay' ? '76px' : '20px'}
            pr={selected === 'pay' ? '8px' : '0px'}
            borderRadius={'30px'}
            transition={'all 0.5s'}
            onClick={() => {
              setSelected('pay')
            }}
          >
            <Image src={bell} width={'25px'} height={'20px'} />

            {selected === 'pay' && (
              <Text
                fontSize={'11px'}
                whiteSpace={'nowrap'}
                // width={selected === 'home' ? '30px' : '0px'}
                overflow={'hidden'}
                lineHeight={'16px'}
                fontWeight={'600'}
              >
                Payment
              </Text>
            )}
          </Flex>
        </Link>
        <Flex
          height={'30px'}
          gap='2px'
          align={'center'}
          bg={'#EEEEEE'}
          width={selected === 'profile' ? '76px' : '20px'}
          pr={selected === 'profile' ? '8px' : '0px'}
          borderRadius={'30px'}
          transition={'all 0.5s'}
          onClick={() => {
            setSelected('profile')
          }}
        >
          <Image src={profile} width={'25px'} height={'20px'} />

          {selected === 'profile' && (
            <Text
              fontSize={'11px'}
              whiteSpace={'nowrap'}
              // width={selected === 'home' ? '30px' : '0px'}
              overflow={'hidden'}
              lineHeight={'16px'}
              fontWeight={'600'}
            >
              Profile
            </Text>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default NavigationBar
