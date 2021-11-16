import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

import { CrewCard } from '../../components/CrewCard';
import { Header } from '../../components/Header';

export default function Crew() {
  return (
    <>
      <Head>
        <title>Space Tourism | Crew</title>
      </Head>

      <Flex 
        w='100%' 
        minH='100vh'  
        bgImage={{
          'base': '/assets/crew/background-crew-mobile.png', 
          'sm': '/assets/crew/background-crew-tablet.png', 
          'lg': '/assets/crew/background-crew-desktop.png'
        }} 
        bgColor='#0B0D17'
        bgSize='cover' 
        bgRepeat='no-repeat' 
        direction='column'
      >
        <Header />

        <CrewCard />
      </Flex>
    </>
  );
}