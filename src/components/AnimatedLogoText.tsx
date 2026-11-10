'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedLogoText() {
  const containerRef = useRef<HTMLSpanElement>(null);
  const firstIRef = useRef<HTMLSpanElement>(null);
  const secondIRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let isCancelled = false;
    let tl: any = null;
    let resizeTimer: ReturnType<typeof setTimeout>;

    const initAnimation = async () => {
      try {
        const { default: gsap } = await import('gsap');

        if (isCancelled || !firstIRef.current || !secondIRef.current) return;

        const buildTimeline = () => {
          if (!firstIRef.current || !secondIRef.current) return;

          // Ensure elements are at origin before measuring
          gsap.set([firstIRef.current, secondIRef.current], { x: 0, y: 0, scale: 1 });

          const firstRect = firstIRef.current.getBoundingClientRect();
          const secondRect = secondIRef.current.getBoundingClientRect();
          const deltaX = secondRect.left - firstRect.left;

          // If dimensions are not yet available, don't build invalid timeline
          if (deltaX <= 0) return;

          const letterHeight = firstIRef.current.offsetHeight || 24;
          // Proportional vertical arc that stays comfortably within logo container
          const arcY = Math.max(4, Math.min(8, Math.round(letterHeight * 0.28)));
          const duration = 1.15;
          const halfDuration = duration / 2;
          const pauseDuration = 7.5; // Relaxed 7.5s pause

          tl = gsap.timeline({
            repeat: -1,
            repeatDelay: pauseDuration,
            defaults: { ease: 'power2.inOut' },
          });

          // --- PHASE 1: I1 moves to I2 position (arc over), I2 moves to I1 position (arc under) ---
          tl.addLabel('swap1')
            .to(firstIRef.current, {
              x: deltaX,
              duration,
              ease: 'power2.inOut',
              zIndex: 20,
            }, 'swap1')
            .to(secondIRef.current, {
              x: -deltaX,
              duration,
              ease: 'power2.inOut',
              zIndex: 10,
            }, 'swap1')
            .to(firstIRef.current, {
              y: -arcY,
              scale: 1.06,
              duration: halfDuration,
              ease: 'power1.out',
            }, 'swap1')
            .to(firstIRef.current, {
              y: 0,
              scale: 1,
              duration: halfDuration,
              ease: 'power1.in',
            }, `swap1+=${halfDuration}`)
            .to(secondIRef.current, {
              y: arcY,
              scale: 0.96,
              duration: halfDuration,
              ease: 'power1.out',
            }, 'swap1')
            .to(secondIRef.current, {
              y: 0,
              scale: 1,
              duration: halfDuration,
              ease: 'power1.in',
            }, `swap1+=${halfDuration}`)

            // --- REST PERIOD: stay swapped for 7.5 seconds ---
            .to({}, { duration: pauseDuration })

            // --- PHASE 2: Swap back to initial positions ---
            .addLabel('swap2')
            .to(firstIRef.current, {
              x: 0,
              duration,
              ease: 'power2.inOut',
              zIndex: 20,
            }, 'swap2')
            .to(secondIRef.current, {
              x: 0,
              duration,
              ease: 'power2.inOut',
              zIndex: 10,
            }, 'swap2')
            .to(firstIRef.current, {
              y: -arcY,
              scale: 1.06,
              duration: halfDuration,
              ease: 'power1.out',
            }, 'swap2')
            .to(firstIRef.current, {
              y: 0,
              scale: 1,
              duration: halfDuration,
              ease: 'power1.in',
            }, `swap2+=${halfDuration}`)
            .to(secondIRef.current, {
              y: arcY,
              scale: 0.96,
              duration: halfDuration,
              ease: 'power1.out',
            }, 'swap2')
            .to(secondIRef.current, {
              y: 0,
              scale: 1,
              duration: halfDuration,
              ease: 'power1.in',
            }, `swap2+=${halfDuration}`);
        };

        if (typeof document !== 'undefined' && 'fonts' in document) {
          document.fonts.ready.then(() => {
            if (!isCancelled) buildTimeline();
          });
        } else {
          buildTimeline();
        }

        const handleResize = () => {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(() => {
            if (tl) {
              tl.kill();
              tl = null;
            }
            if (!isCancelled) buildTimeline();
          }, 150);
        };

        window.addEventListener('resize', handleResize);
      } catch (err) {
        console.error('Failed to initialize logo animation:', err);
      }
    };

    initAnimation();

    return () => {
      isCancelled = true;
      clearTimeout(resizeTimer);
      if (tl) {
        tl.kill();
      }
    };
  }, []);

  return (
    <span 
      ref={containerRef}
      className="inline-block relative select-none"
      aria-label="HIWI CATERING"
    >
      <span className="inline-block">H</span>
      <span 
        ref={firstIRef} 
        className="inline-block relative will-change-transform"
      >
        I
      </span>
      <span className="inline-block">W</span>
      <span 
        ref={secondIRef} 
        className="inline-block relative will-change-transform"
      >
        I
      </span>
      <span className="inline-block">&nbsp;CATERING</span>
    </span>
  );
}
