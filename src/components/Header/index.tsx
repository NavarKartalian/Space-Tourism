import { 
  Text, 
  Flex, 
  Image, 
  Divider, 
  useBreakpointValue,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent
} from '@chakra-ui/react';

import { ActiveLink } from '../ActiveLink';

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useBreakpointValue({ base: true, sm: false });
  const isTablet = useBreakpointValue({ sm: true, lg: false });

  return (
    <Flex 
      w={{'base': '90%', 'sm': '100%'}} 
      h='100%' 
      maxH='96px' 
      pl={{'sm': '55px'}} 
      ml={{'sm': 'auto'}} 
      mx={{'base': 'auto', 'sm': 'unset'}}
      mt={{'base': '4', 'sm': '0', 'lg': '10'}} 
      justify='space-between' 
      align='center'
    >
      <Image alt='Logo' src='/assets/shared/logo.svg' w='48px' h='48px' />
      
      <Divider 
        maxW='473px' 
        ml='auto' 
        position='relative' 
        left='30px' 
        zIndex='1' 
        display={{'base': 'none', 'lg': 'inline-block'}} 
      />

      {isMobile ?
        <>
          <IconButton 
            aria-label='Open Nav'
            icon={<Image src='/assets/shared/icon-hamburger.svg' alt='hamburger icon' />}
            colorScheme=''
            onClick={onOpen}
          />

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
          >
            <DrawerOverlay w='100%' h='100%' backgroundColor='transparent' />
            <DrawerContent 
              w='100%' 
              maxW='254px' 
              minH='100%' 
              backgroundColor='rgba(255, 255, 255, 0.03)' 
              backdropFilter='blur(50px)'
            >
              <DrawerBody>
                <Flex 
                  as='nav' 
                  w='100%'  
                  h='100%' 
                  direction='column'
                >
                  <Flex mt='6'>
                    <IconButton 
                      aria-label='Close Nav'
                      icon={<Image src='/assets/shared/icon-close.svg' alt='close icon' />}
                      colorScheme=''
                      onClick={onClose}
                      ml='auto'
                    />
                  </Flex>

                  <Flex direction='column' w='100%' h='100%' maxH='172px' mt='64px' justify='space-between'>
                    <ActiveLink href='/'>
                      {!isTablet && <Text as='span' fontWeight='700'>00 </Text>} 
                      HOME
                    </ActiveLink>
                    
                    <ActiveLink href='/destination' path='destination'>
                      {!isTablet && <Text as='span' fontWeight='700'>01 </Text>} 
                      DESTINATION
                    </ActiveLink>

                    <ActiveLink href='/crew' path='crew'>
                      {!isTablet && <Text as='span' fontWeight='700'>02 </Text>} 
                      CREW
                    </ActiveLink>

                    <ActiveLink href='/technology'>
                      {!isTablet && <Text as='span' fontWeight='700'>03 </Text>} 
                      TECHNOLOGY
                    </ActiveLink>
                  </Flex>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>

        :

        <Flex 
          as='nav' 
          w='100%' 
          maxW={{'sm': '450px', 'lg': '830px'}} 
          h='96px' 
          backgroundColor='rgba(255, 255, 255, 0.03)' 
          backdropFilter='blur(25px)'
          justify='center'
          align='center'
          fontSize={{'sm': '14', 'lg': '16'}}
        >
          <Flex w='100%' maxW='542px' justify={{'sm': 'space-evenly', 'lg': 'space-between'}} h='100%'>
            <ActiveLink href='/'>
              {!isTablet && <Text as='span' fontWeight='700'>00 </Text>} 
              HOME
            </ActiveLink>
            
            <ActiveLink href='/destination' path='destination'>
              {!isTablet && <Text as='span' fontWeight='700'>01 </Text>} 
              DESTINATION
            </ActiveLink>

            <ActiveLink href='/crew' path='crew'>
              {!isTablet && <Text as='span' fontWeight='700'>02 </Text>} 
              CREW
            </ActiveLink>

            <ActiveLink href='/technology'>
              {!isTablet && <Text as='span' fontWeight='700'>03 </Text>} 
              TECHNOLOGY
            </ActiveLink>
          </Flex>
        </Flex>
      }
    </Flex>
  );
}