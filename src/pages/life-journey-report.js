import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function LifeJourneyReport() {
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
                <title>Life Journey Report - Acharya Lavbhushan</title>
                <meta name="description" content="Get your personalized Life Journey Report covering Career, Health, Marriage, and Finance." />
            </Head>

            {/* --- HERO SECTION --- */}
            <div className="relative bg-[#0b1120] text-white py-16 lg:py-24 overflow-hidden min-h-[70vh] max-w-8xl mx-auto">
                {/* Background stars/clouds effect */}
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://www.acharyalavbhushan.com/_next/static/media/cosmic-background.8cc4f08b.jpg"
                        alt="Cosmic Background"
                        className="w-full h-full object-cover opacity-100"
                    />
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Floating Star Vectors - Outlined, Animated, Visible */}
                <div className="absolute top-10 left-10 text-yellow-400/80 animate-pulse">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                </div>
                <div className="absolute top-20 right-20 text-yellow-300/70 w-8 h-8 animate-bounce delay-700">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" /></svg>
                </div>
                <div className="absolute bottom-20 left-1/4 text-yellow-200/60 w-6 h-6 animate-ping duration-[3000ms]">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" /></svg>
                </div>
                <div className="absolute top-40 left-1/2 text-yellow-500/60 w-5 h-5 animate-pulse">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                </div>
                <div className="absolute bottom-10 right-1/3 text-yellow-400/70 w-10 h-10 animate-spin-slow" style={{ animationDuration: '10s' }}>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" /></svg>
                </div>
                <div className="absolute top-1/2 right-10 text-yellow-100/50 w-4 h-4 animate-pulse duration-75">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                </div>
                <div className="absolute bottom-1/3 left-10 text-yellow-600/60 w-12 h-12 opacity-80">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><circle cx="12" cy="12" r="10" /></svg>
                </div>
                <div className="absolute top-5 left-1/3 text-white/40 w-3 h-3 animate-ping">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2" /></svg>
                </div>

                <div className="relative z-10 w-full max-w-[1820px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-12 ">

                    {/* Left Content */}
                    <div className="md:w-1/2 space-y-8">
                        {/* Badges */}
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 border border-yellow-600/50 bg-[#F0B100]/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-[10px] md:text-xs text-yellow-500 font-medium tracking-wide">
                                <span className="text-yellow-500">👤</span>
                                <span>Trusted by 1.1 crore+ Seekers Worldwide | 100% Personalized | Secure & Confidential Delivery</span>
                            </div>
                            <div className="flex">
                                <div className="inline-flex items-center gap-2 border border-yellow-600/50 bg-[#F0B100]/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-[10px] md:text-xs text-yellow-500 font-medium tracking-wide">
                                    <span className="text-yellow-500">📅</span>
                                    <span>Detailed 5-Year Astrological Life Prediction Included</span>
                                </div>
                            </div>
                        </div>

                        {/* Headlines */}
                        <div className="space-y-2">
                            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                                Unlock Your <br /><span className="text-yellow-400">Personalized Life Journey Report</span>
                                {/* <span className="text-yellow-400"></span> */}
                            </h1>
                            <p className="text-lg text-gray-400 font-medium">
                                By Dr. Vinay Bajrangi<br />
                                (Internationally Renowned Astrologer & Karma Expert)
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <button className="bg-[#cc9933] hover:bg-[#b3862b] text-black font-bold py-3.5 px-8 rounded shadow-lg transition-transform transform hover:scale-105 flex items-center gap-3 text-sm md:text-base animate-pulse">
                                <span className="text-[#980E0D]">Get My Personalized Report Now</span>
                                <span className="line-through text-black/60 text-xs">₹1999</span>
                                <span className="text-black font-extrabold">₹699 Only</span>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 lg:gap-14 pt-6 border-t border-gray-800/50 mt-4">
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-yellow-400">⭐ 4.8 / 5</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wide">Customer Rating</div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-yellow-400">👥 4.5L+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wide">Trusted Users</div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-yellow-400">📄 Instant</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wide">Report Generation</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content (Images) */}
                    <div className="md:w-1/2 relative h-full min-h-[400px] flex justify-center items-center">
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-10 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl p-10"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Astrologer Portrait with Glow Halo */}
                            <div className="relative mb-[30px] z-20">
                                {/* Chakra/Halo SVG or Image bg */}
                                <div className="absolute -inset-4 bg-gradient-to-t from-yellow-600 to-transparent rounded-full opacity-50 blur-md"></div>
                                <div className="w-48 h-48 lg:w-68 lg:h-68 rounded-full border-4 border-yellow-500 overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.4)] bg-gray-800 relative">
                                    {/* Placeholder for Astrologer Image */}
                                    <img src="https://content.vinaybajrangi.com/img/content/1760069123-channels4_profile.jpg" alt="Vinay bajrangi" className="w-full h-full object-cover" />
                                    {/* <div className="w-full h-full bg-gray-700 flex items-center justify-center text-xs text-center text-gray-400">Astrologer<br />Image</div> */}
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
                <hr className='text-yellow-500' />
                {/* Featured In Slider */}
                <div className="mt-20 w-full relative ">
                    {/* Subtle top separator */}
                    <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-yellow-800 to-transparent opacity-50 mb-8"></div>

                    <div className="text-center mb-12 max-w-4xl mx-auto px-4">
                        <span className="text-yellow-500 font-medium tracking-widest uppercase text-sm drop-shadow-md block mb-2">FEATURED IN</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Recognized & Referenced Across Leading Media Platforms</h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Dr. Vinay Bajrangi’s astrological insights, research, and predictions have been featured, discussed, and referenced across reputed media and knowledge platforms:
                        </p>
                    </div>

                    <div className="relative px-0 lg:px-12 group">
                        {/* Navigation Arrow Left */}
                        <button
                            onClick={() => scroll('left')}
                            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-24 w-12 items-center justify-center cursor-pointer text-yellow-500/50 hover:text-yellow-400 transition-colors hover:bg-black/10 rounded-r-xl"
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
                                <div key={i} className="flex-none w-40 h-24 md:w-52 md:h-32 bg-gray-900/50 rounded-xl flex flex-col items-center justify-center p-6 shadow-lg snap-center transition-transform hover:-translate-y-1 duration-300 border border-white/5 grayscale hover:grayscale-0 group">
                                    <span className="text-3xl mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-300">{brand.icon}</span>
                                    <span className="text-lg md:text-xl font-bold text-gray-400 group-hover:text-white text-center leading-tight transition-colors">{brand.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrow Right */}
                        <button
                            onClick={() => scroll('right')}
                            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-24 w-12 items-center justify-center cursor-pointer text-yellow-500/50 hover:text-yellow-400 transition-colors hover:bg-black/10 rounded-l-xl"
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
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-yellow-500' : 'w-1.5 bg-yellow-600/40 hover:bg-yellow-500/80'}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- CELEBRITY EXPERIENCES SECTION --- */}
            <div className="bg-[#050912] py-20 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-900/40 to-transparent"></div>

                <div className="max-w-[1920px] mx-auto px-4 lg:px-12 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <div className="text-yellow-600 font-bold tracking-[0.2em] text-xs uppercase">TRUSTED BY CELEBRITIES & INDUSTRY LEADERS</div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#cc9933] drop-shadow-md pb-2 leading-tight">When Life Decisions Matter, They Choose Precision</h2>
                        <p className="text-gray-300/80 max-w-3xl mx-auto text-lg font-light leading-relaxed">
                            Celebrities, business leaders, entrepreneurs, and public figures have consulted Dr. Vinay Bajrangi for clarity during critical life phases — career transitions, marriage decisions, financial planning, and karmic challenges.
                        </p>
                    </div>

                    <div className="relative group px-0 lg:px-12">
                        {/* Nav Left */}
                        <button
                            onClick={() => celebScroll('left')}
                            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-black/50 hover:bg-yellow-600 text-white items-center justify-center rounded-full backdrop-blur-sm border border-white/10 transition-all hover:scale-110 shadow-xl cursor-pointer"
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
                                { name: "Akshay Kumar", role: "INDIAN ACTOR & FILM PRODUCER", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                { name: "Alaya F", role: "INDIAN ACTOR", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                { name: "Ameesha Patel", role: "INDIAN ACTRESS", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                { name: "Anjali Anand", role: "INDIAN ACTRESS", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                { name: "Akanksha Sharma", role: "INDIAN ACTOR & MODEL", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                { name: "Akanksha Sharma", role: "INDIAN ACTOR & MODEL", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                                { name: "Anjini Dhawan", role: "INDIAN ACTRESS", img: "https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
                            ].map((celeb, idx) => (
                                <div key={idx} className="flex-none w-72 md:w-80 relative group/card snap-center">
                                    <div className="relative h-[450px] rounded-2xl overflow-hidden border border-yellow-500/20 bg-gray-900 shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(204,153,51,0.2)]">
                                        {/* Image (Placeholder) */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90"></div>
                                        <img src={celeb.img} alt={celeb.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" />

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 w-full z-20 p-6 flex flex-col items-center text-center">
                                            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-4"></div>
                                            <h3 className="text-2xl font-bold text-yellow-100 uppercase tracking-wide font-serif mb-1 group-hover/card:text-yellow-400 transition-colors">{celeb.name}</h3>
                                            <div className="text-[10px] text-yellow-500/80 font-bold tracking-[0.15em] uppercase border-t border-white/10 pt-2 mt-1 w-full">{celeb.role}</div>
                                        </div>
                                    </div>
                                    {/* Golden confetti/particles decoration */}
                                    <div className="absolute -bottom-2 -right-2 w-full h-full border border-yellow-500/10 rounded-2xl -z-10 group-hover/card:translate-x-2 group-hover/card:translate-y-2 transition-transform duration-300"></div>
                                </div>
                            ))}
                        </div>

                        {/* Nav Right */}
                        <button
                            onClick={() => celebScroll('right')}
                            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-black/50 hover:bg-yellow-600 text-white items-center justify-center rounded-full backdrop-blur-sm border border-white/10 transition-all hover:scale-110 shadow-xl cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        </button>
                    </div>

                    {/* NEW CONTENT BLOCKS BELOW CAROUSEL */}
                    <div className="mt-20 max-w-5xl mx-auto space-y-20">

                        {/* Celebrity Experiences Testimonials */}
                        <div>
                            <div className="text-center mb-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">🎤 CELEBRITY EXPERIENCES</h3>
                                <p className="text-yellow-500 text-lg font-medium">Real Guidance. Real Results.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    "Astrology helped me understand my timing rather than fight it.",
                                    "The predictions were direct, logical, and deeply accurate.",
                                    "This was not superstition — it was strategic life planning."
                                ].map((quote, idx) => (
                                    <div key={idx} className="bg-[#0a0f1c] border border-white/5 rounded-xl p-6 relative">
                                        <div className="absolute -top-3 left-6 text-4xl text-yellow-600/30">"</div>
                                        <p className="text-gray-300 italic relative z-10">{quote}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 bg-gray-900/50 rounded-xl p-8 border-l-4 border-yellow-500">
                                <p className="text-gray-300 mb-4 text-lg">Through karmic astrology, dashā analysis, and precise transit mapping, Dr. Vinay Bajrangi has helped high-profile individuals:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Navigate fame-related pressures",
                                        "Avoid career-damaging decisions",
                                        "Understand delays, controversies & comebacks",
                                        "Align actions with favorable planetary periods"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-400">
                                            <span className="text-yellow-500 font-bold">✔</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Why Celebrities Trust Section */}
                        <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl p-8 md:p-12 border border-yellow-500/20 shadow-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#facc15] mb-8 text-center uppercase tracking-wide">🔮 WHY CELEBRITIES TRUST DR. VINAY BAJRANGI</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 max-w-3xl mx-auto leading-relaxed">
                                {[
                                    "Discretion & absolute confidentiality",
                                    "No sensationalism or fear-based predictions",
                                    "Practical guidance aligned with real-world outcomes",
                                    "Deep focus on karma, timing & free will"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-yellow-500 text-sm">✔</span>
                                        </div>
                                        <span className="text-gray-200 text-lg">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- PERSONAL MESSAGE SECTION --- */}
            <div className="bg-[#0b1120] py-16 text-center relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>
                <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>

                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#cc9933] mb-8 lg:mb-12 tracking-wide drop-shadow-sm">
                        A Personal Message from Acharya Lavbhushan Ji
                    </h2>

                    {/* Video Wrapper with Glow */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 via-yellow-500/10 to-yellow-600/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-yellow-500/10">
                            {/* Placeholder Video */}
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/PjwdTj_5u-g?autoplay=0&controls=1&rel=0"
                                title="Personal Message from Acharya Lavbhushan"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                {/* --- FEATURES SECTION --- */}

            </div>

            <div className="bg-[#050912] py-20 relative overflow-hidden">
                <div className="max-w-[1920px] mx-auto px-4 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <div className="text-yellow-600 font-bold tracking-[0.2em] text-xs uppercase mb-4">FEATURES</div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                            What Exactly Will You Get in <span className="text-yellow-500">Premium Life Journey Report?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                title: "Detailed Birth Chart (Kundli) Analysis",
                                desc: "An in-depth and structured analysis of your birth chart, examining planetary placements, house influences, and key yogas that shape your life direction.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Planetary Influence Assessment",
                                desc: "Clear insights into how planetary movements impact your career growth, financial stability, and personal relationships, highlighting both supportive and challenging phases.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Dasha & Antardasha Insights",
                                desc: "Precise interpretation of major and sub-periods, explaining upcoming life transitions, opportunities, and cautionary phases over the coming years.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Five-Year Life Forecast (Year-Wise Roadmap)",
                                desc: "A structured, year-by-year outlook highlighting major turning points, growth periods, and phases that require caution, helping you plan life decisions with clarity.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                                )
                            },
                            {
                                title: "Career & Professional Timing",
                                desc: "Guidance on favorable periods for job change, promotion, leadership roles, entrepreneurship, and professional stability based on planetary cycles.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.675.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.675-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 003.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Financial Strength & Risk Phases",
                                desc: "Analysis of wealth-building opportunities, expense-heavy phases, investment timing, and periods where financial discipline is essential.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Marriage & Relationship Indicators",
                                desc: "Insights into marriage timing, relationship harmony, emotional challenges, and recurring patterns affecting personal bonds.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Health & Mental Well-Being Cycles",
                                desc: "Identification of stress-prone phases, emotional fatigue periods, and planetary influences affecting overall vitality and balance.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Karmic Patterns & Life Lessons",
                                desc: "Understanding past-life influences, unresolved karmic themes, and lessons your chart indicates you are meant to complete in this lifetime.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Personalized Astrological Remedies (Optional Guidance)",
                                desc: "Simple, practical, and non-intrusive remedies aligned with planetary imbalances to help strengthen favorable outcomes.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Easy-to-Understand Digital Report",
                                desc: "Professionally structured, clearly explained, and optimized for reading on mobile, tablet, and desktop devices.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                )
                            }
                        ].slice(0, showAllFeatures ? 11 : 3).map((feature, idx) => (
                            <div key={idx} className="bg-gray-900 border border-white/10 rounded-xl p-8 hover:border-yellow-500/50 transition-colors shadow-lg">
                                {feature.icon}
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAllFeatures(!showAllFeatures)}
                            className="bg-inherit border border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all flex items-center justify-center gap-2 mx-auto"
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
                                Get Your Premium Life Journey Report Now
                            </button>
                            <div className="text-3xl font-bold text-white flex justify-center items-center gap-4">
                                <span className="text-gray-500 line-through text-2xl">₹1999</span>
                                <span className="text-yellow-500">₹699</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* --- ASTROLOGY INFO SECTION --- */}
            <div className="bg-[#050912] pb-20 pt-10 relative overflow-hidden text-center">
                <div className="max-w-8xl mx-auto px-4 relative z-10">

                    {/* Floating Numbers (Visual) */}
                    <div className="flex justify-center gap-4 md:gap-8 mb-10">
                        {[8, 3, 5, 8, 6, 5].map((num, i) => (
                            <div key={i} className="w-10 h-10 md:w-14 md:h-14 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl md:text-2xl shadow-[0_0_15px_rgba(250,204,21,0.6)] animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                                {num}
                            </div>
                        ))}
                    </div>

                    {/* Heading & Text */}
                    <h2 className="text-4xl md:text-5xl font-normal text-yellow-500 mb-6 tracking-wider">ASTROLOGY</h2>
                    <div className="text-gray-300 leading-relaxed text-sm md:text-base max-w-4xl mx-auto mb-16">
                        Astrology is a time-tested knowledge system that explains how planetary positions at the moment of birth influence your mind, actions, opportunities, challenges, and life events.
                        Using classical Vedic astrology principles, we analyze your birth chart (Kundli) in depth to understand karma, timing, and planetary strength.
                        <br /><br />
                        <strong>This report is designed to help you:</strong>
                        <ul className="text-left max-w-2xl mx-auto mt-4 space-y-2 list-disc pl-5">
                            <li>Understand recurring patterns in your life</li>
                            <li>Recognize favorable and unfavorable periods in advance</li>
                            <li>Make informed decisions related to career, relationships, health, and finances</li>
                            <li>Align your actions with planetary timing rather than working against it</li>
                        </ul>
                        <br />
                        Astrology here is not about belief — it is about awareness, preparation, and intelligent action.
                    </div>

                    {/* Stats Box */}
                    <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="text-5xl md:text-7xl font-bold text-white mb-2">10L+</div>
                            <div className="text-sm md:text-base text-gray-300 font-bold uppercase tracking-widest mb-8">Reports Have Been Sold Already!</div>

                            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-extrabold py-3 px-8 rounded shadow-lg transition-transform transform hover:scale-105 uppercase text-sm md:text-base">
                                Get Your Report Now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            {/* --- HOW IT WORKS SECTION --- */}
            <div className="bg-[#050912] pb-20 relative overflow-hidden">
                <div className="max-w-[1920px] mx-auto px-4 lg:px-12 relative z-10 text-center">

                    <h2 className="text-3xl md:text-5xl font-bold text-[#facc15] mb-16 tracking-wide drop-shadow-md">
                        Here Is Exactly How It Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative max-w-[1600px] mx-auto">

                        {/* Connecting Line (Desktop Only) */}
                        <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-yellow-600/30 z-0"></div>

                        {[
                            {
                                num: 1,
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                ),
                                title: "Enter Your Birth Details",
                                sub: "Provide your date, time, and place of birth for accurate chart calculation."
                            },
                            {
                                num: 2,
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.25-4.5h.008v.008H10.5v-.008zm0 2.25h.008v.008H10.5v-.008zm0 2.25h.008v.008H10.5v-.008zm0 2.25h.008v.008H10.5v-.008zm2.25-4.5h.008v.008H12.75v-.008zm0 2.25h.008v.008H12.75v-.008zm0 2.25h.008v.008H12.75v-.008zm0 2.25h.008v.008H12.75v-.008zM2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>
                                ),
                                title: "Precise Planetary Mapping",
                                sub: "Your birth chart is generated using exact planetary positions and house placements."
                            },
                            {
                                num: 3,
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                    </svg>
                                ),
                                title: "Astrological Interpretation",
                                sub: "Detailed analysis of Dashas, Transits, Houses, and Yogas to understand life events and timing."
                            },
                            {
                                num: 4,
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                ),
                                title: "Actionable Astrological Guidance",
                                sub: "Practical, non-intrusive recommendations to balance challenging planetary influences."
                            },
                            {
                                num: 5,
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                ),
                                title: "Personalized Report Delivery",
                                sub: "Your complete Life Journey Report is delivered securely to your email in an easy-to-read digital format."
                            }
                        ].map((step, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center">
                                {/* Number Badge */}
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 md:left-2 md:translate-x-0 w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black border-4 border-[#050912] z-20">
                                    {step.num}
                                </div>

                                {/* Card */}
                                <div className="bg-[#0a0f1c] w-full h-full border border-yellow-800/20 rounded-xl p-8 pt-10 flex flex-col items-center hover:border-yellow-500/50 transition-colors group shadow-lg">
                                    <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                                    <p className="text-gray-400 text-xs md:text-sm">{step.sub}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            {/* --- REPORT INCLUSIONS SECTION --- */}
            <div className="bg-[#050912] pb-20 pt-10 relative overflow-hidden">
                <div className="max-w-[1920px] mx-auto px-4 lg:px-12 relative z-10">

                    <h2 className="text-3xl md:text-5xl font-bold text-[#facc15] mb-16 text-center tracking-wide drop-shadow-md">
                        This is what you get in the Report
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1600px] mx-auto">
                        {[
                            "Ascendant & Zodiac Sign Analysis",
                            "Nakshatra Analysis",
                            "Panchang Phal Evaluation",
                            "Future Life Aspects Overview",
                            "Planetary Predictions",
                            "Raj Yoga Identification",
                            "Mangal (Mars) Dosha Analysis",
                            "Sade Sati Report",
                            "Kaal Sarp Dosha Analysis & Remedies",
                            "Complete Dasha Predictions",
                            "Rudraksha & Gemstone Recommendations",
                            "Auspicious Timing for Career & Business",
                            "Shodasha Varga Analysis",
                            "Shadbala & Ashtakavarga Evaluation",
                            "KP Cusp Analysis Report",
                            "Yogini & Chara Dasha Interpretation",
                            "Tajik Varshphal (5-Year Forecast)",
                            "Atimitra Nakshatra Insights"
                        ].slice(0, showAllInclusions ? 18 : 3).map((item, idx) => (
                            <div key={idx} className="bg-[#0a0f1c] border border-white/5 rounded-2xl p-6 flex items-center gap-6 shadow-lg hover:border-yellow-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-lg shadow-[0_0_10px_rgba(234,179,8,0.5)] group-hover:scale-110 transition-transform">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>
                                <h3 className="text-white text-lg font-semibold tracking-wide group-hover:text-yellow-500 transition-colors">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAllInclusions(!showAllInclusions)}
                            className="bg-transparent border border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all flex items-center justify-center gap-2 mx-auto uppercase tracking-wider text-sm"
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
                        <h2 className="text-3xl md:text-5xl font-bold text-[#facc15] mb-4 tracking-wide drop-shadow-md">
                            Choose Your Plan
                        </h2>
                        <p className="text-gray-400">Select the report that best fits your needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1600px] mx-auto">

                        {/* Plan 1 */}
                        <div className="bg-[#0a0f1c] border border-white/10 rounded-2xl p-8 flex flex-col relative group hover:border-white/20 transition-all">
                            <div className="absolute top-8 left-8 bg-yellow-600 text-black text-xs font-bold px-3 py-1 rounded">FLAT LIMITED-TIME OFFER</div>
                            <h3 className="text-2xl font-bold text-white mt-8 mb-2">Life Journey Report</h3>
                            <p className="text-gray-400 text-sm mb-6">Your Personalized Astrological Roadmap</p>

                            <div className="flex items-end gap-2 mb-8">
                                <span className="text-gray-500 line-through text-xl">₹1999</span>
                                <span className="text-yellow-400 text-4xl font-bold">₹699</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    "In-depth life analysis based on Vedic astrology",
                                    "Career, relationships, health & financial insights",
                                    "Practical, easy-to-follow astrological guidance",
                                    "Written in clear, structured language",
                                    "Ideal for those seeking clarity about their life direction and future phases"
                                ].map((feat, i) => (
                                    <li key={i} className="flex gap-3 text-gray-300 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-yellow-500 flex-shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-3 border border-yellow-500 text-yellow-500 font-bold rounded hover:bg-yellow-500 hover:text-black transition-colors uppercase tracking-wider text-sm">
                                BUY NOW
                            </button>
                        </div>

                        {/* Plan 2 (Best Seller) */}
                        <div className="bg-[#0a0f1c] border-2 border-yellow-500 rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                            <div className="absolute top-8 left-8 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded">BEST SELLER</div>
                            <h3 className="text-2xl font-bold text-white mt-8 mb-2">Life Journey Report + 1-on-1 Consultation</h3>
                            <p className="text-gray-400 text-sm mb-6">Speak Directly with an Astrological Expert</p>

                            <div className="flex items-end gap-2 mb-8">
                                <span className="text-gray-500 line-through text-xl">₹6000</span>
                                <span className="text-yellow-400 text-5xl font-bold">₹799</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    "Includes everything in the Life Journey Report",
                                    "15–20 minute private consultation with an expert astrologer",
                                    "Discuss your challenges and decisions in real time",
                                    "Personalized guidance and remedies aligned to your chart",
                                    "Best suited for those who want deeper clarity through direct interaction"
                                ].map((feat, i) => (
                                    <li key={i} className="flex gap-3 text-gray-300 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-yellow-500 flex-shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition-colors uppercase tracking-wider text-sm shadow-lg">
                                BUY NOW
                            </button>
                        </div>

                        {/* Plan 3 */}
                        <div className="bg-[#0a0f1c] border border-white/10 rounded-2xl p-8 flex flex-col relative group hover:border-white/20 transition-all">
                            <div className="absolute top-8 left-8 bg-yellow-100/20 text-yellow-200 text-xs font-bold px-3 py-1 rounded">BUDGET FRIENDLY</div>
                            <h3 className="text-2xl font-bold text-white mt-8 mb-2">Life Journey Report + Ask the Astrologer (2 Questions)</h3>
                            <p className="text-gray-400 text-sm mb-6">Focused Answers to Your Most Important Concerns</p>

                            <div className="flex items-end gap-2 mb-8">
                                <span className="text-gray-500 line-through text-xl">₹4599</span>
                                <span className="text-yellow-400 text-4xl font-bold">₹599</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    "Includes everything in the Life Journey Report",
                                    "Ask 2 personal questions (career, marriage, family, finances, or life path)",
                                    "Receive detailed written responses within 48 hours",
                                    "Ideal if you want specific answers without a live consultation"
                                ].map((feat, i) => (
                                    <li key={i} className="flex gap-3 text-gray-300 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-yellow-500 flex-shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-3 border border-yellow-500 text-yellow-500 font-bold rounded hover:bg-yellow-500 hover:text-black transition-colors uppercase tracking-wider text-sm">
                                BUY NOW
                            </button>
                        </div>

                    </div>

                </div>
                {/* --- TESTIMONIALS SECTION --- */}
                <div className="bg-[#050912] pb-20 pt-50 relative overflow-hidden text-center">
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
                                    name: "Ritu Sharma",
                                    initial: "RS",
                                    text: '"Life Journey Report ने मेरी career direction clear कर दी। Remedies आसान और effective हैं।"'
                                },
                                {
                                    name: "Anil Verma",
                                    initial: "AV",
                                    text: '"Marriage decisions में clarity मिली। Report detailed और accurate थी।"'
                                },
                                {
                                    name: "Meena Kapoor",
                                    initial: "MK",
                                    text: '"Financial stability के लिए जो solutions दिए, उन्होंने सच में काम किया।"'
                                },
                                {
                                    name: "Suresh Raina",
                                    initial: "SR",
                                    text: '"Understanding my strengths helped me pivot my business strategy. Highly recommended!"'
                                },
                                {
                                    name: "Priya Singh",
                                    initial: "PS",
                                    text: '"The report gave me peace of mind regarding my family\'s health. The remedies are simple to follow."'
                                },
                                {
                                    name: "Rahul Dravid",
                                    initial: "RD",
                                    text: '"Incredible detail! It felt like the astrologer knew me personally without ever meeting me."'
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
                                        <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
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
                </div>
            </div>
            {/* --- ABOUT MAESTRO SECTION --- */}
            <div className="bg-black pb-20 pt-10 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    {/* Twinkling Stars */}
                    <div className="absolute top-10 left-10 animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-yellow-500 opacity-60">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="absolute top-40 right-20 animate-bounce delay-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-yellow-300 opacity-80">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="absolute bottom-20 left-1/3 animate-pulse delay-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-yellow-600 opacity-70">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-yellow-500/5 blur-[90px] rounded-full animate-pulse"></div>

                    <div className="absolute bottom-10 right-10 animate-pulse delay-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-15 h-15 text-yellow-400 opacity-50">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-[1600px] mx-auto px-4 lg:px-12 relative z-10">

                    <div className="text-center mb-12">
                        <h4 className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">ABOUT THE EXPERT</h4>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Left Image Side */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="absolute inset-0 bg-yellow-500/20 blur-[100px] rounded-full opacity-50"></div>
                            <div className="relative z-10 bg-[#0a0f1c] rounded-3xl overflow-hidden border border-yellow-500/30 p-2 shadow-2xl">
                                <div className="bg-gradient-to-b from-yellow-900/20 to-[#050912] rounded-2xl overflow-hidden">
                                    <img
                                        src="https://content.vinaybajrangi.com/img/content/1760069123-channels4_profile.jpg"
                                        alt="Dr. Vinay Bajrangi"
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Rotating Halo Effect (Visual) */}
                                <div className="absolute inset-0 border-[3px] border-dashed border-yellow-500/30 rounded-3xl animate-[spin_10s_linear_infinite] pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Right Content Side */}
                        <div className="w-full lg:w-1/2 text-left">
                            <p className="text-gray-400 text-sm mb-2">This Report Is Prepared Under the Guidance of India’s Renowned Astrologer</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">Dr. Vinay Bajrangi</h2>

                            <p className="text-gray-300 mb-10 leading-relaxed text-sm md:text-base">
                                Dr. Vinay Bajrangi is a globally respected astrologer with over two decades of experience in Vedic astrology and Karma correction. He is known for his precise predictions and ability to diagnose the root cause of life’s problems.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { num: "25+", text: "Years of Experience" },
                                    { num: "500K+", text: "Lives Transformed" },
                                    { num: "Media", text: "Recognized by Global Media" },
                                    { num: "Expert", text: "Expert in Marriage & Career Astrology" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-[#0a0f1c] border border-white/5 rounded-xl p-4 flex items-center gap-6 hover:border-yellow-500/40 transition-colors group">
                                        <div className="bg-yellow-500 text-black font-bold text-xl min-w-[100px] py-2 rounded text-center shadow-[0_0_15px_rgba(234,179,8,0.4)] group-hover:scale-105 transition-transform">
                                            {stat.num}
                                        </div>
                                        <div className="text-gray-300 text-sm md:text-base font-medium">
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
            <div className="bg-[#050912] pb-30 pt-30 relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto px-4 lg:px-12 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#facc15] mb-12 text-center tracking-wide drop-shadow-md">
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
                                text: "Clarity in Career Direction & Life Purpose"
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                text: "Financial Stability & Sustainable Growth"
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-yellow-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                ),
                                text: "Peace of Mind & Inner Confidence"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#0a0f1c] border border-white/10 rounded-xl p-8 hover:border-yellow-500/50 transition-all group min-h-[150px] flex flex-col justify-center">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform origin-left">
                                    {item.icon}
                                </div>
                                <h3 className="text-white font-bold text-lg">{item.text}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* --- WHY SPECIAL SECTION --- */}
            <div className="bg-black pb-20 pt-10 relative overflow-hidden">
                <div className="max-w-[6xl] mx-auto px-4 lg:px-12 relative z-10">

                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Left Side - Book Cover Visual */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative group">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-yellow-500/20 blur-[120px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

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
                            <p className="text-yellow-500 text-xs font-bold tracking-[0.1em] uppercase mb-4">THIS REPORT CAN BE LIFE-CHANGING FOR YOU,</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                Why This Report Can Be Truly Transformative
                            </h2>

                            <div className="space-y-6 mb-10">
                                {[
                                    "Deep Vedic Analysis (Not Computer Generated Text)",
                                    "Based on Precise Mathematical Calculations",
                                    "Includes Personalized Remedial Measures",
                                    "Trusted by Thousands for Accuracy"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group">
                                        <div className="w-6 h-6 rounded-full border border-yellow-500 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-yellow-500 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500 group-hover:text-black transition-colors">
                                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-200 text-lg font-medium group-hover:text-yellow-500 transition-colors">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-gray-400 leading-relaxed text-sm md:text-base border-l-4 border-yellow-500/30 pl-6">
                                Think of this as more than just a purchase. It's an investment in your personal development. For a small investment, you'll gain insights that can transform your life, helping you make better decisions, achieve your goals, and find lasting happiness.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            {/* --- FINAL FAQ & OFFER SECTION --- */}
            <div className="bg-[#050912] pb-50 pt-30  relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-4 lg:px-12 relative z-10">

                    {/* FAQ Box */}
                    <div className="bg-[#0a0f1c] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#facc15] mb-8 text-center">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-8">
                            {[
                                {
                                    q: "How soon will I get the report?",
                                    a: "Instantly! As soon as you complete the purchase, the report is generated and sent to your email."
                                },
                                {
                                    q: "Is my personal information safe?",
                                    a: "Yes, 100%. We follow strict data privacy policies and never share your birth details."
                                },
                                {
                                    q: "Can I understand this report if I don't know astrology?",
                                    a: "Absolutely. The report is written in simple, clear language that anyone can understand."
                                },
                                {
                                    q: "What if I have specific questions?",
                                    a: "You can successfully upgrade to the \"Ask the Astrologer\" or \"Consultation\" plan for specific answers."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                                    <h3 className="text-white font-semibold text-lg mb-2">{item.q}</h3>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 text-green-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-300 text-sm md:text-base">{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Offer Box */}
                    <div className="bg-gradient-to-r from-yellow-900/20 to-[#0a0f1c] border border-yellow-500/30 rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-yellow-500/5 animate-pulse pointer-events-none"></div>

                        <div className="relative z-10">
                            <span className="inline-block bg-yellow-500 text-black font-bold text-sm px-4 py-1 rounded-full mb-6 shadow-lg animate-bounce">
                                Special Launch Offer: ₹1999 ₹699 (Offer Ends Soon)
                            </span>

                            <div className="flex items-center justify-center gap-4 text-4xl md:text-6xl font-bold mb-8">
                                <span className="text-gray-500 line-through text-2xl md:text-4xl">₹1999</span>
                                <span className="text-yellow-500">₹699</span>
                            </div>

                            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold text-lg md:text-xl py-4 px-12 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transform transition-all hover:-translate-y-1 active:scale-95">
                                Get My Life Journey Report Now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            {/* --- STICKY OFFER BAR --- */}
            <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-yellow-300 to-yellow-500 z-50  transform transition-transform duration-300 translate-y-0">
                <div className="max-w-[1400px] mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Price Info (Hidden on very small screens if needed, but important) */}
                    <div className="flex items-center gap-4 text-black">
                        <span className="text-gray-700 line-through text-lg font-semibold">₹1999</span>
                        <span className="text-[#991b1b] text-3xl font-extrabold tracking-tight">₹699</span>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 flex-grow md:flex-grow-0 min-w-[280px]">
                        Get Your Report Now
                    </button>

                    {/* Timer */}
                    <div className="flex flex-col items-center md:items-end">
                        <span className="text-[#991b1b] text-xs font-bold uppercase tracking-wider mb-0.5">Offer ends soon in:</span>
                        <div className="text-[#991b1b] text-2xl font-mono font-bold leading-none">
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
