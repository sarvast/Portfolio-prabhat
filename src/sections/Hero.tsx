import { useEffect, useRef } from 'react';
import { ArrowDown, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const parallaxSpeed = 0.3;
        heroRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-coffee overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        ref={heroRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img 
          src="/hero-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee/60 via-coffee/40 to-coffee" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-16 xl:px-24"
      >
        <div className="max-w-5xl">
          {/* Name */}
          <h1 className="font-heading text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-none animate-fade-in-up">
            Prabhat
            <span className="block text-terracotta mt-2">Sharma</span>
          </h1>

          {/* Title */}
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <p className="font-body text-amber text-lg sm:text-xl md:text-2xl font-light tracking-wide">
              Business Development Associate
            </p>
          </div>

          {/* Tagline */}
          <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <p className="font-body text-cream/80 text-base sm:text-lg max-w-xl leading-relaxed">
              Building relationships, driving growth, creating success through effective communication and strategic thinking.
            </p>
          </div>

          {/* Contact Info */}
          <div 
            className="mt-8 flex flex-wrap gap-6 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            <a 
              href="mailto:ps95590128@gmail.com"
              className="flex items-center gap-2 text-cream/70 hover:text-terracotta transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="font-body text-sm">ps95590128@gmail.com</span>
            </a>
            <a 
              href="tel:8081848253"
              className="flex items-center gap-2 text-cream/70 hover:text-terracotta transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-body text-sm">8081848253</span>
            </a>
          </div>

          {/* CTA Button */}
          <div 
            className="mt-12 animate-fade-in-up"
            style={{ animationDelay: '500ms' }}
          >
            <button
              onClick={scrollToExperience}
              className="group inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta/90 text-cream font-body font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-layered-deep hover:-translate-y-1"
            >
              <span>View My Experience</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="w-32 h-32 border border-amber/20 rounded-full animate-float" />
          <div className="w-24 h-24 border border-terracotta/30 rounded-full absolute -top-8 -left-8 animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Bottom Gradient for Layered Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-20" />
    </section>
  );
}
