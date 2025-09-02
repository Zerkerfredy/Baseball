import React, { useEffect, useRef, useState } from 'react';
import { Award, Star, Calendar } from 'lucide-react';

const Coaches = () => {
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

  const coaches = [
    {
      name: 'Carlos Rodríguez',
      position: 'Director Técnico',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: '20 años de experiencia',
      background: 'Ex-jugador de Liga Mexicana de Béisbol',
      specialties: ['Desarrollo juvenil', 'Técnica de bateo', 'Liderazgo']
    },
    {
      name: 'Ana Martínez',
      position: 'Coach de Pitcheo',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: '15 años de experiencia',
      background: 'Certificada USA Baseball & NFCA',
      specialties: ['Biomecánica', 'Prevención de lesiones', 'Pitcheo femenil']
    },
    {
      name: 'Miguel Santos',
      position: 'Preparador Físico',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: '12 años de experiencia',
      background: 'Licenciado en Ciencias del Deporte',
      specialties: ['Acondicionamiento', 'Velocidad', 'Recuperación']
    },
    {
      name: 'Roberto Fernández',
      position: 'Coach de Defensa',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: '18 años de experiencia',
      background: 'Ex-infielder profesional',
      specialties: ['Fielding', 'Estrategia', 'Mental game']
    }
  ];

  return (
    <section id="coaches" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestro <span className="text-blue-400">Equipo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              En KF Baseball Performance, contamos con un grupo de entrenadores y personal apasionados por el desarrollo de cada atleta. Nuestro equipo combina experiencia en el béisbol profesional y juvenil con herramientas avanzadas. Trabajamos de manera personalizada para que cada jugador alcance su máximo potencial, dentro y fuera del campo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coaches.map((coach, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {coach.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-3">
                    {coach.position}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {coach.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 mr-2" />
                      {coach.background}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Especialidades:</p>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para entrenar con los mejores?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Agenda una sesión de evaluación gratuita con nuestro equipo técnico.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Agendar Evaluación Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;