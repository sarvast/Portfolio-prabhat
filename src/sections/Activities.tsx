import { useEffect, useRef, useState } from 'react';
import { Gamepad2, PersonStanding, Languages } from 'lucide-react';

export default function Activities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const activities = [
    {
      name: "Chess",
      icon: <Gamepad2 className="w-6 h-6" />,
      description: "Strategic thinking and problem-solving"
    },
    {
      name: "Running",
      icon: <PersonStanding className="w-6 h-6" />,
      description: "Fitness, discipline, and endurance"
    }
  ];

  const languages = [
    { name: "Hindi", level: "Native", proficiency: 100 },
    { name: "English", level: "Professional", proficiency: 80 }
  ];

  return (
    <section 
      ref={sectionRef}
      id="activities"
      className="relative bg-offwhite py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Activities */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-terracotta/10 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-terracotta" />
              </div>
              <h2 className="font-heading text-coffee text-2xl sm:text-3xl font-normal">
                Activities
              </h2>
            </div>

            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={activity.name}
                  className={`flex items-center gap-4 bg-cream rounded-xl p-5 shadow-layered hover:shadow-layered-deep transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-amber/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-amber">
                      {activity.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-coffee text-lg font-normal">
                      {activity.name}
                    </h3>
                    <p className="font-body text-warmgray text-sm">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-sage/20 rounded-lg flex items-center justify-center">
                <Languages className="w-5 h-5 text-sage" />
              </div>
              <h2 className="font-heading text-coffee text-2xl sm:text-3xl font-normal">
                Languages
              </h2>
            </div>

            <div className="space-y-6">
              {languages.map((language, index) => (
                <div
                  key={language.name}
                  className={`bg-cream rounded-xl p-6 shadow-layered ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading text-coffee text-lg font-normal">
                      {language.name}
                    </h3>
                    <span className="font-body text-terracotta text-sm font-medium">
                      {language.level}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-2 bg-lightbeige rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-sage to-amber rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${language.proficiency}%` : '0%',
                        transitionDelay: `${600 + index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
