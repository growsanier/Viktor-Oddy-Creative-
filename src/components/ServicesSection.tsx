import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function ServicesSection() {
  const { ref, isInView } = useInViewAnimation(0.1);

  const services = [
    {
      num: "01",
      title: "Competitor Research",
      desc: "Analyzing market competitors to identify their strengths, weaknesses, and the brand's unique market position."
    },
    {
      num: "02",
      title: "Unique Concept Ideation",
      desc: "Brainstorming fresh, interactive, and distinctive ideas tailored to make the website stand out."
    },
    {
      num: "03",
      title: "Motion Design",
      desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
    },
    {
      num: "04",
      title: "Branding",
      desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
    },
    {
      num: "05",
      title: "Web Design",
      desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
    }
  ];

  return (
    <section id="services" ref={ref} className="py-24 px-6 max-w-4xl mx-auto scroll-mt-20">
      <h3 className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-white tracking-tight mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
        Our <span className="font-serif text-white">services</span>
      </h3>
      
      <div className={`flex flex-col border-t border-white/10 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        {services.map((s) => (
          <div key={s.num} className="py-8 border-b border-white/10 flex flex-col md:flex-row md:items-start justify-between gap-4 group hover:bg-white/5 transition-all px-4 -mx-4 rounded-xl">
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs text-slate-500">{s.num}</span>
              <h4 className="font-serif text-xl md:text-2xl font-semibold text-white">
                {s.title}
              </h4>
            </div>
            <p className="text-sm md:text-base text-slate-300 max-w-md leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
