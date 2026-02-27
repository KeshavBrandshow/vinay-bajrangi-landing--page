
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { Minus, Plus, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-cormorant',
});

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    variable: '--font-dm-sans',
});

export default function PersonalisedDestinyReport() {
    const [timeLeft, setTimeLeft] = useState(1799); // 29:59
    const [activeFaq, setActiveFaq] = useState(null);

    // Timer Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    // Sample Report Slider Logic
    const sampleScrollRef = useRef(null);
    const [sampleIndex, setSampleIndex] = useState(0);

    const scrollSample = (direction) => {
        if (sampleScrollRef.current) {
            const { current } = sampleScrollRef;
            const scrollAmount = current.clientWidth * 0.5;
            if (direction === 'left') {
                current.scrollLeft -= scrollAmount;
            } else {
                if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
                    current.scrollLeft = 0;
                } else {
                    current.scrollLeft += scrollAmount;
                }
            }
        }
    };

    const handleSampleScroll = () => {
        if (sampleScrollRef.current) {
            const { current } = sampleScrollRef;
            const index = Math.round(current.scrollLeft / (current.scrollWidth / 5));
            setSampleIndex(Math.min(index, 4));
        }
    };

    // Celebrity Slider Logic
    const celebScrollRef = useRef(null);
    const [celebIndex, setCelebIndex] = useState(0);

    const scrollCeleb = (direction) => {
        if (celebScrollRef.current) {
            const { current } = celebScrollRef;
            const scrollAmount = current.clientWidth;
            if (direction === 'left') {
                current.scrollLeft -= scrollAmount;
            } else {
                if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
                    current.scrollLeft = 0;
                } else {
                    current.scrollLeft += scrollAmount;
                }
            }
        }
    };

    const handleCelebScroll = () => {
        if (celebScrollRef.current) {
            const { current } = celebScrollRef;
            const index = Math.round(current.scrollLeft / current.clientWidth);
            setCelebIndex(Math.min(index, 3));
        }
    };

    // Auto Play for Sliders
    useEffect(() => {
        const interval = setInterval(() => {
            scrollSample('right');
        }, 4200);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            scrollCeleb('right');
        }, 5500);
        return () => clearInterval(interval);
    }, []);

    // Scroll Reveal Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`${cormorant.variable} ${dmSans.variable} font-sans bg-[#060E0C] text-[#E8F0EE] overflow-x-hidden min-h-screen relative`}>
            <Head>
                <title>Personalised Destiny Report — Dr. Vinay Bajrangi</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <style jsx global>{`
        :root {
          --teal: #1A6B5A;
          --teal-light: #2A9278;
          --teal-glow: #3DBFA0;
          --amber: #C9933A;
          --amber-light: #E8B96A;
          --deep: #060E0C;
          --dark: #0A1510;
          --card: #0D1A16;
          --card2: #111F1A;
          --text: #E8F0EE;
          --muted: #627870;
          --border: rgba(26, 107, 90, 0.35);
          --border-amb: rgba(201, 147, 58, 0.22);
        }

        body {
          background-color: var(--deep);
          font-family: var(--font-dm-sans), sans-serif;
        }

        .font-serif {
          font-family: var(--font-cormorant), serif;
        }

        .geometric-pattern::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%231A6B5A' stroke-opacity='0.06' stroke-width='0.5'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z'/%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .hero-bg {
          background: radial-gradient(ellipse 85% 55% at 50% -5%, rgba(26, 107, 90, 0.55) 0%, transparent 65%),
            radial-gradient(ellipse 45% 35% at 15% 85%, rgba(42, 146, 120, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 88% 75%, rgba(201, 147, 58, 0.07) 0%, transparent 55%),
            var(--deep);
        }

        .sacred-geometry::after {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          border: 1px solid rgba(26, 107, 90, 0.08);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          box-shadow: 0 0 0 100px rgba(26, 107, 90, 0.03), 0 0 0 200px rgba(26, 107, 90, 0.02);
        }

        .offer-box-glow {
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(26, 107, 90, 0.08) inset;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: var(--deep);
        }
        ::-webkit-scrollbar-thumb {
          background: var(--teal-light);
          border-radius: 3px;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

            <div className="geometric-pattern" />

            {/* Hero Section */}
            <section className="hero-bg sacred-geometry relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5 pt-16 pb-12 overflow-hidden">
                <div className="inline-flex items-center gap-2 bg-[#1A6B5A]/15 border border-[#1A6B5A]/35 rounded-full py-1.5 px-5 text-[11px] tracking-[2px] uppercase text-[#3DBFA0] mb-7 animate-[fadeUp_0.6s_ease_both] relative z-20">
                    ✦ Personalised Destiny Report ✦
                </div>

                <h1 className="font-serif text-[clamp(2.3rem,6vw,4.5rem)] font-semibold leading-[1.13] max-w-[800px] mb-2.5 animate-[fadeUp_0.7s_0.1s_ease_both] relative z-20">
                    Your Life Has a Design.<br />
                    <em className="italic bg-gradient-to-br from-[#E8B96A] to-[#3DBFA0] bg-clip-text text-transparent not-italic">This Report Reveals It.</em>
                </h1>

                <p className="text-[0.78rem] tracking-[1.5px] uppercase text-[#627870] mb-4 animate-[fadeUp_0.7s_0.15s_ease_both] relative z-20">
                    By Dr. Vinay Bajrangi — Internationally Renowned Astrologer & Karma Timing Expert
                </p>

                <p className="text-base text-[#6A9088] max-w-[520px] leading-[1.8] mb-10 animate-[fadeUp_0.7s_0.2s_ease_both] relative z-20">
                    A deep astrological blueprint of your soul's purpose, karmic direction, and the life patterns you're meant to understand — not just predict.
                </p>

                {/* Offer Box */}
                <div className="bg-gradient-to-br from-[#0E1C17] to-[#0A1410] border border-[#1A6B5A]/35 rounded-[22px] p-9 md:p-10 max-w-[520px] w-full mx-auto mb-8 relative offer-box-glow animate-[fadeUp_0.7s_0.3s_ease_both] z-20">
                    <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1A6B5A] to-[#2A9278] text-[#C8EDE8] text-[10px] tracking-[2px] py-1 px-4.5 rounded-full whitespace-nowrap">
                        ✦ LIMITED TIME OFFER ✦
                    </div>

                    <div className="flex items-baseline justify-center gap-3.5 mb-2">
                        <span className="text-[1.3rem] text-[#627870] line-through">₹2,499</span>
                        <span className="font-serif text-[3.2rem] font-bold text-[#C9933A] leading-none">₹799</span>
                    </div>

                    <div className="text-center mb-5">
                        <span className="inline-block bg-[#C9933A]/10 text-[#E8B96A] text-[12px] py-1 px-3 rounded-full">
                            You save ₹1,700 — 68% OFF
                        </span>
                    </div>

                    <div className="text-left mb-6 border-t border-[#1A6B5A]/35 pt-5">
                        <p className="text-[11px] tracking-[1.5px] uppercase text-[#627870] mb-3">What's Included</p>
                        <ul className="flex flex-col gap-2.5">
                            {[
                                "Soul nature, ascendant & Nakshatra analysis",
                                "Karmic purpose & life direction mapping",
                                "Destiny-defining Dasha periods identified",
                                "Karmic house analysis (1st, 5th, 8th, 9th, 12th)",
                                "Destiny vs. free-will zones clearly explained",
                                "Personalised remedies & conscious action plan"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-[0.88rem] text-[#E8F0EE] leading-relaxed">
                                    <span className="text-[#3DBFA0] text-[9px] flex-shrink-0 mt-1">✦</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a href="#pricing" className="block w-full bg-gradient-to-br from-[#C9933A] to-[#A8712A] text-[#0A0E0C] font-semibold text-base tracking-[0.3px] py-4.5 px-8 rounded-xl cursor-pointer no-underline shadow-[0_8px_30px_rgba(201,147,58,0.35)] hover:shadow-[0_14px_40px_rgba(201,147,58,0.45)] hover:-translate-y-0.5 transition-all duration-200">
                        Unlock My Destiny Report →
                    </a>
                    <p className="text-[0.75rem] text-[#627870] mt-3 text-center">
                        Delivered to your email · 100% personalised · 3L+ seekers trust Dr. Bajrangi
                    </p>
                </div>

                <div className="flex justify-center gap-7 flex-wrap animate-[fadeUp_0.7s_0.4s_ease_both] relative z-20">
                    {[
                        { val: "⭐ 4.8/5", label: "Customer Rating" },
                        { val: "3L+", label: "Seekers Worldwide" },
                        { val: "25+", label: "Years Experience" },
                        { val: "Instant", label: "Digital Report" }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center gap-0.5 text-[11px] text-[#627870] uppercase tracking-[1px]">
                            <strong className="font-serif text-[1.4rem] text-[#E8B96A] block leading-none mb-1">{stat.val}</strong>
                            {stat.label}
                        </div>
                    ))}
                </div>

                <div className="bg-[#1A6B5A]/12 border border-[#1A6B5A]/30 rounded-xl py-3 px-6 flex items-center justify-center gap-4 max-w-[400px] mx-auto mt-6 animate-[fadeUp_0.7s_0.5s_ease_both] relative z-20">
                    <span className="text-[0.82rem] text-[#6AB0A0]">⏳ Offer expires in</span>
                    <span className="font-serif text-[1.8rem] text-white tracking-[4px] font-semibold">
                        {formatTime(timeLeft)}
                    </span>
                </div>
            </section>

            {/* Questions Section */}
            <section className="py-20 px-5 border-t border-[#1A6B5A]/35 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-3 text-center reveal">What This Report Answers</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-8 reveal">
                        The Questions Life Keeps Asking You
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 reveal">
                        {[
                            "Why am I here, and what is my true life direction?",
                            "Why does success come easily to some and take so much longer for me?",
                            "What patterns keep repeating — and can they be changed?",
                            "Which paths lead to fulfilment, and which lead to struggle?"
                        ].map((q, i) => (
                            <div key={i} className="bg-[#0D1A16] border border-[#1A6B5A]/35 rounded-[14px] p-6.5 text-center flex items-center justify-center relative min-h-[100px]">
                                <span className="font-serif text-[3rem] text-[#2A9278]/15 absolute top-2 left-3.5 leading-none">"</span>
                                <p className="font-serif italic text-[1.15rem] text-[#A0D0C8] leading-[1.6] relative z-10">{q}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-[#627870] text-[0.9rem] max-w-[580px] mx-auto leading-[1.75] reveal">
                        Unlike a general horoscope, this report focuses exclusively on karma, soul purpose, and the long arc of your destiny — the part of life that no amount of effort alone can explain.
                    </p>
                </div>
            </section>

            {/* What's Inside Section */}
            <section className="py-20 px-5 bg-black/15 border-t border-[#1A6B5A]/35 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-3 text-center reveal">Inside Your Report</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12 reveal">
                        Everything This Report Uncovers
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
                        {[
                            { num: "01", title: "Ascendant, Moon & Soul Nature", desc: "The foundational karmic blueprint — your innate nature, soul instincts, and the core energies that shape this lifetime." },
                            { num: "02", title: "Nakshatra-Based Destiny Path", desc: "A detailed mapping of your birth Nakshatra and its influence on your life's central theme, relationships, and vocational direction." },
                            { num: "03", title: "Life Purpose & Karmic Direction", desc: "What your soul is meant to pursue, complete, and evolve through — and what constitutes a distraction from your true path." },
                            { num: "04", title: "Destiny-Defining Dasha Periods", desc: "Identification of the major planetary periods that define rise, struggle, transformation, and breakthrough in your life's long arc." },
                            { num: "05", title: "Karmic House Analysis", desc: "Deep reading of the 1st, 5th, 8th, 9th, and 12th houses — the karmic axis of your chart that governs destiny, past life influences, and spiritual growth." },
                            { num: "06", title: "Remedies & Conscious Action Plan", desc: "Practical Vedic remedies and behavioural guidance — not to fight your destiny, but to align with it more gracefully." }
                        ].map((card, i) => (
                            <div key={i} className="bg-[#0D1A16] border border-[#1A6B5A]/35 rounded-[16px] p-7 relative overflow-hidden transition-all duration-300 hover:border-[#2A9278]/50 hover:-translate-y-1 group reveal">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2A9278] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <div className="font-serif text-[2.5rem] text-[#2A9278]/18 leading-none mb-3">{card.num}</div>
                                <div className="text-[0.95rem] font-medium mb-2 text-[#8ACCC0]">{card.title}</div>
                                <div className="text-[0.85rem] text-[#627870] leading-[1.65]">{card.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destiny vs Free Will Section */}
            <section className="py-20 px-5 border-t border-[#1A6B5A]/35 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-3 text-center reveal">A Nuanced View</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-4 reveal">
                        Destiny Zones vs Free-Will Zones
                    </h2>
                    <p className="text-center text-[#627870] text-[0.9rem] max-w-[560px] mx-auto mb-10 leading-[1.75] reveal">
                        This report does not predict fixed fate. It distinguishes between what is karmic (and must be understood) and what is free-will (and can be shaped).
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[760px] mx-auto reveal">
                        <div className="bg-[#0D1A16] border border-[#1A6B5A]/35 rounded-[16px] p-7.5">
                            <span className="block text-[10px] tracking-[2px] uppercase text-[#3DBFA0] mb-4">Destiny Zones — to understand & accept</span>
                            <div className="font-serif text-[1.35rem] font-semibold mb-3.5 leading-[1.3] text-[#E8F0EE]">What your chart reveals as karmic givens</div>
                            <ul className="flex flex-col gap-2">
                                {[
                                    "Certain delays or losses that carry a lesson",
                                    "Natural talents and gifts to be expressed",
                                    "Soul relationships that arrive with purpose",
                                    "Life phases that cannot be rushed or skipped"
                                ].map((li, i) => (
                                    <li key={i} className="text-[0.85rem] text-[#627870] leading-[1.55] flex items-start gap-2">
                                        <span className="text-[#3DBFA0] flex-shrink-0">—</span>{li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[#0D1A16] border border-[#C9933A]/22 rounded-[16px] p-7.5">
                            <span className="block text-[10px] tracking-[2px] uppercase text-[#E8B96A] mb-4">Free-Will Zones — to act & improve</span>
                            <div className="font-serif text-[1.35rem] font-semibold mb-3.5 leading-[1.3] text-[#E8F0EE]">Where your choices genuinely change outcomes</div>
                            <ul className="flex flex-col gap-2">
                                {[
                                    "How you respond to difficult planetary periods",
                                    "Career paths and professional choices",
                                    "Relationship decisions and emotional patterns",
                                    "Remedies that reduce karmic friction"
                                ].map((li, i) => (
                                    <li key={i} className="text-[0.85rem] text-[#627870] leading-[1.55] flex items-start gap-2">
                                        <span className="text-[#C9933A] flex-shrink-0">—</span>{li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sample Slider Section */}
            <section className="py-20 px-5 border-t border-[#1A6B5A]/35 bg-black/30 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-3 text-center reveal">See Before You Buy</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12 reveal">
                        A Glimpse Inside the Report
                    </h2>
                    <p className="text-center text-[#627870] text-[0.88rem] -mt-8 mb-10 reveal">
                        Real pages from an actual report — names & personal details masked for privacy.
                    </p>

                    <div className="relative max-w-[860px] mx-auto overflow-hidden reveal">
                        <div
                            ref={sampleScrollRef}
                            onScroll={handleSampleScroll}
                            className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
                        >
                            {[
                                "Page 1 — Birth Chart & Karmic Overview",
                                "Page 2 — Soul Nature & Nakshatra Analysis",
                                "Page 3 — Life Purpose & Karmic Direction",
                                "Page 4 — Destiny-Defining Dasha Periods",
                                "Page 5 — Remedies & Conscious Action Plan"
                            ].map((caption, i) => (
                                <div key={i} className="flex-[0_0_calc(50%-10px)] md:flex-[0_0_calc(50%-10px)] min-w-[260px] rounded-[14px] overflow-hidden border border-[#1A6B5A]/35 bg-[#0D1A16] cursor-pointer transition-all duration-300 hover:border-[#2A9278]/50 hover:-translate-y-1 snap-center">
                                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#0E1C17] to-[#0A1410] flex flex-col items-center justify-center gap-3 text-[#2A9278]/40">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-12 h-12 opacity-45"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></svg>
                                        <span className="font-serif text-base text-[#2A9278]/35 tracking-wider">Sample Page {i + 1}</span>
                                        <span className="text-[0.7rem] text-[#2A9278]/28 mt-1">Upload your image here</span>
                                    </div>
                                    <div className="p-3.5 md:p-4 text-[0.78rem] text-[#627870] tracking-[0.5px]">
                                        {caption}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-7">
                            <button onClick={() => scrollSample('left')} className="w-[42px] h-[42px] rounded-full border border-[#1A6B5A]/35 bg-[#0D1A16] text-[#3DBFA0] flex items-center justify-center transition-all hover:bg-[#1A6B5A]/15 hover:border-[#2A9278]">
                                <ChevronLeft size={20} />
                            </button>
                            <div className="flex gap-1.5">
                                {[0, 1, 2, 3, 4].map((idx) => (
                                    <button key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === sampleIndex ? 'bg-[#3DBFA0] scale-[1.35]' : 'bg-[#1A6B5A]/20'}`} />
                                ))}
                            </div>
                            <button onClick={() => scrollSample('right')} className="w-[42px] h-[42px] rounded-full border border-[#1A6B5A]/35 bg-[#0D1A16] text-[#3DBFA0] flex items-center justify-center transition-all hover:bg-[#1A6B5A]/15 hover:border-[#2A9278]">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Whom Section */}
            <section className="py-20 px-5 bg-gradient-to-b from-[#1A6B5A]/6 to-transparent border-t border-b border-[#1A6B5A]/35 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-3 text-center reveal">Is This For You?</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12 reveal">
                        This Report Is Made For You If…
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 reveal">
                        {[
                            { icon: "🔄", text: "You keep facing the same patterns — loss, delay, setbacks — despite doing everything right" },
                            { icon: "🧭", text: "You're searching for a sense of purpose beyond career and material success" },
                            { icon: "❓", text: "You want to understand why your life unfolds the way it does — not just what will happen next" },
                            { icon: "🌱", text: "You're on a spiritual path and want to understand your karmic lessons more clearly" },
                            { icon: "⚖️", text: "You want long-term clarity — not short-term predictions — about your soul's true direction" },
                            { icon: "💡", text: "You feel there is a deeper design to your life and you're ready to understand it with honesty" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3.5 p-5 bg-white/[0.015] border border-white/5 rounded-[12px] transition-colors duration-300 hover:border-[#1A6B5A]/30 group">
                                <div className="w-[38px] h-[38px] rounded-[9px] bg-[#1A6B5A]/12 flex items-center justify-center text-[17px] flex-shrink-0 group-hover:bg-[#1A6B5A]/20 transition-colors">
                                    {item.icon}
                                </div>
                                <div className="text-[0.88rem] text-[#7AA8A0] leading-[1.6]">{item.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-5 border-t border-[#1A6B5A]/35 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-3 text-center reveal">Real Experiences</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12 reveal">
                        What Seekers Are Saying
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
                        {[
                            { tag: "Life Purpose", text: "\"I had achieved a lot materially but felt completely empty inside. The Destiny Report explained exactly why — and what my chart actually pointed to as my soul's direction. It was the most honest, non-judgmental clarity I've received.\"", author: "Ritu S.", role: "Entrepreneur, Delhi" },
                            { tag: "Repeated Patterns", text: "\"Three relationships, same outcome. The report explained this was a karmic pattern written into my 7th house — not bad luck. Understanding why it kept happening made it possible to finally break the cycle.\"", author: "Anil V.", role: "Consultant, Bangalore" },
                            { tag: "Spiritual Clarity", text: "\"I've read many spiritual books but nothing gave me the clarity this report did. It didn't tell me what I wanted to hear — it told me what I needed to understand. The distinction between destiny zones and free-will zones alone was worth everything.\"", author: "Meena K.", role: "Teacher, Kochi" }
                        ].map((testi, i) => (
                            <div key={i} className="bg-[#0D1A16] border border-[#1A6B5A]/35 rounded-[16px] p-7 transition-colors hover:border-[#2A9278]/40 reveal">
                                <span className="inline-block bg-[#1A6B5A]/12 border border-[#1A6B5A]/35 rounded-[6px] text-[10px] tracking-[1px] uppercase text-[#3DBFA0] py-0.5 px-2.5 mb-3.5">
                                    {testi.tag}
                                </span>
                                <div className="font-serif italic text-[1.05rem] leading-[1.78] text-[#B0C8C4] mb-5">
                                    {testi.text}
                                </div>
                                <div className="text-[0.9rem]">
                                    <strong className="block text-[#E8F0EE] mb-0.5">{testi.author}</strong>
                                    <span className="text-[0.78rem] text-[#627870]">{testi.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Celebrity Slider Section */}
            <section className="py-20 px-5 border-t border-[#1A6B5A]/35 text-center relative z-10 overflow-hidden">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-3 text-center reveal">Private Consultations</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-2 reveal">
                        Trusted by Those in the Public Eye
                    </h2>
                    <span className="block font-serif italic text-base text-[#3DBFA0]/50 mb-12 reveal">
                        Shared with permission. All identifying details handled with full discretion.
                    </span>

                    <div className="relative max-w-[680px] mx-auto overflow-hidden reveal">
                        <div
                            ref={celebScrollRef}
                            onScroll={handleCelebScroll}
                            className="flex gap-0 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
                        >
                            {[
                                { quote: "At the peak of a successful phase, I still felt like something was misaligned. The Destiny Report helped me understand the karmic layer beneath everything — why certain things came easily and others never would. It changed how I relate to both success and struggle.", initial: "A", name: "Akshay K.", role: "Actor & Film Producer, Mumbai" },
                                { quote: "I kept asking why certain things in my career were effortless while others — no matter how hard I tried — wouldn't move. This report gave me the framework to understand it wasn't effort that was missing. It was timing and alignment with my actual destiny path.", initial: "A", name: "Alaya F.", role: "Actor, Mumbai" },
                                { quote: "The concept of destiny zones versus free-will zones completely reframed how I approach decisions. I stopped blaming myself for things outside my control, and started putting my energy only where it could actually make a difference. That shift was profound.", initial: "V", name: "Varun D.", role: "Actor, Mumbai" },
                                { quote: "What struck me most was the absence of drama. No alarming predictions, no vague spiritual advice. Just a clear, logical explanation of my karmic blueprint — and what it meant for the choices ahead of me. Practical, grounded, and deeply accurate.", initial: "K", name: "Kriti S.", role: "Actress, Mumbai" }
                            ].map((c, i) => (
                                <div key={i} className="flex-[0_0_100%] flex flex-col items-center gap-5 px-4 md:px-0 snap-center">
                                    <div className="bg-[#1A6B5A]/5 border border-[#1A6B5A]/12 rounded-[16px] p-8 md:p-9 max-w-[540px] relative">
                                        <span className="font-serif text-[5rem] text-[#1A6B5A]/12 absolute -top-2.5 left-5 leading-none">"</span>
                                        <p className="font-serif italic text-[1.12rem] text-[#A8C8C0] leading-[1.8] relative z-10">
                                            {c.quote}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3.5">
                                        <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#1A6B5A]/25 to-[#2A9278]/20 border border-[#2A9278]/30 flex items-center justify-center font-serif text-[1.1rem] text-[#3DBFA0] flex-shrink-0">
                                            {c.initial}
                                        </div>
                                        <div className="text-left">
                                            <div className="text-[0.92rem] font-medium text-[#E8F0EE] leading-tight mb-0.5">{c.name}</div>
                                            <div className="text-[0.73rem] text-[#627870] tracking-[0.5px] whitespace-nowrap">{c.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-2.5 mt-8">
                            {[0, 1, 2, 3].map((idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        if (celebScrollRef.current) {
                                            celebScrollRef.current.scrollLeft = idx * celebScrollRef.current.clientWidth;
                                        }
                                    }}
                                    className={`w-[5px] h-[5px] rounded-full transition-all duration-300 ${idx === celebIndex ? 'bg-[#3DBFA0] scale-[1.5]' : 'bg-[#1A6B5A]/20'}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[0.7rem] text-[#3DBFA0]/35 tracking-[1px] uppercase mt-10 py-1.5 px-4 border border-[#1A6B5A]/12 rounded-full reveal">
                        <span>🔒</span> All consultations are strictly confidential
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-20 px-5 bg-[#1A6B5A]/03 border-t border-b border-[#1A6B5A]/35 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-3 text-center reveal">Simple Process</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12 reveal">
                        Here Is Exactly How It Works
                    </h2>
                    <div className="flex flex-col max-w-[620px] mx-auto reveal">
                        {[
                            { num: "1", title: "Enter Your Birth Details", desc: "Date, time, and place of birth — the precise foundation of your karmic and destiny map." },
                            { num: "2", title: "Destiny-Centric Chart Mapping", desc: "Your unique planetary blueprint is generated with focus on karmic houses, Nakshatra, Dasha cycles, and divisional charts." },
                            { num: "3", title: "Karmic Pattern Interpretation", desc: "Detailed analysis of life themes, recurring patterns, soul purpose indicators, and destiny-defining periods." },
                            { num: "4", title: "Remedies & Guidance Prepared", desc: "Practical remedies and actionable advice compiled to help you work with your destiny, not against it." },
                            { num: "5", title: "Secure Digital Delivery", desc: "Your complete Personalised Destiny Report delivered to your inbox — ready to read, revisit, and act on." }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6 pb-9 last:pb-0 group">
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2A9278] to-[#1A6B5A] flex items-center justify-center font-serif text-[1.2rem] font-bold text-[#C8EDE8] shadow-[0_4px_20px_rgba(26,107,90,0.4)] relative z-10 group-hover:scale-105 transition-transform">
                                        {step.num}
                                    </div>
                                    {i < 4 && <div className="w-[1px] flex-1 bg-gradient-to-b from-[#2A9278] to-transparent mt-2 min-h-[30px]" />}
                                </div>
                                <div className="pt-2.5">
                                    <div className="text-base font-medium mb-1 text-[#E8F0EE] tracking-wide">{step.title}</div>
                                    <div className="text-[0.85rem] text-[#627870] leading-[1.65]">{step.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-5 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-3 text-center reveal">Choose Your Plan</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12 reveal">
                        Select What Feels Right
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 items-start">
                        {[
                            {
                                name: "Destiny Report",
                                desc: "Your complete karma & destiny blueprint",
                                price: "₹799",
                                old: "₹2,499",
                                features: ["Full karmic & soul purpose analysis", "Nakshatra-based destiny path mapping", "Dasha & karmic period identification", "Destiny vs. free-will zones explained", "Personalised Vedic remedies included"],
                                type: 'standard'
                            },
                            {
                                name: "Destiny Report + Ask 2 Questions",
                                desc: "Focused written answers to your specific concerns",
                                price: "₹1,699",
                                old: "₹4,499",
                                features: ["Everything in the Destiny Report", "Ask 2 specific destiny-related questions", "Detailed written answers within 48 hours", "Ideal for targeted karmic clarity", "Best for specific life decisions"],
                                type: 'featured',
                                badge: 'Most Popular'
                            },
                            {
                                name: "Destiny Report + Consultation",
                                desc: "Speak directly with an expert",
                                price: "₹2,999",
                                old: "₹7,499",
                                features: ["Everything in the Destiny Report", "15–20 min private consultation", "Discuss karmic patterns in real time", "Personalised remedies for your situation", "Deepest level of clarity available"],
                                type: 'standard'
                            }
                        ].map((plan, i) => (
                            <div key={i} className={`rounded-[20px] p-8 md:px-7 relative transition-all duration-300 reveal ${plan.type === 'featured' ? 'bg-gradient-to-br from-[#101E18] to-[#0A1510] border-2 border-[#2A9278] shadow-[0_0_60px_rgba(26,107,90,0.15)] ring-1 ring-[#2A9278]' : 'bg-[#0D1A16] border border-[#1A6B5A]/35 hover:border-[#2A9278]/45'}`}>
                                {plan.badge && (
                                    <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2A9278] to-[#3DBFA0] text-[#0A1510] text-[10px] font-bold tracking-[1.5px] uppercase py-1 px-4.5 rounded-full whitespace-nowrap shadow-md">
                                        {plan.badge}
                                    </div>
                                )}
                                <div className="text-[0.78rem] tracking-[1.5px] uppercase text-[#627870] mb-2">{plan.name}</div>
                                <div className="text-[0.85rem] text-[#627870] mb-5 leading-[1.5]">{plan.desc}</div>
                                <div className="font-serif text-[2.6rem] font-bold text-[#C9933A] leading-none mb-1">{plan.price}</div>
                                <div className="text-[0.9rem] text-[#627870] line-through mb-5">{plan.old}</div>

                                <ul className="flex flex-col gap-2.5 mb-8 border-t border-[#1A6B5A]/35 pt-5">
                                    {plan.features.map((f, fi) => (
                                        <li key={fi} className="text-[0.85rem] text-[#8AB8B0] flex items-start gap-2 leading-[1.5]">
                                            <span className="text-[#3DBFA0] text-[9px] mt-1 flex-shrink-0">✦</span>{f}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#" className={`block w-full py-3.5 rounded-[10px] font-sans font-semibold text-[0.95rem] text-center transition-all ${plan.type === 'featured' ? 'bg-gradient-to-br from-[#2A9278] to-[#1A6B5A] text-[#C8EDE8] shadow-[0_8px_25px_rgba(26,107,90,0.4)] hover:shadow-[0_14px_35px_rgba(42,146,120,0.5)] hover:-translate-y-0.5' : 'border border-[#1A6B5A]/35 text-[#E8F0EE] hover:border-[#2A9278] hover:text-[#8ACCC0]'}`}>
                                    Buy Now
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-5 border-t border-[#1A6B5A]/35 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(26,107,90,0.06)_0%,transparent_70%)] relative z-10">
                <div className="max-w-[760px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-6 text-center reveal">The Expert Behind The Report</span>
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-center text-center md:text-left reveal">
                        <div>
                            <img src="https://content.vinaybajrangi.com/img/content/1760069123-channels4_profile.jpg" alt="Dr. Vinay Bajrangi" className="w-[180px] h-[180px] rounded-full object-cover border-[3px] border-[#2A9278] shadow-[0_0_40px_rgba(42,146,120,0.25)] mx-auto" />
                        </div>
                        <div>
                            <div className="font-serif text-[2rem] font-semibold mb-2 text-[#E8F0EE]">Dr. Vinay Bajrangi</div>
                            <div className="text-[0.8rem] text-[#3DBFA0] tracking-[1px] uppercase mb-3.5">India's Leading Karma & Destiny Astrologer</div>
                            <p className="text-[0.88rem] text-[#789890] leading-[1.75] mb-5">
                                Respected globally for his precision and depth, Dr. Bajrangi specialises in the intersection of karma, planetary science, and conscious life design. His approach strips away superstition and replaces it with systematic, honest insight — helping seekers understand not just what is happening, but why, and what they can actually do about it.
                            </p>
                            <div className="flex justify-center md:justify-start gap-7 flex-wrap">
                                {[
                                    { val: "25+", label: "Years Experience" },
                                    { val: "3L+", label: "Seekers Worldwide" },
                                    { val: "Global", label: "Clientele" }
                                ].map((s, i) => (
                                    <div key={i} className="flex flex-col items-center md:items-start gap-0.5 text-[11px] text-[#627870] uppercase tracking-[1px]">
                                        <strong className="font-serif text-[1.6rem] text-[#E8B96A] block leading-none">{s.val}</strong>
                                        <span>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Row */}
            <section className="py-14 px-5 border-t border-[#1A6B5A]/35 relative z-10">
                <div className="max-w-[960px] mx-auto text-center">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-6 reveal">As Seen In</span>
                    <div className="flex flex-wrap justify-center gap-2.5 reveal">
                        {["📺 Bharti TV", "📈 Business Today", "📰 Dainik Bhaskar", "🇮🇳 India News", "🗞️ Mid-Day", "🌿 Mint", "👀 Outlook", "📰 Rajasthan Patrika", "🕉️ Sadhna TV", "▶️ YouTube", "📺 Zee Network"].map((tag, i) => (
                            <span key={i} className="bg-white/[0.025] border border-white/[0.05] rounded-[8px] py-1.5 px-3 md:px-4 text-[0.78rem] text-[#4A6860] hover:bg-white/[0.05] transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-5 bg-white/[0.01] border-t border-[#1A6B5A]/35 relative z-10">
                <div className="max-w-[680px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-3 text-center reveal">Common Questions</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12 reveal">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col gap-3">
                        {[
                            { q: "How is this different from the Life Journey Report?", a: "The Life Journey Report focuses on planning, timing, and life milestones. The Destiny Report goes deeper — into soul purpose, karmic patterns, and the \"why\" behind life events. It is especially suited for seekers who want existential clarity, not just a roadmap." },
                            { q: "Does this report predict fixed fate?", a: "No. The report distinguishes clearly between destiny zones (karmic givens that carry lessons) and free-will zones (areas where your choices genuinely change outcomes). The goal is awareness and alignment, not fatalism." },
                            { q: "Is this report fully personalised?", a: "Yes. It is created strictly using your exact birth details — date, time, and place. Nothing in it is generic." },
                            { q: "Is this suitable for someone on a spiritual path?", a: "It is especially well-suited for spiritual seekers. The report addresses karma, soul evolution, and the deeper design of your life — giving spiritual inquiry a grounded, structured framework." },
                            { q: "Are the remedies compulsory or complicated?", a: "No. Remedies are optional and supportive — simple mantras, donations, or behavioural adjustments. Nothing expensive or difficult." },
                            { q: "How will I receive the report and how long does it take?", a: "Your report is delivered as a written digital document to your email. Delivery typically takes up to 48 hours after purchase." }
                        ].map((faq, i) => (
                            <div key={i} className={`bg-[#0D1A16] border border-[#1A6B5A]/35 rounded-[12px] overflow-hidden reveal transition-all duration-300 ${activeFaq === i ? 'max-h-[300px]' : 'max-h-[64px]'}`}>
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex justify-between items-center p-5 md:px-6 bg-transparent border-none text-[#E8F0EE] font-sans text-[0.95rem] cursor-pointer text-left gap-4"
                                >
                                    <span className="flex-1">{faq.q}</span>
                                    <span className={`text-[#3DBFA0] text-xl transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                <div className={`px-6 pb-5 text-[0.87rem] text-[#627870] leading-[1.7] transition-all duration-300 ${activeFaq === i ? 'opacity-100' : 'opacity-0'}`}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-5 pb-28 text-center bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(26,107,90,0.15)_0%,transparent_70%)] relative z-10 overflow-hidden">
                <span className="block text-[11px] tracking-[2.5px] uppercase text-[#3DBFA0] mb-3 reveal">Your Destiny Awaits Understanding</span>
                <h2 className="font-serif text-[clamp(1.8rem,4vw,3.1rem)] font-semibold leading-[1.2] mb-3 reveal">
                    Your Destiny Is Already Written.<br />
                    <em className="italic bg-gradient-to-br from-[#E8B96A] to-[#3DBFA0] bg-clip-text text-transparent not-italic font-serif">Understanding It Changes Everything.</em>
                </h2>

                <div className="w-[60px] h-[1px] bg-gradient-to-r from-transparent via-[#2A9278] to-transparent mx-auto my-12 reveal" />

                <div className="bg-gradient-to-br from-[#0E1C17] to-[#0A1410] border border-[#1A6B5A]/35 rounded-[22px] p-9 md:p-10 max-w-[520px] w-full mx-auto relative offer-box-glow reveal">
                    <div className="flex items-baseline justify-center gap-3.5 mb-2">
                        <span className="text-[1.3rem] text-[#627870] line-through">₹2,499</span>
                        <span className="font-serif text-[3.2rem] font-bold text-[#C9933A] leading-none">₹799</span>
                    </div>

                    <div className="text-center mb-6">
                        <span className="inline-block bg-[#C9933A]/10 text-[#E8B96A] text-xs py-1 px-4 rounded-full">
                            68% OFF — Limited Period
                        </span>
                    </div>

                    <a href="#" className="block w-full bg-gradient-to-br from-[#C9933A] to-[#A8712A] text-[#0A0E0C] font-semibold text-base tracking-[0.3px] py-4.5 px-8 rounded-xl cursor-pointer no-underline shadow-[0_8px_30px_rgba(201,147,58,0.35)] hover:shadow-[0_14px_40px_rgba(201,147,58,0.45)] hover:-translate-y-0.5 transition-all duration-200">
                        Unlock My Personalised Destiny Report →
                    </a>
                    <p className="text-[0.75rem] text-[#627870] mt-3.5 text-center">
                        3L+ seekers trust Dr. Vinay Bajrangi · 100% personalised · Strictly confidential
                    </p>
                </div>
            </section>

        </div>
    );
}
