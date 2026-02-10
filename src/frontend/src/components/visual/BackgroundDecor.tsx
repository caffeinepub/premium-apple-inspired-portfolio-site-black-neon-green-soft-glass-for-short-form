export function BackgroundDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating bubbles */}
      <div
        className="absolute top-20 right-10 w-64 h-64 opacity-20 animate-float"
        style={{
          backgroundImage: 'url(/assets/generated/bubble-overlays-transparent.dim_1024x1024.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          animationDelay: '0s'
        }}
      />
      <div
        className="absolute bottom-40 left-10 w-48 h-48 opacity-15 animate-float"
        style={{
          backgroundImage: 'url(/assets/generated/bubble-overlays-transparent.dim_1024x1024.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          animationDelay: '2s'
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-32 h-32 opacity-10 animate-float"
        style={{
          backgroundImage: 'url(/assets/generated/bubble-overlays-transparent.dim_1024x1024.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          animationDelay: '4s'
        }}
      />
    </div>
  );
}
