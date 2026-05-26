import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function QuoteSection() {
  const { ref: sectionRef, isInView } = useInViewAnimation();
  const imageRef = useRef<HTMLImageElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (imageRef.current) {
        const top = imageRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        // Calculate relative position to viewport
        const relativePos = (top / windowHeight) - 0.5;
        const parallaxOffset = Math.max(-200, Math.min(200, relativePos * 200));
        setOffset(parallaxOffset);
      }
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    animationFrameId = requestAnimationFrame(handleScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-6 flex flex-col items-center max-w-2xl mx-auto text-center">
      <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
        <Quote className="w-8 h-8 text-white mx-auto mb-8" />
      </div>

      <h3 
        className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-white tracking-tight mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        I left <span className="font-serif text-slate-200">Apple</span> to build the studio I always wanted to work with
      </h3>

      <p 
        className={`italic text-sm text-slate-400 mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.3s' }}
      >
        Vikas
      </p>

      <div 
        className={`flex items-center justify-center gap-12 mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.4s' }}
      >
        <span className="text-2xl font-medium text-slate-200 w-[80px]">Apple</span>
        <span className="text-2xl font-medium text-slate-200 w-[83px]">IDEO</span>
        <span className="text-2xl font-medium text-slate-200 w-[110px]">Polygon</span>
      </div>

      <div 
        className={`w-full max-w-xs overflow-hidden rounded-2xl shadow-lg relative ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.5s' }}
      >
        <img 
          ref={imageRef}
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85"
          alt="Chris Halaska"
          className="w-full object-cover scale-110"
          style={{ transform: `translateY(${offset}px)` }}
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
