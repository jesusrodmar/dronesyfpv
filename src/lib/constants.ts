import { NavItem } from '../types';

export const NAV_LINKS: NavItem[] = [
  { 
    name: 'Empezar', 
    path: '/empezar',
    subItems: [
      { 
        name: '¿Qué es un dron?', 
        path: '/empezar/que-es',
        subItems: [
          { name: 'Drones estabilizados', path: '/empezar/que-es/estabilizados' },
          { name: 'Drones FPV', path: '/empezar/que-es/fpv' },
          { name: 'Glosario FPV', path: '/empezar/que-es/glosario' }
        ]
      },
      { 
        name: '¿Cómo empezar?', 
        path: '/empezar/como-empezar',
        subItems: [
          { name: 'Ready To Fly (RTF)', path: '/empezar/como-empezar/rtf' },
          { name: 'Monta tu dron', path: '/empezar/como-empezar/montaje' },
          { name: 'Emisoras', path: '/empezar/como-empezar/emisoras' },
          { name: 'Gafas FPV', path: '/empezar/como-empezar/gafas' },
          { name: 'Herramientas', path: '/empezar/como-empezar/herramientas' },
          { name: 'Simuladores FPV', path: '/empezar/como-empezar/simuladores' }
        ]
      }
    ]
  },
  { 
    name: 'Guías', 
    path: '/guias',
    subItems: [
      { name: 'Montajes Paso a Paso', path: '/guias/montajes' },
      { name: 'Guías de compra', path: '/guias/compras' },
      { name: 'Tutoriales', path: '/guias/tutoriales' },
      { name: 'Reviews', path: '/guias/reviews' }
    ]
  },
  { 
    name: 'Normativa', 
    path: '/normativa',
    subItems: [
      { name: 'ENAIRE / AESA', path: '/normativa/enaire' },
      { name: 'Requisitos de Vuelo', path: '/normativa/requisitos' },
      { name: 'Gestión Documental', path: '/normativa/gestion' }
    ]
  },
  { name: 'Noticias', path: '/blog' },
  { name: 'Contacto', path: '/contacto' },
];
