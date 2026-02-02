import { useEffect, useRef, useState } from 'react';
import { 
  MessageCircle, 
  FileSpreadsheet, 
  Lightbulb, 
  Users, 
  Zap, 
  Clock 
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export default function Skills() {
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

  const skills: Skill[] = [
    {
      name: "Communication & Interpersonal Skills",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Excellent verbal communication with ability to build rapport"
    },
    {
      name: "MS Excel, MS Word, Data Entry",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      description: "Proficient in Microsoft Office suite and data management"
    },
    {
      name: "Problem-Solving & Adaptability",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Quick thinking and flexible approach to challenges"
    },
    {
      name: "Teamwork & Collaboration",
      icon: <Users className="w-6 h-6" />,
      description: "Effective team player with collaborative mindset"
    },
    {
      name: "Adaptability & Quick Learning",
      icon: <Zap className="w-6 h-6" />,
      description: "Fast learner who adapts to new environments quickly"
    },
    {
      name: "Time Management",
      icon: <Clock className="w-6 h-6" />,
      description: "Efficient prioritization and deadline management"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className="relative bg-coffee py-24 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-cream rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-cream rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-cream rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-terracotta" />
            <span className="font-body text-terracotta text-sm font-medium uppercase tracking-wider">
              Skills
            </span>
            <div className="w-12 h-[2px] bg-terracotta" />
          </div>
          <h2 className="font-heading text-cream text-3xl sm:text-4xl lg:text-5xl font-normal">
            What I Bring
          </h2>
          <p className="font-body text-cream/60 mt-4 max-w-2xl mx-auto">
            A diverse set of skills honed through professional experience and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl p-6 hover:bg-cream/10 hover:border-terracotta/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-terracotta/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-terracotta/30 group-hover:scale-110 transition-all duration-300">
                <div className="text-terracotta">
                  {skill.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-cream text-lg font-normal mb-2">
                {skill.name}
              </h3>
              <p className="font-body text-cream/50 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: "6", label: "Months Experience" },
            { value: "6", label: "Core Skills" },
            { value: "100%", label: "Commitment" },
            { value: "∞", label: "Growth Mindset" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-heading text-terracotta text-3xl md:text-4xl font-normal">
                {stat.value}
              </p>
              <p className="font-body text-cream/50 text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
