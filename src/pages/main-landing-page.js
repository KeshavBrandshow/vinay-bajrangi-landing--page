import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MainLandingPage() {

    // Timer Logic 
    const [timeLeft, setTimeLeft] = useState(2273);
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Helper to format seconds
    function formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    return (
        <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
            <Head>
                <title>Premium Astrological Reports - Dr. Vinay Bajrangi</title>
                <meta name="description" content="Unlock your destiny with personalized reports on Life Journey, Love & Relationships, and Destiny." />
            </Head>

            {/* --- HERO SECTION (SLIDER - RED DESIGN) --- */}
            <div className="relative bg-gradient-to-br from-[#991b1b] via-[#7f1d1d] to-[#450a0a] text-white py-12 lg:py-20 overflow-hidden min-h-screen flex items-center">

                {/* Background Pattern (Optional subtle texture) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                {/* Floating Elements (Subtle) */}
                <div className="absolute top-10 left-10 text-white/10 w-20 h-20 animate-pulse rounded-full border border-white/10"></div>
                <div className="absolute bottom-20 right-10 text-white/5 w-40 h-40 animate-spin-slow rounded-full border-2 border-dashed border-white/10"></div>

                {/* SLIDER CONTENT */}
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 h-full flex flex-col justify-center">
                    <HeroSlider />
                </div>
            </div>

            {/* --- BROWSE REPORTS SECTION (NEW) --- */}
            <BrowseReportsSection />

            {/* --- FOOTER / EXTRA CONTENT IF NEEDED --- */}
            <div className="bg-[#450a0a] text-center py-8 border-t border-white/10 text-white/60">
                <p className="text-sm">© {new Date().getFullYear()} Dr. Vinay Bajrangi. All Rights Reserved.</p>
            </div>

        </div>
    );
}

// Internal Component for Browse Section to handle state
function BrowseReportsSection() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortOption, setSortOption] = useState('Featured');
    const [searchQuery, setSearchQuery] = useState('');

    // Sample Data with Categories
    const allReports = [
        {
            id: 1,
            title: "Love & Relationship Report",
            desc: "Understand your emotional patterns, compatibility & marriage timing.",
            price: 599,
            originalPrice: 1499,
            rating: 4.8,
            reviews: 890,
            link: "/love-and-relationship-report",
            color: "from-red-700 to-red-900",
            tag: "Bestseller",
            categories: ["Love and Relationship Report"]
        },
        {
            id: 2,
            title: "Life Journey Report",
            desc: "Navigate your career, health & finance with precise cosmic wisdom.",
            price: 699,
            originalPrice: 1999,
            rating: 4.9,
            reviews: 1200,
            link: "/life-journey-report",
            color: "from-blue-700 to-blue-900",
            tag: "Popular",
            categories: ["Life Journey Report"]
        },
        {
            id: 3,
            title: "Personalised Destiny Report",
            desc: "Discover your true purpose, karmic path & hidden strengths.",
            price: 799,
            originalPrice: 2499,
            rating: 4.9,
            reviews: 950,
            link: "/personalised-destiny-report",
            color: "from-purple-700 to-purple-900",
            tag: "Premium",
            categories: ["Personalised Destiny Report"]
        }
    ];

    // Filter Logic
    const filteredReports = allReports.filter(report => {
        const matchesCategory = selectedCategory === 'All' || report.categories.includes(selectedCategory);
        const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Sort Logic
    const sortedReports = [...filteredReports].sort((a, b) => {
        if (sortOption === 'Price: Low to High') return a.price - b.price;
        if (sortOption === 'Price: High to Low') return b.price - a.price;
        if (sortOption === 'Highest Rated') return b.rating - a.rating;
        if (sortOption === 'Most Popular') return b.reviews - a.reviews;
        return 0; // Featured (Default order)
    });

    const categories = ['All', 'Love and Relationship Report', 'Personalised Destiny Report', 'Life Journey Report'];

    return (
        <div className="bg-gray-50 py-16 min-h-screen">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* LEFT SIDEBAR FILTERS */}
                    <div className="w-full lg:w-1/4 space-y-8">

                        {/* Filter Box */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Filters</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-700 mb-3">Categories</h4>
                                    <div className="space-y-2">
                                        {categories.map((cat, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${selectedCategory === cat
                                                    ? 'bg-[#7f1d1d] text-white shadow-md transform scale-105'
                                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-gray-700 mb-3">Sort By</h4>
                                    <div className="relative">
                                        <select
                                            value={sortOption}
                                            onChange={(e) => setSortOption(e.target.value)}
                                            className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-lg focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 cursor-pointer hover:border-gray-300 transition-colors"
                                        >
                                            <option>Featured</option>
                                            <option>Most Popular</option>
                                            <option>Highest Rated</option>
                                            <option>Price: Low to High</option>
                                            <option>Price: High to Low</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-xs text-gray-400 px-2">Showing {sortedReports.length} reports</div>
                    </div>

                    {/* RIGHT MAIN CONTENT */}
                    <div className="w-full lg:w-3/4 space-y-8">

                        {/* Search Bar */}
                        <div className="relative group">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search reports..."
                                className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-700 focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 shadow-sm group-hover:shadow-md transition-shadow"
                            />
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400 group-hover:text-red-800 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Results Header */}
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {selectedCategory === 'All' ? 'All Reports' : selectedCategory}
                                <span className="text-gray-500 text-lg font-normal ml-2">({sortedReports.length} results)</span>
                            </h2>
                        </div>

                        {/* Reports Grid */}
                        {sortedReports.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                                {sortedReports.map((report) => (
                                    <ReportCard key={report.id} {...report} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="text-4xl mb-4">🔍</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No reports found</h3>
                                <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                                <button
                                    onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                                    className="mt-6 text-red-800 font-bold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
}

// Internal Slider Component
function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const reports = [
        {
            id: 1,
            title: "Love & Relationship Report",
            subtitle: "Deep insights into transformative love life",
            desc: "Understand your emotional patterns, compatibility & marriage timing with precise Vedic wisdom.",
            price: 599,
            originalPrice: 1499,
            rating: 4.8,
            reviews: 890,
            badge: "Bestseller",
            badgeColor: "bg-yellow-400 text-black",
            tag: "Transformation",
            link: "/love-and-relationship-report",
            buttonText: "Get Your Report",
            bookColor: "from-red-700 to-red-900"
        },
        {
            id: 2,
            title: "Life Journey Report",
            subtitle: "Deep insights into transformative life events",
            desc: "Navigate your career, health & finance with a complete 5-year astrological roadmap.",
            price: 699,
            originalPrice: 1999,
            rating: 4.9,
            reviews: 1200,
            badge: "Trending",
            badgeColor: "bg-yellow-400 text-black",
            tag: "Career & Wealth",
            link: "/life-journey-report",
            buttonText: "Get Your Report",
            bookColor: "from-blue-700 to-blue-900"
        },
        {
            id: 3,
            title: "Personalised Destiny Report",
            subtitle: "Unlock your karmic path & hidden strengths",
            desc: "Discover your true purpose and align with your destiny for maximum success.",
            price: 799,
            originalPrice: 2499,
            rating: 4.9,
            reviews: 950,
            badge: "Premium",
            badgeColor: "bg-yellow-400 text-black",
            tag: "Destiny",
            link: "/personalised-destiny-report",
            buttonText: "Get Your Report",
            bookColor: "from-purple-700 to-purple-900"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === reports.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? reports.length - 1 : prev - 1));
    };

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const activeReport = reports[currentSlide];

    return (
        <div className="relative w-full">

            {/* Main Content Grid */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 min-h-[500px]">

                {/* Left: Book Cover (Redesign to match reference) */}
                <div className="w-full lg:w-5/12 flex justify-center lg:justify-end relative order-1 lg:order-1 perspective-[1000px]">

                    {/* Book Container */}
                    <div className="relative w-[320px] md:w-[380px] aspect-[2/3] transform transition-all duration-700 hover:scale-105 hover:rotate-y-12 preserve-3d">

                        {/* Book Spine Effect */}
                        <div className={`absolute top-1 left-0 w-full h-full bg-gradient-to-r ${activeReport.bookColor} rounded-r-xl transform -translate-x-4 translate-y-4 opacity-70`}></div>

                        {/* Main Cover */}
                        <div className={`relative w-full h-full rounded-r-xl rounded-l-md overflow-hidden shadow-2xl bg-gradient-to-br ${activeReport.bookColor} border-l-8 border-yellow-600/60`}>

                            {/* Decorative Border Frame (Gold) */}
                            <div className="absolute inset-4 border-2 border-yellow-500/40 rounded-lg">
                                <div className="absolute inset-1 border border-yellow-500/20 rounded-md"></div>
                            </div>

                            {/* Corner Decorations */}
                            <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-yellow-500 rounded-tl-lg"></div>
                            <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-yellow-500 rounded-tr-lg"></div>
                            <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-yellow-500 rounded-bl-lg"></div>
                            <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-yellow-500 rounded-br-lg"></div>

                            {/* Logo/Header */}
                            <div className="absolute top-12 left-0 w-full text-center">
                                <div className="text-[10px] text-yellow-200 tracking-widest uppercase">Dr. Vinay Bajrangi</div>
                            </div>

                            {/* Title Area */}
                            <div className="absolute top-24 left-0 w-full text-center px-6">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight drop-shadow-md uppercase tracking-wide border-b border-yellow-500/30 pb-4">
                                    {activeReport.title}
                                </h3>
                                <div className="text-yellow-400 text-xs font-bold uppercase tracking-widest mt-2">Powered By Vedic Astrology</div>
                            </div>

                            {/* Author Image - Bottom Centered */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center">
                                <div className="relative w-full h-64">
                                    {/* Image needs to act like a cutout if possible, or just a nice portrait */}
                                    <img
                                        src="https://content.vinaybajrangi.com/img/content/1760069123-channels4_profile.jpg"
                                        alt="Author"
                                        className="w-full h-full object-cover object-top mask-image-gradient-to-t"
                                        style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 100%)' }}
                                    />
                                </div>
                                <div className="w-full bg-yellow-500 text-black text-center py-2 font-bold text-sm uppercase tracking-wider relative bottom-8 mx-auto max-w-[80%] rounded-md shadow-lg">
                                    By Dr. Vinay Bajrangi
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right: Content (Matching Reference) */}
                <div className="w-full lg:w-6/12 text-left space-y-4 lg:space-y-6 order-2 lg:order-2 pl-0 lg:pl-10">

                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className={`${activeReport.badgeColor} text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide flex items-center gap-1`}>
                            ★ {activeReport.badge}
                        </span>
                        <span className="bg-white/20 text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-wide backdrop-blur-sm">
                            {activeReport.tag}
                        </span>
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            {activeReport.title}
                        </h2>
                        <p className="text-xl text-white/90 font-light">
                            {activeReport.subtitle}
                        </p>
                    </div>

                    {/* Ratings & Price */}
                    <div className="flex items-center gap-6 text-lg">
                        <div className="flex items-center gap-1 text-yellow-400 font-bold">
                            <span>★ {activeReport.rating}</span>
                            <span className="text-white/70 font-normal text-base">({activeReport.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-white/50 line-through text-lg">₹{activeReport.originalPrice}</span>
                            <span className="text-white font-bold text-3xl">₹{activeReport.price}</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <Link href={activeReport.link}>
                            <button className="bg-white text-black hover:bg-gray-100 transition-colors font-bold text-lg px-8 py-3.5 rounded-full shadow-lg flex items-center justify-center gap-2 min-w-[200px]">
                                {activeReport.buttonText}
                            </button>
                        </Link>
                    </div>

                </div>

            </div>

            {/* Navigation Arrows (Circle style) */}
            <button
                onClick={prevSlide}
                className="absolute left-0 lg:left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 lg:right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
                {reports.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/60'}`}
                    />
                ))}
            </div>

        </div>
    );
}

function ReportCard({ title, desc, price, originalPrice, rating, reviews, link, color, tag }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">

            {/* Card Image Area (Simulating the Book Cover Look) */}
            <div className={`relative h-[300px] overflow-hidden bg-gradient-to-br ${color} p-4 flex items-center justify-center`}>

                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>

                <div className="absolute top-4 right-4 z-20">
                    <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wide">
                        ★ {tag}
                    </span>
                </div>

                {/* Scaled Down Book Cover for the Card */}
                <div className="relative w-[140px] aspect-[2/3] transform group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                    <div className="absolute inset-0 bg-black/20 rounded-r-lg"></div>
                    <div className={`w-full h-full border-2 border-yellow-500/50 rounded-r-lg bg-gradient-to-br ${color} flex flex-col items-center p-2 text-center relative overflow-hidden`}>

                        {/* Mini details mirroring the main book */}
                        <div className="text-[6px] text-yellow-200 uppercase tracking-widest mt-2 mb-2">Dr. Vinay Bajrangi</div>
                        <div className="text-white font-serif font-bold text-sm leading-tight mb-2 border-b border-white/20 pb-2">{title}</div>

                        {/* Mini Author Image */}
                        <div className="mt-auto w-full relative">
                            <img src="https://content.vinaybajrangi.com/img/content/1760069123-channels4_profile.jpg" className="w-full h-16 object-cover object-top mask-image-gradient" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-800 transition-colors mb-2 line-clamp-1">{title}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{desc}</p>

                <div className="flex items-center gap-1 mb-4">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="font-bold text-gray-900 text-sm">{rating}</span>
                    <span className="text-gray-400 text-xs">({reviews})</span>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <div>
                        <span className="text-gray-400 text-xs line-through mr-2">₹{originalPrice}</span>
                        <span className="text-red-900 font-bold text-xl">₹{price}</span>
                    </div>
                    <Link href={link} className="bg-[#7f1d1d] hover:bg-[#991b1b] text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-md inline-block">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}
