import styles from '../styles/css.module.scss'
import {
  Box,
  Button,
  Container,
  Flex, Grid, GridItem,
  Heading,
  Text,
  Image,
  useColorMode,
  useColorModeValue, FormControl, FormLabel, Input, FormErrorMessage, LinkBox, LinkOverlay, Icon
} from "@chakra-ui/react";
import theme from '../styles/theme'
import ImageHeader from '../assets/no-oldman.png'
import bgBanner from '../assets/banner-bg-1-1-dd9fe59bd7fb8d8bee8da6d74bf87663.png'
import SlideHero from "../Components/SlideHero";
import {Field, Form, Formik} from "formik";
import {BrandJsonLd, NextSeo, WebPageJsonLd} from "next-seo";
import NextLink from "next/link";
import {useRouter} from "next/router";

function FormHome() {
  const router = useRouter()
  return (
    <Formik
      initialValues={{email: ''}}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          router.push('/cadastre-se-gratis?mail=' + values.email)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name='email'>
            {({field, form}) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <Input size='lg' bg={'#fff'} color={theme.colors.text} {...field} id='email'
                       placeholder='Informe seu e-mail.'/>
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            id={'bt_footerAction'}
            mt={3}
            borderRadius={41}
            w={'100%'}
            colorScheme='secundary'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Cadastre-se agora.
          </Button>
        </Form>
      )}
    </Formik>
  )
}

function IconWhats() {
  return (
    <Icon viewBox='0 0 60 60'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 30 30" width="60px" height="60px">    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"/></svg>
    </Icon>
  )
}

export default function Home() {
  const bgAction = useColorModeValue(theme.colors.primary['400'], theme.colors.primary['100'])
  // TODO: https://github.com/garmeeh/next-seo
  return (
    <>
      <NextSeo
        description={process.env.APP_DESCRIPTION}
        canonical={process.env.APP_URL}
        openGraph={{
          url: process.env.APP_URL,
          title: process.env.APP_NAME + ' - ' + process.env.APP_SLOGAN,
          description: process.env.APP_DESCRIPTION,
          images: [
            {
              url: process.env.APP_IMAGE_DESTAQUE,
              width: 1920,
              height: 1080,
              alt: process.env.APP_SLOGAN
            },
          ],
        }}
        twitter={{
          images: [
            {
              url: process.env.APP_IMAGE_DESTAQUE,
              width: 1920,
              height: 1080,
              alt: process.env.APP_SLOGAN
            },
          ],
        }}
      />
      <WebPageJsonLd
        description={process.env.APP_DESCRIPTION}
        id={process.env.APP_URL + '#website'}
        url={process.env.APP_URL}
        name={process.env.APP_NAME}
        logo={process.env.APP_URL + '/logo-princ.png'}
      />
      <main>
        <Box as={'header'} className={styles.header} backgroundImage={bgBanner}>
          <Box as={'section'}>
            <Container maxW='container.xl'>
              <Grid templateColumns='repeat(12, 1fr)' gap={6}>
                <GridItem colSpan={[12, 12, 6]} className={styles.centerDiv}>
                  <Text
                    as={'h1'}
                    bgGradient='linear(to-l, #ff4500, #3d3dc2)'
                    bgClip='text'
                    fontSize='2.5rem'
                    fontWeight='extrabold'
                    lineHeight={'41px'}
                  >
                    Seu Sistema de Auto Peças completo e grátis.
                  </Text>
                  <Text size='lg' mt={2} mb={7}>
                    Gerenciar sua auto peças com segurança nunca esteve tão fácil
                    por meio do gerenciamento prático e enxuto do Naweby.
                  </Text>
                  <Button as='a' textDecoration={'none'} size={'lg'} id={'bt_heroTop'} colorScheme='primary' href='https://www.naweby.com.br/cadastre-se-gratis'>
                    Cadastre-se Grátis
                  </Button>
                </GridItem>
                <GridItem colSpan={[12, 12, 6]}>
                  <Image src={ImageHeader} alt='Seu Sistema de Auto Peças completo e grátis.' margin={'0 auto'}/>
                </GridItem>
              </Grid>
            </Container>
          </Box>
        </Box>
        <Box as={'section'} pt={'5rem'} id={'funcionalidades'}>
          <Container maxW='container.sm' textAlign={'center'}>
            <Heading as='h2' size='lg'
                     color={useColorModeValue(theme.colors.primary['500'], theme.colors.primary['100'])}>
              Funcionalidades para micro e pequenas empresas que pensam grande
            </Heading>
            <Text size='lg' mt={2} mb={7}>
              Controle seus pedidos de venda, estoque, financeiro e emissão de notas fiscais
              tudo com muita segurança e otimização do tempo em cada processo.
            </Text>
          </Container>
          <Container maxW='container.xl'>
            <Grid templateColumns='repeat(12, 1fr)' gap={6}>
              <GridItem colSpan={[12, 12, 4]} className={styles.centerDiv}>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                  <Heading size='md' my='2'>
                    <LinkOverlay>
                      Cadastro e busca por códigos alternativos
                    </LinkOverlay>
                  </Heading>
                  <Text>
                    Possibilita vincular vários códigos de fabricantes e fornecedores a uma mesma peça, chamado código
                    de conversão, facilitando sua localização. Também permite a vinculação de peças entre si, chamado de
                    código similar.
                  </Text>
                </LinkBox>
              </GridItem>
              <GridItem colSpan={[12, 12, 4]} className={styles.centerDiv}>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                  <Heading size='md' my='2'>
                    <LinkOverlay>
                      Simulação do preço de venda e lucro
                    </LinkOverlay>
                  </Heading>
                  <Text>
                    O vendedor ou gerente, pode simular em tempo real a lucratividade dos itens do pedido e verificar
                    qual faixa de preço pode praticar.
                  </Text>
                </LinkBox>
              </GridItem>
              <GridItem colSpan={[12, 12, 4]} className={styles.centerDiv}>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                  <Heading size='md' my='2'>
                    <LinkOverlay>
                      Importação de Dados.
                    </LinkOverlay>
                  </Heading>
                  <Text>
                    Fazemos a importação de dados do seu sistema atual. Elimine a digitação do seu cadastro de clientes
                    e produtos, através de importação de dados de diversos* sistemas, Planilhas em Excel ou arquivos
                    texto. As informações poderão ser enviadas para nossa equipe, em qualquer formato e tipo, para que
                    possam ser importadas para o Naweby.
                  </Text>
                </LinkBox>
              </GridItem>
              <GridItem colSpan={[12, 12, 4]} className={styles.centerDiv}>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                  <Heading size='md' my='2'>
                    <LinkOverlay>
                      Emissão de nota fiscal em poucos cliques
                    </LinkOverlay>
                  </Heading>
                  <Text>
                    Fazemos a importação de dados do seu sistema atual. Elimine a digitação do seu cadastro de clientes
                    e produtos, através de importação de dados de diversos* sistemas, Planilhas em Excel ou arquivos
                    texto. As informações poderão ser enviadas para nossa equipe, em qualquer formato e tipo, para que
                    possam ser importadas para o Naweby.
                  </Text>
                </LinkBox>
              </GridItem>
              <GridItem colSpan={[12, 12, 4]} className={styles.centerDiv}>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                  <Heading size='md' my='2'>
                    <LinkOverlay>
                      Orçamentos e pedidos que facilitam seu trabalho
                    </LinkOverlay>
                  </Heading>
                  <Text>
                    Turbine sua geração de pedidos com uma pesquisa ampla e afiada! Com a nossa busca de produtos por
                    multicódigos, apresentação de similares e a visualização de estoque em tempo real, seus vendedores
                    terão várias informações relevantes para negociar e vender muito mais durante o atendimento.
                  </Text>
                </LinkBox>
              </GridItem>
              <GridItem colSpan={[12, 12, 4]} className={styles.centerDiv}>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                  <Heading size='md' my='2'>
                    <LinkOverlay>
                      Cuide do que realmente importa no seu financeiro
                    </LinkOverlay>
                  </Heading>
                  <Text>
                    Organize suas vendas e receba muito mais rápido com o financeiro compacto e funcional do Naweby!
                    Nele você acompanha as pendências, recebimentos do dia, análises de faturamento e muito mais, além
                    disso também consegue organizar suas despesas fixas e variáveis para que saiba exatamente como
                    organizar seu caixa para os pagamentos.
                  </Text>
                </LinkBox>
              </GridItem>
            </Grid>
          </Container>
          <Container maxW='container.lg'>
            <SlideHero/>
          </Container>
        </Box>
        <Box as={'section'} mb={'5rem'} pt={'5rem'}>
          <Container maxW='container.lg'>
            <Box bg={bgAction} color={useColorModeValue('#fff', theme.colors.text)} p={6} borderRadius={16}>
              <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem colSpan={[5, 5, 3]}>
                  <Heading as='h3' size='lg'>
                    Experimente e use gratuitamente o sistema perfeito para sua auto peças.
                  </Heading>
                  <Text size='lg' mt={3} mb={3}>
                    Se você deseja um sistema online para auto peças que simplesmente faça o que você precisa, sem muita
                    dificuldade e que seja fácil de usar,
                    o Naweby é o programa mais preparado para te atender agora!
                  </Text>
                </GridItem>
                <GridItem colSpan={[5, 5, 2]}>
                  <Flex justifyContent={'center'} alignItems={'center'} h={'100%'}>
                    <Button
                      rightIcon={<IconWhats />}
                      id={'bt_footerAction'}
                      mt={3}
                      borderRadius={41}
                      w={'100%'}
                      colorScheme='teal'
                      size={'lg'}
                    >
                     Chamar um consultor
                    </Button>
                  </Flex>
                </GridItem>
              </Grid>
            </Box>
          </Container>
        </Box>
      </main>
    </>
  )
}
