import { motion, Variants } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Video, Wrench, ShieldCheck, Glasses, Settings, Newspaper } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
  glow: string;
  bgHover: string;
  variants: any;
}

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center overflow-hidden py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,255,0,0.1),transparent_50%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-neon-green text-xl md:text-2xl font-medium mb-8 tracking-wide">
              Especialistas en drones y FPV, Cinemáticos
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6">
              DOMINA EL CIELO CON ESTILO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-neon-pink to-neon-green bg-[length:200%_auto] animate-gradient">
                CINEMÁTICO
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Aprende a volar, montar y configurar drones FPV para grabaciones cinematográficas, con fluidez, precisión y calidad.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/empezar/que-es"
                className="group relative px-8 py-4 bg-neon-green text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                <span className="relative flex items-center gap-2">
                  Empieza aquí <ArrowRight size={20} />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-dark-card border-t border-white/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Domina el Arte del Vuelo</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Todo lo que necesitas para convertirte en un piloto de drones profesional y capturar planos increíbles.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <FeatureCard
              variants={itemVariants}
              icon={<Video className="text-neon-pink" size={32} />}
              title="Iniciación al FPV"
              description="Conceptos básicos, simuladores y primeros pasos para volar con fluidez y seguridad."
              link="/empezar/como-empezar"
              color="group-hover:border-neon-pink/50"
              glow="group-hover:shadow-[0_0_30px_rgba(255,0,255,0.15)]"
              bgHover="group-hover:bg-neon-pink/5"
            />
            <FeatureCard
              variants={itemVariants}
              icon={<Wrench className="text-neon-green" size={32} />}
              title="Montajes Cinewhoop"
              description="Construye drones diseñados para llevar cámaras de cine, GoPro y volar cerca de personas."
              link="/guias/montajes"
              color="group-hover:border-neon-green/50"
              glow="group-hover:shadow-[0_0_30px_rgba(204,255,0,0.15)]"
              bgHover="group-hover:bg-neon-green/5"
            />
            <FeatureCard
              variants={itemVariants}
              icon={<ShieldCheck className="text-neon-green" size={32} />}
              title="Normativa y AESA"
              description="Requisitos legales, seguros y gestión documental para operar de forma profesional en España."
              link="/normativa/requisitos"
              color="group-hover:border-neon-green/50"
              glow="group-hover:shadow-[0_0_30px_rgba(204,255,0,0.15)]"
              bgHover="group-hover:bg-neon-green/5"
            />
            <FeatureCard
              variants={itemVariants}
              icon={<Glasses className="text-neon-pink" size={32} />}
              title="Gafas y Sistemas HD"
              description="Comparativas de sistemas digitales (DJI, Walksnail) para la mejor calidad de imagen en tus gafas."
              link="/guias/compras"
              color="group-hover:border-neon-pink/50"
              glow="group-hover:shadow-[0_0_30px_rgba(255,0,255,0.15)]"
              bgHover="group-hover:bg-neon-pink/5"
            />
            <FeatureCard
              variants={itemVariants}
              icon={<Settings className="text-neon-green" size={32} />}
              title="Ajustes Cinemáticos"
              description="Configuración de PIDs, filtros y rates en Betaflight para lograr movimientos suaves de cámara."
              link="/guias/tutoriales"
              color="group-hover:border-neon-green/50"
              glow="group-hover:shadow-[0_0_30px_rgba(204,255,0,0.15)]"
              bgHover="group-hover:bg-neon-green/5"
            />
            <FeatureCard
              variants={itemVariants}
              icon={<Newspaper className="text-neon-green" size={32} />}
              title="Noticias del Sector"
              description="Últimos lanzamientos de cámaras de acción, drones BNF comerciales y actualizaciones de software."
              link="/blog"
              color="group-hover:border-neon-green/50"
              glow="group-hover:shadow-[0_0_30px_rgba(204,255,0,0.15)]"
              bgHover="group-hover:bg-neon-green/5"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, link, color, glow, bgHover, variants }: FeatureCardProps) {
  return (
    <motion.div variants={variants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
      <Link to={link} className={`group block h-full p-8 rounded-2xl bg-dark-bg border border-white/5 transition-all duration-300 ${color} ${glow} ${bgHover} relative overflow-hidden`}>
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
        
        <div className="mt-6 flex items-center text-sm font-bold text-gray-500 group-hover:text-white transition-colors">
          Saber más <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}
