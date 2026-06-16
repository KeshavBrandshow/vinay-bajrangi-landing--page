"use client";

import { useEffect, useCallback } from "react";

export default function CapricornDemo() {
  useEffect(() => {
    // IntersectionObserver code yahan aayega
  }, []);


  const toggleCompat = useCallback((event) => {
    const card = event.currentTarget.closest(".compat-card");
    const isOpen = card.classList.contains("open");

    document
      .querySelectorAll(".compat-card.open")
      .forEach((c) => c.classList.remove("open"));

    if (!isOpen) {
      card.classList.add("open");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = Array.from(
              entry.target.parentElement.children
            ).filter((el) => el.classList.contains("reveal"));

            const idx = siblings.indexOf(entry.target);

            setTimeout(() => {
              entry.target.classList.add("visible");
            }, Math.min(idx * 80, 360));

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));

    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".meter-bar, .score-bar")
              .forEach((bar, i) => {
                const width = bar.style.width || "100%";

                setTimeout(() => {
                  bar.style.width = width;
                  bar.classList.add("animate");
                }, i * 110);
              });

            barObs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    document
      .querySelectorAll(".compat-meter-card, .score-grid")
      .forEach((el) => barObs.observe(el));

    return () => {
      observer.disconnect();
      barObs.disconnect();
    };
  }, []);

  return (
    <>
      {/* Body ka HTML yahan aayega */}

      <style jsx global>{`
        :root {
          --saffron: #E8821A;
          --saffron-deep: #C4600A;
          --saffron-light: #F5A84E;
          --gold: #D4A017;
          --gold-pale: #F7E9C8;

          --sign-primary: #8A5A6A;
          --sign-secondary: #B07A8A;
          --sign-accent: #D0A8B8;
          --sign-pale: #F5EAF0;
          --sign-xpale: #FAF4F7;
          --sign-dark: #3A2030;

          --hero-dark1: #120810;
          --hero-dark2: #2A1420;
          --hero-mid: #5A3048;
          --hero-light: #8A5068;

          --text-dark: #1E0E18;
          --text-mid: #4A2838;
          --text-soft: #9A6878;
          --white: #FFFFFF;

          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'DM Sans', sans-serif;

          --shadow-sign: 0 8px 40px rgba(138, 90, 106, 0.18);
          --shadow-card: 0 4px 20px rgba(138, 90, 106, 0.08);
          --shadow-soft: 0 2px 12px rgba(0, 0, 0, 0.05);
        }

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-body); background: var(--sign-xpale); color: var(--text-dark); overflow-x: hidden; }

  /* ── BREADCRUMB ── */
  .breadcrumb {
    background: var(--sign-pale); border-bottom: 1px solid rgba(138,90,106,0.14);
    padding: 12px 6vw; font-size: 0.78rem; color: var(--text-soft);
  }
  .breadcrumb a { color: var(--saffron-deep); text-decoration: none; }
  .breadcrumb a:hover { text-decoration: underline; }
  .breadcrumb span { margin: 0 6px; opacity: 0.4; }


  .hero {
    background: linear-gradient(145deg,
      var(--hero-dark1) 0%,
      var(--hero-dark2) 20%,
      var(--hero-mid)   52%,
      var(--hero-light) 80%,
      #B07888 100%);
    padding: 72px 6vw 0; position: relative; overflow: hidden;
    display: grid; grid-template-columns: 1fr 380px; gap: 48px;
    align-items: end; min-height: 460px;
  }
  @media (max-width: 860px) {
    .hero { grid-template-columns: 1fr; padding-bottom: 52px; min-height: auto; }
    .hero-visual { display: none; }
  }

  /* Large watermark glyph */
  .hero-bg-symbol {
    position: absolute; right: 27%; top: 50%; transform: translateY(-50%);
    font-size: 30vw; color: rgba(255,255,255,0.03);
    line-height: 1; pointer-events: none; font-family: var(--font-display); user-select: none;
  }

  /* Mountain silhouette — Capricorn's goat / summit motif */
  .mountain {
    position: absolute; bottom: 0; right: 0; width: 52%; pointer-events: none;
  }
  .mountain svg { display: block; width: 100%; }

  /* Saturn rings — two tilted ellipses */
  .saturn-ring {
    position: absolute; border-radius: 50%;
    border: 1px solid rgba(208,168,184,0.08);
    pointer-events: none;
    transform-origin: center;
  }
  .saturn-ring:nth-child(3){
    width: 560px; height: 140px;
    top: 38%; right: 14%;
    transform: rotate(-18deg);
    animation: ringShimmer 10s ease-in-out infinite alternate;
  }
  .saturn-ring:nth-child(4){
    width: 700px; height: 175px;
    top: 36%; right: 8%;
    transform: rotate(-18deg);
    animation: ringShimmer 14s ease-in-out infinite alternate-reverse;
    border-color: rgba(208,168,184,0.05);
  }
  @keyframes ringShimmer {
    from { opacity: 0.5; }
    to   { opacity: 1.0; }
  }

  /* Soft radial glow */
  .hero-glow {
    position: absolute; width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(138,90,106,0.35) 0%, transparent 70%);
    top: 50%; left: 18%; transform: translate(-50%,-50%); pointer-events: none;
  }

  .hero-content { position: relative; z-index: 2; padding-bottom: 60px; }

  .hero-eyebrow {
    display: flex; align-items: center; gap: 10px;
    font-size: 0.75rem; font-weight: 600; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--sign-accent);
    margin-bottom: 18px; opacity: 0; animation: fadeUp 0.7s 0.1s forwards;
  }
  .hero-eyebrow a { color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
  .hero-eyebrow a:hover { color: var(--sign-accent); }
  .hero-eyebrow .sep { color: rgba(255,255,255,0.2); }

  .hero-sign-badge {
    display: inline-flex; align-items: center; gap: 12px;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14);
    border-radius: 50px; padding: 8px 20px 8px 10px;
    margin-bottom: 20px; opacity: 0; animation: fadeUp 0.7s 0.2s forwards;
  }
  .sign-glyph {
    width: 38px; height: 38px; border-radius: 50%;
    background: linear-gradient(135deg, var(--sign-primary), var(--sign-secondary));
    display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;
  }
  .sign-meta strong { display: block; font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--white); line-height: 1.1; }
  .sign-meta span { font-size: 0.68rem; color: rgba(255,255,255,0.5); letter-spacing: 0.08em; }

  .hero-title {
    font-family: var(--font-display); font-size: clamp(2.6rem,5.5vw,4.4rem);
    font-weight: 700; color: var(--white); line-height: 1.08; margin-bottom: 18px;
    opacity: 0; animation: fadeUp 0.8s 0.3s forwards;
  }
  .hero-title em { font-style: italic; color: var(--sign-accent); }

  .hero-desc {
    font-size: 1.05rem; font-weight: 300; color: rgba(255,255,255,0.72);
    line-height: 1.75; max-width: 520px; margin-bottom: 30px;
    opacity: 0; animation: fadeUp 0.8s 0.45s forwards;
  }

  .hero-pills {
    display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 32px;
    opacity: 0; animation: fadeUp 0.8s 0.55s forwards;
  }
  .pill {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,255,255,0.09); border: 1px solid rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.82); font-size: 0.75rem; font-weight: 600;
    padding: 5px 14px; border-radius: 50px;
  }

  .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; opacity: 0; animation: fadeUp 0.8s 0.65s forwards; }

  @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }

  /* ── BUTTONS ── */
  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(135deg, var(--saffron) 0%, var(--gold) 100%);
    color: var(--white); font-family: var(--font-body); font-weight: 600;
    font-size: 0.88rem; letter-spacing: 0.03em;
    padding: 13px 26px; border-radius: 50px; text-decoration: none; border: none;
    cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 18px rgba(232,130,26,0.38);
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(232,130,26,0.52); }

  .btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--white); font-family: var(--font-body);
    font-weight: 500; font-size: 0.88rem;
    padding: 13px 26px; border-radius: 50px; text-decoration: none;
    border: 1.5px solid rgba(255,255,255,0.3); transition: background 0.2s;
  }
  .btn-ghost:hover { background: rgba(255,255,255,0.09); }

  .btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--sign-primary); font-family: var(--font-body);
    font-weight: 600; font-size: 0.88rem;
    padding: 13px 26px; border-radius: 50px; text-decoration: none;
    border: 1.5px solid rgba(138,90,106,0.3); transition: background 0.2s;
  }
  .btn-outline:hover { background: var(--sign-pale); }

  /* ── HERO METER PANEL ── */
  .hero-visual { position: relative; z-index: 2; align-self: end; }
  .compat-meter-card {
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.13);
    backdrop-filter: blur(10px); border-radius: 20px 20px 0 0; padding: 28px 28px 32px;
  }
  .meter-title { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.45); margin-bottom: 20px; }
  .meter-row { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .meter-sign { font-size: 1.1rem; width: 26px; flex-shrink: 0; text-align: center; }
  .meter-label { font-size: 0.78rem; color: rgba(255,255,255,0.65); width: 84px; flex-shrink: 0; }
  .meter-bar-bg { flex: 1; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.1); overflow: hidden; }
  .meter-bar {
    height: 100%; border-radius: 3px;
    background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent));
    transform-origin: left; transform: scaleX(0); transition: transform 1s ease;
  }
  .meter-bar.animate { transform: scaleX(1); }
  .meter-score { font-size: 0.72rem; font-weight: 700; color: var(--sign-accent); width: 28px; text-align: right; flex-shrink: 0; }

  /* ── TRAIT STRIP ── */
  .trait-strip {
    background: var(--sign-pale); border-top: 2px solid rgba(138,90,106,0.15);
    border-bottom: 1px solid rgba(138,90,106,0.1); padding: 22px 6vw;
  }
  .trait-inner { max-width: 1100px; margin: 0 auto; display: flex; gap: 36px; flex-wrap: wrap; align-items: center; }
  .trait-item { display: flex; align-items: center; gap: 10px; }
  .trait-icon {
    width: 36px; height: 36px; border-radius: 10px;
    background: linear-gradient(135deg, var(--sign-primary), var(--sign-secondary));
    display: flex; align-items: center; justify-content: center; font-size: 0.9rem; flex-shrink: 0;
  }
  .trait-text strong { display: block; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sign-primary); margin-bottom: 1px; }
  .trait-text span { font-size: 0.83rem; color: var(--text-mid); font-weight: 500; }

  /* ── REVEAL ── */
  .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* ── SECTION TYPE ── */
  .section-tag { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--saffron-deep); display: block; margin-bottom: 12px; }
  .section-title { font-family: var(--font-display); font-size: clamp(1.9rem,3.2vw,2.7rem); font-weight: 700; line-height: 1.18; color: var(--text-dark); margin-bottom: 14px; }
  .section-title em { font-style: italic; color: var(--sign-primary); }
  .section-lead { font-size: 1rem; font-weight: 300; color: var(--text-mid); line-height: 1.75; max-width: 660px; margin-bottom: 48px; }

  /* ── OVERVIEW CARDS ── */
  .overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 48px; }
  @media (max-width: 720px) { .overview-grid { grid-template-columns: 1fr; } }
  .overview-card {
    background: var(--white); border-radius: 18px; padding: 28px;
    border: 1.5px solid rgba(138,90,106,0.1); box-shadow: var(--shadow-soft);
    transition: box-shadow 0.25s, transform 0.25s;
  }
  .overview-card:hover { box-shadow: var(--shadow-sign); transform: translateY(-2px); }
  .ov-icon { font-size: 1.6rem; margin-bottom: 12px; }
  .ov-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 8px; }
  .ov-text { font-size: 0.87rem; color: var(--text-mid); line-height: 1.68; }

  /* ── COMPAT ACCORDIONS ── */
  .compat-layout { display: flex; flex-direction: column; gap: 12px; }
  .compat-card {
    background: var(--white); border-radius: 18px;
    border: 1.5px solid rgba(138,90,106,0.1); box-shadow: var(--shadow-soft);
    overflow: hidden; transition: box-shadow 0.25s;
  }
  .compat-card:hover { box-shadow: var(--shadow-sign); }
  .compat-header {
    display: grid; grid-template-columns: auto 1fr auto auto;
    align-items: center; gap: 16px; padding: 20px 24px; cursor: pointer; user-select: none;
  }
  @media (max-width: 600px) { .compat-header { grid-template-columns: auto 1fr auto; } .compat-level { display: none; } }
  .compat-sign-icon { width: 46px; height: 46px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; }
  .compat-sign-info h3 { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 3px; }
  .compat-sign-info p { font-size: 0.72rem; color: var(--text-soft); font-weight: 500; }
  .compat-level { display: flex; flex-direction: column; align-items: center; gap: 4px; flex-shrink: 0; }
  .compat-stars { font-size: 0.8rem; color: var(--gold); letter-spacing: 0.05em; }
  .compat-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 10px; border-radius: 50px; }
  .label-excellent   { background: #E8F5E0; color: #2E7A1F; }
  .label-good        { background: #FFF3CD; color: #8A6200; }
  .label-moderate    { background: #FDE8D0; color: var(--saffron-deep); }
  .label-challenging { background: #FFE8E5; color: #C0251A; }
  .compat-toggle { font-size: 1rem; color: var(--text-soft); transition: transform 0.3s; flex-shrink: 0; }
  .compat-card.open .compat-toggle { transform: rotate(180deg); }
  .compat-body { max-height: 0; overflow: hidden; transition: max-height 0.45s ease; }
  .compat-card.open .compat-body { max-height: 600px; }
  .compat-body-inner {
    border-top: 1px solid rgba(138,90,106,0.08); padding: 24px 24px 28px;
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;
    background: var(--sign-xpale);
  }
  @media (max-width: 660px) { .compat-body-inner { grid-template-columns: 1fr; } }
  .compat-aspect h4 { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sign-primary); margin-bottom: 6px; }
  .compat-aspect p { font-size: 0.83rem; color: var(--text-mid); line-height: 1.62; }

  /* ── SCORE GRID ── */
  .score-section { background: var(--sign-pale); padding: 80px 6vw; }
  .score-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
  @media (max-width: 720px) { .score-grid { grid-template-columns: repeat(2,1fr); } }
  .score-card {
    background: var(--white); border-radius: 18px; padding: 22px 18px;
    text-align: center; border: 1.5px solid rgba(138,90,106,0.1);
    box-shadow: var(--shadow-soft); transition: all 0.3s;
  }
  .score-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-sign); }
  .score-sign { font-size: 1.8rem; margin-bottom: 6px; }
  .score-name { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
  .score-bar-wrap { height: 5px; background: var(--sign-pale); border-radius: 3px; overflow: hidden; margin-bottom: 6px; }
  .score-bar { height: 100%; border-radius: 3px; background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent)); transform-origin: left; transform: scaleX(0); transition: transform 1.2s ease; }
  .score-bar.animate { transform: scaleX(1); }
  .score-pct { font-size: 0.72rem; font-weight: 600; color: var(--text-soft); }

  /* ── REPORT CALLOUT ── */
  .report-callout {
    background: linear-gradient(145deg, var(--hero-dark2) 0%, var(--hero-mid) 50%, var(--hero-light) 100%);
    border-radius: 24px; padding: 48px 52px;
    display: grid; grid-template-columns: 1fr auto; gap: 36px; align-items: center;
    max-width: 1100px; margin: 0 auto; position: relative; overflow: hidden;
  }
  .report-callout::before {
    content: '♑'; position: absolute; right: 42%; top: 50%; transform: translateY(-50%);
    font-size: 220px; color: rgba(255,255,255,0.025); font-family: var(--font-display); pointer-events: none; line-height: 1;
  }
  @media (max-width: 760px) { .report-callout { grid-template-columns: 1fr; padding: 32px 24px; } .report-callout::before { display: none; } }
  .rc-tag { display: inline-block; background: rgba(255,255,255,0.1); color: var(--sign-accent); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; padding: 4px 14px; border-radius: 50px; margin-bottom: 16px; }
  .rc-title { font-family: var(--font-display); font-size: clamp(1.5rem,2.5vw,2.1rem); font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.2; }
  .rc-title em { font-style: italic; color: var(--sign-accent); }
  .rc-desc { font-size: 0.9rem; font-weight: 300; color: rgba(255,255,255,0.72); line-height: 1.72; max-width: 480px; margin-bottom: 24px; }
  .rc-side { text-align: center; flex-shrink: 0; }
  .rc-price { background: var(--sign-xpale); border-radius: 14px; padding: 20px 28px; margin-bottom: 14px; }
  .rc-price .from { font-size: 0.68rem; color: var(--text-soft); text-transform: uppercase; letter-spacing: 0.1em; }
  .rc-price .amount { font-family: var(--font-display); font-size: 2rem; font-weight: 700; color: var(--sign-primary); line-height: 1.1; }
  .rc-price .note { font-size: 0.68rem; color: var(--text-soft); margin-top: 4px; line-height: 1.4; }

  /* ── GEM STRIP ── */
  .gem-strip { background: var(--white); padding: 0 6vw 80px; }
  .gem-strip-inner { max-width: 1100px; margin: 0 auto; }
  .gem-strip-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 36px; }
  @media (max-width: 660px) { .gem-strip-cards { grid-template-columns: 1fr; } }
  .gem-card {
    background: var(--sign-xpale); border-radius: 18px; padding: 24px 22px;
    border: 1.5px solid rgba(138,90,106,0.1); text-decoration: none; display: block; transition: all 0.3s;
  }
  .gem-card:hover { box-shadow: var(--shadow-sign); transform: translateY(-3px); background: var(--white); }
  .gem-emoji { font-size: 1.8rem; margin-bottom: 10px; display: block; }
  .gem-name { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
  .gem-desc { font-size: 0.8rem; color: var(--text-mid); line-height: 1.6; margin-bottom: 10px; }
  .gem-planet { font-size: 0.68rem; font-weight: 700; color: var(--sign-primary); text-transform: uppercase; letter-spacing: 0.08em; }

  /* ── SIGNS NAV ── */
  .signs-nav { background: var(--sign-pale); padding: 60px 6vw; border-top: 1px solid rgba(138,90,106,0.1); }
  .signs-nav-inner { max-width: 1100px; margin: 0 auto; }
  .signs-nav-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--text-dark); margin-bottom: 22px; text-align: center; }
  .signs-nav-title em { font-style: italic; color: var(--saffron-deep); }
  .signs-nav-grid { display: grid; grid-template-columns: repeat(11,1fr); gap: 10px; }
  @media (max-width: 860px) { .signs-nav-grid { grid-template-columns: repeat(6,1fr); } }
  @media (max-width: 440px) { .signs-nav-grid { grid-template-columns: repeat(4,1fr); } }
  .sign-nav-item {
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    padding: 12px 6px; background: var(--white); border-radius: 14px;
    border: 1.5px solid rgba(138,90,106,0.1); text-decoration: none; transition: all 0.2s;
  }
  .sign-nav-item.active { border-color: var(--sign-secondary); background: var(--sign-pale); }
  .sign-nav-item:hover:not(.active) { border-color: var(--saffron-light); box-shadow: 0 4px 16px rgba(232,130,26,0.14); transform: translateY(-2px); }
  .sni-symbol { font-size: 1.2rem; }
  .sni-name { font-size: 0.62rem; font-weight: 600; color: var(--text-mid); letter-spacing: 0.04em; }

  /* ── BOTTOM CTA ── */
  .bottom-cta {
    background: linear-gradient(145deg, var(--hero-dark1) 0%, var(--hero-dark2) 28%, var(--sign-dark) 58%, var(--sign-primary) 100%);
    padding: 70px 6vw; text-align: center; position: relative; overflow: hidden;
  }
  .bottom-cta::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse at 50% 60%, rgba(208,168,184,0.1) 0%, transparent 65%);
    pointer-events: none;
  }
  .bottom-cta h2 { font-family: var(--font-display); font-size: clamp(1.7rem,3.5vw,2.7rem); font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.2; position: relative; }
  .bottom-cta p { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 440px; margin: 0 auto 28px; line-height: 1.65; position: relative; }
  .bottom-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; }
  .btn-white { display: inline-flex; align-items: center; gap: 8px; background: var(--white); color: var(--sign-primary); font-weight: 700; font-size: 0.88rem; padding: 13px 26px; border-radius: 50px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
  .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
  .btn-outline-white { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--white); font-weight: 500; font-size: 0.88rem; padding: 13px 26px; border-radius: 50px; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.4); transition: background 0.2s; }
  .btn-outline-white:hover { background: rgba(255,255,255,0.1); }

  .section-divider { border: none; border-top: 1px solid rgba(138,90,106,0.08); margin: 0; }
      `}</style>

      {/* BREADCRUMB */}
      <nav className="breadcrumb">
        <a href="https://www.vinaybajrangi.com">Home</a>
        <span>›</span>

        <a href="https://www.vinaybajrangi.com/love-compatibility">
          Love Compatibility
        </a>

        <span>›</span>

        Capricorn Love Compatibility
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-symbol">♑</div>
        <div className="hero-glow"></div>
        <div className="saturn-ring"></div>
        <div className="saturn-ring"></div>

        {/* Mountain silhouette SVG */}
        <div className="mountain">
          <svg
            viewBox="0 0 600 260"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax meet"
          >
            <polygon
              points="0,260 180,60 260,130 340,40 420,110 520,20 600,90 600,260"
              fill="rgba(255,255,255,0.025)"
            />

            <polygon
              points="0,260 180,80 260,150 340,55 420,125 520,35 600,105 600,260"
              fill="rgba(255,255,255,0.015)"
            />
          </svg>
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <a href="https://www.vinaybajrangi.com/love-compatibility">
              Love Compatibility
            </a>

            <span className="sep">›</span>
            <span>Capricorn</span>
          </div>

          <div className="hero-sign-badge">
            <span className="sign-glyph">♑</span>

            <div className="sign-meta">
              <strong>Capricorn · The Sea Goat</strong>

              <span>
                December 22 – January 19 · Earth Sign · Saturn-Ruled
              </span>
            </div>
          </div>

          <h1 className="hero-title">
            Capricorn Love Compatibility
            <br />
            <em>with All 12 Signs</em>
          </h1>

          <p className="hero-desc">
            Capricorn does not fall in love carelessly. When they do, they build it
            like a mountain — slowly, intentionally, and meant to last. Which signs
            can climb with them? Which will give up before the summit? And what does
            Vedic astrology reveal about the Goat&apos;s heart that the sun sign alone
            cannot tell?
          </p>

          <div className="hero-pills">
            <span className="pill">🌍 Earth Element</span>
            <span className="pill">♄ Ruled by Saturn</span>
            <span className="pill">🔑 Cardinal Modality</span>
            <span className="pill">Best with: Taurus, Virgo, Scorpio</span>
          </div>

          <div className="hero-ctas">
            <a
              href="https://www.vinaybajrangi.com/love-and-relationship-report"
              className="btn-primary"
            >
              ✦ Get My Personalised Report
            </a>

            <a
              href="https://www.vinaybajrangi.com/calculator/love-calculator"
              className="btn-ghost"
            >
              Free Love Calculator →
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="compat-meter-card">
            <div className="meter-title">
              Quick Compatibility at a Glance
            </div>

            <div className="meter-row">
              <span className="meter-sign">♉</span>
              <span className="meter-label">Taurus</span>

              <div className="meter-bar-bg">
                <div className="meter-bar"></div>
              </div>

              <span className="meter-score">93%</span>
            </div>

            <div className="meter-row">
              <span className="meter-sign">♍</span>
              <span className="meter-label">Virgo</span>

              <div className="meter-bar-bg">
                <div
                  className="meter-bar"
                  style={{ width: "90%" }}
                ></div>
              </div>

              <span className="meter-score">90%</span>
            </div>

            <div className="meter-row">
              <span className="meter-sign">♏</span>
              <span className="meter-label">Scorpio</span>

              <div className="meter-bar-bg">
                <div
                  className="meter-bar"
                  style={{ width: "85%" }}
                ></div>
              </div>

              <span className="meter-score">85%</span>
            </div>

            <div className="meter-row">
              <span className="meter-sign">♓</span>
              <span className="meter-label">Pisces</span>

              <div className="meter-bar-bg">
                <div
                  className="meter-bar"
                  style={{ width: "80%" }}
                ></div>
              </div>

              <span className="meter-score">80%</span>
            </div>

            <div className="meter-row">
              <span className="meter-sign">♋</span>
              <span className="meter-label">Cancer</span>

              <div className="meter-bar-bg">
                <div
                  className="meter-bar"
                  style={{ width: "74%" }}
                ></div>
              </div>

              <span className="meter-score">74%</span>
            </div>

            <div className="meter-row">
              <span className="meter-sign">♑</span>
              <span className="meter-label">Capricorn</span>

              <div className="meter-bar-bg">
                <div
                  className="meter-bar"
                  style={{ width: "70%" }}
                ></div>
              </div>

              <span className="meter-score">70%</span>
            </div>

            <div className="meter-row">
              <span className="meter-sign">♈</span>
              <span className="meter-label">Aries</span>

              <div className="meter-bar-bg">
                <div
                  className="meter-bar"
                  style={{ width: "38%" }}
                ></div>
              </div>

              <span className="meter-score">38%</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRAIT STRIP */}
      <div className="trait-strip">
        <div className="trait-inner">
          <div className="trait-item">
            <div className="trait-icon">🌍</div>
            <div className="trait-text">
              <strong>Element</strong>
              <span>Earth</span>
            </div>
          </div>

          <div className="trait-item">
            <div className="trait-icon">♄</div>
            <div className="trait-text">
              <strong>Ruling Planet</strong>
              <span>Saturn (Shani)</span>
            </div>
          </div>

          <div className="trait-item">
            <div className="trait-icon">🔑</div>
            <div className="trait-text">
              <strong>Modality</strong>
              <span>Cardinal</span>
            </div>
          </div>

          <div className="trait-item">
            <div className="trait-icon">🏔️</div>
            <div className="trait-text">
              <strong>Love Strength</strong>
              <span>Devoted, Reliable, Enduring</span>
            </div>
          </div>

          <div className="trait-item">
            <div className="trait-icon">⚠️</div>
            <div className="trait-text">
              <strong>Love Challenge</strong>
              <span>Emotionally Reserved, Work-Obsessed</span>
            </div>
          </div>

          <div className="trait-item">
            <div className="trait-icon">✨</div>
            <div className="trait-text">
              <strong>Best Match</strong>
              <span>Taurus, Virgo, Scorpio</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* CAPRICORN IN LOVE: OVERVIEW */}
      <div
        style={{
          background: "var(--white)",
          padding: "80px 6vw 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <span className="section-tag reveal">
            Understanding Capricorn in Love
          </span>

          <h2 className="section-title reveal">
            The heart of the Goat —
            <br />
            <em>how Capricorn loves</em>
          </h2>

          <p className="section-lead reveal">
            Capricorn is ruled by Saturn — the planet of time, discipline, karma,
            and earned reward. This makes Capricorn&apos;s love nature unlike any
            other: measured in years, not moments. They are the sign that builds
            love the way they build everything else — steadily, carefully, and with
            the intention to make it last a lifetime.
          </p>

          <div className="overview-grid">
            <div className="overview-card reveal">
              <div className="ov-icon">🏔️</div>

              <div className="ov-title">
                Love Style: Slow Build, Total Commitment
              </div>

              <p className="ov-text">
                Capricorn does not rush into love. They observe, assess, and decide
                before committing — and once they commit, they are in completely.
                Partners who interpret Capricorn&apos;s initial reserve as
                disinterest miss the depth building beneath the surface. When a
                Capricorn declares love, it has been long considered and it is meant
                to last.
              </p>
            </div>

            <div className="overview-card reveal">
              <div className="ov-icon">💼</div>

              <div className="ov-title">
                The Challenge: Work and Emotional Availability
              </div>

              <p className="ov-text">
                Saturn&apos;s influence can make Capricorn prioritise duty and
                ambition over emotional presence — sometimes to the detriment of the
                relationship. Partners who need constant emotional reassurance will
                find Capricorn&apos;s restraint difficult to interpret. The Goat
                must consciously carve out time and emotional space for love, or
                risk losing what they most value.
              </p>
            </div>

            <div className="overview-card reveal">
              <div className="ov-icon">🧱</div>

              <div className="ov-title">
                What Capricorn Needs: Respect and Ambition
              </div>

              <p className="ov-text">
                Capricorn needs a partner they genuinely admire — someone who has
                built something, who takes life seriously, and who values what
                Capricorn values: integrity, achievement, and sustained effort. They
                are repelled by laziness and drawn to quiet competence. A partner
                who respects Capricorn&apos;s ambition rather than competing with it
                will receive extraordinary devotion in return.
              </p>
            </div>

            <div className="overview-card reveal">
              <div className="ov-icon">🪐</div>

              <div className="ov-title">
                Vedic Lens: Saturn, 10th House &amp; Navamsa
              </div>

              <p className="ov-text">
                In Vedic astrology, Capricorn (Makara) is ruled by Saturn and
                associated with the 10th house of career, authority, and public
                standing. The 7th house lord for Capricorn Lagna is the Moon
                (ruling Cancer) — meaning the ideal partner archetype for Capricorn
                is Cancerian in nature: nurturing, emotionally expressive,
                family-oriented, and domestically warm. The Navamsa chart is
                critical to understand whether this Cancerian partner energy
                manifests in the actual marriage. Saturn&apos;s placement,
                exaltation (Libra) and debilitation (Aries) directly influence when
                and how Capricorn&apos;s love life unfolds.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* COMPATIBILITY BREAKDOWN */}
      <div
        style={{
          background: "var(--white)",
          padding: "40px 6vw 80px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <span className="section-tag reveal">Capricorn with Each Sign</span>

          <h2 className="section-title reveal">
            Capricorn compatibility —
            <br />
            <em>sign by sign</em>
          </h2>

          <p className="section-lead reveal">
            Tap any sign to expand the full breakdown — love chemistry, long-term
            potential, and the Vedic astrology perspective that goes beyond what any
            generic compatibility tool provides.
          </p>

          <div className="compat-layout">

            {/* TAURUS */}
            <div className="compat-card reveal">
              <div className="compat-header" onClick={toggleCompat}>
                <div
                  className="compat-sign-icon"
                  style={{
                    background: "linear-gradient(135deg,#2D6A2A,#5A9E55)",
                  }}
                >
                  ♉
                </div>

                <div className="compat-sign-info">
                  <h3>Capricorn + Taurus</h3>
                  <p>Earth meets Earth · Apr 20 – May 20</p>
                </div>

                <div className="compat-level">
                  <div className="compat-stars">★★★★★</div>
                  <span className="compat-label label-excellent">
                    Excellent
                  </span>
                </div>

                <span className="compat-toggle">▾</span>
              </div>

              <div className="compat-body">
                <div className="compat-body-inner">
                  <div className="compat-aspect">
                    <h4>Love Chemistry</h4>
                    <p>
                      Two earth signs who understand each other&apos;s pace, values,
                      and need for security without explanation...
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Long-Term Potential</h4>
                    <p>
                      Exceptional. Both value loyalty above all, both are Fixed or
                      Cardinal in their commitment once made...
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Vedic Astrology Note</h4>
                    <p>
                      Venus rules Taurus and has a complex but ultimately workable
                      relationship with Saturn in Vedic astrology...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* VIRGO */}
            <div className="compat-card reveal">
              <div className="compat-header" onClick={toggleCompat}>
                <div
                  className="compat-sign-icon"
                  style={{
                    background: "linear-gradient(135deg,#5C6E2A,#849A3E)",
                  }}
                >
                  ♍
                </div>

                <div className="compat-sign-info">
                  <h3>Capricorn + Virgo</h3>
                  <p>Earth meets Earth · Aug 23 – Sep 22</p>
                </div>

                <div className="compat-level">
                  <div className="compat-stars">★★★★★</div>
                  <span className="compat-label label-excellent">
                    Excellent
                  </span>
                </div>

                <span className="compat-toggle">▾</span>
              </div>

              {/* compat-body same structure rahegi */}
            </div>

            {/* SCORPIO */}
            <div className="compat-card reveal">
              <div className="compat-header" onClick={toggleCompat}>
                <div
                  className="compat-sign-icon"
                  style={{
                    background: "linear-gradient(135deg,#B8510A,#D4732A)",
                  }}
                >
                  ♏
                </div>

                <div className="compat-sign-info">
                  <h3>Capricorn + Scorpio</h3>
                  <p>Earth meets Water · Oct 23 – Nov 21</p>
                </div>

                <div className="compat-level">
                  <div className="compat-stars">★★★★☆</div>
                  <span className="compat-label label-good">Good</span>
                </div>

                <span className="compat-toggle">▾</span>
              </div>

              {/* compat-body same structure rahegi */}
            </div>

            {/* PISCES */}
            <div className="compat-card reveal">
              <div className="compat-header" onClick={toggleCompat}>
                <div
                  className="compat-sign-icon"
                  style={{
                    background: "linear-gradient(135deg,#3B82B0,#82C8E0)",
                  }}
                >
                  ♓
                </div>

                <div className="compat-sign-info">
                  <h3>Capricorn + Pisces</h3>
                  <p>Earth meets Water · Feb 19 – Mar 20</p>
                </div>

                <div className="compat-level">
                  <div className="compat-stars">★★★★☆</div>
                  <span className="compat-label label-good">Good</span>
                </div>

                <span className="compat-toggle">▾</span>
              </div>

              <div className="compat-body">
                <div className="compat-body-inner">
                  <div className="compat-aspect">
                    <h4>Vedic Astrology Note</h4>
                    <p>
                      Jupiter rules Pisces and is a generally benefic planet in
                      Vedic astrology...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CANCER */}
            <div className="compat-card reveal">
              <div className="compat-header" onClick={toggleCompat}>
                <div
                  className="compat-sign-icon"
                  style={{
                    background: "linear-gradient(135deg,#2B6CB0,#63B3ED)",
                  }}
                >
                  ♋
                </div>

                <div className="compat-sign-info">
                  <h3>Capricorn + Cancer</h3>
                  <p>
                    Earth meets Water · Opposite Signs · Jun 21 – Jul 22
                  </p>
                </div>

                <div className="compat-level">
                  <div className="compat-stars">★★★★☆</div>
                  <span className="compat-label label-good">Good</span>
                </div>

                <span className="compat-toggle">▾</span>
              </div>

              {/* compat-body same structure rahegi */}
            </div>

            {/* PART 5 - COMPATIBILITY CARDS */}

            {/* CAPRICORN + CAPRICORN */}
            <div className="compat-card reveal">
              <div className="compat-header" onClick={toggleCompat}>
                <div
                  className="compat-sign-icon"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--sign-primary),var(--sign-secondary))",
                  }}
                >
                  ♑
                </div>

                <div className="compat-sign-info">
                  <h3>Capricorn + Capricorn</h3>
                  <p>Earth meets Earth · Same Sign</p>
                </div>

                <div className="compat-level">
                  <div className="compat-stars">★★★★☆</div>
                  <span className="compat-label label-good">Good</span>
                </div>

                <span className="compat-toggle">▾</span>
              </div>

              <div className="compat-body">
                <div className="compat-body-inner">
                  <div className="compat-aspect">
                    <h4>Love Chemistry</h4>
                    <p>
                      Instant understanding — two Capricorns recognise each other&apos;s
                      ambition, restraint, and quiet competence without explanation. There
                      is deep mutual respect from the outset. The relationship has an
                      unusually egalitarian quality — neither tries to outmanoeuvre the
                      other because both understand the same game too well to bother.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Long-Term Potential</h4>
                    <p>
                      Good when both consciously cultivate emotional warmth. Two
                      Saturn-ruled people can create an extraordinarily productive life
                      together while letting the romance quietly starve. Both must schedule
                      and protect tenderness with the same discipline they apply to their
                      professional goals. When they do, this partnership is formidable in
                      every dimension.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Vedic Astrology Note</h4>
                    <p>
                      Two Saturn-ruled charts amplify both Saturn&apos;s gifts (discipline,
                      longevity, wisdom, earned success) and its shadows (emotional
                      coldness, delay, excessive seriousness). Dr. Bajrangi looks carefully
                      at Venus placement in both charts — a strong, well-placed Venus in
                      one or both charts brings the warmth and beauty that softens
                      Saturn&apos;s austerity and keeps the relationship emotionally
                      nourishing as well as materially productive.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LIBRA */}
            <div className="compat-card reveal">
              <div className="compat-header" onClick={toggleCompat}>
                <div
                  className="compat-sign-icon"
                  style={{
                    background: "linear-gradient(135deg,#5558A8,#7B7ECC)",
                  }}
                >
                  ♎
                </div>

                <div className="compat-sign-info">
                  <h3>Capricorn + Libra</h3>
                  <p>Earth meets Air · Sep 23 – Oct 22</p>
                </div>

                <div className="compat-level">
                  <div className="compat-stars">★★★☆☆</div>
                  <span className="compat-label label-moderate">Moderate</span>
                </div>

                <span className="compat-toggle">▾</span>
              </div>

              <div className="compat-body">
                <div className="compat-body-inner">
                  <div className="compat-aspect">
                    <h4>Love Chemistry</h4>
                    <p>
                      Both are Cardinal signs — initiators who lead in their respective
                      domains. The mutual respect for authority and effectiveness is real.
                      Libra&apos;s aesthetic refinement and social grace appeals to
                      Capricorn&apos;s appreciation of quality; Capricorn&apos;s solidity
                      and achievement appeals to Libra&apos;s need for a secure,
                      accomplished partner. But their emotional registers are very
                      different.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Long-Term Potential</h4>
                    <p>
                      Moderate. Libra needs social variety, reciprocal warmth, and regular
                      emotional engagement; Capricorn can go weeks absorbed in work without
                      noticing the relational deficit. Libra must develop patience with
                      Capricorn&apos;s absorbed focus; Capricorn must make genuine emotional
                      space for Libra&apos;s need for beauty, connection, and lightness.
                      Workable, but requires sustained awareness from Capricorn in
                      particular.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Vedic Astrology Note</h4>
                    <p>
                      Venus rules Libra and Saturn is exalted in Libra — a profound cosmic
                      signal of Saturn&apos;s resonance with Libra&apos;s domain of justice
                      and partnership. Libra is Capricorn&apos;s 10th house — the house of
                      career, reputation, and public standing. Libra partners frequently
                      play a significant role in shaping Capricorn&apos;s professional
                      identity and public reputation, making this relationship
                      professionally impactful regardless of its romantic trajectory.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AQUARIUS */}
            <div className="compat-card reveal">
              <div className="compat-header" onClick={toggleCompat}>
                <div
                  className="compat-sign-icon"
                  style={{
                    background: "linear-gradient(135deg,#1A5A9E,#4A9ECC)",
                  }}
                >
                  ♒
                </div>

                <div className="compat-sign-info">
                  <h3>Capricorn + Aquarius</h3>
                  <p>Earth meets Air · Jan 20 – Feb 18</p>
                </div>

                <div className="compat-level">
                  <div className="compat-stars">★★★☆☆</div>
                  <span className="compat-label label-moderate">Moderate</span>
                </div>

                <span className="compat-toggle">▾</span>
              </div>

              <div className="compat-body">
                <div className="compat-body-inner">
                  <div className="compat-aspect">
                    <h4>Love Chemistry</h4>
                    <p>
                      Adjacent signs who share Saturn rulership — Aquarius in traditional
                      astrology is also Saturn-ruled — giving them an underlying
                      understanding of discipline, structure, and long-term thinking. But
                      Capricorn applies these Saturn qualities to personal ambition and
                      material building; Aquarius applies them to ideological and
                      collective causes. The worldview gap is significant.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Long-Term Potential</h4>
                    <p>
                      Moderate. Capricorn needs emotional reliability and shared personal
                      goals; Aquarius needs intellectual freedom and social range.
                      Capricorn finds Aquarius detached and unpredictable; Aquarius finds
                      Capricorn conventional and emotionally unavailable. When both are at
                      their best — Capricorn developing openness, Aquarius developing
                      consistency — there is genuine complementarity in shared ambition and
                      intellectual respect.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Vedic Astrology Note</h4>
                    <p>
                      In Vedic astrology, Saturn rules Capricorn directly and Aquarius is
                      the 2nd house of Capricorn — the house of family, accumulated wealth,
                      and speech. Aquarius partners often have a defining role in
                      Capricorn&apos;s financial life and family structure. Dr. Bajrangi
                      notes that the 2nd house placement means this relationship frequently
                      has significant material implications — the two can build
                      considerable wealth together even when the romantic alignment is
                      imperfect.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LEO */}
            <div className="compat-card reveal">
              <div className="compat-header" onClick={toggleCompat}>
                <div
                  className="compat-sign-icon"
                  style={{
                    background: "linear-gradient(135deg,#C0392B,#E05A4E)",
                  }}
                >
                  ♌
                </div>

                <div className="compat-sign-info">
                  <h3>Capricorn + Leo</h3>
                  <p>Earth meets Fire · Jul 23 – Aug 22</p>
                </div>

                <div className="compat-level">
                  <div className="compat-stars">★★★☆☆</div>
                  <span className="compat-label label-moderate">Moderate</span>
                </div>

                <span className="compat-toggle">▾</span>
              </div>

              <div className="compat-body">
                <div className="compat-body-inner">
                  <div className="compat-aspect">
                    <h4>Love Chemistry</h4>
                    <p>
                      Two ambitious leaders who command their respective domains. The
                      mutual respect for achievement and authority can create an initial
                      bond of admiration. Leo&apos;s warmth and generosity thaws
                      Capricorn&apos;s reserve; Capricorn&apos;s quiet competence and
                      authority impresses Leo. But Leo&apos;s need for visible celebration
                      conflicts with Capricorn&apos;s focus on quiet, substantial
                      achievement.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Long-Term Potential</h4>
                    <p>
                      Moderate. Leo needs applause and public recognition; Capricorn works
                      for lasting results that speak for themselves. Leo&apos;s theatrical
                      emotional expression can feel excessive to Capricorn;
                      Capricorn&apos;s emotional restraint feels like indifference to Leo.
                      Both must make significant adjustments — Leo developing patience with
                      results over recognition, Capricorn developing the warmth Leo
                      requires to feel genuinely loved.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Vedic Astrology Note</h4>
                    <p>
                      The Sun rules Leo and is considered an enemy of Saturn in Vedic
                      astrology — one of the most significant planetary oppositions in the
                      system. Leo is Capricorn&apos;s 8th house — the house of
                      transformation, hidden resources, and deep bonds through crisis. This
                      8th house placement means Leo relationships are intensely
                      transformative for Capricorn — not comfortable, but almost always
                      profoundly altering in how Capricorn understands themselves and their
                      emotional world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ARIES */}
            <div className="compat-card reveal">
              <div className="compat-header" onClick={toggleCompat}>
                <div
                  className="compat-sign-icon"
                  style={{
                    background: "linear-gradient(135deg,#C0351A,#F26B3A)",
                  }}
                >
                  ♈
                </div>

                <div className="compat-sign-info">
                  <h3>Capricorn + Aries</h3>
                  <p>Earth meets Fire · Mar 21 – Apr 19</p>
                </div>

                <div className="compat-level">
                  <div className="compat-stars">★★☆☆☆</div>
                  <span className="compat-label label-challenging">
                    Challenging
                  </span>
                </div>

                <span className="compat-toggle">▾</span>
              </div>

              <div className="compat-body">
                <div className="compat-body-inner">
                  <div className="compat-aspect">
                    <h4>Love Chemistry</h4>
                    <p>
                      Two Cardinal signs — both are initiators, both are leaders,
                      and both believe their approach to life is correct. The
                      initial respect for each other&apos;s drive is real. But
                      Aries moves by impulse and Capricorn moves by strategy;
                      Aries needs excitement and Capricorn needs stability. The
                      gap widens as the relationship progresses.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Long-Term Potential</h4>
                    <p>
                      Challenging. Capricorn finds Aries impulsive and emotionally
                      immature; Aries finds Capricorn joyless and controlling.
                      Both are right about the other&apos;s blind spots, which
                      makes compromise feel like defeat rather than growth. Works
                      best when both are older and have developed some of the
                      other&apos;s qualities — Aries some patience, Capricorn
                      some spontaneity.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Vedic Astrology Note</h4>
                    <p>
                      Mars rules Aries and Saturn is debilitated in Aries in Vedic
                      astrology — one of the most revealing planetary signals in
                      the system. Saturn&apos;s energy is at its weakest and most
                      disrupted in Aries&apos; territory of impulse and aggression.
                      Aries is Capricorn&apos;s 4th house — the house of home and
                      emotional foundations. Aries partners can profoundly disrupt
                      Capricorn&apos;s inner emotional security, often triggering
                      unexpected upheaval in the area Capricorn guards most
                      carefully.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* GEMINI */}
            <div className="compat-card reveal">
              <div className="compat-header" onClick={toggleCompat}>
                <div
                  className="compat-sign-icon"
                  style={{
                    background: "linear-gradient(135deg,#3A8A2A,#5CB84A)",
                  }}
                >
                  ♊
                </div>

                <div className="compat-sign-info">
                  <h3>Capricorn + Gemini</h3>
                  <p>Earth meets Air · May 21 – Jun 20</p>
                </div>

                <div className="compat-level">
                  <div className="compat-stars">★★☆☆☆</div>
                  <span className="compat-label label-challenging">
                    Challenging
                  </span>
                </div>

                <span className="compat-toggle">▾</span>
              </div>

              <div className="compat-body">
                <div className="compat-body-inner">
                  <div className="compat-aspect">
                    <h4>Love Chemistry</h4>
                    <p>
                      An intriguing mismatch. Gemini&apos;s quick mind and verbal
                      wit can temporarily fascinate the usually-serious Capricorn;
                      Capricorn&apos;s depth of achievement and quiet authority can
                      briefly ground the restless Gemini. But Gemini&apos;s
                      changeability and surface-skimming frustrates
                      Capricorn&apos;s need for depth and follow-through, and
                      Capricorn&apos;s heaviness dampens Gemini&apos;s essential
                      lightness.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Long-Term Potential</h4>
                    <p>
                      Low without sustained effort. Capricorn sees Gemini as
                      unreliable and shallow; Gemini finds Capricorn humourless and
                      rigid. Neither assessment is fully fair, but both are
                      predictable. Works best when Capricorn has developed a richer
                      sense of play and Gemini has developed a genuine relationship
                      with commitment — both significant personal evolutions.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Vedic Astrology Note</h4>
                    <p>
                      Mercury rules Gemini and has a friendly relationship with
                      Saturn in Vedic astrology — a more workable planetary dynamic
                      than the temperamental differences suggest. Gemini is
                      Capricorn&apos;s 6th house — the house of conflict, health,
                      and service. In Vedic astrology, 6th house relationships tend
                      to carry themes of ongoing effort, health concerns, or a
                      service dynamic where one partner gives significantly more
                      than the other. Capricorn natives often describe Gemini
                      relationships as exhausting despite their charm.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SAGITTARIUS */}
            <div className="compat-card reveal">
              <div className="compat-header" onClick={toggleCompat}>
                <div
                  className="compat-sign-icon"
                  style={{
                    background: "linear-gradient(135deg,#9A7640,#BFA060)",
                  }}
                >
                  ♐
                </div>

                <div className="compat-sign-info">
                  <h3>Capricorn + Sagittarius</h3>
                  <p>Earth meets Fire · Nov 22 – Dec 21</p>
                </div>

                <div className="compat-level">
                  <div className="compat-stars">★★☆☆☆</div>
                  <span className="compat-label label-challenging">
                    Challenging
                  </span>
                </div>

                <span className="compat-toggle">▾</span>
              </div>

              <div className="compat-body">
                <div className="compat-body-inner">
                  <div className="compat-aspect">
                    <h4>Love Chemistry</h4>
                    <p>
                      Adjacent signs whose energies point in different directions.
                      Sagittarius expands outward — toward adventure, philosophy,
                      and horizon. Capricorn drives upward — toward achievement,
                      authority, and summit. Both are ambitious; both are serious
                      about their respective visions. But Sagittarius finds
                      Capricorn&apos;s methodical seriousness limiting; Capricorn
                      finds Sagittarius&apos; optimism and freedom-seeking
                      impractical.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Long-Term Potential</h4>
                    <p>
                      Challenging. Capricorn needs structure; Sagittarius needs
                      freedom. Capricorn thinks in decades; Sagittarius thinks in
                      adventures. For long-term success, Sagittarius must
                      demonstrate genuine commitment rather than romantic
                      enthusiasm alone; Capricorn must genuinely expand their
                      conception of what a good life includes. Both must grow
                      substantially.
                    </p>
                  </div>

                  <div className="compat-aspect">
                    <h4>Vedic Astrology Note</h4>
                    <p>
                      Jupiter rules Sagittarius and is considered an enemy of
                      Saturn in Vedic astrology — one of the most significant
                      planetary tensions in the system. Jupiter&apos;s expansion
                      clashes with Saturn&apos;s contraction; Jupiter&apos;s
                      optimism clashes with Saturn&apos;s realism. Sagittarius is
                      Capricorn&apos;s 12th house — the house of loss, hidden
                      matters, and spiritual retreat. This placement means
                      Sagittarius relationships often carry themes of significant
                      sacrifice or a behind-the-scenes karmic significance for
                      Capricorn that is rarely visible to the outside world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--text-soft)",
                marginTop: "18px",
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              All 12 signs covered above. For a personalised compatibility reading
              based on your full birth chart, see the Love &amp; Relationship
              Report.
            </p>

          </div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* SCORE SUMMARY */}
      <div className="score-section">
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <span
            className="section-tag reveal"
            style={{
              textAlign: "center",
              display: "block",
            }}
          >
            At a Glance
          </span>

          <h2
            className="section-title reveal"
            style={{
              textAlign: "center",
              marginBottom: "36px",
            }}
          >
            Capricorn compatibility <em>scores</em>
          </h2>

          <div className="score-grid">
            <div className="score-card reveal"><div className="score-sign">♉</div><div className="score-name">Taurus</div><div className="score-bar-wrap"><div className="score-bar"></div></div><div className="score-pct">93%</div></div>

            <div className="score-card reveal"><div className="score-sign">♍</div><div className="score-name">Virgo</div><div className="score-bar-wrap"><div className="score-bar"></div></div><div className="score-pct">90%</div></div>

            <div className="score-card reveal"><div className="score-sign">♏</div><div className="score-name">Scorpio</div><div className="score-bar-wrap"><div className="score-bar"></div></div><div className="score-pct">85%</div></div>

            <div className="score-card reveal"><div className="score-sign">♓</div><div className="score-name">Pisces</div><div className="score-bar-wrap"><div className="score-bar"></div></div><div className="score-pct">80%</div></div>

            <div className="score-card reveal"><div className="score-sign">♋</div><div className="score-name">Cancer</div><div className="score-bar-wrap"><div className="score-bar"></div></div><div className="score-pct">74%</div></div>

            <div className="score-card reveal"><div className="score-sign">♑</div><div className="score-name">Capricorn</div><div className="score-bar-wrap"><div className="score-bar"></div></div><div className="score-pct">70%</div></div>

            <div className="score-card reveal"><div className="score-sign">♒</div><div className="score-name">Aquarius</div><div className="score-bar-wrap"><div className="score-bar"></div></div><div className="score-pct">58%</div></div>

            <div className="score-card reveal"><div className="score-sign">♎</div><div className="score-name">Libra</div><div className="score-bar-wrap"><div className="score-bar"></div></div><div className="score-pct">55%</div></div>

            <div className="score-card reveal"><div className="score-sign">♌</div><div className="score-name">Leo</div><div className="score-bar-wrap"><div className="score-bar"></div></div><div className="score-pct">48%</div></div>

            <div className="score-card reveal"><div className="score-sign">♊</div><div className="score-name">Gemini</div><div className="score-bar-wrap"><div className="score-bar"></div></div><div className="score-pct">42%</div></div>

            <div className="score-card reveal"><div className="score-sign">♈</div><div className="score-name">Aries</div><div className="score-bar-wrap"><div className="score-bar"></div></div><div className="score-pct">38%</div></div>

            <div className="score-card reveal"><div className="score-sign">♐</div><div className="score-name">Sagittarius</div><div className="score-bar-wrap"><div className="score-bar"></div></div><div className="score-pct">35%</div></div>
          </div>

          <p
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              color: "var(--text-soft)",
              marginTop: "18px",
              fontStyle: "italic",
            }}
          >
            General sun-sign compatibility only. Personalised scores require full
            birth chart analysis.
          </p>
        </div>
      </div>

      <hr className="section-divider" />

      {/* REPORT CALLOUT */}
      <div
        style={{
          padding: "60px 6vw",
          background: "var(--white)",
        }}
      >
        <div className="report-callout reveal">
          <div>
            <span className="rc-tag">
              For Capricorn · Personalised Report
            </span>

            <h2 className="rc-title">
              Saturn builds slowly —
              <br />
              your <em>love life is no exception</em>
            </h2>

            <p className="rc-desc">
              Capricorn&apos;s love life unfolds on Saturn&apos;s timeline — which is
              not always when you want it, but almost always when it is right.
              Understanding your Saturn&apos;s placement, the 7th house lord (the
              Moon), Venus placement, Navamsa compatibility, and current Dasha period
              gives you a precise picture of when love is coming and who it is coming
              with. Dr. Vinay Bajrangi&apos;s Love &amp; Relationship Report covers
              all of this — written, personalised, delivered in 3–5 working days.
            </p>

            <a
              href="https://www.vinaybajrangi.com/love-and-relationship-report"
              className="btn-primary"
            >
              ✦ Get My Love &amp; Relationship Report
            </a>
          </div>

          <div className="rc-side">
            <div className="rc-price">
              <div className="from">Starts from</div>
              <div className="amount">₹ 799</div>

              <div className="note">
                Written report · Delivered
                <br />
                in 3–5 working days
              </div>
            </div>

            <a
              href="https://www.vinaybajrangi.com/calculator/love-calculator"
              className="btn-ghost"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.82rem",
                justifyContent: "center",
                width: "100%",
              }}
            >
              Try Free Calculator →
            </a>
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* GEMSTONE WEARABLES */}
      <div className="gem-strip">
        <div className="gem-strip-inner">
          <span
            className="section-tag reveal"
            style={{
              paddingTop: "60px",
              display: "block",
            }}
          >
            Vedic Remedies for Capricorn
          </span>

          <h2 className="section-title reveal">
            Gemstone wearables <em>for Capricorn love</em>
          </h2>

          <p
            className="section-lead reveal"
            style={{
              marginBottom: 0,
            }}
          >
            Saturn-ruled Capricorn benefits from gemstones that channel Saturn&apos;s
            discipline productively into relationships, strengthen the Moon — the
            7th house lord and direct marriage significator — and support Venus, the
            natural karaka of romantic love. All wearables must be prescribed after
            full chart analysis.
          </p>

          <div className="gem-strip-cards">
            {/* Yahan tino gem-card blocks same rahenge.
          Sirf class → className convert karna hai */}
          </div>

          <div
            className="reveal"
            style={{
              background: "var(--sign-xpale)",
              borderRadius: "14px",
              padding: "18px 22px",
              marginTop: "20px",
              borderLeft: "3px solid var(--saffron-deep)",
              maxWidth: "680px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontSize: "1.2rem",
                flexShrink: 0,
              }}
            >
              ⚠️
            </span>

            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--text-mid)",
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: "var(--text-dark)" }}>
                Blue Sapphire requires special care.
              </strong>{" "}
              Neelam is one of the most potent gemstones in Vedic astrology —
              capable of rapid positive results when correctly prescribed, and
              equally rapid disruption when incorrect.
            </p>
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* SIGNS NAV */}
      <div className="signs-nav">
        <div className="signs-nav-inner">
          <h3 className="signs-nav-title">
            Explore compatibility for <em>other signs</em>
          </h3>

          <div className="signs-nav-grid">
            <a href="https://www.vinaybajrangi.com/love-compatibility/aries" className="sign-nav-item">
              <span className="sni-symbol">♈</span>
              <span className="sni-name">Aries</span>
            </a>

            <a href="https://www.vinaybajrangi.com/love-compatibility/taurus" className="sign-nav-item">
              <span className="sni-symbol">♉</span>
              <span className="sni-name">Taurus</span>
            </a>

            <a href="https://www.vinaybajrangi.com/love-compatibility/gemini" className="sign-nav-item">
              <span className="sni-symbol">♊</span>
              <span className="sni-name">Gemini</span>
            </a>

            <a href="https://www.vinaybajrangi.com/love-compatibility/cancer" className="sign-nav-item">
              <span className="sni-symbol">♋</span>
              <span className="sni-name">Cancer</span>
            </a>

            <a href="https://www.vinaybajrangi.com/love-compatibility/leo" className="sign-nav-item">
              <span className="sni-symbol">♌</span>
              <span className="sni-name">Leo</span>
            </a>

            <a href="https://www.vinaybajrangi.com/love-compatibility/virgo" className="sign-nav-item">
              <span className="sni-symbol">♍</span>
              <span className="sni-name">Virgo</span>
            </a>

            <a href="https://www.vinaybajrangi.com/love-compatibility/libra" className="sign-nav-item">
              <span className="sni-symbol">♎</span>
              <span className="sni-name">Libra</span>
            </a>

            <a href="https://www.vinaybajrangi.com/love-compatibility/scorpio" className="sign-nav-item">
              <span className="sni-symbol">♏</span>
              <span className="sni-name">Scorpio</span>
            </a>

            <a href="https://www.vinaybajrangi.com/love-compatibility/sagittarius" className="sign-nav-item">
              <span className="sni-symbol">♐</span>
              <span className="sni-name">Sagittarius</span>
            </a>

            <a href="https://www.vinaybajrangi.com/love-compatibility/capricorn" className="sign-nav-item active">
              <span className="sni-symbol">♑</span>
              <span className="sni-name">Capricorn</span>
            </a>

            <a href="https://www.vinaybajrangi.com/love-compatibility/aquarius" className="sign-nav-item">
              <span className="sni-symbol">♒</span>
              <span className="sni-name">Aquarius</span>
            </a>

            <a href="https://www.vinaybajrangi.com/love-compatibility/pisces" className="sign-nav-item">
              <span className="sni-symbol">♓</span>
              <span className="sni-name">Pisces</span>
            </a>
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "22px",
            }}
          >
            <a
              href="https://www.vinaybajrangi.com/love-compatibility"
              style={{
                color: "var(--saffron-deep)",
                fontWeight: 600,
                fontSize: "0.85rem",
                textDecoration: "none",
              }}
            >
              ← Back to Love Compatibility Overview
            </a>
          </p>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <section className="bottom-cta">
        <div className="reveal">
          <h2>
            The Goat climbs every mountain —
            <br />
            let the stars mark the summit
          </h2>

          <p>
            Saturn rewards the patient. Your Vedic birth chart — Saturn, the Moon,
            Venus, and your Dasha — reveals exactly when your love is ready to be
            claimed.
          </p>

          <div className="bottom-cta-btns">
            <a
              href="https://www.vinaybajrangi.com/love-and-relationship-report"
              className="btn-white"
            >
              ✦ Order My Love Report
            </a>

            <a
              href="https://www.vinaybajrangi.com/calculator/love-calculator"
              className="btn-outline-white"
            >
              Try Free Calculator
            </a>

            <a
              href="/services/consultation.php"
              className="btn-outline-white"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>


    </>
  );
}