/** @type {import('next').NextConfig} */
const withImages = require('next-images')
// const nextConfig = {
//   reactStrictMode: true,
// }
module.exports = withImages({
  esModule: true,
  images: {
    disableStaticImages: true
  },
  env: {
    APP_NAME: 'Naweby',
    APP_SLOGAN: 'Sistema para Gestão de Auto Peças',
    APP_DESCRIPTION: 'O Naweby é a plataforma online fácil de gestão e controle financeiro, controle de estoque e emissão de nota fiscal de sua pequena empresa.',
    APP_URL: 'https://www.sistemaautopecas.com.br/',
    APP_LANG: 'pt_BR',
    APP_IMAGE_DESTAQUE: 'https://www.sistemaautopecas.com.br/bg-naweby.jpg',
  },
})
