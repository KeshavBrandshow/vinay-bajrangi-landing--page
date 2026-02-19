
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

export default function LoveAndRelationshipReport2() {
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
        <div className={`${cormorant.variable} ${dmSans.variable} font-sans bg-[#0f0505] text-[#F5E8E8] overflow-x-hidden min-h-screen relative`}>
            <Head>
                <title>Love & Relationship Report — Dr. Vinay Bajrangi</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Star Field Background - implemented via CSS in style tag for complex gradients */}
            <style jsx global>{`
        :root {
            --font-cormorant: ${cormorant.style.fontFamily}, serif;
            --font-dm-sans: ${dmSans.style.fontFamily}, sans-serif;
        }
        body {
            background-color: #0f0505;
            font-family: var(--font-dm-sans);
        }
        h1, h2, h3, .font-serif {
            font-family: var(--font-cormorant);
        }
        .font-sans {
            font-family: var(--font-dm-sans);
        }
        .active-faq {
            max-height: 200px;
            padding-bottom: 20px;
            opacity: 1;
        }
        .inactive-faq {
            max-height: 0;
            opacity: 0;
        }
        .star-field {
          position: fixed; inset: 0;
          background-image:
            radial-gradient(1px 1px at 10% 15%, rgba(255,200,200,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 40%, rgba(255,200,200,0.4) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 40% 8%, rgba(255,200,200,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 60%, rgba(255,200,200,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 25%, rgba(255,200,200,0.5) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 85% 50%, rgba(255,200,200,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 92% 10%, rgba(255,200,200,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 5% 75%, rgba(255,200,200,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 85%, rgba(255,200,200,0.4) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 78% 70%, rgba(255,200,200,0.5) 0%, transparent 100%);
          pointer-events: none;
          z-index: 0;
        }
        .hero-bg {
             background:
              radial-gradient(ellipse 90% 55% at 50% -10%, rgba(117,1,9,0.7) 0%, transparent 65%),
              radial-gradient(ellipse 50% 35% at 20% 90%, rgba(160,77,77,0.18) 0%, transparent 60%),
              radial-gradient(ellipse 40% 30% at 85% 80%, rgba(201,147,58,0.08) 0%, transparent 60%),
              #0f0505;
        }
        .offer-box-shadow {
            box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(160,77,77,0.1) inset;
        }
        .text-gradient-gold {
            background: linear-gradient(135deg, #E8B96A, #fa7516);
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
                <div className="inline-flex items-center gap-2 bg-[#750109]/15 border border-[#a04d4d]/30 rounded-full py-1.5 px-5 text-[11px] tracking-[2px] uppercase text-[#d49d9d] mb-7 animate-[fadeUp_0.6s_ease_both]">
                    ✦ Love & Relationship Report ✦
                </div>

                <h1 className="font-serif text-[clamp(2.2rem,6vw,4.4rem)] font-semibold leading-[1.15] max-w-[880px] mb-2.5 animate-[fadeUp_0.7s_0.1s_ease_both]">
                    Why Do Your Relationships Keep<br />
                    Following the Same <br />
                    <em className="text-gradient-gold not-italic">Painful Pattern?</em>
                </h1>

                <p className="text-[0.8rem] tracking-[1.5px] uppercase text-[#987474] mb-3.5 animate-[fadeUp_0.7s_0.15s_ease_both]">
                    By Dr. Vinay Bajrangi — Internationally Renowned Astrologer & Karma Expert
                </p>

                <p className="text-base text-[#b08585] max-w-[580px] leading-[1.75] mb-10 animate-[fadeUp_0.7s_0.2s_ease_both]">
                    Your birth chart holds a detailed emotional blueprint. Discover exactly why love feels difficult and how to align with your true relationship destiny.
                </p>

                {/* Offer Box */}
                <div className="bg-gradient-to-br from-[#2a1212] to-[#1e0c0c] border border-[#a04d4d]/30 rounded-[20px] p-9 md:p-10 max-w-[520px] w-full mx-auto mb-8 relative offer-box-shadow animate-[fadeUp_0.7s_0.3s_ease_both]">
                    <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6e2f2f] to-[#a04d4d] text-[#f0d0d0] text-[10px] tracking-[2px] py-1 px-4.5 rounded-full whitespace-nowrap">
                        ✦ LIMITED TIME OFFER ✦
                    </div>

                    <div className="flex items-baseline justify-center gap-3.5 mb-2">
                        <span className="text-[1.3rem] text-[#987474] line-through">₹1,499</span>
                        <span className="font-serif text-[3.2rem] font-bold text-[#E8B96A] leading-none">₹599</span>
                    </div>

                    <div className="text-center mb-5">
                        <span className="inline-block bg-[#E8B96A]/12 text-[#E8B96A] text-xs py-0.5 px-3 rounded-full mb-5.5">
                            You save ₹900 — 60% OFF
                        </span>
                    </div>

                    <div className="text-left mb-6 border-t border-[#a04d4d]/30 pt-5">
                        <p className="text-[11px] tracking-[1.5px] uppercase text-[#987474] mb-3">What's Included</p>
                        <ul className="flex flex-col gap-2">
                            {[
                                "In-depth emotional & love nature analysis",
                                "Timing of extensive love periods & marriage",
                                "Causes of delays, breakups & conflicts",
                                "Compatibility & long-term stability insights",
                                "Personalised remedies for relationship harmony"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-[0.88rem] text-[#F5E8E8] leading-relaxed">
                                    <span className="text-[#E8B96A] text-[9px] flex-shrink-0 mt-1">✦</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a href="#pricing" className="block w-full bg-gradient-to-br from-[#E8B96A] to-[#A8712A] text-[#180808] font-semibold text-base tracking-[0.3px] py-4.5 px-8 rounded-xl cursor-pointer no-underline shadow-[0_8px_30px_rgba(201,147,58,0.35)] hover:shadow-[0_14px_40px_rgba(201,147,58,0.45)] hover:-translate-y-0.5 transition-all duration-200">
                        Get My Love Report →
                    </a>
                    <p className="text-xs text-[#987474] mt-3 text-center">
                        Delivered to your email · 100% personalised to your birth chart
                    </p>
                </div>

                <div className="flex justify-center gap-7 flex-wrap animate-[fadeUp_0.7s_0.4s_ease_both]">
                    {[
                        { val: "⭐ 4.8/5", label: "Customer Rating" },
                        { val: "4.5L+", label: "Reports Delivered" },
                        { val: "25+", label: "Years Experience" },
                        { val: "Instant", label: "Digital Report" }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center gap-0.5 text-[11px] text-[#987474] uppercase tracking-[1px]">
                            <strong className="font-serif text-[1.4rem] text-[#E8B96A] block">{stat.val}</strong>
                            {stat.label}
                        </div>
                    ))}
                </div>

                <div className="bg-[#6e2f2f]/20 border border-[#a04d4d]/35 rounded-xl py-3 px-6 flex items-center justify-center gap-4 max-w-[420px] mx-auto mt-6 animate-[fadeUp_0.7s_0.5s_ease_both]">
                    <span className="text-[0.82rem] text-[#c89595]">⏳ Offer expires in</span>
                    <span className="font-serif text-[1.8rem] text-white tracking-[4px] font-semibold">
                        {formatTime(timeLeft)}
                    </span>
                </div>
            </section>

            {/* What's Inside Section */}
            <section className="py-20 px-5 border-t border-[#a04d4d]/30 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#cc8d8d] mb-3 text-center">Inside Your Report</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        Everything This Report Uncovers
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
                        {[
                            { num: "01", title: "Emotional Needs & Attachment Style", desc: "Understand your core emotional nature and what you truly need in a relationship to feel secure." },
                            { num: "02", title: "Timing of Love & Marriage", desc: "Prediction of favorable periods for finding love, getting married, or deepening commitment." },
                            { num: "03", title: "Why Delays & Breakups?", desc: "Root cause analysis of why relationships fail or why marriage is delayed despite your efforts." },
                            { num: "04", title: "Compatibility Insights", desc: "Checking whether you are compatible for long-term stability and happiness." },
                            { num: "05", title: "Long-Term Stability", desc: "Will it last? Detailed insights into the longevity and quality of your bond." },
                            { num: "06", title: "Personalised Vedic Remedies", desc: "Simple, practical remedies — mantras, gemstones, behavioral corrections — to resolve conflicts." }
                        ].map((card, i) => (
                            <div key={i} className="bg-[#2a1111] border border-[#a04d4d]/30 rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:border-[#a04d4d]/60 hover:-translate-y-1 group">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#a75e5e] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <div className="font-serif text-[2.5rem] text-[#a04d4d]/20 leading-none mb-3">{card.num}</div>
                                <div className="text-[0.95rem] font-medium mb-2 text-[#e8b8b8]">{card.title}</div>
                                <div className="text-[0.85rem] text-[#987474] leading-[1.65]">{card.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sample Report Slider */}
            <section className="py-20 px-5 border-t border-[#a04d4d]/30 bg-black/25 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#cc8d8d] mb-3 text-center">See Before You Buy</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        A Glimpse Inside the Report
                    </h2>
                    <p className="text-center text-[#987474] text-[0.88rem] -mt-8 mb-10">
                        Real pages from an actual report — names & personal details masked for privacy.
                    </p>

                    <div className="relative max-w-[860px] mx-auto overflow-hidden text-center">
                        <div
                            ref={sampleScrollRef}
                            onScroll={handleSampleScroll}
                            className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory px-0 scroll-smooth"
                        >
                            {[
                                "Page 1 — Birth Chart & Love Analysis",
                                "Page 2 — Emotional Nature & Patterns",
                                "Page 3 — Relationship Timing & Prediction",
                                "Page 4 — Compatibility & Stability Test",
                                "Page 5 — Remedies & Healing Guidance"
                            ].map((caption, i) => (
                                <div key={i} className="flex-[0_0_calc(50%-10px)] md:flex-[0_0_calc(50%-10px)] min-w-[260px] rounded-xl overflow-hidden border border-[#a04d4d]/30 bg-[#2a1111] cursor-pointer transition-all duration-300 hover:border-[#a04d4d]/55 hover:-translate-y-1 snap-center">
                                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#2a1212] to-[#1e0c0c] flex flex-col items-center justify-center gap-3 text-[#a04d4d]/45">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-12 h-12 opacity-50"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></svg>
                                        <span className="font-serif text-base text-[#a04d4d]/40 tracking-wider">Sample Page {i + 1}</span>
                                        <span className="text-[0.7rem] text-[#a04d4d]/30 mt-1">Upload your image here</span>
                                    </div>
                                    <div className="p-3.5 text-[0.78rem] text-[#987474] tracking-[0.5px] bg-[#2a1111] border-t border-[#a04d4d]/30">
                                        {caption}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-7">
                            <button
                                onClick={() => scrollSample('left')}
                                className="w-10 h-10 rounded-full border border-[#a04d4d]/30 bg-[#2a1111] text-[#cc8d8d] flex items-center justify-center hover:bg-[#6e2f2f]/15 hover:border-[#a75e5e] transition-all"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <div className="flex gap-2">
                                {[0, 1, 2, 3, 4].map(idx => (
                                    <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === sampleIndex ? 'bg-[#a75e5e] scale-110' : 'bg-[#a04d4d]/20'}`}></div>
                                ))}
                            </div>
                            <button
                                onClick={() => scrollSample('right')}
                                className="w-10 h-10 rounded-full border border-[#a04d4d]/30 bg-[#2a1111] text-[#cc8d8d] flex items-center justify-center hover:bg-[#6e2f2f]/15 hover:border-[#a75e5e] transition-all"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who is it for Section */}
            <section className="py-20 px-5 border-t border-b border-[#a04d4d]/30 bg-gradient-to-b from-[#6e2f2f]/6 to-transparent relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#cc8d8d] mb-3 text-center">Is This For You?</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        This Report Is Made For You If…
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                        {[
                            { icon: "💔", text: "You are facing repeated heartbreaks or failed relationships despite giving your best" },
                            { icon: "🤷‍♂️", text: "You are confused between two relationships and can't decide who is right for you" },
                            { icon: "⏳", text: "You are experiencing unexplained delays in marriage or commitment" },
                            { icon: "❄️", text: "You feel emotionally disconnected or lonely even within a marriage" },
                            { icon: "🤝", text: "You want to understand your true compatibility before committing to someone" },
                            { icon: "🕊️", text: "You want peace, emotional balance, and relationship harmony" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3.5 p-5 bg-white/[0.015] border border-white/5 rounded-xl transition-colors duration-300 hover:border-[#a04d4d]/30">
                                <div className="w-[38px] h-[38px] rounded-[9px] bg-[#a04d4d]/12 flex items-center justify-center text-[17px] flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div className="text-[0.88rem] text-[#c8a0a0] leading-[1.55]">{item.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-5 border-t border-[#a04d4d]/30 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#cc8d8d] mb-3 text-center">Real Experiences</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        Real People. Real Clarity. Real Love.
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
                        {[
                            { tag: "Relationship Patterns", text: "\"I kept attracting the wrong partners. This report explained why. It wasn't 'bad luck', it was a pattern. The remedial measures really helped me shift my energy. I finally feel ready for something real.\"", author: "Sneha R.", role: "Marketing Manager, Mumbai" },
                            { tag: "Marriage Delay", text: "\"My family was worried about my marriage getting delayed. The report gave me a specific time window for when I would meet someone. And it happened exactly during that period. It gave me hope when I needed it.\"", author: "Vikram S.", role: "Software Engineer, Bangalore" },
                            { tag: "Conflict Resolution", text: "\"My husband and I were fighting constantly. The compatibility analysis showed us exactly where the friction was coming from. We followed the remedies and understood each other better. Things are so much peaceful now.\"", author: "Anjali K.", role: "Teacher, Delhi" }
                        ].map((testi, i) => (
                            <div key={i} className="bg-[#2a1111] border border-[#a04d4d]/30 rounded-2xl p-7 transition-colors hover:border-[#a04d4d]/45">
                                <span className="inline-block bg-[#a04d4d]/12 border border-[#a04d4d]/30 rounded-md text-[10px] tracking-[1px] uppercase text-[#cc8d8d] py-0.5 px-2.5 mb-3.5">
                                    {testi.tag}
                                </span>
                                <div className="font-serif italic text-[1.05rem] leading-[1.75] text-[#e0c0c0] mb-5">
                                    {testi.text}
                                </div>
                                <div className="text-[0.9rem] text-[#F5E8E8]">
                                    <strong>{testi.author}</strong>
                                    <span className="block text-[0.78rem] text-[#987474]">{testi.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Celebrity Carousel Section */}
            <section className="py-20 px-5 border-t border-[#a04d4d]/30 text-center relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#cc8d8d] mb-3 text-center">Private Consultations</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-2">
                        Guidance for Those in the Public Eye
                    </h2>
                    <span className="block font-serif italic text-base text-[#cc8d8d]/60 mb-12">
                        Shared with permission. All identifying details handled with full discretion.
                    </span>

                    <div className="relative max-w-[680px] mx-auto overflow-hidden">
                        <div
                            ref={celebScrollRef}
                            onScroll={handleCelebScroll}
                            className="flex gap-0 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
                        >
                            {[
                                { quote: "In my industry, relationships are fragile. I needed to know if my marriage would survive the pressure. The report gave me clarity on the rough patch and how to navigate it. It saved my marriage.", initial: "S", name: "Suniel S.", role: "Actor & Producer, Mumbai" },
                                { quote: "I was confused between two people. The compatibility analysis was an eye-opener. It showed me who was good for my long-term peace versus just short-term excitement. Best decision I made.", initial: "R", name: "Raveena T.", role: "Actress, Mumbai" },
                                { quote: "My daughter's marriage was getting delayed for years. We were losing hope. Dr. Bajrangi's report pinpointed the exact Dasha causing it. We did the remedies, and within 8 months, she was engaged.", initial: "A", name: "Anil K.", role: "Film Director, Mumbai" },
                                { quote: "It’s not just about prediction, it’s about timing. Knowing when to push for commitment and when to wait made all the difference in my relationship. Highly recommended.", initial: "K", name: "Kareena K.", role: "Actress, Mumbai" }
                            ].map((celeb, i) => (
                                <div key={i} className="flex-[0_0_100%] flex flex-col items-center gap-5 px-4 snap-center">
                                    <div className="bg-[#a04d4d]/5 border border-[#a04d4d]/12 rounded-2xl p-6 md:p-9 max-w-[540px] relative">
                                        <span className="font-serif text-[5rem] text-[#a04d4d]/12 absolute -top-2.5 left-5 leading-none">"</span>
                                        <p className="font-serif italic text-[1.12rem] text-[#dcc0c0] leading-[1.8] relative z-10">
                                            {celeb.quote}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3.5">
                                        <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#a04d4d]/25 to-[#6e2f2f]/25 border border-[#a04d4d]/35 flex items-center justify-center font-serif text-[1.1rem] text-[#cc8d8d] flex-shrink-0">
                                            {celeb.initial}
                                        </div>
                                        <div className="text-left">
                                            <div className="text-[0.92rem] font-medium text-[#F5E8E8] mb-0.5">{celeb.name}</div>
                                            <div className="text-[0.73rem] text-[#987474] tracking-[0.5px] uppercase">{celeb.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={() => scrollCeleb('left')}
                                className="w-10 h-10 rounded-full border border-[#a04d4d]/30 bg-[#2a1111] text-[#cc8d8d] flex items-center justify-center hover:bg-[#6e2f2f]/15 hover:border-[#a75e5e] transition-all"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <div className="flex gap-2">
                                {[0, 1, 2, 3].map(idx => (
                                    <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === celebIndex ? 'bg-[#a75e5e] scale-110' : 'bg-[#a04d4d]/20'}`}></div>
                                ))}
                            </div>
                            <button
                                onClick={() => scrollCeleb('right')}
                                className="w-10 h-10 rounded-full border border-[#a04d4d]/30 bg-[#2a1111] text-[#cc8d8d] flex items-center justify-center hover:bg-[#6e2f2f]/15 hover:border-[#a75e5e] transition-all"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[0.7rem] text-[#cc8d8d]/40 tracking-[1px] uppercase mt-8 py-1.5 px-4 border border-[#a04d4d]/12 rounded-full">
                        <span>🔒</span> All consultations are strictly confidential
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-20 px-5 bg-[#a04d4d]/[0.03] border-t border-b border-[#a04d4d]/30 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#cc8d8d] mb-3 text-center">Simple Process</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        Here Is Exactly How It Works
                    </h2>
                    <div className="flex flex-col gap-0 max-w-[620px] mx-auto">
                        {[
                            { num: "1", title: "Enter Your Birth Details", desc: "Date, time, and place of birth — essential for accurate relationship prediction." },
                            { num: "2", title: "Relationship-Focused Analysis", desc: "We study your 5th, 7th, 8th, and 12th houses, Venus, Mars, and Moon placements." },
                            { num: "3", title: "In-Depth Interpretation", desc: "Clear insights on love life, marriage timing, compatibility, and future trends." },
                            { num: "4", title: "Remedies & Guidance", desc: "Practical, effective remedies to remove obstacles and attract positive energy." },
                            { num: "5", title: "Report Delivered to Your Email", desc: "Your complete Love & Relationship Report delivered promptly to your inbox." }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6 relative pb-9 last:pb-0">
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#a04d4d] to-[#6e2f2f] flex items-center justify-center font-serif text-[1.2rem] font-bold text-[#f5e8e8] shadow-[0_4px_20px_rgba(117,1,9,0.4)] relative z-10">
                                        {step.num}
                                    </div>
                                    {i < 4 && <div className="w-[1px] flex-1 bg-gradient-to-b from-[#a75e5e] to-transparent mt-2 min-h-[30px]"></div>}
                                </div>
                                <div className="pt-2.5">
                                    <div className="text-base font-medium mb-1 text-[#F5E8E8]">{step.title}</div>
                                    <div className="text-[0.85rem] text-[#987474] leading-[1.65]">{step.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-5 relative z-10">
                <div className="max-w-[960px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#cc8d8d] mb-3 text-center">Choose Your Plan</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        Select What Feels Right
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 items-start">

                        {/* Standard Plan */}
                        <div className="bg-[#2a1111] border border-[#a04d4d]/30 rounded-[20px] p-8 md:px-7 relative transition-colors hover:border-[#a04d4d]/45">
                            <div className="text-[0.78rem] tracking-[1.5px] uppercase text-[#987474] mb-2">Love & Relationship Report</div>
                            <div className="text-[0.85rem] text-[#987474] mb-5 leading-[1.5]">Your personalised emotional roadmap</div>
                            <div className="font-serif text-[2.6rem] font-bold text-[#E8B96A] leading-none mb-1">₹599</div>
                            <div className="text-[0.9rem] text-[#987474] line-through mb-5">₹1,499</div>

                            <ul className="flex flex-col gap-2.5 mb-7 border-t border-[#a04d4d]/30 pt-5">
                                {[
                                    "In-depth love nature analysis",
                                    "Relationship timing & Marriage prediction",
                                    "Compatibility & Stability insights",
                                    "Personalised remedies included",
                                    "Written in simple, clear language"
                                ].map((feat, i) => (
                                    <li key={i} className="text-[0.85rem] text-[#d0a8a8] flex items-start gap-2 leading-[1.5]">
                                        <span className="text-[#a75e5e] text-[9px] mt-1 flex-shrink-0">✦</span>{feat}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="block w-full py-3.5 rounded-[10px] font-sans font-semibold text-[0.95rem] text-center border border-[#a04d4d]/30 text-[#F5E8E8] transition-all hover:border-[#a75e5e] hover:text-[#e8b8b8]">Buy Now</a>
                        </div>

                        {/* Featured Plan */}
                        <div className="bg-gradient-to-br from-[#351515] to-[#241010] border border-[#a75e5e] rounded-[20px] p-8 md:px-7 relative shadow-[0_0_60px_rgba(160,77,77,0.18)]">
                            <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#a04d4d] to-[#a75e5e] text-[#f5e8e8] text-[10px] font-semibold tracking-[1.5px] uppercase py-1 px-4 rounded-full whitespace-nowrap">
                                Best Seller
                            </div>
                            <div className="text-[0.78rem] tracking-[1.5px] uppercase text-[#987474] mb-2">Report + Consultation</div>
                            <div className="text-[0.85rem] text-[#987474] mb-5 leading-[1.5]">Speak directly with an astrological expert</div>
                            <div className="font-serif text-[2.6rem] font-bold text-[#E8B96A] leading-none mb-1">₹749</div>
                            <div className="text-[0.9rem] text-[#987474] line-through mb-5">₹6,000</div>

                            <ul className="flex flex-col gap-2.5 mb-7 border-t border-[#a04d4d]/30 pt-5">
                                {[
                                    "Everything in the Love Report",
                                    "15–20 min private consultation",
                                    "Discuss specific relationship issues",
                                    "Personalised remedies for your situation"
                                ].map((feat, i) => (
                                    <li key={i} className="text-[0.85rem] text-[#d0a8a8] flex items-start gap-2 leading-[1.5]">
                                        <span className="text-[#a75e5e] text-[9px] mt-1 flex-shrink-0">✦</span>{feat}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="block w-full py-3.5 rounded-[10px] font-sans font-semibold text-[0.95rem] text-center bg-gradient-to-br from-[#a04d4d] to-[#6e2f2f] text-[#f5e8e8] shadow-[0_8px_25px_rgba(117,1,9,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(160,77,77,0.5)]">Buy Now</a>
                        </div>

                        {/* Questions Plan */}
                        <div className="bg-[#2a1111] border border-[#a04d4d]/30 rounded-[20px] p-8 md:px-7 relative transition-colors hover:border-[#a04d4d]/45">
                            <div className="text-[0.78rem] tracking-[1.5px] uppercase text-[#987474] mb-2">Report + Ask 2 Questions</div>
                            <div className="text-[0.85rem] text-[#987474] mb-5 leading-[1.5]">Focused written answers to your concerns</div>
                            <div className="font-serif text-[2.6rem] font-bold text-[#E8B96A] leading-none mb-1">₹699</div>
                            <div className="text-[0.9rem] text-[#987474] line-through mb-5">₹4,599</div>

                            <ul className="flex flex-col gap-2.5 mb-7 border-t border-[#a04d4d]/30 pt-5">
                                {[
                                    "Everything in the Love Report",
                                    "Ask 2 specific questions (e.g. ex-back?)",
                                    "Detailed written answers within 48 hours",
                                    "Ideal for quick, specific clarity"
                                ].map((feat, i) => (
                                    <li key={i} className="text-[0.85rem] text-[#d0a8a8] flex items-start gap-2 leading-[1.5]">
                                        <span className="text-[#a75e5e] text-[9px] mt-1 flex-shrink-0">✦</span>{feat}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="block w-full py-3.5 rounded-[10px] font-sans font-semibold text-[0.95rem] text-center border border-[#a04d4d]/30 text-[#F5E8E8] transition-all hover:border-[#a75e5e] hover:text-[#e8b8b8]">Buy Now</a>
                        </div>

                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-5 border-t border-[#a04d4d]/30 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(117,1,9,0.07)_0%,transparent_70%)] relative z-10">
                <div className="max-w-[760px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#cc8d8d] mb-6 text-center">The Expert Behind The Report</span>
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-center text-center md:text-left">
                        <div>
                            <img src="https://content.vinaybajrangi.com/img/content/1760069123-channels4_profile.jpg" alt="Dr. Vinay Bajrangi" className="w-[180px] h-[180px] rounded-full object-cover border-[3px] border-[#a75e5e] shadow-[0_0_40px_rgba(160,77,77,0.3)] mx-auto" />
                        </div>
                        <div>
                            <div className="font-serif text-[2rem] font-semibold mb-2">Dr. Vinay Bajrangi</div>
                            <div className="text-[0.8rem] text-[#cc8d8d] tracking-[1px] uppercase mb-3.5">India's Leading Vedic Astrologer & Karma Expert</div>
                            <p className="text-[0.88rem] text-[#b09090] leading-[1.75] mb-5">
                                Globally respected for precise predictions and karmic diagnosis, Dr. Bajrangi has spent 25+ years decoding the intersection of planetary timing and human destiny. His approach is methodical, practical, and grounded — helping thousands find clarity in their most important life decisions.
                            </p>
                            <div className="flex justify-center md:justify-start gap-7 flex-wrap">
                                {[
                                    { val: "25+", label: "Years Experience" },
                                    { val: "4.5L+", label: "Reports Delivered" },
                                    { val: "Global", label: "Clientele" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col items-center md:items-start gap-0.5 text-[11px] text-[#987474] uppercase tracking-[1px]">
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
            <section className="py-14 px-5 border-t border-[#a04d4d]/30 relative z-10">
                <div className="max-w-[960px] mx-auto text-center">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#cc8d8d] mb-6">As Seen In</span>
                    <div className="flex flex-wrap justify-center gap-2.5">
                        {[
                            "📺 Bharti TV", "📈 Business Today", "📰 Dainik Bhaskar", "🇮🇳 India News",
                            "🗞️ Mid-Day", "🌿 Mint", "👀 Outlook", "📰 Rajasthan Patrika",
                            "🕉️ Sadhna TV", "▶️ YouTube", "📺 Zee Network"
                        ].map((tag, i) => (
                            <span key={i} className="bg-white/5 border border-white/5 rounded-lg py-2 px-3.5 text-[0.78rem] text-[#806060]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-5 bg-white/[0.01] border-t border-[#a04d4d]/30 relative z-10">
                <div className="max-w-[680px] mx-auto">
                    <span className="block text-[11px] tracking-[2.5px] uppercase text-[#cc8d8d] mb-3 text-center">Common Questions</span>
                    <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-center leading-[1.25] mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col gap-3">
                        {[
                            { q: "How soon will I receive the report?", a: "Your report is prepared and delivered to your email promptly after purchase, typically within 24-48 hours." },
                            { q: "Is my personal information safe?", a: "Absolutely. We follow strict data privacy protocols and never share your birth details or personal information with any third party." },
                            { q: "Can I understand this report without knowing astrology?", a: "Yes. The report is written in plain, structured language specifically designed for someone with no astrological background. No jargon, no confusion." },
                            { q: "What if I have specific relationship issues?", a: "You can upgrade to our \"Report + Ask 2 Questions\" or \"Report + Consultation\" plans for direct, personalised answers to your specific concerns." },
                            { q: "Does this report cover marriage also?", a: "Yes. It covers love, emotional bonding, and marriage prospects, including timing and compatibility." },
                            { q: "Are the remedies expensive?", a: "No. The remedies are simple, practical, and accessible — like mantras, donations, or lifestyle changes." }
                        ].map((item, i) => (
                            <div key={i} className={`bg-[#2a1111] border border-[#a04d4d]/30 rounded-xl overflow-hidden transition-all duration-300 ${activeFaq === i ? 'active-faq' : 'inactive-faq h-14'}`}>
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex justify-between items-center p-5 md:px-6 bg-transparent border-none text-[#F5E8E8] font-sans text-[0.95rem] cursor-pointer text-left gap-4"
                                >
                                    {item.q}
                                    <span className={`text-[#a75e5e] transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                <div
                                    className={`px-6 text-[0.87rem] text-[#987474] leading-[1.7] transition-all duration-300`}
                                >
                                    {item.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-5 pb-28 text-center bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(117,1,9,0.22)_0%,transparent_70%)] relative z-10">
                <span className="block text-[11px] tracking-[2.5px] uppercase text-[#cc8d8d] mb-3">Your Destiny Awaits</span>
                <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.2] mb-3">
                    Stop Fighting Your Love Life.<br />
                    <em className="text-gradient-gold not-italic">Start Understanding It.</em>
                </h2>

                <div className="w-[60px] h-[1px] bg-gradient-to-r from-transparent via-[#a75e5e] to-transparent mx-auto my-12"></div>

                <div className="bg-gradient-to-br from-[#2a1212] to-[#1e0c0c] border border-[#a04d4d]/30 rounded-[20px] p-9 md:p-10 max-w-[520px] w-full mx-auto relative offer-box-shadow">
                    <div className="flex items-baseline justify-center gap-3.5 mb-2">
                        <span className="text-[1.3rem] text-[#987474] line-through">₹1,499</span>
                        <span className="font-serif text-[3.2rem] font-bold text-[#E8B96A] leading-none">₹599</span>
                    </div>

                    <div className="text-center mb-5">
                        <span className="inline-block bg-[#E8B96A]/12 text-[#E8B96A] text-xs py-0.5 px-3 rounded-full">
                            60% OFF — Limited Period
                        </span>
                    </div>

                    <a href="#" className="block w-full bg-gradient-to-br from-[#E8B96A] to-[#A8712A] text-[#180808] font-semibold text-base tracking-[0.3px] py-4.5 px-8 rounded-xl cursor-pointer no-underline shadow-[0_8px_30px_rgba(201,147,58,0.35)] hover:shadow-[0_14px_40px_rgba(201,147,58,0.45)] hover:-translate-y-0.5 transition-all duration-200">
                        Get My Personalised Love Report →
                    </a>
                    <p className="text-xs text-[#987474] mt-3 text-center">
                        4.5L+ reports delivered · Trusted for accuracy · 100% confidential
                    </p>
                </div>
            </section>

        </div>
    );
}
