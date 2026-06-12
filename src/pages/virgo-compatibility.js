import { useEffect } from "react";
import Head from "next/head";
// import BreadCrumb from "./component/BreadCrumb";

export default function VirgoCompatibilityApp(props) {
    const data = props?.data;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const siblings = Array.from(entry.target.parentElement.children).filter((el) =>
                            el.classList.contains("reveal")
                        );
                        const idx = siblings.indexOf(entry.target);
                        setTimeout(() => entry.target.classList.add("visible"), Math.min(idx * 80, 360));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

        const barObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll(".meter-bar, .score-bar").forEach((bar, i) => {
                            setTimeout(() => bar.classList.add("animate"), i * 100);
                        });
                        barObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        document.querySelectorAll(".compat-meter-card, .score-grid").forEach((el) => barObserver.observe(el));

        return () => {
            observer.disconnect();
            barObserver.disconnect();
        };
    }, []);

    const toggleCompat = (e) => {
        const header = e.currentTarget;
        const card = header.closest(".compat-card");
        const isOpen = card.classList.contains("open");
        document.querySelectorAll(".compat-card.open").forEach((c) => c.classList.remove("open"));
        if (!isOpen) card.classList.add("open");
    };

    return (
        <>
            <Head>
                <title>Virgo Love Compatibility With All Signs – Dr. Vinay Bajrangi</title>
                <meta
                    name="description"
                    content="Which zodiac sign is most compatible with Virgo in love and marriage? Vedic astrology insights on Virgo compatibility with all 12 signs by Dr. Vinay Bajrangi."
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="/styles/VirgoCompatibility.css" />
            </Head>

            {/* {data?.breadcrumb && <BreadCrumb data={data.breadcrumb} />} */}

            {/* HERO */}
            <section className="hero">
                <div className="hero-bg-symbol">♍</div>
                <div className="hero-glow"></div>
                <div className="grain-lines">
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                    <div className="grain-line"></div>
                </div>

                <div className="hero-content">
                    <div className="hero-eyebrow">
                        <a href="https://www.vinaybajrangi.com/love-compatibility">Love Compatibility</a>
                        <span className="sep">›</span>
                        <span>Virgo</span>
                    </div>

                    <div className="hero-sign-badge">
                        <span className="sign-glyph">♍</span>
                        <div className="sign-meta">
                            <strong>Virgo · The Maiden</strong>
                            <span>August 23 – September 22 · Earth Sign · Mercury-Ruled</span>
                        </div>
                    </div>

                    <h1 className="hero-title">
                        Virgo Love Compatibility
                        <br />
                        <em>with All 12 Signs</em>
                    </h1>
                    <p className="hero-desc">
                        Virgo loves through service, precision, and quiet devotion — noticing every detail, remembering
                        every preference. But which signs truly appreciate that depth of care? Which will mistake it for
                        control? And what does Vedic astrology reveal about the Maiden's heart beyond what any sun-sign
                        chart can show?
                    </p>

                    <div className="hero-pills">
                        <span className="pill">🌍 Earth Element</span>
                        <span className="pill">☿ Ruled by Mercury</span>
                        <span className="pill">🔄 Mutable Modality</span>
                        <span className="pill">Best with: Taurus, Capricorn, Cancer</span>
                    </div>

                    <div className="hero-ctas">
                        <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-primary">
                            ✦ Get My Personalised Report
                        </a>
                        <a href="https://www.vinaybajrangi.com/calculator/love-calculator" className="btn-outline">
                            Free Love Calculator →
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="compat-meter-card">
                        <div className="meter-title">Quick Compatibility at a Glance</div>
                        <div className="meter-row">
                            <span className="meter-sign">♉</span>
                            <span className="meter-label">Taurus</span>
                            <div className="meter-bar-bg">
                                <div className="meter-bar"></div>
                            </div>
                            <span className="meter-score">94%</span>
                        </div>
                        <div className="meter-row">
                            <span className="meter-sign">♑</span>
                            <span className="meter-label">Capricorn</span>
                            <div className="meter-bar-bg">
                                <div className="meter-bar" style={{ width: "91%" }}></div>
                            </div>
                            <span className="meter-score">91%</span>
                        </div>
                        <div className="meter-row">
                            <span className="meter-sign">♋</span>
                            <span className="meter-label">Cancer</span>
                            <div className="meter-bar-bg">
                                <div className="meter-bar" style={{ width: "85%" }}></div>
                            </div>
                            <span className="meter-score">85%</span>
                        </div>
                        <div className="meter-row">
                            <span className="meter-sign">♏</span>
                            <span className="meter-label">Scorpio</span>
                            <div className="meter-bar-bg">
                                <div className="meter-bar" style={{ width: "79%" }}></div>
                            </div>
                            <span className="meter-score">79%</span>
                        </div>
                        <div className="meter-row">
                            <span className="meter-sign">♍</span>
                            <span className="meter-label">Virgo</span>
                            <div className="meter-bar-bg">
                                <div className="meter-bar" style={{ width: "72%" }}></div>
                            </div>
                            <span className="meter-score">72%</span>
                        </div>
                        <div className="meter-row">
                            <span className="meter-sign">♊</span>
                            <span className="meter-label">Gemini</span>
                            <div className="meter-bar-bg">
                                <div className="meter-bar" style={{ width: "46%" }}></div>
                            </div>
                            <span className="meter-score">46%</span>
                        </div>
                        <div className="meter-row">
                            <span className="meter-sign">♐</span>
                            <span className="meter-label">Sagittarius</span>
                            <div className="meter-bar-bg">
                                <div className="meter-bar" style={{ width: "40%" }}></div>
                            </div>
                            <span className="meter-score">40%</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRAIT STRIP */}
            <div className="trait-strip">
                <div className="trait-inner">
                    <div className="trait-item">
                        <div className="trait-icon">🌍</div>
                        <div className="trait-text">
                            <strong>Element</strong>
                            <span>Earth</span>
                        </div>
                    </div>
                    <div className="trait-item">
                        <div className="trait-icon">☿</div>
                        <div className="trait-text">
                            <strong>Ruling Planet</strong>
                            <span>Mercury (Budh)</span>
                        </div>
                    </div>
                    <div className="trait-item">
                        <div className="trait-icon">🔄</div>
                        <div className="trait-text">
                            <strong>Modality</strong>
                            <span>Mutable</span>
                        </div>
                    </div>
                    <div className="trait-item">
                        <div className="trait-icon">🌾</div>
                        <div className="trait-text">
                            <strong>Love Strength</strong>
                            <span>Devoted, Attentive, Reliable</span>
                        </div>
                    </div>
                    <div className="trait-item">
                        <div className="trait-icon">⚠️</div>
                        <div className="trait-text">
                            <strong>Love Challenge</strong>
                            <span>Overly Critical, Self-Doubting</span>
                        </div>
                    </div>
                    <div className="trait-item">
                        <div className="trait-icon">✨</div>
                        <div className="trait-text">
                            <strong>Best Match</strong>
                            <span>Taurus, Capricorn, Cancer</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="section-divider" />

            {/* VIRGO IN LOVE: OVERVIEW */}
            <div className="virgo-overview">
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <span className="section-tag reveal">Understanding Virgo in Love</span>
                    <h2 className="section-title reveal">
                        The heart of the Maiden —<br />
                        <em>how Virgo loves</em>
                    </h2>
                    <p className="section-lead reveal">
                        Virgo is ruled by Mercury — the planet of discernment and communication — but expressed through
                        Earth rather than Air. Where Gemini (also Mercury-ruled) loves with their restless mind, Virgo
                        loves through careful, patient service. They notice what you need before you ask. They remember
                        what you mentioned in passing three months ago. They show love through action, not declaration.
                    </p>

                    <div className="overview-grid">
                        <div className="overview-card reveal">
                            <div className="ov-icon">🌾</div>
                            <div className="ov-title">Love Style: Service, Detail, and Quiet Loyalty</div>
                            <p className="ov-text">
                                Virgo's love language is acts of service — delivered with precision and consistency.
                                They may not write you poetry, but they will remember your doctor's appointment, fix
                                what is broken in your life, and make sure you eat. To a Virgo, showing up reliably is
                                the deepest declaration of love.
                            </p>
                        </div>
                        <div className="overview-card reveal">
                            <div className="ov-icon">🔍</div>
                            <div className="ov-title">The Challenge: Criticism and Inner Perfectionism</div>
                            <p className="ov-text">
                                Virgo's analytical mind never truly switches off — including in relationships. Their
                                constructive criticism comes from love, but lands as judgement. Partners who are
                                emotionally sensitive often feel they can never measure up to Virgo's unspoken
                                standards. Virgo must learn that love sometimes means accepting imperfection gracefully.
                            </p>
                        </div>
                        <div className="overview-card reveal">
                            <div className="ov-icon">🕊️</div>
                            <div className="ov-title">What Virgo Needs: Appreciation and Stability</div>
                            <p className="ov-text">
                                Virgo gives enormously and asks for little — but what they do ask for is genuine
                                appreciation and emotional reliability. They are terrified of being taken for granted. A
                                partner who notices and sincerely acknowledges Virgo's contributions — however small —
                                will have their unwavering devotion.
                            </p>
                        </div>
                        <div className="overview-card reveal">
                            <div className="ov-icon">🪐</div>
                            <div className="ov-title">Vedic Lens: Mercury, 6th House &amp; Navamsa</div>
                            <p className="ov-text">
                                In Vedic astrology, Virgo (Kanya) is ruled by Mercury and associated with the 6th house
                                of health, service, and refinement. Unlike Gemini's Mercury — which rules the 3rd house
                                of communication — Virgo's Mercury is expressed through perfectionism, healing, and
                                duty. The 7th house for Virgo Lagna is Pisces, ruled by Jupiter — meaning the ideal
                                partner archetype for Virgo is someone who is wise, compassionate, and spiritually
                                expansive. The Navamsa chart is essential to verify whether this manifests in practice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="section-divider" />

            {/* COMPATIBILITY BREAKDOWN */}
            <div className="compatibility-breakdown">
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <span className="section-tag reveal">Virgo with Each Sign</span>
                    <h2 className="section-title reveal">
                        Virgo compatibility —<br />
                        <em>sign by sign</em>
                    </h2>
                    <p className="section-lead reveal">
                        Tap any sign to reveal a full breakdown: love chemistry, long-term potential, and the Vedic
                        astrology perspective that goes far beyond surface-level sun-sign matching.
                    </p>

                    <div className="compat-layout">
                        {/* TAURUS */}
                        <div className="compat-card reveal">
                            <div className="compat-header" onClick={toggleCompat}>
                                <div
                                    className="compat-sign-icon"
                                    style={{ background: "linear-gradient(135deg,#2D6A2A,#5A9E55)" }}
                                >
                                    ♉
                                </div>
                                <div className="compat-sign-info">
                                    <h3>Virgo + Taurus</h3>
                                    <p>Earth meets Earth · Apr 20 – May 20</p>
                                </div>
                                <div className="compat-level">
                                    <div className="compat-stars">★★★★★</div>
                                    <span className="compat-label label-excellent">Excellent</span>
                                </div>
                                <span className="compat-toggle">▾</span>
                            </div>
                            <div className="compat-body">
                                <div className="compat-body-inner">
                                    <div className="compat-aspect">
                                        <h4>Love Chemistry</h4>
                                        <p>
                                            Two earth signs who speak the same language of reliability, sensory
                                            pleasure, and quiet loyalty. Taurus' steadfastness reassures Virgo's anxious
                                            mind; Virgo's attentiveness gives Taurus the feeling of being genuinely
                                            cared for at a practical level. The connection deepens slowly, like roots
                                            growing into rich soil.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Long-Term Potential</h4>
                                        <p>
                                            Exceptional. Both value consistency, a harmonious home, and a relationship
                                            built on genuine trust rather than drama. Arguments are rare; when they do
                                            occur, both have the patience to resolve them without theatrics. This is one
                                            of the zodiac's most naturally stable and genuinely satisfying long-term
                                            pairings.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Vedic Astrology Note</h4>
                                        <p>
                                            Venus rules Taurus and Mercury rules Virgo — two naturally friendly planets
                                            in Vedic astrology. Taurus is Virgo's 9th house — the house of fortune,
                                            higher wisdom, and dharma. This makes Taurus partners a source of
                                            significant good fortune and life purpose for Virgo. Dr. Bajrangi notes that
                                            this house connection often brings long-lasting happiness and a sense of
                                            rightness to the relationship.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CAPRICORN */}
                        <div className="compat-card reveal">
                            <div className="compat-header" onClick={toggleCompat}>
                                <div
                                    className="compat-sign-icon"
                                    style={{ background: "linear-gradient(135deg,#5A5A5A,#9A9A9A)" }}
                                >
                                    ♑
                                </div>
                                <div className="compat-sign-info">
                                    <h3>Virgo + Capricorn</h3>
                                    <p>Earth meets Earth · Dec 22 – Jan 19</p>
                                </div>
                                <div className="compat-level">
                                    <div className="compat-stars">★★★★★</div>
                                    <span className="compat-label label-excellent">Excellent</span>
                                </div>
                                <span className="compat-toggle">▾</span>
                            </div>
                            <div className="compat-body">
                                <div className="compat-body-inner">
                                    <div className="compat-aspect">
                                        <h4>Love Chemistry</h4>
                                        <p>
                                            Virgo's meticulous service meets Capricorn's disciplined ambition — two
                                            signs who show love through effort rather than emotion, and who deeply
                                            respect that quality in each other. There are no games here. Both mean what
                                            they say and deliver on what they promise, which creates extraordinary
                                            trust.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Long-Term Potential</h4>
                                        <p>
                                            Very high. Both build relationships the way they build careers — through
                                            steady, purposeful effort. They are unlikely to give up on each other during
                                            hard times. The relationship deepens significantly with age as both grow
                                            into emotional vulnerability alongside their natural practical strengths.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Vedic Astrology Note</h4>
                                        <p>
                                            Saturn rules Capricorn and has a friendly relationship with Mercury in Vedic
                                            astrology. Capricorn is Virgo's 5th house — the house of romance, love, and
                                            creativity. This makes Capricorn the natural romantic partner for Virgo in
                                            Vedic terms. When both Mercury and Saturn are strong in the respective
                                            charts, this pairing produces one of Vedic astrology's most enduring love
                                            stories.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CANCER */}
                        <div className="compat-card reveal">
                            <div className="compat-header" onClick={toggleCompat}>
                                <div
                                    className="compat-sign-icon"
                                    style={{ background: "linear-gradient(135deg,#2B6CB0,#63B3ED)" }}
                                >
                                    ♋
                                </div>
                                <div className="compat-sign-info">
                                    <h3>Virgo + Cancer</h3>
                                    <p>Earth meets Water · Jun 21 – Jul 22</p>
                                </div>
                                <div className="compat-level">
                                    <div className="compat-stars">★★★★★</div>
                                    <span className="compat-label label-excellent">Excellent</span>
                                </div>
                                <span className="compat-toggle">▾</span>
                            </div>
                            <div className="compat-body">
                                <div className="compat-body-inner">
                                    <div className="compat-aspect">
                                        <h4>Love Chemistry</h4>
                                        <p>
                                            Earth and Water nourish each other naturally. Cancer's emotional depth and
                                            nurturing warmth gives Virgo the acceptance they are so rarely offered;
                                            Virgo's practical care and reliability gives Cancer the security their soul
                                            constantly seeks. Both are givers — and here, both finally receive in equal
                                            measure.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Long-Term Potential</h4>
                                        <p>
                                            Very high. Both prioritise domestic life, emotional security, and genuine
                                            partnership over excitement or novelty. Cancer learns to receive Virgo's
                                            love as action rather than words; Virgo learns to offer emotional presence
                                            rather than only practical solutions. A pairing that grows more beautiful
                                            and more comfortable over time.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Vedic Astrology Note</h4>
                                        <p>
                                            The Moon rules Cancer and has a neutral but workable relationship with
                                            Mercury in Vedic astrology. Cancer is Virgo's 11th house — the house of
                                            gains, long-term goals, and social networks. Cancer partners frequently
                                            bring significant material and emotional rewards into Virgo's life, and the
                                            two often build shared goals and community together with remarkable ease.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SCORPIO */}
                        <div className="compat-card reveal">
                            <div className="compat-header" onClick={toggleCompat}>
                                <div
                                    className="compat-sign-icon"
                                    style={{ background: "linear-gradient(135deg,#7B2D8B,#B05EC0)" }}
                                >
                                    ♏
                                </div>
                                <div className="compat-sign-info">
                                    <h3>Virgo + Scorpio</h3>
                                    <p>Earth meets Water · Oct 23 – Nov 21</p>
                                </div>
                                <div className="compat-level">
                                    <div className="compat-stars">★★★★☆</div>
                                    <span className="compat-label label-good">Good</span>
                                </div>
                                <span className="compat-toggle">▾</span>
                            </div>
                            <div className="compat-body">
                                <div className="compat-body-inner">
                                    <div className="compat-aspect">
                                        <h4>Love Chemistry</h4>
                                        <p>
                                            A quietly powerful pairing. Scorpio's depth and intensity draws Virgo's
                                            analytical mind into territory they would never venture alone. Virgo's
                                            reliability and perceptiveness earns Scorpio's deep trust — a commodity
                                            Scorpio grants to almost no one. Both are private, observant, and prefer
                                            substance over spectacle.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Long-Term Potential</h4>
                                        <p>
                                            Good. Both are loyal, neither is frivolous, and both value a relationship
                                            that means something. Scorpio's emotional intensity can overwhelm Virgo's
                                            more controlled nature; Virgo's criticism can trigger Scorpio's defensive
                                            instincts. With mutual respect and the willingness to be truly known, this
                                            pairing reaches surprising depth.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Vedic Astrology Note</h4>
                                        <p>
                                            Mars and Ketu co-rule Scorpio. Mars is neutral toward Mercury in Vedic
                                            astrology. Scorpio is Virgo's 3rd house — the house of communication,
                                            courage, and short journeys. Scorpio partners often push Virgo to speak more
                                            boldly, express more directly, and take risks in love that Virgo's cautious
                                            nature would otherwise avoid. This makes the pairing transformative for
                                            Virgo's communication patterns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PISCES (opposite) */}
                        <div className="compat-card reveal">
                            <div className="compat-header" onClick={toggleCompat}>
                                <div
                                    className="compat-sign-icon"
                                    style={{ background: "linear-gradient(135deg,#3B82B0,#82C8E0)" }}
                                >
                                    ♓
                                </div>
                                <div className="compat-sign-info">
                                    <h3>Virgo + Pisces</h3>
                                    <p>Earth meets Water · Opposite Signs · Feb 19 – Mar 20</p>
                                </div>
                                <div className="compat-level">
                                    <div className="compat-stars">★★★★☆</div>
                                    <span className="compat-label label-good">Good</span>
                                </div>
                                <span className="compat-toggle">▾</span>
                            </div>
                            <div className="compat-body">
                                <div className="compat-body-inner">
                                    <div className="compat-aspect">
                                        <h4>Love Chemistry</h4>
                                        <p>
                                            Opposite signs on the zodiac wheel — and the complementarity is profound.
                                            Virgo brings Pisces the order and clarity they dream of but cannot create
                                            alone. Pisces brings Virgo the poetry, compassion, and spiritual dimension
                                            they secretly crave but rarely access. Each offers the other what they
                                            cannot give themselves.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Long-Term Potential</h4>
                                        <p>
                                            Good when both are emotionally mature. Virgo must resist the urge to fix or
                                            improve Pisces; Pisces must develop enough groundedness not to overwhelm
                                            Virgo with emotional chaos. The opposition creates tension but also
                                            wholeness — these two genuinely complete each other when both are willing to
                                            stretch.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Vedic Astrology Note</h4>
                                        <p>
                                            Pisces is Virgo's 7th house — the house of marriage and committed
                                            partnership. Jupiter rules Pisces and is exalted in Cancer, the sign
                                            friendly to both Virgo's concerns. This makes Pisces the natural marriage
                                            axis for Virgo Lagna natives. Virgo's Mercury and Pisces' Jupiter are in
                                            mutual opposition — a tension that can produce extraordinary wisdom and
                                            balance when both partners are operating from strength rather than anxiety.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* VIRGO + VIRGO */}
                        <div className="compat-card reveal">
                            <div className="compat-header" onClick={toggleCompat}>
                                <div
                                    className="compat-sign-icon"
                                    style={{
                                        background: "linear-gradient(135deg,var(--sign-primary),var(--sign-secondary))",
                                    }}
                                >
                                    ♍
                                </div>
                                <div className="compat-sign-info">
                                    <h3>Virgo + Virgo</h3>
                                    <p>Earth meets Earth · Same Sign</p>
                                </div>
                                <div className="compat-level">
                                    <div className="compat-stars">★★★★☆</div>
                                    <span className="compat-label label-good">Good</span>
                                </div>
                                <span className="compat-toggle">▾</span>
                            </div>
                            <div className="compat-body">
                                <div className="compat-body-inner">
                                    <div className="compat-aspect">
                                        <h4>Love Chemistry</h4>
                                        <p>
                                            Two Virgos understand each other's need for order, routine, and genuine
                                            helpfulness in a way no other sign can. There is immediate ease — no need to
                                            explain why the cupboards must be organised a certain way or why a plan must
                                            be made three days in advance. The comfort is real and immediate.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Long-Term Potential</h4>
                                        <p>
                                            Good when both avoid the trap of mutual criticism. Two Virgos can easily
                                            fall into a pattern of correcting each other endlessly, which slowly drains
                                            the warmth from the relationship. Both must consciously practise
                                            appreciation rather than improvement, and bring in experiences of joy and
                                            spontaneity to prevent the relationship becoming overly functional.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Vedic Astrology Note</h4>
                                        <p>
                                            Two Mercury-ruled charts amplify both Mercury's analytical precision and its
                                            anxiety. Dr. Bajrangi pays particular attention to the Moon signs of both
                                            individuals in this pairing — if both Moon signs are in compatible, stable
                                            placements, this relationship has great emotional groundedness. If both
                                            Moons are in volatile positions, the mutual nervousness can become mutually
                                            reinforcing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* LIBRA */}
                        <div className="compat-card reveal">
                            <div className="compat-header" onClick={toggleCompat}>
                                <div
                                    className="compat-sign-icon"
                                    style={{ background: "linear-gradient(135deg,#2080D0,#60B8F0)" }}
                                >
                                    ♎
                                </div>
                                <div className="compat-sign-info">
                                    <h3>Virgo + Libra</h3>
                                    <p>Earth meets Air · Sep 23 – Oct 22</p>
                                </div>
                                <div className="compat-level">
                                    <div className="compat-stars">★★★☆☆</div>
                                    <span className="compat-label label-moderate">Moderate</span>
                                </div>
                                <span className="compat-toggle">▾</span>
                            </div>
                            <div className="compat-body">
                                <div className="compat-body-inner">
                                    <div className="compat-aspect">
                                        <h4>Love Chemistry</h4>
                                        <p>
                                            Both are refined, thoughtful, and appreciate beauty in different ways.
                                            Libra's social grace and aesthetic sensibility appeals to Virgo's eye for
                                            quality. Virgo's attentiveness and substance gives Libra a deeper experience
                                            than their more superficial relationships. But Libra's indecisiveness
                                            frustrates Virgo, and Virgo's critical streak unsettles Libra's need for
                                            harmony.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Long-Term Potential</h4>
                                        <p>
                                            Moderate. The intellectual connection is real; the emotional connection
                                            requires more effort. Virgo needs to soften their delivery; Libra needs to
                                            develop the resilience to receive honest feedback. When both find this
                                            middle ground, the relationship has genuine warmth and complementary
                                            strengths.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Vedic Astrology Note</h4>
                                        <p>
                                            Venus rules Libra and is a friend of Mercury in Vedic astrology. Libra is
                                            Virgo's 2nd house — the house of accumulated wealth, family, and speech.
                                            Libra partners often have a significant role in Virgo's financial life and
                                            family relationships. Dr. Bajrangi notes that 2nd house relationships can
                                            bring material gain but also vocal conflict — how both partners communicate
                                            about values and money determines this pairing's long-term success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ARIES */}
                        <div className="compat-card reveal">
                            <div className="compat-header" onClick={toggleCompat}>
                                <div
                                    className="compat-sign-icon"
                                    style={{ background: "linear-gradient(135deg,#C0351A,#F26B3A)" }}
                                >
                                    ♈
                                </div>
                                <div className="compat-sign-info">
                                    <h3>Virgo + Aries</h3>
                                    <p>Earth meets Fire · Mar 21 – Apr 19</p>
                                </div>
                                <div className="compat-level">
                                    <div className="compat-stars">★★☆☆☆</div>
                                    <span className="compat-label label-challenging">Challenging</span>
                                </div>
                                <span className="compat-toggle">▾</span>
                            </div>
                            <div className="compat-body">
                                <div className="compat-body-inner">
                                    <div className="compat-aspect">
                                        <h4>Love Chemistry</h4>
                                        <p>
                                            An initially intriguing mismatch. Aries' boldness and directness can seem
                                            refreshingly uncomplicated to the over-thinking Virgo. Virgo's competence
                                            and calm can ground the impulsive Aries. But Aries moves at a pace Virgo
                                            finds reckless; Virgo's deliberateness frustrates Aries deeply.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Long-Term Potential</h4>
                                        <p>
                                            Low without significant mutual patience. Aries acts; Virgo analyses. Aries
                                            forgets; Virgo remembers everything. Aries wants spontaneity; Virgo needs a
                                            plan. These differences are not insurmountable, but they require both
                                            partners to substantially stretch beyond their natural mode — consistently,
                                            not just at the beginning.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Vedic Astrology Note</h4>
                                        <p>
                                            Mars rules Aries and is an enemy of Mercury in Vedic astrology — one of the
                                            more significant planetary incompatibilities in the system. Aries is Virgo's
                                            8th house — the house of transformation, hidden assets, and sudden change.
                                            This placement means Aries partners often bring significant, unexpected
                                            upheaval into Virgo's life. The relationship is transformative and rarely
                                            comfortable, though it can create profound growth when both are strong
                                            enough to navigate it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* GEMINI */}
                        <div className="compat-card reveal">
                            <div className="compat-header" onClick={toggleCompat}>
                                <div
                                    className="compat-sign-icon"
                                    style={{ background: "linear-gradient(135deg,#3A8A2A,#5CB84A)" }}
                                >
                                    ♊
                                </div>
                                <div className="compat-sign-info">
                                    <h3>Virgo + Gemini</h3>
                                    <p>Earth meets Air · Both Mercury-Ruled · May 21 – Jun 20</p>
                                </div>
                                <div className="compat-level">
                                    <div className="compat-stars">★★☆☆☆</div>
                                    <span className="compat-label label-challenging">Challenging</span>
                                </div>
                                <span className="compat-toggle">▾</span>
                            </div>
                            <div className="compat-body">
                                <div className="compat-body-inner">
                                    <div className="compat-aspect">
                                        <h4>Love Chemistry</h4>
                                        <p>
                                            Shared Mercury rulership creates immediate conversational ease — they can
                                            talk for hours. But the similarity ends there. Gemini is Air: restless,
                                            abstract, multi-directional. Virgo is Earth: grounded, methodical,
                                            detail-oriented. Gemini finds Virgo rigid; Virgo finds Gemini unreliable.
                                            The intellect connects; the temperament clashes.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Long-Term Potential</h4>
                                        <p>
                                            Challenging. Gemini's inconsistency triggers Virgo's anxiety; Virgo's
                                            exacting standards make Gemini feel trapped. Both must honour the other's
                                            fundamentally different expression of their shared planetary ruler. Works
                                            best when both are intellectually mature and willing to meet each other's
                                            emotional needs even when they don't share them.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Vedic Astrology Note</h4>
                                        <p>
                                            Though both are Mercury-ruled, Gemini expresses Mercury as curiosity and
                                            communication while Virgo expresses it as precision and analysis. In Vedic
                                            astrology, Gemini is Virgo's 10th house — the house of career, reputation,
                                            and public standing. Gemini partners often play a significant role in
                                            shaping Virgo's professional identity and public reputation, making this
                                            more of a career-significant partnership than a naturally romantic one.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* LEO */}
                        <div className="compat-card reveal">
                            <div className="compat-header" onClick={toggleCompat}>
                                <div
                                    className="compat-sign-icon"
                                    style={{ background: "linear-gradient(135deg,#C0392B,#E05A4E)" }}
                                >
                                    ♌
                                </div>
                                <div className="compat-sign-info">
                                    <h3>Virgo + Leo</h3>
                                    <p>Earth meets Fire · Jul 23 – Aug 22</p>
                                </div>
                                <div className="compat-level">
                                    <div className="compat-stars">★★★☆☆</div>
                                    <span className="compat-label label-moderate">Moderate</span>
                                </div>
                                <span className="compat-toggle">▾</span>
                            </div>
                            <div className="compat-body">
                                <div className="compat-body-inner">
                                    <div className="compat-aspect">
                                        <h4>Love Chemistry</h4>
                                        <p>
                                            Adjacent signs who see the world from different altitudes. Leo's warmth and
                                            generosity can light up Virgo's understated world; Virgo's quiet competence
                                            and attentiveness grounds Leo's need for significance. But Leo needs
                                            visible, vocal appreciation and Virgo tends toward quiet love — a gap that
                                            must be consciously bridged.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Long-Term Potential</h4>
                                        <p>
                                            Moderate. Virgo's critical nature is the biggest threat — Leo's pride cannot
                                            sustain sustained criticism without withdrawing dramatically. Virgo must
                                            learn to lead with appreciation and soften every correction with warmth. Leo
                                            must resist interpreting Virgo's practical focus as a lack of feeling. Both
                                            must make themselves understood before making themselves right.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Vedic Astrology Note</h4>
                                        <p>
                                            The Sun rules Leo and is a friend of Mercury in Vedic astrology, providing a
                                            warm underlying tone. Leo is Virgo's 12th house — the house of loss,
                                            isolation, and spiritual retreat. In Vedic astrology, 12th house
                                            relationships often carry themes of hidden sacrifice or behind-the-scenes
                                            emotional investment. Leo partners may play a significant spiritual or
                                            private role in Virgo's life that is rarely visible publicly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SAGITTARIUS */}
                        <div className="compat-card reveal">
                            <div className="compat-header" onClick={toggleCompat}>
                                <div
                                    className="compat-sign-icon"
                                    style={{ background: "linear-gradient(135deg,#6B3FA0,#9B6BD0)" }}
                                >
                                    ♐
                                </div>
                                <div className="compat-sign-info">
                                    <h3>Virgo + Sagittarius</h3>
                                    <p>Earth meets Fire · Nov 22 – Dec 21</p>
                                </div>
                                <div className="compat-level">
                                    <div className="compat-stars">★★☆☆☆</div>
                                    <span className="compat-label label-challenging">Challenging</span>
                                </div>
                                <span className="compat-toggle">▾</span>
                            </div>
                            <div className="compat-body">
                                <div className="compat-body-inner">
                                    <div className="compat-aspect">
                                        <h4>Love Chemistry</h4>
                                        <p>
                                            An intellectually stimulating but emotionally demanding pairing.
                                            Sagittarius' optimism and philosophical scope genuinely fascinates Virgo;
                                            Virgo's depth of knowledge and competence impresses Sagittarius. But
                                            Sagittarius is reckless where Virgo is careful; Virgo is precise where
                                            Sagittarius is sweeping. The worldviews collide as often as they connect.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Long-Term Potential</h4>
                                        <p>
                                            Low without profound mutual respect. Sagittarius finds Virgo's attention to
                                            detail suffocating; Virgo finds Sagittarius irresponsible and superficial.
                                            Both assessments are unfair, but both are predictable. Works best when
                                            Sagittarius has developed maturity and Virgo has developed the capacity to
                                            release control — neither of which comes naturally.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Vedic Astrology Note</h4>
                                        <p>
                                            Jupiter rules Sagittarius and is a neutral planet toward Mercury in Vedic
                                            astrology. Sagittarius is Virgo's 4th house — the house of home, mother, and
                                            emotional foundations. This creates a paradox: Sagittarius partners often
                                            feel like home to Virgo on a soul level, even when the day-to-day
                                            relationship is fraught. Dr. Bajrangi notes that many Virgo natives feel a
                                            deep, inexplicable draw to Sagittarius partners that the sun-sign
                                            incompatibility alone cannot explain.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AQUARIUS */}
                        <div className="compat-card reveal">
                            <div className="compat-header" onClick={toggleCompat}>
                                <div
                                    className="compat-sign-icon"
                                    style={{ background: "linear-gradient(135deg,#1A5A9E,#4A9ECC)" }}
                                >
                                    ♒
                                </div>
                                <div className="compat-sign-info">
                                    <h3>Virgo + Aquarius</h3>
                                    <p>Earth meets Air · Jan 20 – Feb 18</p>
                                </div>
                                <div className="compat-level">
                                    <div className="compat-stars">★★★☆☆</div>
                                    <span className="compat-label label-moderate">Moderate</span>
                                </div>
                                <span className="compat-toggle">▾</span>
                            </div>
                            <div className="compat-body">
                                <div className="compat-body-inner">
                                    <div className="compat-aspect">
                                        <h4>Love Chemistry</h4>
                                        <p>
                                            Both are analytical and idealistic in their own ways — Virgo about practical
                                            improvement, Aquarius about systemic change. The intellectual respect can be
                                            strong. But Aquarius' emotional detachment and unpredictability unnerves
                                            Virgo's need for reliability, and Virgo's focus on detail can feel
                                            microscopic to the big-picture Aquarius.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Long-Term Potential</h4>
                                        <p>
                                            Moderate, with effort. Both must stretch: Virgo toward more emotional
                                            openness and tolerance for unpredictability; Aquarius toward more
                                            consistency and personal warmth. When both operate from maturity, there is
                                            genuine complementarity — Virgo grounds Aquarius' visions in actionable
                                            reality; Aquarius expands Virgo's worldview beyond the immediate and
                                            practical.
                                        </p>
                                    </div>
                                    <div className="compat-aspect">
                                        <h4>Vedic Astrology Note</h4>
                                        <p>
                                            Saturn rules Aquarius and has a friendly relationship with Mercury in Vedic
                                            astrology — a more workable planetary dynamic than many of Virgo's
                                            challenging pairings. Aquarius is Virgo's 6th house — the house of conflict,
                                            health, and service. This placement means Aquarius partners often bring
                                            themes of shared work, health awareness, or service into the relationship.
                                            The connection can be productive and intellectually rich, but rarely deeply
                                            romantic without supportive chart factors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p
                        style={{
                            fontSize: "0.78rem",
                            color: "var(--text-soft)",
                            marginTop: "18px",
                            fontStyle: "italic",
                            textAlign: "center",
                        }}
                    >
                        All 12 signs covered above. For a personalised compatibility reading based on your full birth
                        chart, see the Love &amp; Relationship Report.
                    </p>
                </div>
            </div>

            <hr className="section-divider" />

            {/* SCORE SUMMARY */}
            <div className="score-section">
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <span className="section-tag reveal" style={{ textAlign: "center", display: "block" }}>
                        At a Glance
                    </span>
                    <h2 className="section-title reveal" style={{ textAlign: "center", margin: "0 0 36px" }}>
                        Virgo compatibility <em>scores</em>
                    </h2>
                    <div className="score-grid">
                        <div className="score-card reveal">
                            <div className="score-sign">♉</div>
                            <div className="score-name">Taurus</div>
                            <div className="score-bar-wrap">
                                <div className="score-bar"></div>
                            </div>
                            <div className="score-pct">94%</div>
                        </div>
                        <div className="score-card reveal">
                            <div className="score-sign">♑</div>
                            <div className="score-name">Capricorn</div>
                            <div className="score-bar-wrap">
                                <div className="score-bar"></div>
                            </div>
                            <div className="score-pct">91%</div>
                        </div>
                        <div className="score-card reveal">
                            <div className="score-sign">♋</div>
                            <div className="score-name">Cancer</div>
                            <div className="score-bar-wrap">
                                <div className="score-bar"></div>
                            </div>
                            <div className="score-pct">85%</div>
                        </div>
                        <div className="score-card reveal">
                            <div className="score-sign">♏</div>
                            <div className="score-name">Scorpio</div>
                            <div className="score-bar-wrap">
                                <div className="score-bar"></div>
                            </div>
                            <div className="score-pct">79%</div>
                        </div>
                        <div className="score-card reveal">
                            <div className="score-sign">♓</div>
                            <div className="score-name">Pisces</div>
                            <div className="score-bar-wrap">
                                <div className="score-bar"></div>
                            </div>
                            <div className="score-pct">74%</div>
                        </div>
                        <div className="score-card reveal">
                            <div className="score-sign">♍</div>
                            <div className="score-name">Virgo</div>
                            <div className="score-bar-wrap">
                                <div className="score-bar"></div>
                            </div>
                            <div className="score-pct">72%</div>
                        </div>
                        <div className="score-card reveal">
                            <div className="score-sign">♎</div>
                            <div className="score-name">Libra</div>
                            <div className="score-bar-wrap">
                                <div className="score-bar"></div>
                            </div>
                            <div className="score-pct">60%</div>
                        </div>
                        <div className="score-card reveal">
                            <div className="score-sign">♒</div>
                            <div className="score-name">Aquarius</div>
                            <div className="score-bar-wrap">
                                <div className="score-bar"></div>
                            </div>
                            <div className="score-pct">57%</div>
                        </div>
                        <div className="score-card reveal">
                            <div className="score-sign">♌</div>
                            <div className="score-name">Leo</div>
                            <div className="score-bar-wrap">
                                <div className="score-bar"></div>
                            </div>
                            <div className="score-pct">54%</div>
                        </div>
                        <div className="score-card reveal">
                            <div className="score-sign">♊</div>
                            <div className="score-name">Gemini</div>
                            <div className="score-bar-wrap">
                                <div className="score-bar"></div>
                            </div>
                            <div className="score-pct">46%</div>
                        </div>
                        <div className="score-card reveal">
                            <div className="score-sign">♈</div>
                            <div className="score-name">Aries</div>
                            <div className="score-bar-wrap">
                                <div className="score-bar"></div>
                            </div>
                            <div className="score-pct">42%</div>
                        </div>
                        <div className="score-card reveal">
                            <div className="score-sign">♐</div>
                            <div className="score-name">Sagittarius</div>
                            <div className="score-bar-wrap">
                                <div className="score-bar"></div>
                            </div>
                            <div className="score-pct">40%</div>
                        </div>
                    </div>
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "0.75rem",
                            color: "var(--text-soft)",
                            marginTop: "18px",
                            fontStyle: "italic",
                        }}
                    >
                        General sun-sign compatibility only. Personalised scores require full birth chart analysis.
                    </p>
                </div>
            </div>

            <hr className="section-divider" />

            {/* REPORT CALLOUT */}
            <div className="report-callout-section">
                <div className="report-callout reveal">
                    <div>
                        <span className="rc-tag">For Virgo · Personalised Report</span>
                        <h2 className="rc-title">
                            Mercury's precision applied to
                            <br />
                            <em>your actual love life</em>
                        </h2>
                        <p className="rc-desc">
                            Sun-sign compatibility gives you a starting direction. What determines your actual
                            relationships is the full picture: Mercury's house and sign, your 7th house lord (Jupiter —
                            the planet of wisdom and expansion for Virgo Lagna), Venus placement, Navamsa compatibility,
                            and your current Dasha period. Dr. Vinay Bajrangi's Love &amp; Relationship Report covers
                            all of this — written, detailed, and delivered within 3–5 working days.
                        </p>
                        <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-primary">
                            ✦ Get My Love &amp; Relationship Report
                        </a>
                    </div>
                    <div className="rc-side">
                        <div className="rc-price">
                            <div className="from">Starts from</div>
                            <div className="amount">₹ 799</div>
                            <div className="note">
                                Written report · Delivered
                                <br />
                                in 3–5 working days
                            </div>
                        </div>
                        <a
                            href="https://www.vinaybajrangi.com/calculator/love-calculator"
                            className="btn-outline"
                            style={{ fontSize: "0.82rem", justifyContent: "center", width: "100%", marginTop: "4px" }}
                        >
                            Try Free Calculator →
                        </a>
                    </div>
                </div>
            </div>

            <hr className="section-divider" />

            {/* GEMSTONE WEARABLES FOR VIRGO */}
            <div className="gem-strip">
                <div className="gem-strip-inner">
                    <span className="section-tag section-tag-gemstone reveal">
                        Vedic Remedies for Virgo
                    </span>
                    <h2 className="section-title reveal">
                        Gemstone wearables <em>for Virgo love</em>
                    </h2>
                    <p className="section-lead reveal" style={{ margin: "0" }}>
                        Mercury-ruled Virgo benefits from gemstones that sharpen emotional expression (not just
                        analytical ability), strengthen Venus — the natural significator of love — and support Jupiter,
                        the 7th house lord for Virgo Lagna who governs the quality of marriage. All wearables must be
                        prescribed after chart analysis.
                    </p>

                    <div className="gem-strip-cards">
                        <a
                            href="https://www.vinaybajrangi.com/love-and-relationship-report"
                            className="gem-card reveal"
                        >
                            <span className="gem-emoji">💚</span>
                            <div className="gem-name">Emerald Pendant / Bracelet</div>
                            <p className="gem-desc">
                                Emerald (Panna) strengthens Mercury — Virgo's ruling planet. For Virgo natives, it
                                sharpens the capacity to communicate love more directly, reduces the over-critical
                                analytical mode, and brings greater ease and warmth to verbal expression in
                                relationships.
                            </p>
                            <div className="gem-planet">☿ Mercury · Worn on Wednesday</div>
                        </a>
                        <a
                            href="https://www.vinaybajrangi.com/love-and-relationship-report"
                            className="gem-card reveal"
                        >
                            <span className="gem-emoji">💛</span>
                            <div className="gem-name">Yellow Sapphire Pendant / Bracelet</div>
                            <p className="gem-desc">
                                Jupiter rules Pisces — Virgo's 7th house of marriage — making Pukhraj the most important
                                love remedy for Virgo Lagna. Yellow Sapphire strengthens the 7th house lord directly,
                                improving prospects for a wise, spiritually aligned partner and easing obstacles to love
                                marriage.
                            </p>
                            <div className="gem-planet">♃ Jupiter · Worn on Thursday</div>
                        </a>
                        <a
                            href="https://www.vinaybajrangi.com/love-and-relationship-report"
                            className="gem-card reveal"
                        >
                            <span className="gem-emoji">💎</span>
                            <div className="gem-name">Diamond / White Sapphire Pendant</div>
                            <p className="gem-desc">
                                Venus is the natural karaka (significator) of love and romance for all charts. Virgo's
                                Mercury-dominant nature can suppress Venus' softer emotional and sensual expression — a
                                diamond or white sapphire wearable reactivates this, attracting a partner who offers
                                genuine warmth and romantic depth.
                            </p>
                            <div className="gem-planet">♀ Venus · Worn on Friday</div>
                        </a>
                    </div>

                    <div
                        style={{
                            background: "var(--sign-xpale)",
                            borderRadius: "14px",
                            padding: "18px 22px",
                            marginTop: "20px",
                            borderLeft: "3px solid var(--saffron)",
                            maxWidth: "680px",
                            display: "flex",
                            gap: "12px",
                            alignItems: "flex-start",
                        }}
                        className="reveal"
                    >
                        <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>⚠️</span>
                        <p style={{ fontSize: "0.8rem", color: "var(--text-mid)", lineHeight: "1.65" }}>
                            <strong style={{ color: "var(--text-dark)" }}>Always consult before wearing.</strong>{" "}
                            Gemstone remedies must be prescribed only after your complete birth chart is analysed. Even
                            a stone aligned with your ruling planet can cause harm if it conflicts with another
                            placement in your chart. Dr. Bajrangi recommends all wearables only within a full
                            consultation or written report.
                        </p>
                    </div>
                </div>
            </div>

            <hr className="section-divider" />

            {/* SIGNS NAV */}
            <div className="signs-nav">
                <div className="signs-nav-inner">
                    <h3 className="signs-nav-title">
                        Explore compatibility for <em>other signs</em>
                    </h3>
                    <div className="signs-nav-grid">
                        <a href="https://www.vinaybajrangi.com/love-compatibility/aries" className="sign-nav-item">
                            <span className="sni-symbol">♈</span>
                            <span className="sni-name">Aries</span>
                        </a>
                        <a href="https://www.vinaybajrangi.com/love-compatibility/taurus" className="sign-nav-item">
                            <span className="sni-symbol">♉</span>
                            <span className="sni-name">Taurus</span>
                        </a>
                        <a href="https://www.vinaybajrangi.com/love-compatibility/gemini" className="sign-nav-item">
                            <span className="sni-symbol">♊</span>
                            <span className="sni-name">Gemini</span>
                        </a>
                        <a href="https://www.vinaybajrangi.com/love-compatibility/cancer" className="sign-nav-item">
                            <span className="sni-symbol">♋</span>
                            <span className="sni-name">Cancer</span>
                        </a>
                        <a href="https://www.vinaybajrangi.com/love-compatibility/leo" className="sign-nav-item">
                            <span className="sni-symbol">♌</span>
                            <span className="sni-name">Leo</span>
                        </a>
                        <a
                            href="https://www.vinaybajrangi.com/love-compatibility/virgo"
                            className="sign-nav-item active"
                        >
                            <span className="sni-symbol">♍</span>
                            <span className="sni-name">Virgo</span>
                        </a>
                        <a href="https://www.vinaybajrangi.com/love-compatibility/libra" className="sign-nav-item">
                            <span className="sni-symbol">♎</span>
                            <span className="sni-name">Libra</span>
                        </a>
                        <a href="https://www.vinaybajrangi.com/love-compatibility/scorpio" className="sign-nav-item">
                            <span className="sni-symbol">♏</span>
                            <span className="sni-name">Scorpio</span>
                        </a>
                        <a
                            href="https://www.vinaybajrangi.com/love-compatibility/sagittarius"
                            className="sign-nav-item"
                        >
                            <span className="sni-symbol">♐</span>
                            <span className="sni-name">Sagittarius</span>
                        </a>
                        <a href="https://www.vinaybajrangi.com/love-compatibility/capricorn" className="sign-nav-item">
                            <span className="sni-symbol">♑</span>
                            <span className="sni-name">Capricorn</span>
                        </a>
                        <a href="https://www.vinaybajrangi.com/love-compatibility/aquarius" className="sign-nav-item">
                            <span className="sni-symbol">♒</span>
                            <span className="sni-name">Aquarius</span>
                        </a>
                        <a href="https://www.vinaybajrangi.com/love-compatibility/pisces" className="sign-nav-item">
                            <span className="sni-symbol">♓</span>
                            <span className="sni-name">Pisces</span>
                        </a>
                    </div>
                    <p style={{ textAlign: "center", marginTop: "22px" }}>
                        <a
                            href="https://www.vinaybajrangi.com/love-compatibility"
                            style={{
                                color: "var(--saffron-deep)",
                                fontWeight: "600",
                                fontSize: "0.85rem",
                                textDecoration: "none",
                            }}
                        >
                            ← Back to Love Compatibility Overview
                        </a>
                    </p>
                </div>
            </div>

            {/* BOTTOM CTA */}
            <section className="bottom-cta">
                <div className="reveal">
                    <h2>
                        The Maiden notices everything —<br />
                        let the stars notice you back
                    </h2>
                    <p>
                        Sun signs give you the first clue. Your Vedic birth chart tells you the full story — who, when,
                        and how love unfolds for you specifically.
                    </p>
                    <div className="bottom-cta-btns">
                        <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-white">
                            ✦ Order My Love Report
                        </a>
                        <a
                            href="https://www.vinaybajrangi.com/calculator/love-calculator"
                            className="btn-outline-white"
                        >
                            Try Free Calculator
                        </a>
                        <a href="https://www.vinaybajrangi.com/services/consultation.php" className="btn-outline-white">
                            Book a Consultation
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
