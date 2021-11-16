import Document, {Html, Head, Main, NextScript} from 'next/document';
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from '../styles/theme';

export default class MyDocument extends Document {
    render() {
        return(
            <Html lang="en">
                <Head>
                    <meta name="author" content="Navar Kartalian" />
                    <meta name="description" content="Frontend Mentor Space tourism web site" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}