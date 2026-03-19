import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-card py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 opacity-50">
          <Zap size={16} />
          <span className="font-display font-bold text-sm">dronesyfpv.es © {new Date().getFullYear()} por Jesús FPV</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-neon-pink transition-colors">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-neon-pink transition-colors">YouTube</a>
          <Link to="/contacto" className="hover:text-neon-pink transition-colors">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
