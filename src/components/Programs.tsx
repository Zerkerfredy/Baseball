import React, { useEffect, useRef, useState } from 'react';
import { Baby, Users, Zap, Trophy, Clock, MapPin } from 'lucide-react';

const Programs = () => {
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

  const services = [
    {
      icon: Baby,
      title: 'Hitting',
      description: 'Sesión de bateo con instrucción profesional por 1 hora.',
      features: ['Análisis avanzado de swing', 'Ejercicios personalizados', 'Desarrollo de disciplina', 'Planes adaptados a todos los niveles'],
      price: 'Reserva ahora',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Pitching',
      description: 'Sesión de pitcheo con instrucción profesional por 1 hora.',
      features: ['Evaluación de mecánica y postura', 'Entrenamiento de velocidad, control y consistencia', 'Tecnología Rapsodo', 'Programas de cuidado del brazo'],
      price: 'Reserva ahora',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Fielding',
      description: 'Sesión de fildeo con instrucción profesional por 1 hora.',
      features: ['Entrenamiento de reacciones rápidas', 'Posicionamiento y lectura de jugadas', 'Coordinación ojo-mano', 'Precisión en lanzamientos'],
      price: 'Reserva ahora',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Trophy,
      title: 'Renta de cage',
      description: 'Renta de cage por 1 hora. Opción de añadir maquina de pitcheo por $15 dólares mas (depende disponibilidad).',
      features: ['Disponible por hora', 'Opcional máquina de pitcheo por $10', 'Individual, pareja o grupo', 'Capacidad de 4 personas por cage'],
      price: 'Reserva ahora',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="programas" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-red-400">SERVICIOS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Servicios especializados para llevar tu juego al siguiente nivel con 
              tecnología avanzada y entrenamiento profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4 space-y-2">
                  <div className="text-center">
                    <button className={`w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300`}>
                      {service.price}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                EXPLORAR NUESTROS SERVICIOS PARA LLEVAR TU JUEGO A OTRO NIVEL
              </h3>
              <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                RESERVA AHORA
              </button>
            </div>
          </div>

          {/* Notice */}
          <div className="mt-8 text-center">
            <p className="text-white text-lg">
              AVISO: Aceptamos clientes sin cita previa, pero está sujeto a disponibilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;