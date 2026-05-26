import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

export function Footer() {
  return (
    <footer className="w-full max-w-[1200px] mx-auto px-6 py-12 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <Button variant="primary">Start a chat</Button>
        
        <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h5 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F6FCFF]/40">
              Studio <ArrowUpRight className="w-3 h-3" />
            </h5>
            <div className="flex flex-col gap-2">
              <a href="#services" className="text-base text-slate-300 hover:text-white transition-colors">Services</a>
              <a href="#projects" className="text-base text-slate-300 hover:text-white transition-colors">Work</a>
              <a href="#about" className="text-base text-slate-300 hover:text-white transition-colors">About</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h5 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F6FCFF]/40">
              Connect <ArrowUpRight className="w-3 h-3" />
            </h5>
            <div className="flex flex-col gap-2">
              <a href="mailto:growsanier@gmail.com" className="text-base text-slate-300 hover:text-white transition-colors">growsanier@gmail.com</a>
              <a href="tel:+919931374942" className="text-base text-slate-300 hover:text-white transition-colors">+91 99313 74942</a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-base text-slate-300 hover:text-white transition-colors">x.com</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-base text-slate-300 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
