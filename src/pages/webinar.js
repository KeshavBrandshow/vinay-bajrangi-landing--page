import React from 'react';
import { Calendar, Clock, BookOpen, Video, UserCircle, Heart, Target, GraduationCap, Briefcase, Sparkles } from 'lucide-react';

const AstroWebinarHero = () => {

    const features = [
        {
            title: "Read Your Own Kundli",
            desc: "Learn how to decode planets, houses & signs even as a beginner.",
            icon: "📜", // Replace with custom SVGs or Lucide icons
        },
        {
            title: "Understand How Planets Affect Your Life",
            desc: "Understanding Your Birth Chart/Kundali",
            icon: "🪐",
        },
        {
            title: "Discover the Power of Numerology",
            desc: "Use your birth date & name to unlock hidden energy patterns.",
            icon: "🔢",
        },
        {
            title: "Know Your Rashi & What It Means",
            desc: "Reveal your true personality, tendencies, and inner strengths.",
            icon: "♈",
        },
        {
            title: "Explore Your Lagna (Ascendant)",
            desc: "Understand your soul path and how others truly perceive you.",
            icon: "🧘",
        },
        {
            title: "Spot the Root Cause of Life Problems",
            desc: "Learn how planetary imbalances affect money, peace & success.",
            icon: "⚙️",
        },
        {
            title: "Take the Right Actions, at the Right Time",
            desc: "Master the concept of timing (Dasha) and aligned decision-making.",
            icon: "⏰",
        },
        {
            title: "Turn Struggles into Spiritual Strength",
            desc: "Convert confusion and pain into growth with Sanatani wisdom.",
            icon: "✨",
        },
        {
            title: "Begin Your Journey as an Astro Expert",
            desc: "Build a skill that helps others — and even creates a career path.",
            icon: "🎓",
        }
    ];

    const logos = [
        { name: "Zee News", src: "https://tagmango.com/staticassets/-vnglxmkexx3r2j8ohuichjrbbe-a15350e2e154b7196753f0b402f4cf79.png" },
        { name: "TEDx", src: "https://tagmango.com/staticassets/-cmyi9kknmtm46alcc8xlviuamm-574f769a0ecd21175f6dcb9f11bee03f.png" },
        { name: "Mint", src: "https://tagmango.com/staticassets/-khcyp9t5si650wauyv9ch8t4kyi-93e11b092caf9807f6baa60dc2b784e7.png" },
        { name: "Dainik Bhaskar", src: "https://tagmango.com/staticassets/-6ey3ssomerabqnqg4k5tco9z5ei-d7940a80eee9b0733b0dd321fc2dcbab.png" },
        { name: "Mid Day", src: "https://tagmango.com/staticassets/-yacr5jvzm3m3fidiqvgiuno6u-f2d07384de24ea9cb1c8785b7fdc432f.png" },
        { name: "Outlook India", src: "https://tagmango.com/staticassets/-awctfwtwbbyso4fo1zmlc5tcam-f66fbeabbf40b4186555ed26ee9bd206.png" },
    ];

    const categories = [
        {
            title: "Astrology Enthusiasts",
            desc: "Whether you're a beginner or have some knowledge, this session offers a structured way to deepen your understanding of planets, charts, and numbers.",
            icon: <UserCircle size={40} className="text-white opacity-80" />,
        },
        {
            title: "Seeking Relationship Clarity",
            desc: "Learn how birth charts reveal compatibility, emotional blocks, and the right timing for love, marriage, or resolution.",
            icon: <Heart size={40} className="text-white opacity-80" />,
        },
        {
            title: "Seekers of Personal Growth",
            desc: "Understand the deeper 'why' behind your life events. Decode your karmic patterns and get direction for relationships, purpose, and peace of mind.",
            icon: <Target size={40} className="text-white opacity-80" />,
        },
        {
            title: "Students & Career Changers",
            desc: "Not sure which path to take? Use your chart to find career strengths, ideal timing, and hidden potential for long-term success.",
            icon: <GraduationCap size={40} className="text-white opacity-80" />,
        },
        {
            title: "Professionals & Entrepreneurs",
            desc: "Use planetary timing and patterns to make better business decisions, choose the right partners, and align with high-growth opportunities.",
            icon: <Briefcase size={40} className="text-white opacity-80" />,
        },
        {
            title: "Aspiring Astro Professionals",
            desc: "Want to turn your passion into a profession? Learn how our students are earning ₹30,000 to ₹3,00,000/month through astrology and numerology consultations.",
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
                            Join Astro Mastery Live Webinar Today
                        </h1>
                    </div>

                    <div className="bg-[#260126] text-white py-2 text-center">
                        <p className="opacity-90 mt-1 italic font-bold text-2xl">
                            Trusted by 10,000+ Astro Enthusiasts
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
                                src="https://tagmango.com/staticassets/-astrology-webinar-5-581db2d075685067e536f0909733a665.png"
                                alt="Acharya Lavbhushan Ji"
                                className="relative z-10 w-full h-auto drop-shadow-xl rounded-full"
                            />

                            {/* Hindi Quote */}
                            <p className="mt-4 text-center text-[#1A051D] font-bold text-sm leading-tight italic">
                                "ज्योतिष सिर्फ भविष्य बताने की विद्या नहीं है — ये आत्मा को उसके कर्मों <br /> का बोध कराने का माध्यम है।"
                            </p>
                        </div>

                        {/* Right Side: Copy & CTA */}
                        <div className="w-full md:w-2/3 flex flex-col gap-4">
                            <h2 className="text-3xl md:text-4xl font-black text-[#260126] leading-tight">
                                Your Life Is Being Controlled by 9 Planets. Isn't It Time You Learn to Master Them?
                            </h2>

                            <p className="font-bold text-[#260126] text-lg uppercase tracking-wide">
                                Learn The Secrets of Astrology From The Legend Himself
                            </p>

                            <p className="text-[#260126] text-sm leading-relaxed">
                                In this live webinar, <strong>Acharya Lavbhushan Ji</strong> will teach the real science of Sanatani Vedic astrology so you can read Kundlis, solve life problems, help others & even build a career from this powerful knowledge.
                            </p>

                            {/* CTA Button */}
                            <button className="cursor-pointer bg-gradient-to-r from-[#FFD700] via-[#FFB800] to-[#FF8A00] text-[#260126] font-black py-4 px-8 rounded-lg shadow-lg text-2xl hover:scale-105 transition-transform">
                                Register Now at Just ₹99
                            </button>

                            {/* Timer Section */}
                            <div className="mt-4">
                                <p className="text-xl font-bold text-[#1A051D] mb-2">Offer Ends In</p>
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
                                Limited Seats – Book before it fills! 2600+ curious sanatanis already registered.
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
                    A Personal Message from Acharya Lavbhushan Ji
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
            <section className="bg-white py-16 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Header: Reduced margin-bottom from 12 to 6 */}
                <div className="text-center mb-6">
                    <h2 className="text-[#2D0A31] text-3xl md:text-5xl font-black mb-2">
                        What You’ll Learn in This Powerful ₹99 Webinar
                    </h2>
                    <p className="text-[#1A051D] italic text-lg opacity-80">
                        Your future is in the right hands now, don't worry
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
            {/* What you will learn section end */}

            {/* Meet Mentor Section */}

            <section className="bg-[#2D0A31] py-16 px-4 md:px-12 text-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-3/5 space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-xl font-medium">Meet Your Mentor:</h4>
                            <h2 className="text-4xl md:text-5xl font-black">Acharya Lavbhushan Ji</h2>
                            <p className="text-[#FFD700] italic font-medium">
                                India's #1 Trusted Astro-Numerology-Vastu Expert & Sanatani Guide
                            </p>
                        </div>

                        <div className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
                            <p>
                                Acharya Ji is a legendary name in the world of Astrology, Numerology & Vastu known for delivering powerful, practical guidance rooted in deep spiritual knowledge.
                            </p>
                            <p>
                                With almost 3 decades of experience, he has personally analyzed thousands of Kundlis and helped people from all walks of life from everyday people to top Industrialists, elite business families and renowned celebrities to overcome karmic challenges and unlock their highest potential.
                            </p>
                            <p>
                                What sets him apart is his unique ability to simplify the deep wisdom into practical knowledge & teachings that even complete beginners can learn with ease.
                            </p>
                        </div>

                        {/* Stat Cards */}
                        <div className="space-y-4 pt-4">
                            <div className="border border-[#F5E6B3]/30 rounded-lg p-6 bg-white/5">
                                <h3 className="text-2xl font-bold mb-2">Trained 10,000+ Students</h3>
                                <p className="text-sm opacity-80">
                                    He has trained more than 10,000 students through various workshops, webinars and masterclasses.
                                </p>
                            </div>

                            <div className="border border-[#F5E6B3]/30 rounded-lg p-6 bg-white/5">
                                <h3 className="text-2xl font-bold mb-2">2 Million+ Social Media Followers</h3>
                                <p className="text-sm opacity-80">
                                    With a growing online community of over 2 Million+ followers, Acharya Ji regularly shares insights on numbers, remedies, and life guidance — making ancient sciences simple and accessible to the modern generation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image & Branding */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center">
                        <div className="relative">
                            {/* Mentor Image - Replace src with your asset path */}
                            <img
                                src="https://tagmango.com/staticassets/--069low-ae3067043866c104133c17f8174efba8-d703523893b868e9f1b70c6bd25650b8.png"
                                alt="Acharya Lavbhushan"
                                className="w-full h-[500px] max-w-md drop-shadow-2xl"
                            />

                            {/* Name Tag Overlay */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[115%] bg-[#F5E6B3] text-[#2D0A31] py-4 px-6 rounded-md text-center shadow-xl">
                                <h3 className="text-3xl font-bold uppercase tracking-tight whitespace-nowrap">Acharya Lavbhushan</h3>
                                <p className="text-[15px] font-semibold uppercase mt-1">
                                    A Legacy of Accuracy, Trust & Wisdom Since 2003
                                </p>
                            </div>
                        </div>

                        {/* Hindi Quote */}
                        <p className="mt-16 text-center italic font-medium text-lg leading-relaxed text-gray-100">
                            "ज्योतिष एक विद्या नहीं, एक जिम्मेदारी है — अपने जीवन को <br /> समझने और उसे सही दिशा देने की जिम्मेदारी।"
                        </p>
                    </div>

                </div>
            </section>
            {/* Meet Mentor Section */}

            {/* Featured On section */}
            <section className="bg-white py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* Featured On Section */}
                    <div className="mb-20">
                        <h3 className="text-center text-3xl font-bold text-[#1A051D] mb-8">Featured On</h3>
                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-90">
                            {/* Note: In production, replace these with actual <img> tags */}
                            {logos.map((logo) => (
                                <img
                                    key={logo.src}
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-8 md:h-12 w-auto hover:grayscale transition-all cursor-default object-contain"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Audience Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-[#1A051D] text-3xl md:text-4xl font-black uppercase tracking-tight">
                            Who Should Join This Webinar?
                        </h2>
                    </div>

                    {/* Audience Grid */}
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
            </section>
            {/* Featured On section ends */}




        </>
    );
};

export default AstroWebinarHero;