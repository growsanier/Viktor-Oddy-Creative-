import { Button } from './Button';

export function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up" style={{ animationDelay: '1s' }}>
      <div className="bg-[#0D212C]/90 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-6 shadow-xl border border-white/10">
        <div className="pl-2 select-none flex items-center">
          <img
            src="101655.png"
            alt="Ragon Creations"
            style={{
              width: "80px",
              height: "auto",
            }}
          />
        </div>
        <Button variant="primary" className="py-2 px-6 text-sm">
          Start a chat
        </Button>
      </div>
    </div>
  );
}
