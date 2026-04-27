import { defineThemeConfig } from '@utils/defineThemeConfig'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'JMingr',
  id: 'accessible-astro-starter',
  logo: logoImage,
  seo: {
    title: 'Jose Miguel Mingorance Rejón - Senior Android Developer',
    description:
      'Portfolio personal de Jose Miguel Mingorance Rejón. Desarrollador Android nativo especializado en crear aplicaciones estables, eficientes y de gran escala.',
    author: 'Jose Miguel Mingorance Rejón',
  },
  colors: {
    primary: '#3b82f6',
    secondary: '#10b981',
    neutral: '#9ca3af',
    outline: '#3b82f6',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Inicio',
        href: '#home',
      },
      {
        type: 'link',
        label: 'Proyectos',
        href: '#projects',
      },
      {
        type: 'link',
        label: 'Sobre mí',
        href: '#about-me',
      },
      {
        type: 'link',
        label: 'Stack',
        href: '#tech-stack',
      },
      {
        type: 'link',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jose-miguel-mingorance/',
        icon: 'simple-icons:linkedin',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  }
})
