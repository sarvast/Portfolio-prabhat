import { useEffect, useRef, useState } from 'react';
import { Calendar, Building2, CheckCircle2 } from 'lucide-react';

export default function Experience() {
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

// Remove duplicate imports if any, but I'll stick to editing the component body
// Actually, I'll just edit the parts inside the component.

  const responsibilities = [
    "Interacted directly with customers to confirm their orders",
    "Explained product details during calls",
    "Resolved customer queries effectively",
    "Ensured successful order confirmation",
    "Maintained a professional and polite tone"
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience"
      className="relative bg-offwhite py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-terracotta" />
            <span className="font-body text-terracotta text-sm font-medium uppercase tracking-wider">
              Experience
            </span>
            <div className="w-12 h-[2px] bg-terracotta" />
          </div>
          <h2 className="font-heading text-coffee text-3xl sm:text-4xl lg:text-5xl font-normal">
            Work History
          </h2>
        </div>

        {/* Experience Card */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-terracotta via-amber to-transparent" />

            {/* Experience Item */}
            <div className="relative pl-8 md:pl-20 pb-8">
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-[27px] top-2 w-3 h-3 bg-terracotta rounded-full border-4 border-offwhite shadow-md" />

              {/* Card */}
              <div className="bg-cream rounded-2xl p-8 shadow-layered hover:shadow-layered-deep transition-all duration-300 hover:-translate-y-1">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-terracotta" />
                      <span className="font-body text-terracotta text-sm font-medium">
                        Cursor Solution Pvt Ltd
                      </span>
                    </div>
                    <h3 className="font-heading text-coffee text-2xl md:text-3xl font-normal">
                      Sales Officer
                    </h3>
                  </div>

                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="font-body text-sm font-medium">
                      10 July - 20 December
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-warmgray leading-relaxed mb-6">
                  I was sales Officer in this company, I interacted directly with customers to confirm their orders. 
                  During the call, I explained the product details. I also resolved customer queries and ensured 
                  the order was confirmed successfully while maintaining a professional and polite tone throughout the call.
                </p>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h4 className="font-body text-coffee text-sm font-medium uppercase tracking-wider mb-4">
                    Key Responsibilities
                  </h4>
                  {responsibilities.map((item, index) => (
                    <div 
                      key={index}
                      className={`flex items-start gap-3 transition-all duration-500`}
                      style={{ 
                        transitionDelay: `${300 + index * 100}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)'
                      }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="font-body text-warmgray text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
