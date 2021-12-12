import { useEffect, useState } from "react";
import { 
    Heading, 
    Text, 
    Flex, 
    Box, 
    Image, 
    Button, 
    useBreakpointValue,
    TextProps,
    ImageProps  
  } from '@chakra-ui/react';
  import { motion } from 'framer-motion';

import Data from '../../../data.json';

interface DataProps {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  }
  description: string;
}

export function TechnologyCard() {
  const [ technology, setTechnology ] = useState('Launch vehicle');
  const [ data, setData ] = useState<DataProps[]>([]);

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const results = Data.technology.filter(res => {
      return res.name === technology
    });

    setData(results);
  }, [technology]);

  const MotionText = motion<TextProps>(Text);
  const MotionImage = motion<ImageProps>(Image);

  return (
    <>
      {data.map(res => (
        <Flex 
          key={res.name} 
          w='100%' 
          maxW={{'base': '100%', 'md': '1275px'}} 
          h='100%' 
          minH='640px' 
          mx={{ 'base': 'auto' }}
          justify='space-between' 
          align='center'
          direction={{'base': 'column', 'md': 'row'}}
          as='main'
        >
          <Box 
            w='100%' 
            mt={{'base': '8', 'md': 'unset'}} 
            maxW={{'base': '100%', 'md': '630px'}} 
            textAlign={{'base': 'center', 'sm': 'unset'}}
          >
            <Heading 
              fontFamily='Barlow Condensed' 
              fontWeight='400'
              fontSize={{'base': '16', 'sm': '20', 'md': '28'}}
              letterSpacing='4.7px'
              mb={{'base': '32px', 'sm': '60px', 'md': '137px'}}
              px={{'base': '8'}}
            >
              <Text as='span' mr='4' fontWeight='700' color='rgba(255, 255, 255, 0.25)'>03 </Text>
              SPACE LAUNCH 101
            </Heading>

            {isMobile && 
              <MotionImage 
                alignSelf='flex-end' 
                src={res.images.landscape} 
                alt={res.name} 
                mb={{'base': '34px', 'sm': '56px', 'md': 'unset'}}
                initial={{opacity: 0}}
                animate={{ opacity: 1, transition: {duration: 0.8}}}
              />
            }

            <Flex 
              justify='space-between' 
              align={{'base': 'center', 'md': 'unset'}}
              direction={{'base': 'column', 'md': 'row'}} 
              textAlign={{'base': 'center', 'md': 'unset'}}
              px={{'base': '8', 'lg': '0'}} 
              mb={{'base': '40px', 'md': 'unset'}}
            >
              <Flex 
                direction={{'base': 'row', 'md': 'column'}} 
                justify='space-between' 
                h={{'base': 'unset', 'md': '304px'}}
                w='100%'
                maxW={{'base': '152px', 'sm': '210px', 'md': 'unset'}}
                mx={{'base': 'auto', 'md': 'unset'}}
                mb={{'base': '26px', 'sm': '44px', 'md': 'unset'}}
                >
                <Button 
                  w={{'base': '40px', 'sm': '60px', 'md': '80px'}}
                  h={{'base': '40px', 'sm': '60px', 'md': '80px'}}
                  fontSize={{'base': '16', 'sm': '24', 'md': '32'}}
                  fontFamily='Bellefair'
                  fontWeight='400'
                  borderRadius='100%'
                  color={technology === 'Launch vehicle' ? '#0B0D17' : 'white'}
                  backgroundColor={technology === 'Launch vehicle' ? 'white' : 'transparent'}
                  border={technology === 'Launch vehicle' ? '' : '1px solid rgba(255, 255, 255, 0.25)'}
                  _hover={technology === 'Launch vehicle' ? {border: ''} : {border: '1px solid white'}}
                  onClick={() => setTechnology('Launch vehicle')}
                >
                  1
                </Button>

                <Button 
                  w={{'base': '40px', 'sm': '60px', 'md': '80px'}}
                  h={{'base': '40px', 'sm': '60px', 'md': '80px'}}
                  fontSize={{'base': '16', 'sm': '24', 'md': '32'}}
                  fontFamily='Bellefair'
                  fontWeight='400'
                  borderRadius='100%'
                  color={technology === 'Spaceport' ? '#0B0D17' : 'white'}
                  backgroundColor={technology === 'Spaceport' ? 'white' : 'transparent'}
                  border={technology === 'Spaceport' ? '' : '1px solid rgba(255, 255, 255, 0.25)'}
                  _hover={technology === 'Spaceport' ? {border: ''} : {border: '1px solid white'}}
                  onClick={() => setTechnology('Spaceport')}
                >
                  2
                </Button>

                <Button 
                  w={{'base': '40px', 'sm': '60px', 'md': '80px'}}
                  h={{'base': '40px', 'sm': '60px', 'md': '80px'}}
                  fontSize={{'base': '16', 'sm': '24', 'md': '32'}}
                  fontFamily='Bellefair'
                  fontWeight='400'
                  borderRadius='100%'
                  color={technology === 'Space capsule' ? '#0B0D17' : 'white'}
                  backgroundColor={technology === 'Space capsule' ? 'white' : 'transparent'}
                  border={technology === 'Space capsule' ? '' : '1px solid rgba(255, 255, 255, 0.25)'}
                  _hover={technology === 'Space capsule' ? {border: ''} : {border: '1px solid white'}}
                  onClick={() => setTechnology('Space capsule')}
                >
                  3
                </Button>
              </Flex>

              <Flex maxW='470px'>
                <Box>
                  <Text 
                    fontSize={{'base': '14', 'sm': '16'}}
                    letterSpacing='2.7px'
                    fontFamily='Barlow Condensed'
                    color='#D0D6F9'
                  >
                    THE TERMINOLOGY…
                  </Text>

                  <MotionText 
                    fontSize={{'base': '24', 'sm': '40', 'md': '56'}} 
                    fontFamily='Bellefair' 
                    mb='5px'
                    initial={{opacity: 0, x: -50}}
                    animate={{ opacity: 1, transition: {duration: 0.6, delay: 0.2}, x: 0}}
                  >
                    {res.name.toUpperCase()}
                  </MotionText>

                  <MotionText 
                    fontSize={{'base': '15', 'sm': '16', 'md': '19'}} 
                    lineHeight='32px' 
                    color='#D0D6F9'
                    initial={{opacity: 0, x: -50}}
                    animate={{ opacity: 1, transition: {duration: 0.6, delay: 0.6}, x: 0}}
                  >
                    {res.description}
                  </MotionText>
                </Box>
              </Flex>
            </Flex>
          </Box>

          {!isMobile && 
            <MotionImage 
              alignSelf='flex-end' 
              src={res.images.portrait} 
              alt={res.name} 
              initial={{opacity: 0}}
              animate={{ opacity: 1, transition: {duration: 0.8}}}
              borderRadius={8}
            />
          }
        </Flex>
      ))}
    </>
  );
}