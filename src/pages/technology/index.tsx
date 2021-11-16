import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

import { Header } from '../../components/Header';
import { TechnologyCard } from '../../components/TechnologyCard';

export default function Technology() {
  return (
    <>
      <Head>
        <title>Space Tourism | Technology</title>
      </Head>
      
      <Flex 
        w='100%' 
        minH='100vh' 
        bgImage={{
          'base': '/assets/technology/background-technology-mobile.png', 
          'sm': '/assets/technology/background-technology-tablet.png', 
          'lg': '/assets/technology/background-technology-desktop.png'
        }} 
        bgColor='#0B0D17'
        bgSize='cover' 
        bgRepeat='no-repeat' 
        direction='column'
      >
        <Header />
        
        <TechnologyCard />
      </Flex>
    </>
  );
}