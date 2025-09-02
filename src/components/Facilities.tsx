import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Shield, Zap, Award } from 'lucide-react';

const Facilities = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const facilities = [
    {
      image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Campo Principal de Entrenamiento',
      description: 'Césped artificial de última generación para prácticas seguras'
    },
    {
      image: 'https://images.pexels.com/photos/264337/pexels-photo-264337.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Jaulas de Bateo Profesionales',
      description: 'Equipamiento moderno con sistemas de análisis de swing'
    },
    {
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Gimnasio de Acondicionamiento',
      description: 'Zona especializada para desarrollo físico y prevención de lesiones'
    },
    {
      image: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-speed-163444.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Área de Velocidad y Agilidad',
      description: 'Espacio dedicado a mejorar rapidez y coordinación'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % facilities.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % facilities.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  return (
    <section id="instalaciones" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              NUESTRAS <span className="text-blue-600">INSTALACIONES</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instalaciones modernas con tecnología de vanguardia para maximizar el desarrollo 
              y rendimiento de cada jugador.
            </p>
          </div>

          {/* Image Carousel */}
          <div className="relative mb-16">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={facilities[currentImage].image}
                alt={facilities[currentImage].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {facilities[currentImage].title}
                </h3>
                <p className="text-lg opacity-90">
                  {facilities[currentImage].description}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {facilities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Seguridad Máxima</h3>
              <p className="text-gray-700">
                Equipos certificados y protocolos de seguridad para un entrenamiento sin riesgos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tecnología Avanzada</h3>
              <p className="text-gray-700">
                Sistemas de análisis de movimiento y métricas de rendimiento en tiempo real.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certificación Profesional</h3>
              <p className="text-gray-700">
                Instalaciones que cumplen con estándares internacionales de entrenamiento.
              </p>
            </div>
          </div>

          {/* Technology Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                TECNOLOGÍA QUE OFRECEMOS
              </h3>
            </div>
            
            <div className="flex justify-center items-center space-x-12 md:space-x-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-white">HT</span>
                </div>
                <p className="text-sm text-gray-300">HitTrax</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-white">R</span>
                </div>
                <p className="text-sm text-gray-300">Rapsodo</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <p className="text-sm text-gray-300">Attack</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-white">D</span>
                </div>
                <p className="text-sm text-gray-300">Driveline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;