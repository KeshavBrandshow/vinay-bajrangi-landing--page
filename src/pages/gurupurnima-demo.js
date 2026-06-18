
"use client";

import { useEffect, useState } from "react";


export default function GuruPurnima() {

  const [selectedPackage, setSelectedPackage] = useState("individual");

  const [countdown, setCountdown] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
    expired: false,
  });

  useEffect(() => {
    const target = new Date("2026-07-28T18:00:00+05:30").getTime();

    const timer = setInterval(() => {
      const diff = target - Date.now();

      if (diff <= 0) {
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          expired: true,
        });

        clearInterval(timer);
        return;
      }

      const pad = (n) => String(n).padStart(2, "0");

      setCountdown({
        days: pad(Math.floor(diff / 864e5)),
        hours: pad(Math.floor((diff % 864e5) / 36e5)),
        minutes: pad(Math.floor((diff % 36e5) / 6e4)),
        seconds: pad(Math.floor((diff % 6e4) / 1e3)),
        expired: false,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Rozha+One&family=Mukta:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* ================= GLOBAL CSS ================= */}

      <style jsx global>{`
       :root{
  /* ── BRAND CONSTANTS (never change) ── */
  --maroon:      #4A0D0D;
  --maroon-soft: #6B1A14;
  --gold:        #E8A317;
  --gold-deep:   #C4860B;
  --saffron:     #E25822;
  --cream:       #FFF8EC;
  --cream-deep:  #F7EDD8;
  --ink:         #2A1A12;
  --ink-soft:    #5C4636;
  --tulsi:       #2F6B3A;
  --line:        #E5D5B8;

  /* ── PUJA ACCENT (EDIT per puja) ── */
  --accent:      #5C3D99;   /* Jupiter purple-wisdom */
  --accent-soft: #7B5EA7;
  --accent-glow: rgba(92,61,153,.18);
  --accent-hero: linear-gradient(150deg, #2B1060 0%, #4A0D0D 55%, #2B1060 100%);

  --display:'Rozha One',serif;
  --body:'Mukta',sans-serif;
  --radius:14px;
  --shadow:0 10px 30px rgba(74,13,13,.10);
  --shadow-lift:0 16px 40px rgba(74,13,13,.18);
  --wrap:1140px;
}

*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:var(--body);color:var(--ink);background:var(--cream);line-height:1.65;font-size:17px}
img{max-width:100%;display:block}
a{color:inherit}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 22px}
section{padding:72px 0}
h1,h2,h3{font-family:var(--display);font-weight:400;line-height:1.18;color:var(--maroon)}
h2{font-size:clamp(28px,3.6vw,40px);margin-bottom:14px}
.kicker{display:inline-block;font-size:13px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;color:var(--saffron);margin-bottom:10px}
.lede{font-size:clamp(17px,1.6vw,19px);color:var(--ink-soft);max-width:760px}
.center{text-align:center}.center .lede{margin:0 auto}
:focus-visible{outline:3px solid var(--gold);outline-offset:3px;border-radius:6px}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}

/* ── BUTTONS ── */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-family:var(--body);font-weight:700;font-size:16.5px;padding:15px 30px;border-radius:999px;border:2px solid transparent;cursor:pointer;text-decoration:none;transition:transform .18s,box-shadow .18s,background .18s}
.btn-gold{background:linear-gradient(180deg,#F4B83A,var(--gold) 55%,var(--gold-deep));color:var(--maroon);box-shadow:0 8px 22px rgba(232,163,23,.45)}
.btn-gold:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(232,163,23,.55)}
.btn-accent{background:linear-gradient(180deg,var(--accent-soft),var(--accent));color:#fff;box-shadow:0 8px 22px rgba(92,61,153,.4)}
.btn-accent:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(92,61,153,.5)}
.btn-line{background:transparent;color:var(--cream);border-color:rgba(255,248,236,.5)}
.btn-line:hover{background:rgba(255,248,236,.12)}
.btn-big{font-size:18px;padding:18px 42px}

/* ── ANNOUNCE STRIP ── */
.announce{background:var(--accent);color:#fff;text-align:center;font-weight:600;font-size:14.5px;padding:9px 16px}
.announce b{font-weight:800}

/* ── HEADER ── */
header{background:var(--maroon);position:sticky;top:0;z-index:60}
.nav{display:flex;align-items:center;justify-content:space-between;padding:14px 22px;max-width:var(--wrap);margin:0 auto}
.logo{display:flex;align-items:center;gap:12px;text-decoration:none}
.logo-mark{width:44px;height:44px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#F4B83A,var(--gold-deep));display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:24px;color:var(--maroon)}
.logo-name{font-family:var(--display);color:var(--cream);font-size:22px;line-height:1}
.logo-name small{display:block;font-family:var(--body);font-size:10.5px;letter-spacing:.22em;color:var(--gold);font-weight:600;margin-top:3px}
.nav-links{display:flex;gap:26px;list-style:none}
.nav-links a{color:rgba(255,248,236,.85);text-decoration:none;font-weight:500;font-size:15.5px}
.nav-links a:hover{color:var(--gold)}
.nav .btn{padding:11px 22px;font-size:15px}
@media(max-width:900px){.nav-links{display:none}}

/* ── TORAN GARLAND SIGNATURE ── */
.toran{height:26px;background:
  radial-gradient(circle 13px at 13px -2px,var(--gold) 96%,transparent),
  radial-gradient(circle 13px at 39px -2px,var(--accent-soft) 96%,transparent);
  background-size:52px 26px;background-repeat:repeat-x;
  filter:drop-shadow(0 3px 4px rgba(74,13,13,.25))}

/* ── HERO ── */
.hero{background:var(--accent-hero);color:var(--cream);padding:64px 0 88px;position:relative;overflow:hidden}
.hero::before{content:"ॐ";position:absolute;right:-50px;bottom:-100px;font-family:var(--display);font-size:440px;color:rgba(232,163,23,.06);line-height:1;pointer-events:none}
.hero::after{content:"";position:absolute;top:0;right:0;width:55%;height:100%;background:radial-gradient(ellipse at 70% 40%,rgba(232,163,23,.13),transparent 65%);pointer-events:none}
.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:52px;align-items:center;position:relative;z-index:1}

.eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(232,163,23,.18);border:1px solid rgba(232,163,23,.5);color:var(--gold);font-weight:700;font-size:13.5px;letter-spacing:.08em;padding:7px 16px;border-radius:999px;margin-bottom:20px}
.hero h1{font-size:clamp(32px,4.4vw,54px);color:var(--cream);margin-bottom:8px}
.hero h1 .gold{color:var(--gold)}
.hero .shloka{font-family:var(--display);color:rgba(255,248,236,.88);font-size:clamp(14px,1.5vw,17px);font-style:italic;margin:4px 0 6px;border-left:3px solid var(--gold);padding-left:14px;line-height:1.5}
.hero .shloka-tr{font-size:13px;color:rgba(255,248,236,.65);padding-left:17px;margin-bottom:18px}
.hero p.sub{font-size:clamp(16px,1.6vw,19px);color:rgba(255,248,236,.88);max-width:560px;margin-bottom:26px}
.hero p.sub b{color:var(--gold)}
.hero-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:26px}
.trust-chips{display:flex;flex-wrap:wrap;gap:10px 18px;font-size:14.5px;color:rgba(255,248,236,.82)}
.trust-chips span{display:inline-flex;align-items:center;gap:7px}
.trust-chips i{color:var(--gold);font-style:normal}

/* Hero card */
.puja-card{background:var(--cream);color:var(--ink);border-radius:20px;box-shadow:var(--shadow-lift);overflow:hidden;border:1px solid rgba(92,61,153,.35)}
.card-top{background:linear-gradient(120deg,var(--accent),var(--accent-soft));padding:18px 24px;color:#fff}
.card-top h3{font-size:21px;color:#fff;margin-bottom:2px}
.card-top small{font-weight:700;font-size:12px;letter-spacing:.13em;text-transform:uppercase;opacity:.85}
.card-body{padding:22px 24px}
.fact{display:flex;justify-content:space-between;gap:14px;padding:11px 0;border-bottom:1px dashed var(--line);font-size:15.5px}
.fact:last-of-type{border-bottom:none}
.fact b{color:var(--maroon)}
.fact .val{text-align:right;color:var(--ink-soft);font-weight:600}
.card-price-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0 6px}
.cp{text-align:center;background:var(--cream-deep);border-radius:10px;padding:12px 10px;border:1px solid var(--line)}
.cp small{display:block;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-soft);margin-bottom:4px}
.cp b{font-family:var(--display);font-size:26px;color:var(--maroon)}
.cp.hot{background:linear-gradient(135deg,#F3E9FF,#E8D6FF);border-color:var(--accent-soft)}
.cp.hot b{color:var(--accent)}
.puja-card .btn{width:100%;margin-top:10px}
.card-note{text-align:center;font-size:13px;color:var(--tulsi);font-weight:600;margin-top:10px}
@media(max-width:920px){.hero-grid{grid-template-columns:1fr}.hero{padding:48px 0 66px}}

/* ── COUNTDOWN STRIP ── */
.countdown{position:sticky;top:72px;z-index:55;background:linear-gradient(90deg,#1E0A45,#3A1880,#1E0A45);border-top:1px solid rgba(232,163,23,.4);border-bottom:1px solid rgba(232,163,23,.4);color:var(--cream)}
.cd-inner{max-width:var(--wrap);margin:0 auto;padding:12px 22px;display:flex;align-items:center;justify-content:center;gap:22px;flex-wrap:wrap}
.cd-label{font-weight:700;font-size:14px;letter-spacing:.06em;color:var(--gold);text-transform:uppercase}
.cd-units{display:flex;gap:10px}
.cd-box{background:rgba(255,248,236,.08);border:1px solid rgba(232,163,23,.35);border-radius:10px;min-width:64px;padding:6px 10px;text-align:center}
.cd-box b{display:block;font-family:var(--display);font-size:24px;color:var(--gold);line-height:1.1}
.cd-box small{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,248,236,.75)}
.countdown .btn{padding:10px 22px;font-size:14.5px}
@media(max-width:680px){.countdown{top:64px}.cd-label{width:100%;text-align:center}}

/* ── GENERIC SECTION ── */
.alt{background:var(--cream-deep)}
.diya-divider{display:flex;align-items:center;justify-content:center;gap:16px;margin:0 auto 18px;color:var(--accent)}
.diya-divider::before,.diya-divider::after{content:"";height:1px;width:90px;background:linear-gradient(90deg,transparent,var(--accent))}
.diya-divider::after{background:linear-gradient(90deg,var(--accent),transparent)}
.diya-divider span{font-size:22px}

/* ── SIGNIFICANCE / STORY ── */
.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;margin-top:38px}
.story-grid p{margin-bottom:16px;color:var(--ink-soft)}
.story-grid p b{color:var(--maroon)}
.tradition-cards{display:grid;gap:14px}
.trad{display:flex;gap:14px;background:#fff;border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:10px;padding:16px 18px}
.trad .t-icon{font-size:24px;line-height:1;flex-shrink:0}
.trad h4{font-family:var(--body);font-weight:700;color:var(--maroon);font-size:16px;margin-bottom:3px}
.trad p{font-size:14.5px;color:var(--ink-soft)}

/* Jupiter astro band */
.astro-band{margin-top:40px;background:linear-gradient(120deg,#F0E9FF,#E4D5FF);border:1px solid var(--accent-soft);border-radius:var(--radius);padding:28px 30px}
.astro-band-inner{display:flex;gap:20px;align-items:flex-start}
.astro-icon{font-size:36px;line-height:1;flex-shrink:0}
.astro-band h3{font-size:22px;color:var(--accent);margin-bottom:8px}
.astro-band p{color:var(--ink-soft);font-size:15.5px;margin-bottom:10px}
.astro-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:6px}
.a-tag{background:var(--accent);color:#fff;font-size:13px;font-weight:700;padding:5px 14px;border-radius:999px}
@media(max-width:920px){.story-grid{grid-template-columns:1fr}}

/* ── CHALLENGES (pain points) ── */
.pain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:38px}
.pain{background:#fff;border:1px solid var(--line);border-top:3px solid var(--saffron);border-radius:var(--radius);padding:22px 20px;text-align:center}
.pain .p-icon{font-size:30px;margin-bottom:10px}
.pain h3{font-size:16.5px;font-family:var(--body);font-weight:700;color:var(--maroon);margin-bottom:6px}
.pain p{font-size:14px;color:var(--ink-soft)}
.pain-note{margin-top:32px;background:linear-gradient(120deg,#FFF3E0,#FFE5D0);border:1px solid var(--saffron);border-radius:var(--radius);padding:22px 28px;display:flex;gap:16px;align-items:center}
.pain-note .pn-icon{font-size:32px;flex-shrink:0}
.pain-note p{color:var(--ink);font-size:16px}
.pain-note p b{color:var(--saffron)}
@media(max-width:880px){.pain-grid{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.pain-grid{grid-template-columns:1fr}}

/* ── BENEFITS ── */
.benefits{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:38px}
.benefit{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:24px 20px;box-shadow:var(--shadow);transition:transform .2s,box-shadow .2s}
.benefit:hover{transform:translateY(-4px);box-shadow:var(--shadow-lift)}
.benefit .b-icon{width:46px;height:46px;border-radius:12px;background:linear-gradient(135deg,#E4D5FF,#C8A8FF);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:14px}
.benefit h3{font-size:16.5px;font-family:var(--body);font-weight:700;color:var(--accent);margin-bottom:6px}
.benefit p{font-size:14px;color:var(--ink-soft)}
@media(max-width:980px){.benefits{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.benefits{grid-template-columns:1fr}}

/* ── WHO SHOULD BOOK ── */
.who-list{display:grid;grid-template-columns:1fr 1fr;gap:14px 28px;margin-top:34px}
.who{display:flex;gap:14px;background:#fff;border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:10px;padding:16px 18px;font-size:15.5px;color:var(--ink-soft)}
.who i{font-style:normal;color:var(--tulsi);font-weight:800;flex-shrink:0}
.who b{color:var(--maroon)}
@media(max-width:760px){.who-list{grid-template-columns:1fr}}

/* ── PUJA MUHURAT CARD ── */
.muhurat-card{margin-top:36px;background:linear-gradient(150deg,#1E0A45,#3A1880);border-radius:20px;color:var(--cream);overflow:hidden;box-shadow:var(--shadow-lift)}
.muhurat-head{background:linear-gradient(120deg,var(--gold),#F4C159);color:var(--maroon);padding:20px 30px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
.muhurat-head h3{font-size:24px;color:var(--maroon)}
.muhurat-head .day-tag{background:var(--accent);color:#fff;font-weight:700;font-size:13px;letter-spacing:.1em;padding:7px 16px;border-radius:999px}
.muhurat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(232,163,23,.2)}
.m-cell{background:rgba(30,10,69,.85);padding:22px}
.m-cell small{display:block;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);font-weight:700;margin-bottom:6px}
.m-cell b{font-size:17px;font-weight:600;color:var(--cream)}
.muhurat-foot{padding:18px 30px;font-size:14.5px;background:rgba(10,4,30,.5);color:rgba(255,248,236,.85)}
.muhurat-foot b{color:var(--gold)}
@media(max-width:880px){.muhurat-grid{grid-template-columns:repeat(2,1fr)}}

/* ── VIDHI STEPS ── */
.vidhi{counter-reset:step;display:grid;grid-template-columns:1fr 1fr;gap:18px 26px;margin-top:38px}
.step{position:relative;background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:22px 22px 20px 78px;box-shadow:var(--shadow)}
.step::before{counter-increment:step;content:counter(step,decimal-leading-zero);position:absolute;left:18px;top:20px;width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-soft));color:var(--gold);font-family:var(--display);font-size:19px;display:flex;align-items:center;justify-content:center}
.step h3{font-size:17px;font-family:var(--body);font-weight:700;color:var(--maroon);margin-bottom:4px}
.step p{font-size:14.5px;color:var(--ink-soft)}
@media(max-width:760px){.vidhi{grid-template-columns:1fr}}

/* ── AFTER BOOKING ── */
.after-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:38px;counter-reset:aft}
.aft{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:48px 14px 18px;text-align:center;position:relative;font-size:14px;color:var(--ink-soft)}
.aft::before{counter-increment:aft;content:counter(aft);position:absolute;top:-14px;left:50%;transform:translateX(-50%);width:30px;height:30px;border-radius:50%;background:var(--gold);color:var(--maroon);font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;border:3px solid var(--cream-deep)}
.aft .a-icon{font-size:28px;display:block;margin-bottom:8px}
.aft b{display:block;color:var(--maroon);margin-bottom:3px;font-size:15px}
@media(max-width:980px){.after-grid{grid-template-columns:repeat(3,1fr);row-gap:28px}}
@media(max-width:560px){.after-grid{grid-template-columns:1fr 1fr}}

/* ── WHY US ── */
.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:38px}
.why{background:linear-gradient(150deg,#1E0A45,#3A1880);color:rgba(255,248,236,.88);border-radius:var(--radius);padding:26px 22px;transition:transform .2s}
.why:hover{transform:translateY(-4px)}
.why .w-icon{font-size:28px;margin-bottom:12px}
.why h3{color:var(--gold);font-size:17px;font-family:var(--body);font-weight:700;margin-bottom:6px}
.why p{font-size:14px}
@media(max-width:980px){.why-grid{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.why-grid{grid-template-columns:1fr}}

/* ── TESTIMONIALS ── */
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:38px}
.testi{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:26px;box-shadow:var(--shadow)}
.stars{color:var(--gold-deep);letter-spacing:3px;margin-bottom:10px;font-size:17px}
.testi p{font-size:15px;color:var(--ink-soft);margin-bottom:16px}
.testi .t-name{display:flex;align-items:center;gap:12px}
.t-avatar{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-soft));color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.t-name b{display:block;color:var(--maroon);font-size:15px}
.t-name small{color:var(--ink-soft);font-size:13px}
@media(max-width:880px){.testi-grid{grid-template-columns:1fr}}

/* ── CTA / BOOKING SECTION ── */
.cta-section{background:linear-gradient(160deg,#150630,#2B1060,#150630);color:var(--cream);position:relative;overflow:hidden}
.cta-section::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 900px 400px at 80% 50%,rgba(232,163,23,.12),transparent 65%);pointer-events:none}
.cta-section h2{color:var(--cream)}
.cta-section .kicker{color:var(--gold)}
.cta-grid{display:grid;grid-template-columns:1fr 1fr;gap:44px;margin-top:40px;align-items:start;position:relative;z-index:1}

/* pricing */
.price-header{font-family:var(--display);font-size:20px;color:var(--gold);margin-bottom:16px}
.price-cards{display:grid;gap:16px}
.price-card{background:rgba(255,248,236,.06);border:1.5px solid rgba(232,163,23,.3);border-radius:var(--radius);padding:22px 24px;display:flex;align-items:center;gap:16px;cursor:pointer;transition:background .18s,border-color .18s}
.price-card:hover{background:rgba(232,163,23,.1);border-color:var(--gold)}
.price-card.selected{background:rgba(232,163,23,.15);border-color:var(--gold);box-shadow:0 0 0 3px rgba(232,163,23,.25)}
.pc-radio{width:22px;height:22px;border-radius:50%;border:2px solid rgba(232,163,23,.6);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:background .15s}
.price-card.selected .pc-radio{background:var(--gold);border-color:var(--gold)}
.price-card.selected .pc-radio::after{content:"";width:8px;height:8px;border-radius:50%;background:var(--maroon)}
.pc-info{flex:1}
.pc-info h3{font-family:var(--body);font-weight:700;font-size:18px;color:var(--cream);margin-bottom:2px}
.pc-info p{font-size:13.5px;color:rgba(255,248,236,.7)}
.pc-amt{font-family:var(--display);font-size:30px;color:var(--gold);white-space:nowrap}
.pop-tag{display:inline-block;background:var(--saffron);color:#fff;font-size:11px;font-weight:800;letter-spacing:.08em;padding:3px 10px;border-radius:999px;margin-left:8px;vertical-align:middle}
.pay-row{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.pay-badge{background:rgba(255,248,236,.1);border:1px solid rgba(255,248,236,.25);border-radius:8px;padding:8px 14px;font-size:13px;font-weight:600;color:rgba(255,248,236,.85)}
.secure-line{margin-top:14px;font-size:13.5px;color:var(--tulsi);background:rgba(255,248,236,.92);display:inline-flex;align-items:center;gap:8px;font-weight:700;padding:8px 16px;border-radius:999px}
.contact-block{margin-top:26px;background:rgba(255,248,236,.06);border:1px solid rgba(232,163,23,.25);border-radius:var(--radius);padding:20px 22px}
.contact-block h4{font-family:var(--body);font-weight:700;color:var(--gold);font-size:16px;margin-bottom:12px}
.contact-block p{font-size:15px;color:rgba(255,248,236,.85);margin-bottom:7px}
.contact-block b{color:var(--gold)}

/* form */
.form-card{background:var(--cream);color:var(--ink);border-radius:20px;padding:32px;box-shadow:0 20px 60px rgba(0,0,0,.4)}
.form-card h3{font-size:24px;margin-bottom:4px;color:var(--accent)}
.form-card .f-sub{font-size:14.5px;color:var(--ink-soft);margin-bottom:20px}
.f-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.f-group{margin-bottom:14px}
label{display:block;font-weight:700;font-size:13.5px;color:var(--maroon);margin-bottom:6px}
input,select,textarea{width:100%;font-family:var(--body);font-size:15.5px;padding:13px 14px;border:1.5px solid var(--line);border-radius:10px;background:#fff;color:var(--ink)}
input:focus,select:focus,textarea:focus{border-color:var(--accent);outline:none;box-shadow:0 0 0 3px var(--accent-glow)}
textarea{resize:vertical;min-height:80px}
.form-card .btn{width:100%;margin-top:6px}
.form-note{text-align:center;font-size:12.5px;color:var(--ink-soft);margin-top:12px}
@media(max-width:920px){.cta-grid{grid-template-columns:1fr}.f-row{grid-template-columns:1fr}}

/* ── FAQ ── */
.faq-list{max-width:820px;margin:38px auto 0}
details{background:#fff;border:1px solid var(--line);border-radius:12px;margin-bottom:12px;overflow:hidden}
summary{cursor:pointer;list-style:none;padding:18px 22px;font-weight:700;color:var(--maroon);font-size:16.5px;display:flex;justify-content:space-between;align-items:center;gap:14px}
summary::-webkit-details-marker{display:none}
summary::after{content:"+";font-family:var(--display);font-size:24px;color:var(--accent);transition:transform .2s}
details[open] summary::after{transform:rotate(45deg)}
details .faq-a{padding:0 22px 18px;color:var(--ink-soft);font-size:15px}

/* ── FOOTER ── */
footer{background:#0F0422;color:rgba(255,248,236,.78);padding:54px 0 110px}
.foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:36px}
.foot-grid h4{font-family:var(--display);color:var(--gold);font-size:19px;margin-bottom:12px;font-weight:400}
.foot-grid ul{list-style:none}
.foot-grid li{margin-bottom:8px;font-size:14.5px}
.foot-grid a{text-decoration:none;color:rgba(255,248,236,.78)}
.foot-grid a:hover{color:var(--gold)}
.foot-bottom{border-top:1px solid rgba(232,163,23,.2);margin-top:36px;padding-top:20px;font-size:13px;text-align:center;color:rgba(255,248,236,.5)}
@media(max-width:760px){.foot-grid{grid-template-columns:1fr}}

/* ── STICKY MOBILE CTA ── */
.sticky-cta{position:fixed;bottom:0;left:0;right:0;z-index:70;background:linear-gradient(90deg,#1E0A45,#3A1880);border-top:2px solid var(--gold);padding:10px 16px;display:none;align-items:center;justify-content:space-between;gap:12px;box-shadow:0 -8px 24px rgba(0,0,0,.35)}
.sticky-cta .s-info b{display:block;color:var(--gold);font-size:14.5px;line-height:1.2}
.sticky-cta .s-info small{color:rgba(255,248,236,.8);font-size:12px}
.sticky-cta .btn{padding:12px 22px;font-size:15px;white-space:nowrap}
@media(max-width:840px){.sticky-cta{display:flex}footer{padding-bottom:130px}}

/* ── INCLUDED ── */
.included{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:36px}
.inc{display:flex;gap:12px;align-items:flex-start;background:#fff;border:1px solid var(--line);border-radius:10px;padding:16px 18px;font-size:15px;color:var(--ink-soft)}
.inc i{font-style:normal;color:#fff;background:var(--tulsi);border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0;margin-top:2px}
.inc b{color:var(--maroon)}
@media(max-width:880px){.included{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.included{grid-template-columns:1fr}}
      `}</style>

      {/* ================= PAGE DESIGN START ================= */}

      {/* ── ANNOUNCE STRIP ── */}
      <div className="announce">
        🪔 <b>Guru Purnima 2026: Wednesday, 29 July</b> — Sankalp booking
        closes 28 July, 6 PM IST &nbsp;|&nbsp; Group ₹1,100 &nbsp;·&nbsp;
        Individual ₹3,100
      </div>

      {/* ── HEADER ── */}
      <header>
        <nav className="nav" aria-label="Main">
          <a className="logo" href="#">
            <span className="logo-mark">ॐ</span>
            <span className="logo-name">
              Bajrangi Dhaam
              <small>AUTHENTIC VEDIC PUJA SEVA</small>
            </span>
          </a>

          <ul className="nav-links">
            <li><a href="#significance">Significance</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#vidhi">Puja Vidhi</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>

          <a className="btn btn-gold" href="#book">
            Book Puja Now
          </a>
        </nav>
      </header>

      <div className="toran" aria-hidden={true}></div>

      {/* ── HERO ── */}
      <div className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">
              🌕 Ashadha Purnima · 29 July 2026 · Once a Year
            </span>

            <h1>
              Book Guru Purnima Puja Online 2026 —
              <br />
              <span className="gold">
                Invite Jupiter&apos;s Blessings. Transform Your Life.
              </span>
            </h1>

            <p className="shloka">
              गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः।
              <br />
              गुरुः साक्षात् परब्रह्म तस्मै श्री गुरवे नमः॥
            </p>

            <p className="shloka-tr">
              &quot;The Guru is Brahma, Vishnu and Maheshwara. The Guru is the
              Supreme Brahman himself. I bow to that revered Guru.&quot;
            </p>

            <p className="sub">
              Guru Purnima is the one day in the year when the cosmic door to your
              Guru&apos;s grace stands wide open.{" "}
              <b>If Jupiter is weak in your horoscope</b> — or life feels stuck
              despite every effort — this is your divine appointment. Our Vedic
              pandits will perform the complete puja <b>in your name &amp; gotra</b>,
              with live darshan and prasad at your door.
            </p>

            <div className="hero-ctas">
              <a className="btn btn-gold btn-big" href="#book">
                Book Guru Purnima Puja Online →
              </a>

              <a className="btn btn-line" href="#significance">
                Know the Significance ↓
              </a>
            </div>

            <div className="trust-chips">
              <span><i>✔</i> 10,000+ Pujas Performed</span>
              <span><i>✔</i> Sankalp with Your Name &amp; Gotra</span>
              <span><i>✔</i> Live Darshan</span>
              <span><i>✔</i> Prasad Home Delivery</span>
            </div>
          </div>

          {/* Hero summary card */}
          <aside className="puja-card">
            <div className="card-top">
              <small>This Puja At A Glance</small>
              <h3>Guru Purnima Maha Puja 2026</h3>
            </div>

            <div className="card-body">
              <div className="fact">
                <b>📅 Puja Date</b>
                <span className="val">Wed, 29 July 2026</span>
              </div>

              <div className="fact">
                <b>🛕 Deity</b>
                <span className="val">Guru Brihaspati · Veda Vyasa</span>
              </div>

              <div className="fact">
                <b>🕉️ Performed By</b>
                <span className="val">Vedic Pandits, Bajrangi Dhaam</span>
              </div>

              <div className="fact">
                <b>📿 Includes</b>
                <span className="val">Sankalp · Havan · Daan · Prasad</span>
              </div>

              <div className="card-price-row">
                <div className="cp">
                  <small>Group Puja</small>
                  <b>₹1,100</b>
                </div>

                <div className="cp hot">
                  <small>Individual</small>
                  <b>₹3,100</b>
                </div>
              </div>

              <a className="btn btn-gold" href="#book">
                Reserve My Sankalp →
              </a>

              <p className="card-note">
                🟢 Limited Sankalp slots for this muhurat
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* ── COUNTDOWN ── */}
      <div
        className="countdown"
        role="timer"
        aria-label="Time left to book"
      >
        <div className="cd-inner">
          <span className="cd-label">
            {countdown.expired
              ? "🌕 Guru Purnima 2026 Sankalp booking is now closed"
              : "⏳ Guru Purnima Booking Closes In"}
          </span>

          <div className="cd-units">
            <div className="cd-box">
              <b>{countdown.days}</b>
              <small>Days</small>
            </div>

            <div className="cd-box">
              <b>{countdown.hours}</b>
              <small>Hrs</small>
            </div>

            <div className="cd-box">
              <b>{countdown.minutes}</b>
              <small>Min</small>
            </div>

            <div className="cd-box">
              <b>{countdown.seconds}</b>
              <small>Sec</small>
            </div>
          </div>

          <a className="btn btn-gold" href="#book">
            Book Before It Closes
          </a>
        </div>
      </div>



      {/* ── SIGNIFICANCE ── */}
      <section id="significance">
        <div className="wrap">
          <div className="center">
            <div className="diya-divider">
              <span>🌕</span>
            </div>

            <span className="kicker">The Supreme Day of the Guru</span>

            <h2>The Significance of Guru Purnima</h2>

            <p className="lede">
              What is Guru Purnima? Why is it celebrated? And why does Vedic
              astrology call it the single most powerful day for knowledge, fortune,
              and spiritual growth?
            </p>
          </div>

          <div className="story-grid">
            <div>
              <p>
                <b>Guru Purnima</b> falls on the full moon (Purnima) of the month of
                Ashadha (June–July) in the Hindu calendar — also known as{" "}
                <b>Vyasa Purnima</b>, commemorating the birth of Sage Ved Vyasa, the
                Adi Guru who compiled the four Vedas, the 18 Puranas, and the
                Mahabharata, gifting humanity its greatest reservoir of wisdom.
              </p>

              <p>
                The word <b>&quot;Guru&quot;</b> is itself a mantra: <em>Gu</em> means
                darkness, <em>Ru</em> means remover — the Guru is the one who removes
                the darkness of ignorance and lights the path toward truth. In Hindu
                dharma, the Guru is revered as equal to Brahma, Vishnu and Shiva —
                the supreme teacher who gives us our second, real birth.
              </p>

              <p>
                This is why <b>Guru Purnima is celebrated</b> across Hindu, Buddhist
                and Jain traditions — each recognising a sacred moment of teaching
                that changed the world. On this full moon,{" "}
                <b>
                  the cosmos itself aligns to amplify the flow of grace from Guru to
                  disciple
                </b>
                . What you seek with a sincere heart today reaches you faster than on
                any other day of the year.
              </p>

              <p>
                In 2026, <b>Guru Purnima falls on Wednesday, 29 July</b>, with the
                Purnima tithi beginning on 28 July at 6:28 PM and ending on 29 July
                at 8:00 PM.
              </p>
            </div>

            <div className="tradition-cards">
              <div className="trad">
                <span className="t-icon">📖</span>

                <div>
                  <h4>Hindu Tradition — Vyasa Purnima</h4>

                  <p>
                    Devotees worship Sage Veda Vyasa as the Adi Guru who codified all
                    Vedic knowledge. This is the day to honor every teacher who has
                    shaped your life.
                  </p>
                </div>
              </div>

              <div className="trad">
                <span className="t-icon">☸️</span>

                <div>
                  <h4>Buddhist Tradition</h4>

                  <p>
                    Lord Buddha gave his first sermon (Dharma Chakra Pravartan) at
                    Sarnath on this very full moon, setting his five disciples on the
                    path to liberation.
                  </p>
                </div>
              </div>

              <div className="trad">
                <span className="t-icon">⚖️</span>

                <div>
                  <h4>Jain Tradition</h4>

                  <p>
                    Lord Mahavira initiated Gautam Swami as his first disciple on
                    Ashadha Purnima — making this the sacred day of the Guru-Shishya
                    parampara across all dharmic traditions.
                  </p>
                </div>
              </div>

              <div className="trad">
                <span className="t-icon">♃</span>

                <div>
                  <h4>Vedic Astrology</h4>

                  <p>
                    Jupiter (Guru Brihaspati) governs wisdom, higher education,
                    wealth, marriage and children. Worship on Guru Purnima directly
                    pacifies Guru Dosha and amplifies Jupiter&apos;s blessings in your
                    horoscope.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="astro-band">
            <div className="astro-band-inner">
              <div className="astro-icon">♃</div>

              <div>
                <h3>Why 2026 is Exceptionally Powerful for Guru Purnima</h3>

                <p>
                  In 2026,{" "}
                  <b>
                    Jupiter transits into Cancer (Karka Rashi) — its sign of
                    exaltation
                  </b>
                  . An exalted Jupiter is the most powerful form of this planet; its
                  blessings for education, career, marriage, children, wealth and
                  spiritual growth are magnified to their peak. This happens only
                  once in every 12 years. Performing Guru Purnima Puja in 2026 during
                  Jupiter&apos;s exaltation is a{" "}
                  <b>once-in-a-12-year opportunity</b> that the wise should not miss.
                </p>

                <p>
                  Additionally, on Guru Purnima the Moon transits Sagittarius (ruled
                  by Jupiter) and Purvashadha Nakshatra — creating a rare alignment
                  where{" "}
                  <b>both luminaries resonate with Jupiter&apos;s frequency</b>. The
                  planetary doors to wisdom, prosperity and grace are wide open.
                </p>

                <div className="astro-tags">
                  <span className="a-tag">Jupiter Exalted in Cancer</span>
                  <span className="a-tag">Moon in Sagittarius</span>
                  <span className="a-tag">Purvashadha Nakshatra</span>
                  <span className="a-tag">Once in 12 Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES / PAIN ── */}
      <section className="alt">
        <div className="wrap">
          <div className="center">
            <div className="diya-divider">
              <span>🌕</span>
            </div>

            <span className="kicker">Is Jupiter Blocking Your Path?</span>

            <h2>Are You Facing These Challenges in Life?</h2>

            <p className="lede">
              In Vedic astrology, these struggles are often signs of a weak,
              afflicted or combust Jupiter — and Guru Purnima Puja is the most
              powerful remedy.
            </p>
          </div>

          <div className="pain-grid">
            <div className="pain">
              <div className="p-icon">📚</div>
              <h3>Struggles in Education</h3>
              <p>
                Persistent difficulty in studies, exams, memory or finding the right
                direction in life.
              </p>
            </div>

            <div className="pain">
              <div className="p-icon">💼</div>
              <h3>Career Stagnation</h3>
              <p>
                Promotions blocked, efforts not recognised, or a sense that
                you&apos;re simply not moving forward.
              </p>
            </div>

            <div className="pain">
              <div className="p-icon">💍</div>
              <h3>Delayed Marriage</h3>
              <p>
                Suitable alliances not materialising, or repeated breakdowns in
                relationships and proposals.
              </p>
            </div>

            <div className="pain">
              <div className="p-icon">👶</div>
              <h3>Child-Related Worries</h3>
              <p>
                Difficulty in conception, or concerns about the health and future of
                your children.
              </p>
            </div>

            <div className="pain">
              <div className="p-icon">💰</div>
              <h3>Financial Instability</h3>
              <p>
                Income not growing, unexpected losses, or wealth not staying despite
                hard work.
              </p>
            </div>

            <div className="pain">
              <div className="p-icon">🧠</div>
              <h3>Loss of Wisdom &amp; Clarity</h3>
              <p>
                Feeling confused, indecisive, or losing confidence and optimism about
                the future.
              </p>
            </div>
          </div>

          <div className="pain-note">
            <div className="pn-icon">⚡</div>

            <p>
              If even two of these resonate with you,{" "}
              <b>your Jupiter (Guru) is likely afflicted in your horoscope</b>. Guru
              Purnima Puja — the one day in the year when Jupiter&apos;s grace flows
              most freely — is your most powerful and time-tested remedy.
            </p>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits">
        <div className="wrap">
          <div className="center">
            <div className="diya-divider">
              <span>🌕</span>
            </div>

            <span className="kicker">What Guru&apos;s Grace Brings</span>

            <h2>What Benefits Can You Receive Through Guru Purnima Puja?</h2>

            <p className="lede">
              Every benefit that a strong, well-placed Jupiter delivers in a
              horoscope flows to you through the grace of this puja.
            </p>
          </div>

          <div className="benefits">
            <div className="benefit">
              <div className="b-icon">♃</div>
              <h3>Strong Jupiter in Horoscope</h3>
              <p>
                Direct remedy for Guru Dosha — Jupiter&apos;s malefic effects weaken
                and benefic effects amplify.
              </p>
            </div>

            <div className="benefit">
              <div className="b-icon">🎓</div>
              <h3>Success in Education</h3>
              <p>
                Clarity, memory, focus and right guidance for students and those
                seeking knowledge.
              </p>
            </div>

            <div className="benefit">
              <div className="b-icon">💼</div>
              <h3>Career Growth</h3>
              <p>
                Recognition, promotions and new opportunities open when Jupiter
                blesses your professional life.
              </p>
            </div>

            <div className="benefit">
              <div className="b-icon">💍</div>
              <h3>Early &amp; Happy Marriage</h3>
              <p>
                Jupiter&apos;s grace removes obstacles in marriage and brings a
                compatible, suitable partner.
              </p>
            </div>

            <div className="benefit">
              <div className="b-icon">👶</div>
              <h3>Blessings for Children</h3>
              <p>
                Removes delays in conception and protects the health and future of
                your children.
              </p>
            </div>

            <div className="benefit">
              <div className="b-icon">💰</div>
              <h3>Wealth &amp; Prosperity</h3>
              <p>
                Jupiter is the karaka of wealth — a strong Guru fills the home with
                abundance.
              </p>
            </div>

            <div className="benefit">
              <div className="b-icon">🧘</div>
              <h3>Wisdom &amp; Spiritual Growth</h3>
              <p>
                Mental clarity, inner peace, dharmic direction and a deepened
                spiritual life.
              </p>
            </div>

            <div className="benefit">
              <div className="b-icon">🙏</div>
              <h3>Guru&apos;s Eternal Grace</h3>
              <p>
                The blessings of your Guru, the Adi Guru Veda Vyasa and Lord
                Brihaspati together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD BOOK ── */}
      <section className="alt">
        <div className="wrap">
          <div className="center">
            <div className="diya-divider">
              <span>🌕</span>
            </div>

            <span className="kicker">Is This Puja Calling You?</span>

            <h2>Who Should Book This Guru Purnima Puja?</h2>

            <p className="lede">
              If any one of these speaks to your life right now, this puja is meant
              for you.
            </p>
          </div>

          <div className="who-list">
            <div className="who">
              <i>✔</i>

              <span>
                Individuals with <b>weak, retrograde or combust Jupiter</b> in their
                birth chart.
              </span>
            </div>

            <div className="who">
              <i>✔</i>

              <span>
                Students and professionals facing{" "}
                <b>obstacles in education or career growth</b>.
              </span>
            </div>

            <div className="who">
              <i>✔</i>

              <span>
                Those experiencing <b>delays in marriage</b> despite every sincere
                effort.
              </span>
            </div>

            <div className="who">
              <i>✔</i>

              <span>
                Couples seeking <b>children</b> or worried about their child&apos;s
                health and future.
              </span>
            </div>

            <div className="who">
              <i>✔</i>

              <span>
                Anyone suffering from <b>Guru Dosha</b> — lack of prosperity,
                confidence, harmony.
              </span>
            </div>

            <div className="who">
              <i>✔</i>

              <span>
                Those who feel <b>lost, lacking direction</b> or without the right
                mentor in life.
              </span>
            </div>

            <div className="who">
              <i>✔</i>

              <span>
                Devotees who want to express <b>gratitude to their Guru</b> through a
                formal puja.
              </span>
            </div>

            <div className="who">
              <i>✔</i>

              <span>
                <b>Everyone</b> — because in a year when Jupiter is exalted in
                Cancer, this is the single greatest spiritual and astrological
                opportunity of the decade.
              </span>
            </div>
          </div>
        </div>
      </section>

      ```jsx
      {/* ── PUJA DATE & MUHURAT ── */}
      <section>
        <div className="wrap">
          <div className="center">
            <div className="diya-divider">
              <span>🌕</span>
            </div>

            <span className="kicker">Guru Purnima 2026 Puja Muhurat</span>

            <h2>Puja Date, Timing &amp; Booking Deadline</h2>

            <p className="lede">
              A missed muhurat is a missed opportunity that returns only in 2027.
              Secure your Sankalp today.
            </p>
          </div>

          <div className="muhurat-card">
            <div className="muhurat-head">
              <h3>📅 Wednesday, 29 July 2026 — Ashadha Purnima</h3>

              <span className="day-tag">
                ♃ JUPITER EXALTED IN CANCER 2026
              </span>
            </div>

            <div className="muhurat-grid">
              <div className="m-cell">
                <small>Purnima Tithi Begins</small>
                <b>28 July, 6:28 PM</b>
              </div>

              <div className="m-cell">
                <small>Purnima Tithi Ends</small>
                <b>29 July, 8:00 PM</b>
              </div>

              <div className="m-cell">
                <small>Puja Muhurat</small>
                <b>29 July, Brahma Muhurat onward</b>
              </div>

              <div className="m-cell">
                <small>Moon&apos;s Transit</small>
                <b>Sagittarius · Purvashadha Nakshatra</b>
              </div>
            </div>

            <div className="muhurat-foot">
              ⏰ <b>Booking Deadline:</b> Complete your Guru Purnima Puja Booking
              Online before <b>28 July 2026, 6:00 PM IST</b> to have your name and
              gotra included in the Sankalp. Bookings received after the deadline are
              added to the next available puja.
            </div>
          </div>
        </div>
      </section>

      {/* ── PUJA VIDHI ── */}
      <section className="alt" id="vidhi">
        <div className="wrap">
          <div className="center">
            <div className="diya-divider">
              <span>🌕</span>
            </div>

            <span className="kicker">Shastra-Sammat Rituals</span>

            <h2>Guru Purnima Puja Vidhi — What Our Pandits Perform</h2>

            <p className="lede">
              The complete Guru Purnima Puja Vidhi as prescribed by Vedic
              scriptures, performed step by step in your name.
            </p>
          </div>

          <div className="vidhi">
            <div className="step">
              <h3>Sankalp — In Your Name &amp; Gotra</h3>
              <p>
                The puja begins with a formal vow in your name, gotra and manokamna —
                so every drop of punya flows directly to you.
              </p>
            </div>

            <div className="step">
              <h3>Guru Sthan Sthapana &amp; Kalash</h3>
              <p>
                Setting up the sacred altar with images of Guru Veda Vyasa, Lord
                Brihaspati and your personal Guru; establishment of the holy Kalash.
              </p>
            </div>

            <div className="step">
              <h3>Guru Brihaspati Puja &amp; Abhishek</h3>
              <p>
                Ritual worship of Lord Brihaspati (Jupiter) with turmeric, yellow
                flowers, chandan, yellow cloth and sweets — the dearest offerings to
                Guru.
              </p>
            </div>

            <div className="step">
              <h3>Guru Stotram &amp; Brihaspati Mantra Jaap</h3>
              <p>
                Chanting of Guru Stotram, Brihaspati Kavacham and the beej mantra
                &quot;ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः&quot; — the supreme Jupiter
                mantra.
              </p>
            </div>

            <div className="step">
              <h3>Vyasa Puja &amp; Guru Charitra Path</h3>
              <p>
                Worship of Adi Guru Veda Vyasa with Pushpanjali and recitation of
                Guru Charitra to invoke the blessings of the entire Guru parampara.
              </p>
            </div>

            <div className="step">
              <h3>Guru Graha Shanti Havan</h3>
              <p>
                A dedicated Havan (sacred fire ritual) with Jupiter-pacifying herbs,
                ghee and Vedic mantras to cleanse Guru Dosha and strengthen Jupiter
                in your horoscope.
              </p>
            </div>

            <div className="step">
              <h3>Pada Puja &amp; Guru Dakshina</h3>
              <p>
                Padapuja of the Guru&apos;s sacred feet — the most ancient expression
                of reverence — followed by Guru Dakshina offered in your name.
              </p>
            </div>

            <div className="step">
              <h3>Aarti, Prasad &amp; Ashirvad</h3>
              <p>
                Concluding Aarti of Guru Brihaspati, followed by Pandit&apos;s
                special ashirvad for you, and prasad dispatch to your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INCLUDED ── */}
      <section>
        <div className="wrap">
          <div className="center">
            <div className="diya-divider">
              <span>🌕</span>
            </div>

            <span className="kicker">Everything Taken Care Of</span>

            <h2>What Is Included in Your Guru Purnima Puja Package?</h2>
          </div>

          <div className="included">
            <div className="inc">
              <i>✓</i>
              <span>
                <b>Sankalp in your name &amp; gotra</b> by the main pandit
              </span>
            </div>

            <div className="inc">
              <i>✓</i>
              <span>
                Complete <b>Guru Purnima Puja Vidhi</b> by Vedic pandits
              </span>
            </div>

            <div className="inc">
              <i>✓</i>
              <span>
                <b>Guru Brihaspati Abhishek</b> with turmeric &amp; yellow flowers
              </span>
            </div>

            <div className="inc">
              <i>✓</i>
              <span>
                <b>Brihaspati Mantra Jaap</b> &amp; Guru Stotram recitation
              </span>
            </div>

            <div className="inc">
              <i>✓</i>
              <span>
                <b>Guru Graha Shanti Havan</b> (fire ritual)
              </span>
            </div>

            <div className="inc">
              <i>✓</i>
              <span>
                <b>Vyasa Puja</b> &amp; Guru Dakshina in your name
              </span>
            </div>

            <div className="inc">
              <i>✓</i>
              <span>
                <b>Live video darshan</b> &amp; recording of your puja
              </span>
            </div>

            <div className="inc">
              <i>✓</i>
              <span>
                <b>Puja photos &amp; video</b> on WhatsApp / Email
              </span>
            </div>

            <div className="inc">
              <i>✓</i>
              <span>
                <b>Sacred prasad &amp; Jupiter yantra</b> home-delivered
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="alt" id="why-us">
        <div className="wrap">
          <div className="center">
            <div className="diya-divider">
              <span>🌕</span>
            </div>

            <span className="kicker">Devotion Without Compromise</span>

            <h2>Why Book Guru Purnima Puja at Bajrangi Dhaam?</h2>

            <p className="lede">
              The Guru&apos;s grace flows where the ritual is pure, the pandits are
              learned, and the devotee&apos;s name is truly in the Sankalp.
            </p>
          </div>

          <div className="why-grid">
            <div className="why">
              <div className="w-icon">🛕</div>
              <h3>Authentic Vedic Tradition</h3>
              <p>
                Complete puja as per Vedic scriptures, in sacred temple premises —
                not a rushed online ritual.
              </p>
            </div>

            <div className="why">
              <div className="w-icon">🔮</div>
              <h3>Astrology-Aligned Rituals</h3>
              <p>
                Guru Graha Shanti Havan specifically targets your horoscope&apos;s
                Jupiter weakness for maximum effect.
              </p>
            </div>

            <div className="why">
              <div className="w-icon">📿</div>
              <h3>Your Personal Sankalp</h3>
              <p>
                Your name, gotra and wish in every mantra. This is not a group
                prayer — it is your dedicated puja.
              </p>
            </div>

            <div className="why">
              <div className="w-icon">🧘</div>
              <h3>Experienced Karmakandi Pandits</h3>
              <p>
                Pandits trained specifically in Brihaspati puja and Guru rituals —
                every mantra exact, every ritual complete.
              </p>
            </div>

            <div className="why">
              <div className="w-icon">📹</div>
              <h3>Total Transparency</h3>
              <p>
                Live darshan link, puja video and photos delivered to you — you see
                every ritual performed.
              </p>
            </div>

            <div className="why">
              <div className="w-icon">🏠</div>
              <h3>Prasad to Your Doorstep</h3>
              <p>
                Sacred prasad and energised Jupiter yantra shipped across India and
                internationally.
              </p>
            </div>

            <div className="why">
              <div className="w-icon">💛</div>
              <h3>Trusted by Thousands</h3>
              <p>
                Devotees across India, the US, UK, Canada and the Gulf rely on
                Bajrangi Dhaam for authentic puja seva.
              </p>
            </div>

            <div className="why">
              <div className="w-icon">🤝</div>
              <h3>Dedicated Support</h3>
              <p>
                Our team guides you before, during and after the puja. No unanswered
                questions, ever.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ── STICKY MOBILE CTA ── */}
      <div className="sticky-cta">
        <div className="s-info">
          <b>Guru Purnima Puja · 29 July 2026</b>

          <small>Group ₹1,100 · Individual ₹3,100</small>
        </div>

        <a className="btn btn-gold" href="#book">
          Book Now
        </a>
      </div>

      <section>
        <div className="wrap">
          <div className="center">
            <div className="diya-divider">
              <span>🌕</span>
            </div>

            <span className="kicker">From Booking to Blessings</span>

            <h2>What Happens After You Book the Guru Purnima Puja?</h2>

            <p className="lede">
              A seamless, transparent experience from the moment you book to the
              moment prasad reaches your home.
            </p>
          </div>

          <div className="after-grid">
            <div className="aft">
              <span className="a-icon">✅</span>
              <b>Instant Confirmation</b>
              Booking confirmed instantly on WhatsApp &amp; Email with all puja
              details
            </div>

            <div className="aft">
              <span className="a-icon">📲</span>
              <b>Reminder &amp; Darshan Link</b>
              Live darshan link sent to you 24 hours before the puja
            </div>

            <div className="aft">
              <span className="a-icon">🙏</span>
              <b>Sankalp &amp; Puja</b>
              Your name, gotra &amp; manokamna included in every mantra on 29 July
              2026
            </div>

            <div className="aft">
              <span className="a-icon">📹</span>
              <b>Video &amp; Photos</b>
              Full puja recording and photo album delivered to you via
              WhatsApp/Email
            </div>

            <div className="aft">
              <span className="a-icon">📦</span>
              <b>Prasad Dispatched</b>
              Sacred prasad and Jupiter yantra shipped to your home address
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="center">
            <div className="diya-divider">
              <span>🌕</span>
            </div>

            <span className="kicker">Voices of Devotees</span>

            <h2>What Devotees Say About Bajrangi Dhaam Puja Seva</h2>
          </div>

          <div className="testi-grid">
            <div className="testi">
              <div className="stars">★★★★★</div>

              <p>
                "My son had been struggling with his CA exams for three years. After
                Guru Purnima Puja last year at Bajrangi Dhaam, he cleared all three
                papers in one attempt. I have no words for the gratitude I feel."
              </p>

              <div className="t-name">
                <span className="t-avatar">SM</span>

                <span>
                  <b>Devotee Name</b>
                  <small>Mumbai, India</small>
                </span>
              </div>
            </div>

            <div className="testi">
              <div className="stars">★★★★★</div>

              <p>
                "I was sceptical about online puja but watching my puja live, hearing
                my name in the Sankalp, receiving the prasad — it felt as real and
                sacred as being there in person. Will book again this year."
              </p>

              <div className="t-name">
                <span className="t-avatar">AK</span>

                <span>
                  <b>Devotee Name</b>
                  <small>Toronto, Canada</small>
                </span>
              </div>
            </div>

            <div className="testi">
              <div className="stars">★★★★★</div>

              <p>
                "Our marriage was stuck for four years. My astrologer confirmed Guru
                Dosha. We did the Guru Purnima Puja through Bajrangi Dhaam and within
                8 months our alliance was fixed. Guru's grace is real."
              </p>

              <div className="t-name">
                <span className="t-avatar">PR</span>

                <span>
                  <b>Devotee Name</b>
                  <small>Delhi, India</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="book">
        <div className="wrap">
          <div className="center">
            <span className="kicker">
              ⏳ Jupiter Is Exalted. This Chance Comes Once in 12 Years.
            </span>

            <h2>Book Your Guru Purnima Puja Online Today</h2>

            <p
              className="lede"
              style={{ color: "rgba(255,248,236,.85)" }}
            >
              One Guru Purnima Puja. Lifetime of Jupiter's blessings. The next
              opportunity comes only in 2027 — and without Jupiter's exaltation.
              Don't let this muhurat pass.
            </p>
          </div>

          <div className="cta-grid">
            <div>
              <p className="price-header">Choose Your Puja Package</p>

              <div className="price-cards">
                <div
                  className={`price-card ${selectedPackage === "group" ? "selected" : ""
                    }`}
                  onClick={() => selectPkg("group")}
                >
                  <div className="pc-radio"></div>

                  <div className="pc-info">
                    <h3>Group Puja</h3>

                    <p>
                      Sankalp in your name &amp; gotra · Performed with other
                      devotees
                    </p>
                  </div>

                  <span className="pc-amt">₹1,100</span>
                </div>

                <div
                  className={`price-card ${selectedPackage === "individual" ? "selected" : ""
                    }`}
                  onClick={() => selectPkg("individual")}
                >
                  <div className="pc-radio"></div>

                  <div className="pc-info">
                    <h3>
                      Individual Puja{" "}
                      <span className="pop-tag">MOST CHOSEN</span>
                    </h3>

                    <p>
                      Exclusive puja only for you · Full personal attention &amp;
                      extended jaap
                    </p>
                  </div>

                  <span className="pc-amt">₹3,100</span>
                </div>
              </div>

              <div style={{ marginTop: "18px" }}>
                <span className="secure-line">
                  🔒 100% Safe &amp; Secure Payments
                </span>
              </div>

              <div className="pay-row">
                <span className="pay-badge">UPI</span>
                <span className="pay-badge">Credit / Debit Cards</span>
                <span className="pay-badge">Net Banking</span>
                <span className="pay-badge">Wallets</span>
              </div>

              <div className="contact-block">
                <h4>📞 Need Help Booking?</h4>

                <p>
                  Call / WhatsApp: <b>+91 92785 55588</b>
                </p>

                <p>
                  Email: <b>seva@bajrangidhaam.com</b>
                </p>

                <p>
                  Support Hours: <b>9 AM – 9 PM IST, all days</b>
                </p>
              </div>
            </div>

            <div className="form-card">
              <h3>Reserve My Guru Purnima Sankalp 🙏</h3>

              <p className="f-sub">
                Your name and gotra will be taken in the Sankalp by our pandit on 29
                July 2026.
              </p>

              <form>
                <div className="f-row">
                  <div className="f-group">
                    <label htmlFor="name">Full Name *</label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="As per Sankalp"
                      required
                    />
                  </div>

                  <div className="f-group">
                    <label htmlFor="gotra">Gotra</label>

                    <input
                      id="gotra"
                      name="gotra"
                      type="text"
                      placeholder="If unknown, write 'Kashyap'"
                    />
                  </div>
                </div>

                <div className="f-row">
                  <div className="f-group">
                    <label htmlFor="mobile">Mobile / WhatsApp *</label>

                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="+91"
                      required
                    />
                  </div>

                  <div className="f-group">
                    <label htmlFor="email">Email</label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="f-group">
                  <label htmlFor="package">Select Package *</label>

                  <select
                    id="package"
                    name="package"
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    required
                  >
                    <option value="">Choose your package…</option>
                    <option value="group">Group Puja — ₹1,100</option>
                    <option value="individual">Individual Puja — ₹3,100</option>
                  </select>
                </div>

                <div className="f-group">
                  <label htmlFor="address">
                    Address for Prasad Delivery *
                  </label>

                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="House, street, city, PIN"
                    required
                  />
                </div>

                <div className="f-group">
                  <label htmlFor="wish">Your Manokamna / Wish</label>

                  <textarea
                    id="wish"
                    name="wish"
                    placeholder="What do you seek from Guru's blessings? The pandit will include this in your Sankalp…"
                  />
                </div>

                <button className="btn btn-gold btn-big" type="submit">
                  Proceed to Secure Payment →
                </button>

                <p className="form-note">
                  Instant confirmation on WhatsApp &amp; Email. Sankalp guaranteed
                  for your booking.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>


      <section id="faq">
        <div className="wrap">
          <div className="center">
            <div className="diya-divider">
              <span>🌕</span>
            </div>

            <span className="kicker">Your Questions, Answered</span>

            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            <details open>
              <summary>What is Guru Purnima and why is it celebrated?</summary>

              <div className="faq-a">
                Guru Purnima is the full moon (Purnima) of the Ashadha month,
                celebrated as the most sacred day to honor the Guru — the remover of
                ignorance. In Hindu tradition it marks the birth of Sage Veda Vyasa
                (Vyasa Purnima), the Adi Guru who codified all Vedic knowledge. In
                Buddhism it commemorates Lord Buddha&apos;s first sermon at Sarnath.
                Across all dharmic traditions, this is the day the Guru&apos;s grace
                flows most freely to sincere disciples.
              </div>
            </details>

            <details>
              <summary>What is the meaning and significance of Guru Purnima?</summary>

              <div className="faq-a">
                The word Guru means &quot;one who removes darkness (Gu) and brings
                light (Ru).&quot; Guru Purnima&apos;s significance is that it is the
                one day in the year when the cosmic alignment — Full Moon in
                Sagittarius (Jupiter&apos;s sign), Jupiter&apos;s direct influence —
                makes the Guru-disciple connection most potent. In Vedic astrology,
                it is the supreme day to pacify a weak Jupiter and invite its
                blessings for education, career, marriage, children and wealth.
              </div>
            </details>

            <details>
              <summary>What is Guru Purnima Puja Vidhi?</summary>

              <div className="faq-a">
                The Guru Purnima Puja Vidhi includes: ritual bath and wearing yellow
                attire, setting up the Guru altar with images of Veda Vyasa and Lord
                Brihaspati, offering turmeric, yellow flowers and chandan, chanting
                the Guru Stotram and Brihaspati mantra, performing Padapuja,
                conducting a Guru Graha Shanti Havan, offering Guru Dakshina, and
                concluding with Aarti. Our pandits at Bajrangi Dhaam perform every
                step of this vidhi in your name.
              </div>
            </details>

            <details>
              <summary>
                What is the difference between Group Puja (₹1,100) and Individual
                Puja (₹3,100)?
              </summary>

              <div className="faq-a">
                In the Group Puja (₹1,100), your Sankalp is taken along with other
                devotees and the puja is performed collectively — you still receive
                the full punya. In the Individual Puja (₹3,100), the entire puja is
                performed exclusively for you, with extended mantra jaap in your
                name, a dedicated Guru Graha Shanti Havan for your specific horoscope
                concerns, and personalised ashirvad from the pandit. Most devotees
                choose the Individual Puja for deeper, more personalised results.
              </div>
            </details>

            <details>
              <summary>
                I live abroad. Can I still book and receive the prasad?
              </summary>

              <div className="faq-a">
                Absolutely. Devotees from the US, UK, Canada, UAE, Singapore and
                across the world book with us. You watch the puja live via a link we
                send you. Prasad and the Jupiter yantra are shipped internationally
                wherever delivery is available.
              </div>
            </details>

            <details>
              <summary>Why is Guru Purnima 2026 especially powerful?</summary>

              <div className="faq-a">
                In 2026, Jupiter is in Cancer — its sign of exaltation — which
                happens only once in 12 years. An exalted Jupiter is the most
                powerful form of this planet, and performing Guru Purnima Puja during
                this transit amplifies results for education, marriage, children,
                career and spiritual growth exponentially. This is a rare,
                once-in-a-12-year opportunity.
              </div>
            </details>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <h4>ॐ Bajrangi Dhaam</h4>

              <p
                style={{
                  fontSize: "14.5px",
                  maxWidth: "340px",
                  marginBottom: "16px",
                }}
              >
                Authentic Vedic puja seva — performed by learned pandits, at the
                right muhurat, with your name in every Sankalp. Bringing the temple
                to your home, wherever you are in the world.
              </p>

              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,248,236,.9)",
                }}
              >
                📞{" "}
                <b style={{ color: "var(--gold)" }}>
                  +91 92785 55588
                </b>
              </p>
            </div>

            <div>
              <h4>Quick Links</h4>

              <ul>
                <li>
                  <a href="#significance">Significance of Guru Purnima</a>
                </li>

                <li>
                  <a href="#benefits">Puja Benefits</a>
                </li>

                <li>
                  <a href="#vidhi">Puja Vidhi</a>
                </li>

                <li>
                  <a href="#why-us">Why Bajrangi Dhaam</a>
                </li>

                <li>
                  <a href="#book">Book Guru Purnima Puja</a>
                </li>

                <li>
                  <a href="#faq">FAQs</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Contact Us</h4>

              <ul>
                <li>📞 +91 92785 55588</li>
                <li>📧 seva@bajrangidhaam.com</li>
                <li>🌐 www.bajrangidhaam.com</li>
                <li>🕒 9 AM – 9 PM IST, all days</li>
              </ul>
            </div>
          </div>

          <div className="foot-bottom">
            © 2026 Bajrangi Dhaam. All rights reserved. · May Guru Brihaspati&apos;s
            eternal light guide your path. Hari Om 🙏
          </div>
        </div>
      </footer>

      <div className="sticky-cta">
        <div className="s-info">
          <b>Guru Purnima Puja · 29 July 2026</b>

          <small>Group ₹1,100 · Individual ₹3,100</small>
        </div>

        <a className="btn btn-gold" href="#book">
          Book Now
        </a>
      </div>




    </>
  );
}