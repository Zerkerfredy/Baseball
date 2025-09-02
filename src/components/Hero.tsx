import React from 'react';
import { ChevronDown, Play } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.8), rgba(220, 38, 38, 0.6)), url('https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-red-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500/20 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            KF
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in-up-delay-1">
          BASEBALL
        </p>
        
        <p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in-up-delay-1">
          PERFORMANCE
        </p>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
          Desarrollamos el potencial de cada jugador con entrenamientos profesionales, 
          instalaciones de primer nivel y la experiencia de coaches certificados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-3">
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Únete al Equipo
          </button>
          
          <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50">
            Clase de Prueba Gratis
          </button>
          
          <button className="flex items-center space-x-2 text-white hover:text-red-200 transition-colors duration-300">
            <Play className="w-6 h-6" />
            <span className="font-medium">Ver Video</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-white/80 hover:text-white transition-colors">
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-red-400">500+</div>
              <div className="text-sm text-white/80">Jugadores Entrenados</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400">15+</div>
              <div className="text-sm text-white/80">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-red-400">95%</div>
              <div className="text-sm text-white/80">Mejora en Rendimiento</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400">50+</div>
              <div className="text-sm text-white/80">Becas Universitarias</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;