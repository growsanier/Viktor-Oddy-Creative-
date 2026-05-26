import { useInViewAnimation } from '../hooks/useInViewAnimation';

const PROJECTS = [
  {
    id: 'evr',
    name: 'evr',
    description: 'From idea to millions raised for a web3 AI product',
    image: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif'
  },
  {
    id: 'automation',
    name: 'Automation Machines',
    description: 'Streamlining industrial automation processes',
    image: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif'
  },
  {
    id: 'xportfolio',
    name: 'xPortfolio',
    description: 'Modern portfolio management platform',
    image: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col gap-24 md:gap-32 scroll-mt-20">
      {PROJECTS.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </section>
  );
}

function ProjectItem({ project }: { 
  key?: string;
  project: { 
    id: string; 
    name: string; 
    description: string; 
    image: string; 
  } 
}) {
  const { ref, isInView } = useInViewAnimation(0.2);

  return (
    <div ref={ref} className="group">
      <div 
        className={`ml-10 md:ml-28 mb-12 transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      >
        <h4 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-2">
          {project.name}
        </h4>
        <p className="text-sm md:text-base text-slate-300">
          {project.description}
        </p>
      </div>
      
      <div 
        className={`w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-1000 delay-200 ${isInView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}
      >
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
