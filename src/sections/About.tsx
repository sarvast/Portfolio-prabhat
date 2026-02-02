import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function About() {
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

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative bg-cream py-24 lg:py-32 section-overlap rounded-t-3xl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-terracotta" />
              <span className="font-body text-terracotta text-sm font-medium uppercase tracking-wider">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-coffee text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-8">
              My Objective
            </h2>

            {/* Objective Statement */}
            <blockquote className="relative">
              <span className="absolute -top-4 -left-2 text-terracotta text-6xl font-heading opacity-30">"</span>
              <p className="font-body text-warmgray text-lg leading-relaxed pl-6">
                Ambitious and self-motivated professional seeking a Business Development Associate position where I can utilize my communication, relationship-building, and problem-solving skills to generate leads, support sales growth, and contribute to the organization's long-term success.
              </p>
            </blockquote>

            {/* Contact Details */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-terracotta" />
                </div>
                <div>
                  <p className="font-body text-sm text-warmgray">Location</p>
                  <p className="font-body text-coffee">Kanpur, Uttar Pradesh</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-terracotta" />
                </div>
                <div>
                  <p className="font-body text-sm text-warmgray">Email</p>
                  <a href="mailto:ps95590128@gmail.com" className="font-body text-coffee hover:text-terracotta transition-colors">
                    ps95590128@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-terracotta" />
                </div>
                <div>
                  <p className="font-body text-sm text-warmgray">Phone</p>
                  <a href="tel:8081848253" className="font-body text-coffee hover:text-terracotta transition-colors">
                    8081848253
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Abstract Image */}
          <div 
            className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-layered-deep">
                <img 
                  src="/profile-abstract.jpg" 
                  alt="Abstract professional portrait" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/20 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-terracotta/10 rounded-full -z-10" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-sage/15 rounded-full -z-10" />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-8 bg-offwhite shadow-layered rounded-xl px-6 py-4 animate-float">
                <p className="font-heading text-coffee text-2xl">6</p>
                <p className="font-body text-warmgray text-sm">Months Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
