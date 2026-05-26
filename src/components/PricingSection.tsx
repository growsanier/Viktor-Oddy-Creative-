import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

export function PricingSection() {
  const { ref, isInView } = useInViewAnimation();

  const handleLink = () => {
    window.location.href = "https://halaskastudio.com/./book";
  };

  return (
    <section ref={ref} className="py-12 px-6 w-full flex justify-center md:justify-end">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Card 1: Dark */}
        <div 
          className={`bg-primary-dark rounded-[40px] pl-10 pr-10 md:pr-24 pt-10 pb-10 shadow-inner flex flex-col justify-between min-h-[400px] ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <div>
            <h4 className="text-[22px] font-medium text-light-text mb-4">Monthly Partnership</h4>
            <p className="text-[#E0EBF0] mb-8 leading-relaxed">
              A dedicated creative design team. /<br /> You work directly with Vikas.
            </p>
          </div>
          <div>
            <div className="mb-8">
              <span className="text-3xl font-semibold text-light-text">$5,000</span>
              <span className="block text-sm text-[#E0EBF0] mt-1">Monthly</span>
            </div>
            <div className="flex flex-col gap-3">
              <Button onClick={handleLink} variant="primary" className="bg-white text-primary-dark shadow-none hover:bg-[#F6FCFF]">
                Start a chat
              </Button>
              <Button onClick={handleLink} variant="secondary" className="bg-transparent text-light-text border border-white/20 shadow-none hover:bg-white/10">
                How it works
              </Button>
            </div>
          </div>
        </div>

        {/* Card 2: Darkened */}
        <div 
          className={`bg-[#0D212C] border border-white/10 rounded-[40px] pl-10 pr-10 md:pr-24 pt-10 pb-10 shadow-lg flex flex-col justify-between min-h-[400px] ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div>
            <h4 className="text-[22px] font-medium text-white mb-4">Custom Project</h4>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Fixed scope, fixed timeline. /<br /> Same team, same standards.
            </p>
          </div>
          <div>
            <div className="mb-8">
              <span className="text-3xl font-semibold text-white">$5,000</span>
              <span className="block text-sm text-slate-400 mt-1">Minimum</span>
            </div>
            <Button onClick={handleLink} variant="tertiary" className="w-full bg-white text-[#030D12] hover:bg-slate-100">
              Start a chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
