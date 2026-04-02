/* ============================================================
   NEELESH JAIN PORTFOLIO — main.js
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────────────────────
   1.  HERO SPLIT  (mouse-driven clip-path via CSS custom prop)
   ────────────────────────────────────────────────────────── */

const hero    = document.getElementById('hero');
const root    = document.documentElement;

let targetSplit  = window.innerWidth / 2;
let currentSplit = window.innerWidth / 2;
let inHero       = false;

/** Linear interpolation */
function lerp(a, b, t) { return a + (b - a) * t; }

/** Initialise the CSS custom property immediately */
root.style.setProperty('--split', currentSplit + 'px');

/**
 * Animation loop — smoothly moves currentSplit toward targetSplit.
 * When the mouse leaves the hero, the split returns to centre.
 */
function splitLoop() {
  const dest = inHero ? targetSplit : window.innerWidth / 2;
  const ease = inHero ? 0.08 : 0.05;

  currentSplit = lerp(currentSplit, dest, ease);

  root.style.setProperty('--split', currentSplit.toFixed(2) + 'px');
  requestAnimationFrame(splitLoop);
}
splitLoop();

/* Track mouse inside hero */
hero.addEventListener('mousemove', (e) => {
  inHero      = true;
  targetSplit = e.clientX;
});

hero.addEventListener('mouseleave', () => {
  inHero = false;
});

/* Reset on viewport resize */
window.addEventListener('resize', () => {
  if (!inHero) {
    targetSplit  = window.innerWidth / 2;
    currentSplit = window.innerWidth / 2;
  }
});


/* ──────────────────────────────────────────────────────────
   2.  CUSTOM CURSOR
   ────────────────────────────────────────────────────────── */

const dot = document.createElement('div');
dot.className = 'cursor-dot';
document.body.appendChild(dot);

let curX = 0, curY = 0;
let dotX = 0, dotY = 0;

document.addEventListener('mousemove', (e) => {
  curX = e.clientX;
  curY = e.clientY;

  /* Swap dot style based on which hero panel it's over */
  if (e.clientX > currentSplit) {
    dot.classList.add('on-light');
  } else {
    dot.classList.remove('on-light');
  }
});

function dotLoop() {
  dotX = lerp(dotX, curX, 0.18);
  dotY = lerp(dotY, curY, 0.18);
  dot.style.transform = `translate(calc(${dotX}px - 50%), calc(${dotY}px - 50%))`;
  requestAnimationFrame(dotLoop);
}
dotLoop();

/* Hide/show custom cursor only while inside hero */
hero.addEventListener('mouseenter', () => { dot.style.opacity = '1'; });
hero.addEventListener('mouseleave', () => { dot.style.opacity = '0'; });
dot.style.opacity = '0'; /* hidden by default until hero is entered */
