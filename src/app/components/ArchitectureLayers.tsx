export function ArchitectureLayers() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Distributed network visualization - multiple layers */}
      
      {/* Layer 1: Bottom distributed nodes grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(0, 188, 212, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            backgroundPosition: '0 0',
          }}
        />
      </div>

      {/* Layer 2: Perspective grid (infrastructure layer) */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(14, 165, 233, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14, 165, 233, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: 'perspective(1000px) rotateX(60deg) translateZ(-300px)',
            transformOrigin: 'center bottom',
          }}
        />
      </div>

      {/* Layer 3: Radial gradient (cluster zones) */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse 800px 600px at 20% 50%, rgba(0, 188, 212, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 600px 800px at 80% 30%, rgba(14, 165, 233, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 700px 500px at 50% 80%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Layer 4: Circuit board patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path
              d="M50 0 L50 50 L100 50 M150 50 L150 100 L100 100 M50 150 L50 200 M100 150 L150 150"
              stroke="rgba(0, 188, 212, 0.3)"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="50" cy="50" r="3" fill="rgba(0, 229, 255, 0.5)" />
            <circle cx="100" cy="50" r="2" fill="rgba(0, 229, 255, 0.4)" />
            <circle cx="150" cy="50" r="3" fill="rgba(14, 165, 233, 0.5)" />
            <circle cx="100" cy="100" r="2" fill="rgba(34, 211, 238, 0.4)" />
            <circle cx="150" cy="150" r="3" fill="rgba(0, 188, 212, 0.5)" />
            <rect x="48" y="148" width="4" height="4" fill="rgba(14, 165, 233, 0.4)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Layer 5: Floating connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 188, 212, 0)" />
            <stop offset="50%" stopColor="rgba(0, 188, 212, 0.6)" />
            <stop offset="100%" stopColor="rgba(0, 188, 212, 0)" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0)" />
            <stop offset="50%" stopColor="rgba(14, 165, 233, 0.6)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0)" />
          </linearGradient>
        </defs>
        
        {/* Horizontal lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="0" y1="45%" x2="100%" y2="45%" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#lineGradient1)" strokeWidth="1" />
        
        {/* Vertical lines */}
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="url(#lineGradient2)" strokeWidth="1" />
        <line x1="75%" y1="0" x2="75%" y2="100%" stroke="url(#lineGradient2)" strokeWidth="1" />
      </svg>

      {/* Layer 6: Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <div className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
        <div className="absolute top-0 left-0 w-0.5 h-32 bg-gradient-to-b from-cyan-400 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-30">
        <div className="absolute bottom-0 right-0 w-32 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent" />
        <div className="absolute bottom-0 right-0 w-0.5 h-32 bg-gradient-to-t from-cyan-400 to-transparent" />
      </div>
    </div>
  );
}
