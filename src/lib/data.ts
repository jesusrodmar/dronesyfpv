import { BlogPost } from '../types';

export const CATEGORIES = ['Todos', 'Novedades', 'Tecnología', 'Eventos', 'Opinión'];

export const MOCK_POSTS: BlogPost[] = [
  {
    id: 'dji-o4-analisis',
    title: 'Análisis a fondo del nuevo sistema DJI O4',
    excerpt: 'Probamos el último sistema de transmisión digital de DJI. ¿Merece la pena actualizar desde O3? Descubre todas las novedades y latencias reales.',
    category: 'Tecnología',
    date: '15 Mar 2026',
    readTime: '8 min',
    image: 'https://picsum.photos/seed/drone1/800/400?blur=1',
    color: 'neon-green'
  },
  {
    id: 'campeonato-espana-fpv',
    title: 'Resumen del Campeonato de España FPV 2026',
    excerpt: 'Los mejores pilotos del país se dieron cita en Madrid. Crónica completa, resultados y los setups ganadores del fin de semana.',
    category: 'Eventos',
    date: '10 Mar 2026',
    readTime: '5 min',
    image: 'https://picsum.photos/seed/race/800/400?blur=1',
    color: 'neon-pink'
  },
  {
    id: 'nueva-normativa-aesa',
    title: 'Cambios en la normativa AESA para vuelos recreativos',
    excerpt: 'AESA ha publicado una actualización sobre las zonas ZEPA y los permisos de vuelo. Te explicamos cómo te afecta como piloto FPV.',
    category: 'Novedades',
    date: '05 Mar 2026',
    readTime: '4 min',
    image: 'https://picsum.photos/seed/law/800/400?blur=1',
    color: 'neon-green'
  },
  {
    id: 'futuro-analogico',
    title: '¿Está muerto el vídeo analógico en 2026?',
    excerpt: 'Con la bajada de precios de Walksnail y HDZero, analizamos si sigue teniendo sentido montar un dron analógico hoy en día.',
    category: 'Opinión',
    date: '28 Feb 2026',
    readTime: '6 min',
    image: 'https://picsum.photos/seed/analog/800/400?blur=1',
    color: 'neon-pink'
  },
  {
    id: 'baterias-solido',
    title: 'Baterías de estado sólido: El futuro del FPV',
    excerpt: 'Las nuevas baterías prometen el doble de autonomía con la mitad de peso. ¿Cuándo llegarán al mercado de consumo?',
    category: 'Tecnología',
    date: '20 Feb 2026',
    readTime: '7 min',
    image: 'https://picsum.photos/seed/battery/800/400?blur=1',
    color: 'neon-green'
  }
];
