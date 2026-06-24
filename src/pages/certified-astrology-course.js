import React, { useState } from "react";
import { Cinzel, Cormorant_Garamond, DM_Sans } from "next/font/google";
import {
    Award,
    BookOpen,
    FileText,
    Video,
    Calendar,
    Users,
    ChevronRight,
    Play,
    Star,
    Compass,
    TrendingUp,
    Flame,
    Trophy,
    MessageCircle,
    Briefcase,
    Crown,
    X,
    Lock,
} from "lucide-react";
import { Sparkles, ShieldCheck, BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
    {
        icon: BookOpen,
        title: "Practical Learning",
    },
    {
        icon: Video,
        title: "Recorded",
    },
    {
        icon: FileText,
        title: "Real-life Case Analysis",
    },
    {
        icon: Award,
        title: "Get Certificate",
    },
];

const batchDetails = [
    {
        icon: Calendar,
        label: "Next Batch",
        value: "15 June 2026 (Monday)",
    },
    {
        icon: Users,
        label: "Limited Seats",
        value: "Only 100 Available",
    },
];

const mediaLogos = [
    { name: "Hindustan Times", img: "/img/media-coverage/hindutan-times.webp" },
    { name: "Mid-Day", img: "/img/media-coverage/mid-day.webp" },
    { name: "Zee News", img: "/img/media-coverage/z-newshindi.webp" },
    { name: "Amar Ujala", img: "/img/media-coverage/amar-ujala.webp" },
    { name: "The Week", img: "/img/media-coverage/The-Week-Logo-Big.webp" },
    {
        name: "Press Trust India",
        img: "/img/media-coverage/press-trust-india.webp",
    },
    { name: "OneIndia", img: "/img/media-coverage/oneindia-lm-logo.webp" },
    { name: "OpenPR", img: "/img/media-coverage/openpr-logo-slogan.webp" },
    {
        name: "Tribun Gorontalo",
        img: "/img/media-coverage/TribunGorontalo.webp",
    },
    { name: "News", img: "/img/media-coverage/cropped-logo.webp" },
];

const stats = [
    {
        icon: Award,
        text: "15,000+ Students Trained",
    },
    {
        icon: Star,
        text: "4.9 / 5 Average Rating",
    },
    {
        icon: BadgeCheck,
        text: "Certified Jyotish Programs",
    },
    {
        icon: ShieldCheck,
        text: "Secure Enrollment",
    },
    {
        icon: Sparkles,
        text: "Stage-Based Learning",
    },
];

const stages = [
    {
        badge: "Beginner",
        stage: "Stage 1",
        title: "The Curious Beginner",
        icon: Compass,
        description:
            "You've heard of zodiac signs. You may have read articles or watched videos. But you've never formally studied a Vedic chart.",
        levels: ["Level 1: Foundation"],
        strategy:
            "Start from absolute basics. Build a strong base before anything else.",
    },
    {
        badge: "Practitioner",
        stage: "Stage 2",
        title: "The Aspiring Practitioner",
        icon: Briefcase,
        description:
            "You understand planets and houses, can read a basic chart, and want to develop predictive accuracy and consultation skill.",
        levels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
        strategy: "Build predictive ability across Graduate + PG progression.",
    },
    {
        badge: "Master",
        stage: "Stage 3",
        title: "The Future Master",
        icon: Crown,
        description:
            "You have working knowledge and consult clients. You're ready for advanced research, Pre-PhD, and PhD-level Jyotish mastery.",
        levels: ["Pre-PhD (1 → 2 Level)", "PhD (2 Level)"],
        strategy:
            "Specialize in research, rare yogas, and authoritative practice.",
    },
];

const coursesData = [
    {
        stage: "STAGE 1",
        icon: "/img/certified-astrology/lotus.png",
        footerIcon: "book",

        bgGradient:
            "linear-gradient(180deg, #001F70 0%, #00164D 45%, #000C2A 100%)",

        title: "Graduate in Jyotish",
        subtitle: "Vedic Astrology Mastery",
        tagline: "From Foundations to Professional Practice",
        quote: "The Complete Professional Astrology Programme",

        footerText: "From Student to Jyotish Practitioner.",

        content: [
            {
                heading: "Graduation",
                items: [
                    "Jyotish Beej — Foundation Level",
                    "Jyotish Ankur — Intermediate Level",
                    "Jyotish Pallav — Advanced Level",
                ],
            },
        ],
    },

    {
        stage: "STAGE 2",
        icon: "/img/certified-astrology/om.png",
        footerIcon: "leaf",

        bgGradient:
            "linear-gradient(180deg, #00463C 0%, #002E27 45%, #001510 100%)",

        title: "Post Graduation in Jyotish",
        subtitle: "From Beej to Pushpa",
        tagline: "Your Journey to Post Graduation in Vedic Astrology",
        quote: "The Complete Jyotish Learning Path",

        footerText: "Where the Seeds of Astrology Grow into Jyotish Mastery.",

        content: [
            {
                heading: "Graduation",
                items: [
                    "Jyotish Beej (Foundation)",
                    "Jyotish Ankur (Early Learning)",
                    "Jyotish Pallav (Intermediate Level)",
                ],
            },
            {
                heading: "Post-Graduation",
                items: ["Jyotish Taru", "Jyotish Pushpa"],
            },
        ],
    },

    {
        stage: "STAGE 3",
        icon: "/img/certified-astrology/yantra.png",
        footerIcon: "graduation",

        bgGradient:
            "linear-gradient(180deg, #44138A 0%, #2A0B58 45%, #16052F 100%)",

        title: "Pre-PhD Programme in Jyotish",
        subtitle: "Jyotish Vriksha",
        tagline: "From Knowledge to Astrological Scholarship",
        quote: "Jyotish Vriksha — Pre-PhD in Vedic Astrology",

        footerText: "From Jyotish Study to Jyotish Scholarship.",

        content: [
            {
                heading: "Graduation",
                items: [
                    "Jyotish Beej (Foundation)",
                    "Jyotish Ankur (Early Learning)",
                    "Jyotish Pallav (Intermediate Level)",
                ],
            },
            {
                heading: "Post Graduation",
                items: ["Jyotish Taru", "Jyotish Pushpa"],
            },
            {
                heading: "Pre-PhD",
                items: ["Vriksha", "Bhrigu Chakra Paddhati"],
            },
        ],
    },
];

// Data Array for the Core Learning Path Stages
const coreStages = [
    {
        stage: "Stage 1",
        num: "01",
        name: "Jyotish Beej",
        desc: "Foundation Level",
    },
    {
        stage: "Stage 1",
        num: "02",
        name: "Jyotish Ankur",
        desc: "Early Learning",
    },
    {
        stage: "Stage 1",
        num: "03",
        name: "Jyotish Pallav",
        desc: "Intermediate Level",
    },
    {
        stage: "Stage 2",
        num: "04",
        name: "Jyotish Taru",
        desc: "Post Graduate",
    },
    {
        stage: "Stage 2",
        num: "05",
        name: "Jyotish Pushpa",
        desc: "Master in Post Graduate",
    },
    {
        stage: "Stage 3",
        num: "06",
        name: "Jyotish Vriksha",
        desc: "Pre-PhD · Bhrigu Chakra",
    },
];

// Data Array for the Specialty Library
const specialtyCourses = [
    {
        title: "Romance, Love & Lust in Astrology",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx="4" cy="20" r="2" />
            </svg>
        ),
    },
    {
        title: "Curses in Horoscope",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
            </svg>
        ),
    },
    {
        title: "Badha in Your Horoscope",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Ultra Beginner Program",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
            </svg>
        ),
    },
    {
        title: "Reading Past Life",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            </svg>
        ),
    },
    {
        title: "Reading Mangal Dosha",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
            </svg>
        ),
    },
    {
        title: "Black Magic, Evil Eye & Remedies",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Transit Mastery — Gochar",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="M16 7h6v6" />
                <path d="m22 7-8.5 8.5-5-5L2 17" />
            </svg>
        ),
    },
    {
        title: "Astrology of Death & Ayu Nirnaya",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
                <path d="M5 21h14" />
            </svg>
        ),
    },
    {
        title: "Kaal Sarp Yoga — Truth & Remedies",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx="4" cy="20" r="2" />
            </svg>
        ),
    },
    {
        title: "Subject Selection Astrology",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
        ),
    },
    {
        title: "Muhurta Course",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
    },
    {
        title: "Crash Course on Remedies",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                <circle cx="12" cy="8" r="6" />
            </svg>
        ),
    },
    {
        title: "Instant Prashna — Clock-Time Decoding",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
            </svg>
        ),
    },
    {
        title: "Marriage Matchmaking & Kundli",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="9" cy="7" r="4" />
            </svg>
        ),
    },
    {
        title: "Career & Business Astrology",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
                aria-hidden="true"
            >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
        ),
    },
];

const earningsMetrics = [
    {
        label: "Beginner Practitioner",
        range: "₹40K – ₹80K /mo",
        fillWidth: "w-[45%]",
    },
    {
        label: "Established Astrologer",
        range: "₹1.2L – ₹1.8L /mo",
        fillWidth: "w-[70%]",
    },
    {
        label: "Master / Celebrity Consult",
        range: "₹2.5L – ₹4L+ /mo",
        fillWidth: "w-[95%]",
    },
];

const opportunityCards = [
    {
        title: "1-on-1 Consultations",
        desc: "Charge ₹2,100–₹11,000 per detailed reading",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
            </svg>
        ),
    },
    {
        title: "Group Workshops & Webinars",
        desc: "Host paid masterclasses for serious seekers",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="9" cy="7" r="4" />
            </svg>
        ),
    },
    {
        title: "Corporate & Celebrity Clients",
        desc: "High-ticket retainer & event-based work",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
        ),
    },
    {
        title: "Global Online Practice",
        desc: "Serve Indian diaspora worldwide via Zoom",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
            </svg>
        ),
    },
];

// Data for the 3 main flagship benefit cards
const primaryBenefits = [
    {
        badge: "Lifetime",
        title: "Recorded Classes",
        desc: "Lifetime access to every recorded session — learn at your pace, rewatch any concept anytime.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[oklch(0.14_0.04_270)]"
                aria-hidden="true"
            >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
            </svg>
        ),
    },
    {
        badge: "Downloadable",
        title: "Comprehensive Study PDFs",
        desc: "Detailed notes, classical references, and worksheets for every module — downloadable for life.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[oklch(0.14_0.04_270)]"
                aria-hidden="true"
            >
                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
            </svg>
        ),
    },
    {
        badge: "Certified",
        title: "Certificate of Completion",
        desc: "Industry-recognized certificate from Dr. Vinay Bajrangi's academy — proudly displayed by 15,000+ alumni.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[oklch(0.14_0.04_270)]"
                aria-hidden="true"
            >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                <circle cx="12" cy="8" r="6" />
            </svg>
        ),
    },
];

// Data for the 8 smaller secondary ecosystem items
const ecosystemFeatures = [
    {
        tag: "2× /mo",
        title: "Live Q&A Sessions",
        desc: "Monthly live sessions where Dr. Bajrangi personally answers your questions.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    color: "#D4AF37",
                    opacity: 1,
                }}
            >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
            </svg>
        ),
    },
    {
        tag: "Members-only",
        title: "Private Community",
        desc: "Join a private circle of 15,000+ serious students and certified practitioners.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    color: "#D4AF37",
                    opacity: 1,
                }}
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="9" cy="7" r="4" />
            </svg>
        ),
    },
    {
        tag: "100+ Cases",
        title: "Real Case Studies",
        desc: "Learn from 100+ actual horoscopes analyzed step-by-step in detail.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    color: "#D4AF37",
                    opacity: 1,
                }}
            >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            </svg>
        ),
    },
    {
        tag: "Auto-graded",
        title: "Module Quizzes",
        desc: "Test your knowledge and track your progress with auto-graded assessments.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    color: "#D4AF37",
                    opacity: 1,
                }}
            >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
    {
        tag: "Library",
        title: "Classical Reference Library",
        desc: "Access to curated Parashari, Jaimini and rare classical texts in PDF.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    color: "#D4AF37",
                    opacity: 1,
                }}
            >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
            </svg>
        ),
    },
    {
        tag: "Audio",
        title: "Audio Mode for Travel",
        desc: "Convert any class into audio for learning on the go.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    color: "#D4AF37",
                    opacity: 1,
                }}
            >
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
            </svg>
        ),
    },
    {
        tag: "Worldwide",
        title: "Global Student Base",
        desc: "Network with students across India, USA, UK, UAE, Singapore &amp; Australia.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    color: "#D4AF37",
                    opacity: 1,
                }}
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
            </svg>
        ),
    },
    {
        tag: "Future-proof",
        title: "Lifetime Curriculum Updates",
        desc: "Get every future update to the course at no extra cost — ever.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    color: "#D4AF37",
                    opacity: 1,
                }}
            >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
];

const journeySteps = [
    {
        number: "01",
        title: "Watch the Video",
        description:
            "Know your current astrology stage with our short eligibility video.",
        icon: Play,
    },
    {
        number: "02",
        title: "Choose Your Course",
        description: "Pick the right program based on your stage and goals.",
        icon: Compass,
    },
    {
        number: "03",
        title: "Complete the Course",
        description:
            "Attend recorded sessions, complete assignments & case studies.",
        icon: BookOpen,
    },
    {
        number: "04",
        title: "Get Certified",
        description: "Receive your industry-recognized completion certificate.",
        icon: Award,
    },
    {
        number: "05",
        title: "Start Earning",
        description:
            "Begin consulting and build your career as a practitioner.",
        icon: TrendingUp,
    },
];

const bioStatsData = [
    { value: "15K+", label: "Students" },
    { value: "25+", label: "Years" },
    { value: "5⭐", label: "Rated" },
];

const socialLinks = [
    { name: "YouTube", href: "https://www.youtube.com/@drvinaybajrangiji" },
    { name: "Instagram", href: "https://www.instagram.com/drvinaybajrangi" },
    { name: "Facebook", href: "https://www.facebook.com/ptVinayBajrangi" },
    { name: "Twitter", href: "https://twitter.com/drvinaybajrangi" },
];

const chooseUsFeatures = [
    {
        icon: Sparkles,
        title: "Authentic Vedic Methodology",
        description:
            "Pure Parashari & Jaimini systems — no modern dilution, no shortcuts.",
    },
    {
        icon: Flame,
        title: "Proven Teaching Framework",
        description:
            "A stage-based architecture refined across 25 years and 15,000+ students.",
    },
    {
        icon: MessageCircle,
        title: "Personal Mentorship",
        description:
            "Direct Q&A access to Dr. Bajrangi — not a faceless platform.",
    },
    {
        icon: Trophy,
        title: "Real Practitioner Outcomes",
        description:
            "Graduates running successful consulting practices across India.",
    },
    {
        icon: ShieldCheck,
        title: "Stage-Based, Not One-Size",
        description:
            "Every student starts at their actual level — not a generic syllabus.",
    },
    {
        icon: Briefcase,
        title: "Career-Ready Outcomes",
        description:
            "We don't just teach — we prepare you to consult and earn.",
    },
];

const testimonialsData = [
    {
        initial: "P",
        name: "Priya Sharma",
        role: "Practising Astrologer · Delhi",
        quote: "I started as a complete beginner. After completing the Graduate course, I now run my own consultation practice. Dr. Bajrangi's stage-based teaching is the reason I succeeded.",
    },
    {
        initial: "R",
        name: "Rajesh Kumar",
        role: "PG Graduate · Mumbai",
        quote: "I had studied astrology from 3 other teachers before. Nothing came close to Dr. Bajrangi's depth, clarity, and authenticity. The Post Graduate course transformed my predictive accuracy.",
    },
    {
        initial: "A",
        name: "Anita Verma",
        role: "Pre-PhD Student · Bangalore",
        quote: "The level of research and classical reference in this program is unmatched anywhere in India. I'm now writing my own astrology book under his mentorship.",
    },
];

const celebrities = [
    { img: "/img/celebrity/Abhishek kar.webp" },
    { img: "/img/celebrity/Amiett.webp" },
    { img: "/img/celebrity/Bhanu.webp" },
    { img: "/img/celebrity/capital-tv.webp" },
    { img: "/img/celebrity/Deepak-chaurasia.webp" },
    { img: "/img/celebrity/Deepak.webp" },
    { img: "/img/celebrity/Divas.webp" },
    { img: "/img/celebrity/Lucky.webp" },
    { img: "/img/celebrity/shubhankar.webp" },
    { img: "/img/celebrity/Siddharth.webp" },
    { img: "/img/celebrity/Sonu-Sharma.webp" },
    { img: "/img/celebrity/Skt.webp" },
    { img: "/img/celebrity/sudesh.webp" },
    { img: "/img/celebrity/Sushant-sinha.webp" },
];

const faqData = [
    {
        question: "Do I need any prior knowledge of astrology?",
        answer: "Not at all. Our Graduate course starts from absolute zero — designed for complete beginners. The stage-based approach ensures you start at your true level.",
    },
    {
        question: "How are the classes conducted?",
        answer: "Classes are delivered via a high-end structured online platform. You get access to pre-recorded HD video modules alongside regularly scheduled live interactive touchpoints.",
    },
    {
        question: "Will I get a certificate after the course?",
        answer: "Yes, an authentic, industry-recognized Certificate of Completion from Dr. Vinay Bajrangi's official academy will be issued upon passing the modular assessments.",
    },
    {
        question: "Can I really earn after this course?",
        answer: "Absolutely. The curriculum is built to transition you from core concepts into a professional consultant, covering monetization paths like consultations, corporate retainers, and global Zoom clinics.",
    },
    {
        question: "What is the duration of each course?",
        answer: "Course tracks vary depending on depth. Foundation tracks span a few months, whereas full deep-dive professional certification tracks scale based on your individual learning speed.",
    },
    {
        question: "Do I get to interact with Dr. Bajrangi directly?",
        answer: "Yes! While the core theory modules are recorded for your round-the-clock convenience, Dr. Bajrangi personally hosts live Q&A support clinics twice every month.",
    },
    {
        question: "What languages are the classes in?",
        answer: "The technical material is simplified and delivered across comfortable, accessible combinations of clear Hindi and English terminology suitable for global students.",
    },
    {
        question: "How do I know which course is right for me?",
        answer: "If you are starting out, the Foundation track is best. For advanced practitioners, our specialty library or Pre-PhD path applies. You can also chat with our counseling team.",
    },
    {
        question: "Is there a payment plan available?",
        answer: "Yes, flexible, budget-friendly financing structures and easy EMI payment alternatives are fully available at the checkout screen for all major course paths.",
    },
    {
        question: "What if I miss a class?",
        answer: "No problem at all. Since every dynamic enrollment tier comes packed with native lifetime library access, all class materials and recordings remain accessible inside your private dashboard.",
    },
];

const cinzel = Cinzel({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function CertifiedAstrologyCourse({ data }) {
    const [openIndex, setOpenIndex] = useState(0); // Sets the first item open by default as per your original HTML snippet
    const [showEligibilityModal, setShowEligibilityModal] = useState(false);
    const [modalStep, setModalStep] = useState(1);

    const handleEligibilitySubmit = (e) => {
        e.preventDefault();

        // form validation or API call later
        setModalStep(2); // move to payment step
    };

    const handlePayment = () => {
        // Razorpay later here
        setModalStep(3); // move to video step
    };

    const EligibilityModal = () => {
        if (!showEligibilityModal) return null;

        return (
            <div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
                style={{
                    background: "oklch(0.20 0.04 265 / 0.75)",
                }}
            >
                <div
                    className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl"
                    style={{
                        background: "var(--surface-card)",
                        border: "1px solid oklch(82% 0.15 80 / 0.4)",
                        boxShadow: "0 30px 80px rgba(0,0,0,.55)",
                    }}
                >
                    {/* Close */}
                    <button
                        onClick={() => setShowEligibilityModal(false)}
                        className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition"
                        style={{
                            background: "var(--surface-lift)",
                            border: "1px solid var(--border)",
                            color: "var(--muted-ink)",
                        }}
                    >
                        <X size={18} />
                    </button>

                    <div className="p-8 md:p-12">
                        {/* STEP 1 */}
                        {modalStep === 1 && (
                            <>
                                <div className="text-center mb-7">
                                    <div
                                        className={`${cinzel.className} inline-block px-3 py-1 mb-4 text-[10px] tracking-[0.25em] uppercase rounded-full`}
                                        style={{
                                            color: "var(--gold)",
                                            border: "1px solid oklch(82% 0.15 80 / 0.4)",
                                        }}
                                    >
                                        Course Eligibility
                                    </div>

                                    <h3
                                        className={`${cinzel.className} text-2xl md:text-3xl mb-3`}
                                        style={{ color: "var(--ink)" }}
                                    >
                                        Know Your Eligibility for the Course
                                    </h3>

                                    <p
                                        className={`${cormorant.className} italic text-[15px] md:text-base max-w-lg mx-auto leading-relaxed`}
                                        style={{ color: "var(--muted-ink)" }}
                                    >
                                        Fill the form below and instantly unlock
                                        the eligibility video.
                                    </p>
                                </div>

                                <form
                                    className="grid md:grid-cols-2 gap-4"
                                    onSubmit={handleEligibilitySubmit}
                                >
                                    <label className="block">
                                        <span
                                            className={`${cinzel.className} block text-[10px] uppercase mb-2`}
                                        >
                                            Full Name
                                        </span>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-lg"
                                        />
                                    </label>

                                    <label className="block">
                                        <span
                                            className={`${cinzel.className} block text-[10px] uppercase mb-2`}
                                        >
                                            Email Address
                                        </span>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg"
                                        />
                                    </label>

                                    <label className="block">
                                        <span
                                            className={`${cinzel.className} block text-[10px] uppercase mb-2`}
                                        >
                                            Mobile Number
                                        </span>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-4 py-3 rounded-lg"
                                        />
                                    </label>

                                    <label className="block">
                                        <span
                                            className={`${cinzel.className} block text-[10px] uppercase mb-2`}
                                        >
                                            Date of Birth
                                        </span>
                                        <input
                                            type="date"
                                            required
                                            className="w-full px-4 py-3 rounded-lg"
                                        />
                                    </label>

                                    <button
                                        type="submit"
                                        className={`${cinzel.className} md:col-span-2 mt-2 px-8 py-4 rounded-xl flex items-center justify-center gap-2`}
                                        style={{
                                            background: "var(--gradient-gold)",
                                            color: "black",
                                        }}
                                    >
                                        Unlock Eligibility Video
                                        <ChevronRight size={18} />
                                    </button>

                                    <p
                                        className={`${dmSans.className} md:col-span-2 text-center text-[11px] mt-1`}
                                    >
                                        🔒 Your details are 100% private.
                                    </p>
                                </form>
                            </>
                        )}

                        {/* STEP 2 */}
                        {modalStep === 2 && (
                            <div className="text-center py-4 md:py-8">
                                {/* Lock Icon */}
                                <div
                                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                                    style={{
                                        border: "1px solid rgba(212,175,55,0.45)",
                                        background: "rgba(212,175,55,0.06)",
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#D4AF37"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="4"
                                            y="11"
                                            width="16"
                                            height="9"
                                            rx="2"
                                        />
                                        <path d="M8 11V8a4 4 0 1 1 8 0v3" />
                                    </svg>
                                </div>

                                {/* Heading */}
                                <h2
                                    className={`${cinzel.className} text-3xl leading-tight mb-4`}
                                    style={{ color: "var(--ink)" }}
                                >
                                    Almost There — Complete Your
                                    <br />
                                    Enrollment
                                </h2>

                                {/* Subtitle */}
                                <p
                                    className={`${cormorant.className} italic text-lg max-w-2xl mx-auto mb-10`}
                                    style={{ color: "var(--muted-ink)" }}
                                >
                                    Complete a one-time enrollment to unlock the
                                    full eligibility video library and proceed
                                    to your personalized course path
                                </p>

                                {/* Pricing Card */}
                                <div
                                    className="max-w-xl mx-auto rounded-2xl p-6 md:p-8 mb-8"
                                    style={{
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(212,175,55,0.25)",
                                    }}
                                >
                                    <div
                                        className="flex justify-between items-center pb-4 mb-4"
                                        style={{
                                            borderBottom:
                                                "1px solid rgba(212,175,55,0.15)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: "var(--muted-ink)",
                                            }}
                                        >
                                            Eligibility Assessment
                                        </span>

                                        <span
                                            className="font-semibold"
                                            style={{ color: "var(--ink)" }}
                                        >
                                            ₹499
                                        </span>
                                    </div>

                                    <div
                                        className="flex justify-between items-center pb-4 mb-4"
                                        style={{
                                            borderBottom:
                                                "1px solid rgba(212,175,55,0.15)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: "var(--muted-ink)",
                                            }}
                                        >
                                            Personal Stage Report
                                        </span>

                                        <span
                                            className="font-semibold"
                                            style={{ color: "#D4AF37" }}
                                        >
                                            Included
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span
                                            className={`${cinzel.className} uppercase text-lg`}
                                            style={{ color: "var(--ink)" }}
                                        >
                                            Total
                                        </span>

                                        <span
                                            className={`${cinzel.className} text-4xl`}
                                            style={{ color: "#D4AF37" }}
                                        >
                                            ₹499
                                        </span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <button
                                    onClick={handlePayment}
                                    className={`${cinzel.className} px-12 py-5 rounded-2xl text-sm uppercase tracking-[2px] transition hover:scale-105`}
                                    style={{
                                        background: "var(--gradient-gold)",
                                        color: "#111827",
                                        minWidth: "280px",
                                    }}
                                >
                                    Pay Securely & Unlock →
                                </button>

                                {/* Footer */}
                                <p
                                    className={`${dmSans.className} mt-5 text-xs`}
                                    style={{ color: "var(--muted-ink)" }}
                                >
                                    Secured by Razorpay · 256-bit encryption
                                </p>
                            </div>
                        )}

                        {/* STEP 3 */}
                        {modalStep === 3 && (
                            <div className="text-center py-2">
                                {/* Badge */}
                                <div
                                    className={`${cinzel.className} inline-flex items-center gap-2 px-4 py-1 rounded-full mb-5 text-[10px] tracking-[0.2em] uppercase`}
                                    style={{
                                        color: "#D4AF37",
                                        border: "1px solid rgba(212,175,55,0.4)",
                                        background: "rgba(212,175,55,0.05)",
                                    }}
                                >
                                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                                    Eligibility Video Unlocked
                                </div>

                                {/* Heading */}
                                <h2
                                    className={`${cinzel.className} text-3xl leading-tight mb-3`}
                                    style={{ color: "var(--ink)" }}
                                >
                                    Are You Eligible to Learn Astrology?
                                </h2>

                                {/* Duration */}
                                <p
                                    className={`${dmSans.className} text-sm mb-8`}
                                    style={{ color: "var(--muted-ink)" }}
                                >
                                    Duration: 12:47
                                </p>

                                {/* Video Container */}
                                <div
                                    className="rounded-2xl overflow-hidden mb-8"
                                    style={{
                                        border: "1px solid rgba(212,175,55,0.35)",
                                        background: "rgba(255,255,255,0.03)",
                                    }}
                                >
                                    <video
                                        controls
                                        className="w-full aspect-video bg-black"
                                    >
                                        <source
                                            src="/videos/eligibility.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>

                                {/* Description */}
                                <p
                                    className={`${cormorant.className} text-lg leading-relaxed max-w-2xl mx-auto mb-8`}
                                    style={{ color: "var(--muted-ink)" }}
                                >
                                    A complete walk-through by Dr. Vinay
                                    Bajrangi — discover your true starting point
                                    and the right course for your stage.
                                </p>

                                {/* CTA */}
                                <button
                                    className={`${cinzel.className} w-full py-5 rounded-2xl text-sm uppercase tracking-[2px]`}
                                    style={{
                                        background: "var(--gradient-gold)",
                                        color: "#111827",
                                    }}
                                >
                                    Continue to Choose Your Course →
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const CardIcon = ({ type }) => {
        const stroke = "#D4AF37";

        switch (type) {
            case "lotus":
                return (
                    <img
                        src="/img/certified-astrology/lotus.png"
                        alt="Lotus"
                        className="w-20 h-20 object-contain"
                    />
                );

            case "om":
                return (
                    <img
                        src="img/certified-astrology/om.png"
                        alt="Om"
                        className="w-20 h-20 object-contain"
                    />
                );

            case "yantra":
                return (
                    <img
                        src="img/certified-astrology/yantra.png"
                        alt="Yantra"
                        className="w-20 h-20 object-contain"
                    />
                );
            case "book":
                return (
                    <svg viewBox="0 0 24 24" className="w-12 h-12">
                        <g fill="none" stroke={stroke} strokeWidth="1.8">
                            <path d="M3 5h7a3 3 0 0 1 3 3v11H6a3 3 0 0 0-3 3V5z" />
                            <path d="M21 5h-7a3 3 0 0 0-3 3v11h7a3 3 0 0 1 3 3V5z" />
                        </g>
                    </svg>
                );

            case "leaf":
                return (
                    <svg viewBox="0 0 24 24" className="w-12 h-12">
                        <g fill="none" stroke={stroke} strokeWidth="1.8">
                            <path d="M19 5c-6 1-10 5-11 12" />
                            <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" />
                        </g>
                    </svg>
                );

            case "graduation":
                return (
                    <svg viewBox="0 0 24 24" className="w-12 h-12">
                        <g fill="none" stroke={stroke} strokeWidth="1.8">
                            <path d="m2 9 10-5 10 5-10 5-10-5Z" />
                            <path d="M6 11v5c0 2 3 4 6 4s6-2 6-4v-5" />
                            <path d="M22 10v6" />
                        </g>
                    </svg>
                );

            default:
                return null;
        }
    };

    const topIcons = ["lotus", "om", "yantra"];
    const footerIcons = ["book", "leaf", "graduation"];

    return (
        <>
            <style jsx>{`
                :global(:root) {
                    --background: oklch(16% 0.035 265);
                    --foreground: oklch(96% 0.012 85);

                    --ink: oklch(98% 0.01 85);
                    --muted-ink: oklch(78% 0.02 85);

                    --surface-card: oklch(21% 0.04 265);
                    --surface-mid: oklch(18.5% 0.038 265);
                    --surface-lift: oklch(26% 0.045 268);

                    --gold: oklch(82% 0.15 80);
                    --gold-light: oklch(88% 0.13 85);
                    --gold-pale: oklch(30% 0.06 80);

                    --card: var(--surface-card);
                    --card-foreground: var(--ink);

                    --popover: var(--surface-card);
                    --popover-foreground: var(--ink);

                    --primary: var(--gold);
                    --primary-foreground: oklch(16% 0.035 265);

                    --secondary: var(--surface-lift);
                    --secondary-foreground: var(--ink);

                    --muted: var(--surface-lift);
                    --muted-foreground: var(--muted-ink);

                    --accent: var(--gold);
                    --accent-foreground: oklch(16% 0.035 265);

                    --destructive: oklch(65% 0.22 25);
                    --destructive-foreground: oklch(98% 0.01 90);

                    --border: oklch(82% 0.15 80 / 0.18);
                    --input: oklch(82% 0.15 80 / 0.28);

                    --ring: var(--gold);

                    --gradient-gold: linear-gradient(
                        135deg,
                        oklch(78% 0.14 75) 0%,
                        oklch(90% 0.13 85) 50%,
                        oklch(74% 0.15 65) 100%
                    );
                    --gradient-hero: linear-gradient(
                        160deg,
                        oklch(14% 0.04 270) 0%,
                        oklch(19% 0.05 275) 50%,
                        oklch(16% 0.04 265) 100%
                    );
                    --gradient-radial-gold: radial-gradient(
                        ellipse at center,
                        oklch(82% 0.15 80 / 0.22),
                        transparent 70%
                    );
                    --gradient-ink: linear-gradient(
                        180deg,
                        oklch(8% 0.03 265 / 0.85),
                        oklch(8% 0.03 265 / 0)
                    );
                }

                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                :global(.animate-marquee) {
                    animation: marquee 30s linear infinite;
                }

                @keyframes floatSlow {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-12px);
                    }
                }

                .animate-float-slow {
                    animation: floatSlow 4s ease-in-out infinite;
                }

                @keyframes ripple {
                    0% {
                        transform: scale(1);
                        opacity: 0.7;
                    }
                    70% {
                        transform: scale(1.45);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1.45);
                        opacity: 0;
                    }
                }

                .animate-ripple {
                    animation: ripple 2s infinite ease-out;
                }
            `}</style>

            {/* Header */}
            <header className="w-full bg-[#020c26] border-b border-[#8f6a2f]/40">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="h-[74px] flex items-center justify-between">
                        {/* Left Logo Section */}
                        <div className="flex items-center">
                            <Link href="https://www.vinaybajrangi.com/">
                                <div className="w-[60px] h-[60px] rounded-full border-2 border-[#d89b3d] overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/img/logo.webp"
                                        alt="Logo"
                                        width={60}
                                        height={60}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                            </Link>
                        </div>
                        {/* Center Menu */}
                        <nav className="hidden lg:flex items-center gap-10">
                            {[
                                "Stages",
                                "Courses",
                                "Journey",
                                "Students",
                                "FAQ",
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-[#c4c4c4] hover:text-[#d89b3d] text-sm uppercase tracking-wide transition"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>

                        {/* Right Button */}
                        <button className="bg-[#d89b3d] hover:bg-[#c98f34] text-black px-8 py-4 rounded-2xl text-sm font-medium uppercase transition">
                            Know Your Stage
                        </button>
                    </div>
                </div>
            </header>

            <div className="w-full bg-[#d89b3d] text-black py-1 overflow-hidden">
                <div
                    className={`${cinzel.className} text-center text-base tracking-[1px] font-medium uppercase font-serif`}
                >
                    ★ New Batch Opens 15 June 2026 · Only 100 Seats · Certified
                    Vedic Astrology Programs ★
                </div>
            </div>

            {/* Hero Section */}
            <section
                className="relative overflow-hidden py-10 md:py-10"
                style={{
                    background: "var(--gradient-hero)",
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: "var(--gradient-radial-gold)",
                    }}
                />

                <Image
                    src="/img/certified-astrology/hero-bg.png"
                    alt=""
                    width={680}
                    height={680}
                    className="absolute -right-40 -top-32 w-[680px] max-w-none opacity-10 pointer-events-none select-none animate-float"
                />

                <Image
                    src="/img/certified-astrology/hero-bg-1.png"
                    alt=""
                    width={1200}
                    height={600}
                    className="absolute bottom-0 left-0 w-[60%] opacity-30 pointer-events-none select-none"
                />

                <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
                    {/* LEFT */}
                    <div>
                        <div
                            className={`${cinzel.className} inline-block px-3 py-1 mb-5 text-[10px] tracking-[0.25em] text-gold border border-gold/40 rounded-full uppercase bg-yellow-100/40`}
                        >
                            Certified Astrology Course
                        </div>

                        <h1
                            className={`${cinzel.className} text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-5 font-normal`}
                            style={{ color: "var(--ink)" }}
                        >
                            Become a{" "}
                            <span
                                className={`${cormorant.className} italic font-normal`}
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Professional Astrologer
                            </span>
                            <br />& Earn Online
                        </h1>

                        <p
                            className={`${cormorant.className} text-lg md:text-xl leading-relaxed mb-7 max-w-xl font-normal`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            Learn from{" "}
                            <span
                                className="font-semibold"
                                style={{ color: "var(--gold-light)" }}
                            >
                                Dr. Vinay Bajrangi
                            </span>{" "}
                            and master Vedic astrology with techniques that
                            bring real-life accuracy and powerful
                            transformations.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-7">
                            {features.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg shadow-card"
                                        style={{
                                            background: "var(--surface-card)",
                                            border: "1px solid var(--border)",
                                        }}
                                    >
                                        <Icon
                                            className="h-4 w-4 flex-shrink-0"
                                            style={{ color: "var(--gold)" }}
                                        />
                                        <span
                                            className={`${dmSans.className} text-xs`}
                                            style={{ color: "var(--ink)" }}
                                        >
                                            {item.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-7">
                            {batchDetails.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="flex-1 px-4 py-3 rounded-lg flex items-center gap-3 shadow-card"
                                        style={{
                                            background: "var(--surface-card)",
                                            border: "1px solid var(--border)",
                                        }}
                                    >
                                        <Icon
                                            className="h-5 w-5"
                                            style={{ color: "var(--gold)" }}
                                        />

                                        <div>
                                            <div
                                                className={`${cinzel.className} text-[10px] uppercase`}
                                                style={{ color: "var(--gold)" }}
                                            >
                                                {item.label}
                                            </div>

                                            <div
                                                className="text-sm font-semibold"
                                                style={{ color: "var(--ink)" }}
                                            >
                                                {item.value}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => setShowEligibilityModal(true)}
                            className={`${cinzel.className} px-10 py-5 text-base font-semibold tracking-[2px] uppercase rounded-2xl transition-all duration-300 hover:shadow-gold hover:scale-105 flex items-center gap-3`}
                            style={{
                                background: "var(--gradient-gold)",
                                color: "oklch(14% 0.04 270)",
                                minHeight: "64px",
                                boxShadow:
                                    "0 8px 24px rgba(212, 166, 70, 0.25)",
                            }}
                        >
                            Know Your Stage & Enroll
                            <ChevronRight size={22} strokeWidth={2.5} />
                        </button>

                        <div className="flex items-center gap-3 mt-6 text-silver text-sm">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={14}
                                        fill="currentColor"
                                        className=""
                                        style={{ color: "var(--gold)" }}
                                    />
                                ))}
                            </div>

                            <span
                                className={`${dmSans.className} text-xs font-normal`}
                                style={{ color: "white" }}
                            >
                                Trusted by{" "}
                                <span
                                    className="font-semibold"
                                    style={{ color: "var(--ink)" }}
                                >
                                    50,000+
                                </span>{" "}
                                Students
                            </span>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="group relative rounded-2xl overflow-hidden border border-gold/80 shadow-elevated transition-all duration-300">
                            <Image
                                src="/img/certified-astrology/hero.jpg"
                                alt="Dr. Vinay Bajrangi"
                                width={700}
                                height={650}
                                className="w-full h-[520px] lg:h-[580px] object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <div
                                    className={`${cinzel.className} text-xl text-white`}
                                >
                                    Dr. Vinay Bajrangi
                                </div>

                                <div
                                    className={`${cormorant.className} italic text-gold-pale text-sm`}
                                >
                                    India's Most Trusted Jyotish Educator
                                </div>
                            </div>
                        </div>

                        <button
                            className="group absolute -bottom-6 left-0 md:-left-10 w-[78%] max-w-sm rounded-xl p-4 text-left shadow-elevated transition-all duration-500 animate-float-slow"
                            style={{
                                background: "var(--surface-card)",
                                border: "1px solid rgba(212,166,70,0.18)",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                            }}
                        >
                            <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#d4a646] transition-all duration-500 pointer-events-none" />

                            <div
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    boxShadow: "0 0 24px rgba(212,166,70,0.28)",
                                }}
                            />

                            <div
                                className={`${cinzel.className} inline-block px-2 py-0.5 mb-2 text-[9px] tracking-wider rounded uppercase bg-white text-black`}
                                style={{
                                    // color: "var(--gold)",
                                    // background: "oklch(92% 0.07 85 / 0.4)",
                                    border: "1px solid var(--border)",
                                }}
                            >
                                Course Eligibility Video
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-navy flex-shrink-0">
                                    <Image
                                        src="/img/certified-astrology/hero.jpg"
                                        alt="Eligibility preview"
                                        fill
                                        className="object-cover opacity-80"
                                    />

                                    {/* Full overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                        {/* Ripple */}
                                        <span className="absolute w-12 h-12 rounded-full animate-ripple bg-yellow-400/40"></span>

                                        {/* Glow */}
                                        <span className="absolute w-11 h-11 rounded-full bg-yellow-400/30 blur-md"></span>

                                        {/* Main Button */}
                                        <div
                                            className="relative w-10 h-10 rounded-full flex items-center justify-center"
                                            style={{
                                                background:
                                                    "radial-gradient(circle at 30% 30%, #FFD977 0%, #E4B84B 45%, #C9951E 100%)",
                                                boxShadow:
                                                    "0 0 20px rgba(212,166,70,0.55), 0 4px 16px rgba(212,166,70,0.35)",
                                            }}
                                        >
                                            <div
                                                className="absolute left-1/2 top-1/2 -translate-x-[40%] -translate-y-1/2"
                                                style={{
                                                    width: 0,
                                                    height: 0,
                                                    borderTop:
                                                        "5px solid transparent",
                                                    borderBottom:
                                                        "5px solid transparent",
                                                    borderLeft:
                                                        "8px solid #1A1A1A",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div
                                        className={`${cinzel.className} text-base mb-1 leading-tight`}
                                        style={{ color: "var(--ink)" }}
                                    >
                                        Are You Eligible to Learn{" "}
                                        <span
                                            className="italic"
                                            style={{
                                                color: "var(--gold-light)",
                                            }}
                                        >
                                            Astrology?
                                        </span>
                                    </div>

                                    <div
                                        onClick={() => setShowEligibilityModal(true)}
                                        className={`${dmSans.className} text-[12px] flex items-center gap-1 font-normal cursor-pointer`}
                                        style={{ color: "var(--muted-ink)" }}
                                    >
                                        <Play
                                            size={9}
                                            fill="currentColor"
                                            style={{ color: "var(--gold)" }}
                                        />
                                        Watch · 19:30 min
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Media Features */}
            <section
                style={{
                    background: "var(--surface-card)",
                    borderTop: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                }}
            >
                <div className="max-w-7xl mx-auto py-12">
                    {/* Heading */}
                    <div className="text-center mb-8">
                        <p
                            className={`${cinzel.className} text-[10px] uppercase tracking-[0.35em] mb-2 font-normal`}
                            style={{ color: "var(--gold)" }}
                        >
                            As Featured On
                        </p>

                        <h2
                            className={`${cinzel.className} text-3xl md:text-4xl font-normal`}
                            style={{ color: "var(--ink)" }}
                        >
                            India's Leading Media Houses
                        </h2>
                    </div>

                    {/* Marquee */}
                    <div className="relative overflow-hidden py-6">
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[color:var(--surface-card)] to-transparent z-10" />

                        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[color:var(--surface-card)] to-transparent z-10" />

                        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
                            {[...mediaLogos, ...mediaLogos].map(
                                (media, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center gap-3 shrink-0 group"
                                    >
                                        <div
                                            className="w-[140px] h-[80px] sm:w-[160px] sm:h-[90px] rounded-xl flex items-center justify-center p-4 transition-all duration-300"
                                            style={{
                                                background: "#fff",
                                                border: "1px solid var(--border)",
                                            }}
                                        >
                                            <img
                                                src={media.img}
                                                alt={media.name}
                                                className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        <span
                                            className={`${cinzel.className} text-[10px] uppercase tracking-[0.2em]`}
                                            style={{
                                                color: "var(--muted-ink)",
                                            }}
                                        >
                                            {media.name}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Banner Section */}
            <section
                className="border-b"
                style={{
                    background: "var(--surface-mid)",
                    borderColor: "var(--border)",
                }}
            >
                <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center justify-around flex-wrap gap-4">
                    {stats.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-xs md:text-sm"
                            >
                                <Icon
                                    size={16}
                                    aria-hidden="true"
                                    style={{ color: "var(--gold)" }}
                                />

                                <span
                                    style={{
                                        color: "var(--ink)",
                                        opacity: 0.8,
                                    }}
                                >
                                    {item.text}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Know Your Stage Section */}
            <section
                className="py-16 px-6 overflow-hidden"
                style={{ background: "var(--background)" }}
            >
                <div className="max-w-[1250px] mx-auto">
                    {/* Heading */}
                    <div className="text-center max-w-4xl mx-auto mb-28">
                        <p
                            className={`${cinzel.className} uppercase tracking-[5px] text-xs mb-6 font-normal`}
                            style={{ color: "var(--gold)" }}
                        >
                            Know Your Stage
                        </p>

                        <h2
                            className={`${cinzel.className} text-5xl font-normal leading-tight max-sm:text-2xl`}
                            style={{ color: "var(--ink)" }}
                        >
                            In What Stage of Astrology <br />
                            <span
                                className={`${cinzel.className} italic`}
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Are You Really In?
                            </span>
                        </h2>

                        <p
                            className={`${cormorant.className} text-lg mt-8 leading-8 font-normal`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            Most students fail because they pick the wrong
                            course. Identify your true learning stage first —
                            then choose the right path.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {stages.map((item, index) => (
                            <div
                                key={index}
                                className="relative rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                                style={{
                                    background: "var(--surface-card)",
                                    border: "1px solid var(--border)",
                                    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                                }}
                            >
                                {/* Badge */}
                                <div className="absolute -top-4 left-7">
                                    <div
                                        className={`${cinzel.className} flex items-center gap-2 px-4 py-1.5 text-[11px] uppercase tracking-[1.5px] rounded-full font-medium`}
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #F2D06B 0%, #D4A646 100%)",
                                            color: "#1A1A1A",
                                            boxShadow:
                                                "0 10px 20px rgba(212, 166, 70, 0.25)",
                                            border: "1px solid rgba(255, 224, 130, 0.6)",
                                        }}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#FFF4D0]" />
                                        {item.badge}
                                    </div>
                                </div>

                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4 mt-2">
                                    <div className="w-12 h-12 rounded-full border-2 border-[#d4a646]/50 bg-[#041124] flex items-center justify-center shrink-0">
                                        <div className="w-12 h-12 rounded-full border-2 border-[#d4a646]/50 bg-[#041124] flex items-center justify-center shrink-0">
                                            <item.icon
                                                className="w-5 h-5 text-[#d4a646]"
                                                strokeWidth={2}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div
                                            className={`${cinzel.className} text-[10px] uppercase tracking-[2px] font-normal`}
                                            style={{ color: "#F2D06B" }}
                                        >
                                            {item.stage}
                                        </div>

                                        <h3
                                            className={`${cinzel.className} text-lg leading-tight font-medium`}
                                            style={{ color: "#FAF6EC" }}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description */}
                                <p
                                    className={`${dmSans.className} text-sm leading-7 mb-5 italic font-normal`}
                                    style={{ color: "#D8D2C2" }}
                                >
                                    {item.description}
                                </p>

                                {/* Levels */}
                                <div className="mb-5">
                                    <div
                                        className={`${cinzel.className} text-[10px] uppercase tracking-[2px] mb-2 font-normal`}
                                        style={{ color: "var(--gold)" }}
                                    >
                                        Learning Levels
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {item.levels.map((level) => (
                                            <span
                                                key={level}
                                                className={`${dmSans.className} px-3 py-1.5 text-xs rounded-full font-medium transition-all duration-300 hover:scale-105`}
                                                style={{
                                                    background:
                                                        "linear-gradient(135deg, rgba(212,166,70,0.18), rgba(212,166,70,0.08))",
                                                    border: "1px solid rgba(212,166,70,0.35)",
                                                    color: "#F8F3E8",
                                                    boxShadow:
                                                        "0 4px 12px rgba(212,166,70,0.12)",
                                                }}
                                            >
                                                {level}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Strategy */}
                                <div
                                    className="mt-auto rounded-2xl p-4 border"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(212,166,70,0.12), rgba(212,166,70,0.04))",
                                        borderColor: "rgba(212,166,70,0.25)",
                                        boxShadow:
                                            "0 8px 24px rgba(0,0,0,0.15)",
                                    }}
                                >
                                    <div
                                        className={`${cinzel.className} text-[10px] uppercase tracking-[2px] mb-3 font-medium`}
                                        style={{ color: "#F2D06B" }}
                                    >
                                        Strategy
                                    </div>

                                    <p
                                        className={`${dmSans.className} text-sm italic leading-7`}
                                        style={{ color: "#E2D9C7" }}
                                    >
                                        {item.strategy}
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        setShowEligibilityModal(true)
                                    }
                                    className={`${cinzel.className} mt-6 w-full py-3 border border-[#d4a646]/50 text-[#d4a646] uppercase tracking-[2px] text-xs rounded-lg transition-all hover:bg-[#d4a646]/10 font-normal flex items-center justify-center gap-2`}
                                >
                                    Confirm My Stage
                                    <ChevronRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Choose Course */}
            <section
                id="courses"
                className="py-10 md:py-10 relative overflow-hidden"
                style={{ background: "var(--surface-mid)" }}
            >
                {/* Background Radial Glow */}
                <div
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{ background: "var(--gradient-radial-gold)" }}
                />

                <div className="relative max-w-7xl mx-auto px-5 md:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <span
                            className={`${cinzel.className} text-[10px] tracking-[0.3em] uppercase block font-normal`}
                            style={{ color: "var(--gold)" }}
                        >
                            Choose Course
                        </span>

                        <h2
                            className={`${cinzel.className} text-3xl md:text-5xl mt-3 mb-4 leading-tight font-normal`}
                            style={{ color: "var(--ink)" }}
                        >
                            Our Flagship{" "}
                            <em
                                className={`${cormorant.className} font-normal`}
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Astrology Programmes
                            </em>
                        </h2>

                        <p
                            className={`${cormorant.className} text-lg text-[var(--muted-ink)] italic leading-relaxed font-normal`}
                        >
                            Three sacred paths — built across 25 years and
                            chosen by 15,000+ students. Pick the one that
                            matches your stage.
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {coursesData.map((course, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-[24px] border border-[#c8a04d] min-h-[760px] flex flex-col"
                                style={{
                                    background: course.bgGradient,
                                }}
                            >
                                {/* Inner Border */}
                                <div className="absolute inset-[10px] rounded-[18px] border border-[#c8a04d]/50 pointer-events-none" />

                                {/* Mandala Background */}
                                <div
                                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle at center, rgba(212,175,55,0.12) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />

                                {/* Corner Decorations */}
                                <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-[#c8a04d]" />
                                <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-[#c8a04d]" />
                                <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-[#c8a04d]" />
                                <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-[#c8a04d]" />

                                {/* Header */}
                                <div className="relative z-10 px-4 pt-4 text-center">
                                    <div className="mx-auto relative w-24 h-24 flex items-center justify-center">
                                        <div className="absolute inset-0 rounded-full opacity-30 bg-[radial-gradient(circle,_rgba(212,175,55,0.25)_0%,_transparent_70%)]" />

                                        <img
                                            src={course.icon}
                                            alt={course.title}
                                            className="relative z-10 w-20 h-20 object-contain"
                                        />
                                    </div>

                                    <div className="inline-block mt-2 px-5 py-1 border border-[#c8a04d] rounded-full">
                                        <span className="text-[#d4af37] text-sm uppercase">
                                            {course.stage}
                                        </span>
                                    </div>

                                    <h3 className="mt-3 text-[30px] leading-[1.15] text-[#f4eee4] font-serif">
                                        {course.title}
                                    </h3>

                                    <p className="mt-1 text-[#d4af37] tracking-[0.15em] text-sm uppercase">
                                        {course.subtitle}
                                    </p>

                                    <div className="flex items-center justify-center gap-3 my-3">
                                        <div className="w-12 h-px bg-[#c8a04d]/50" />
                                        <div className="w-2 h-2 rotate-45 border border-[#c8a04d]" />
                                        <div className="w-12 h-px bg-[#c8a04d]/50" />
                                    </div>

                                    <p className="text-[#f4eee4] text-lg">
                                        {course.tagline}
                                    </p>

                                    <p className="text-[#d8c8a7] italic mt-2">
                                        {course.quote}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="relative z-10 px-4 mt-4 flex-1">
                                    <h4 className="text-center text-[#d4af37] text-sm tracking-[0.2em] uppercase mb-2">
                                        WHAT YOU'LL GET
                                    </h4>

                                    {course.content.map((section, idx) => (
                                        <div
                                            key={idx}
                                            className="border border-[#c8a04d]/40 rounded-[18px] p-3 mb-2"
                                        >
                                            <h5 className="text-[#d4af37] text-sm uppercase mb-2">
                                                {section.heading}
                                            </h5>

                                            <ul className="space-y-2">
                                                {section.items.map(
                                                    (item, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex gap-3 text-[#f4eee4] text-sm"
                                                        >
                                                            <span className="text-[#d4af37]">
                                                                ◉
                                                            </span>
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="relative z-10 px-4 mb-2">
                                    <div className="border border-[#c8a04d]/40 rounded-xl py-4 text-center">
                                        <div className="flex items-center justify-center gap-3 px-6">
                                            <CardIcon
                                                type={footerIcons[index]}
                                            />

                                            <p className="text-[#d4af37] italic text-sm">
                                                {course.footerText}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="grid grid-cols-2 bg-[#d4af37] text-[#1b1b1b] relative z-10">
                                    <button className="py-3 border-r border-black/20 uppercase text-sm tracking-widest">
                                        KNOW MORE →
                                    </button>

                                    <button className="py-3 uppercase text-sm tracking-widest">
                                        ENROLL NOW →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Trust/Security Footer */}
                    <div
                        className={`${cinzel.className} mt-12 text-center text-xs font-display tracking-[0.25em] uppercase flex items-center justify-center gap-2 flex-wrap`}
                        style={{ color: "var(--muted-ink)" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ color: "var(--gold)" }}
                            aria-hidden="true"
                        >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        Secure Enrollment · EMI Available · Lifetime Access ·
                        Certified Programme
                    </div>
                </div>
            </section>

            {/* Premium Catalog Section */}
            <section
                className="py-10 md:py-10 relative overflow-hidden"
                style={{ background: "var(--background)" }}
            >
                {/* Background Radial Glow */}
                <div
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                        background: "var(--gradient-radial-gold)",
                    }}
                />

                <div className="relative max-w-7xl mx-auto px-5 md:px-8">
                    {/* Main Header Container */}
                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <span
                            className={`${cinzel.className} text-[10px] tracking-[0.3em] uppercase block font-normal`}
                            style={{ color: "var(--gold)" }}
                        >
                            Premium Catalog
                        </span>

                        <h2
                            className={`${cinzel.className} text-3xl md:text-5xl mt-3 mb-4 leading-tight font-normal`}
                            style={{ color: "var(--ink)" }}
                        >
                            Our Complete{" "}
                            <em
                                className={`${cormorant.className} not-italic font-normal`}
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Specialty Courses
                            </em>
                        </h2>

                        <p
                            className={`${cormorant.className} text-lg italic leading-relaxed font-normal`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            Beyond the core Graduate, PG &amp; Pre-PhD path — a
                            complete library of specialty programs by Dr. Vinay
                            Bajrangi.
                        </p>
                    </div>

                    {/* 1. Core Learning Path Section */}
                    <div className="mb-12">
                        <div className="text-center mb-6">
                            <span
                                className={`${cinzel.className} text-[10px] tracking-[0.3em] uppercase block font-normal`}
                                style={{ color: "var(--gold)" }}
                            >
                                Core Learning Path
                            </span>

                            <h3
                                className={`${cinzel.className} text-2xl md:text-3xl mt-2 font-normal`}
                                style={{ color: "var(--ink)" }}
                            >
                                From Seed to Mastery — 6 Sacred Levels
                            </h3>
                        </div>

                        {/* 6 Grid Stages Container */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                            {coreStages.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative rounded-xl p-4 text-center shadow-card hover:-translate-y-0.5 transition-all duration-300 group"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, #0D1525 0%, #131D2F 100%)",
                                        border: "1px solid rgba(212,166,70,0.18)",
                                    }}
                                >
                                    <div
                                        className={`${cinzel.className} absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 text-[9px] tracking-wider rounded-full uppercase whitespace-nowrap font-medium`}
                                        style={{
                                            background: "var(--gradient-gold)",
                                            color: "#111111",
                                        }}
                                    >
                                        {item.stage}
                                    </div>

                                    <div
                                        className={`${cinzel.className} text-2xl mt-2 mb-1 font-normal`}
                                        style={{
                                            background: "var(--gradient-gold)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {item.num}
                                    </div>

                                    <div
                                        className={`${cinzel.className} text-sm leading-tight font-medium`}
                                        style={{ color: "var(--ink)" }}
                                    >
                                        {item.name}
                                    </div>

                                    <div
                                        className={`${dmSans.className} text-[10px] mt-1 font-normal`}
                                        style={{ color: "var(--muted-ink)" }}
                                    >
                                        {item.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. Specialty Library Section Header */}
                    <div className="text-center mb-6">
                        <span
                            className={`${cinzel.className} text-[10px] tracking-[0.3em] uppercase block font-normal`}
                            style={{ color: "var(--gold)" }}
                        >
                            Specialty Library
                        </span>

                        <h3
                            className={`${cinzel.className} text-2xl md:text-3xl mt-2`}
                            style={{ color: "var(--ink)" }}
                        >
                            Deep-Dive Programs · Top Rated
                        </h3>

                        <p
                            className={`${dmSans.className} text-sm mt-2 max-w-2xl mx-auto font-normal`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            Curated programs on the rare, the powerful, and the
                            most-asked subjects in Vedic astrology — every one
                            taught personally by Dr. Bajrangi.
                        </p>
                    </div>

                    {/* Specialty Courses Grid */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
                        {specialtyCourses.map((course, index) => (
                            <div
                                key={index}
                                className="rounded-xl p-5 shadow-card hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
                                style={{
                                    background: "var(--surface-card)",
                                    border: "1px solid var(--border)",
                                }}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-[var(--surface-lift)] border border-gold/30 flex items-center justify-center">
                                            {course.icon}
                                        </div>
                                        <span
                                            className={`${cinzel.className} text-[9px] px-2 py-0.5 rounded uppercase tracking-wider font-display font-medium`}
                                            style={{
                                                color: "var(--gold)",
                                                border: "1px solid oklch(82% 0.15 80 / 0.4)",
                                            }}
                                        >
                                            Top Rated
                                        </span>
                                    </div>
                                    <h5
                                        className={`${cinzel.className} font-display text-sm leading-snug mb-3 min-h-[2.5rem] font-medium`}
                                        style={{ color: "var(--ink)" }}
                                    >
                                        {course.title}
                                    </h5>
                                </div>

                                <button
                                    className={`${cinzel.className} text-[11px] font-display tracking-wider uppercase inline-flex items-center gap-1 transition-colors w-max mt-auto font-semibold`}
                                    style={{ color: "var(--gold)" }}
                                >
                                    Know More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-transform group-hover:translate-x-0.5"
                                        aria-hidden="true"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Global Catalog Footer Action Button */}
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowEligibilityModal(true)}
                            className={`${cinzel.className} px-8 py-4 font-display tracking-wider text-sm uppercase rounded-xl hover:shadow-gold transition-all duration-300 inline-flex items-center gap-2 font-semibold`}
                            style={{
                                background: "var(--gradient-gold)",
                                color: "#111111", // Black text
                            }}
                        >
                            Talk to Counsellor & Pick Your Course
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Career Opportunity Section */}
            <section
                className="py-10 md:py-10 relative overflow-hidden"
                style={{ background: "var(--background)" }}
            >
                {/* Background Radial Glow Overlay */}
                <div
                    className="absolute inset-0 opacity-50 pointer-events-none"
                    style={{ background: "var(--gradient-radial-gold)" }}
                />

                <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
                    {/* Left Side Content & Grid Column */}
                    <div>
                        <span
                            className={`${cinzel.className} text-[10px] tracking-[0.3em] uppercase block`}
                            style={{ color: "var(--gold)" }}
                        >
                            Career Opportunity
                        </span>

                        <h2
                            className={`${cinzel.className} text-3xl md:text-5xl mt-3 mb-5 leading-tight font-normal`}
                            style={{ color: "var(--ink)" }}
                        >
                            Become a{" "}
                            <span
                                className={`${cormorant.className} italic font-normal`}
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Certified Astrology Practitioner
                            </span>{" "}
                            &amp; Create a High-Income Career
                        </h2>

                        <p
                            className={`${cormorant.className} italic text-lg mb-8 max-w-xl`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            Real students. Real income. Here is what your
                            potential earning looks like as a certified
                            practitioner.
                        </p>

                        {/* Sub-grid Opportunity Cards */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {opportunityCards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-xl p-5 shadow-card hover:-translate-y-0.5 transition-all duration-300 hover:border-gold/50"
                                    style={{
                                        background: "var(--surface-card)",
                                        border: "1px solid var(--border)",
                                    }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300"
                                        style={{
                                            background:
                                                "rgba(255,255,255,0.06)",
                                            border: "1px solid rgba(212,175,55,0.25)",
                                            color: "#D4AF37",
                                            boxShadow:
                                                "0 4px 12px rgba(0,0,0,0.18)",
                                        }}
                                    >
                                        {card.icon}
                                    </div>

                                    <div
                                        className={`${cinzel.className} text-base mb-1 font-normal`}
                                        style={{ color: "var(--ink)" }}
                                    >
                                        {card.title}
                                    </div>

                                    <div
                                        className={`${dmSans.className} text-xs leading-relaxed`}
                                        style={{ color: "var(--muted-ink)" }}
                                    >
                                        {card.desc}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowEligibilityModal(true)}
                            className="px-8 py-4 rounded-xl hover:shadow-gold transition-all duration-300 inline-flex items-center gap-2"
                            style={{
                                background: "var(--gradient-gold)",
                                color: "var(--primary-foreground)",
                            }}
                        >
                            <span
                                className={`${cinzel.className} text-sm uppercase tracking-wider font-normal`}
                            >
                                Become a Certified Astrologer
                            </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Side Earnings Visual Showcase */}
                    <div className="relative">
                        <div
                            className="relative rounded-3xl p-8 md:p-10 shadow-elevated overflow-hidden"
                            style={{
                                background: "var(--surface-card)",
                                border: "2px solid oklch(82% 0.15 80 / 0.4)",
                            }}
                        >
                            {/* Box Background Radial Glow */}
                            <div
                                className="absolute inset-0 opacity-50 pointer-events-none"
                                style={{
                                    background: "var(--gradient-radial-gold)",
                                }}
                            />

                            {/* Decorative Zodiac Graphic */}
                            <img
                                src="/img/certified-astrology/hero-bg.png"
                                alt=""
                                aria-hidden="true"
                                loading="lazy"
                                className="absolute -right-24 -bottom-24 w-[420px] opacity-[0.12] pointer-events-none select-none"
                            />

                            <div className="relative">
                                <div className="flex items-center gap-2 mb-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-gold"
                                        aria-hidden="true"
                                    >
                                        <path d="M16 7h6v6" />
                                        <path d="m22 7-8.5 8.5-5-5L2 17" />
                                    </svg>

                                    <span
                                        className={`${cinzel.className} text-[10px] tracking-[0.3em] uppercase block`}
                                        style={{ color: "var(--gold)" }}
                                    >
                                        Potential Yearly Earnings
                                    </span>
                                </div>

                                <div
                                    className={`${cinzel.className} text-5xl md:text-6xl leading-none mb-3 font-normal`}
                                    style={{
                                        background: "var(--gradient-gold)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    ₹18.3L – ₹27.5L
                                </div>

                                <div
                                    className={`${dmSans.className} text-sm mb-7`}
                                    style={{ color: "var(--muted-ink)" }}
                                >
                                    Based on practising graduates · India avg.
                                </div>

                                {/* Dynamic Metrics Metric Bars */}
                                <div className="space-y-3">
                                    {earningsMetrics.map((metric, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between items-baseline mb-1.5">
                                                <span
                                                    className={`${dmSans.className} text-xs font-medium`}
                                                    style={{
                                                        color: "var(--ink)",
                                                    }}
                                                >
                                                    {metric.label}
                                                </span>

                                                <span
                                                    className={`${cinzel.className} text-xs font-normal`}
                                                    style={{
                                                        color: "var(--gold)",
                                                    }}
                                                >
                                                    {metric.range}
                                                </span>
                                            </div>

                                            <div
                                                className="h-2 rounded-full overflow-hidden"
                                                style={{
                                                    background:
                                                        "var(--surface-lift)",
                                                }}
                                            >
                                                <div
                                                    className={`h-full rounded-full ${metric.fillWidth}`}
                                                    style={{
                                                        background:
                                                            "var(--gradient-gold)",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer Stamp inside Earning Box */}
                                <div
                                    className="mt-6 pt-5 flex items-center gap-3"
                                    style={{
                                        borderTop: "1px solid var(--border)",
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-gold"
                                        aria-hidden="true"
                                    >
                                        <path d="M6 3h12" />
                                        <path d="M6 8h12" />
                                        <path d="m6 13 8.5 8" />
                                        <path d="M6 13h3" />
                                        <path d="M9 13c6.667 0 6.667-10 0-10" />
                                    </svg>

                                    <span
                                        className={`${dmSans.className} text-xs`}
                                        style={{ color: "var(--muted-ink)" }}
                                    >
                                        Multiple income streams · Lifetime
                                        career
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge Element */}
                        <div
                            className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-gold animate-float z-10"
                            style={{
                                background: "var(--gradient-gold)",
                                color: "var(--primary-foreground)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
                                <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
                                <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
                                <path d="M4 22h16" />
                                <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                                <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
                            </svg>

                            <div
                                className={`${cinzel.className} text-[10px] tracking-wider uppercase mt-0.5 font-normal`}
                            >
                                Proven
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Benefits Section */}
            <section
                className="py-10 md:py-12"
                style={{ background: "var(--surface-mid)" }}
            >
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    {/* Main Component Header */}
                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <span
                            className={`${cinzel.className} text-[10px] tracking-[0.3em] uppercase block`}
                            style={{ color: "var(--gold)" }}
                        >
                            Course Benefits
                        </span>

                        <h2
                            className={`${cinzel.className} text-3xl md:text-5xl mt-3 mb-4 leading-tight font-normal`}
                            style={{ color: "var(--ink)" }}
                        >
                            What You&apos;ll Get{" "}
                            <span
                                className={`${cormorant.className} italic font-normal`}
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                After Enrollment
                            </span>
                        </h2>

                        <p
                            className={`${cormorant.className} text-lg italic leading-relaxed`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            A complete premium learning ecosystem — refined over
                            25 years and trusted by 15,000+ students.
                        </p>
                    </div>

                    {/* 1. Primary Highlight Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8 items-stretch">
                        {primaryBenefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl p-7 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col justify-between"
                                style={{
                                    background: "var(--surface-card)",
                                    border: "1px solid var(--border)",
                                }}
                            >
                                {/* Corner Circular Hover Effect Graphic */}
                                <div
                                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: "var(--gold-pale)" }}
                                />

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div
                                                className="w-14 h-14 rounded-xl flex items-center justify-center"
                                                style={{
                                                    background:
                                                        "var(--gradient-gold)",
                                                    boxShadow:
                                                        "0 10px 25px rgba(212,175,55,.25)",
                                                }}
                                            >
                                                {benefit.icon}
                                            </div>

                                            <span
                                                className={`${cinzel.className} text-[9px] px-2 py-0.5 rounded uppercase tracking-wider font-normal`}
                                                style={{
                                                    background:
                                                        "var(--surface-card)",
                                                    color: "var(--gold)",
                                                    border: "1px solid oklch(82% 0.15 80 / 0.4)",
                                                }}
                                            >
                                                {benefit.badge}
                                            </span>
                                        </div>

                                        <h4
                                            className={`${cinzel.className} text-xl mb-2 font-normal`}
                                            style={{ color: "var(--ink)" }}
                                        >
                                            {benefit.title}
                                        </h4>
                                    </div>

                                    <p
                                        className={`${dmSans.className} text-sm leading-relaxed mt-auto`}
                                        style={{ color: "var(--muted-ink)" }}
                                    >
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 2. Secondary Ecosystem Mini-Cards Grid */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
                        {ecosystemFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-xl p-5 shadow-card transition-all duration-300 flex flex-col justify-between hover:border-gold/50"
                                style={{
                                    background: "var(--surface-card)",
                                    border: "1px solid var(--border)",
                                }}
                            >
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center shadow-card"
                                                style={{
                                                    background: "var(--ink)",
                                                    border: "1px solid oklch(82% 0.15 80 / 0.4)",
                                                }}
                                            >
                                                {feature.icon}
                                            </div>

                                            <span
                                                className={`${cinzel.className} text-[9px] px-2 py-0.5 rounded uppercase tracking-wider font-normal`}
                                                style={{
                                                    color: "var(--gold)",
                                                    border: "1px solid oklch(82% 0.15 80 / 0.4)",
                                                }}
                                            >
                                                {feature.tag}
                                            </span>
                                        </div>

                                        <h5
                                            className={`${cinzel.className} text-sm mb-1.5 leading-tight font-normal`}
                                            style={{ color: "var(--ink)" }}
                                        >
                                            {feature.title}
                                        </h5>
                                    </div>

                                    <p
                                        className={`${dmSans.className} text-xs leading-relaxed mt-auto`}
                                        style={{ color: "var(--muted-ink)" }}
                                    >
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Journey Section */}
            <section
                id="journey"
                className="relative overflow-hidden py-12 lg:py-12"
                style={{ background: "var(--background)" }}
            >
                {/* Background Glow */}
                <div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{ background: "var(--gradient-radial-gold)" }}
                />

                <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <span
                            className={`${cinzel.className} text-[10px] uppercase tracking-[0.3em]`}
                            style={{ color: "var(--gold)" }}
                        >
                            Learning Journey
                        </span>

                        <h2
                            className={`${cinzel.className} mt-3 mb-4 text-4xl md:text-6xl font-normal`}
                            style={{ color: "var(--ink)" }}
                        >
                            Your{" "}
                            <span
                                className={`${cormorant.className} italic font-normal`}
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Journey With Us
                            </span>
                        </h2>

                        <p
                            className={`${cormorant.className} text-lg italic`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            From your first video to your first paying client —
                            in 5 clear, guided steps.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Desktop Line */}
                        <div
                            className="hidden md:block absolute top-12 left-[8%] right-[8%] h-[2px]"
                            style={{
                                background:
                                    "linear-gradient(to right, transparent, oklch(82% 0.15 80 / 0.4), transparent)",
                            }}
                        />

                        <div className="grid md:grid-cols-5 gap-6 md:gap-3 relative">
                            {journeySteps.map((step) => {
                                const Icon = step.icon;

                                return (
                                    <div
                                        key={step.number}
                                        className="relative flex flex-col items-center text-center"
                                    >
                                        {/* Circle */}
                                        <div className="relative z-10 mb-5">
                                            <div
                                                className="group w-24 h-24 rounded-full flex items-center justify-center shadow-elevated transition-all duration-300 hover:shadow-gold"
                                                style={{
                                                    background:
                                                        "var(--surface-card)",
                                                    border: "2px solid oklch(82% 0.15 80 / 0.4)",
                                                }}
                                            >
                                                <Icon
                                                    className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                                                    style={{
                                                        color: "var(--gold)",
                                                    }}
                                                />
                                            </div>

                                            <div
                                                className={`${cinzel.className} absolute -top-2 -right-2 w-9 h-9 rounded-full text-sm flex items-center justify-center shadow-gold font-normal`}
                                                style={{
                                                    background:
                                                        "var(--gradient-gold)",
                                                    color: "oklch(0.14 0.04 270)",
                                                }}
                                            >
                                                {step.number}
                                            </div>
                                        </div>

                                        {/* Card */}
                                        <div
                                            className="w-full rounded-xl p-4 shadow-card transition-all duration-300 hover:border-gold/50"
                                            style={{
                                                background:
                                                    "var(--surface-card)",
                                                border: "1px solid var(--border)",
                                            }}
                                        >
                                            <h4
                                                className={`${cinzel.className} text-base mb-2 leading-tight font-normal`}
                                                style={{ color: "var(--ink)" }}
                                            >
                                                {step.title}
                                            </h4>

                                            <p
                                                className={`${dmSans.className} text-xs leading-relaxed`}
                                                style={{
                                                    color: "var(--muted-ink)",
                                                }}
                                            >
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Mobile Arrow */}
                                        {step.number !== "05" && (
                                            <ChevronRight
                                                className="md:hidden w-5 h-5 mt-2 rotate-90"
                                                style={{
                                                    color: "oklch(82% 0.15 80 / 0.5)",
                                                }}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-14">
                        <button
                            onClick={() => setShowEligibilityModal(true)}
                            className={`${cinzel.className} inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-gold`}
                            style={{
                                background: "var(--gradient-gold)",
                                color: "oklch(0.14 0.04 270)",
                            }}
                        >
                            Start My Journey
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Bio & Stats Section */}
            <section
                className="py-10 md:py-10"
                style={{ background: "var(--surface-mid)" }}
            >
                <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
                    {/* Left Side: Media Display with Decorative Elements */}
                    <div className="relative">
                        {/* Decorative Zodiac Background Wheel */}
                        <img
                            src="/img/certified-astrology/hero-bg.png"
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] opacity-[0.12] pointer-events-none select-none animate-float"
                        />

                        {/* Main Portrait Container */}
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-elevated"
                            style={{
                                border: "1px solid oklch(82% 0.15 80 / 0.4)",
                            }}
                        >
                            <img
                                src="/img/certified-astrology/hero.jpg"
                                alt="Dr. Vinay Bajrangi"
                                className="w-full aspect-square object-cover"
                            />
                        </div>

                        {/* Floating Experience Badge */}
                        <div
                            className="absolute -bottom-4 -right-4 px-5 py-3 rounded-xl shadow-gold z-10 text-center"
                            style={{
                                background: "var(--gradient-gold)",
                                color: "oklch(0.14 0.04 270)",
                            }}
                        >
                            <div
                                className={`${cinzel.className} text-2xl font-normal leading-none`}
                            >
                                25+
                            </div>

                            <div
                                className={`${cinzel.className} text-[10px] tracking-wider uppercase mt-0.5`}
                            >
                                Years of Mastery
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Text Bio & Stats */}
                    <div>
                        <span
                            className={`${cinzel.className} text-[10px] tracking-[0.3em] uppercase block`}
                            style={{ color: "var(--gold)" }}
                        >
                            Why Dr. Bajrangi
                        </span>

                        <h2
                            className={`${cinzel.className} text-3xl md:text-5xl mt-3 mb-5 leading-tight font-normal`}
                            style={{ color: "var(--ink)" }}
                        >
                            Meet{" "}
                            <span
                                className={`${cormorant.className} italic font-normal`}
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Dr. Vinay Bajrangi
                            </span>
                        </h2>

                        <blockquote
                            className={`${cormorant.className} text-lg italic mb-5 leading-relaxed`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            “The secret to mastering astrology is not studying
                            more — it is studying what is right for your stage.”
                        </blockquote>

                        <p
                            className={`${dmSans.className} leading-relaxed mb-5 text-sm md:text-base`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            Dr. Vinay Bajrangi is India's most trusted Vedic
                            Jyotish educator with over 25 years of structured
                            teaching experience. He has trained 15,000+ students
                            across India and abroad, written several
                            authoritative books on Jyotish, and consulted for
                            celebrities, industrialists, and political leaders.
                        </p>

                        <p
                            className={`${dmSans.className} leading-relaxed mb-6 text-sm md:text-base`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            His stage-based curriculum is the first of its kind
                            — a methodical, no-shortcut path from absolute
                            beginner to research-level Jyotish master.
                        </p>

                        {/* Quick Metrics Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {bioStatsData.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="text-center p-4 rounded-xl shadow-card"
                                    style={{
                                        background: "var(--surface-card)",
                                        border: "1px solid var(--border)",
                                    }}
                                >
                                    <div
                                        className={`${cinzel.className} text-2xl font-normal`}
                                        style={{
                                            background: "var(--gradient-gold)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {stat.value}
                                    </div>

                                    <div
                                        className={`${cinzel.className} text-[10px] tracking-wider uppercase mt-1`}
                                        style={{ color: "var(--muted-ink)" }}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Channels Button Cluster */}
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className={`${cinzel.className} px-4 py-2 text-xs tracking-wider uppercase rounded-lg transition-all duration-300 hover:border-gold hover:text-gold`}
                                    style={{
                                        background: "var(--surface-card)",
                                        border: "1px solid var(--border)",
                                        color: "var(--muted-ink)",
                                    }}
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section
                className="py-10 md:py-8"
                style={{ background: "var(--background)" }}
            >
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <span
                            className={`${cinzel.className} uppercase tracking-[0.3em] text-[10px]`}
                            style={{ color: "var(--gold)" }}
                        >
                            Why Choose Us
                        </span>

                        <h2
                            className={`${cinzel.className} mt-3 mb-4 text-3xl md:text-5xl leading-tight font-normal`}
                            style={{ color: "var(--ink)" }}
                        >
                            The Difference{" "}
                            <span
                                className={`${cormorant.className} italic font-normal`}
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                That Sets Us Apart
                            </span>
                        </h2>

                        <p
                            className={`${cormorant.className} text-lg italic leading-relaxed`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            Six clear reasons serious students choose Dr.
                            Bajrangi over any other Jyotish program in India.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                        {chooseUsFeatures.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className="group rounded-xl p-6 shadow-card hover:border-gold/50 hover:-translate-y-0.5 transition-all duration-300"
                                    style={{
                                        background: "var(--surface-card)",
                                        border: "1px solid var(--border)",
                                    }}
                                >
                                    <div
                                        className="w-11 h-11 rounded-lg flex items-center justify-center shadow-card mb-4"
                                        style={{
                                            background: "var(--ink)",
                                            border: "1px solid oklch(82% 0.15 80 / 0.4)",
                                        }}
                                    >
                                        <Icon
                                            className="w-5 h-5"
                                            style={{ color: "var(--gold)" }}
                                        />
                                    </div>

                                    <h4
                                        className={`${cinzel.className} text-lg mb-2 font-normal`}
                                        style={{ color: "var(--ink)" }}
                                    >
                                        {feature.title}
                                    </h4>

                                    <p
                                        className={`${dmSans.className} text-sm leading-relaxed`}
                                        style={{ color: "var(--muted-ink)" }}
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <button
                            onClick={() => setShowEligibilityModal(true)}
                            className={`${cinzel.className} px-8 py-4 rounded-xl uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:shadow-gold`}
                            style={{
                                background: "var(--gradient-gold)",
                                color: "oklch(0.14 0.04 270)",
                            }}
                        >
                            Find My Stage Now →
                        </button>
                    </div>
                </div>
            </section>

            {/* Student Success Section */}
            <section
                id="testimonials"
                className="py-10 md:py-10"
                style={{ background: "var(--surface-mid)" }}
            >
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    {/* Header Block */}
                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <span
                            className={`${cinzel.className} text-[10px] tracking-[0.3em] uppercase block`}
                            style={{ color: "var(--gold)" }}
                        >
                            Student Success
                        </span>

                        <h2
                            className={`${cinzel.className} text-3xl md:text-5xl mt-3 mb-4 leading-tight font-normal`}
                            style={{ color: "var(--ink)" }}
                        >
                            What Our Students{" "}
                            <span
                                className={`${cormorant.className} italic font-normal`}
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Say About Us
                            </span>
                        </h2>
                    </div>

                    {/* Testimonials Grid Container */}
                    <div className="grid md:grid-cols-3 gap-6 items-stretch">
                        {testimonialsData.map((item, idx) => (
                            <div
                                key={idx}
                                className="rounded-2xl p-7 shadow-card hover:shadow-elevated transition-all duration-300 relative flex flex-col justify-between group hover:border-gold/50"
                                style={{
                                    background: "var(--surface-card)",
                                    border: "1px solid var(--border)",
                                }}
                            >
                                <div>
                                    {/* 5-Star Rating Row */}
                                    <div className="flex gap-0.5 mb-4">
                                        {[...Array(5)].map((_, starIdx) => (
                                            <svg
                                                key={starIdx}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                                style={{ color: "var(--gold)" }}
                                            >
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Main Quote Body */}
                                    <p
                                        className={`${cormorant.className} italic text-base leading-relaxed mb-6 font-normal`}
                                        style={{ color: "var(--ink)" }}
                                    >
                                        &ldquo;{item.quote}&rdquo;
                                    </p>
                                </div>

                                {/* Author Identity Card Footer */}
                                <div
                                    className="flex items-center gap-3 pt-4 mt-auto"
                                    style={{
                                        borderTop: "1px solid var(--border)",
                                    }}
                                >
                                    <div
                                        className={`${cinzel.className} w-11 h-11 rounded-full flex items-center justify-center text-base shadow-gold font-normal select-none`}
                                        style={{
                                            background: "var(--gradient-gold)",
                                            color: "oklch(0.14 0.04 270)",
                                        }}
                                    >
                                        {item.initial}
                                    </div>

                                    <div>
                                        <div
                                            className={`${cinzel.className} text-sm font-normal`}
                                            style={{ color: "var(--ink)" }}
                                        >
                                            {item.name}
                                        </div>

                                        <div
                                            className={`${dmSans.className} text-[11px]`}
                                            style={{
                                                color: "var(--muted-ink)",
                                            }}
                                        >
                                            {item.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Glimpses Of Trust Section */}
            <section
                className="relative overflow-hidden py-10 md:py-8"
                style={{
                    background:
                        "linear-gradient(160deg, oklch(0.18 0.04 265) 0%, oklch(0.22 0.05 280) 100%)",
                }}
            >
                {/* Glow */}
                <div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{ background: "var(--gradient-radial-gold)" }}
                />

                <div className="relative max-w-7xl mx-auto px-5 md:px-8">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <span
                            className={`${cinzel.className} uppercase tracking-[0.35em] text-[10px]`}
                            style={{ color: "var(--gold)" }}
                        >
                            Glimpses Of Trust
                        </span>

                        <h2
                            className={`${cinzel.className} mt-3 mb-4 text-3xl md:text-5xl leading-tight font-normal`}
                            style={{ color: "white" }}
                        >
                            Trusted by{" "}
                            <span
                                className={`${cormorant.className} italic font-normal`}
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Celebrities
                            </span>{" "}
                            & Influential Personalities
                        </h2>

                        <p
                            className={`${cormorant.className} text-lg italic`}
                            style={{ color: "oklch(82% 0.06 80 / 0.9)" }}
                        >
                            Dr. Bajrangi has guided India's most respected
                            creators, journalists, and public figures.{" "}
                            {/* color is not available */}
                        </p>
                    </div>

                    {/* Celebrity Marquee */}
                    <div className="relative overflow-hidden py-4">
                        <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
                            {[...celebrities, ...celebrities].map(
                                (person, index) => (
                                    <div
                                        key={index}
                                        className="group relative overflow-hidden rounded-3xl shrink-0"
                                        style={{
                                            width: "280px",
                                            background: "var(--surface-card)",
                                            border: "1px solid var(--border)",
                                            boxShadow:
                                                "0 20px 40px rgba(0,0,0,.35)",
                                        }}
                                    >
                                        <div className="aspect-[4/5] overflow-hidden">
                                            <img
                                                src={person.img}
                                                alt={`Celebrity ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Luxury Overlay */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background:
                                                    "linear-gradient(to top, rgba(212,175,55,.25), transparent 60%)",
                                            }}
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div
                        className={`${cinzel.className} mt-10 text-center text-xs uppercase tracking-[0.25em]`}
                        style={{
                            color: "oklch(82% 0.06 80 / 0.7)",
                        }}
                    >
                        + 200 more public figures consulted privately
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section
                id="faq"
                className="py-10 md:py-8"
                style={{ background: "var(--background)" }}
            >
                <div className="max-w-4xl mx-auto px-5 md:px-8">
                    {/* Section Typography Header */}
                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <span
                            className={`${cinzel.className} text-[10px] tracking-[0.3em] uppercase block`}
                            style={{ color: "var(--gold)" }}
                        >
                            FAQs
                        </span>

                        <h2
                            className={`${cinzel.className} text-3xl md:text-5xl mt-3 mb-4 leading-tight font-normal`}
                            style={{ color: "var(--ink)" }}
                        >
                            Frequently Asked{" "}
                            <span
                                className={`${cormorant.className} italic font-normal`}
                                style={{
                                    background: "var(--gradient-gold)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Questions
                            </span>
                        </h2>

                        <p
                            className={`${cormorant.className} text-lg italic leading-relaxed`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            Everything you need to know before enrolling.
                        </p>
                    </div>

                    {/* Dynamic Accordion Container */}
                    <div className="space-y-3">
                        {faqData.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="rounded-xl overflow-hidden shadow-card transition-all duration-300 hover:border-gold/40"
                                    style={{
                                        background: "var(--surface-card)",
                                        border: "1px solid var(--border)",
                                    }}
                                >
                                    {/* Trigger Button */}
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-center gap-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="flex-shrink-0"
                                                style={{ color: "var(--gold)" }}
                                                aria-hidden="true"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                />
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                                <path d="M12 17h.01" />
                                            </svg>

                                            <span
                                                className={`${cinzel.className} text-base font-normal`}
                                                style={{ color: "var(--ink)" }}
                                            >
                                                {faq.question}
                                            </span>
                                        </div>

                                        {/* Accordion Arrow */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`flex-shrink-0 transition-transform duration-300 ${
                                                isOpen
                                                    ? "rotate-180"
                                                    : "rotate-0"
                                            }`}
                                            style={{ color: "var(--gold)" }}
                                            aria-hidden="true"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>

                                    {/* Smooth Expandable Content Panel */}
                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                            isOpen
                                                ? "max-h-[500px] opacity-100 border-t"
                                                : "max-h-0 opacity-0"
                                        }`}
                                        style={{
                                            borderColor: "var(--border)",
                                        }}
                                    >
                                        <div
                                            className={`${dmSans.className} px-5 pb-5 pl-14 pt-4 text-sm leading-relaxed font-normal`}
                                            style={{
                                                color: "var(--muted-ink)",
                                            }}
                                        >
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Enroll Now Section */}
            <section
                className="relative overflow-hidden py-14 md:py-8"
                style={{ background: "var(--surface-mid)" }}
            >
                {/* Gold Glow */}
                <div
                    className="absolute inset-0"
                    style={{ background: "var(--gradient-radial-gold)" }}
                />

                <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
                    {/* Label */}
                    <span
                        className={`${cinzel.className} text-[10px] uppercase tracking-[0.3em]`}
                        style={{ color: "var(--gold)" }}
                    >
                        Enroll Now
                    </span>

                    {/* Icon */}
                    <Sparkles
                        className="w-9 h-9 mx-auto mt-4 mb-4"
                        style={{ color: "var(--gold)" }}
                    />

                    {/* Heading */}
                    <h2
                        className={`${cinzel.className} text-3xl md:text-5xl lg:text-6xl leading-tight mb-5 font-normal`}
                        style={{ color: "var(--ink)" }}
                    >
                        Your Future as a{" "}
                        <span
                            className={`${cormorant.className} italic font-normal`}
                            style={{
                                background: "var(--gradient-gold)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Certified Astrologer
                        </span>
                        <br />
                        Starts With One Click
                    </h2>

                    {/* Description */}
                    <p
                        className={`${cormorant.className} text-lg md:text-xl italic max-w-2xl mx-auto mb-10 font-normal`}
                        style={{ color: "var(--muted-ink)" }}
                    >
                        Don't waste another year studying the wrong material.
                        Identify your stage, learn the right course, and step
                        into your authentic astrology career.
                    </p>

                    {/* CTA */}
                    <button
                        onClick={() => setShowEligibilityModal(true)}
                        className={`${cinzel.className} w-full md:w-auto px-12 py-5 rounded-xl tracking-[0.15em] text-base uppercase inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-gold`}
                        style={{
                            background: "var(--gradient-gold)",
                            color: "oklch(14% 0.04 270)",
                        }}
                    >
                        Know Your Stage & Enroll Now
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Features */}
                    <div
                        className={`${dmSans.className} flex flex-wrap items-center justify-center gap-6 mt-8 text-xs`}
                        style={{ color: "var(--muted-ink)" }}
                    >
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck
                                className="w-4 h-4"
                                style={{ color: "var(--gold)" }}
                            />
                            Secure Enrollment
                        </span>

                        <span className="flex items-center gap-1.5">
                            <Users
                                className="w-4 h-4"
                                style={{ color: "var(--gold)" }}
                            />
                            15,000+ Students
                        </span>

                        <span className="flex items-center gap-1.5">
                            <Award
                                className="w-4 h-4"
                                style={{ color: "var(--gold)" }}
                            />
                            Certified Programs
                        </span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="pt-14 pb-6"
                style={{ background: "var(--surface-mid)" }}
            >
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    {/* Top Section */}
                    <div className="grid md:grid-cols-4 gap-10 mb-10">
                        {/* Brand */}
                        <div className="md:col-span-1">
                            <h3
                                className={`${cinzel.className} text-2xl font-normal mb-2`}
                                style={{ color: "var(--ink)" }}
                            >
                                Dr. Vinay Bajrangi
                            </h3>

                            <p
                                className={`${cormorant.className} italic text-lg mb-4`}
                                style={{ color: "var(--gold)" }}
                            >
                                Vedic Jyotish Mastery
                            </p>

                            <p
                                className={`${dmSans.className} text-sm leading-relaxed`}
                                style={{ color: "var(--muted-ink)" }}
                            >
                                India's most trusted structured Vedic astrology
                                education. From absolute beginner to
                                research-level Jyotish master.
                            </p>
                        </div>

                        {/* Programs */}
                        <div>
                            <h4
                                className={`${cinzel.className} text-[10px] tracking-[0.25em] uppercase mb-4`}
                                style={{ color: "var(--gold)" }}
                            >
                                Programs
                            </h4>

                            <div
                                className={`${dmSans.className} flex flex-col gap-3`}
                            >
                                {[
                                    "Graduate Course",
                                    "Post Graduate",
                                    "Pre-PhD Programme",
                                    "Eligibility Test",
                                ].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="text-sm transition hover:opacity-80"
                                        style={{ color: "var(--muted-ink)" }}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4
                                className={`${cinzel.className} text-[10px] tracking-[0.25em] uppercase mb-4`}
                                style={{ color: "var(--gold)" }}
                            >
                                Quick Links
                            </h4>

                            <div
                                className={`${dmSans.className} flex flex-col gap-3`}
                            >
                                {[
                                    "About Dr. Bajrangi",
                                    "Testimonials",
                                    "FAQ",
                                    "Contact",
                                ].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="text-sm transition hover:opacity-80"
                                        style={{ color: "var(--muted-ink)" }}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4
                                className={`${cinzel.className} text-[10px] tracking-[0.25em] uppercase mb-4`}
                                style={{ color: "var(--gold)" }}
                            >
                                Legal
                            </h4>

                            <div
                                className={`${dmSans.className} flex flex-col gap-3`}
                            >
                                {[
                                    "Privacy Policy",
                                    "Terms of Service",
                                    "Refund Policy",
                                    "Disclaimer",
                                ].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="text-sm transition hover:opacity-80"
                                        style={{ color: "var(--muted-ink)" }}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div
                        className="pt-6 border-t flex flex-col md:flex-row justify-between gap-4"
                        style={{ borderColor: "var(--border)" }}
                    >
                        <p
                            className={`${dmSans.className} text-xs`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            © 2026 Dr. Vinay Bajrangi · All rights reserved.
                        </p>

                        <p
                            className={`${dmSans.className} text-xs`}
                            style={{ color: "var(--muted-ink)" }}
                        >
                            Made with care for serious astrology students.
                        </p>
                    </div>
                </div>
            </footer>

            <EligibilityModal />
        </>
    );
}
