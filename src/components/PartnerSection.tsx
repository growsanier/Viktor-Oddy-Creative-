import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';

const THUMBNAILS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
];

interface Particle {
  id: number;
  x: number;
  y: number;
  src: string;
  rotation: number;
}

export function PartnerSection() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnTime = useRef(0);
  const idCounter = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastSpawnTime.current < 80) return; // Minimum spawn interval
    
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newParticle: Particle = {
        id: idCounter.current++,
        x,
        y,
        src: THUMBNAILS[Math.floor(Math.random() * THUMBNAILS.length)],
        rotation: Math.random() * 20 - 10,
      };

      setParticles(prev => [...prev, newParticle]);
      lastSpawnTime.current = now;

      // Filter out old particles after 1s
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 1000);
    }
  };

  return (
    <section className="py-12 px-6 w-full flex justify-center">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="max-w-7xl w-full py-48 bg-[#0D212C] border border-white/10 rounded-[40px] shadow-sm relative overflow-hidden flex flex-col items-center justify-center cursor-none group"
      >
        {/* Particles */}
        {particles.map(p => (
          <div 
            key={p.id}
            className="absolute pointer-events-none transition-all duration-1000 ease-out opacity-0 scale-50"
            style={{ 
              left: p.x, 
              top: p.y, 
              transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
              animation: 'spawnFadeOut 1s forwards'
            }}
          >
            <img 
              src={p.src} 
              alt="" 
              className="w-32 md:w-48 h-auto rounded-xl shadow-2xl" 
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        <style>
          {`
            @keyframes spawnFadeOut {
              0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
              20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
              100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            }
          `}
        </style>

        <h3 className="font-serif text-[48px] md:text-[64px] lg:text-[80px] leading-tight text-white mb-12 text-center max-w-2xl px-6 relative z-10 select-none">
          Partner with us
        </h3>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <Button variant="primary" className="gap-3 py-4 pr-8 pl-4 group/btn">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" 
              alt="Vikas"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span>Start chat with Vikas</span>
          </Button>
          
          <div className="md:hidden text-xs text-slate-400 font-mono">
            Hover to see work
          </div>
        </div>
      </div>
    </section>
  );
}
