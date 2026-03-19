import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { cn } from '../components/Layout';

const CATEGORIES = ['Todos', 'Novedades', 'Tecnología', 'Eventos', 'Opinión'];

export const MOCK_POSTS = [
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

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredPosts = activeCategory === 'Todos' 
    ? MOCK_POSTS 
    : MOCK_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
          Blog <span className="text-neon-pink">FPV</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Noticias, análisis técnicos, crónicas de eventos y opinión personal por Jesús FPV.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
              activeCategory === category
                ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                : "bg-dark-card text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
          >
            <Link to={`/blog/${post.id}`} className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className={cn(
                  "px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-black/80 backdrop-blur-md border",
                  post.category === 'Novedades' && "text-neon-green border-neon-green/30",
                  post.category === 'Tecnología' && "text-neon-green border-neon-green/30",
                  post.category === 'Eventos' && "text-neon-pink border-neon-pink/30",
                  post.category === 'Opinión' && "text-yellow-400 border-yellow-400/30",
                )}>
                  {post.category}
                </span>
              </div>
            </Link>
            
            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
              </div>
              
              <Link to={`/blog/${post.id}`}>
                <h2 className="text-2xl font-display font-bold mb-3 group-hover:text-neon-green transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              
              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-neon-pink transition-colors mt-auto"
              >
                Leer artículo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
