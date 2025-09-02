import React, { useEffect, useRef, useState } from 'react';
import { Target, Users, Trophy, Heart } from 'lucide-react';

const AboutUs = () => {
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

  return (
    <section id="nosotros" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-red-600">Nosotros</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más que una academia, somos una familia dedicada a desarrollar no solo 
              grandes jugadores de béisbol, sino personas íntegras y exitosas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Nuestra Misión
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                En KF Baseball Academy, creemos que cada jugador tiene un potencial único 
                esperando ser descubierto. Nuestro enfoque personalizado combina técnicas 
                modernas de entrenamiento con valores tradicionales del béisbol.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Con más de 15 años de experiencia, hemos ayudado a cientos de jugadores 
                a alcanzar sus metas, desde mejorar en equipos locales hasta obtener 
                becas universitarias y llegar al béisbol profesional.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Entrenamiento de béisbol"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Excelencia</h4>
              <p className="text-gray-600">
                Buscamos la perfección en cada jugada, cada entrenamiento, cada momento.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Trabajo en Equipo</h4>
              <p className="text-gray-600">
                Fomentamos la colaboración y el apoyo mutuo entre todos nuestros jugadores.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Disciplina</h4>
              <p className="text-gray-600">
                La constancia y dedicación son la base del éxito en el béisbol y la vida.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Pasión</h4>
              <p className="text-gray-600">
                Transmitimos nuestro amor por el béisbol en cada sesión de entrenamiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;