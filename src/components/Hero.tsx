import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

export function Hero() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="about" ref={ref} className="flex flex-col items-center justify-center pt-12 md:pt-16 pb-12 px-6 scroll-mt-20">
      <div className="max-w-[440px] w-full text-center sm:text-left flex flex-col items-center sm:items-start transition-all duration-300">
        <div 
          className={`mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.05s' }}
        >
          <img
            src="101655.png"
            alt="Ragon Creations"
            style={{
              width: "80px",
              height: "auto",
            }}
          />
        </div>

        <h1 
          className={`font-serif text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-white tracking-tight mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          Ragon Creations
        </h1>
        
        <p 
          className={`font-mono text-xs md:text-sm text-slate-400 mb-2 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          Vibe Coder & Digital Creator
        </p>

        <h2 
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-slate-100 tracking-tight whitespace-nowrap mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          Build the next <span className="font-serif text-white">wave</span>,<br />
          the <span className="font-serif text-white">bold way.</span>
        </h2>

        <div 
          className={`flex flex-col gap-6 text-sm md:text-base text-slate-300 leading-relaxed ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <p>
            I'm Vikas, a vibe coder who believes true design 
            transcends just pixels on a screen. Every project is 
            an opportunity to push creative boundaries and build 
            digital environments that truly connect.
          </p>
          <p>
            The studio is deliberately small. I guide the creative vision on every project, 
            backed by a veteran design crew that moves fast without cutting corners.
          </p>
          <p className="font-semibold text-white">
            Projects start at $5,000 per month.
          </p>
        </div>

        <div 
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 w-full sm:w-auto ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }}
        >
          <Button variant="primary" className="w-full sm:w-auto">Start a chat</Button>
          <Button variant="secondary" className="w-full sm:w-auto border-none shadow-none bg-transparent hover:text-white text-slate-300">View projects</Button>
        </div>
      </div>
    </section>
  );
}
