import React, { useState } from 'react';
import { Calendar, Clock, Plus, Minus, Phone, MessageCircle, Mail, Play, Home, ShieldPlus, TrendingUp, HeartPulse, BookOpen, Video, UserCircle, Heart, Target, GraduationCap, Briefcase, Sparkles } from 'lucide-react';

const AstroWebinarHero = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            question: "Where can I join the webinar?",
            answer: "After a successful payment, you'll receive a confirmation email with the Zoom link. You'll also be added to a WhatsApp group where all updates and reminders will be shared."
        },
        {
            question: "Where will the webinar take place?",
            answer: "Absolutely. This webinar is the perfect first step on Dr. Bajrangi's structured Jyotish learning path — Jyotish Beej (seed), Jyotish Pushpa (foundation), and Jyotish Taru (advanced) — leading to a professional certification and the ability to practice as a certified astrologer."
        },
        {
            question: "Will there be reminders before the webinar begins?",
            answer: "Yes. You will receive timely reminders via email, SMS, and WhatsApp notifications so you never miss the session."
        },
        {
            question: "Is there a registration fee? Why only ₹99?",
            answer: "The content of this webinar is valued at ₹1,999. Dr. Bajrangi has chosen to offer it at just ₹99 to make authentic Vedic astrology accessible to every sincere seeker — regardless of background, city, or financial capacity."
        },
        {
            question: "Who should attend this webinar?",
            answer: "This webinar is ideal for anyone genuinely interested in Vedic astrology — from complete beginners to those looking to understand advanced Jyotish concepts. If you want to understand your life through the lens of karma and planetary science, this is for you."
        },
        {
            question: "Can I participate with my family or partner?",
            answer: "Yes, absolutely. We encourage learning together — one registration covers your access. Shared understanding of karmic patterns can profoundly transform family relationships and decision-making."
        },
        {
            question: "Do I need prior knowledge of astrology?",
            answer: "None at all. This webinar is designed for absolute beginners. Dr. Bajrangi teaches everything step-by-step with scientific logic and real-world examples — starting from the very foundations of Vedic astrology."
        },
    ];
    const benefits = [
        {
            title: "Bring Back Joy",
            desc: "Help someone rediscover clarity, purpose, and harmony in their home and family using Jyotish insights.",
            icon: <Home className="text-[#FFD700]" size={28} />,
        },
        {
            title: "Boost Health",
            desc: "Guide others toward healing by identifying the karmic and planetary root of chronic health imbalances.",
            icon: <ShieldPlus className="text-[#FFD700]" size={28} />,
        },
        {
            title: "Grow Your Income",
            desc: "Help improve financial outcomes by timing key moves using Dasha periods and planetary opportunities.",
            icon: <TrendingUp className="text-[#FFD700]" size={28} />,
        },
        {
            title: "Fix Relationships",
            desc: "Help repair strained bonds and emotional blockages using birth chart compatibility and karmic analysis.",
            icon: <HeartPulse className="text-[#FFD700]" size={28} />,
        }
    ];
    const questions = [
        "Do you earn well, but still struggle with high expenses, low savings, and financial instability?",
        "Have you tried rituals and remedies but seen no lasting change in your circumstances?",
        "Do you feel lost or paralyzed when making important decisions — about career, marriage, or money?",
        "Are you tired of career failures and want a stable, successful path — in job, business, or profession?",
        "Do you wish to fulfill the dream of your own home, financial freedom, or a secure future?",
        "Do you often feel overwhelmed by stress, anxiety, or a persistent sense that something is off in life?",
        "Is maintaining healthy relationships with family, friends, or partner becoming increasingly difficult?",
        "Do you want to improve your health and understand its spiritual and karmic root causes?"
    ];
    const studentTestimonials = [
        {
            name: "Rahul Sharma",
            title: "Business Owner, Delhi",
            disc: "I had tried so many remedies for my career problems. Dr. Bajrangi's webinar showed me that the issue was my own karmic actions — not external forces. That shift in perspective changed everything for me.",
        },
        {
            name: "Priya Mehta",
            title: "Homemaker & Jyotish Learner, Mumbai",
            disc: "The D-9 Navamsa chart explanation was unlike anything I'd heard before. Finally an astrologer who teaches the science behind the predictions — not just the predictions themselves. Joining the full Jyotish Beej course next.",
        },
        {
            name: "Ankit Verma",
            title: "Software Engineer, Bangalore",
            disc: "I was skeptical about online astrology but Dr. Bajrangi's approach is completely different. No fear, no blind rituals — just clear, logical Vedic science. ₹99 for this kind of knowledge is honestly unbelievable.",
        },
    ];
    const testimonials = [
        {
            name: "Shri Aniruddhacharya Ji",
            title: "Katha Vachak",
            image: "https://tagmango.com/staticassets/-shri-aniruddhacharya-ji-8516466504fe953d726e035953dccbb7.png", // Replace with your actual image path
        },
        {
            name: "Pundrik Goswami",
            title: "Katha Vachak",
            image: "https://tagmango.com/staticassets/-pundrik-goswami-81011fedb0951b8cd8aa48c333ad117c.png", // Replace with your actual image path
        },
        {
            name: "Shri Aniruddhacharya Ji",
            title: "Katha Vachak",
            image: "https://tagmango.com/staticassets/-shri-aniruddhacharya-ji-8516466504fe953d726e035953dccbb7.png", // Replace with your actual image path
        },
        {
            name: "Pundrik Goswami",
            title: "Katha Vachak",
            image: "https://tagmango.com/staticassets/-pundrik-goswami-81011fedb0951b8cd8aa48c333ad117c.png", // Replace with your actual image path
        }, {
            name: "Shri Aniruddhacharya Ji",
            title: "Katha Vachak",
            image: "https://tagmango.com/staticassets/-shri-aniruddhacharya-ji-8516466504fe953d726e035953dccbb7.png", // Replace with your actual image path
        },
        {
            name: "Pundrik Goswami",
            title: "Katha Vachak",
            image: "https://tagmango.com/staticassets/-pundrik-goswami-81011fedb0951b8cd8aa48c333ad117c.png", // Replace with your actual image path
        }

    ];

    const features = [
        {
            title: "Read Your Own Kundli",
            desc: "Learn to decode planets, houses & signs from scratch — including the D-1 Lagna chart and the Navamsa D-9 chart that forms the backbone of accurate Vedic prediction.",
            icon: "📜", // Replace with custom SVGs or Lucide icons
        },
        {
            title: "Understand How Planets Affect Your Life",
            desc: "Understand each planet's nature, placement, and role in your birth chart — and why their current transits create ripples in career, love, health, and finances.",
            icon: "🪐",
        },
        {
            title: "Discover the Power of Numerology",
            desc: "Use your birth date and name to unlock hidden karmic energy patterns and understand the numbers that silently shape your biggest life decisions.",
            icon: "🔢",
        },
        {
            title: "Know Your Rashi & What It Means",
            desc: "Reveal your true personality, inner tendencies, and emotional strengths through your Moon sign — and what it means for your relationships and life path.",
            icon: "♈",
        },
        {
            title: "Explore Your Lagna (Ascendant)",
            desc: "Understand your soul's chosen path in this lifetime and how others truly perceive you through the lens of your rising sign and D-1 chart.",
            icon: "🧘",
        },
        {
            title: "Karma Correction — The Real Remedy",
            desc: "Dr. Bajrangi's signature teaching: why no ritual alone can change your horoscope, and how conscious karmic action is the only lasting planetary remedy.",
            icon: "⚙️",
        },
        {
            title: "Take the Right Actions at the Right Time",
            desc: "Master Dasha periods and planetary transits so you can make better-timed decisions about career, marriage, investment, and major life moves.",
            icon: "⏰",
        },
        {
            title: "Begin Your Jyotish Beej Journey",
            desc: "Get a clear roadmap to advance through Dr. Bajrangi's Jyotish Beej → Pushpa → Taru course pathway toward professional certification and practice.",
            icon: "✨",
        },
        {
            title: "Begin Your Journey as a Jyotish Expert",
            desc: "Build a skill that heals, guides, and transforms others' lives — and creates a credible, meaningful career path as a certified astrology consultant.",
            icon: "🎓",
        }
    ];

    const logos = [
        { name: "Hindustan Times" },
        { name: "Times of India" },
        { name: "ANI News" },
        { name: "Business Standard" },
        { name: "Deccan Herald" },
        { name: "Outlook India" },
        { name: "The Week" },
        { name: "Mid Day" },
        { name: "DNA India" },
        { name: "Amar Ujala" },
        { name: "Deccan Chronicle" },

    ];

    const categories = [
        {
            title: "Astrology Enthusiasts",
            desc: "Whether you're just beginning or have some foundation, this session gives you a rigorous, structured path to deepen your understanding of planets, charts and karma.",
            icon: <UserCircle size={40} className="text-white opacity-80" />,
        },
        {
            title: "Seekers of Personal Growth",
            desc: "Understand the deeper 'why' behind repeated life patterns. Decode karmic imbalances and get clear direction on relationships, purpose and peace of mind.",
            icon: <Heart size={40} className="text-white opacity-80" />,
        },
        {
            title: "Professionals & Entrepreneurs",
            desc: "Use Dasha timing and planetary cycles to make smarter business decisions, pick the right partners, and align your moves with high-growth planetary periods.",
            icon: <Target size={40} className="text-white opacity-80" />,
        },
        {
            title: "Seeking Relationship Clarity",
            desc: "Learn how birth charts reveal compatibility, karmic bonds, and the right timing for marriage, commitment, or bringing resolution to long-standing conflicts.",
            icon: <GraduationCap size={40} className="text-white opacity-80" />,
        },
        {
            title: "Students & Career Changers",
            desc: "Not sure which path to take? Your Kundli holds the answer. Find your career strengths, ideal timing, and hidden potential for long-term success.",
            icon: <Briefcase size={40} className="text-white opacity-80" />,
        },
        {
            title: "Aspiring Jyotish ProfessionalsAspiring Jyotish Professionals",
            desc: "Want to turn your passion into a certified practice? Learn how Dr. Bajrangi's students have built consultation careers helping thousands every month.",
            icon: <Sparkles size={40} className="text-white opacity-80" />,
        },
    ];

    return (
        <>
            {/* Hero-section */}
            <section className="min-h-screen bg-[#2D0A31] flex flex-col items-center justify-center p-4 ">
                {/* Main Card */}
                <div className="max-w-[1500px] min-h-[700px] w-full bg-[#ffda94] rounded-lg overflow-hidden shadow-2xl ">

                    {/* Header Header */}
                    <div className=" text-[#260126] py-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-[700] tracking-tight">
                            Live Webinar — Limited Seats
                        </h1>
                    </div>

                    <div className="bg-[#260126] text-white py-2 text-center">
                        <p className="opacity-90 mt-1 italic font-bold text-2xl">
                            Trusted by 80,000+ Kundali Consultees Across the Globe
                        </p>
                    </div>

                    {/* Content Body */}
                    <div className="relative flex flex-col md:flex-row p-8 gap-8 items-center">


                        {/* Left Side: Image & Quote */}
                        <div className="w-full md:w-1/3 flex flex-col items-center relative">
                            {/* Background Zodiac Circle */}
                            <div className="absolute top-0 w-64 h-64 bg-[#4A1D70] rounded-full flex items-center justify-center opacity-80 z-0">
                                {/* Replace with a real SVG/Image of a Zodiac wheel */}
                                <div className="border-2 border-dashed border-[#F5E6B3] w-56 h-56 rounded-full opacity-30"></div>
                            </div>

                            {/* Teacher Image */}
                            <img
                                src="https://content.vinaybajrangi.com/img/content/1760069123-channels4_profile.jpg"
                                alt="Dr. Vinay Bajrangi"
                                className="relative z-10 w-full h-auto drop-shadow-xl rounded-full"
                            />

                            {/* Hindi Quote */}
                            <p className="mt-4 text-center text-[#1A051D] font-bold text-sm leading-tight italic">
                                "ज्योतिष भविष्यवाणी नहीं — यह आपके कर्मों को समझने और जीवन को सही दिशा देने का विज्ञान है।"
                            </p>
                        </div>

                        {/* Right Side: Copy & CTA */}
                        <div className="w-full md:w-2/3 flex flex-col gap-4">
                            <h2 className="text-3xl md:text-4xl font-black text-[#260126] leading-tight">
                                Your Life Is Governed by 9 Planets & Your Karma.
                                Isn't It Time You Understood Both?
                            </h2>

                            <p className="font-bold text-[#260126] text-lg uppercase tracking-wide">
                                Learn the Real Science of Vedic Astrology From India's Foremost Karmic Astrologer
                            </p>

                            <p className="text-[#260126] text-sm leading-relaxed">
                                In this powerful live webinar, <strong>Dr. Vinay Bajrangi</strong> PhD in Vedic Astrology, 25+ years of experience, 80,000+ Kundalis analyzed — will teach you to read birth charts, decode Karma, solve life problems, and build a meaningful practice rooted in authentic Jyotish science.
                            </p>

                            {/* CTA Button */}
                            <button className="cursor-pointer bg-gradient-to-r from-[#FFD700] via-[#FFB800] to-[#FF8A00] text-[#260126] font-black py-4 px-8 rounded-lg shadow-lg text-2xl hover:scale-105 transition-transform">
                                Register Now at Just ₹99
                            </button>

                            {/* Timer Section */}
                            <div className="mt-4">
                                <p className="text-xl font-bold text-[#1A051D] mb-2">Offers Ends In</p>
                                <div className="flex gap-2">
                                    {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                                        <div key={unit} className="flex flex-col items-center">
                                            <div className="w-14 h-14 bg-[#ffda94] border-2 border-black rounded flex items-center justify-center text-2xl font-bold">
                                                00
                                            </div>
                                            <span className="text-[12px] uppercase  mt-1 text-[#260126]">{unit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-lg font-semibold text-[#260126] mt-2">
                                Limited Seats – <strong className="text-[#260126]">2,600+ Astrology Seekers</strong>Already Registered
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Details */}
                <div className="max-w-5xl w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {[
                        { icon: <Calendar size={20} />, text: '10th August 2025' },
                        { icon: <Clock size={20} />, text: '11 AM' },
                        { icon: <BookOpen size={20} />, text: '3 hours Live' },
                        { icon: <Video size={20} />, text: 'Zoom Webinar' },
                    ].map((item, idx) => (
                        <div key={idx} className="border border-[#F5E6B3] rounded-md py-8 px-4 flex items-center justify-center gap-3 text-white bg-[#1A051D]/40">
                            {item.icon}
                            <span className="font-medium text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>
            </section>
            {/* Hero-section-end */}

            {/* youtube-vedio-section */}
            <section className="bg-[#F5E6B3] py-25 px-4 flex flex-col items-center">
                {/* Top Heading */}
                <h2 className="text-2xl md:text-4xl font-black text-[#1A051D] mb-8 text-center uppercase tracking-tight">
                    A Personal Message from Dr. Vinay Bajrangi Ji
                </h2>

                {/* Video Container */}
                <div className="max-w-6xl w-full bg-white max-h-[700px] rounded-md overflow-hidden shadow-2xl border border-gray-300">
                    <div className="relative aspect-video group cursor-pointer">
                        {/* In a real app, use an iframe for YouTube. 
              Below is the visual mockup based on your image. 
          */}
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://youtu.be/wMopdxGRZNM')" }}>
                            {/* Dark overlay to make text pop */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>

                        {/* YouTube UI Overlays */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 text-white text-sm font-medium z-10">
                            <img src="/avatar.jpg" alt="Profile" className="w-8 h-8 rounded-full border border-white" />
                            <span className="drop-shadow-md">Join the Astro Mastery Webinar with Acharya Lavbhushan...</span>
                        </div>

                        {/* Large YouTube Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                            </div>
                        </div>

                        {/* "Watch on YouTube" Bottom Left */}
                        <div className="absolute bottom-4 left-4 z-10">
                            <button className="bg-[#1A1A1A]/90 text-white text-xs px-3 py-2 flex items-center gap-2 rounded-sm hover:bg-black">
                                <span>Watch on</span>
                                <span className="font-bold tracking-tighter flex items-center">
                                    <span className="text-white">YouTube</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Footer CTA Bar */}
                    {/* <div className="bg-white py-6 flex flex-col items-center gap-2">
                        <p className="text-xl md:text-2xl font-black text-black text-center px-4 uppercase italic">
                            BECOME A MASTER ASTROLOGER AT <span className="text-red-600">JUST RS 99/-</span>
                        </p>

                        <button className="bg-red-600 text-white font-black text-2xl px-12 py-2 rounded shadow-lg hover:bg-red-700 hover:scale-105 transition-all">
                            JOIN NOW
                        </button>
                    </div> */}
                </div>
            </section>
            {/* youtube-vedio-section-end */}

            {/* What you will learn section */}
            <section className="bg-white max-w-8xl">
                <section className="bg-white py-16 px-4 md:px-8 max-w-7xl mx-auto">
                    {/* Header: Reduced margin-bottom from 12 to 6 */}
                    <div className="text-center mb-6">
                        <h2 className="text-[#2D0A31] text-3xl md:text-5xl font-black mb-2">
                            What You'll Learn in This
                            Powerful ₹99 Webinar
                        </h2>
                        <p className="text-[#1A051D] italic text-lg opacity-80">
                            You'll walk away with real, practical knowledge — not just theory or future predictions
                        </p>
                    </div>

                    {/* Features Grid: Reduced gap and margin-bottom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#2D0A31] border-2 border-[#FFD700] rounded-xl p-5 py-10 flex gap-4 hover:shadow-xl transition-shadow group"
                            >
                                {/* Icon size slightly reduced for compactness */}
                                <div className="text-3xl group-hover:scale-110 transition-transform flex-shrink-0">
                                    {feature.icon}
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="text-[#FFD700] font-bold text-base mb-1 leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white text-xs opacity-90 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA: Reduced margin-bottom on text */}
                    <div className="text-center">
                        <p className="text-[#1A051D] italic text-md mb-6">
                            You’ll walk away with real knowledge, not just theory or predictions, join now.
                        </p>

                        {/* Button: Slightly reduced vertical padding */}
                        <button className="cursor-pointer bg-gradient-to-r from-[#FFD700] via-[#FFB800] to-[#FF8A00] text-[#1A051D] font-black py-3 px-10 rounded-lg shadow-[0_4px_20px_rgba(255,184,0,0.4)] text-xl md:text-2xl hover:scale-105 active:scale-95 transition-all">
                            Register Now at Just ₹99
                        </button>
                    </div>
                </section>
            </section>
            {/* What you will learn section end */}

            {/* Meet Mentor Section */}

            <section className="bg-[#2D0A31] py-16 px-4 md:px-12 text-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-3/5 space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-xl font-medium">Meet Your Mentor:</h4>
                            <h2 className="text-4xl md:text-5xl font-black">Dr. Vinay Bajrangi</h2>
                            <p className="text-[#FFD700] italic font-medium">
                                India's #1 Trusted Astro-Numerology-Vastu Expert & Sanatani Guide
                            </p>
                        </div>

                        <div className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
                            <p>
                                Dr. Vinay Bajrangi is one of India's most respected and sought-after Vedic astrologers — a name synonymous not with blind prediction, but with Karma Correction and scientific clarity. With a PhD in Vedic Astrology and 25+ years of hands-on practice from Bajrangi Dham, Noida, he has personally analyzed over 80,000 Kundalis from across India and the world.
                            </p>
                            <p>
                                His clients span everyday families, top industrialists, senior politicians, Bollywood celebrities, and business leaders — all drawn by his reputation for accuracy, transparency, and an approach grounded in logic rather than superstition. He never scares, but he never hides the truth either.
                            </p>
                            <p>
                                What sets Dr. Bajrangi apart is his unique reliance on the Navamsa Kundli (D-9 Chart) as the lens for all major predictions, his rejection of fear-based remedies, and his structured teaching pathway — from Jyotish Beej to Jyotish Taru — that has certified thousands of students as practicing astrologers.
                            </p>
                        </div>

                        {/* Stat Cards */}
                        <div className="space-y-4 pt-4">
                            <div className="flex gap-4">
                                <div className="border border-[#F5E6B3]/30 rounded-lg p-6 bg-white/5 w-1/2">
                                    <h3 className="text-2xl font-bold mb-2">25+ </h3>
                                    <p className="text-sm opacity-80">
                                        Years of Practice
                                    </p>
                                </div>



                                <div className="border border-[#F5E6B3]/30 rounded-lg p-6 bg-white/5 w-1/2">
                                    <h3 className="text-2xl font-bold mb-2">80K+</h3>
                                    <p className="text-sm opacity-80">
                                        Kundalis Analyzed
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="border border-[#F5E6B3]/30 rounded-lg p-6 bg-white/5 w-1/2">
                                    <h3 className="text-2xl font-bold mb-2">PhD</h3>
                                    <p className="text-sm opacity-80">
                                        Vedic Astrology
                                    </p>
                                </div>



                                <div className="border border-[#F5E6B3]/30 rounded-lg p-6 bg-white/5 w-1/2">
                                    <h3 className="text-2xl font-bold mb-2">10K+</h3>
                                    <p className="text-sm opacity-80">
                                        Students Trained
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image & Branding */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center">
                        <div className="relative">
                            {/* Mentor Image - Replace src with your asset path */}
                            <img
                                src="https://content.vinaybajrangi.com/img/content/1760069123-channels4_profile.jpg"
                                alt="Dr. Vinay Bajrangi"
                                className="w-full h-[500px] max-w-md drop-shadow-2xl"
                            />

                            {/* Name Tag Overlay */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[115%] bg-[#F5E6B3] text-[#2D0A31] py-4 px-6 rounded-md text-center shadow-xl">
                                <h3 className="text-3xl font-bold uppercase tracking-tight whitespace-nowrap">Dr. Vinay Bajrangi</h3>
                                <p className="text-[15px] font-semibold uppercase mt-1">
                                    A Legacy of Karma & Science Since 1999
                                </p>
                            </div>
                        </div>

                        {/* Hindi Quote */}
                        <p className="mt-16 text-center italic font-medium text-lg leading-relaxed text-gray-100">
                            "ज्योतिष विज्ञान है — भय नहीं। यह आपको आपके कर्मों का बोध कराता है, न कि किसी अदृश्य शक्ति का डर।"
                        </p>
                    </div>

                </div>
            </section>
            {/* Meet Mentor Section */}

            {/* Featured On section */}
            <section className="bg-white py-12 px-4 md:px-8">
                <div className="max-w-8xl mx-auto">

                    {/* Featured On Section */}
                    <div className="mb-20">
                        <h3 className="text-center text-3xl font-bold text-[#1A051D] mb-8">Featured On</h3>
                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-90">
                            {/* Note: In production, replace these with actual <img> tags */}
                            {logos.map((logo) => (
                                // <img
                                //     key={logo.src}
                                //     src={logo.src}
                                //     alt={logo.name}
                                //     className="h-8 md:h-12 w-auto hover:grayscale transition-all cursor-default object-contain"
                                // />
                                <div className="flex items-center max-w-8xl mx-auto border border-[#FFA500]/90 rounded-lg p-2">

                                    <span className="font-semibold text-gray-700">{logo.name}</span>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Audience Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-[#1A051D] text-3xl md:text-4xl font-black uppercase tracking-tight">
                            Who Should Join This Webinar?
                        </h2>
                        <p className="text-[#1A051D] italic text-lg opacity-80 mt-4">
                            Whether you're a curious beginner or a serious seeker — there's something profoundly valuable here for you
                        </p>
                    </div>

                    {/* Audience Grid */}
                    <div className='max-w-6xl mx-auto   '>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            {categories.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1A051D] border border-[#FFD700]/30 rounded-lg p-6 flex items-start gap-5 hover:border-[#FFD700] transition-colors group"
                                >
                                    <div className="shrink-0 mt-1 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-2 leading-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-300 text-sm leading-relaxed opacity-90">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Registration Button */}
                        <div className="text-center">
                            <button className="cursor-pointer bg-gradient-to-r from-[#FFD700] via-[#FFB800] to-[#FF8A00] text-[#1A051D] font-black py-4 px-12 rounded-lg shadow-xl text-2xl md:text-3xl hover:scale-105 active:scale-95 transition-all w-full md:w-auto">
                                Register Now at Just ₹99
                            </button>
                        </div>
                    </div>

                </div>
            </section>
            {/* Featured On section ends */}


            {/* Testimonials Section */}
            <section className="bg-[#2D0A31] py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-white text-3xl md:text-5xl font-black mb-4">
                            Trusted by Celebrities, Business Leaders & Spiritual Icons
                        </h2>
                        <p className="text-gray-300 italic text-sm md:text-base max-w-4xl mx-auto opacity-80 leading-relaxed">
                            Acharya Ji's guidance is valued not just by the masses but by those who shape industries, inspire millions & seek clarity at the highest levels.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((person, index) => (
                            <div key={index} className="relative group">
                                {/* Outer Decorative Frame */}
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 rounded-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Testimonials Section End */}

            {/* What our Students Say Section */}
            <section className="bg-gray-300 py-16 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Section Title */}

                    <p className="text-[#1A051D] italic text-lg opacity-80 mt-4 text-center">
                        Student Stories
                    </p>
                    <h2 className="text-[#1A051D] text-3xl md:text-5xl font-black text-center mb-4">
                        What Our Students Say
                    </h2>
                    <p className="text-[#1A051D] italic text-lg opacity-80 text-center mb-12">
                        Real transformations from real people — guided by Dr. Bajrangi's Karma Correction approach
                    </p>

                    {/* Student Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {studentTestimonials.map((student, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-[#FFD700] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-[#2D0A31] rounded-full flex items-center justify-center text-[#FFD700]">
                                            <UserCircle size={32} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#1A051D] font-bold text-lg leading-tight">
                                                {student.name}
                                            </h4>
                                            <p className="text-[#FFA500] text-xs font-semibold uppercase tracking-wider">
                                                {student.title}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -top-4 -left-2 text-6xl text-[#FFA500] opacity-20 font-serif">
                                            &ldquo;
                                        </span>
                                        <p className="text-[#1A051D] text-sm leading-relaxed italic relative z-10">
                                            {student.disc}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Sparkles key={i} size={14} className="text-[#FFA500]" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-white py-25 px-4 md:px-8">
                <div className="max-w-6xl mx-auto bg-[#2D0A31] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="p-8 md:p-14 text-white">
                        <p className="text-[#FFD700] font-bold text-lg mb-8">Your Gateway to Ancient Wisdom</p>
                        {/* Main Title */}
                        <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
                            For Those Who Genuinely Wish to Understand Astrology —
                            This Webinar Is Your Starting Point.
                        </h2>

                        {/* Subheading */}
                        {/* <p className="text-[#FFD700] font-bold text-lg mb-8">
                            Guided by Acharya Lavbhushan Ji Himself Learn with Purpose, Clarity, and Real Insight. This is Your Moment, Grab It Now.
                        </p> */}

                        {/* Body Content */}
                        <div className="space-y-6 text-gray-200 text-sm md:text-base opacity-90 leading-relaxed">
                            <p>
                                Have you ever felt drawn to Vedic astrology but didn't know where to begin — or whom to trust? If you genuinely want to learn astrology in a clear, practical, and authentic way — grounded in science and karma, not superstition and fear — this is the place to start.
                            </p>
                            <p>
                                In this special live webinar, Dr. Bajrangi will guide you step by step, breaking down complex Jyotish concepts with real-world logic. Whether you're just curious or serious about how astrology connects to your career, relationships, health, and more — this session will open your eyes to knowledge most people never get to learn.
                            </p>
                            <p className="font-bold text-white">
                                <span className='text-[#FFD700] font-bold text-lg'>And the best part? It's just ₹99.</span> If you've been waiting for the right moment to begin your Jyotish journey, this is it.
                            </p>
                        </div>

                        {/* Benefit Boxes */}
                        <div className="mt-10 space-y-4">
                            <div className="border border-[#FFD700]/30 rounded-lg p-6 bg-white/5 transition-all hover:border-[#FFD700]/60">
                                <h3 className="text-xl font-bold text-white mb-2">Learn Real Vedic Jyotish, the Right Way</h3>
                                <p className="text-sm text-gray-300">Understand planets, houses & signs through scientific logic — not myths. Practical from the very first session.    </p>
                            </div>

                            <div className="border border-[#FFD700]/30 rounded-lg p-6 bg-white/5 transition-all hover:border-[#FFD700]/60">
                                <h3 className="text-xl font-bold text-white mb-2">Turn Curiosity into Clarity</h3>
                                <p className="text-sm text-gray-300">Gain step-by-step knowledge you can apply in your career, relationships and everyday decisions immediately.</p>
                            </div>
                        </div>

                        {/* Final Button */}
                        <div className="mt-10">
                            <button className="cursor-pointer w-full bg-gradient-to-r from-[#FFD700] via-[#FFB800] to-[#FF8A00] text-[#2D0A31] font-black py-5 rounded-xl text-2xl md:text-3xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                                Register Now at Just ₹99
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            {/* What our Students Say Section End */}

            {/* master class section */}
            <section className="bg-[#fec76f] py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto bg-[#F0F0F0] border-2 border-dashed border-[#1A051D]/30 rounded-lg p-6 md:p-10 shadow-sm">

                    {/* Header */}
                    <h2 className="text-[#1A051D] text-xl md:text-3xl font-black text-center mb-10 leading-tight">
                        If You're Looking for Answers to Any of These Questions, This Masterclass Is for You
                    </h2>
                    <p className="text-[#1A051D] italic text-md text-center mb-6">
                        You don't need to live with unanswered questions — the answers are already in your birth chart.
                    </p>


                    {/* Questions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {questions.map((question, index) => (
                            <div
                                key={index}
                                className="bg-[#F5F5DC] p-4 md:p-6 rounded-md flex items-start gap-4 shadow-sm border border-black/5"
                            >
                                {/* Bullet Square */}
                                <div className="w-2 h-2 bg-black mt-2 shrink-0" />

                                <p className="text-[#1A051D] text-sm md:text-lg font-medium leading-relaxed">
                                    {question}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* master class section end */}

            {/* Destiny Doesn't wait section */}
            <section className="bg-[#1A051D] py-16 px-4 md:py-24">
                <div className="max-w-4xl mx-auto text-center space-y-8">

                    {/* Main Heading */}
                    <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight leading-tight">
                        Destiny Doesn't Wait. Why Should You? Grab Your Spot Now!
                    </h2>
                    <div className="mt-4">
                        <p className="text-xl font-bold text-white mb-2">Offers Ends In</p>
                        <div className="flex gap-2 text-white text-center items-center justify-center">
                            {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                                <div key={unit} className="flex flex-col items-center">
                                    <div className="w-14 h-14 bg-[#ffda94] border-2 border-black rounded flex items-center justify-center text-2xl font-bold text-[#260126]">
                                        00
                                    </div>
                                    <span className="text-[12px] uppercase  mt-1 text-white">{unit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Subtext */}
                    <p className="text-gray-300 italic text-lg md:text-xl font-medium opacity-90">
                        Just ₹99 to gain clarity, confidence, and control over your life — guided by the LEGEND himself.
                    </p>

                    {/* High-Impact CTA Button */}
                    <div className="pt-4">
                        <button className="cursor-pointer w-full md:w-auto bg-gradient-to-r from-[#FFD700] via-[#FFB800] to-[#FF8A00] text-[#1A051D] font-black py-5 px-16 rounded-xl text-2xl md:text-3xl shadow-[0_10px_40px_rgba(255,184,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300">
                            Join Astro Mastery Webinar
                        </button>
                    </div>

                </div>
            </section>
            {/* Destiny Doesn't wait section end */}

            {/* Right Knowledge Section */}
            <section className="bg-white py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Top Header Section */}
                    <div className="text-center mb-10">
                        <p className="text-[#1A051D] font-bold text-lg mb-8">The Ripple Effect</p>
                        <h2 className="text-[#1A051D] text-3xl md:text-5xl font-black leading-tight uppercase tracking-tight">
                            The Right Knowledge of Jyotish Doesn't Just Change You — It Heals Others Too
                        </h2>
                        <p className="text-[#1A051D] italic text-lg md:text-xl mt-4 opacity-80">
                            When you understand Karma and planetary science, you become a source of light for the people around you.
                        </p>
                        <p className="text-[#1A051D] italic text-lg md:text-xl mt-4 opacity-80">
                            Now imagine this — what if your knowledge could become a transforming force in someone else's life?
                        </p>
                    </div>

                    {/* Main Content Box */}
                    <div className="bg-[#1A051D] rounded-2xl flex flex-col lg:flex-row overflow-hidden shadow-2xl">

                        {/* Left Side: Spotlight Text */}
                        <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center items-center text-center border-b lg:border-b-0 lg:border-r border-white/10">
                            <h3 className="text-[#FFD700] text-4xl md:text-6xl font-black mb-4">
                                Now Imagine This..
                            </h3>
                            <p className="text-white text-lg md:text-xl opacity-80 max-w-sm">
                                What if your knowledge could become a source of light in someone else's life?
                            </p>
                        </div>

                        {/* Right Side: Benefits List */}
                        <div className="w-full lg:w-1/2 p-6 md:p-10 space-y-4">
                            {benefits.map((item, index) => (
                                <div
                                    key={index}
                                    className="border border-dashed border-[#FFD700]/40 rounded-xl p-5 flex items-start gap-5 hover:bg-white/5 transition-colors group"
                                >
                                    {/* Icon Container */}
                                    <div className="shrink-0 mt-1 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>

                                    {/* Text Content */}
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-300 text-sm leading-relaxed opacity-90">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            {/* Right Knowledge Section end */}

            {/* FAQ Section */}
            <section className="bg-[#F5E6B3] py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <h2 className="text-[#1A051D] text-3xl md:text-5xl font-black text-center mb-12 uppercase tracking-tight">
                        FAQs: Everything You Might Want to Know
                    </h2>

                    {/* FAQ Container */}
                    <div className="bg-[#1A051D] rounded-t-2xl overflow-hidden border border-white/10">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-white/10 last:border-b-0"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-white text-lg md:text-xl font-bold">
                                        {faq.question}
                                    </span>
                                    <span className="text-white shrink-0 ml-4">
                                        {openIndex === index ? (
                                            <Minus size={24} className="opacity-80" />
                                        ) : (
                                            <Plus size={24} className="opacity-80" />
                                        )}
                                    </span>
                                </button>

                                {/* Accordion Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-gray-300 text-base md:text-lg leading-relaxed border-t border-white/5 mt-2">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* FAQ Section end */}

            {/* Final High-Impact Registration Section */}
            <section className="bg-[#1A051D] py-20 px-4 md:px-8 border-t border-white/5 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFD700] opacity-5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF8A00] opacity-5 blur-[120px] rounded-full translate-x-1/4 translate-y-1/4"></div>

                <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">

                    {/* Top Status Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-10">
                        <span className="flex h-2 w-2 rounded-full bg-[#FFB800] animate-pulse"></span>
                        <p className="text-[#FFB800] text-xs font-semibold uppercase tracking-wider">
                            ⚡ Few Seats Left — 2,600+ Already Registered
                        </p>
                    </div>

                    {/* Main Offer Title */}
                    <h2 className="text-white text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight max-w-4xl mx-auto">
                        <span className="text-[#FFD700]">₹99</span> to Gain Clarity, Confidence & Control Over Your Life
                    </h2>

                    {/* Mentor Credentials */}
                    <p className="text-gray-400 text-sm md:text-base font-medium mb-12 opacity-90">
                        Guided by Dr. Vinay Bajrangi — 25 Years • 80,000+ Kundalis • PhD in Vedic Astrology
                    </p>

                    {/* Pricing Visuals */}
                    <div className="flex flex-col items-center mb-10">
                        <p className="text-gray-500 line-through text-lg mb-2">Value: ₹1,999</p>
                        <div className="relative">
                            <h3 className="text-[#FFA500] text-8xl md:text-9xl font-black leading-none drop-shadow-[0_0_30px_rgba(255,165,0,0.3)]">
                                ₹99
                            </h3>
                        </div>
                    </div>

                    {/* Feature Bar */}
                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-12 text-[#FFD700] font-black text-xs md:text-sm tracking-widest px-4">
                        <span>ONE-TIME REGISTRATION</span>
                        <span className="hidden md:block opacity-30">•</span>
                        <span>ZOOM LIVE SESSION</span>
                        <span className="hidden md:block opacity-30">•</span>
                        <span>JYOTISH CERTIFICATION PATHWAY</span>
                    </div>

                    {/* Big CTA Button */}
                    <button className="cursor-pointer group relative bg-gradient-to-r from-[#FFD700] via-[#FFB800] to-[#FF8A00] text-[#1A051D] font-black py-5 px-14 rounded-2xl text-2xl md:text-3xl shadow-[0_15px_40px_rgba(255,184,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 mb-16">
                        <span className="relative z-10">Register Now &rarr;</span>
                        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>

                    {/* Social Proof Badges */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl px-4">
                        <div className="bg-white/5 border border-white/10 rounded-xl py-5 px-6 flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                            <span className="text-[#4CAF50] text-xl">✅</span>
                            <span className="text-gray-200 font-bold text-sm">80,000+ Kundalis Analyzed</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl py-5 px-6 flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                            <span className="text-[#FFD700] text-xl">🎓</span>
                            <span className="text-gray-200 font-bold text-sm">10,000+ Students Taught</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl py-5 px-6 flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                            <span className="text-[#FF8A00] text-xl">📖</span>
                            <span className="text-gray-200 font-bold text-sm">15+ National Publications</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* Contact Us Section */}
            <footer className="bg-[#1A051D] text-white pt-12 pb-6 px-4 md:px-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">

                        {/* Address Section */}
                        <div className="space-y-2 max-w-sm">
                            <h4 className="font-bold text-lg">Address:</h4>
                            <p className="text-gray-300 text-sm leading-relaxed opacity-90">
                                Bajrangi Dham, Sector 66, Noida, Uttar Pradesh
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="space-y-3">
                            <h4 className="font-bold text-lg">Contact:</h4>
                            <div className="space-y-2">
                                <a
                                    href="tel:+919783807666"
                                    className="flex items-center gap-3 text-gray-300 hover:text-[#FFD700] transition-colors"
                                >
                                    <Phone size={18} />
                                    <span className="text-sm font-medium">
                                        +91 9278555588
                                    </span>
                                </a>
                                <a
                                    href="mailto:mail@vinaybajrangi.com"
                                    className="flex items-center gap-3 text-gray-300 hover:text-[#FFD700] transition-colors"
                                >
                                    <Mail size={18} />
                                    <span className="text-sm font-medium">
                                        mail@vinaybajrangi.com</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-18 pb-30 border-t border-white/10 text-center">
                        <p className="text-xs text-gray-500 font-medium tracking-wide">
                            Copyright © 2025 Astravastugurukul. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
            {/* Contact Us Section end */}

            {/* sticky footer section  */}
            <div className="fixed bottom-0 left-0 w-full bg-[#1A051D] border-t border-white/10 z-50 px-4 py-5 md:px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Pricing and Social Proof */}
                    <div className="flex flex-col text-white">
                        <div className="flex items-baseline gap-1">
                            <p className="text-2xl md:text-3xl font-black text-[#FFD700]">₹99/-</p>

                            <p className="text-[10px] md:text-xs font-bold opacity-80">
                                (Few Seats Left!)
                            </p>
                        </div>
                        <p className="text-xs md:text-sm font-bold leading-none">
                            10,000+ Students Taught
                        </p>
                    </div>

                    {/* Action Button */}
                    <div>
                        <button className="bg-gradient-to-r from-[#FFD700] via-[#FFB800] to-[#FF8A00] text-[#1A051D] font-black py-2.5 px-6 md:px-10 rounded-lg text-sm md:text-lg shadow-lg hover:scale-105 active:scale-95 transition-all">
                            Register Now
                        </button>
                    </div>

                </div>
            </div>
            {/* sticky footer section end */}
        </>
    );
};

export default AstroWebinarHero;
