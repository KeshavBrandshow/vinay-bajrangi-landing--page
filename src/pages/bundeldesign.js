import React from 'react';

const MarriageAstrologyBundles = () => {
    const bundles = [
        {
            iconUrl: "imgs/ring.png",
            title: "BUNDLE 1: “Will I Marry?”",
            subtitle: "Marriage Possibility & Delay",
            badge: "ENTRY / FOUNDATION",
            for: "Unmarried individuals anxious about delay, denial, or fate.",
            includes: [
                "Marriage possibility (yes / no / unconventional)",
                "Reasons for delay",
                "Role of Saturn, Rahu–Ketu, karmic blocks",
                "Marriage age window (broad)",
                "Practical guidance (what helps / what doesn’t)"
            ],
            excludes: ["Exact timing", "Compatibility", "Partner nature"],
            footer: "Role: Lead-generator bundle | Psycology: Fear, insecurity",
            theme: "blue"
        },
        {
            iconUrl: "imgs/couples.png",
            title: "BUNDLE 2: “When & How\nWill I Marry?”",
            subtitle: "Marriage Timing & Type",
            badge: "ACTION-ORIENTED",
            for: "People actively searching or in relationships.",
            includes: [
                "Precise marriage timing window",
                "Love vs arranged marriage",
                "Family resistance indicators",
                "Sudden vs planned marriage",
                "Key trigger periods"
            ],
            excludes: ["Compatibility", "Post-marriage happiness"],
            footer: "Psychology: Urgency, decision-readiness",
            theme: "green"
        },
        {
            iconUrl: "imgs/heart.png",
            title: "BUNDLE 3: “Who Will\nI Marry?”",
            subtitle: "Spouse Profile & Quality",
            badge: "CLARITY-SEEKING",
            for: "Unmarried clients evaluating expectations.",
            includes: [
                "Nature & personality of spouse",
                "Emotional bonding style",
                "Financial & social status",
                "Power dynamics in marriage",
                "Overall marital quality forecast"
            ],
            excludes: ["Specific match evaluation"],
            footer: "Psychology: Curiosity + reassurance",
            theme: "purple"
        },
        {
            iconUrl: "https://img.icons8.com/color/96/tarot-cards.png",
            title: "BUNDLE 4: “Is This Match\nRight?”",
            subtitle: "Compatibility & Fixation",
            badge: "DECISION-CRITICAL",
            for: "Clients with a proposal, partner, or alliance.",
            includes: [
                "Full compatibility analysis",
                "Long-term sustainability",
                "Break-up vs marriage conversion",
                "Divorce/separation risk",
                "Family interference factors",
                "Engagement/marriage timing (Optional Add-On)"
            ],
            excludes: [],
            footer: "Pricing: Higher than Bundles 1–3",
            theme: "red"
        },
        {
            iconUrl: "imgs/couples.png",
            title: "BUNDLE 5: “Marriage\nHealth Check”",
            subtitle: "Post-Marriage & Conflict",
            badge: "CRISIS / PREVENTIVE",
            for: "Married individuals facing stress or disharmony.",
            includes: [
                "Emotional disconnect analysis",
                "Ego clashes & dominance",
                "Extra-marital indicators",
                "Separation vs reconciliation",
                "Impact on children",
                "Remedy + counseling roadmap (Optional Add-On)"
            ],
            excludes: [],
            footer: "Psychology: Pain, confusion, hope",
            theme: "teal"
        },
        {
            iconUrl: "imgs/ring.png",
            title: "BUNDLE 6: “Karmic\nMarriage Blueprint”",
            subtitle: "Premium Deep-Dive",
            badge: "AUTHORITY + PREMIUM",
            for: "Spiritually inclined, repeated failure cases.",
            includes: [
                "Past-life marriage karma",
                "Repeating relationship patterns",
                "Role of Saturn / Rahu / Ketu",
                "Second marriage possibility (if applicable)",
                "Remedies + life-direction advice"
            ],
            excludes: [],
            footer: "Positioning: Signature premium offering",
            theme: "orange"
        }
    ];

    const getThemeStyles = (theme) => {
        const commonButton = "w-full py-3 font-bold text-lg md:text-xl cursor-pointer transition-all hover:brightness-110 " +
            "bg-gradient-to-b from-[#fde68a] via-[#f59e0b] to-[#b45309] text-[#4a2e0b] " +
            "border-x-[3px] border-b-[3px] border-[#fde68a] rounded-t-none rounded-b-2xl shadow-[0_4px_0_#78350f]";
        const commonBody = "flex flex-col flex-grow items-center text-center px-4 pt-10 pb-6 rounded-t-2xl border-[3px] border-b-0 border-[#fde68a]";

        switch (theme) {
            case 'blue': return { body: `${commonBody} bg-gradient-to-b from-[#1e3a8a] to-[#172554] shadow-[0_0_20px_rgba(30,64,175,0.4)]`, button: commonButton };
            case 'green': return { body: `${commonBody} bg-gradient-to-b from-[#3f6212] to-[#14532d] shadow-[0_0_20px_rgba(20,83,45,0.4)]`, button: commonButton };
            case 'purple': return { body: `${commonBody} bg-gradient-to-b from-[#6b21a8] to-[#4c1d95] shadow-[0_0_20px_rgba(76,29,149,0.4)]`, button: commonButton };
            case 'red': return { body: `${commonBody} bg-gradient-to-b from-[#991b1b] to-[#7f1d1d] shadow-[0_0_20px_rgba(153,27,27,0.4)]`, button: commonButton };
            case 'teal': return { body: `${commonBody} bg-gradient-to-b from-[#0f766e] to-[#134e4a] shadow-[0_0_20px_rgba(15,118,110,0.4)]`, button: commonButton };
            case 'orange': return { body: `${commonBody} bg-gradient-to-b from-[#a16207] to-[#713f12] shadow-[0_0_20px_rgba(161,98,7,0.4)]`, button: commonButton };
            default: return {};
        }
    };

    return (
        <div className="min-h-screen w-full relative font-serif text-white py-16 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover " style={{ backgroundColor: '#1a1a24', backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20241012/pngtree-a-beautiful-sky-in-red-and-orange-color-with-clouds-and-image_16370312.jpg')` }} />
            <div className="absolute inset-0 z-0 bg-[#3a2e5a] mix-blend-multiply opacity-50 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#fde68a] mb-6 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide font-normal leading-tight">
                    Marriage Consultation<br />Bundle Architecture
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-16 text-center drop-shadow-md tracking-wider font-light">
                    The 6-Bundle foundation designed for every stage of your relationship journey.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full px-2">
                    {bundles.map((bundle, index) => {
                        const styles = getThemeStyles(bundle.theme);
                        return (
                            <div key={index} className="flex flex-col h-full relative transform transition-all duration-300 hover:-translate-y-2">
                                <div className={`${styles.body} relative z-10 `}>
                                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none rounded-t-2xl" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/black-mamba.png')` }}></div>
                                    <div className="absolute -top-[36px] left-1/2 transform -translate-x-1/2 w-[72px] h-[72px] rounded-full z-20 flex items-center justify-center drop-shadow-xl overflow-visible">
                                        <img src={bundle.iconUrl} alt={bundle.title} className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-medium text-white mb-2 relative z-10 whitespace-pre-line leading-tight">
                                        {bundle.title}
                                    </h3>
                                    <div className="flex items-center justify-center w-full mb-3 opacity-90 relative z-10">
                                        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#fde68a] to-transparent w-full"></div>
                                        <div className="text-[#fde68a] text-xs mx-3 transform rotate-45">✦</div>
                                        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#fde68a] to-transparent w-full"></div>
                                    </div>
                                    <h4 className="text-[1.1rem] relative z-10 text-[#fde68a] font-serif font-bold">
                                        {bundle.subtitle}
                                    </h4>
                                    <div className="bg-white/10 text-white text-[10px] md:text-xs px-3 py-1 rounded-full mt-2 mb-4 relative z-10 font-sans tracking-wider border border-white/20 uppercase font-semibold text-center w-auto inline-block">
                                        {bundle.badge}
                                    </div>

                                    <div className="w-full flex flex-col text-left font-sans text-sm md:text-[0.95rem] text-gray-100 flex-grow relative z-10 pb-4">
                                        <div className="bg-black/20 p-3 rounded-lg mb-4 border border-white/10 text-center">
                                            <span className="text-[#fde68a] font-semibold text-xs uppercase tracking-widest block mb-1">Who it is for:</span>
                                            <span className="italic opacity-95 text-sm">" {bundle.for} "</span>
                                        </div>

                                        <div className="font-bold text-[#fde68a] mb-2 uppercase text-[11px] tracking-wider">Includes:</div>
                                        <ul className="space-y-1.5 mb-4 px-1">
                                            {bundle.includes.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-[#d9f99d] mr-2 mt-[2px] text-[10px]">✔</span>
                                                    <span className="opacity-95 text-xs lg:text-[0.85rem] leading-[1.3]">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {bundle.excludes.length > 0 && (
                                            <>
                                                <div className="font-bold text-red-300 mb-2 uppercase text-[11px] tracking-wider mt-auto pt-4 border-t border-white/10">Does NOT Include:</div>
                                                <ul className="space-y-1.5 mb-2 px-1">
                                                    {bundle.excludes.map((item, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <span className="text-red-400 mr-2 mt-[2px] text-xs">✕</span>
                                                            <span className="opacity-95 text-xs lg:text-[0.85rem] leading-[1.3] text-gray-300">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>

                                    <div className="w-[105%] bg-black/40 py-2.5 px-4 text-center mt-auto relative z-10 border-t border-white/10 text-[11px] lg:text-xs text-[#fde68a] font-sans tracking-wide">
                                        {bundle.footer}
                                    </div>
                                </div>
                                <button className={`${styles.button} relative z-20 hover:shadow-2xl active:shadow-none active:translate-y-1 mb-6`}>
                                    <span className="flex items-center justify-center gap-1 font-sans">
                                        Select Bundle ➔
                                    </span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const MarriageMasterBundles = () => {
    const cards = [
        {
            iconUrl: "imgs/ring.png",
            title: "MASTER BUNDLE 1:\nMarriage Foundation & Possibility",
            subtitle: "“Is marriage destined for me, and what is blocking it?”",
            subtitleClass: "italic text-[#fde68a]",
            content: [
                "Will marriage happen or not",
                "Delay vs denial vs unconventional",
                "Major karmic blocks (Saturn / Nodes)",
                "Broad marriage age window",
                "Why past efforts failed",
                "What kind of effort helps"
            ],
            excludes: [
                "Exact timing",
                "Partner nature",
                "Compatibility"
            ],
            footerText: "Entry + Diagnostic Bundle",
            psychology: "Fear, insecurity, confusion",
            theme: "blue"
        },
        {
            iconUrl: "imgs/couples.png",
            title: "MASTER BUNDLE 2:\nMarriage Decision & Timing",
            subtitle: "“Who should I marry, when, and will it work?”",
            subtitleClass: "italic text-[#d9f99d]",
            content: [
                "Exact marriage timing window",
                "Love vs arranged clarity",
                "Partner personality & background",
                "Match compatibility (if partner exists)",
                "Will current relationship convert to marriage",
                "Divorce/separation risk indicators"
            ],
            excludes: [
                "Post-marriage conflict resolution",
                "Deep karmic past-life analysis"
            ],
            footerText: "Most Booked / Highest Demand",
            psychology: "High-stakes decision-making",
            theme: "green"
        },
        {
            iconUrl: "imgs/heart.png",
            title: "MASTER BUNDLE 3:\nMarriage Longevity, Karma & Healing",
            subtitle: "“Why is marriage painful, repeating, or failing?”",
            subtitleClass: "italic text-[#e9d5ff]",
            content: [
                "Quality of married life",
                "Conflict patterns & ego clashes",
                "Extra-marital tendencies",
                "Separation vs reconciliation",
                "Past-life marriage karma",
                "Second marriage possibility",
                "Corrective remedies & life guidance"
            ],
            excludes: [
                "Matchmaking",
                "Early marriage timing"
            ],
            footerText: "Premium + Authority Bundle",
            psychology: "Pain, exhaustion, search for meaning",
            theme: "purple"
        }
    ];

    const CheckIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="min-w-[16px] mr-2 mt-[2px]">
            <circle cx="12" cy="12" r="10" fill="#f59e0b" />
            <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const CrossIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="min-w-[16px] mr-2 mt-[2px]">
            <circle cx="12" cy="12" r="10" fill="#ef4444" />
            <path d="M15 9L9 15M9 9l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const getThemeStyles = (theme) => {
        const baseGradient = "bg-gradient-to-b border-[3px] border-[#fde68a] rounded-[1.5rem] shadow-lg relative p-1.5 flex flex-col h-full";
        switch (theme) {
            case 'blue': return `${baseGradient} from-[#1e3a8a] to-[#172554]`;
            case 'green': return `${baseGradient} from-[#3f6212] to-[#14532d]`;
            case 'purple': return `${baseGradient} from-[#6b21a8] to-[#4c1d95]`;
            default: return baseGradient;
        }
    };

    return (
        <div className="min-h-screen w-full relative font-serif text-white py-20 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover " style={{ backgroundColor: '#1a1a24', backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20241012/pngtree-a-beautiful-sky-in-red-and-orange-color-with-clouds-and-image_16370312.jpg')` }} />
            <div className="absolute inset-0 z-0 bg-[#25152b] mix-blend-multiply opacity-70 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
                <div className="bg-[#fde68a] text-[#451a03] font-sans font-bold px-6 py-1.5 rounded-full text-sm tracking-widest mb-4 uppercase">
                    The Ultimate Combinations
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#fde68a] mb-4 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide font-normal">
                    The 3 Master Bundles
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-16 text-center drop-shadow-md tracking-wide font-light max-w-4xl mx-auto block leading-relaxed">
                    Designed by combining perfectly matching bundles. <br /> Get comprehensive insights by choosing exactly what fits your life stage.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 w-full max-w-6xl mx-auto px-2">
                    {cards.map((card, index) => {
                        const outerBodyClass = getThemeStyles(card.theme);
                        return (
                            <div key={index} className="flex flex-col h-full relative mb-4 transform transition-all duration-300 hover:scale-[1.02]">
                                <div className={outerBodyClass}>
                                    <div className="absolute inset-[6px] rounded-[1.2rem] border-[1px] border-white/40 pointer-events-none z-10"></div>
                                    <div className="absolute -top-[36px] left-1/2 transform -translate-x-1/2 w-[72px] h-[72px] rounded-full z-20 flex items-center justify-center drop-shadow-xl overflow-visible">
                                        <img src={card.iconUrl} alt="Icon" className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]" />
                                    </div>

                                    <div className="flex flex-col items-center flex-grow pt-10 pb-6 px-4 z-20 text-center relative h-full">
                                        <h3 className="text-[1.2rem] md:text-[1.3rem] font-medium text-white mb-2 leading-tight min-h-[64px] flex items-center justify-center whitespace-pre-line">
                                            {card.title}
                                        </h3>
                                        <div className="flex items-center justify-center w-full mb-3 opacity-90">
                                            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#fde68a] to-transparent w-full"></div>
                                            <div className="text-[#fde68a] text-[10px] mx-2 transform rotate-45">✦</div>
                                            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#fde68a] to-transparent w-full"></div>
                                        </div>
                                        <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 mb-5 w-full">
                                            <h4 className={`text-[0.95rem] font-medium text-white ${card.subtitleClass}`}>
                                                {card.subtitle}
                                            </h4>
                                        </div>

                                        <div className="w-full text-left font-sans flex flex-col flex-grow">
                                            <div className="text-[#fde68a] text-xs font-bold uppercase tracking-wider mb-2 bg-black/30 px-2 py-1 inline-block w-max rounded">Includes:</div>
                                            <ul className="space-y-2.5 mx-auto w-full mb-6">
                                                {card.content.map((item, i) => (
                                                    <li key={i} className="flex items-start text-[13px] lg:text-[14px]">
                                                        <CheckIcon />
                                                        <span className="font-medium text-gray-100 opacity-95 tracking-wide leading-snug">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-auto pt-4 border-t border-white/20">
                                                <div className="text-red-300 text-xs font-bold uppercase tracking-wider mb-2 bg-black/30 px-2 py-1 inline-block w-max rounded">Excludes:</div>
                                                <ul className="space-y-2 mx-auto w-full mb-4">
                                                    {card.excludes.map((item, i) => (
                                                        <li key={i} className="flex items-start text-[13px] lg:text-[14px]">
                                                            <CrossIcon />
                                                            <span className="font-medium text-gray-400 opacity-95 tracking-wide leading-snug line-through decoration-red-500/50">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="w-[calc(100%+2rem)] -mx-4 bg-black/40 border-y border-white/20 py-2 mb-4 font-sans text-xs text-gray-300">
                                            <span className="text-[#fde68a]">Psychology addressed:</span> <span className="italic">{card.psychology}</span>
                                        </div>

                                        <div className="bg-gradient-to-b from-[#fef08a] via-[#f59e0b] to-[#b45309] text-[#4a2e0b] mb-4 -mx-4 w-[calc(100%+2rem)]">
                                            <p className="text-[15px] font-bold min-h-[44px] flex flex-col items-center justify-center px-4">
                                                <span className="text-[10px] uppercase tracking-widest opacity-80">Positioning</span>
                                                {card.footerText}
                                            </p>
                                        </div>
                                        <button className="w-[85%] mx-auto py-3 font-sans font-bold text-sm md:text-base cursor-pointer rounded-md transition-all hover:brightness-110 active:translate-y-1 shadow-[0_4px_0_#78350f] bg-gradient-to-b from-[#fef08a] via-[#f59e0b] to-[#b45309] text-[#4a2e0b] border-[1px] border-[#fde68a]">
                                            Book Master Bundle ➔
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const OneGlanceView = () => {
    return (
        <div className="w-full relative py-20 px-4 md:px-8 font-sans border-t-[4px] border-[#fde68a]/50" style={{ backgroundColor: '#111827' }}>
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl text-[#fde68a] font-serif mb-10 text-center drop-shadow-lg font-bold">
                    MASTER STRUCTURE (ONE-GLANCE VIEW)
                </h2>

                <div className="w-full overflow-hidden mb-20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-xl border-2 border-[#fef08a]/30">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gradient-to-r from-[#78350f] via-[#92400e] to-[#78350f] text-[#fde68a] text-lg lg:text-xl shadow-md">
                                <th className="p-4 md:p-5 border-r border-[#fde68a]/20 font-serif w-1/4 text-center">Bundle</th>
                                <th className="p-4 md:p-5 font-serif w-3/4">Client Question</th>
                            </tr>
                        </thead>
                        <tbody className="bg-[#1f2937] text-[15px] md:text-lg">
                            {[
                                { id: "1", q: "Will I marry?" },
                                { id: "2", q: "When & how?" },
                                { id: "3", q: "Who will I marry?" },
                                { id: "4", q: "Is this match right?" },
                                { id: "5", q: "Why is my marriage suffering?" },
                                { id: "6", q: "Why is this karma repeating?" }
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 md:p-5 font-bold text-center border-r border-white/5 text-[#fde68a]">{row.id}</td>
                                    <td className="p-4 md:p-5 text-gray-200 font-medium tracking-wide">{row.q}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-[#fde68a] h-[1px] w-[50%] mb-16 opacity-30"></div>

                <div className="text-center mb-10">
                    <div className="bg-[#fde68a] text-[#451a03] font-sans font-bold px-6 py-1.5 rounded-full text-sm lg:text-base tracking-widest mb-4 uppercase inline-block shadow-lg">
                        This is the Magic
                    </div>
                    <h2 className="text-3xl md:text-[2.2rem] text-white font-serif text-center drop-shadow-md leading-tight">
                        ONE-GLANCE CLARITY
                    </h2>
                </div>

                <div className="w-full overflow-hidden shadow-[0_10px_30px_rgba(30,58,138,0.5)] rounded-xl border-2 border-blue-400/30">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] text-[#93c5fd] text-lg lg:text-xl shadow-md">
                                <th className="p-5 md:p-6 border-r border-blue-400/20 font-serif w-2/3">Client Situation</th>
                                <th className="p-5 md:p-6 font-serif w-1/3 text-center">Right Bundle</th>
                            </tr>
                        </thead>
                        <tbody className="bg-[#0f172a] text-[15px] md:text-[17px]">
                            <tr className="border-b border-blue-400/10 hover:bg-white/5 transition-colors group">
                                <td className="p-5 md:p-6 text-gray-200 font-medium tracking-wide border-r border-blue-400/10 group-hover:text-white transition-colors">
                                    “I’m unmarried & worried”
                                </td>
                                <td className="p-5 md:p-6 text-center">
                                    <div className="bg-blue-600/30 text-blue-300 py-2 sm:px-6 rounded-lg font-bold tracking-widest border border-blue-500/50 shadow-[0_0_10px_rgba(37,99,235,0.4)] whitespace-nowrap">
                                        Bundle 1
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-blue-400/10 hover:bg-white/5 transition-colors group">
                                <td className="p-5 md:p-6 text-gray-200 font-medium tracking-wide border-r border-blue-400/10 group-hover:text-white transition-colors">
                                    “I have options / a partner”
                                </td>
                                <td className="p-5 md:p-6 text-center">
                                    <div className="bg-green-600/30 text-green-300 py-2 sm:px-6 rounded-lg font-bold tracking-widest border border-green-500/50 shadow-[0_0_10px_rgba(22,163,74,0.4)] whitespace-nowrap">
                                        Bundle 2
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors group">
                                <td className="p-5 md:p-6 text-gray-200 font-medium tracking-wide border-r border-blue-400/10 group-hover:text-white transition-colors">
                                    “Marriage is suffering / repeating”
                                </td>
                                <td className="p-5 md:p-6 text-center">
                                    <div className="bg-purple-600/30 text-purple-300 py-2 sm:px-6 rounded-lg font-bold tracking-widest border border-purple-500/50 shadow-[0_0_10px_rgba(147,51,234,0.4)] whitespace-nowrap">
                                        Bundle 3
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot className="bg-[#020617] border-t-2 border-blue-400/30">
                            <tr>
                                <td colSpan={2} className="p-5 md:p-6 text-center text-[#fde68a] text-lg lg:text-xl italic font-serif opacity-90 tracking-widest">
                                    ✨ No overlap. No confusion. ✨
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default function BundleDesignPage() {
    return (
        <div className="bg-[#111827]">
            <MarriageAstrologyBundles />
            <OneGlanceView />
            <MarriageMasterBundles />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
                
                .font-serif {
                    font-family: 'Playfair Display', serif;
                }
                .font-sans {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }
            `}</style>
        </div>
    );
}
