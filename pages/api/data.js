// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    one: {
      title: '@udiservicios s.a.s',
      type: 'cliente',
      body: 'Esta pagina web fue desarrollada con el fin de dar a conocer la empresa, canalizar clientes por medio de un formulario y números telefónicos. Se realizo una planificación, diseño previo y luego la realización del código',
      url: 'https://www.audiservicios.com.co/',
      bg: 'audiservicios',
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
      title: 'Portafolio Front-end',
      type: 'Proyecto Personal',
      body: 'Este es un buscador que recopila todos los retros concluidos del sitio Frontend Mentor. además están clasificados por Newbie y Junior.',
      url: '',
      bg: '',
      badge: {
        NEXT: {
          text: 'NEXT.JS',
          color: '000000',
          logo: 'next.js',
          width: '75',
        },
      },
      key: 2,
    },
    three: {
      title: '',
      type: '',
      body: '',
      url: '',
      bg: '',
      badge: '',
      key: 2,
    },
    four: {
      title: '',
      type: '',
      body: '',
      url: '',
      bg: '',
      badge: '',
      key: 2,
    },
  });
}
