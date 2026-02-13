import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function LoveAndRelationshipReport() {
    const [formData, setFormData] = useState({
        name: '',
        gender: 'male',
        dob: '',
        tob: '',
        pob: '',
        phone: '',
        email: '',
        comments: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted', formData);
        // Add logic to submit form
        alert("Thank you for your interest! We will contact you shortly.");
    };

    // Slider Logic
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [showAllInclusions, setShowAllInclusions] = useState(false);
    const [showAllTestimonials, setShowAllTestimonials] = useState(false);

    // Timer Logic
    const [timeLeft, setTimeLeft] = useState(2273); // ~37 minutes
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleScroll = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            const scrollRange = scrollWidth - clientWidth;
            if (scrollRange > 0) {
                const newIndex = Math.round((scrollLeft / scrollRange) * 20);
                setActiveIndex(Math.min(Math.max(newIndex, 0), 20));
            }
        }
    };

    const scroll = (direction) => {
        if (sliderRef.current) {
            const { current } = sliderRef;
            const scrollAmount = 300; // Adjust based on card width
            if (direction === 'left') {
                current.scrollLeft -= scrollAmount;
            } else {
                // Check if end reached to loop
                if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
                    current.scrollLeft = 0;
                } else {
                    current.scrollLeft += scrollAmount;
                }
            }
        }
    };

    // Celebrity Slider Logic
    const celebSliderRef = useRef(null);

    const celebScroll = (direction) => {
        if (celebSliderRef.current) {
            const { current } = celebSliderRef;
            const scrollAmount = 320;
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

    // Sample Report Slider Logic
    const sampleSliderRef = useRef(null);

    const sampleScroll = (direction) => {
        if (sampleSliderRef.current) {
            const { current } = sampleSliderRef;
            const scrollAmount = 400;
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

    // Auto Play
    useEffect(() => {
        const interval = setInterval(() => {
            scroll('right');
        }, 2000); // 2 seconds auto scroll for Main Slider
        return () => clearInterval(interval);
    }, []);

    // Auto Play for Celebrity Slider
    useEffect(() => {
        const interval = setInterval(() => {
            celebScroll('right');
        }, 2000); // 2 seconds auto scroll for Celeb Slider
        return () => clearInterval(interval);
    }, []);

    // Hiding Scrollbar CSS
    const hideScrollbarStyle = `
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    `;

    return (
        <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
            <style>{hideScrollbarStyle}</style>
            <Head>
                <title>Love & Relationship Report - Acharya Lavbhushan</title>
                <meta name="description" content="Understand Your Love Life, Emotional Patterns & Relationship Destiny" />
            </Head>

            {/* --- HERO SECTION --- */}
            <div className="relative bg-[#750109] text-[#fff7ed] py-16 lg:py-24 overflow-hidden min-h-[70vh] max-w-8xl mx-auto">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://www.acharyalavbhushan.com/_next/static/media/cosmic-background.8cc4f08b.jpg"
                        alt="Cosmic Background"
                        className="w-full h-full object-cover opacity-100"
                    />
                    {/* Deep Red/Black Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#750109]/60 via-[#0a0f1c]/80 to-[#0a0f1c]"></div>
                </div>

                {/* Floating Star Vectors - Updated with Purple, Orange, and Blue */}
                <div className="absolute top-10 left-10 text-[#743ae8] animate-pulse">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                </div>
                <div className="absolute top-20 right-20 text-[#fa7516] w-8 h-8 animate-bounce delay-700">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" /></svg>
                </div>
                <div className="absolute bottom-20 left-1/4 text-[#3e72ed] w-6 h-6 animate-ping duration-[3000ms]">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" /></svg>
                </div>

                <div className="relative z-10 w-full max-w-[1820px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-12 ">
                    {/* Left Content */}
                    <div className="md:w-1/2 space-y-8">
                        <div className="space-y-2">
                            <div className="flex items-center justify-center gap-4 mb-10">
                                <div className="h-px w-8 bg-[#743ae8] opacity-50"></div>
                                <span className="text-[#fa7516] text-sm md:text-lg font-medium tracking-tight italic">
                                    For Those Who Keep Giving Everything — And Still Can't Make Love Work
                                </span>
                                <div className="h-px w-8 bg-[#743ae8] opacity-50"></div>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                                Why Do Your Relationships Keep
                                Following the Same <br /><span className="text-[#743ae8]">Painful Pattern?</span>
                            </h1>
                        </div>
                        <div className="text-[#fff7ed]/80 text-sm md:text-base leading-relaxed max-w-2xl">
                            Your planets reveal your emotional blueprint — and exactly how to change what isn't working.
                        </div>

                        {/* CTA Button - Updated to Orange/Purple Combo */}
                        <div className="pt-2">
                            <button className="bg-[#fa7516] hover:bg-[#fa7516]/90 text-white font-bold py-3.5 px-8 rounded shadow-lg transition-transform transform hover:scale-105 flex items-center gap-3 text-sm md:text-base animate-pulse">
                                <span className="text-[#fff7ed]">Get My Love Report Now</span>
                                <span className="line-through text-black/40 text-xs">₹1499</span>
                                <span className="text-[#750109] font-extrabold">₹599 Only</span>
                            </button>
                        </div>

                        <p className="text-[#fff7ed]/60 text-xs md:text-sm font-medium tracking-wide flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#743ae8]">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.5 3c1.553 0 2.946.69 3.896 1.779A3.993 3.993 0 0115 3c2.786 0 5.25 2.322 5.25 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                            No judgment. No fear. Just honest, clear insights into your love life — trusted by 4.5 lakh+ seekers.
                        </p>

                        {/* Stats - Purple Accents */}
                        <div className="flex gap-8 lg:gap-14 pt-6 border-t border-[#743ae8]/30 mt-4">
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-[#fa7516]">⭐ 4.8 / 5</div>
                                <div className="text-xs text-[#fff7ed]/50 uppercase tracking-wide">Customer Rating</div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-[#fa7516]">👥 4.5L+</div>
                                <div className="text-xs text-[#fff7ed]/50 uppercase tracking-wide">Trusted Users</div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-[#fa7516]">📄 Instant</div>
                                <div className="text-xs text-[#fff7ed]/50 uppercase tracking-wide">Digital Report</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="md:w-1/2 relative h-full min-h-[400px] flex justify-center items-center">
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-10 w-96 h-96 bg-[#743ae8]/20 rounded-full blur-3xl p-10"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Astrologer Portrait with Glow Halo */}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="relative mb-[30px] z-20">
                                    <div className="absolute -inset-4 bg-gradient-to-t from-[#743ae8] to-transparent rounded-full opacity-50 blur-md"></div>
                                    <div className="w-48 h-48 lg:w-68 lg:h-68 rounded-full border-4 border-[#fa7516] overflow-hidden shadow-[0_0_40px_rgba(116,58,232,0.4)] bg-gray-800 relative">
                                        <img src="https://content.vinaybajrangi.com/img/content/1760069123-channels4_profile.jpg" alt="Vinay bajrangi" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                            {/* Report Book Cover */}
                            <div className="relative z-10 mt-4">
                                <div className="relative w-[180px] md:w-[220px] aspect-[2/3] transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105">
                                    <img
                                        src="https://images.unsplash.com/photo-1755540735962-905a0f9cdef9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFzdHJvbG9neSUyMEJvb2slMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                                        alt="Life Journey Report"
                                        className="w-full h-full object-contain drop-shadow-2xl rounded-r-lg absolute top-0 left-0 -rotate-10 -translate-x-10"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1755540735962-905a0f9cdef9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFzdHJvbG9neSUyMEJvb2slMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                                        alt="Life Journey Report"
                                        className="w-full h-full object-contain drop-shadow-2xl rounded-r-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='border-[#743ae8]/40' />

                {/* Featured In Slider */}
                <div className="mt-20 w-full relative ">
                    {/* Subtle top separator */}
                    <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#fa7516] to-transparent opacity-50 mb-8"></div>

                    <div className="text-center mb-12 max-w-4xl mx-auto px-4">
                        <span className="text-[#fa7516] font-medium tracking-widest uppercase text-sm drop-shadow-md block mb-2">FEATURED IN</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#fff7ed] mb-4">Recognized & Referenced Across Leading Media Platforms</h2>
                        <p className="text-[#fff7ed]/60 text-sm md:text-base leading-relaxed">
                            Dr. Vinay Bajrangi’s astrological insights, research, and predictions have been featured, discussed, and referenced across reputed media and knowledge platforms:
                        </p>
                    </div>

                    <div className="relative px-0 lg:px-12 group">
                        {/* Navigation Arrow Left */}
                        <button
                            onClick={() => scroll('left')}
                            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-24 w-12 items-center justify-center cursor-pointer text-[#fa7516]/50 hover:text-[#fa7516] transition-colors hover:bg-black/10 rounded-r-xl"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                        </button>

                        {/* Slider Track */}
                        <div
                            ref={sliderRef}
                            onScroll={handleScroll}
                            className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory justify-start px-4 scroll-smooth"
                        >
                            {[
                                { name: 'Bharti TV', icon: '📺' },
                                { name: 'Business Today', icon: '📈' },
                                { name: 'Crunchbase', icon: '🏢' },
                                { name: 'Curly Tales', icon: '🍜' },
                                { name: 'Dainik Bhaskar', icon: '📰' },
                                { name: 'IMDb', icon: '🎬' },
                                { name: 'India News', icon: '🇮🇳' },
                                { name: 'MensXP', icon: '👔' },
                                { name: 'Mid-Day', icon: '🗞️' },
                                { name: 'Mint', icon: '🌿' },
                                { name: 'News India', icon: '📺' },
                                { name: 'Outlook', icon: '👀' },
                                { name: 'Rajasthan Patrika', icon: '📰' },
                                { name: 'Sadhna TV', icon: '🕉️' },
                                { name: 'TEDx', icon: '❌' },
                                { name: 'YouTube', icon: '▶️' },
                                { name: 'Zee Network', icon: '📺' },
                            ].map((brand, i) => (
                                <div key={i} className="flex-none w-40 h-24 md:w-52 md:h-32 bg-[#0a0f1c]/50 rounded-xl flex flex-col items-center justify-center p-6 shadow-lg snap-center transition-transform hover:-translate-y-1 duration-300 border border-white/5 grayscale hover:grayscale-0 group">
                                    <span className="text-3xl mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-300">{brand.icon}</span>
                                    <span className="text-lg md:text-xl font-bold text-[#fff7ed]/40 group-hover:text-[#fff7ed] text-center leading-tight transition-colors">{brand.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrow Right */}
                        <button
                            onClick={() => scroll('right')}
                            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-24 w-12 items-center justify-center cursor-pointer text-[#fa7516]/50 hover:text-[#fa7516] transition-colors hover:bg-black/10 rounded-l-xl"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    {/* Pagination Dots (Interactive) */}
                    {/* Pagination Dots (Interactive) */}
                    <div className="flex justify-center gap-2 mt-6 pb-4">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    if (sliderRef.current) {
                                        const { scrollWidth, clientWidth } = sliderRef.current;
                                        const scrollRange = scrollWidth - clientWidth;
                                        const targetScroll = (scrollRange / 20) * i;
                                        sliderRef.current.scrollTo({
                                            left: targetScroll,
                                            behavior: 'smooth'
                                        });
                                    }
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-[#fa7516]' : 'w-1.5 bg-[#fa7516]/20 hover:bg-[#fa7516]/80'}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
            {/* --- CELEBRITY EXPERIENCES SECTION REMOVED/HIDDEN FOR LOVE REPORT --- */}
            {/* <div className="bg-[#050912] py-20 overflow-hidden relative">
                 ...
            </div> */}


            {/* --- HERO SECTION --- */}



            {/* --- CELEBRITY EXPERIENCES SECTION --- */}
            <div className="bg-[#750109] py-20 overflow-hidden relative">
                {/* Background Decorative Line - Purple to Orange */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#743ae8]/40 to-transparent"></div>

                {/* Subtle Background Glows */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#750109]/10 rounded-full blur-[120px] -z-0"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3e72ed]/5 rounded-full blur-[120px] -z-0"></div>

                <div className="max-w-[1920px] mx-auto px-4 lg:px-12 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <div className="text-[#fa7516] font-bold tracking-[0.2em] text-xs uppercase">TRUSTED BY CELEBRITIES & INDUSTRY LEADERS</div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#fff7ed] drop-shadow-md pb-2 leading-tight">
                            When Matters of the Heart Become Critical — <span className="text-[#743ae8]">They Seek Precision</span>
                        </h2>
                        <p className="text-[#fff7ed]/80 max-w-3xl mx-auto text-lg font-light leading-relaxed">
                            Celebrities, public figures, and industry leaders have consulted <strong>Dr. Vinay Bajrangi</strong> during their most emotionally critical phases. All experiences shared with complete discretion.
                        </p>

                        <div className="max-w-4xl mx-auto bg-[#750109]/10 rounded-xl p-6 border border-[#fa7516]/100 mt-6 text-left backdrop-blur-sm">
                            <p className="text-[#fa7516] font-semibold mb-3 text-center md:text-left">Astrology here is used to:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[#fff7ed]/90 text-sm md:text-base">
                                <li className='flex items-start gap-2'><span className="text-[#743ae8] mt-1">✔</span> Understand why love comes early or late in life</li>
                                <li className='flex items-start gap-2'><span className="text-[#743ae8] mt-1">✔</span> Decode repeated relationship patterns and blocks</li>
                                <li className='flex items-start gap-2'><span className="text-[#743ae8] mt-1">✔</span> Make marriage and commitment decisions</li>
                                <li className='flex items-start gap-2'><span className="text-[#743ae8] mt-1">✔</span> Align decisions with planetary periods</li>
                            </ul>
                            <p className="text-[#fff7ed]/40 text-xs mt-4 text-center md:text-left italic">(100% Confidentiality Guaranteed)</p>
                        </div>
                    </div>

                    <div className="relative group px-0 lg:px-12">
                        {/* Nav Left - Purple Background */}
                        <button
                            onClick={() => celebScroll('left')}
                            className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-[#743ae8]/80 hover:bg-[#fa7516] text-white items-center justify-center rounded-full backdrop-blur-sm border border-white/10 transition-all hover:scale-110 shadow-xl cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                        </button>

                        {/* Carousel */}
                        <div
                            ref={celebSliderRef}
                            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-8 px-4 scroll-smooth"
                        >
                            {[
                                { name: "Akshay Kumar", role: "INDIAN ACTOR & FILM PRODUCER", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                { name: "Alaya F", role: "INDIAN ACTOR", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                { name: "Ameesha Patel", role: "INDIAN ACTRESS", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                { name: "Anjali Anand", role: "INDIAN ACTRESS", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                // { name: "Akshay Kumar", role: "INDIAN ACTOR & FILM PRODUCER", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                // { name: "Alaya F", role: "INDIAN ACTOR", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                // { name: "Ameesha Patel", role: "INDIAN ACTRESS", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                // { name: "Anjali Anand", role: "INDIAN ACTRESS", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                { name: "Akanksha Sharma", role: "INDIAN ACTOR & MODEL", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                // { name: "Akanksha Sharma", role: "INDIAN ACTOR & MODEL", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                { name: "Anjini Dhawan", role: "INDIAN ACTRESS", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                            ].map((celeb, idx) => (
                                <div key={idx} className="flex-none w-72 md:w-80 relative group/card snap-center">
                                    <div className="relative h-[450px] rounded-2xl overflow-hidden border border-[#fa7516]/50 bg-[#0a0f1c] shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(116,58,232,0.3)]">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#750109] via-transparent to-transparent z-10 opacity-80"></div>
                                        <img src={celeb.img} alt={celeb.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />

                                        <div className="absolute bottom-0 left-0 w-full z-20 p-6 flex flex-col items-center text-center">
                                            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#fa7516] to-transparent mb-4"></div>
                                            <h3 className="text-2xl font-bold text-[#fff7ed] uppercase tracking-wide mb-1 group-hover/card:text-[#fa7516] transition-colors">{celeb.name}</h3>
                                            <div className="text-[10px] text-[#3e72ed] font-bold tracking-[0.15em] uppercase pt-2 mt-1 w-full border-t border-white/5">{celeb.role}</div>
                                        </div>
                                    </div>
                                    {/* Purple Accent Frame */}
                                    <div className="absolute -bottom-2 -right-2 w-full h-full border border-[#fa7516]/20 rounded-2xl -z-10 group-hover/card:translate-x-2 group-hover/card:translate-y-2 transition-transform duration-300"></div>
                                </div>
                            ))}
                        </div>

                        {/* Nav Right */}
                        <button
                            onClick={() => celebScroll('right')}
                            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-[#743ae8]/80 hover:bg-[#fa7516] text-white items-center justify-center rounded-full backdrop-blur-sm border border-white/10 transition-all hover:scale-110 shadow-xl cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        </button>
                    </div>

                    {/* Testimonials - Purple & Orange Accents */}
                    <div className="mt-20 max-w-5xl mx-auto space-y-20">
                        <div>
                            <div className="text-center mb-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#fff7ed] mb-2">🎤 <span className="text-[#743ae8]">CELEBRITY</span> EXPERIENCES</h3>
                                <p className="text-[#fa7516] text-lg font-medium">Real Guidance. Real Results.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    "Astrology helped me understand my timing rather than fight it.",
                                    "The predictions were direct, logical, and deeply accurate.",
                                    "This was not superstition — it was strategic life planning."
                                ].map((quote, idx) => (
                                    <div key={idx} className="bg-[#0a0f1c] border border-[#743ae8]/20 rounded-xl p-6 relative">
                                        <div className="absolute -top-3 left-6 text-4xl text-[#743ae8]/40">"</div>
                                        <p className="text-[#fff7ed]/80 italic relative z-10">{quote}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 bg-[#750109]/10 rounded-xl p-8 border-l-4 border-[#fa7516]">
                                <p className="text-[#fff7ed]/90 mb-4 text-lg font-medium">Dr. Vinay Bajrangi has helped high-profile individuals:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Navigate fame-related pressures",
                                        "Avoid career-damaging decisions",
                                        "Understand delays & controversies",
                                        "Strategic planetary mapping"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[#fff7ed]/70">
                                            <span className="text-[#3e72ed] font-bold">✔</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Why Trust - Deep Blue/Purple Gradient */}
                        <div className="bg-gradient-to-br from-[#750109]/30 via-[#0a0f1c] to-[#743ae8]/10 rounded-2xl p-8 md:p-12 border border-[#fa7516]/100 shadow-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#fa7516] mb-8 text-center uppercase tracking-wide">🔮 WHY CELEBRITIES TRUST DR. VINAY BAJRANGI</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 max-w-3xl mx-auto leading-relaxed">
                                {[
                                    "Discretion & absolute confidentiality",
                                    "No sensationalism or fear-based logic",
                                    "Practical guidance for real-world outcomes",
                                    "Deep focus on karma & timing"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[#743ae8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-[#fa7516] text-sm">✔</span>
                                        </div>
                                        <span className="text-[#fff7ed]/90 text-lg">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* --- PERSONAL MESSAGE SECTION --- */}
            <div className="bg-[#0b1120] py-16 text-center relative overflow-hidden">
                {/* Background Elements - Multi-tone Glows */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#743ae8]/50 to-transparent"></div>
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#750109]/15 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#3e72ed]/10 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* What Is It - Purple Accents */}
                        <div className="text-left space-y-6">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#743ae8] tracking-wide drop-shadow-sm uppercase">
                                What is this report about?
                            </h2>
                            <p className="text-[#fff7ed]/90 text-lg leading-relaxed">
                                This report focuses only on love, marriage, emotional bonding, compatibility, and relationship stability, unlike general horoscope reports.
                            </p>
                            <div className="bg-[#750109]/5 p-6 rounded-xl border border-[#743ae8]/20 backdrop-blur-sm">
                                <p className="text-[#fa7516] font-semibold mb-4 uppercase text-xs tracking-widest">It analyzes:</p>
                                <ul className="space-y-3 text-[#fff7ed]/80">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#fa7516] text-xl leading-none mt-1">✦</span>
                                        <span>Your emotional needs and attachment style</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#fa7516] text-xl leading-none mt-1">✦</span>
                                        <span>Timing of love, marriage, and commitment</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#fa7516] text-xl leading-none mt-1">✦</span>
                                        <span>Causes of delays, breakups, conflicts, or betrayal</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#fa7516] text-xl leading-none mt-1">✦</span>
                                        <span>Long-term relationship stability and satisfaction</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#fa7516] text-xl leading-none mt-1">✦</span>
                                        <span>Remedies to improve harmony, attraction, and trust</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-2 italic text-[#fff7ed]/40 text-sm border-l-2 border-[#3e72ed]/30 pl-4">
                                <p>All insights are based on your exact birth details, not generic predictions.</p>
                            </div>
                        </div>

                        {/* Who Is It For - Orange & Blue Accents */}
                        <div className="bg-[#0a0f1c] border border-[#743ae8]/20 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden group hover:border-[#fa7516]/40 transition-all duration-500">
                            {/* Subtle internal glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#fa7516]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#3e72ed]/5 rounded-full blur-3xl -ml-10 -mb-10"></div>

                            <h3 className="text-xl md:text-2xl font-bold text-[#fff7ed] mb-6 flex items-center gap-3">
                                <span className="text-[#fa7516] text-3xl">🎯</span> WHO THIS REPORT IS IDEAL FOR
                            </h3>
                            <p className="text-[#fff7ed]/50 mb-6 text-sm uppercase tracking-widest">This report is highly recommended if you:</p>

                            <ul className="space-y-4">
                                {[
                                    "Are facing repeated heartbreaks or failed relationships",
                                    "Are confused between two relationships",
                                    "Are experiencing delay in marriage",
                                    "Feel emotionally disconnected in marriage",
                                    "Want to understand your partner compatibility",
                                    "Want clarity before committing to someone",
                                    "Want peace, emotional balance, and relationship harmony"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-[#fff7ed]/90 group/item">
                                        <div className="h-6 w-6 rounded-full bg-[#743ae8]/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover/item:bg-[#fa7516]/20">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#743ae8] group-hover/item:text-[#fa7516] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm md:text-base leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative bottom bar */}
                            <div className="mt-8 h-1 w-full bg-gradient-to-r from-transparent via-[#743ae8]/30 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#050912] py-20 relative overflow-hidden">
                <div className="max-w-[1920px] mx-auto px-4 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <div className="text-yellow-600 font-bold tracking-[0.2em] text-xs uppercase mb-4">CORE FEATURES</div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                            WHAT YOU GET
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                title: "Emotional Needs & Attachment",
                                desc: "Understand your core emotional nature and what you truly need in a relationship.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#fa7516] mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Timing of Love & Marriage",
                                desc: "Prediction of favorable periods for finding love, getting married, or deepening commitment.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#fa7516] mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Remedies for Harmony",
                                desc: "Practical Vedic remedies to resolve conflicts, remove obstacles, and improve bonding.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#fa7516] mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Why Delays & Breakups?",
                                desc: "Root cause analysis of why relationships fail or marriage is delayed.",
                                icon: <span className="text-3xl mb-4 block">💔</span>
                            },
                            {
                                title: "Compatibility Insights",
                                desc: "Checking long-term stability and happiness with partners.",
                                icon: <span className="text-3xl mb-4 block">🤝</span>
                            },
                            {
                                title: "Long-Term Relationship Stability",
                                desc: "Will it last? Insights into the longevity of your bond.",
                                icon: <span className="text-3xl mb-4 block">⚓</span>
                            }
                        ].slice(0, showAllFeatures ? 11 : 3).map((feature, idx) => (
                            <div key={idx} className="bg-[#0a0f1c] border border-white/10 rounded-xl p-8 hover:border-[#fa7516]/50 transition-colors shadow-lg">
                                {feature.icon}
                                <h3 className="text-xl font-bold text-[#fff7ed] mb-2">{feature.title}</h3>
                                <p className="text-[#fff7ed]/60 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAllFeatures(!showAllFeatures)}
                            className="bg-inherit border border-[#fa7516] text-[#fa7516] px-8 py-3 rounded-full font-semibold hover:bg-[#fa7516] hover:text-[#fff7ed] transition-all flex items-center justify-center gap-2 mx-auto"
                        >
                            {showAllFeatures ? 'Show Less' : 'Show More'}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform ${showAllFeatures ? 'rotate-180' : ''}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>




            {/* --- SAMPLE REPORT SLIDER SECTION --- */}
            <div className="bg-[#050912] pb-20 pt-10 relative overflow-hidden">
                <div className="max-w-[1920px] mx-auto px-4 lg:px-12 relative z-10">

                    {/* Slider Container Box */}
                    <div className="group max-w-[1600px] mx-auto bg-[#0a0f1c] border border-white/5 rounded-3xl p-4 md:p-12 shadow-2xl">

                        {/* Wrapper for Slider & Arrows to center arrows relative to images */}
                        <div className="relative">
                            {/* Nav Left */}
                            <button
                                onClick={() => sampleScroll('left')}
                                className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 hover:bg-yellow-600 text-yellow-500 hover:text-white items-center justify-center rounded-full transition-all hover:scale-110 cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                            </button>

                            {/* Carousel */}
                            <div
                                ref={sampleSliderRef}
                                className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
                            >
                                {[1, 2, 3, 4, 5].map((item, idx) => (
                                    <div key={idx} className="flex-none w-full md:w-[45%] lg:w-[23%] snap-center">
                                        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px] md:h-[500px] relative border-4 border-gray-800 group-hover:border-yellow-500/30 transition-colors">
                                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-500 text-center p-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 mb-4 opacity-50">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                </svg>
                                                <span className="font-bold text-lg">Sample Report Page {item}</span>
                                                <span className="text-xs mt-2 text-gray-400 max-w-[200px]">Detailed Kundali & Planetary Analysis shown here</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Nav Right */}
                            <button
                                onClick={() => sampleScroll('right')}
                                className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 hover:bg-yellow-600 text-yellow-500 hover:text-white items-center justify-center rounded-full transition-all hover:scale-110 cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                            </button>
                        </div>

                        {/* Pagination Dots (Visual) */}
                        <div className="flex justify-center gap-2 mt-8">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className={`h-1.5 rounded-full ${i === 0 ? 'w-6 bg-yellow-500' : 'w-1.5 bg-yellow-600/40'}`}></div>
                            ))}
                        </div>

                        {/* CTA & Price */}
                        <div className="text-center mt-12 space-y-6">
                            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-extrabold py-4 px-8 md:px-12 rounded-lg text-lg md:text-xl shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] uppercase tracking-wide">
                                Get Your Personalised Love Report Now
                            </button>
                            <div className="text-3xl font-bold text-white flex justify-center items-center gap-4">
                                <span className="text-gray-500 line-through text-2xl">₹1499</span>
                                <span className="text-yellow-500">₹599</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* --- ASTROLOGY INFO SECTION --- */}
            <div className="bg-[#750109] pb-20 pt-10 relative overflow-hidden text-center">
                <div className="max-w-8xl mx-auto px-4 relative z-10">

                    {/* Floating Numbers (Visual) */}
                    <div className="flex justify-center gap-4 md:gap-8 mb-10">
                        {[8, 3, 5, 8, 6, 5].map((num, i) => (
                            <div key={i} className="w-10 h-10 md:w-14 md:h-14 bg-[#fa7516] rounded-full flex items-center justify-center text-[#fff7ed] font-bold text-xl md:text-2xl shadow-[0_0_15px_rgba(250,117,22,0.6)] animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                                {num}
                            </div>
                        ))}
                    </div>

                    {/* Heading & Text */}
                    <h2 className="text-4xl md:text-5xl font-normal text-[#fa7516] mb-6 tracking-wider uppercase">ASTROLOGICAL FOUNDATION</h2>
                    <div className="text-[#fff7ed]/80 leading-relaxed text-sm md:text-base max-w-4xl mx-auto mb-16">
                        Astrology is an ancient science that reveals how planetary positions influence your emotions, attraction, attachment, and relationship karma.
                        <br /><br />
                        This Love & Relationship Report uses time-tested Vedic techniques to analyze your birth chart in depth, helping you align your emotional life with supportive planetary energies.
                    </div>

                    {/* Stats Box */}
                    <div className="bg-[#0a0f1c]/40 border border-[#fa7516]/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="text-5xl md:text-7xl font-bold text-[#fff7ed] mb-2">4.5L+</div>
                            <div className="text-sm md:text-base text-[#fff7ed]/60 font-bold uppercase tracking-widest mb-8">Reports Have Been Sold Already!</div>

                            <button className="bg-gradient-to-r from-[#fa7516] to-[#fa7516]/80 hover:from-[#fa7516]/90 hover:to-[#fa7516] text-[#fff7ed] font-extrabold py-3 px-8 rounded shadow-lg transition-transform transform hover:scale-105 uppercase text-sm md:text-base">
                                Get Your Report Now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            {/* --- HOW IT WORKS SECTION --- */}
            <div className="bg-[#050912] pb-20 relative overflow-hidden">
                <div className="max-w-[1920px] mx-auto px-4 lg:px-12 relative z-10 text-center">

                    <h2 className="text-3xl md:text-5xl font-bold text-[#fa7516] mb-16 tracking-wide drop-shadow-md">
                        Here Is Exactly How It Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative max-w-[1600px] mx-auto">

                        {/* Connecting Line (Desktop Only) */}
                        <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-[#fa7516]/30 z-0"></div>

                        {[
                            {
                                num: 1,
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                ),
                                title: "Enter Your Birth Details",
                                sub: "Date, time, and place of birth."
                            },
                            {
                                num: 2,
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                ),
                                title: "Relationship-Focused Chart Analysis",
                                sub: "Detailed study of 5th, 7th, 8th, and 12th houses, Venus, Moon, Mars, and relevant yogas."
                            },
                            {
                                num: 3,
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                ),
                                title: "Love & Marriage Interpretation",
                                sub: "Analysis of love life patterns, commitment potential, emotional compatibility, and marital happiness."
                            },
                            {
                                num: 4,
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.263l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                ),
                                title: "Remedies & Guidance",
                                sub: "Simple, practical remedies to improve love life and relationship harmony."
                            },
                            {
                                num: 5,
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                ),
                                title: "Personalised Report Delivery",
                                sub: "Your complete Love & Relationship Report is delivered directly to your email."
                            }
                        ].map((step, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center">
                                {/* Number Badge */}
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 md:left-2 md:translate-x-0 w-8 h-8 md:w-10 md:h-10 bg-[#fa7516] rounded-full flex items-center justify-center font-bold text-[#fff7ed] border-4 border-[#050912] z-20">
                                    {step.num}
                                </div>

                                {/* Card */}
                                <div className="bg-[#0a0f1c] w-full h-full border border-[#fa7516]/20 rounded-xl p-8 pt-10 flex flex-col items-center hover:border-[#fa7516]/50 transition-colors group shadow-lg">
                                    <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-[#fff7ed] font-bold text-lg mb-2">{step.title}</h3>
                                    <p className="text-[#fff7ed]/60 text-xs md:text-sm">{step.sub}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            {/* --- REPORT INCLUSIONS SECTION --- */}
            <div className="bg-[#050912] pb-20 pt-10 relative overflow-hidden">
                <div className="max-w-[1920px] mx-auto px-4 lg:px-12 relative z-10">

                    <h2 className="text-3xl md:text-5xl font-bold text-[#fa7516] mb-16 text-center tracking-wide drop-shadow-md">
                        This is what you get in the Report
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1600px] mx-auto">
                        {[
                            "Love Nature & Emotional Personality",
                            "Relationship Expectations & Emotional Needs",
                            "Attraction Patterns & Partner Type",
                            "Timing of Love Relationships",
                            "Chances of Love Marriage vs Arranged Marriage",
                            "Reasons for Delay or Obstacles in Love & Marriage",
                            "Breakup, Separation & Divorce Indicators",
                            "Compatibility & Long-Term Relationship Stability",
                            "Extra-Marital Attraction or Trust Issues Analysis",
                            "Marriage Timing & Quality of Married Life",
                            "Doshas Affecting Relationships (if present)",
                            "Remedies for Love, Marriage & Emotional Peace",
                            "Venus & Mars Strength Analysis",
                            "Emotional Healing & Relationship Improvement Guidance"
                        ].slice(0, showAllInclusions ? 18 : 3).map((item, idx) => (
                            <div key={idx} className="bg-[#0a0f1c] border border-white/5 rounded-2xl p-6 flex items-center gap-6 shadow-lg hover:border-[#fa7516]/30 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-[#fa7516] text-[#fff7ed] flex items-center justify-center font-bold text-lg shadow-[0_0_10px_rgba(250,117,22,0.5)] group-hover:scale-110 transition-transform">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>
                                <h3 className="text-[#fff7ed] text-lg font-semibold tracking-wide group-hover:text-[#fa7516] transition-colors">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAllInclusions(!showAllInclusions)}
                            className="bg-transparent border border-[#fa7516] text-[#fa7516] px-8 py-3 rounded-lg font-semibold hover:bg-[#fa7516] hover:text-[#750109] transition-all flex items-center justify-center gap-2 mx-auto uppercase tracking-wider text-sm"
                        >
                            {showAllInclusions ? 'Show Less' : 'Show More'}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform ${showAllInclusions ? 'rotate-180' : ''}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            {/* --- PRICING SECTION --- */}
            <div className="bg-[#050912] pb-20 pt-10 relative overflow-hidden">
                <div className="max-w-[1920px] mx-auto px-4 lg:px-12 relative z-10">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#fa7516] mb-4 tracking-wide drop-shadow-md">
                            Choose the Support That Feels Right for You
                        </h2>
                        <p className="text-[#fff7ed]/60">Select the report that best fits your needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto items-stretch">

                        {/* Plan 1 — Left Card */}
                        <div className="bg-[#0a0f1c] border border-white/10 rounded-2xl p-8 flex flex-col relative group hover:border-white/20 transition-all shadow-lg">
                            <h3 className="text-xl font-bold text-[#fff7ed] mt-4 mb-2">Love & Relationship Report</h3>
                            <p className="text-[#fff7ed]/40 text-xs mb-6">Complete love & emotional destiny blueprint</p>

                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-[#fff7ed]/30 line-through text-lg">₹1499</span>
                                <span className="text-[#fa7516] text-3xl font-bold">₹599</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    "Love nature & compatibility analysis",
                                    "Timing of love and marriage",
                                    "Breakup & delay root cause analysis",
                                    "Remedial measures included",
                                    "Written in simple, clear language"
                                ].map((feat, i) => (
                                    <li key={i} className="flex gap-3 text-[#fff7ed]/70 text-xs leading-relaxed">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#fa7516] flex-shrink-0 mt-0.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-3 border border-[#fa7516] text-[#fa7516] font-bold rounded hover:bg-[#fa7516] hover:text-[#fff7ed] transition-colors uppercase tracking-wider text-sm">
                                BUY NOW
                            </button>
                        </div>

                        {/* Plan 2 — Middle Card (Elevated/Highlighted) */}
                        <div className="bg-[#750109] border-2 border-[#fa7516] rounded-2xl p-8 flex flex-col relative shadow-[0_0_40px_rgba(250,117,22,0.15)] transform md:-translate-y-4 z-20">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fa7516] text-[#fff7ed] text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                                Best Value
                            </div>

                            <h3 className="text-xl font-bold text-[#fff7ed] mt-4 mb-2">Love Report + 1-on-1 Consultation</h3>
                            <p className="text-[#fff7ed]/60 text-xs mb-6">Speak directly with an astrological expert</p>

                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-[#fff7ed]/30 line-through text-lg">₹15999</span>
                                <span className="text-[#fa7516] text-3xl font-bold">₹8799</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    "Everything in the Love & Relationship Report",
                                    "15–20 minute private consultation with an expert",
                                    "Discuss your specific relationship situation directly",
                                    "Personalized remedies for your unique challenges",
                                    "Best suited for deeper clarity through direct interaction"
                                ].map((feat, i) => (
                                    <li key={i} className="flex gap-3 text-[#fff7ed]/90 text-xs leading-relaxed font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#fa7516] flex-shrink-0 mt-0.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 bg-[#743ae8] text-[#fff7ed] font-bold rounded hover:bg-[#743ae8]/80 transition-colors uppercase tracking-wider text-sm shadow-lg border border-[#fa7516]/30">
                                BUY NOW
                            </button>
                        </div>

                        {/* Plan 3 — Right Card */}
                        <div className="bg-[#0a0f1c] border border-white/10 rounded-2xl p-8 flex flex-col relative group hover:border-white/20 transition-all shadow-lg">
                            <div className="absolute -top-3 right-6 bg-[#3e72ed] text-[#fff7ed] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tight">
                                Most Popular
                            </div>

                            <h3 className="text-xl font-bold text-[#fff7ed] mt-4 mb-2">Love Report + Ask 2 Questions</h3>
                            <p className="text-[#fff7ed]/40 text-xs mb-6">Focused answers to your concerns</p>

                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-[#fff7ed]/30 line-through text-lg">₹13999</span>
                                <span className="text-[#fa7516] text-3xl font-bold">₹6699</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    "Everything in the Love & Relationship Report",
                                    "Ask 2 specific questions about love or marriage",
                                    "Detailed written answers within 48 hours",
                                    "Ideal for targeted clarity without live chat",
                                    "Perfect for one specific situation"
                                ].map((feat, i) => (
                                    <li key={i} className="flex gap-3 text-[#fff7ed]/70 text-xs leading-relaxed">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#fa7516] flex-shrink-0 mt-0.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-3 border border-[#fa7516] text-[#fa7516] font-bold rounded hover:bg-[#fa7516] hover:text-[#fff7ed] transition-colors uppercase tracking-wider text-sm">
                                BUY NOW
                            </button>
                        </div>

                    </div>
                </div>
                {/* --- TESTIMONIALS SECTION --- */}
                {/* <div className="bg-[#050912] pb-20 pt-50 relative overflow-hidden text-center">
                    <div className="max-w-[1920px] mx-auto px-4 lg:px-12 relative z-10">

                        <div className="flex flex-col items-center mb-16">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-yellow-500 mb-4 animate-bounce">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <h3 className="text-yellow-500 font-bold tracking-widest uppercase mb-2">TESTIMONIALS</h3>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide drop-shadow-md">
                                Loved by thousands!
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1600px] mx-auto text-left">
                            {[
                                {
                                    name: "Kavitha Iyer",
                                    title: "Marketing Professional, Chennai",
                                    initial: "KI",
                                    text: '"I had been through three failed relationships and couldn\'t understand what I was doing wrong. Each time felt different but ended the same way. The Destiny Report explained a karmic pattern in my 7th house that was creating this cycle — and more importantly, what I needed to learn from it before things could change. For the first time I stopped blaming circumstances and started understanding the lesson. That shift alone was worth everything."'
                                },
                                {
                                    name: "Ankit Sharma",
                                    title: "Finance Analyst, Delhi",
                                    initial: "AS",
                                    text: '"I had a good career by every external measure — salary, designation, stability. But I felt completely hollow inside. The Destiny Report showed me that my 9th house and Rahu placement were pulling me toward teaching and knowledge sharing, not corporate work. I haven\'t quit my job yet — but I\'ve started a weekend workshop and for the first time in years I feel like I am moving toward something real."'
                                },
                                {
                                    name: "Sudha Ramanathan",
                                    title: "Homemaker, Hyderabad",
                                    initial: "SR",
                                    text: '"I spent years fighting certain situations in my life — my difficult relationship with my mother, my health challenges, a career that never fully took off. The report helped me understand which of these were karmic in nature and which ones I had the power to change. That distinction gave me enormous peace. I stopped exhausting myself fighting the wrong battles."'
                                },
                                {
                                    name: "Rajesh Kulkarni",
                                    title: "Entrepreneur, Pune",
                                    initial: "RK",
                                    text: '"I have read extensively about spirituality and karma for over a decade. But reading general books and understanding my own specific karmic blueprint are two completely different things. This report gave me a personal map — my specific karmic debts, the houses where I need to work hardest, the Dasha periods connected to spiritual growth. It felt like moving from theory to practice."'
                                },
                                {
                                    name: "Neha Joshi",
                                    title: "Architect, Mumbai",
                                    initial: "NJ",
                                    text: '"Success always came late for me — jobs, recognition, even relationships. The report explained my Saturn placement and how my destiny cycle was structured for delayed but solid growth. Understanding that I wasn\'t failing — I was just on a different timeline — completely changed my relationship with effort and patience. I am now in the best phase of my professional life and I understand exactly why it came when it did."'
                                },
                                {
                                    name: "Siddharth Nair",
                                    title: "Software Engineer, London",
                                    initial: "SN",
                                    text: '"Living abroad, you lose connection with your cultural roots and sometimes with yourself. What I received was a deeply accurate mirror of my inner conflicts — the tension between ambition and belonging, between the life I built and the one I perhaps should have. The report didn\'t tell me what to do. It helped me understand who I am. That kind of clarity is rare."'
                                }
                            ].slice(0, showAllTestimonials ? 6 : 3).map((testimonial, idx) => (
                                <div key={idx} className="bg-[#0a0f1c] border border-white/10 rounded-2xl p-8 shadow-lg hover:border-yellow-500/30 transition-all flex flex-col h-full">
                                    <div className="flex gap-1 mb-4 text-yellow-500">
                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-300 text-lg italic mb-6 flex-grow">{testimonial.text}</p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-lg">
                                            {testimonial.initial}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                                            {testimonial.title && <p className="text-gray-400 text-sm">{testimonial.title}</p>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <button
                                onClick={() => setShowAllTestimonials(!showAllTestimonials)}
                                className="bg-transparent border border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all flex items-center justify-center gap-2 mx-auto uppercase tracking-wider text-sm"
                            >
                                {showAllTestimonials ? 'Show Less' : 'Show More'}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform ${showAllTestimonials ? 'rotate-180' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div> */}
            </div>
            {/* --- ABOUT MAESTRO SECTION --- */}
            <div className="bg-[#050912] pb-20 pt-10 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    {/* Twinkling Stars */}
                    <div className="absolute top-10 left-10 animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#3e72ed] opacity-60">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="absolute top-40 right-20 animate-bounce delay-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#fa7516] opacity-80">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="absolute bottom-20 left-1/3 animate-pulse delay-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#743ae8] opacity-70">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#743ae8]/5 blur-[90px] rounded-full animate-pulse"></div>

                    <div className="absolute bottom-10 right-10 animate-pulse delay-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-15 h-15 text-[#fa7516] opacity-50">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-[1600px] mx-auto px-4 lg:px-12 relative z-10">

                    <div className="text-center mb-12">
                        <h4 className="text-[#fa7516] text-xs font-bold tracking-[0.2em] uppercase mb-4">ABOUT THE EXPERT</h4>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Left Image Side */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="absolute inset-0 bg-[#fa7516]/10 blur-[100px] rounded-full opacity-50"></div>
                            <div className="relative z-10 bg-[#0a0f1c] rounded-3xl overflow-hidden border border-[#fa7516]/30 p-2 shadow-2xl">
                                <div className="bg-gradient-to-b from-[#750109]/20 to-[#0a0f1c] rounded-2xl overflow-hidden">
                                    <img
                                        src="https://content.vinaybajrangi.com/img/content/1760069123-channels4_profile.jpg"
                                        alt="Dr. Vinay Bajrangi"
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Rotating Halo Effect (Visual) */}
                                <div className="absolute inset-0 border-[3px] border-dashed border-[#fa7516]/30 rounded-3xl animate-[spin_10s_linear_infinite] pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Right Content Side */}
                        <div className="w-full lg:w-1/2 text-left">
                            <p className="text-[#fff7ed]/50 text-sm mb-2">This Report Is Prepared Under the Guidance of India’s Renowned Astrologer</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#fa7516] mb-6">Dr. Vinay Bajrangi</h2>

                            <p className="text-[#fff7ed]/80 mb-10 leading-relaxed text-sm md:text-base">
                                Dr. Vinay Bajrangi is a respected astrologer known for decoding karma, destiny cycles, and life timing. His approach emphasizes understanding planetary strength, karmic lessons, and conscious action.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { num: "25+", text: "Years of Experience" },
                                    { num: "Global", text: "Global clientele" },
                                    { num: "Media", text: "Featured on major TV & digital platforms" },
                                    { num: "Mentor", text: "Mentor and guide to serious astrology seekers" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-[#0a0f1c] border border-white/5 rounded-xl p-4 flex items-center gap-6 hover:border-[#fa7516]/40 transition-colors group">
                                        <div className="bg-[#fa7516] text-[#fff7ed] font-bold text-xl min-w-[100px] py-2 rounded text-center shadow-[0_0_15px_rgba(250,117,22,0.4)] group-hover:scale-105 transition-transform">
                                            {stat.num}
                                        </div>
                                        <div className="text-[#fff7ed]/70 text-sm md:text-base font-medium">
                                            {stat.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* --- HELP YOU ACHIEVE SECTION --- */}
            <div className="bg-[#750109] pb-30 pt-30 relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto px-4 lg:px-12 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#fa7516] mb-12 text-center tracking-wide drop-shadow-md uppercase">
                        This Report Will Help You Achieve
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                    </svg>
                                ),
                                text: "Emotional Clarity & Inner Peace"
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                text: "Stronger, Healthier Relationships"
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                ),
                                text: "Better Partner Selection Decisions"
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                                    </svg>
                                ),
                                text: "Improved Communication & Trust"
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-[#fa7516]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                ),
                                text: "Harmony in Love & Married Life"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#0a0f1c] border border-white/10 rounded-xl p-8 hover:border-[#fa7516]/50 transition-all group min-h-[150px] flex flex-col justify-center shadow-xl">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform origin-left">
                                    {item.icon}
                                </div>
                                <h3 className="text-[#fff7ed] font-bold text-lg">{item.text}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* --- WHY SPECIAL SECTION --- */}
            <div className="bg-[#050912] pb-20 pt-10 relative overflow-hidden">
                <div className="max-w-[6xl] mx-auto px-4 lg:px-12 relative z-10">

                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Left Side - Book Cover Visual */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative group">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-[#fa7516]/20 blur-[120px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

                            {/* Full Image Book Cover */}
                            <div className="relative w-[300px] md:w-[480px] aspect-[2/3] transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                                <img
                                    src="https://images.unsplash.com/photo-1755540735962-905a0f9cdef9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFzdHJvbG9neSUyMEJvb2slMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                                    alt="Life Journey Report Book Cover"
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full lg:w-1/2 text-left">
                            <p className="text-[#fa7516] text-xs font-bold tracking-[0.1em] uppercase mb-4">THIS REPORT CAN BE LIFE-CHANGING FOR YOU,</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#fff7ed] mb-8 leading-tight">
                                Why This Report Can Be Truly Transformative
                            </h2>

                            <div className="space-y-6 mb-10">
                                {[
                                    "Based on Authentic Vedic Astrology Principles",
                                    "Focused exclusively on Love & Relationships",
                                    "Uses Precise Planetary & Dasha Calculations",
                                    "Identifies Root Causes, Not Surface Problems",
                                    "Provides Personalised, Practical Remedies",
                                    "Written in Simple, Easy-to-Understand Language",
                                    "Trusted by Thousands Across India & Abroad"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group">
                                        <div className="w-6 h-6 rounded-full border border-[#fa7516] flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#fa7516] transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#fa7516] group-hover:text-[#750109] transition-colors">
                                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-[#fff7ed]/90 text-lg font-medium group-hover:text-[#fa7516] transition-colors">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-[#fff7ed]/50 leading-relaxed text-sm md:text-base border-l-4 border-[#fa7516]/30 pl-6 italic">
                                Think of this report not as astrology, but as emotional clarity backed by cosmic logic.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            {/* --- FINAL FAQ & OFFER SECTION --- */}
            <div className="bg-[#750109] pb-50 pt-30 relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-4 lg:px-12 relative z-10">

                    {/* FAQ Box */}
                    <div className="bg-[#0a0f1c] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#fa7516] mb-8 text-center uppercase tracking-widest">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-8">
                            {[
                                {
                                    q: "Will this report be completely personalized?",
                                    a: "Yes. It is created strictly based on your individual birth chart (Janam Kundli)."
                                },
                                {
                                    q: "Is this report only for married people?",
                                    a: "No. It is useful for singles, couples, married individuals, and even those facing separation or divorce."
                                },
                                {
                                    q: "Will it tell me when I will get married?",
                                    a: "Yes. The report includes marriage timing analysis based on Dasha and transits."
                                },
                                {
                                    q: "Can this report help fix relationship problems?",
                                    a: "Yes. It identifies the root cause of issues and suggests remedies to improve harmony."
                                },
                                {
                                    q: "Are the remedies complicated?",
                                    a: "No. Only simple mantras, donations, gemstones, or behavioral corrections are suggested."
                                },
                                {
                                    q: "Will it predict breakups or divorce?",
                                    a: "If such indications exist in the chart, they are clearly explained with preventive remedies."
                                },
                                {
                                    q: "How will I receive the report?",
                                    a: "The complete report will be sent to your email in a written format."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                                    <h3 className="text-[#fff7ed] font-semibold text-lg mb-2">{item.q}</h3>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 text-[#fa7516]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-[#fff7ed]/70 text-sm md:text-base">{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Offer Box */}
                    <div className="bg-gradient-to-r from-[#750109] to-[#0a0f1c] border border-[#fa7516]/30 rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#fa7516]/5 animate-pulse pointer-events-none"></div>

                        <div className="relative z-10">
                            <span className="inline-block bg-[#fa7516] text-[#fff7ed] font-bold text-sm px-6 py-2 rounded-full mb-6 shadow-lg animate-bounce uppercase tracking-widest">
                                Love is not luck — it is destiny guided by planets.
                            </span>

                            <div className="flex flex-col items-center justify-center gap-4 text-4xl md:text-6xl font-bold mb-8">
                                <span className="text-[#fff7ed]/30 line-through text-2xl md:text-4xl">₹1499</span>
                                <span className="text-[#fa7516]">₹599</span>
                            </div>

                            <button className="bg-gradient-to-r from-[#fa7516] to-[#fa7516]/80 hover:from-[#fa7516]/70 hover:to-[#fa7516] text-[#fff7ed] font-bold text-lg md:text-xl py-5 px-14 rounded-full shadow-[0_0_20px_rgba(250,117,22,0.4)] hover:shadow-[0_0_30px_rgba(250,117,22,0.6)] transform transition-all hover:-translate-y-1 active:scale-95 border border-white/10">
                                👉 Get Your Personalised Love Report Now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            {/* --- STICKY OFFER BAR --- */}
            <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#fa7516] to-[#743ae8] z-50 transform transition-transform duration-300 translate-y-0 border-t border-white/20">
                <div className="max-w-[1400px] mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-center gap-6">

                    {/* Price Info */}
                    <div className="flex items-center gap-4 text-[#fff7ed]">
                        <span className="text-[#fff7ed]/50 line-through text-lg font-semibold">₹1499</span>
                        <span className="text-[#fff7ed] text-3xl font-extrabold tracking-tight">₹599</span>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-[#750109] hover:bg-[#750109]/80 text-[#fff7ed] text-lg font-bold py-3 px-8 rounded-md shadow-lg uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 flex-grow md:flex-grow-0 min-w-[280px] border border-[#fa7516]/50">
                        Get Your Love Report Now
                    </button>

                    {/* Timer */}
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-[#fff7ed]/80 text-[10px] font-bold uppercase tracking-widest mb-0.5">Offer ends soon in:</span>
                        <div className="text-[#fff7ed] text-2xl font-mono font-bold leading-none drop-shadow-md">
                            {formatTime(timeLeft)}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

// Helper to format seconds into HH:MM:SS
function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}
