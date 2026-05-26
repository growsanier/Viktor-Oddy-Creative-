const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
];

export function Marquee() {
  const duplicatedImages = [...IMAGES, ...IMAGES];

  return (
    <div className="w-full overflow-hidden mt-16 md:mt-20 mb-16 select-none bg-transparent py-4">
      <div className="flex w-max animate-marquee">
        {duplicatedImages.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 mx-3">
            <img 
              src={src} 
              alt={`Work sample ${idx + 1}`}
              className="h-[280px] md:h-[500px] w-auto object-cover rounded-2xl shadow-lg pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
