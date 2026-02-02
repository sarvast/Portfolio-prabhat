import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
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

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ps95590128@gmail.com",
      href: "mailto:ps95590128@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "8081848253",
      href: "tel:8081848253"
    },
    {
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />, 
      label: "WhatsApp",
      value: "8081848253",
      href: "https://wa.me/918081848253"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "Kanpur Nagar",
      href: null
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="relative bg-coffee py-24 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 border border-cream rounded-full" />
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-cream rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Main CTA */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-cream text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
            Let's Connect
          </h2>
          <p className="font-body text-cream/60 text-lg max-w-xl mx-auto">
            I'm always open to discussing new opportunities and meaningful conversations
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {contactInfo.map((item, index) => (
            <div
              key={item.label}
              className={`group ${item.href ? 'cursor-pointer' : ''} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {item.href ? (
                <a 
                  href={item.href}
                  className="block bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl p-6 hover:bg-cream/10 hover:border-terracotta/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-terracotta/20 rounded-lg flex items-center justify-center">
                      <div className="text-terracotta">
                        {item.icon}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-cream/30 group-hover:text-terracotta group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <p className="font-body text-cream/50 text-sm mb-1">{item.label}</p>
                  <p className="font-body text-cream group-hover:text-terracotta transition-colors duration-300">
                    {item.value}
                  </p>
                </a>
              ) : (
                <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl p-6">
                  <div className="w-10 h-10 bg-sage/20 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-sage">
                      {item.icon}
                    </div>
                  </div>
                  <p className="font-body text-cream/50 text-sm mb-1">{item.label}</p>
                  <p className="font-body text-cream/80 text-sm">
                    {item.value}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`border-t border-cream/10 pt-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-heading text-cream text-xl">Prabhat Sharma</p>
              <p className="font-body text-cream/50 text-sm">Business Development Associate</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="mailto:ps95590128@gmail.com"
                className="font-body text-cream/50 hover:text-terracotta text-sm transition-colors duration-300"
              >
                Email
              </a>
              <a 
                href="tel:8081848253"
                className="font-body text-cream/50 hover:text-terracotta text-sm transition-colors duration-300"
              >
                Phone
              </a>
            </div>

            <p className="font-body text-cream/30 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
