import React, { useState, useEffect, useRef } from 'react';
import { Play, Image as ImageIcon, Calendar, Trophy } from 'lucide-react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('fotos');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  const photos = [
    'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/264337/pexels-photo-264337.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/139762/pexels-photo-139762.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ];

  const events = [
    {
      title: 'Torneo de Primavera 2024',
      date: 'Marzo 15-17, 2024',
      description: 'Competencia anual entre academias regionales',
      image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      title: 'Clínica con Ex-Grandes Ligas',
      date: 'Febrero 10, 2024',
      description: 'Sesión especial con jugadores profesionales',
      image: 'https://images.pexels.com/photos/264337/pexels-photo-264337.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      title: 'Graduación de Temporada',
      date: 'Diciembre 2023',
      description: 'Ceremonia de reconocimiento a jugadores destacados',
      image: 'https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Galería y <span className="text-red-600">Eventos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revive los mejores momentos de entrenamientos, competencias y eventos especiales 
              de nuestra academia.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg flex">
              <button
                onClick={() => setActiveTab('fotos')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'fotos' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ImageIcon className="w-5 h-5" />
                <span>Fotos</span>
              </button>
              <button
                onClick={() => setActiveTab('eventos')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'eventos' 
                    ? 'bg-red-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Calendar className="w-5 h-5" />
                <span>Eventos</span>
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'fotos' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <img 
                    src={photo} 
                    alt={`Galería ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'eventos' && (
            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-blue-600 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Video Spotlight */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Video Presentación de la Academia
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Conoce nuestras instalaciones, metodología y el ambiente 
                  que hace de KF Academy el lugar perfecto para desarrollar tu talento.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5" />
                  <span>Ver Video Completo</span>
                </button>
              </div>
              <div className="relative h-64 md:h-full min-h-[300px]">
                <img 
                  src="https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Video presentación"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;