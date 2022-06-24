import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import {useState, useCallback} from "react";
import styles from '../styles/css.module.scss'
import {Box, Button, Center, Flex, Grid, GridItem, Heading, Text, useColorModeValue} from "@chakra-ui/react";
import theme from "../styles/theme";
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import Lottie from 'react-lottie';
import animationRelatorio from '../assets/lotties/lf30_editor_wjdiwkr2';
import animationFinance from '../assets/lotties/lf30_editor_eycbdf4h';
import animationImport from '../assets/lotties/lf30_editor_obp5fveu';
import animationNota from '../assets/lotties/lf30_editor_qq66x8pg';
import animationOrca from '../assets/lotties/lf30_editor_tmglnxmq';
import NextLink from "next/link";


export default function SlideHero() {
  // emblaRef will be a reference to our carousel viewport
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  const [arrayObjs, setArrayObjs] = useState([
    {
      title: 'Cadastros práticos e ágeis',
      description: 'Utilize a nossa transferência de arquivos instantânea para trazer todos os seus dados de clientes, fornecedores, transportadoras e muito mais em poucos cliques. Dessa maneira você desfrutará de um teste muito mais realista e agradável sentindo como será daqui pra frente com o Naweby cuidando de sua empresa.',
      lottie: {
        loop: true,
        autoplay: true,
        animationData: animationImport,
        rendererSettings: {
          preserveAspectRatio: ""
        }
      }
    },
    {
      title: 'Cuide do que realmente importa no seu financeiro',
      description: 'Organize suas vendas e receba muito mais rápido com o financeiro compacto e funcional do Naweby! Nele você acompanha as pendências, recebimentos do dia, análises de faturamento e muito mais, além disso também consegue organizar suas despesas fixas e variáveis para que saiba exatamente como organizar seu caixa para os pagamentos.',
      lottie: {
        loop: true,
        autoplay: true,
        animationData: animationFinance,
        rendererSettings: {
          preserveAspectRatio: ""
        }
      }
    },
    {
      title: 'Acabaram os achismos, veja relatórios com dados reais',
      description: 'Eis aqui o divisor de águas para as análises de qualquer dono(a) de negócio! Nossos relatórios trazem informações fiéis e apuradas dos processos essenciais de sua empresa, para que você não viva nos achismos mas que tenha uma decisão embasada em dados reais mês a mês e ano a ano de seu negócio.',
      lottie: {
        loop: true,
        autoplay: true,
        animationData: animationRelatorio,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }
    },
  ]);
  const colorTitle = useColorModeValue(theme.colors.primary['500'], theme.colors.primary['100'])
  return (
    <>
      <div className={styles.embla} ref={emblaRef}>
        <Box className={styles.embla__container}>
          {arrayObjs.map((obj, i) => (
            <Box key={i} className={styles.embla__slide} pt={10} pb={10}>
              <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem colSpan={[5, 5, 3]}>
                  <Heading as='h3' size='lg' color={colorTitle}>
                    {obj.title}
                  </Heading>
                  <Text size='lg' mt={3} mb={3}>
                    {obj.description}
                  </Text>
                  <NextLink href="/cadastre-se-gratis" passHref>
                    <Button id={'bt_feature1'} variant='link' mr={5}>
                      Teste gratuitamente {'->'}
                    </Button>
                  </NextLink>
                </GridItem>
                <GridItem colSpan={[5, 5, 2]}>
                  <Lottie
                    options={obj.lottie}
                    height={300}
                    width={400}
                  />
                </GridItem>
              </Grid>
            </Box>
          ))}
        </Box>
        <Flex justifyContent={'center'}>
          <ArrowBackIcon w={6} h={6}  onClick={scrollPrev} mr={2} cursor={'pointer'} />
          <ArrowForwardIcon w={6} h={6}  onClick={scrollNext} ml={2} cursor={'pointer'} />
        </Flex>
      </div>
    </>
  )
}
