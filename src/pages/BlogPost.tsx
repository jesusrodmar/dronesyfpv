import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { MOCK_POSTS } from '../lib/data';
import { cn } from '../lib/utils';

export default function BlogPost() {
  const { id } = useParams();
  const post = MOCK_POSTS.find(p => p.id === id) || MOCK_POSTS[0];

  return (
    <article className="min-h-screen bg-dark-bg pb-24">
      {/* Hero Header */}
      <header className="relative h-[50vh] min-h-[400px] flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Volver al blog
          </Link>
          
          <div className="mb-6">
            <span className={cn(
              "px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-black/50 backdrop-blur-md border",
              post.category === 'Novedades' && "text-neon-green border-neon-green/30",
              post.category === 'Tecnología' && "text-neon-green border-neon-green/30",
              post.category === 'Eventos' && "text-neon-pink border-neon-pink/30",
              post.category === 'Opinión' && "text-yellow-400 border-yellow-400/30",
            )}>
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2"><User size={16} className="text-neon-green" /> Jesús FPV</span>
            <span className="flex items-center gap-2"><Calendar size={16} className="text-neon-green" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-neon-pink" /> {post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="prose prose-invert prose-lg prose-headings:font-display prose-a:text-neon-green hover:prose-a:text-neon-pink max-w-none">
          <p className="lead text-xl text-gray-300 border-l-4 border-neon-green pl-6 mb-10">
            {post.excerpt}
          </p>
          
          <h2>El contexto actual</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <img 
            src={`https://picsum.photos/seed/${post.id}-detail/800/400`} 
            alt="Detalle" 
            className="rounded-xl my-10 border border-white/10"
            referrerPolicy="no-referrer"
          />
          
          <h2>Análisis Técnico</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul>
            <li>Mejora en la latencia de hasta un 20%.</li>
            <li>Mayor penetración de señal en entornos urbanos.</li>
            <li>Nuevos modos de visualización en las gafas.</li>
          </ul>
          
          <blockquote>
            "Este avance cambia por completo las reglas del juego para los pilotos de freestyle en bando."
            <cite>— Jesús FPV</cite>
          </blockquote>
          
          <h2>Conclusión</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        
        {/* Author Bio */}
        <div className="mt-16 p-8 bg-dark-card border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-neon-green to-neon-green p-1 shrink-0">
            <img 
              src="https://picsum.photos/seed/jesusfpv/200/200" 
              alt="Jesús FPV" 
              className="w-full h-full rounded-full object-cover border-4 border-dark-card"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold font-display mb-2">Jesús FPV</h3>
            <p className="text-gray-400 text-sm mb-4">
              Piloto de drones FPV, creador de contenido y apasionado por la tecnología. Compartiendo mis experiencias y conocimientos para ayudar a la comunidad a volar más alto y seguro.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <a href="#" className="text-neon-pink hover:text-white transition-colors text-sm font-bold">Instagram</a>
              <a href="#" className="text-neon-pink hover:text-white transition-colors text-sm font-bold">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
