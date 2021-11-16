import { Heading, Text, Flex, Box, Button } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
    <Head>
      <title>Space Tourism | Home</title>
    </Head>

      <Flex 
        w='100%' 
        minH='100vh'
        bgImage={{
          'base': '/assets/home/Home-mobile.png', 
          'sm': '/assets/home/Home-tablet.png', 
          'lg': '/assets/home/Home-desktop.png'
        }} 
        bgSize='cover' 
        bgRepeat='no-repeat' 
        direction='column'
      >
        <Header />

        <Flex 
          w='100%' 
          maxW='1110px' 
          h='100vh' 
          maxH={{'base': 'unset', 'md': '633px'}} 
          mx='auto' 
          px={{'base': '8', 'lg': '0'}} 
          align={{'base': 'center', 'md': 'flex-end'}}
          direction={{'base': 'column', 'md': 'row'}}
          justify={{'base': 'space-around', 'md': 'space-between'}} 
        >
          <Box 
            maxW='450px' 
            w='100%' 
            mt={{'base': '48px', 'lg': '0'}} 
            textAlign={{'base': 'center', 'md': 'unset'}}
          >
            <Text 
              fontSize={{'base': '16', 'sm': '28'}} 
              fontFamily='Barlow Condensed' 
              fontWeight='400'
              letterSpacing='4.7px'
              color='#D0D6F9'
            >
              SO, YOU WANT TO TRAVEL TO
            </Text>

            <Heading 
              fontWeight='400' 
              fontSize={{'base': '80', 'sm': '150'}} 
              mb={{'base': '16px', 'md': '24px'}}
              mt={{'base': '14px', 'md': '20px'}}
            >
              SPACE
            </Heading>

            <Text 
              fontSize={{'base': '15', 'sm': '16', 'md': '18'}}
              lineHeight='32px'
              color='#D0D6F9'
              pb={{'base': '8', 'sm': 'unset'}}
            >
              Let’s face it; if you want to go to space, you might as well 
              genuinely go to outer space and not hover kind of on the edge of it. Well sit back, 
              and relax because we’ll give you a truly out of this world experience!
            </Text>
          </Box>

          <Link href='/destination' passHref>
            <Button 
              fontSize={{'base': '20', 'sm': '32'}} 
              w={{'base': '150px', 'sm': '242px', 'md': '274px'}}
              h={{'base': '150px', 'sm': '242px', 'md': '274px'}}
              fontFamily='Bellefair' 
              fontWeight='400'
              color='#0B0D17' 
              backgroundColor='white'
              letterSpacing='2px'
              borderRadius='100%'
              _hover={{
                boxShadow: '0 0 0 80px rgba(255, 255, 255, 0.1)'
              }}
              _active={{ transform: "scale(1.08)" }}
            >
              EXPLORE
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  )
}
