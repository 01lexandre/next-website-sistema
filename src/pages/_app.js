import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyle from '../styles/global'
import themeShema from '../styles/theme'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {AnimatePresence} from "framer-motion";
import Script from 'next/script'
import NavBar from "../Components/NavBar";
import HeaderNav from "../Components/Header/HeaderNav";
import Footer from "../Components/Footer";
const theme = extendTheme(themeShema)

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import {useRouter} from "next/router";

// The handler to smoothly scroll the element into view
const handExitComplete = () => {
  if (typeof window !== 'undefined') {
    // Get the hash from the url
    const hashId = window.location.hash;

    if (hashId) {
      // Use the hash to find the first element with that id
      const element = document.querySelector(hashId);

      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }
};

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
        <ChakraProvider theme={theme}>
          <DefaultSeo {...SEO} />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              window.intercomSettings = {
                api_base: "https://api-iam.intercom.io",
                app_id: "sk61703x"
              };
              `,
            }}
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/sk61703x';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
              `,
            }}
          />
          <>
            <HeaderNav />
            <Component {...pageProps}/>
            <Footer />
          </>
          <GlobalStyle />
        </ChakraProvider>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp
