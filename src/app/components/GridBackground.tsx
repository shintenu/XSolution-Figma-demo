export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Perspective grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 188, 212, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 188, 212, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(1000px) rotateX(60deg) translateZ(-200px)',
          transformOrigin: 'center bottom',
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 188, 212, 0.15) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
