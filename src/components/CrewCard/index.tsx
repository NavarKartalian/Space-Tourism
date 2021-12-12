import { useEffect, useState } from "react";
import { 
    Heading, 
    Text, 
    Flex, 
    Box, 
    Image, 
    Link, 
    useBreakpointValue,
    TextProps,
    ImageProps 
  } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Data from '../../../data.json';

interface DataProps {
  name: string;
  images: {
    svg: string;
  }
  role: string;
  bio: string;
}

export function CrewCard() {
  const [ crew, setCrew ] = useState('Douglas Hurley');
  const [ data, setData ] = useState<DataProps[]>([]);

  const isMobile = useBreakpointValue({ base: true, sm: false });

  useEffect(() => {
    const results = Data.crew.filter(res => {
      return res.name === crew
    });

    setData(results);
  }, [crew]);

  const MotionText = motion<TextProps>(Text);
  const MotionImage = motion<ImageProps>(Image);

  return (
    <>
      {data.map(res => (
        <Flex 
          key={res.name} 
          w='100%' 
          maxW='1184px' 
          minH={{'lg': '764px', 'xl': '825px'}} 
          mx='auto' 
          justify={{'base': 'space-around', 'md': 'space-between'}} 
          align={{'base': 'center', 'md': 'flex-end'}}
          direction={{'base': 'column', 'md': 'row'}}
          px={{'base': '8', 'lg': '0'}}
          mb={{'base': '8', 'sm': 'unset' }}
          as='main'
        >
          <Box 
            w='100%'
            ml={{'base': 'unset', 'lg': '44px'}} 
            h='100%' 
            textAlign={{'base': 'center', 'sm': 'unset'}} 
            alignSelf={{'base': 'center', 'md': 'baseline'}}
          >
            <Heading 
              fontFamily='Barlow Condensed' 
              fontWeight='400'
              fontSize={{'base': '16', 'sm': '20', "md": '28'}}
              letterSpacing='4.7px'
              mt='76px'
              mb={{'base': '60px', 'sm': '100px', 'md': '145px'}}
            >
              <Text as='span' mr='4' fontWeight='700' color='rgba(255, 255, 255, 0.25)'>02 </Text>
              MEET YOUR CREW
            </Heading>

            {isMobile && 
              <MotionImage 
                src={res.images.svg} 
                alt={res.name} 
                mb='8' 
                borderBottom='1px solid #383B4B'
                initial={{opacity: 0}}
                animate={{ opacity: 1, transition: {duration: 0.8}}} 
              />
            }

            <MotionText 
              fontSize={{'base': '16', 'sm': '24', "md": '32'}}
              fontFamily='Bellefair'
              color='rgba(255, 255, 255, 0.5)'
              textAlign={{'base': 'center', 'md': 'unset'}} 
              initial={{opacity: 0, x: -50}}
              animate={{ opacity: 1, transition: {duration: 0.6, delay: 0.2}, x: 0}}
            >
              {res.role.toUpperCase()}
            </MotionText>

            <MotionText 
              fontSize={{'base': '24', 'sm': '40', "md": '56'}} 
              fontFamily='Bellefair' 
              mb='15px'
              textAlign={{'base': 'center', 'md': 'unset'}}
              initial={{opacity: 0, x: -50}}
              animate={{ opacity: 1, transition: {duration: 0.6, delay: 0.6}, x: 0}}
            >
              {res.name.toUpperCase()}
            </MotionText>

            <Flex 
              direction='column' 
              h='232px' 
              justify={{'base': 'space-around', 'md': 'space-between'}} 
              align={{'base': 'center', 'md': 'unset'}}
            >
              <MotionText 
                fontSize={{'base': '15', 'sm': '16', "md": '18'}} 
                lineHeight='32px' 
                color='#D0D6F9' 
                maxW='444px'
                textAlign={{'base': 'center', 'md': 'unset'}}
                initial={{opacity: 0, x: -50}}
                animate={{ opacity: 1, transition: {duration: 0.6, delay: 1.0}, x: 0}}
              >
                {res.bio}
              </MotionText>
              
              <Flex w='100%' maxW={{'base': '88px', 'md': '132px'}} justify='space-between'>
                <Link 
                  as='button'
                  w={{'base': '10px', 'md': '15px'}} 
                  h={{'base': '10px', 'md': '15px'}}  
                  backgroundColor={ 
                    crew === 'Douglas Hurley' ? 'white' 
                    : 'rgba(255, 255, 255, 0.17)' }
                  borderRadius='100%' 
                  _hover={crew !== 'Douglas Hurley' && {backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
                  onClick={() => setCrew('Douglas Hurley')}
                />

                <Link 
                  as='button'
                  w={{'base': '10px', 'md': '15px'}} 
                  h={{'base': '10px', 'md': '15px'}} 
                  backgroundColor={ 
                    crew === 'Mark Shuttleworth' ? 'white' 
                    : 'rgba(255, 255, 255, 0.17)' } 
                  borderRadius='100%' 
                  _hover={crew !== 'Mark Shuttleworth' && {backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
                  onClick={() => setCrew('Mark Shuttleworth')}
                />

                <Link 
                  as='button'
                  w={{'base': '10px', 'md': '15px'}} 
                  h={{'base': '10px', 'md': '15px'}}
                  backgroundColor={ 
                    crew === 'Victor Glover' ? 'white' 
                    : 'rgba(255, 255, 255, 0.17)' } 
                  borderRadius='100%' 
                  _hover={crew !== 'Victor Glover' && {backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
                  onClick={() => setCrew('Victor Glover')}
                />

                <Link 
                  as='button'
                  w={{'base': '10px', 'md': '15px'}} 
                  h={{'base': '10px', 'md': '15px'}}
                  backgroundColor={ 
                    crew === 'Anousheh Ansari' ? 'white' 
                    : 'rgba(255, 255, 255, 0.17)' } 
                  borderRadius='100%' 
                  _hover={crew !== 'Anousheh Ansari' && {backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
                  onClick={() => setCrew('Anousheh Ansari')}
                />
              </Flex>
            </Flex>
          </Box>

          {!isMobile && 
            <MotionImage 
              src={res.images.svg} 
              alt={res.name} 
              mt={{'base': '16'}} 
              initial={{opacity: 0}}
              animate={{ opacity: 1, transition: {duration: 0.8}}}
            />
          }
        </Flex>
      ))}
    </>
  );
}