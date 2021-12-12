import { ChakraProvider, Box, BoxProps } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import Head from 'next/head';
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps, router }) {
  const MotionBox = motion<BoxProps>(Box);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ChakraProvider theme={theme}>
        <MotionBox
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: '0.5' }}
        >
          <Component {...pageProps} />
        </MotionBox>
      </ChakraProvider>
    </>
  );
}

export default MyApp
