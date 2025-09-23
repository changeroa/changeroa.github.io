import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100 to-lavender-50 dark:from-cocoa-900 dark:via-cocoa-800 dark:to-cocoa-900" />
      
      {/* Animated wave layers */}
      <div className="absolute inset-0">
        {/* Wave 1 - Bottom layer */}
        <div 
          className={`absolute inset-0 opacity-50 ${isMobile ? 'animate-wave-slow-mobile' : 'animate-wave-slow'}`}
          style={{
            background: 'linear-gradient(135deg, rgba(253, 236, 212, 0.5) 0%, rgba(230, 126, 91, 0.3) 50%, rgba(159, 137, 189, 0.3) 100%)',
          }}
        />
        
        {/* Wave 2 - Middle layer */}
        <div 
          className={`absolute inset-0 opacity-40 ${isMobile ? 'animate-wave-medium-mobile' : 'animate-wave-medium'}`}
          style={{
            background: 'linear-gradient(90deg, rgba(248, 204, 150, 0.4) 0%, rgba(159, 137, 189, 0.3) 50%, rgba(127, 153, 102, 0.3) 100%)',
          }}
        />
        
        {/* Wave 3 - Top layer */}
        <div 
          className={`absolute inset-0 opacity-30 ${isMobile ? 'animate-wave-fast-mobile' : 'animate-wave-fast'}`}
          style={{
            background: 'linear-gradient(45deg, rgba(253, 236, 212, 0.3) 0%, rgba(230, 126, 91, 0.2) 50%, rgba(127, 153, 102, 0.2) 100%)',
          }}
        />

        {/* Additional shimmer effect for desktop */}
        {!isMobile && (
          <div 
            className="absolute inset-0 opacity-10 animate-shimmer"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.3) 50%, transparent 60%)',
              backgroundSize: '200% 200%',
            }}
          />
        )}
      </div>

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;