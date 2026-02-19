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
    weight: ['400', '500', '700'],
    variable: '--font-dm-sans',
});

export default function LifeJourneyReport2() {
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
            const scrollAmount = current.clientWidth * 0.5; // Scroll half container width for sample cards
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
            const index = Math.round(current.scrollLeft / (current.scrollWidth / 5)); // Approx index based on 5 items
            setSampleIndex(Math.min(index, 4));
        }
    }

    // Celebrity Slider Logic
    const celebScrollRef = useRef(null);
    const [celebIndex, setCelebIndex] = useState(0);

    const scrollCeleb = (direction) => {
        if (celebScrollRef.current) {
            const { current } = celebScrollRef;
            const scrollAmount = current.clientWidth; // Scroll full width
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
    }


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
        }, 5200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${cormorant.variable} ${dmSans.variable} font-sans bg-[#080812] text-[#EDE8F5] overflow-x-hidden min-h-screen relative`}>
            <Head>
                <title>Life Journey Report — Dr. Vinay Bajrangi</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Star Field Background - implemented via CSS in style tag for complex gradients */}
            <style jsx global>{`
        :root {
            --font-cormorant: ${cormorant.style.fontFamily}, serif;
            --font-dm-sans: ${dmSans.style.fontFamily}, sans-serif;
        }
        body {
            background-color: #080812;
            font-family: var(--font-dm-sans);
        }
        h1, h2, h3, .font-serif {
            font-family: var(--font-cormorant);
        }
        .font-sans {
            font-family: var(--font-dm-sans);
        }
        .star-field {
          position: fixed; inset: 0;
          background-image:
            radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 40% 8%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 60%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 25%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 85% 50%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 92% 10%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 5% 75%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 85%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 78% 70%, rgba(255,255,255,0.5) 0%, transparent 100%);
          pointer-events: none;
          z-index: 0;
        }
        .hero-bg {
             background:
              radial-gradient(ellipse 90% 55% at 50% -10%, rgba(59,47,110,0.7) 0%, transparent 65%),
              radial-gradient(ellipse 50% 35% at 20% 90%, rgba(91,77,160,0.18) 0%, transparent 60%),
              radial-gradient(ellipse 40% 30% at 85% 80%, rgba(201,147,58,0.08) 0%, transparent 60%),
              #080812;
        }
        .offer-box-shadow {
            box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(91,77,160,0.1) inset;
        }
        .text-gradient-gold {
            background: linear-gradient(135deg, #E8B96A, #7B5EA7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

            <div className="star-field" />

            {/* Hero Section */}
            <section className="hero-bg relative z-10 min-h-screen flex flex-col items-center justify-center text-center pt-16 pb-12 px-5">
                <div className="inline-flex items-center gap-2 bg-[#3B2F6E]/15 border border-[#5B4DA0]/30 rounded-full py-1.5 px-5 text-[11px] tracking-[2px] uppercase text-[#A89DD4] mb-7 animate-[fadeUp_0.6s_ease_both]">
                    ✦ Vedic Life Journey Report ✦
                </div>

                <h1 className="font-serif text-[clamp(2.2rem,6vw,4.4rem)] font-semibold leading-[1.15] max-w-[780px] mb-2.5 animate-[fadeUp_0.7s_0.1s_ease_both]">
                    Feeling Stuck, Confused, or Like<br />
                    <em className="text-gradient-gold not-italic">Life Isn't Going as Planned?</em>
                </h1>

                <p className="text-[0.8rem] tracking-[1.5px] uppercase text-[#7A7498] mb-3.5 animate-[fadeUp_0.7s_0.15s_ease_both]">
                    By Dr. Vinay Bajrangi — Internationally Renowned Astrologer & Karma Expert
                </p>

                <p className="text-base text-[#8A85B0] max-w-[520px] leading-[1.75] mb-10 animate-[fadeUp_0.7s_0.2s_ease_both]">
                    Your birth chart holds the answers. A 5-year astrological roadmap revealing your path, timing, and true potential — based on precise Vedic analysis.
                </p>

                {/* Offer Box */}
                <div className="bg-gradient-to-br from-[#14122A] to-[#0E0C1E] border border-[#5B4DA0]/30 rounded-[20px] p-9 md:p-10 max-w-[520px] w-full mx-auto mb-8 relative offer-box-shadow animate-[fadeUp_0.7s_0.3s_ease_both]">
                    <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3B2F6E] to-[#5C4DA0] text-[#D8D0F0] text-[10px] tracking-[2px] py-1 px-4.5 rounded-full whitespace-nowrap">
                        ✦ LIMITED TIME OFFER ✦
                    </div>

                    <div className="flex items-baseline justify-center gap-3.5 mb-2">
                        <span className="text-[1.3rem] text-[#7A7498] line-through">₹1,999</span>
                        <span className="font-serif text-[3.2rem] font-bold text-[#C9933A] leading-none">₹699</span>
                    </div>

                    <div className="text-center mb-5">
                        <span className="inline-block bg-[#C9933A]/12 text-[#E8B96A] text-xs py-0.5 px-3 rounded-full mb-5.5">
                            You save ₹1,300 — 65% OFF
                        </span>
                    </div>

                    <div className="text-left mb-6 border-t border-[#5B4DA0]/30 pt-5">
                        <p className="text-[11px] tracking-[1.5px] uppercase text-[#7A7498] mb-3">What's Included</p>
                        <ul className="flex flex-col gap-2">
                            {[
                                "Detailed birth chart (Kundli) analysis",
                                "5-year life prediction & dasha insights",
                                "Career, relationships, health & finance overview",
                                "Planetary patterns & karmic cycle analysis",
                                "Personalised Vedic remedies for balance"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-[0.88rem] text-[#EDE8F5] leading-relaxed">
                                    <span className="text-[#C9933A] text-[9px] flex-shrink-0 mt-1">✦</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a href="#pricing" className="block w-full bg-gradient-to-br from-[#C9933A] to-[#A8712A] text-[#0A0818] font-semibold text-base tracking-[0.3px] py-4.5 px-8 rounded-xl cursor-pointer no-underline shadow-[0_8px_30px_rgba(201,147,58,0.35)] hover:shadow-[0_14px_40px_rgba(201,147,58,0.45)] hover:-translate-y-0.5 transition-all duration-200">
                        Get My Life Journey Report →
                    </a>
                    <p className="text-xs text-[#7A7498] mt-3 text-center">
                        Delivered to your email · 100% personalised to your birth chart
                    </p>
                </div>

                <div className="flex justify-center gap-7 flex-wrap animate-[fadeUp_0.7s_0.4s_ease_both]">
                    {[
                        { val: "⭐ 4.8/5", label: "Customer Rating" },
                        { val: "10L+", label: "Reports Delivered" },
                        { val: "25+", label: "Years Experience" },
                        { val: "Instant", label: "Digital Report" }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center gap-0.5 text-[11px] text-[#7A7498] uppercase tracking-[1px]">
                            <strong className="font-serif text-[1.4rem] text-[#E8B96A] block">{stat.val}</strong>
                            {stat.label}
                        </div>
                    ))}
                </div>

                <div className="bg-[#3B2F6E]/20 border border-[#5B4DA0]/35 rounded-xl py-3 px-6 flex items-center justify-center gap-4 max-w-[420px] mx-auto mt-6 animate-[fadeUp_0.7s_0.5s_ease_both]">
                    <span className="text-[0.82rem] text-[#9A95C8]">⏳ Offer expires in</span>
                    <span className="font-serif text-[1.8rem] text-white tracking-[4px] font-semibold">
                        {formatTime(timeLeft)}
                    </span>
                </div>
            </section>

            {/* What's Inside Section */}
            <section className="py-20 px-5 border-t border-[#5B4DA0]/30 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#9A8DCC] mb-3 text-center">Inside Your Report</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        Everything This Report Uncovers
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
                        {[
                            { num: "01", title: "Ascendant, Nakshatra & Zodiac Analysis", desc: "The foundational layer of your chart — your innate nature, instincts, and karmic starting point in this lifetime." },
                            { num: "02", title: "Detailed Birth Chart (Kundli) Reading", desc: "In-depth analysis of every planetary placement, house influence, and key yogas that shape your life's direction." },
                            { num: "03", title: "Dasha & Antardasha Insights", desc: "Precise interpretation of major and sub-periods — upcoming transitions, opportunities, and cautionary phases over the next 5 years." },
                            { num: "04", title: "Career & Financial Planetary Influence", desc: "How your planets affect professional growth and financial stability — and which periods to use vs. wait out." },
                            { num: "05", title: "Health & Relationship Patterns", desc: "Planetary indicators for health vulnerabilities and relationship dynamics — and how to work with them, not against them." },
                            { num: "06", title: "Personalised Vedic Remedies", desc: "Simple, practical remedies — mantras, gemstones, behavioral corrections — tailored to your exact planetary configuration." }
                        ].map((card, i) => (
                            <div key={i} className="bg-[#12112A] border border-[#5B4DA0]/30 rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:border-[#5B4DA0]/60 hover:-translate-y-1 group">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#7B5EA7] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <div className="font-serif text-[2.5rem] text-[#5B4DA0]/20 leading-none mb-3">{card.num}</div>
                                <div className="text-[0.95rem] font-medium mb-2 text-[#B8A8E8]">{card.title}</div>
                                <div className="text-[0.85rem] text-[#7A7498] leading-[1.65]">{card.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sample Report Slider */}
            <section className="py-20 px-5 border-t border-[#5B4DA0]/30 bg-black/25 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#9A8DCC] mb-3 text-center">See Before You Buy</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        A Glimpse Inside the Report
                    </h2>
                    <p className="text-center text-[#7A7498] text-[0.88rem] -mt-8 mb-10">
                        Real pages from an actual report — names & personal details masked for privacy.
                    </p>

                    <div className="relative max-w-[860px] mx-auto overflow-hidden text-center">
                        <div
                            ref={sampleScrollRef}
                            onScroll={handleSampleScroll}
                            className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory px-0 scroll-smooth"
                        >
                            {[
                                "Page 1 — Birth Chart & Planetary Overview",
                                "Page 2 — Ascendant, Nakshatra & Life Path",
                                "Page 3 — Dasha & 5-Year Prediction",
                                "Page 4 — Career & Finance Analysis",
                                "Page 5 — Remedies & Guidance"
                            ].map((caption, i) => (
                                <div key={i} className="flex-[0_0_calc(50%-10px)] md:flex-[0_0_calc(50%-10px)] min-w-[260px] rounded-xl overflow-hidden border border-[#5B4DA0]/30 bg-[#12112A] cursor-pointer transition-all duration-300 hover:border-[#5B4DA0]/55 hover:-translate-y-1 snap-center">
                                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#14122A] to-[#0E0C1E] flex flex-col items-center justify-center gap-3 text-[#5B4DA0]/45">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-12 h-12 opacity-50"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></svg>
                                        <span className="font-serif text-base text-[#5B4DA0]/40 tracking-wider">Sample Page {i + 1}</span>
                                        <span className="text-[0.7rem] text-[#5B4DA0]/30 mt-1">Upload your image here</span>
                                    </div>
                                    <div className="p-3.5 text-[0.78rem] text-[#7A7498] tracking-[0.5px] bg-[#12112A] border-t border-[#5B4DA0]/30">
                                        {caption}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-7">
                            <button
                                onClick={() => scrollSample('left')}
                                className="w-10 h-10 rounded-full border border-[#5B4DA0]/30 bg-[#12112A] text-[#9A8DCC] flex items-center justify-center hover:bg-[#3B2F6E]/15 hover:border-[#7B5EA7] transition-all"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <div className="flex gap-2">
                                {[0, 1, 2, 3, 4].map(idx => (
                                    <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === sampleIndex ? 'bg-[#7B5EA7] scale-110' : 'bg-[#5B4DA0]/20'}`}></div>
                                ))}
                            </div>
                            <button
                                onClick={() => scrollSample('right')}
                                className="w-10 h-10 rounded-full border border-[#5B4DA0]/30 bg-[#12112A] text-[#9A8DCC] flex items-center justify-center hover:bg-[#3B2F6E]/15 hover:border-[#7B5EA7] transition-all"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who is it for Section */}
            <section className="py-20 px-5 border-t border-b border-[#5B4DA0]/30 bg-gradient-to-b from-[#3B2F6E]/6 to-transparent relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#9A8DCC] mb-3 text-center">Is This For You?</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        This Report Is Made For You If…
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                        {[
                            { icon: "🌀", text: "You feel stuck or confused, like life isn't moving forward despite your efforts" },
                            { icon: "💼", text: "You're at a crossroads in your career or unsure about the right professional direction" },
                            { icon: "📉", text: "Financial losses or instability keep recurring despite doing everything right" },
                            { icon: "⏳", text: "Important life milestones — marriage, job, stability — feel delayed without reason" },
                            { icon: "🔁", text: "You see the same painful patterns repeating across different areas of life" },
                            { icon: "🧭", text: "You want a clear, honest roadmap for the next 5 years — not generic predictions" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3.5 p-5 bg-white/[0.015] border border-white/5 rounded-xl transition-colors duration-300 hover:border-[#5B4DA0]/30">
                                <div className="w-[38px] h-[38px] rounded-[9px] bg-[#5B4DA0]/12 flex items-center justify-center text-[17px] flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div className="text-[0.88rem] text-[#A8A0C8] leading-[1.55]">{item.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-5 border-t border-[#5B4DA0]/30 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#9A8DCC] mb-3 text-center">Real Experiences</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        Real People. Real Clarity. Real Change.
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
                        {[
                            { tag: "Career Confusion", text: "\"I was 27, feeling completely lost about my direction. The report told me exactly why — and more importantly, when this phase would end and what to focus on until then. That single insight gave me more peace than two years of overthinking.\"", author: "Arjun M.", role: "Software Engineer, Pune" },
                            { tag: "Marriage Delay", text: "\"Proposals kept falling through and my family was anxious. The report identified the specific Dasha causing delays and gave a realistic timeline. Within the timeframe Dr. Bajrangi indicated, things genuinely shifted. I am now engaged.\"", author: "Priya N.", role: "Teacher, Kochi" },
                            { tag: "Financial Stress", text: "\"Three years of financial losses despite best efforts. The report explained the planetary combination and told me which months to avoid major decisions. Following that guidance, the bleeding stopped. Understanding my timing helped me stop making it worse.\"", author: "Rakesh S.", role: "Business Owner, Ahmedabad" }
                        ].map((testi, i) => (
                            <div key={i} className="bg-[#12112A] border border-[#5B4DA0]/30 rounded-2xl p-7 transition-colors hover:border-[#5B4DA0]/45">
                                <span className="inline-block bg-[#5B4DA0]/12 border border-[#5B4DA0]/30 rounded-md text-[10px] tracking-[1px] uppercase text-[#9A8DCC] py-0.5 px-2.5 mb-3.5">
                                    {testi.tag}
                                </span>
                                <div className="font-serif italic text-[1.05rem] leading-[1.75] text-[#C8C0E0] mb-5">
                                    {testi.text}
                                </div>
                                <div className="text-[0.9rem] text-[#EDE8F5]">
                                    <strong>{testi.author}</strong>
                                    <span className="block text-[0.78rem] text-[#7A7498]">{testi.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Celebrity Carousel Section */}
            <section className="py-20 px-5 border-t border-[#5B4DA0]/30 text-center relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#9A8DCC] mb-3 text-center">Private Consultations</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-2">
                        Trusted by Those in the Public Eye
                    </h2>
                    <span className="block font-serif italic text-base text-[#9A8DCC]/60 mb-12">
                        Shared with permission. All identifying details handled with full discretion.
                    </span>

                    <div className="relative max-w-[680px] mx-auto overflow-hidden">
                        <div
                            ref={celebScrollRef}
                            onScroll={handleCelebScroll}
                            className="flex gap-0 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
                        >
                            {[
                                { quote: "In my profession, every major decision is watched. The Life Journey Report helped me understand which years were meant for consolidation and which for growth. I stopped fighting the wrong phases and started using them correctly.", initial: "A", name: "Akshay K.", role: "Actor & Film Producer, Mumbai" },
                                { quote: "I was going through a difficult personal and professional phase simultaneously. The report gave me a timeline — not vague hope, but actual planetary periods. Knowing when things would shift made the hard phase bearable.", initial: "K", name: "Kartik A.", role: "Actor, Mumbai" },
                                { quote: "What stood out was the absence of fear-mongering. It was honest, methodical, and grounded. The career and timing insights were accurate in ways that still surprise me. It's become something I revisit every year.", initial: "N", name: "Nora F.", role: "Dancer & Actress, Mumbai" },
                                { quote: "I consulted during a comeback phase in my career. The planetary analysis helped me time decisions more intelligently. I can't share specifics, but the guidance was precise and changed how I approached that entire period.", initial: "S", name: "Sidharth M.", role: "Actor, Mumbai" }
                            ].map((celeb, i) => (
                                <div key={i} className="flex-[0_0_100%] flex flex-col items-center gap-5 px-4 snap-center">
                                    <div className="bg-[#5B4DA0]/5 border border-[#5B4DA0]/12 rounded-2xl p-6 md:p-9 max-w-[540px] relative">
                                        <span className="font-serif text-[5rem] text-[#5B4DA0]/12 absolute -top-2.5 left-5 leading-none">"</span>
                                        <p className="font-serif italic text-[1.12rem] text-[#C0B8DC] leading-[1.8] relative z-10">
                                            {celeb.quote}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3.5">
                                        <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#5B4DA0]/25 to-[#3B2F6E]/25 border border-[#5B4DA0]/35 flex items-center justify-center font-serif text-[1.1rem] text-[#9A8DCC] flex-shrink-0">
                                            {celeb.initial}
                                        </div>
                                        <div className="text-left">
                                            <div className="text-[0.92rem] font-medium text-[#EDE8F5] mb-0.5">{celeb.name}</div>
                                            <div className="text-[0.73rem] text-[#7A7498] tracking-[0.5px] uppercase">{celeb.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={() => scrollCeleb('left')}
                                className="w-10 h-10 rounded-full border border-[#5B4DA0]/30 bg-[#12112A] text-[#9A8DCC] flex items-center justify-center hover:bg-[#3B2F6E]/15 hover:border-[#7B5EA7] transition-all"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <div className="flex gap-2">
                                {[0, 1, 2, 3].map(idx => (
                                    <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === celebIndex ? 'bg-[#7B5EA7] scale-110' : 'bg-[#5B4DA0]/20'}`}></div>
                                ))}
                            </div>
                            <button
                                onClick={() => scrollCeleb('right')}
                                className="w-10 h-10 rounded-full border border-[#5B4DA0]/30 bg-[#12112A] text-[#9A8DCC] flex items-center justify-center hover:bg-[#3B2F6E]/15 hover:border-[#7B5EA7] transition-all"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[0.7rem] text-[#9A8DCC]/40 tracking-[1px] uppercase mt-8 py-1.5 px-4 border border-[#5B4DA0]/12 rounded-full">
                        <span>🔒</span> All consultations are strictly confidential
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-20 px-5 bg-[#5B4DA0]/[0.03] border-t border-b border-[#5B4DA0]/30 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#9A8DCC] mb-3 text-center">Simple Process</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        Here Is Exactly How It Works
                    </h2>
                    <div className="flex flex-col gap-0 max-w-[620px] mx-auto">
                        {[
                            { num: "1", title: "Enter Your Birth Details", desc: "Date, time, and place of birth — the foundation of your personalised chart calculation." },
                            { num: "2", title: "Precise Planetary Mapping", desc: "Your birth chart is generated using exact planetary positions, house placements, and dasha timelines." },
                            { num: "3", title: "In-Depth Astrological Interpretation", desc: "Detailed analysis of Dashas, Transits, Houses, and Yogas — translated into clear, plain-language insights." },
                            { num: "4", title: "Actionable Remedies & Guidance", desc: "Practical, non-intrusive recommendations to work with your planetary energies, not against them." },
                            { num: "5", title: "Report Delivered to Your Email", desc: "Your complete Life Journey Report delivered as a structured digital document — ready to read and act on." }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6 relative pb-9 last:pb-0">
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#5C4DA0] to-[#3B2F6E] flex items-center justify-center font-serif text-[1.2rem] font-bold text-[#EDE8FF] shadow-[0_4px_20px_rgba(59,47,110,0.4)] relative z-10">
                                        {step.num}
                                    </div>
                                    {i < 4 && <div className="w-[1px] flex-1 bg-gradient-to-b from-[#7B5EA7] to-transparent mt-2 min-h-[30px]"></div>}
                                </div>
                                <div className="pt-2.5">
                                    <div className="text-base font-medium mb-1 text-[#EDE8F5]">{step.title}</div>
                                    <div className="text-[0.85rem] text-[#7A7498] leading-[1.65]">{step.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-5 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#9A8DCC] mb-3 text-center">Choose Your Plan</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        Select What Feels Right
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 items-start">

                        {/* Standard Plan */}
                        <div className="bg-[#12112A] border border-[#5B4DA0]/30 rounded-[20px] p-8 md:px-7 relative transition-colors hover:border-[#5B4DA0]/45">
                            <div className="text-[0.78rem] tracking-[1.5px] uppercase text-[#7A7498] mb-2">Life Journey Report</div>
                            <div className="text-[0.85rem] text-[#7A7498] mb-5 leading-[1.5]">Your personalised astrological roadmap</div>
                            <div className="font-serif text-[2.6rem] font-bold text-[#C9933A] leading-none mb-1">₹699</div>
                            <div className="text-[0.9rem] text-[#7A7498] line-through mb-5">₹1,999</div>

                            <ul className="flex flex-col gap-2.5 mb-7 border-t border-[#5B4DA0]/30 pt-5">
                                {[
                                    "In-depth Vedic life analysis",
                                    "5-year prediction with dasha insights",
                                    "Career, relationships, health & finances",
                                    "Personalised remedies included",
                                    "Written in simple, clear language"
                                ].map((feat, i) => (
                                    <li key={i} className="text-[0.85rem] text-[#B0A8D0] flex items-start gap-2 leading-[1.5]">
                                        <span className="text-[#7B5EA7] text-[9px] mt-1 flex-shrink-0">✦</span>{feat}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="block w-full py-3.5 rounded-[10px] font-sans font-semibold text-[0.95rem] text-center border border-[#5B4DA0]/30 text-[#EDE8F5] transition-all hover:border-[#7B5EA7] hover:text-[#B8A8E8]">Buy Now</a>
                        </div>

                        {/* Featured Plan */}
                        <div className="bg-gradient-to-br from-[#1A1535] to-[#100E24] border border-[#7B5EA7] rounded-[20px] p-8 md:px-7 relative shadow-[0_0_60px_rgba(91,77,160,0.18)]">
                            <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5C4DA0] to-[#7B5EA7] text-[#EDE8FF] text-[10px] font-semibold tracking-[1.5px] uppercase py-1 px-4 rounded-full whitespace-nowrap">
                                Best Seller
                            </div>
                            <div className="text-[0.78rem] tracking-[1.5px] uppercase text-[#7A7498] mb-2">Report + Consultation</div>
                            <div className="text-[0.85rem] text-[#7A7498] mb-5 leading-[1.5]">Speak directly with an astrological expert</div>
                            <div className="font-serif text-[2.6rem] font-bold text-[#C9933A] leading-none mb-1">₹799</div>
                            <div className="text-[0.9rem] text-[#7A7498] line-through mb-5">₹6,000</div>

                            <ul className="flex flex-col gap-2.5 mb-7 border-t border-[#5B4DA0]/30 pt-5">
                                {[
                                    "Everything in the Life Journey Report",
                                    "15–20 min private consultation",
                                    "Discuss challenges & decisions in real time",
                                    "Personalised remedies for your situation"
                                ].map((feat, i) => (
                                    <li key={i} className="text-[0.85rem] text-[#B0A8D0] flex items-start gap-2 leading-[1.5]">
                                        <span className="text-[#7B5EA7] text-[9px] mt-1 flex-shrink-0">✦</span>{feat}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="block w-full py-3.5 rounded-[10px] font-sans font-semibold text-[0.95rem] text-center bg-gradient-to-br from-[#5C4DA0] to-[#3B2F6E] text-[#EDE8FF] shadow-[0_8px_25px_rgba(59,47,110,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(91,77,160,0.5)]">Buy Now</a>
                        </div>

                        {/* Questions Plan */}
                        <div className="bg-[#12112A] border border-[#5B4DA0]/30 rounded-[20px] p-8 md:px-7 relative transition-colors hover:border-[#5B4DA0]/45">
                            <div className="text-[0.78rem] tracking-[1.5px] uppercase text-[#7A7498] mb-2">Report + Ask 2 Questions</div>
                            <div className="text-[0.85rem] text-[#7A7498] mb-5 leading-[1.5]">Focused written answers to your concerns</div>
                            <div className="font-serif text-[2.6rem] font-bold text-[#C9933A] leading-none mb-1">₹749</div>
                            <div className="text-[0.9rem] text-[#7A7498] line-through mb-5">₹4,599</div>

                            <ul className="flex flex-col gap-2.5 mb-7 border-t border-[#5B4DA0]/30 pt-5">
                                {[
                                    "Everything in the Life Journey Report",
                                    "Ask 2 specific questions (career, marriage, etc.)",
                                    "Detailed written answers within 48 hours",
                                    "Ideal for quick, specific clarity"
                                ].map((feat, i) => (
                                    <li key={i} className="text-[0.85rem] text-[#B0A8D0] flex items-start gap-2 leading-[1.5]">
                                        <span className="text-[#7B5EA7] text-[9px] mt-1 flex-shrink-0">✦</span>{feat}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="block w-full py-3.5 rounded-[10px] font-sans font-semibold text-[0.95rem] text-center border border-[#5B4DA0]/30 text-[#EDE8F5] transition-all hover:border-[#7B5EA7] hover:text-[#B8A8E8]">Buy Now</a>
                        </div>

                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-5 border-t border-[#5B4DA0]/30 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(59,47,110,0.07)_0%,transparent_70%)] relative z-10">
                <div className="max-w-[760px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#9A8DCC] mb-6 text-center">The Expert Behind The Report</span>
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-center text-center md:text-left">
                        <div>
                            <img src="https://content.vinaybajrangi.com/img/content/1760069123-channels4_profile.jpg" alt="Dr. Vinay Bajrangi" className="w-[180px] h-[180px] rounded-full object-cover border-[3px] border-[#7B5EA7] shadow-[0_0_40px_rgba(91,77,160,0.3)] mx-auto" />
                        </div>
                        <div>
                            <div className="font-serif text-[2rem] font-semibold mb-2">Dr. Vinay Bajrangi</div>
                            <div className="text-[0.8rem] text-[#9A8DCC] tracking-[1px] uppercase mb-3.5">India's Leading Vedic Astrologer & Karma Expert</div>
                            <p className="text-[0.88rem] text-[#9088B0] leading-[1.75] mb-5">
                                Globally respected for precise predictions and karmic diagnosis, Dr. Bajrangi has spent 25+ years decoding the intersection of planetary timing and human destiny. His approach is methodical, practical, and grounded — no sensationalism, no fear. Just honest insight that helps people make better decisions.
                            </p>
                            <div className="flex justify-center md:justify-start gap-7 flex-wrap">
                                {[
                                    { val: "25+", label: "Years Experience" },
                                    { val: "10L+", label: "Reports Delivered" },
                                    { val: "Global", label: "Clientele" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col items-center md:items-start gap-0.5 text-[11px] text-[#7A7498] uppercase tracking-[1px]">
                                        <strong className="font-serif text-[1.6rem] text-[#E8B96A] block leading-none">{stat.val}</strong>
                                        <span>{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Section */}
            <section className="py-14 px-5 border-t border-[#5B4DA0]/30 relative z-10">
                <div className="max-w-[960px] mx-auto text-center">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#9A8DCC] mb-6">As Seen In</span>
                    <div className="flex flex-wrap justify-center gap-2.5">
                        {[
                            "📺 Bharti TV", "📈 Business Today", "📰 Dainik Bhaskar", "🇮🇳 India News",
                            "🗞️ Mid-Day", "🌿 Mint", "👀 Outlook", "📰 Rajasthan Patrika",
                            "🕉️ Sadhna TV", "▶️ YouTube", "📺 Zee Network"
                        ].map((tag, i) => (
                            <span key={i} className="bg-white/5 border border-white/5 rounded-lg py-2 px-3.5 text-[0.78rem] text-[#605880]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-5 bg-white/[0.01] border-t border-[#5B4DA0]/30 relative z-10">
                <div className="max-w-[680px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#9A8DCC] mb-3 text-center">Common Questions</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col gap-3">
                        {[
                            { q: "How soon will I receive the report?", a: "Your report is prepared and delivered to your email promptly after purchase. Delivery typically takes up to 48 hours for a fully personalised analysis." },
                            { q: "Is my personal information safe?", a: "Absolutely. We follow strict data privacy protocols and never share your birth details or personal information with any third party." },
                            { q: "Can I understand this report without knowing astrology?", a: "Yes. The report is written in plain, structured language specifically designed for someone with no astrological background. No jargon, no confusion." },
                            { q: "What if I want to ask specific questions?", a: "You can upgrade to our \"Report + Ask 2 Questions\" or \"Report + Consultation\" plans for direct, personalised answers to your specific concerns." },
                            { q: "Does this report cover only one area of life?", a: "No. The Life Journey Report is a comprehensive overview covering career, finances, relationships, health, and spiritual growth — with a 5-year dasha prediction." },
                            { q: "Are the remedies difficult or expensive?", a: "No. Only simple, accessible remedies are suggested — specific mantras, donations, gemstones, or behavioral adjustments. Nothing complicated or costly." }
                        ].map((item, i) => (
                            <div key={i} className={`bg-[#12112A] border border-[#5B4DA0]/30 rounded-xl overflow-hidden transition-all duration-300 ${activeFaq === i ? 'open' : ''}`}>
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex justify-between items-center p-5 md:px-6 bg-transparent border-none text-[#EDE8F5] font-sans text-[0.95rem] cursor-pointer text-left gap-4"
                                >
                                    {item.q}
                                    <span className={`text-[#7B5EA7] transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                <div
                                    className={`px-6 text-[0.87rem] text-[#7A7498] leading-[1.7] transition-all duration-300 overflow-hidden ${activeFaq === i ? 'max-h-[200px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    {item.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-5 pb-28 text-center bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(59,47,110,0.22)_0%,transparent_70%)] relative z-10">
                <span className="block text-[11px] tracking-[2.5px] uppercase text-[#9A8DCC] mb-3">Your Path Awaits</span>
                <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.2] mb-3">
                    Stop Fighting Your Timing.<br />
                    <em className="text-gradient-gold not-italic">Start Working With It.</em>
                </h2>

                <div className="w-[60px] h-[1px] bg-gradient-to-r from-transparent via-[#7B5EA7] to-transparent mx-auto my-12"></div>

                <div className="bg-gradient-to-br from-[#14122A] to-[#0E0C1E] border border-[#5B4DA0]/30 rounded-[20px] p-9 md:p-10 max-w-[520px] w-full mx-auto relative offer-box-shadow">
                    <div className="flex items-baseline justify-center gap-3.5 mb-2">
                        <span className="text-[1.3rem] text-[#7A7498] line-through">₹1,999</span>
                        <span className="font-serif text-[3.2rem] font-bold text-[#C9933A] leading-none">₹699</span>
                    </div>

                    <div className="text-center mb-5">
                        <span className="inline-block bg-[#C9933A]/12 text-[#E8B96A] text-xs py-0.5 px-3 rounded-full">
                            65% OFF — Limited Period
                        </span>
                    </div>

                    <a href="#" className="block w-full bg-gradient-to-br from-[#C9933A] to-[#A8712A] text-[#0A0818] font-semibold text-base tracking-[0.3px] py-4.5 px-8 rounded-xl cursor-pointer no-underline shadow-[0_8px_30px_rgba(201,147,58,0.35)] hover:shadow-[0_14px_40px_rgba(201,147,58,0.45)] hover:-translate-y-0.5 transition-all duration-200">
                        Get My Personalised Life Journey Report →
                    </a>
                    <p className="text-xs text-[#7A7498] mt-3 text-center">
                        10L+ reports delivered · Trusted for accuracy, not promises · 100% confidential
                    </p>
                </div>
            </section>

        </div>
    );
}
