import { useEffect, useRef, useState } from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  icon: React.ReactNode;
  status?: string;
}

export default function Education() {
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

  const education: EducationItem[] = [
    {
      institution: "S.J. Mahavidyalaya",
      degree: "Bachelor of Arts (B.A.)",
      duration: "2024 - 2027",
      icon: <GraduationCap className="w-5 h-5" />,
      status: "2nd Year Pursuing"
    },
    {
      institution: "Paritosh Inter College",
      degree: "Intermediate (12th)",
      duration: "2023 - 2024",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      institution: "Paritosh Inter College",
      degree: "High School (10th)",
      duration: "2021 - 2022",
      icon: <School className="w-5 h-5" />
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="education"
      className="relative bg-cream py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-terracotta" />
            <span className="font-body text-terracotta text-sm font-medium uppercase tracking-wider">
              Education
            </span>
            <div className="w-12 h-[2px] bg-terracotta" />
          </div>
          <h2 className="font-heading text-coffee text-3xl sm:text-4xl lg:text-5xl font-normal">
            Academic Background
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sage via-amber to-terracotta" />

            {/* Education Items */}
            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`relative pl-16 md:pl-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-2 md:left-4 top-2 w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center border-4 border-cream">
                    <div className="text-sage">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-offwhite rounded-xl p-6 shadow-layered hover:shadow-layered-deep transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-heading text-coffee text-xl font-normal">
                        {item.institution}
                      </h3>
                      <span className="font-body text-amber text-sm font-medium">
                        {item.duration}
                      </span>
                    </div>
                    
                    <p className="font-body text-warmgray">
                      {item.degree}
                    </p>

                    {item.status && (
                      <div className="mt-3 inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-terracotta rounded-full animate-pulse" />
                        <span className="font-body text-xs font-medium">{item.status}</span>
                      </div>
                    )}
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
