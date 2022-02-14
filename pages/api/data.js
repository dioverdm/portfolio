// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    one: {
      title: '@udiservicios s.a.s',
      type: 'cliente',
      body: 'Esta pagina web fue desarrollada con el fin de dar a conocer la empresa, canalizar clientes por medio de un formulario y números telefónicos.',
      url: 'https://www.audiservicios.com.co/',
      bg: '/image/@udiservicios.png',
      badge: {
        html: { text: 'HTML5', color: 'E34F26', logo: 'html5', width: '65' },
        css: { text: 'CSS3', color: '1572B6', logo: 'css3', width: '57' },
        bootstrap: {
          text: 'BOOTSTRAP',
          color: '7952B3',
          logo: 'bootstrap',
          width: '95',
        },
      },
      key: 1,
    },
    two: {
      title: 'Portafolio Frontend Mentor',
      type: 'Proyecto Personal',
      body: 'Este es un buscador que recopila todos los retros concluidos del sitio Frontend Mentor. además están clasificados por Newbie y Junior.',
      url: 'https://github.com/Mooenz/portfolio-frontendmentor',
      bg: '',
      badge: {
        next: {
          text: 'NEXT.JS',
          color: '000000',
          logo: 'next.js',
          width: '75',
        },
        scss: {
          text: 'SASS',
          color: 'CC6699',
          logo: 'sass',
          width: '59',
        },
      },
      key: 2,
    },
    three: {
      title: 'Portafolio DevChallenges',
      type: 'Proyecto Personal',
      body: 'Este es un buscador que recopila todos los retros concluidos del sitio DevChallenges. Solo son proyectos pertenecientes a la categoría Responsive.',
      url: 'https://github.com/Mooenz/portfolio-devchallenges',
      bg: '',
      badge: {
        next: {
          text: 'NEXT.JS',
          color: '000000',
          logo: 'next.js',
          width: '75',
        },
        scss: {
          text: 'SASS',
          color: 'CC6699',
          logo: 'sass',
          width: '59',
        },
      },
      key: 3,
    },
    four: {
      title: 'Landing Page',
      type: 'prueba técnica',
      body: 'Este proyecto es el resultado de una prueba técnica. El objetivo de esta prueba era mostrar el nivel de ',
      url: 'https://mooenz.github.io/prueba-tecnica-landin-page/',
      bg: '/image/prueba-tecnica-landing-page.jpg',
      badge: {
        scss: {
          text: 'SASS',
          color: 'CC6699',
          logo: 'sass',
          width: '59',
        },
        javascript: {
          text: 'JAVASCRIPT',
          color: 'F7DF1E',
          logo: 'javascript',
          width: '95',
          fontColor: '222',
        },
      },
      key: 4,
    },
    five: {
      title: 'Frontend UX',
      type: 'prueba técnica',
      body: 'Esta prueba se realizo con el objetivo de demostrar la capacidad de replicar un sitio partiendo de un diseño previo.',
      url: 'https://mooenz.github.io/prueba-frontend-ux/',
      bg: '/image/prueba-tecnica-frontend-ux.jpg',
      badge: {
        react: {
          text: 'CREATE REACT APP',
          color: '09D3AC',
          logo: 'Create React App',
          width: '137',
        },
        scss: {
          text: 'SASS',
          color: 'CC6699',
          logo: 'sass',
          width: '59',
        },
      },
      key: 5,
    },
  });
}
