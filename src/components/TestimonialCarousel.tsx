import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const TESTIMONIALS = [
  {
    name: "Marcus Anderson",
    role: "CEO, Data.storage",
    quote: "With very little guidance team delivered designs that were consistently spot on. Their ability to translate vague ideas into elegant products is unmatched.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "alexwu",
    role: "Founder, Nexgate",
    quote: "Vikas led the creation of our best fundraising deck to date! The strategic thinking behind the visuals helped us close our Series A ahead of schedule.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "James Mitchell",
    role: "VP Product, LaunchPad",
    quote: "Working with Vikas transformed our product vision. The attention to detail and design systems they built have scaled with us perfectly.",
    avatar: "https://images.pexels.com/photos/7a5bb14/pexels-photo-7a5bb14.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Rachel Foster",
    role: "Co-founder, Nexus Labs",
    quote: "The design quality exceeded our expectations. They move incredibly fast without losing any of the polish we expect for a premium brand.",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "David Zhang",
    role: "Head of Design, Paradigm Labs",
    quote: "Incredible work from start to finish. Vikas is one of the few designers who actually understands the intersection of brand and product.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export function TestimonialCarousel() {
  const { ref: headerRef, isInView: headerInView } = useInViewAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselData = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const totalCount = TESTIMONIALS.length;
  
  // Starting index should be in the middle set for infinite effect
  useEffect(() => {
    setCurrentIndex(totalCount);
  }, [totalCount]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Wrap around logic
  useEffect(() => {
    if (currentIndex >= totalCount * 2) {
      setTimeout(() => {
        setCurrentIndex(totalCount);
      }, 800); // Wait for transition
    } else if (currentIndex < totalCount) {
      setTimeout(() => {
        setCurrentIndex(totalCount * 2 - 1);
      }, 800);
    }
  }, [currentIndex, totalCount]);

  const getTransform = () => {
    const cardWidth = window.innerWidth < 768 ? window.innerWidth - 48 : 427.5;
    const gap = 24;
    return `translateX(-${currentIndex * (cardWidth + gap)}px)`;
  };

  return (
    <section className="py-20 w-full overflow-hidden bg-transparent">
      {/* Header */}
      <div 
        ref={headerRef}
        className={`max-w-4xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:ml-auto md:mr-0 ${headerInView ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <h3 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-white tracking-tight">
          What <span className="font-serif text-white">builders</span> say
        </h3>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-white text-white" />
            ))}
          </div>
          <span className="text-sm font-semibold text-slate-300">Clutch 5/5</span>
        </div>
      </div>

      {/* Carousel */}
      <div 
        className="relative group px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex gap-6 transition-transform duration-800"
          style={{ 
            transform: getTransform(),
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {carouselData.map((t, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-[calc(100vw-48px)] md:w-[427.5px] bg-[#0D212C]/60 backdrop-blur-sm border border-white/5 rounded-[32px] md:rounded-[40px] shadow-lg px-6 md:pl-10 md:pr-10 py-10 flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 opacity-20 text-white">
                  <path d="M0 24V11.2C0 7.8 0.8 5.1 2.4 3.1C4 1.1 6.5 0.1 9.9 0.1V5.7C8.1 5.7 6.9 6.2 6.3 7.2C5.7 8.2 5.4 9.4 5.4 10.8V11.5H9.9V24H0ZM17.1 24V11.2C17.1 7.8 17.9 5.1 19.5 3.1C21.1 1.1 23.6 0.1 27 0.1V5.7C25.2 5.7 24 6.2 23.4 7.2C22.8 8.2 22.5 9.4 22.5 10.8V11.5H27V24H17.1Z" fill="currentColor"/>
                </svg>
                <p className="text-base text-slate-100 leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                <div>
                  <h5 className="font-semibold text-sm text-white">{t.name}</h5>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 bg-[#0D212C]/85 backdrop-blur-sm flex items-center justify-center pointer-events-auto hover:bg-[#0D212C] transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 bg-[#0D212C]/85 backdrop-blur-sm flex items-center justify-center pointer-events-auto hover:bg-[#0D212C] transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
