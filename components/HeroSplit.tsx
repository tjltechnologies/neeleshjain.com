'use client';

import { useEffect, useRef } from 'react';

const DESIGNER_URL =
  'https://ykrvuddurbtsyrdmmxlx.supabase.co/storage/v1/object/sign/website/hero%20section/designer.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MGM2ZWE4ZS1mOWZmLTQ2ZjEtOTVlNC0wZTJmMDJlYjgwODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL2hlcm8gc2VjdGlvbi9kZXNpZ25lci5wbmciLCJpYXQiOjE3NzUxNDgzNzMsImV4cCI6MTgwNjY4NDM3M30.bpa61wbmJicm-QEGz59sf9L6zQkQfpVR68T01iq23PQ';

const CODER_URL =
  'https://ykrvuddurbtsyrdmmxlx.supabase.co/storage/v1/object/sign/website/hero%20section/coder.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MGM2ZWE4ZS1mOWZmLTQ2ZjEtOTVlNC0wZTJmMDJlYjgwODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL2hlcm8gc2VjdGlvbi9jb2Rlci5wbmciLCJpYXQiOjE3NzUxNDgzMzMsImV4cCI6NDkyODc0ODMzM30.Fk9Pg1OuC9pgA-uKEaqmSqsBKjyC7Uh7KG1tbpuvb3w';

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function HeroSplit() {
  const animRef      = useRef<number>(0);
  const splitRef     = useRef(0);
  const targetRef    = useRef(0);
  const inHeroRef    = useRef(false);
  const parallaxRef  = useRef(0);
  const heroRef      = useRef<HTMLElement>(null);
  const heroWidthRef = useRef(0); // cached hero width, updated on resize

  // Custom cursor
  const dotRef  = useRef<HTMLDivElement>(null);
  const curX    = useRef(0);
  const curY    = useRef(0);
  const dotX    = useRef(0);
  const dotY    = useRef(0);

  useEffect(() => {
    // Use hero width (constrained by max-width) not window width
    const w = heroRef.current?.getBoundingClientRect().width ?? window.innerWidth;
    heroWidthRef.current  = w;
    splitRef.current      = w / 2;
    targetRef.current     = w / 2;

    const root = document.documentElement;
    root.style.setProperty('--split', (w / 2) + 'px');

    function loop() {
      const hw = heroWidthRef.current;

      // ── Split ────────────────────────────────────────
      const dest = inHeroRef.current ? targetRef.current : hw / 2;
      const ease = inHeroRef.current ? 0.08 : 0.05;
      splitRef.current = lerp(splitRef.current, dest, ease);
      root.style.setProperty('--split', splitRef.current.toFixed(2) + 'px');

      // ── Parallax: image drifts opposite to the mouse ──
      const targetParallax = inHeroRef.current
        ? (0.5 - targetRef.current / hw) * 32
        : 0;
      parallaxRef.current = lerp(parallaxRef.current, targetParallax, 0.06);
      root.style.setProperty('--parallax', parallaxRef.current.toFixed(2) + 'px');

      // ── Cursor dot ────────────────────────────────────
      if (dotRef.current) {
        dotX.current = lerp(dotX.current, curX.current, 0.18);
        dotY.current = lerp(dotY.current, curY.current, 0.18);
        dotRef.current.style.transform = `translate(calc(${dotX.current}px - 50%), calc(${dotY.current}px - 50%))`;
        if (curX.current > splitRef.current) {
          dotRef.current.classList.add('on-light');
        } else {
          dotRef.current.classList.remove('on-light');
        }
      }

      animRef.current = requestAnimationFrame(loop);
    }

    animRef.current = requestAnimationFrame(loop);

    const onResize = () => {
      const newW = heroRef.current?.getBoundingClientRect().width ?? window.innerWidth;
      heroWidthRef.current = newW;
      if (!inHeroRef.current) {
        targetRef.current = newW / 2;
      }
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // Track position relative to the hero element, not the viewport,
    // so the split is correct when the hero has max-width < viewport.
    const rect = e.currentTarget.getBoundingClientRect();
    const relX  = e.clientX - rect.left;
    inHeroRef.current = true;
    targetRef.current = relX;
    curX.current = e.clientX; // viewport coords — for the cursor dot
    curY.current = e.clientY;
    if (dotRef.current) dotRef.current.style.opacity = '1';
  };

  const onMouseLeave = () => {
    inHeroRef.current = false;
    if (dotRef.current) dotRef.current.style.opacity = '0';
  };

  return (
    <>
      <section
        ref={heroRef}
        className="hero"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        aria-label="Hero — designer and coder"
      >
        {/* ── Designer panel (dark, left) ──────────────── */}
        <div className="hero-panel panel-designer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={DESIGNER_URL}
            alt=""
            className="hero-img"
            draggable={false}
            aria-hidden="true"
          />
          <div className="hero-copy designer-copy">
            <h1>designer</h1>
            <p>Product designer specialising in UI&nbsp;design and design systems.</p>
          </div>
        </div>

        {/* ── Coder panel (light, right) ──────────────── */}
        <div className="hero-panel panel-coder">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CODER_URL}
            alt=""
            className="hero-img"
            draggable={false}
            aria-hidden="true"
          />
          <div className="hero-copy coder-copy">
            <h1>&lt;coder&gt;</h1>
            <p>Full stack developer who writes clean, elegant and efficient code.</p>
          </div>
          <div className="code-bg" aria-hidden="true">
            <span>&lt;html&gt;</span>
            <span>height: 184px;</span>
            <span>.class=&quot;jedi&quot;&gt;</span>
            <span>CSS3 &nbsp; HTML5</span>
            <span>color: #000;</span>
            <span>jQuery</span>
          </div>
        </div>

        {/* Vertical split line */}
        <div className="hero-divider" aria-hidden="true" />

        {/* Scroll cue */}
        <div className="scroll-cue" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.5 7l5.5 5.5L14.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* Custom cursor — fixed, so it must live outside the section */}
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
        style={{ opacity: 0 }}
      />
    </>
  );
}
