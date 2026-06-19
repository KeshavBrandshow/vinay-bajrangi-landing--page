import React from "react";
import { Cormorant_Garamond, Jost } from "next/font/google";
 
const stats = [
    { number: "25+", label: "Years of Practice" },
    { number: "1M+", label: "YouTube Subscribers" },
    { number: "2", label: "Doctorates in Astrology" },
    { number: "1000s", label: "Students Trained" },
];
 
const publications = [
    "Economic Times",
    "Hindustan Times",
    "Outlook",
    "Times of India",
    "India Today",
    "NDTV",
    "Aaj Tak",
    "Zee News",
    "News18",
    "Navbharat Times",
    "Dainik Jagran",
    "Dainik Bhaskar",
];
 
const cards = [
    {
        publication: "Dna India",
        badge: "Authored",
        badgeType: "authored",
        title: "How will be 2025 for you?",
        summary:
            "How will be 2025 for me: is a natural anxiety in people’s minds to plan major decisions. How will be 2025 for you, no doubt depends on how you peddle the different aspects of life and make major decisions.",
        date: "Jan 09, 2025",
        link: "https://www.dnaindia.com/lifestyle/report-how-will-be-2025-for-you-3126156",
        cta: "Read Article",
    },
    {
        publication: "LatestLY",
        badge: "Quoted",
        badgeType: "quoted",
        title: "Know About Share Market Success From Birth Date",
        summary:
            "Another factor is seeing the success of others in the share market or getting motivated by the surrounding known circles, a common man also plunges into it. But when the reversals happen, the commoner normally bears the brunt.",
        date: "Apr 02, 2025",
        link: "https://www.latestly.com/business/know-about-share-market-success-from-birth-date-6753133.html",
        cta: "Read Article",
    },
    {
        publication: "Republicworld",
        badge: "Featured",
        badgeType: "featured",
        title: "Can Astrology Help In Business",
        summary:
            "Can astrology help in business is based on a reply to some of the following questions in a normal person's mind.",
        date: "Apr 04, 2025",
        link: "https://www.republicworld.com/amp/initiatives/can-astrology-help-in-business",
        cta: "Read Article",
    },
    {
        publication: "Dna India",
        badge: "Broadcast",
        badgeType: "broadcast",
        title: "What to do if matching score is low",
        summary:
            "While a low Kundli matching score may raise doubts, true compatibility goes far beyond just numbers—deep chart analysis is crucial.",
        date: "Apr 28, 2025",
        link: "https://www.dnaindia.com/brand-desk/report-what-to-do-if-matching-score-is-low-3146023#google_vignette%22",
        cta: "Watch Segment",
    },
    {
        publication: "ABP Live",
        badge: "Authored",
        badgeType: "authored",
        title: "Know Your Marriage Timing",
        summary:
            "Curious about your marriage timing? Beyond Venus and the 7th house, planetary transits are key! Discover how astrology can reveal your best marriage period.",
        date: "May 29, 2025",
        link: "https://news.abplive.com/brand-wire/know-your-marriage-timing-1775849",
        cta: "Read Article",
    },
    {
        publication: "Zee News",
        badge: "Quoted",
        badgeType: "quoted",
        title: "How To Select Career Using Birth Date?",
        summary:
            "Choosing a career involves natural inclination, birth chart insights, location, family support, and dedication.",
        date: "Jul 17, 2025",
        link: "https://zeenews.india.com/consumer-connect/how-to-select-career-using-birth-date-2933252.html",
        cta: "Read Article",
    },
    {
        publication: "Dna India",
        badge: "Quoted",
        badgeType: "quoted",
        title: "How to know correct birth time",
        summary:
            "Even if you don’t know your exact birth time, Vedic astrology can determine it through Birth Time Rectification.",
        date: "Jul 25, 2025",
        link: "https://www.dnaindia.com/insights/report-how-to-know-correct-birth-time-3170325",
        cta: "Read Article",
    },
    {
        publication: "Mid-Day",
        badge: "Quoted",
        badgeType: "quoted",
        title: "Why Is Your Marriage Getting Delayed",
        summary:
            "Explore astrological reasons for delayed marriage. Learn how planetary positions and karmic patterns affect marriage timing.",
        date: "Aug 07, 2025",
        link: "https://www.mid-day.com/buzzfeed/article/why-is-your-marriage-getting-delayed-6919",
        cta: "Read Article",
    },
    {
        publication: "Zee News",
        badge: "Quoted",
        badgeType: "quoted",
        title: "How Can Astrology Help In Business Success",
        summary: "Astrology can guide business decisions by identifying ideal career paths, timing, and partnerships.",
        date: "Sep 10, 2025",
        link: "https://zeenews.india.com/consumer-connect/can-astrology-help-in-business-success-2958111.html",
        cta: "Read Article",
    },
    {
        publication: "Mid-Day",
        badge: "Quoted",
        badgeType: "quoted",
        title: "How to check qualities of a good astrologer",
        summary: "The article explains what defines a good astrologer and why ‘best astrologer’ is a vague term.",
        date: "Nov 24, 2025",
        link: "https://www.mid-day.com/buzzfeed/article/how-to-check-qualities-of-a-good-astrologer-for-accurate-predictions%22",
        cta: "Read Article",
    },
    {
        publication: "Zee News",
        badge: "Quoted",
        badgeType: "quoted",
        title: "Can Astrology Help Select Right Business?",
        summary: "Business astrology uses birth charts and planetary periods to align ventures with cosmic timing.",
        date: "Dec 26, 2025",
        link: "https://zeenews.india.com/consumer-connect/can-astrology-help-select-right-business-2998854.html",
        cta: "Read Article",
    },
    {
        publication: "Outlook",
        badge: "Quoted",
        badgeType: "quoted",
        title: "Sushant Sinha Interviews Dr. Vinay Bajrangi",
        summary: "An in-depth interview covering political predictions, UPSC results, and Vedic astrology insights.",
        date: "May 01, 2025",
        link: "https://www.outlookindia.com/announcements/news-media-wire/sushant-sinha-interviews-dr-vinay-bajrangi%22",
        cta: "Read Article",
    },
    {
        publication: "Hindustan Times",
        badge: "Quoted",
        badgeType: "quoted",
        title: "Running a Business Astrologically",
        summary: "Dr. Vinay Bajrangi explains how entrepreneurs can avoid complications and improve business success.",
        date: "May 11, 2018",
        link: "https://www.hindustantimes.com/advertorial/what-everybody-ought-to-know-about-running-a-business-astrologically-dr-vinay-bajrangi/story-I7zgX4xRoBiIglNuRwSbbO.html%22",
        cta: "Read Article",
    },
    {
        publication: "IssueWire",
        badge: "Quoted",
        badgeType: "quoted",
        title: "Dr. Vinay Bajrangi Expands Consultation Services",
        summary: "Dr. Vinay Bajrangi expands online astrology consultation services worldwide for global clients.",
        date: "Nov 11, 2025",
        link: "https://www.issuewire.com/dr-vinay-bajrangi-expands-online-astrology-consultation-services-worldwide-1848040238415974%22",
        cta: "Read Article",
    },
];
 
const rows = [
    {
        publication: "dnaIndia",
        headline: "How will be 2025 for you?",
        type: "Quoted",
        typeClass: "quoted",
        tier: "Tier 1",
        tierClass: "tier1",
        date: "Jan 09, 2025",
        link: "https://www.dnaindia.com/lifestyle/report-how-will-be-2025-for-you-3126156",
    },
    {
        publication: "LatestLY",
        headline: "Know About Share Market Success From Birth Date",
        type: "Quoted",
        typeClass: "quoted",
        tier: "Tier 1",
        tierClass: "tier1",
        date: "Apr 02, 2025",
        link: "https://www.latestly.com/business/know-about-share-market-success-from-birth-date-6753133.html",
    },
    {
        publication: "Republicworld",
        headline: "Can Astrology Help In Business",
        type: "Featured",
        typeClass: "featured",
        tier: "Tier 2",
        tierClass: "tier2",
        date: "Apr 04, 2025",
        link: "https://www.republicworld.com/amp/initiatives/can-astrology-help-in-business",
    },
    {
        publication: "dnaindia",
        headline: "What to do if matching score is low",
        type: "Broadcast",
        typeClass: "broadcast",
        tier: "Tier 1",
        tierClass: "tier1",
        date: "Apr 28, 2025",
        link: "https://www.dnaindia.com/brand-desk/report-what-to-do-if-matching-score-is-low-3146023#google_vignette%22",
    },
    {
        publication: "abplive",
        headline: "Know Your Marriage Timing",
        type: "Authored",
        typeClass: "authored",
        tier: "Tier 2",
        tierClass: "tier2",
        date: "May 29, 2025",
        link: "https://news.abplive.com/brand-wire/know-your-marriage-timing-1775849",
    },
    {
        publication: "zeenews",
        headline: "How To Select Career Using Birth Date?",
        type: "Quoted",
        typeClass: "quoted",
        tier: "Tier 2",
        tierClass: "tier2",
        date: "Jul 17, 2025",
        link: "https://zeenews.india.com/consumer-connect/how-to-select-career-using-birth-date-2933252.html",
    },
];
 
const tierStyles = {
    tier1: "bg-[rgba(232,101,10,0.12)] text-[var(--saffron)]",
    tier2: "bg-[rgba(201,146,12,0.12)] text-[var(--gold)]",
};
 
const badgeStyles = {
    authored: "bg-[rgba(232,101,10,0.10)] text-[var(--saffron)]",
    quoted: "bg-[rgba(201,146,12,0.12)] text-[var(--gold)]",
    featured: "bg-[rgba(44,26,14,0.07)] text-[var(--ink-mid)]",
    broadcast: "bg-[rgba(181,69,27,0.10)] text-[var(--terracotta)]",
};
 
const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});
 
const jost = Jost({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
});
 
export default function NewAstrologNews({ data }) {
    return (
        <>
            <style jsx>{`
                :global(:root) {
                    --saffron: #e8650a;
                    --saffron-light: #f2873a;
                    --gold: #c9920c;
                    --gold-light: #e8b84b;
                    --cream: #fdf6ec;
                    --cream-deep: #f7ebda;
                    --terracotta: #b5451b;
                    --ink: #2c1a0e;
                    --ink-mid: #5c3d22;
                    --ink-soft: #8b6344;
                    --divider: #e4c89a;
                    --white: #ffffff;
 
                    --font-display: var(--font-cormorant), Georgia, serif;
                    --font-body: var(--font-jost), sans-serif;
 
                    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
                }
            `}</style>
 
            <section className="relative overflow-hidden bg-[var(--ink)] px-6 pt-[100px] pb-20 text-center md:px-6">
                {/* Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(232,101,10,0.28)_0%,transparent_70%),radial-gradient(ellipse_60%_40%_at_30%_70%,rgba(201,146,12,0.18)_0%,transparent_60%)]" />
 
                {/* Mandala */}
                <svg
                    className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(600px,90vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <circle cx="200" cy="200" r="190" fill="none" stroke="white" strokeWidth="0.8" />
                    <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="0.5" />
                    <circle cx="200" cy="200" r="110" fill="none" stroke="white" strokeWidth="0.8" />
                    <circle cx="200" cy="200" r="70" fill="none" stroke="white" strokeWidth="0.5" />
                    <circle cx="200" cy="200" r="30" fill="none" stroke="white" strokeWidth="0.8" />
 
                    <g stroke="white" strokeWidth="0.5" fill="none">
                        <line x1="200" y1="10" x2="200" y2="390" />
                        <line x1="10" y1="200" x2="390" y2="200" />
                        <line x1="59" y1="59" x2="341" y2="341" />
                        <line x1="341" y1="59" x2="59" y2="341" />
                        <line x1="29" y1="130" x2="371" y2="270" />
                        <line x1="371" y1="130" x2="29" y2="270" />
                        <line x1="130" y1="29" x2="270" y2="371" />
                        <line x1="270" y1="29" x2="130" y2="371" />
                    </g>
 
                    <g fill="white" fillOpacity="0.6">
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                            <ellipse key={deg} cx="200" cy="110" rx="8" ry="20" transform={`rotate(${deg} 200 200)`} />
                        ))}
                    </g>
                </svg>
 
                {/* Content */}
                <div className="relative z-10">
                    {/* Eyebrow */}
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--gold-light)]">
                        <span className={`${jost.className} h-px w-10 bg-[var(--gold-light)] opacity-60`} />
                        Press & Media Coverage
                        <span className="h-px w-10 bg-[var(--gold-light)] opacity-60" />
                    </div>
 
                    {/* Heading */}
                    <h1
                        className={`${cormorant.className} mb-6 text-[clamp(42px,7vw,78px)] font-semibold leading-[1.1] text-[var(--cream)]`}
                    >
                        Trusted by <em className="italic text-[var(--gold-light)]">India&apos;s</em>
                        <br />
                        Leading Media
                    </h1>
 
                    {/* Subtext */}
                    <p className={`${jost.className} mx-auto mb-11 max-w-[680px] text-base font-light leading-[1.8] text-[rgba(253,246,236,0.75)]`}>
                        Dr. Vinay Bajrangi has been featured in, quoted by, and consulted by India&apos;s foremost
                        publications and broadcast media on matters of Vedic astrology, planetary transits, and life
                        predictions — for over 25 years.
                    </p>
 
                    {/* Bottom Rule */}
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--gold)]" />
 
                        <svg className="h-5 w-5 shrink-0 fill-[var(--gold)]" viewBox="0 0 24 24">
                            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                        </svg>
 
                        <span className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--gold)]" />
                    </div>
                </div>
            </section>
 
            <section className="bg-[linear-gradient(135deg,var(--saffron)_0%,var(--gold)_100%)] px-6 py-8">
                <div className="mx-auto grid max-w-[960px] grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div
                                className={`${cormorant.className} text-[44px] font-bold leading-none text-[var(--white)]`}
                            >
                                {stat.number}
                            </div>
                            <div className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.82)]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
 
            <section className="border-y border-[var(--divider)] bg-[var(--cream-deep)] px-6 py-14 text-center">
                {/* Label */}
                <p
                    className={`${jost.className} mb-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-soft)]`}
                >
                    As Seen &amp; Quoted In
                </p>
 
                {/* Logo Bar */}
                <div className="flex flex-wrap items-center justify-center gap-0">
                    {publications.map((publication, index) => (
                        <div
                            key={index}
                            className="flex min-w-[120px] md:min-w-[140px] items-center justify-center border-r border-b border-[var(--divider)] px-[18px] py-3 md:px-7 transition-colors duration-300 hover:bg-[var(--cream)] last:border-r-0"
                        >
                            <span
                                className={`${cormorant.className} whitespace-nowrap text-[17px] font-bold tracking-[0.02em] text-[var(--ink-mid)]`}
                            >
                                {publication}
                            </span>
                        </div>
                    ))}
                </div>
 
                {/* Notice */}
                <div
                    className={`${jost.className} mt-8 flex items-center justify-center gap-3 rounded border border-dashed border-[var(--divider)] px-6 py-5 text-[13px] text-[var(--ink-soft)]`}
                >
                    <svg
                        className="h-4 w-4 shrink-0 stroke-[var(--saffron)] fill-none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
 
                    <span>
                        Additional publication logos will be added as media links are verified and confirmed by the team.
                    </span>
                </div>
            </section>
 
            <section className="bg-[var(--cream)] px-6 py-20">
                <div className="mx-auto max-w-[1100px]">
                    {/* Section Header */}
                    <p
                        className={`${jost.className} mb-[10px] text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--saffron)]`}
                    >
                        Highlighted Features
                    </p>
 
                    <h2
                        className={`${cormorant.className} mb-4 text-[clamp(30px,4vw,48px)] font-semibold leading-[1.2] text-[var(--ink)]`}
                    >
                        Featured Coverage
                    </h2>
 
                    <p
                        className={`${jost.className} mb-12 max-w-[560px] text-[15px] leading-[1.8] text-[var(--ink-mid)]`}
                    >
                        Select articles where Dr. Bajrangi has authored expert columns, been quoted as a
                        Vedic astrology authority, or been profiled by a leading publication.
                    </p>
 
                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                        {cards.map((card, i) => (
                            <article
                                key={i}
                                className="group relative flex flex-col overflow-hidden rounded-[2px] border border-[var(--divider)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(44,26,14,0.10)]"
                            >
                                {/* top gradient */}
                                <div className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-[var(--saffron)] to-[var(--gold)] transition-transform duration-300 group-hover:scale-x-100" />
 
                                {/* Top */}
                                <div className="flex items-center justify-between border-b border-[var(--cream-deep)] px-6 pb-4 pt-6">
                                    <span
                                        className={`${cormorant.className} text-lg font-bold text-[var(--ink)]`}
                                    >
                                        {card.publication}
                                    </span>
 
                                    <span
                                        className={`${jost.className} rounded-[20px] px-[10px] py-1 text-[9px] font-semibold uppercase tracking-[0.15em] whitespace-nowrap ${badgeStyles[card.badgeType]}`}
                                    >
                                        {card.badge}
                                    </span>
                                </div>
 
                                {/* Body */}
                                <div className="flex-1 px-6 py-5">
                                    <h3
                                        className={`${cormorant.className} mb-[10px] text-[19px] font-semibold leading-[1.35] text-[var(--ink)]`}
                                    >
                                        {card.title}
                                    </h3>
 
                                    <p
                                        className={`${jost.className} text-[13.5px] leading-[1.7] text-[var(--ink-soft)]`}
                                    >
                                        {card.summary}
                                    </p>
                                </div>
 
                                {/* Footer */}
                                <div className="flex items-center justify-between border-t border-[var(--cream-deep)] px-6 py-4">
                                    <span
                                        className={`${jost.className} text-xs tracking-[0.05em] text-[var(--ink-soft)]`}
                                    >
                                        {card.date}
                                    </span>
 
                                    <a
                                        href={card.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`${jost.className} flex items-center gap-[5px] text-xs font-semibold tracking-[0.08em] text-[var(--saffron)] transition-all hover:gap-2`}
                                    >
                                        {card.cta}
                                        <svg
                                            className="h-3 w-3"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <line x1="7" y1="17" x2="17" y2="7" />
                                            <polyline points="7 7 17 7 17 17" />
                                        </svg>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
 
                    {/* Notice */}
                    <div
                        className={`${jost.className} mt-8 flex items-center justify-center gap-3 rounded border border-dashed border-[var(--divider)] px-6 py-5 text-center text-[13px] text-[var(--ink-soft)]`}
                    >
                        <svg
                            className="h-4 w-4 shrink-0 stroke-[var(--saffron)] fill-none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                        Featured coverage cards will be populated by the team as article links are verified. Replace placeholder text and href="#" with real data.
                    </div>
                </div>
            </section>
            <section className="bg-[var(--cream-deep)] px-6 py-20">
                <div className="mx-auto max-w-[1100px]">
                    {/* Header */}
                    <p
                        className={`${jost.className} mb-[10px] text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--saffron)]`}
                    >
                        Complete Record
                    </p>
 
                    <h2
                        className={`${cormorant.className} mb-4 text-[clamp(30px,4vw,48px)] font-semibold leading-[1.2] text-[var(--ink)]`}
                    >
                        Full Coverage Index
                    </h2>
 
                    <p
                        className={`${jost.className} mb-12 max-w-[560px] text-[15px] leading-[1.8] text-[var(--ink-mid)]`}
                    >
                        A comprehensive listing of all verified media appearances, expert quotes, and published
                        articles by Dr. Vinay Bajrangi.
                    </p>
 
                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="border-b-2 border-[var(--divider)]">
                                    {["Publication", "Headline / Topic", "Type", "Tier", "Year", "Link"].map(
                                        (heading, i) => (
                                            <th
                                                key={i}
                                                className={`${jost.className} px-4 py-[14px] text-left text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)]`}
                                            >
                                                {heading}
                                            </th>
                                        )
                                    )}
                                </tr>
                            </thead>
 
                            <tbody>
                                {rows.map((row, i) => (
                                    <tr
                                        key={i}
                                        className="border-b border-[var(--divider)] transition hover:bg-[rgba(232,101,10,0.04)]"
                                    >
                                        <td className="px-4 py-4">
                                            <span
                                                className={`${cormorant.className} text-base font-bold text-[var(--ink)]`}
                                            >
                                                {row.publication}
                                            </span>
                                        </td>
 
                                        <td
                                            className={`${jost.className} px-4 py-4 text-[var(--ink)]`}
                                        >
                                            {row.headline}
                                        </td>
 
                                        <td className="px-4 py-4">
                                            <span
                                                className={`${jost.className} rounded px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] ${badgeStyles[row.typeClass]}`}
                                            >
                                                {row.type}
                                            </span>
                                        </td>
 
                                        <td className="px-4 py-4">
                                            <span
                                                className={`${jost.className} rounded px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] ${tierStyles[row.tierClass]}`}
                                            >
                                                {row.tier}
                                            </span>
                                        </td>
 
                                        <td
                                            className={`${jost.className} px-4 py-4 text-[var(--ink-mid)]`}
                                        >
                                            {row.date}
                                        </td>
 
                                        <td className="px-4 py-4">
                                            <a
                                                href={row.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`${jost.className} inline-flex items-center gap-1 text-[13px] font-medium text-[var(--saffron)] hover:text-[var(--terracotta)]`}
                                            >
                                                Visit
                                                <svg
                                                    className="h-[11px] w-[11px] shrink-0"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <line x1="7" y1="17" x2="17" y2="7" />
                                                    <polyline points="7 7 17 7 17 17" />
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
 
                    {/* Notice */}
                    <div
                        className={`${jost.className} mt-6 flex items-center justify-center gap-3 rounded border border-dashed border-[var(--divider)] px-6 py-5 text-center text-[13px] text-[var(--ink-soft)]`}
                    >
                        <svg
                            className="h-4 w-4 shrink-0 stroke-[var(--saffron)] fill-none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
 
                        New rows are added by the team as each article URL is confirmed live.
                        Copy the &lt;tr&gt; template above and fill in all fields.
                    </div>
 
                    {/* Tier Guide */}
                    <div className="pt-10 text-center">
                        <p
                            className={`${jost.className} mt-5 text-xs leading-[1.8] text-[var(--ink-soft)]`}
                        >
                            <strong className="text-[var(--ink-mid)]">Tier Guide:</strong>{" "}
                            <span className="rounded bg-[rgba(232,101,10,0.12)] px-2 py-1 text-[9px] font-semibold uppercase text-[var(--saffron)]">
                                Tier 1
                            </span>{" "}
                            National media, 10M+ readership (ET, HT, TOI, NDTV, Aaj Tak, India Today)&nbsp;&nbsp;
                            <span className="rounded bg-[rgba(201,146,12,0.12)] px-2 py-1 text-[9px] font-semibold uppercase text-[var(--gold)]">
                                Tier 2
                            </span>{" "}
                           Respected niche, regional, or specialist publications
                        </p>
                    </div>
                </div>
            </section>
 
            <section className="relative overflow-hidden bg-[var(--ink)] px-6 py-20 text-center">
                {/* Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(232,101,10,0.18)_0%,transparent_70%)]" />
 
                <div className="relative mx-auto max-w-[1100px]">
                    <p
                        className={`${jost.className} mb-[10px] text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-light)]`}
                    >
                        For Journalists &amp; Producers
                    </p>
 
                    <h2
                        className={`${cormorant.className} mx-auto mb-4 max-w-[600px] text-[clamp(30px,4vw,48px)] font-semibold leading-[1.2] text-[var(--cream)]`}
                    >
                        Media &amp; Press Enquiries
                    </h2>
 
                    <p
                        className={`${jost.className} mx-auto mb-10 max-w-[580px] text-[15px] leading-[1.8] text-[rgba(253,246,236,0.72)]`}
                    >
                        Journalists, editors, and producers covering Vedic astrology, planetary transits,
                        annual predictions, marriage astrology, career guidance, or any related subject are
                        welcome to reach out to Dr. Vinay Bajrangi for expert commentary, quotes, or broadcast
                        appearances.
                    </p>
 
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* Primary Button */}
                        <a
                            href="https://www.vinaybajrangi.com/contact-us.php"
                            className={`${jost.className} inline-flex items-center gap-2 rounded-[2px] bg-[linear-gradient(135deg,var(--saffron),var(--gold))] px-8 py-[14px] text-[13px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_6px_24px_rgba(232,101,10,0.35)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(232,101,10,0.45)]`}
                        >
                            <svg
                                className="h-[14px] w-[14px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Send a Press Enquiry
                        </a>
 
                        {/* Outline Button */}
                        <a
                            href="https://www.vinaybajrangi.com/about-dr-vinay-bajrangi.php"
                            className={`${jost.className} inline-flex items-center rounded-[2px] border border-[rgba(253,246,236,0.3)] px-8 py-[14px] text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--cream)] transition-all duration-300 hover:border-[rgba(253,246,236,0.6)] hover:bg-[rgba(253,246,236,0.07)]`}
                        >
                            About Dr. Bajrangi
                        </a>
                    </div>
                </div>
            </section>
 
            <div
                className={`${jost.className} border-t border-[var(--divider)] bg-[var(--cream-deep)] px-6 py-6 text-center text-xs text-[var(--ink-soft)]`}
            >
                All media coverage listed on this page is third-party editorial and has not been paid for or
                sponsored. Publication logos are used as reference only and remain the property of their
                respective owners. For link corrections or removal requests, please{" "}
                <a href="https://www.vinaybajrangi.com/contact-us.php" className="text-[var(--saffron)]">
                    contact the team
                </a>
                .
            </div>
        </>
    );
}