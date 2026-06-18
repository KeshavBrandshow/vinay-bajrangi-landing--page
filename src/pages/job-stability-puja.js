"use client";

import { useEffect, useState } from "react";

export default function JobStabilityPuja() {

  const [faqOpen, setFaqOpen] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [showExitPopup, setShowExitPopup] = useState(false);

  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  useEffect(() => {
    const target = new Date("2026-06-29T06:00:00+05:30").getTime();

    const interval = setInterval(() => {
      const diff = target - Date.now();

      if (diff <= 0) {
        setCountdown({
          days: "00",
          hours: "00",
          mins: "00",
          secs: "00",
        });
        return;
      }

      const pad = (n) => (n < 10 ? `0${n}` : `${n}`);

      setCountdown({
        days: pad(Math.floor(diff / 864e5)),
        hours: pad(Math.floor((diff % 864e5) / 36e5)),
        mins: pad(Math.floor((diff % 36e5) / 6e4)),
        secs: pad(Math.floor((diff % 6e4) / 1e3)),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (!e.relatedTarget && e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rozha+One&family=Mukta:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Tumhare next parts ka HTML yahan add hoga */}

      <style jsx global>{`
       :root{
  --maroon:       #4A0D0D;
  --maroon-soft:  #6B1A14;
  --gold:         #E8A317;
  --gold-deep:    #C4860B;
  --saffron:      #E25822;
  --cream:        #FFF8EC;
  --cream-deep:   #F7EDD8;
  --ink:          #2A1A12;
  --ink-soft:     #5C4636;
  --tulsi:        #2F6B3A;
  --career:       #1A3A6E;   /* career-blue accent — job/professional energy */
  --career-soft:  #2B5BAA;
  --career-pale:  #EAF0FB;
  --line:         #E5D5B8;
  --danger:       #C0241B;

  --display: 'Rozha One', serif;
  --body:    'Mukta', sans-serif;
  --radius: 14px;
  --shadow: 0 10px 30px rgba(74,13,13,.10);
  --shadow-lift: 0 16px 40px rgba(74,13,13,.18);
  --wrap: 1140px;
}

/* ================= BASE ================= */
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:var(--body);color:var(--ink);background:var(--cream);line-height:1.65;font-size:17px}
img,svg{max-width:100%;display:block}
a{color:inherit}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 22px}
section{padding:72px 0}
h1,h2,h3{font-family:var(--display);font-weight:400;line-height:1.2;color:var(--maroon)}
h2{font-size:clamp(26px,3.4vw,38px);margin-bottom:14px}
h3{font-size:21px}
.kicker{display:inline-block;font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;font-weight:700;color:var(--saffron);margin-bottom:10px}
.lede{font-size:clamp(16px,1.5vw,18.5px);color:var(--ink-soft);max-width:760px}
.center{text-align:center}.center .lede{margin:0 auto}

:focus-visible{outline:3px solid var(--gold);outline-offset:3px;border-radius:6px}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}

/* ================= BUTTONS ================= */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;font-family:var(--body);font-weight:700;font-size:16px;padding:14px 28px;border-radius:999px;border:2px solid transparent;cursor:pointer;text-decoration:none;transition:transform .18s,box-shadow .18s,background .18s}
.btn-gold{background:linear-gradient(180deg,var(--gold),var(--gold-deep));color:#fff;box-shadow:0 8px 22px rgba(196,134,11,.38)}
.btn-gold:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(196,134,11,.48)}
.btn-outline{border-color:var(--maroon);color:var(--maroon);background:transparent}
.btn-outline:hover{background:var(--maroon);color:#fff}
.btn-blue{background:linear-gradient(180deg,var(--career-soft),var(--career));color:#fff;box-shadow:0 8px 20px rgba(26,58,110,.30)}
.btn-blue:hover{transform:translateY(-2px)}
.btn-red{background:linear-gradient(180deg,#E03A2F,var(--danger));color:#fff;font-size:19px;padding:18px 44px;box-shadow:0 10px 28px rgba(192,36,27,.45);animation:pulse 2.2s infinite}
.btn-red:hover{transform:translateY(-2px)}
@keyframes pulse{0%,100%{box-shadow:0 10px 28px rgba(192,36,27,.45)}50%{box-shadow:0 10px 40px rgba(192,36,27,.7)}}
.btn-call{border-color:var(--career);color:var(--career);background:#fff}
.btn-call:hover{background:var(--career);color:#fff}

/* ================= STRIP ================= */
.strip{background:var(--career);color:#E8F0FC;text-align:center;font-size:14.5px;font-weight:600;padding:9px 14px;letter-spacing:.02em}
.strip b{color:var(--gold)}

/* ================= HEADER + TORAN ================= */
header{background:linear-gradient(180deg,var(--maroon),var(--maroon-soft));color:#fff}
.nav{display:flex;align-items:center;justify-content:space-between;padding:16px 0}
.logo{font-family:var(--display);font-size:24px;color:var(--gold);text-decoration:none}
.logo small{display:block;font-family:var(--body);font-size:11px;letter-spacing:.22em;color:#F1DFB8;text-transform:uppercase}
.nav-cta{display:flex;gap:12px;align-items:center}
.nav-phone{color:#FFE9B8;font-weight:700;text-decoration:none;font-size:15.5px}
.nav .btn{padding:11px 20px;font-size:14.5px}
/* marigold toran — brand signature */
.toran{height:18px;background:
  radial-gradient(circle at 8px -4px,var(--gold) 0 7px,transparent 8px) 0 0/28px 18px repeat-x,
  radial-gradient(circle at 22px -2px,var(--saffron) 0 5px,transparent 6px) 0 0/28px 18px repeat-x}

/* ================= HERO (SECTION 1) ================= */
.hero{padding:64px 0 80px;background:
  radial-gradient(860px 380px at 88% -8%,rgba(43,91,170,.18),transparent 60%),
  linear-gradient(180deg,var(--maroon) 0%,var(--maroon-soft) 100%);color:#fff;overflow:hidden}
.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:44px;align-items:center}
.hero h1{color:#fff;font-size:clamp(30px,4.2vw,50px);margin-bottom:16px}
.hero h1 em{font-style:normal;color:var(--gold)}
.hero .sub{font-size:clamp(16px,1.7vw,19px);color:#F4E3C2;max-width:600px;margin-bottom:24px}
.hero-benefits{display:flex;flex-wrap:wrap;gap:9px 16px;margin-bottom:28px}
.hero-benefits span{display:inline-flex;align-items:center;gap:7px;font-weight:600;font-size:15px;color:#FFEFC9}
.hero-benefits span::before{content:"✓";color:var(--gold);font-weight:800}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap;align-items:center}
.hero-card{background:rgba(255,248,236,.07);border:1px solid rgba(232,163,23,.4);border-radius:var(--radius);padding:24px;backdrop-filter:blur(2px)}
.hero-card .hl{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);font-weight:700}
.hero-card .date-big{font-family:var(--display);font-size:30px;color:#fff;margin:6px 0 2px}
.hero-card p{color:#EBD9B6;font-size:14.5px;margin-top:8px}

/* trust bar */
.trustbar{background:var(--career);color:#E8F0FC;padding:14px 0}
.trustbar .wrap{display:flex;flex-wrap:wrap;gap:10px 34px;justify-content:center;align-items:center;font-size:15px;font-weight:600}
.trustbar .stars{color:var(--gold);letter-spacing:2px}

/* ================= STICKY COUNTDOWN ================= */
.countdown{position:sticky;top:0;z-index:60;background:linear-gradient(90deg,var(--career),var(--career-soft));color:#fff;padding:10px 0;box-shadow:0 6px 18px rgba(26,58,110,.30)}
.countdown .wrap{display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap}
.cd-label{font-weight:700;font-size:15px;color:#E0EAFD}
.cd-units{display:flex;gap:10px}
.cd-unit{background:rgba(255,255,255,.12);border:1px solid rgba(232,163,23,.45);border-radius:10px;min-width:56px;text-align:center;padding:5px 8px}
.cd-unit b{display:block;font-family:var(--display);font-size:22px;color:var(--gold)}
.cd-unit small{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#C8D8F8}
.countdown .btn{padding:9px 18px;font-size:14px}

/* diya divider */
.diya{display:flex;align-items:center;justify-content:center;gap:14px;color:var(--gold-deep);padding:0 0 8px}
.diya::before,.diya::after{content:"";height:1px;width:min(180px,26vw);background:linear-gradient(90deg,transparent,var(--line))}
.diya::after{background:linear-gradient(90deg,var(--line),transparent)}

/* ================= SPLIT SECTIONS ================= */
.split{display:grid;grid-template-columns:1fr 1fr;gap:54px;align-items:center}
.split.rev > .col-art{order:-1}
.col-art .art-frame{background:#fff;border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);padding:18px}

/* symptom list */
.symptoms{list-style:none}
.symptoms li{display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px dashed var(--line);font-weight:500}
.symptoms li::before{content:"✕";flex:0 0 26px;height:26px;display:inline-flex;align-items:center;justify-content:center;background:#FBE3DF;color:var(--danger);border-radius:50%;font-weight:800;font-size:13px;margin-top:2px}
.symptoms li:last-child{border-bottom:none}

/* points list */
.points{list-style:none}
.points li{display:flex;gap:12px;align-items:flex-start;padding:9px 0;font-weight:500}
.points li::before{content:"◆";color:var(--gold-deep);margin-top:3px;font-size:12px}

/* ================= QUIZ — SIGNATURE ELEMENT ================= */
/* The "Know What Is Best For You" interactive recommender */
.quiz-section{background:linear-gradient(180deg,var(--career),#0E2552);padding:72px 0}
.quiz-section h2{color:#fff}
.quiz-section .kicker{color:var(--gold)}
.quiz-section .lede{color:#C8D8F8}
.quiz-wrap{background:#fff;border-radius:20px;box-shadow:0 24px 64px rgba(26,58,110,.35);max-width:720px;margin:40px auto 0;overflow:hidden}
.quiz-header{background:linear-gradient(135deg,var(--career),var(--career-soft));padding:22px 28px;display:flex;align-items:center;gap:14px}
.quiz-header .quiz-icon{font-size:28px}
.quiz-header div b{display:block;font-family:var(--display);font-size:20px;color:#fff}
.quiz-header div span{font-size:14px;color:#C8D8F8}
.quiz-body{padding:30px 30px 34px}
/* progress bar */
.quiz-progress-bar{height:6px;background:#EAF0FB;border-radius:3px;margin-bottom:28px;overflow:hidden}
.quiz-progress-fill{height:100%;background:linear-gradient(90deg,var(--gold),var(--gold-deep));border-radius:3px;transition:width .4s ease}
/* question display */
.quiz-q{font-family:var(--display);font-size:21px;color:var(--maroon);margin-bottom:20px;min-height:52px}
.quiz-opts{display:grid;gap:11px}
.quiz-opt{background:var(--cream);border:2px solid var(--line);border-radius:12px;padding:14px 18px;font-size:16px;font-weight:600;color:var(--ink);cursor:pointer;text-align:left;font-family:var(--body);transition:border-color .18s,background .18s,transform .12s}
.quiz-opt:hover{border-color:var(--gold);background:#FFF5DF;transform:translateX(4px)}
.quiz-opt.chosen{border-color:var(--career);background:var(--career-pale);color:var(--career)}
/* result card */
.quiz-result{display:none;padding:4px 0 8px}
.quiz-result.show{display:block}
.result-badge{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(90deg,var(--gold),var(--gold-deep));color:#fff;font-weight:800;font-size:13.5px;letter-spacing:.08em;text-transform:uppercase;padding:8px 18px;border-radius:999px;margin-bottom:18px}
.result-title{font-family:var(--display);font-size:28px;color:var(--maroon);margin-bottom:6px}
.result-price{font-family:var(--display);font-size:42px;color:var(--career);margin-bottom:4px}
.result-sub{color:var(--ink-soft);font-size:15px;margin-bottom:18px}
.result-why{background:var(--career-pale);border:1px solid #C0D3F5;border-radius:12px;padding:16px 18px;margin-bottom:22px}
.result-why b{display:block;font-size:14px;letter-spacing:.1em;text-transform:uppercase;color:var(--career);margin-bottom:8px}
.result-why ul{list-style:none}
.result-why ul li{display:flex;gap:8px;padding:5px 0;font-size:15px;font-weight:500}
.result-why ul li::before{content:"✔";color:var(--tulsi);font-weight:800}
.quiz-restart{background:none;border:none;color:var(--ink-soft);font-size:14px;cursor:pointer;text-decoration:underline;font-family:var(--body);margin-top:6px}

/* ================= BENEFITS GRID ================= */
.benefit-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:36px}
.benefit-card{background:#fff;border:1px solid var(--line);border-top:4px solid var(--career);border-radius:var(--radius);padding:26px 22px;box-shadow:var(--shadow);transition:transform .2s,box-shadow .2s}
.benefit-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-lift)}
.benefit-card .ic{font-size:28px;margin-bottom:10px}
.benefit-card h3{margin-bottom:10px;font-size:19px}
.benefit-card li{list-style:none;padding:5px 0;display:flex;gap:8px;font-weight:500;font-size:15.5px}
.benefit-card li::before{content:"✔";color:var(--tulsi);font-weight:800}

/* ================= ASTROLOGY EXPLANATION ================= */
.planet-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:28px}
.planet-card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:20px 16px;text-align:center;box-shadow:var(--shadow)}
.planet-card .pl{font-size:26px;margin-bottom:8px}
.planet-card b{display:block;font-size:15.5px;color:var(--maroon);margin-bottom:4px}
.planet-card p{font-size:14px;color:var(--ink-soft)}

/* ================= PROCESS STEPS ================= */
.steps-v{display:grid;gap:0}
.step-v{display:flex;gap:22px;align-items:flex-start;padding-bottom:28px;position:relative}
.step-v:not(:last-child)::before{content:"";position:absolute;left:19px;top:42px;width:2px;bottom:0;background:linear-gradient(180deg,var(--career-soft),transparent)}
.step-v .num{flex:0 0 40px;width:40px;height:40px;border-radius:50%;background:linear-gradient(180deg,var(--career-soft),var(--career));color:#fff;font-family:var(--display);font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(26,58,110,.25)}
.step-v .content b{display:block;font-size:17px;color:var(--maroon);margin-bottom:4px}
.step-v .content p{color:var(--ink-soft);font-size:15.5px}

/* ================= PRICING ================= */
.price-grid{display:grid;grid-template-columns:repeat(2,minmax(0,420px));gap:28px;justify-content:center;margin-top:40px}
.price-card{background:#fff;border:1.5px solid var(--line);border-radius:18px;padding:32px 28px;box-shadow:var(--shadow);position:relative;cursor:pointer;transition:transform .2s,box-shadow .2s}
.price-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-lift)}
.price-card h3{font-size:23px}
.price-card .price{font-family:var(--display);font-size:44px;color:var(--maroon);margin:8px 0 2px}
.price-card .per{color:var(--ink-soft);font-size:14px;margin-bottom:18px}
.price-card li{list-style:none;display:flex;gap:9px;padding:7px 0;font-weight:500}
.price-card li::before{content:"✔";color:var(--tulsi);font-weight:800}
.price-card .btn{width:100%;margin-top:22px}
.price-card.popular{border:2.5px solid var(--gold);background:linear-gradient(180deg,#FFFDF6,#FFF6DF);box-shadow:0 18px 44px rgba(196,134,11,.28)}
.badge-popular{position:absolute;top:-16px;left:50%;transform:translateX(-50%);background:linear-gradient(180deg,var(--gold),var(--gold-deep));color:#fff;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:6px 16px;border-radius:999px;white-space:nowrap;box-shadow:0 6px 16px rgba(196,134,11,.4)}

/* ================= WHAT YOU RECEIVE ================= */
.receive-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:36px}
.receive{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:22px 12px;text-align:center;box-shadow:var(--shadow)}
.receive .ic{font-size:28px;margin-bottom:8px}
.receive b{font-size:14.5px;color:var(--maroon);line-height:1.35;display:block}

/* ================= DHANADHYA MANI HIGHLIGHT ================= */
.mani-box{background:linear-gradient(135deg,#FFF3D6,#FFE9B8);border:1.5px solid var(--gold);border-radius:var(--radius);padding:20px 24px;display:flex;gap:18px;align-items:flex-start;box-shadow:var(--shadow);margin:22px 0}
.mani-box .ic{font-size:32px;flex:0 0 auto}
.mani-box b{display:block;font-family:var(--display);font-size:19px;color:var(--maroon);margin-bottom:4px}
.mani-box p{color:var(--ink-soft);font-size:15px}

/* ================= TESTIMONIALS ================= */
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:38px}
.testi{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:24px;box-shadow:var(--shadow)}
.testi .stars{color:var(--gold);letter-spacing:2px;margin-bottom:10px}
.testi p{font-size:15px;color:var(--ink-soft);font-style:italic;margin-bottom:14px}
.testi .who{display:flex;align-items:center;gap:12px}
.testi .avatar{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--career),var(--career-soft));color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;flex:0 0 42px}
.testi .who b{display:block;font-size:15px;color:var(--maroon)}
.testi .who small{color:var(--ink-soft)}
.testi .src{margin-top:10px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--career)}

/* ================= ASTROLOGER ================= */
.astro-section{background:linear-gradient(180deg,var(--maroon),#320808);color:#fff}
.astro-section h2,.astro-section h3{color:#fff}
.astro-section .kicker{color:var(--gold)}
.astro-section .lede{color:#F0DDBA}
.astro-metrics{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin:24px 0}
.metric{background:rgba(255,255,255,.07);border:1px solid rgba(232,163,23,.35);border-radius:12px;padding:16px}
.metric b{font-family:var(--display);font-size:26px;color:var(--gold);display:block}
.metric span{font-size:13.5px;color:#EBD9B6}

/* ================= FAQ ================= */
.faq-item{background:#fff;border:1px solid var(--line);border-radius:12px;margin-bottom:11px;overflow:hidden}
.faq-item button{width:100%;text-align:left;background:none;border:none;font-family:var(--body);font-size:16.5px;font-weight:700;color:var(--maroon);padding:18px 52px 18px 22px;cursor:pointer;position:relative}
.faq-item button::after{content:"+";position:absolute;right:20px;top:50%;transform:translateY(-50%);font-size:24px;color:var(--gold-deep);transition:transform .2s}
.faq-item.open button::after{transform:translateY(-50%) rotate(45deg)}
.faq-a{max-height:0;overflow:hidden;transition:max-height .3s ease;color:var(--ink-soft);font-size:16px}
.faq-item.open .faq-a{max-height:300px}
.faq-a p{padding:0 22px 18px}

/* ================= URGENCY + BOOKING ================= */
.urgency{background:radial-gradient(700px 300px at 50% -10%,rgba(232,163,23,.16),transparent 60%),linear-gradient(180deg,var(--maroon),#320808);color:#fff;text-align:center}
.urgency h2{color:#fff;font-size:clamp(28px,3.8vw,44px)}
.urgency .lede{color:#F0DDBA;margin:0 auto 24px}
.warn-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-bottom:32px}
.warn{background:rgba(192,36,27,.18);border:1px solid rgba(232,90,80,.5);color:#FFD9D4;font-weight:700;font-size:15px;border-radius:999px;padding:10px 20px}
.book-panel{background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow-lift);padding:36px;max-width:680px;margin:40px auto 0;text-align:left;color:var(--ink)}
.book-panel h3{text-align:center;margin-bottom:6px}
.book-panel .secure{display:flex;justify-content:center;gap:8px;align-items:center;color:var(--tulsi);font-weight:700;font-size:14px;margin-bottom:22px}
.field{margin-bottom:15px}
.field label{display:block;font-weight:700;font-size:14px;margin-bottom:5px;color:var(--maroon)}
.field input,.field select,.field textarea{width:100%;font-family:var(--body);font-size:16px;padding:12px 14px;border:1.5px solid var(--line);border-radius:10px;background:var(--cream)}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--gold)}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:15px}

/* ================= FOOTER ================= */
footer{background:var(--maroon);color:#E8D3AC;padding:44px 0 90px;font-size:14.5px}
footer .wrap{display:flex;flex-wrap:wrap;gap:20px 50px;justify-content:space-between}
footer a{color:var(--gold);text-decoration:none}

/* ================= STICKY MOBILE BAR ================= */
.mobile-bar{display:none;position:fixed;bottom:0;left:0;right:0;z-index:80;background:#fff;border-top:1px solid var(--line);box-shadow:0 -8px 24px rgba(74,13,13,.18);padding:10px 14px;gap:10px}
.mobile-bar .btn{flex:1;padding:13px 10px;font-size:15px}

/* ================= EXIT POPUP ================= */
.exit-overlay{position:fixed;inset:0;background:rgba(15,10,5,.66);z-index:100;display:none;align-items:center;justify-content:center;padding:20px}
.exit-overlay.show{display:flex}
.exit-modal{background:var(--cream);border-radius:18px;max-width:460px;width:100%;padding:36px 32px;text-align:center;position:relative;border-top:6px solid var(--gold);box-shadow:0 30px 80px rgba(0,0,0,.45)}
.exit-modal h3{font-size:24px;margin-bottom:8px}
.exit-modal p{color:var(--ink-soft);margin-bottom:20px}
.exit-close{position:absolute;top:12px;right:16px;background:none;border:none;font-size:26px;color:var(--ink-soft);cursor:pointer}

/* ================= RESPONSIVE ================= */
@media(max-width:980px){
  .hero-grid,.split{grid-template-columns:1fr;gap:30px}
  .split.rev > .col-art{order:0}
  .planet-grid,.benefit-grid{grid-template-columns:1fr 1fr}
  .testi-grid{grid-template-columns:1fr 1fr}
  .receive-grid{grid-template-columns:repeat(3,1fr)}
}
@media(max-width:640px){
  section{padding:52px 0}
  .price-grid{grid-template-columns:1fr}
  .planet-grid,.benefit-grid,.testi-grid,.receive-grid{grid-template-columns:1fr}
  .form-row{grid-template-columns:1fr}
  .mobile-bar{display:flex}
  .nav .btn{display:none}
  .astro-metrics{grid-template-columns:1fr 1fr}
  .quiz-body{padding:22px 18px 26px}
}
      `}</style>

      {/* STRIP */}
      <div className="strip">
        💼 <b>Naukri Sthirta Puja</b> — Next auspicious date:{" "}
        <b>29 June 2026</b> (Shukla Paksha Tuesday) · Booking open now · Limited slots
      </div>

      {/* HEADER */}
      <header>
        <div className="wrap nav">
          <a className="logo" href="#">
            Bajrangi Dham
            <small>Vedic Puja Seva</small>
          </a>

          <div className="nav-cta">
            <a className="nav-phone" href="tel:+919278555588">
              📞 +91 92785 55588
            </a>

            <a className="btn btn-gold" href="#book">
              Book Puja Now
            </a>
          </div>
        </div>
      </header>

      <div className="toran" aria-hidden="true"></div>

      {/* HERO SECTION */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span
              className="kicker"
              style={{ color: "var(--gold)" }}
            >
              Online Puja for Job Stability
            </span>

            <h1>
              Is Job Instability <em>Draining Your Confidence,</em> Income &amp;
              Peace of Mind?
            </h1>

            <p className="sub">
              Remove professional obstacles through the sacred{" "}
              <strong>Naukri Sthirta Puja</strong> — performed at Bajrangi Dham with
              your personalized Sankalp. Career Stability Puja you can book online
              from anywhere in India or worldwide.
            </p>

            <div className="hero-benefits">
              <span>Career &amp; Job Stability</span>
              <span>Faster Promotions</span>
              <span>Business Growth</span>
              <span>Obstacle Removal</span>
              <span>Dhanadhya Mani Installation</span>
            </div>

            <div className="hero-actions">
              <a className="btn btn-gold" href="#book">
                Book Job Stability Puja Online
              </a>

              <a className="btn btn-call" href="tel:+919278555588">
                📞 Call to Book
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-card">
              <span className="hl">
                📅 Next Puja — Shukla Paksha Tuesday
              </span>

              <div className="date-big">29 June 2026</div>

              <p>
                Personalized Sankalp in your name &amp; gotra · Vedic priests at
                Bajrangi Dham · Dhanadhya Mani installed in your name · Video
                recording shared · Online participation from anywhere
              </p>

              <div
                style={{
                  marginTop: "14px",
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    background: "rgba(232,163,23,.18)",
                    border: "1px solid rgba(232,163,23,.5)",
                    color: "var(--gold)",
                    padding: "5px 14px",
                    borderRadius: "999px",
                    fontSize: "13.5px",
                    fontWeight: 700,
                  }}
                >
                  Group ₹1,100
                </span>

                <span
                  style={{
                    background: "rgba(232,163,23,.18)",
                    border: "1px solid rgba(232,163,23,.5)",
                    color: "var(--gold)",
                    padding: "5px 14px",
                    borderRadius: "999px",
                    fontSize: "13.5px",
                    fontWeight: 700,
                  }}
                >
                  Individual ₹3,100
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trustbar">
        <div className="wrap">
          <span>
            <span className="stars">★★★★★</span> Trusted by Thousands of Devotees
          </span>

          <span>🛕 Bajrangi Dham Vedic Priests</span>
          <span>📿 Personalized Sankalp</span>
          <span>🔒 Secure Online Booking</span>
        </div>
      </div>

      {/* STICKY COUNTDOWN */}
      <div className="countdown">
        <div className="wrap">
          <span className="cd-label">
            💼 Next Puja Date — 29 June 2026
          </span>

          <div className="cd-units">
            <div className="cd-unit">
              <b id="cd-d">00</b>
              <small>Days</small>
            </div>

            <div className="cd-unit">
              <b id="cd-h">00</b>
              <small>Hours</small>
            </div>

            <div className="cd-unit">
              <b id="cd-m">00</b>
              <small>Mins</small>
            </div>

            <div className="cd-unit">
              <b id="cd-s">00</b>
              <small>Secs</small>
            </div>
          </div>

          <a className="btn btn-gold" href="#book">
            Reserve Slot
          </a>
        </div>
      </div>

      {/* SECTION 2 */}
      <section>
        <div className="wrap split">
          <div>
            <span className="kicker">
              Signs That You Need a Career Stability Puja
            </span>

            <h2>Are These Professional Problems Holding You Back?</h2>

            <p
              className="lede"
              style={{ marginBottom: "16px" }}
            >
              When planetary afflictions block your career, effort alone is never
              enough. These signs point toward a deeper astrological root cause.
            </p>

            <ul className="symptoms">
              <li>Repeated job losses despite strong performance</li>
              <li>Promotions always passing to someone else</li>
              <li>Frequent, unwanted job changes</li>
              <li>Conflicts with bosses or colleagues for no clear reason</li>
              <li>Business losses and stagnating income</li>
              <li>Constant fear of losing your current job</li>
              <li>Hard work consistently going unrewarded</li>
              <li>Lack of confidence and direction in your career</li>
            </ul>

            <div style={{ marginTop: "24px" }}>
              <a className="btn btn-outline" href="#quiz">
                Find Out What Puja Is Right for You →
              </a>
            </div>
          </div>

          <div className="col-art">
            <div className="art-frame">
              <svg
                viewBox="0 0 460 380"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Illustration of career obstacles"
              >
                <rect width="460" height="380" rx="10" fill="#EAF0FB" />

                <rect x="160" y="40" width="16" height="280" rx="4" fill="#1A3A6E" opacity=".8" />
                <rect x="284" y="40" width="16" height="280" rx="4" fill="#1A3A6E" opacity=".8" />

                <rect x="160" y="80" width="140" height="12" rx="4" fill="#C4860B" />
                <rect x="160" y="128" width="140" height="12" rx="4" fill="#C4860B" />
                <rect x="160" y="176" width="140" height="12" rx="4" fill="#C4860B" />
                <rect x="160" y="224" width="140" height="12" rx="4" fill="#C4860B" />
                <rect x="160" y="272" width="140" height="12" rx="4" fill="#C4860B" />

                <circle cx="230" cy="268" r="18" fill="#E8A317" />

                <path
                  d="M220 286 q10 14 20 0"
                  fill="none"
                  stroke="#1A3A6E"
                  strokeWidth="2.4"
                />

                <circle cx="224" cy="264" r="2.5" fill="#fff" />
                <circle cx="236" cy="264" r="2.5" fill="#fff" />

                <rect x="196" y="165" width="68" height="26" rx="6" fill="#C0241B" opacity=".85" />

                <text
                  x="230"
                  y="183"
                  textAnchor="middle"
                  fontFamily="Verdana"
                  fontSize="12"
                  fill="#fff"
                  fontWeight="bold"
                >
                  BLOCKED
                </text>

                <text
                  x="228"
                  y="58"
                  textAnchor="middle"
                  fontSize="26"
                >
                  🏆
                </text>

                <text
                  x="230"
                  y="352"
                  textAnchor="middle"
                  fontFamily="Verdana"
                  fontSize="12.5"
                  fill="#1A3A6E"
                >
                  Career ladder blocked by planetary afflictions
                </text>

                <text
                  x="230"
                  y="372"
                  textAnchor="middle"
                  fontFamily="Verdana"
                  fontSize="12"
                  fill="#5C4636"
                >
                  Naukri Sthirta Puja clears the path forward
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="diya" aria-hidden="true">
        🪔 ✦ 🪔
      </div>

      {/* SECTION 3 */}
      <section style={{ background: "var(--cream-deep)" }}>
        <div className="wrap">
          <div className="center">
            <span className="kicker">What Is a Job Stability Puja?</span>

            <h2>How to Get Stability in Job According to Astrology?</h2>

            <p className="lede">
              In Vedic astrology, career and livelihood are governed by the 10th
              house, Saturn (Shani), Jupiter (Guru), and the Sun. Afflictions to
              these create instability that no amount of skill or effort can overcome
              — until the planetary energy is corrected through the right remedy.
            </p>
          </div>

          <div
            className="planet-grid"
            style={{ marginTop: "32px" }}
          >
            <div className="planet-card">
              <div className="pl">♄</div>
              <b>Saturn (Shani)</b>
              <p>
                Rules profession, discipline and longevity of career. A weak or
                afflicted Saturn creates frequent job loss and stagnation.
              </p>
            </div>

            <div className="planet-card">
              <div className="pl">♃</div>
              <b>Jupiter (Guru)</b>
              <p>
                Governs growth, promotion and wisdom. An afflicted Jupiter delays
                recognition and blocks career advancement.
              </p>
            </div>

            <div className="planet-card">
              <div className="pl">☀️</div>
              <b>Sun (Surya)</b>
              <p>
                The planet of authority and government favour. A weak Sun creates ego
                clashes with superiors and loss of position.
              </p>
            </div>
          </div>

          <div
            className="mani-box"
            style={{ marginTop: "34px" }}
          >
            <div className="ic">💎</div>

            <div>
              <b>The Dhanadhya Mani — What Makes This Puja Unique</b>

              <p>
                At the heart of this puja is the installation of a sacred{" "}
                <strong>Dhanadhya Mani</strong> in your name at Bajrangi Dham. Over
                six months, the Mani absorbs the energy of the daily worship and
                rituals. After six months, it is delivered to your home for
                installation in your puja ghar — where daily worship of incense and
                lamp continues to channel its blessings into your career and home.
              </p>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "28px",
            }}
          >
            <a className="btn btn-blue" href="#book">
              Book Recommended Remedy
            </a>
          </div>
        </div>
      </section>

      <div className="diya" aria-hidden="true">
        🪔 ✦ 🪔
      </div>

      {/* QUIZ SECTION */}
      <section className="quiz-section" id="quiz">
        <div className="wrap center">
          <span className="kicker">
            Personalised Recommendation
          </span>

          <h2>✨ Know What Is Best For You</h2>

          <p
            className="lede"
            style={{ color: "#C8D8F8" }}
          >
            Answer 4 quick questions and we'll recommend the right puja option for
            your situation — instantly.
          </p>

          <div className="quiz-wrap">
            <div className="quiz-header">
              <div className="quiz-icon">🔮</div>

              <div>
                <b>Your Personal Puja Recommender</b>
                <span>
                  Takes under 60 seconds · No personal data required
                </span>
              </div>
            </div>

            <div className="quiz-body">
              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-fill"
                  id="qProgress"
                  style={{ width: "0%" }}
                />
              </div>

              <div id="quizQuestions">
                <div className="quiz-q" id="qText">
                  Loading…
                </div>

                <div className="quiz-opts" id="qOpts"></div>
              </div>

              <div className="quiz-result" id="quizResult">
                <div className="result-badge" id="rBadge">
                  ⭐ Recommended
                </div>

                <div className="result-title" id="rTitle"></div>

                <div className="result-price" id="rPrice"></div>

                <div className="result-sub" id="rSub"></div>

                <div className="result-why">
                  <b>Why this is right for you</b>

                  <ul id="rWhyList"></ul>
                </div>

                <a
                  className="btn btn-gold"
                  id="rCta"
                  href="#book"
                  style={{
                    width: "100%",
                    marginBottom: "12px",
                  }}
                >
                  Book This Puja Now
                </a>

                <div style={{ textAlign: "center" }}>
                  <button
                    className="quiz-restart"
                    id="qRestart"
                  >
                    ← Retake the quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: BENEFITS ================= */}
      <section className="center">
        <div className="wrap">
          <span className="kicker">
            Online Puja for Job Stability: Benefits
          </span>

          <h2>What This Puja Brings Into Your Life</h2>

          <p className="lede">
            Remedies for job instability work on the planetary level — healing the
            root cause, not just the symptoms.
          </p>

          <div className="benefit-grid">
            <div className="benefit-card">
              <div className="ic">💼</div>
              <h3>Career Stability</h3>

              <ul>
                <li>Job security and stability</li>
                <li>Removal of professional obstacles</li>
                <li>Protection from sudden job loss</li>
              </ul>
            </div>

            <div className="benefit-card">
              <div className="ic">📈</div>
              <h3>Growth &amp; Recognition</h3>

              <ul>
                <li>Faster promotions</li>
                <li>Recognition from superiors</li>
                <li>Better opportunities</li>
              </ul>
            </div>

            <div className="benefit-card">
              <div className="ic">🧘</div>
              <h3>Confidence &amp; Clarity</h3>

              <ul>
                <li>Increased self-confidence</li>
                <li>Positive mindset at work</li>
                <li>Long-term career clarity</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: "36px" }}>
            <a className="btn btn-gold" href="#book">
              Book Job Stability Puja Online
            </a>
          </div>
        </div>
      </section>

      <div className="diya" aria-hidden="true">
        🪔 ✦ 🪔
      </div>

      {/* ================= SECTION 6: HOW TO BOOK / PROCESS ================= */}
      <section style={{ background: "var(--cream-deep)" }}>
        <div className="wrap split">
          <div>
            <span className="kicker">
              How to Book Job Stability Puja Online
            </span>

            <h2>Complete Vedic Process — Step by Step</h2>

            <div
              className="steps-v"
              style={{ marginTop: "26px" }}
            >
              <div className="step-v">
                <div className="num">1</div>

                <div className="content">
                  <b>Submit Your Details</b>

                  <p>
                    Name, gotra, date &amp; place of birth, and your address for later
                    Mani delivery.
                  </p>
                </div>
              </div>

              <div className="step-v">
                <div className="num">2</div>

                <div className="content">
                  <b>Personalized Sankalp</b>

                  <p>
                    The priest takes a sacred vow in your name and gotra at Bajrangi
                    Dham — either in your presence, or via live Zoom/video call.
                  </p>
                </div>
              </div>

              <div className="step-v">
                <div className="num">3</div>

                <div className="content">
                  <b>Dhanadhya Mani Installation</b>

                  <p>
                    A sacred Dhanadhya Mani is consecrated and installed in your name
                    at Bajrangi Dham, where it receives daily Vedic worship for six
                    months.
                  </p>
                </div>
              </div>

              <div className="step-v">
                <div className="num">4</div>

                <div className="content">
                  <b>Vedic Puja &amp; Havan</b>

                  <p>
                    The Mani is worshipped with Vedic mantras, sandalwood, fragrant
                    flowers and sacred fire rituals.
                  </p>
                </div>
              </div>

              <div className="step-v">
                <div className="num">5</div>

                <div className="content">
                  <b>Puja Video Shared</b>

                  <p>
                    Complete recording of the ritual is shared with you so you can
                    witness your puja being performed.
                  </p>
                </div>
              </div>

              <div className="step-v">
                <div className="num">6</div>

                <div className="content">
                  <b>Mani Delivered to Your Home (after 6 months)</b>

                  <p>
                    The Dhanadhya Mani is respectfully dispatched to your address.
                    Install it in your home temple and worship daily with incense and
                    lamp for continued blessings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-art">
            <div className="art-frame">
              <svg
                viewBox="0 0 460 400"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Bajrangi Dham puja ceremony illustration"
              >
                <rect width="460" height="400" rx="10" fill="#FBF3E0" />

                <rect
                  x="100"
                  y="200"
                  width="260"
                  height="140"
                  fill="#FFF1D2"
                  stroke="#C4860B"
                  strokeWidth="2"
                />

                <path
                  d="M100 200 L230 90 L360 200 Z"
                  fill="#E8A317"
                  stroke="#C4860B"
                  strokeWidth="2"
                />

                <path d="M186 132 L230 66 L274 132" fill="#C4860B" />

                <rect x="226" y="40" width="8" height="28" fill="#6B1A14" />

                <path d="M234 42 l24 8 -24 8 z" fill="#E25822" />

                <rect
                  x="208"
                  y="250"
                  width="44"
                  height="90"
                  rx="22"
                  fill="#6B1A14"
                />

                <ellipse
                  cx="340"
                  cy="270"
                  rx="20"
                  ry="24"
                  fill="#E8A317"
                  opacity=".7"
                />

                <ellipse
                  cx="340"
                  cy="260"
                  rx="11"
                  ry="18"
                  fill="#E25822"
                  opacity=".9"
                />

                <ellipse
                  cx="340"
                  cy="256"
                  rx="5"
                  ry="10"
                  fill="#FFE9B8"
                />

                <polygon
                  points="126,290 160,264 194,290 180,326 140,326"
                  fill="#2B5BAA"
                  opacity=".85"
                />

                <polygon
                  points="140,276 160,268 180,276 160,290"
                  fill="#6A9EE0"
                  opacity=".9"
                />

                <text
                  x="160"
                  y="320"
                  textAnchor="middle"
                  fontFamily="Verdana"
                  fontSize="10"
                  fill="#fff"
                  fontWeight="bold"
                >
                  Dhanadhya
                </text>

                <text
                  x="160"
                  y="333"
                  textAnchor="middle"
                  fontFamily="Verdana"
                  fontSize="10"
                  fill="#fff"
                  fontWeight="bold"
                >
                  Mani
                </text>

                <text
                  x="230"
                  y="380"
                  textAnchor="middle"
                  fontFamily="Georgia, serif"
                  fontSize="13.5"
                  fill="#4A0D0D"
                >
                  Bajrangi Dham — seat of your Naukri Sthirta Puja
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE BAJRANGI DHAM ================= */}
      <section className="center" style={{ background: "var(--career-pale)" }}>
        <div className="wrap">
          <span className="kicker">Why Choose Our Job Stability Puja Service?</span>
          <h2>Why Bajrangi Dham for Your Career Stability Puja?</h2>

          <p className="lede">
            Not all pujas are performed with equal authenticity. Here is what makes
            Bajrangi Dham's approach different.
          </p>

          <div className="benefit-grid" style={{ marginTop: "32px" }}>
            <div
              className="benefit-card"
              style={{ borderTopColor: "var(--gold)" }}
            >
              <div className="ic">📿</div>
              <h3>Personalized Sankalp</h3>

              <ul>
                <li>Your name &amp; gotra taken in the vow</li>
                <li>Not a generic group ritual</li>
                <li>Sankalp via Zoom available</li>
              </ul>
            </div>

            <div
              className="benefit-card"
              style={{ borderTopColor: "var(--gold)" }}
            >
              <div className="ic">💎</div>
              <h3>Dhanadhya Mani</h3>

              <ul>
                <li>Installed in your name at the Dham</li>
                <li>6-month continuous worship</li>
                <li>Delivered to your home</li>
              </ul>
            </div>

            <div
              className="benefit-card"
              style={{ borderTopColor: "var(--gold)" }}
            >
              <div className="ic">🎥</div>
              <h3>Full Transparency</h3>

              <ul>
                <li>Complete puja video recording</li>
                <li>Online participation available</li>
                <li>Pan-India &amp; worldwide</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* ================= SECTION 8: PACKAGES ================= */}
      <section className="center" id="packages">
        <div className="wrap">
          <span className="kicker">Choose Your Puja Package</span>

          <h2>Select Your Preferred Option</h2>

          <p className="lede">
            Both options include the Dhanadhya Mani installation at Bajrangi Dham and
            complete Vedic rituals. Unsure which to choose?{" "}
            <a
              href="#quiz"
              style={{
                color: "var(--career)",
                fontWeight: 700,
              }}
            >
              Take our 60-second quiz ↑
            </a>
          </p>

          <div className="price-grid">
            <div
              className="price-card"
              data-package="group"
            >
              <h3>Group Puja</h3>

              <div className="price">₹1,100</div>

              <div className="per">
                Shared puja — Shukla Paksha Tuesday
              </div>

              <ul style={{ textAlign: "left" }}>
                <li>Cost effective participation</li>
                <li>Shared Sankalp with your name</li>
                <li>Sacred ritual participation</li>
                <li>Puja video shared</li>
              </ul>

              <a className="btn btn-outline" href="#book">
                Book Now
              </a>
            </div>

            <div
              className="price-card popular"
              data-package="individual"
            >
              <span className="badge-popular">
                ⭐ Most Recommended
              </span>

              <h3>Individual Customized Puja</h3>

              <div className="price">₹3,100</div>

              <div className="per">
                Dedicated puja performed only for you
              </div>

              <ul style={{ textAlign: "left" }}>
                <li>Dedicated rituals in your name</li>
                <li>Personal Sankalp with name &amp; gotra</li>
                <li>Dhanadhya Mani installed in your name</li>
                <li>Full puja video recording</li>
                <li>Mani delivered to your home after 6 months</li>
              </ul>

              <a className="btn btn-gold" href="#book">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="diya" aria-hidden="true">
        🪔 ✦ 🪔
      </div>

      <section
        style={{ background: "var(--cream-deep)" }}
        className="center"
      >
        <div className="wrap">
          <span className="kicker">What You Receive</span>

          <h2>Every Devotee Receives</h2>

          <div className="receive-grid">
            <div className="receive">
              <div className="ic">📿</div>
              <b>Personalized Sankalp</b>
            </div>

            <div className="receive">
              <div className="ic">💎</div>
              <b>Dhanadhya Mani in Your Name</b>
            </div>

            <div className="receive">
              <div className="ic">🎥</div>
              <b>Puja Video Recording</b>
            </div>

            <div className="receive">
              <div className="ic">🙏</div>
              <b>Energized Blessings</b>
            </div>

            <div className="receive">
              <div className="ic">💬</div>
              <b>Expert Support</b>
            </div>
          </div>

          <div style={{ marginTop: "34px" }}>
            <a className="btn btn-gold" href="#book">
              Book Job Stability Puja Online
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: TESTIMONIALS ================= */}
      <section className="center">
        <div className="wrap">
          <span className="kicker">Devotee Experiences</span>

          <h2>Real Stories of Career Transformation</h2>

          <div className="testi-grid">
            <div className="testi">
              <div className="stars">★★★★★</div>

              <p>
                "I had lost three jobs in two years. After the Naukri Sthirta Puja at
                Bajrangi Dham, I got a stable position within a month and have been
                growing since. The video of my sankalp brought tears to my eyes."
              </p>

              <div className="who">
                <div className="avatar">SK</div>

                <div>
                  <b>Sandeep K.</b>
                  <small>Noida</small>
                </div>
              </div>

              <div className="src">Google Review</div>
            </div>

            <div className="testi">
              <div className="stars">★★★★★</div>

              <p>
                "Promotions kept passing me by for 6 years. I booked the Individual
                Puja, and within 8 months I was promoted to senior manager. The
                Dhanadhya Mani is now in my home temple and I worship it every
                morning."
              </p>

              <div className="who">
                <div className="avatar">RP</div>

                <div>
                  <b>Renu P.</b>
                  <small>Bengaluru</small>
                </div>
              </div>

              <div className="src">WhatsApp Feedback</div>
            </div>

            <div className="testi">
              <div className="stars">★★★★★</div>

              <p>
                "I participated online from Dubai and the experience was completely
                authentic. The priest took my name in the sankalp and I watched the
                entire havan live. Dr. Bajrangi's team is genuinely knowledgeable."
              </p>

              <div className="who">
                <div className="avatar">AM</div>

                <div>
                  <b>Arun M.</b>
                  <small>Dubai, UAE</small>
                </div>
              </div>

              <div className="src">Video Testimonial</div>
            </div>
          </div>

          <div style={{ marginTop: "34px" }}>
            <a className="btn btn-gold" href="#book">
              Join Thousands of Devotees
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 11: DR. VINAY BAJRANGI ================= */}
      <section className="astro-section">
        <div className="wrap split">
          <div>
            <span className="kicker">About Dr. Vinay Bajrangi</span>

            <h2>Trusted Astrologer With Global Recognition</h2>

            <p className="lede" style={{ marginBottom: "10px" }}>
              Every Job Stability Puja at Bajrangi Dham is recommended and guided by
              Dr. Vinay Bajrangi — ensuring the remedy is precisely matched to your
              Kundli and the planets causing the instability.
            </p>

            <div className="astro-metrics">
              <div className="metric">
                <b>20+ Years</b>
                <span>Vedic astrology experience</span>
              </div>

              <div className="metric">
                <b>Millions</b>
                <span>Reached through guidance</span>
              </div>

              <div className="metric">
                <b>National Media</b>
                <span>Regular media presence</span>
              </div>

              <div className="metric">
                <b>Karma Specialist</b>
                <span>Karmic remedies expertise</span>
              </div>
            </div>

            <a className="btn btn-gold" href="#book">
              Book Puja Under Expert Guidance
            </a>
          </div>

          <div className="col-art">
            <div
              className="art-frame"
              style={{
                background: "rgba(255,255,255,.05)",
                borderColor: "rgba(232,163,23,.3)",
              }}
            >
              <svg
                viewBox="0 0 460 360"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder portrait: Dr. Vinay Bajrangi"
              >
                <rect width="460" height="360" rx="10" fill="#0E2552" />

                <circle cx="230" cy="138" r="62" fill="#2B5BAA" opacity=".3" />

                <circle cx="230" cy="126" r="38" fill="#2B5BAA" opacity=".5" />

                <path
                  d="M150 268 q80 -66 160 0 l0 52 -160 0 z"
                  fill="#2B5BAA"
                  opacity=".5"
                />

                <text
                  x="230"
                  y="345"
                  textAnchor="middle"
                  fontFamily="Verdana"
                  fontSize="13"
                  fill="#C8D8F8"
                >
                  [ Photo: Dr. Vinay Bajrangi ]
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 12: FAQ ================= */}
      <section style={{ background: "var(--cream-deep)" }}>
        <div className="wrap" style={{ maxWidth: "820px" }}>
          <div className="center">
            <span className="kicker">Frequently Asked Questions</span>

            <h2>Your Questions About Job Stability Puja, Answered</h2>
          </div>

          <div style={{ marginTop: "30px" }}>

            <div className="faq-item">
              <button type="button">
                How long is this puja performed?
              </button>

              <div className="faq-a">
                <p>
                  The Naukri Sthirta Puja is performed on every Shukla Paksha Tuesday
                  (auspicious muhurat before 11:00 AM). Additionally, the Dhanadhya
                  Mani installed in your name at Bajrangi Dham receives daily Vedic
                  worship for six full months.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button type="button">
                Where is the puja conducted?
              </button>

              <div className="faq-a">
                <p>
                  The entire puja is conducted at Bajrangi Dham by experienced Vedic
                  priests. You can participate online from anywhere in India or
                  worldwide.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button type="button">
                How does the puja begin? Is my presence required?
              </button>

              <div className="faq-a">
                <p>
                  The puja begins with the Sankalp taken by the priest in your name
                  and gotra. You can join physically or via Zoom/video call.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button type="button">
                What is Dhanadhya Mani and what is its significance?
              </button>

              <div className="faq-a">
                <p>
                  The Dhanadhya Mani is a sacred Vedic object consecrated in your
                  name. It receives daily worship for six months before being
                  delivered to your home.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button type="button">
                What is the difference between Group Puja and Individual Puja?
              </button>

              <div className="faq-a">
                <p>
                  Group Puja (₹1,100) includes your name in a shared Sankalp, while
                  Individual Puja (₹3,100) is dedicated entirely to you.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button type="button">
                Is online puja effective for career problems?
              </button>

              <div className="faq-a">
                <p>
                  Yes. In Vedic tradition, the effectiveness of a puja depends on the
                  Sankalp taken in your name and gotra.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button type="button">
                Can I book this puja for a family member?
              </button>

              <div className="faq-a">
                <p>
                  Absolutely. You can book the Job Stability Puja for any family
                  member by providing their details.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button type="button">
                How do I know which puja is right for me — Group or Individual?
              </button>

              <div className="faq-a">
                <p>
                  Take our{" "}
                  <a
                    href="#quiz"
                    style={{
                      color: "var(--career)",
                      fontWeight: 700,
                    }}
                  >
                    60-second personalised quiz
                  </a>{" "}
                  or call our puja desk on{" "}
                  <a
                    href="tel:+919278555588"
                    style={{
                      color: "var(--career)",
                      fontWeight: 700,
                    }}
                  >
                    +91 92785 55588
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 13: URGENCY + BOOKING FORM ================= */}
      <section className="urgency" id="book">
        <div className="wrap">

          <span className="kicker" style={{ color: "var(--gold)" }}>
            Limited Slots — Book Now
          </span>

          <h2>Next Puja: 29 June 2026 — Shukla Paksha Tuesday</h2>

          <p className="lede">
            Auspicious muhurat before 11:00 AM. Shukla Paksha Tuesdays come only once
            a month — don't let this slot pass.
          </p>

          <div className="warn-row">
            <span className="warn">⚠ Slots Closing Soon</span>
            <span className="warn">⚠ Limited Individual Puja Slots</span>
            <span className="warn">⚠ Next Date: 29 June 2026</span>
          </div>

          <a className="btn btn-red" href="#book-form">
            💼 BOOK NOW — Secure Your Career Puja Slot
          </a>

          <div className="book-panel" id="book-form">
            <h3>Book Job Stability Puja Online</h3>

            <div className="secure">
              🔒 100% Secure Payment &nbsp;·&nbsp; 📞{" "}
              <a
                href="tel:+919278555588"
                style={{ color: "var(--career)", fontWeight: 700 }}
              >
                +91 92785 55588
              </a>
            </div>

            <form action="#" method="post">
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Full Name *</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name for the Sankalp"
                  />
                </div>

                <div className="field">
                  <label htmlFor="gotra">Gotra (if known)</label>

                  <input
                    id="gotra"
                    name="gotra"
                    type="text"
                    placeholder="e.g., Kashyap"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="phone">Mobile / WhatsApp *</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="dob">Date of Birth</label>
                  <input id="dob" name="dob" type="date" />
                </div>

                <div className="field">
                  <label htmlFor="pob">Place of Birth</label>

                  <input
                    id="pob"
                    name="pob"
                    type="text"
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="package">Select Package *</label>

                <select id="package" name="package" required>
                  <option value="">— Choose your puja option —</option>

                  <option value="group">Group Puja — ₹1,100</option>

                  <option value="individual">
                    Individual Customized Puja (Most Recommended) — ₹3,100
                  </option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="address">Address for Mani Delivery *</label>

                <textarea
                  id="address"
                  name="address"
                  rows={2}
                  required
                  placeholder="Full postal address with PIN code (Dhanadhya Mani will be delivered here after 6 months)"
                />
              </div>

              <button
                className="btn btn-gold"
                type="submit"
                style={{ width: "100%" }}
              >
                Book Career Stability Puja — Proceed to Payment
              </button>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "13px",
                  color: "var(--ink-soft)",
                  marginTop: "11px",
                }}
              >
                Prefer to book on call?{" "}
                <a
                  href="tel:+919278555588"
                  style={{ color: "var(--maroon)", fontWeight: 700 }}
                >
                  +91 92785 55588
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div>
            <strong
              style={{
                fontFamily: "var(--display)",
                fontSize: "19px",
                color: "var(--gold)",
              }}
            >
              Bajrangi Dham
            </strong>

            <p>
              Authentic Vedic pujas with personalized Sankalp.
              <br />
              Job Stability Puja · Next Date: 29 June 2026
            </p>
          </div>

          <div>
            <p>
              📞 <a href="tel:+919278555588">+91 92785 55588</a>
              <br />
              💼 Online Job Stability Puja booking — Pan-India &amp; worldwide
            </p>
          </div>

          <div>
            <p>
              © 2026 Bajrangi Dham. All rights reserved.
              <br />
              <a href="#">Privacy</a> · <a href="#">Terms</a> ·{" "}
              <a href="#">Refund Policy</a>
            </p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE BAR */}
      <div className="mobile-bar">
        <a className="btn btn-call" href="tel:+919278555588">
          📞 Call
        </a>

        <a className="btn btn-gold" href="#book">
          Book Puja Now
        </a>
      </div>

      {showExitPopup && (
  <div
    className="exit-overlay show"
    role="dialog"
    aria-modal="true"
    aria-labelledby="exitTitle"
    onClick={() => setShowExitPopup(false)}
  >
    <div
      className="exit-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="exit-close"
        aria-label="Close"
        onClick={() => setShowExitPopup(false)}
      >
        ×
      </button>

      <div style={{ fontSize: "36px" }}>💼🪔</div>

      <h3 id="exitTitle">
        Wait — Find Out Which Puja Is Right for You Before You Go
      </h3>

      <p>
        Take our free 60-second quiz and get a personalized recommendation.
      </p>

      <a
        className="btn btn-blue"
        href="#quiz"
        style={{
          fontSize: "16px",
          padding: "14px 28px",
          marginBottom: "10px",
        }}
        onClick={() => setShowExitPopup(false)}
      >
        Take the Quiz →
      </a>

      <br />

      <a
        className="btn btn-gold"
        href="#book"
        style={{
          fontSize: "15px",
          padding: "12px 24px",
        }}
        onClick={() => setShowExitPopup(false)}
      >
        Book Now Instead
      </a>
    </div>
  </div>
)}





    </>
  );
}