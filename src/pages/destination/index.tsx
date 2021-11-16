import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

import { DestinationCard } from '../../components/DestinationCard';
import { Header } from '../../components/Header';

export default function Destination() {
  return (
    <>
      <Head>
        <title>Space Tourism | Destination</title>
      </Head>

      <Flex 
        w='100%' 
        minH='100vh' 
        bgImage={{
          'base': '/assets/destination/background-destination-mobile.png', 
          'sm': '/assets/destination/background-destination-tablet.png', 
          'lg': '/assets/destination/background-destination-desktop.png'
        }} 
        bgColor='#0B0D17'
        bgSize='cover' 
        bgRepeat='no-repeat' 
        direction='column'
      >
        <Header />

        <DestinationCard />
      </Flex>
    </>
  );
}