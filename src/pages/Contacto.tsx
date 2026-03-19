import { Send } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-display font-bold mb-6">
            Hablemos de <span className="text-neon-green">FPV</span>
          </h1>
          <p className="text-xl text-gray-400">
            ¿Tienes dudas sobre qué dron comprar? ¿Problemas con una configuración? Escríbenos y te ayudaremos.
          </p>
        </div>

        <div className="bg-dark-card border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Asunto</label>
              <select
                id="subject"
                className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors appearance-none"
              >
                <option>Duda sobre componentes</option>
                <option>Problema técnico / Betaflight</option>
                <option>Normativa y seguros</option>
                <option>Sugerencia para la web</option>
                <option>Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors resize-none"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-neon-green text-black font-bold py-4 rounded-lg hover:bg-neon-green/90 transition-colors group"
            >
              Enviar Mensaje
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
