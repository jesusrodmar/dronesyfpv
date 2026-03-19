import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { NAV_LINKS } from '../lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-neon-green flex items-center justify-center text-black group-hover:shadow-[0_0_15px_rgba(204,255,0,0.5)] transition-shadow p-1.5">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                <path d="M10,15 Q20,40 40,40 L40,60 Q20,60 10,85 Q30,70 50,70 Q70,70 90,85 Q80,60 60,60 L60,40 Q80,40 90,15 Q70,30 50,30 Q30,30 10,15 Z" />
                <polygon points="50,42 44,50 50,58 56,50" fill="#ccff00" />
              </svg>
            </div>
            <span className="font-display font-black italic text-2xl tracking-wider">
              <span className="text-neon-green">DRONES</span>
              <span className="text-white">Y</span>
              <span className="text-neon-green">FPV</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-neon-pink relative py-5 flex items-center gap-1",
                      isActive ? "text-white" : "text-gray-400"
                    )}
                  >
                    {link.name}
                    {link.subItems && <ChevronDown size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-pink shadow-[0_0_10px_rgba(255,0,255,0.5)]"
                      />
                    )}
                  </Link>
                  
                  {link.subItems && (
                    <div className="absolute left-0 top-full pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-dark-card border border-white/10 rounded-xl shadow-xl py-2 min-w-[220px] flex flex-col">
                        {link.subItems.map(sub => (
                          <div key={sub.name} className="relative group/sub">
                            <Link 
                              to={sub.path} 
                              className={cn(
                                "px-4 py-2.5 text-sm transition-colors flex items-center justify-between",
                                location.pathname === sub.path 
                                  ? "text-neon-pink bg-white/5" 
                                  : "text-gray-400 hover:text-neon-pink hover:bg-white/5"
                              )}
                            >
                              {sub.name}
                              {sub.subItems && <ChevronDown size={14} className="-rotate-90 opacity-50 group-hover/sub:opacity-100 transition-opacity" />}
                            </Link>
                            
                            {sub.subItems && (
                              <div className="absolute left-full top-0 pl-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                                <div className="bg-dark-card border border-white/10 rounded-xl shadow-xl py-2 min-w-[220px] flex flex-col overflow-hidden">
                                  {sub.subItems.map(nested => (
                                    <Link 
                                      key={nested.name} 
                                      to={nested.path} 
                                      className={cn(
                                        "px-4 py-2.5 text-sm transition-colors",
                                        location.pathname === nested.path 
                                          ? "text-neon-pink bg-white/5" 
                                          : "text-gray-400 hover:text-neon-pink hover:bg-white/5"
                                      )}
                                    >
                                      {nested.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/10 bg-dark-card max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => !link.subItems && setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors",
                      isActive
                        ? "bg-white/5 text-neon-pink"
                        : "text-gray-400 hover:bg-white/5 hover:text-neon-pink"
                    )}
                  >
                    {link.name}
                    {link.subItems && <ChevronDown size={16} className="opacity-50" />}
                  </Link>
                  
                  {link.subItems && (
                    <div className="pl-4 mt-1 space-y-1 mb-2">
                      {link.subItems.map(sub => (
                        <div key={sub.name}>
                          <Link
                            to={sub.path}
                            onClick={() => !sub.subItems && setIsOpen(false)}
                            className={cn(
                              "flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                              location.pathname === sub.path
                                ? "text-neon-pink bg-white/5"
                                : "text-gray-500 hover:text-neon-pink hover:bg-white/5"
                            )}
                          >
                            {sub.name}
                            {sub.subItems && <ChevronDown size={14} className="opacity-50" />}
                          </Link>
                          
                          {sub.subItems && (
                            <div className="pl-4 mt-1 space-y-1">
                              {sub.subItems.map(nested => (
                                <Link
                                  key={nested.name}
                                  to={nested.path}
                                  onClick={() => setIsOpen(false)}
                                  className={cn(
                                    "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                    location.pathname === nested.path
                                      ? "text-neon-pink bg-white/5"
                                      : "text-gray-500 hover:text-neon-pink hover:bg-white/5"
                                  )}
                                >
                                  {nested.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </header>
  );
}
