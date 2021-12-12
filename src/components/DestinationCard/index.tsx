import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { 
    Heading, 
    Text, 
    Flex, 
    Box, 
    Image, 
    Divider, 
    Link, 
    ImageProps, 
    HeadingProps,
    TextProps,
    FlexProps
  } from '@chakra-ui/react';

import Data from '../../../data.json';

interface DataProps {
  name: string;
  images: {
    svg: string;
  }
  description: string;
  distance: string;
  travel: string;
}

export function DestinationCard() {
  const [ destination, setDestination ] = useState('Moon');
  const [ data, setData ] = useState<DataProps[]>([]);

  useEffect(() => {
    const results = Data.destinations.filter(res => {
      return res.name === destination
    });

    setData(results);
  }, [destination]);

  const MotionImage = motion<ImageProps>(Image);
  const MotionHeading = motion<HeadingProps>(Heading);
  const MotionText = motion<TextProps>(Text);
  const MotionFlex = motion<FlexProps>(Flex);

  return (
    <>
      {data.map(res => (
        <Flex 
          key={res.name} 
          w='100%' 
          maxW='1110px' 
          h='100%' 
          maxH={{'base': 'unset', 'md': '652px'}}  
          mx='auto' 
          justify={{'base': 'space-around', 'md': 'space-between'}} 
          align={{'base': 'center', 'md': 'flex-end'}}
          direction={{'base': 'column', 'md': 'row'}}
          px={{'base': '8', 'lg': '0'}} 
          as='main'
        >
          <Box 
            w='100%' 
            mt='16' 
            mb='2' 
            maxW={{'base': 'unset', 'md': '508px'}} 
            textAlign={{'base': 'center', 'sm': 'unset'}}
          >
            <Heading 
              fontFamily='Barlow Condensed' 
              fontWeight='400'
              fontSize={{'base': '16', 'sm': '20', 'md': '28'}}
              letterSpacing='4.7px'
              mb={{'base': '32px', 'sm': '60px', 'md': '96px'}}
            >
              <Text as='span' mr='4' fontWeight='700' color='rgba(255, 255, 255, 0.25)'>01 </Text>
              PICK YOUR DESTINATION
            </Heading>

            <MotionImage 
              w={{'base': '170px', 'sm': '300px', 'md': '445px'}}
              h={{'base': '170px', 'sm': '300px', 'md': '445px'}}
              src={res.images.svg} 
              alt={`${res.name} image`} 
              ml={{'base': 'unset', 'md': 'auto'}} 
              mx={{'base': 'auto', 'md': 'unset'}} 
              mb={{'base': 8, 'md': 'unset'}}
              initial={{opacity: 0}}
              animate={{ opacity: 1, transition: {duration: 1.4}}}
            />
          </Box>

          <Box w='100%' maxW='445px' textAlign={{'base': 'center', 'md': 'unset'}}>
            <Flex 
              w='285px' 
              h='34px' 
              mb='37px' 
              justify='space-between' 
              mx={{'base': 'auto', 'md': 'unset'}}
            >
              <Link 
                color={ destination === 'Moon' ? 'white' : '#D0D6F9' }
                borderBottom={ destination === 'Moon' && '3px solid #FFFFFF' }
                _hover={destination !== 'Moon' && {
                  borderBottom: '3px solid rgba(255, 255, 255, 0.4)',
                  transition: '0.4s'}}
                onClick={() => setDestination('Moon')}
              >
                MOON
              </Link>

              <Link 
                color={ destination === 'Mars' ? 'white' : '#D0D6F9' }
                borderBottom={ destination === 'Mars' && '3px solid #FFFFFF' }
                _hover={destination !== 'Mars' && {
                  borderBottom: '3px solid rgba(255, 255, 255, 0.4)',
                  transition: '0.4s'}}
                onClick={() => setDestination('Mars')}
              >
                MARS
              </Link>

              <Link 
                color={ destination === 'Europa' ? 'white' : '#D0D6F9' }
                borderBottom={ destination === 'Europa' && '3px solid #FFFFFF' }
                _hover={destination !== 'Europa' && {
                  borderBottom: '3px solid rgba(255, 255, 255, 0.4)',
                  transition: '0.4s'}}
                onClick={() => setDestination('Europa')}
              >
                EUROPA
              </Link>

              <Link 
                color={ destination === 'Titan' ? 'white' : '#D0D6F9' }
                borderBottom={ destination === 'Titan' && '3px solid #FFFFFF' }
                _hover={destination !== 'Titan' && {
                  borderBottom: '3px solid rgba(255, 255, 255, 0.4)',
                  transition: '0.4s'}}
                onClick={() => setDestination('Titan')}
              >
                TITAN
              </Link>
            </Flex>

            <MotionHeading 
              fontSize={{'base': '56', 'sm': '80', 'md': '100'}} 
              fontWeight='400' 
              mb='14px'
              initial={{opacity: 0}}
              animate={{ opacity: 1, transition: {duration: 1.0, delay: 0.2}}}
            >
              {res.name.toUpperCase()}
            </MotionHeading>
            <MotionText 
              fontSize={{'base': '15', 'sm': '16', 'md': '18'}} 
              color='#D0D6F9' 
              mb='54px'
              initial={{opacity: 0}}
              animate={{ opacity: 1, transition: {duration: 1.0, delay: 0.6}}}
            >
              {res.description}
            </MotionText>

            <Divider mb='28px' />

            <MotionFlex 
              justify={{'base': 'space-around', 'lg': 'unset'}} 
              direction={{'base': 'column', 'sm': 'row'}} 
              mb='8' 
              align='center'
              initial={{opacity: 0}}
              animate={{ opacity: 1, transition: {duration: 1.0, delay: 1.2}}}
            >
              <Box w={{'lg': '50%'}} mb={{'base': '8', 'sm': 'unset'}}>
                <Text 
                  fontSize='14' 
                  fontFamily='Barlow Condensed' 
                  fontWeight='400'
                  letterSpacing='2.3px'
                  color='#D0D6F9'
                  mb='12px'
                >
                  AVG. DISTANCE
                </Text>

                <Text
                  fontSize='28'
                  fontFamily='Bellefair'
                  fontWeight='400'
                >
                  {res.distance.toUpperCase()}
                </Text>
              </Box>

              <Box>
                <Text 
                  fontSize='14' 
                  fontFamily='Barlow Condensed' 
                  fontWeight='400'
                  letterSpacing='2.3px'
                  color='#D0D6F9'
                  mb='12px'
                >
                  EST. TRAVEL TIME
                </Text>

                <Text
                  fontSize='28'
                  fontFamily='Bellefair'
                  fontWeight='400'
                >
                  {res.travel.toUpperCase()}
                </Text>
              </Box>
            </MotionFlex>
          </Box>
        </Flex>
      ))}
    </>
  );
}