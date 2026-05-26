import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function Header() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <header 
      ref={ref} 
      className={`w-full max-w-[1200px] mx-auto px-6 py-8 flex items-center justify-between transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
    >
      <div className="flex items-center gap-2">
        <img
          src="101655.png"
          alt="Ragon Creations"
          style={{
            width: "80px",
            height: "auto",
          }}
        />
      </div>
      
      <nav className="flex items-center gap-6 md:gap-10 text-sm font-mono text-slate-300">
        <a href="#services" className="hover:text-white hover:opacity-100 transition-colors">Services</a>
        <a href="#projects" className="hover:text-white hover:opacity-100 transition-colors">Work</a>
        <a href="#about" className="hover:text-white hover:opacity-100 transition-colors">About</a>
      </nav>
    </header>
  );
}
