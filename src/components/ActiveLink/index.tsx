import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Link as ChakraLink, Flex, useBreakpointValue } from '@chakra-ui/react';

interface ActiveLinkProps extends LinkProps {
  path?: string;
  children: ReactNode;
}

export function ActiveLink({children, path, ...rest}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Flex 
      h={{'sm': '100%'}} 
      align='center' 
      borderBottom={
        !path && !isMobile ? asPath === rest.href && '3px solid #FFFFFF'
         : 
        !isMobile && asPath.includes(path) && '3px solid #FFFFFF'
      }
      borderRight={
        isMobile && !path && asPath === rest.href ? '3px solid #FFFFFF'
        :
        isMobile && asPath.includes(path) && '3px solid #FFFFFF'
    }
      _hover={asPath != rest.href && !isMobile && {
        borderBottom: '3px solid rgba(255, 255, 255, 0.4)',
        transition: '0.4s'}
      }
    >
      <Link href={rest.href} passHref>
        <ChakraLink 
          fontFamily='Barlow Condensed' 
          letterSpacing='2.7px'
          _hover={{textDecoration: 'none'}}
        >
          {children}
        </ChakraLink>
      </Link>
    </Flex>
  );
}