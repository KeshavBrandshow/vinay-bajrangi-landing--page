import Head from 'next/head';
import { useEffect } from 'react';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
});

export default function PiscesDemo() {
  const toggleCompat = (e) => {
    const header = e.currentTarget;
    const card = header.closest('.compat-card');
    if (!card) return;
    const isOpen = card.classList.contains('open');
    document.querySelectorAll('.compat-card.open').forEach((c) => {
      c.classList.remove('open');
    });
    if (!isOpen) {
      card.classList.add('open');
    }
  };

  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = Array.from(entry.target.parentElement.children).filter(
              (el) => el.classList.contains('reveal')
            );
            const idx = siblings.indexOf(entry.target);
            setTimeout(
              () => entry.target.classList.add('visible'),
              Math.min(idx * 80, 360)
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Progress bar observer
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.meter-bar, .score-bar').forEach((bar, i) => {
              const w = bar.getAttribute('data-width') || '100%';
              setTimeout(() => {
                bar.style.transform = 'scaleX(1)';
                bar.style.width = w;
                bar.classList.add('animate');
              }, i * 110);
            });
            barObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.compat-meter-card, .score-grid').forEach((el) =>
      barObs.observe(el)
    );

    return () => {
      observer.disconnect();
      barObs.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Pisces Love Compatibility With All Signs – Dr. Vinay Bajrangi</title>
        <meta
          name="description"
          content="Which zodiac sign is most compatible with Pisces in love and marriage? Vedic astrology insights on Pisces compatibility with all 12 signs by Dr. Vinay Bajrangi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={`${cormorant.variable} ${dmSans.variable} page-wrapper`}>
        {/* BREADCRUMB */}
        <nav className="breadcrumb">
          <a href="https://www.vinaybajrangi.com">Home</a>
          <span>&rsaquo;</span>
          <a href="https://www.vinaybajrangi.com/love-compatibility">Love Compatibility</a>
          <span>&rsaquo;</span>
          Pisces Love Compatibility
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-bg-symbol">♓</div>
          <div className="hero-glow"></div>
          <div className="hero-glow-b"></div>
          {/* Fish rings */}
          <div className="fish-ring"></div>
          <div className="fish-ring"></div>
          <div className="fish-ring"></div>
          {/* Bioluminescent dots */}
          <div className="bio-dot"></div>
          <div className="bio-dot"></div>
          <div className="bio-dot"></div>
          <div className="bio-dot"></div>
          <div className="bio-dot"></div>

          <div className="hero-content">
            <div className="hero-eyebrow">
              <a href="https://www.vinaybajrangi.com/love-compatibility">Love Compatibility</a>
              <span className="sep">&rsaquo;</span>
              <span>Pisces</span>
            </div>

            <div className="hero-sign-badge">
              <span className="sign-glyph">♓</span>
              <div className="sign-meta">
                <strong>Pisces &middot; The Fish</strong>
                <span>February 19 – March 20 &middot; Water Sign &middot; Jupiter-Ruled</span>
              </div>
            </div>

            <h1 className="hero-title">
              Pisces Love Compatibility<br /><em>with All 12 Signs</em>
            </h1>
            <p className="hero-desc">
              Pisces loves without limits — boundlessly, selflessly, and with a depth that most people only touch the surface of. Which signs can swim in those waters alongside them? Which will drown in them? And what does Vedic astrology reveal about the Fish's heart that no sun-sign chart has ever fully captured?
            </p>

            <div className="hero-pills">
              <span className="pill">💧 Water Element</span>
              <span className="pill">♃ Ruled by Jupiter</span>
              <span className="pill">🔄 Mutable Modality</span>
              <span className="pill">Best with: Scorpio, Cancer, Taurus</span>
            </div>

            <div className="hero-ctas">
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-primary">
                ✦ Get My Personalised Report
              </a>
              <a href="https://www.vinaybajrangi.com/calculator/love-calculator" className="btn-ghost">
                Free Love Calculator &rarr;
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="compat-meter-card">
              <div className="meter-title">Quick Compatibility at a Glance</div>
              <div className="meter-row">
                <span className="meter-sign">♏</span>
                <span className="meter-label">Scorpio</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="94%"></div>
                </div>
                <span className="meter-score">94%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♋</span>
                <span className="meter-label">Cancer</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="91%"></div>
                </div>
                <span className="meter-score">91%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♉</span>
                <span className="meter-label">Taurus</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="85%"></div>
                </div>
                <span className="meter-score">85%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♑</span>
                <span className="meter-label">Capricorn</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="80%"></div>
                </div>
                <span className="meter-score">80%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♓</span>
                <span className="meter-label">Pisces</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="74%"></div>
                </div>
                <span className="meter-score">74%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♍</span>
                <span className="meter-label">Virgo</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="72%"></div>
                </div>
                <span className="meter-score">72%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♊</span>
                <span className="meter-label">Gemini</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="40%"></div>
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
              <div className="trait-icon">💧</div>
              <div className="trait-text"><strong>Element</strong><span>Water</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">♃</div>
              <div className="trait-text"><strong>Ruling Planet</strong><span>Jupiter (Guru/Brihaspati)</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">🔄</div>
              <div className="trait-text"><strong>Modality</strong><span>Mutable</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">🌊</div>
              <div className="trait-text"><strong>Love Strength</strong><span>Compassionate, Romantic, Intuitive</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">⚠️</div>
              <div className="trait-text"><strong>Love Challenge</strong><span>Boundary-less, Escapist, Over-Idealising</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">✨</div>
              <div className="trait-text"><strong>Best Match</strong><span>Scorpio, Cancer, Taurus</span></div>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* PISCES IN LOVE: OVERVIEW */}
        <div style={{ background: 'var(--white)', padding: '80px 6vw 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal">Understanding Pisces in Love</span>
            <h2 className="section-title reveal">The heart of the Fish —<br /><em>how Pisces loves</em></h2>
            <p className="section-lead reveal">Pisces is the 12th and final sign of the zodiac — it carries something of every sign within it, which is why Pisceans are the most empathetic and emotionally permeable people in the zodiac. In Vedic astrology, Jupiter rules Pisces, giving it its boundless optimism, spiritual depth, and capacity for a love that transcends the ordinary.</p>

            <div className="overview-grid">
              <div className="overview-card reveal">
                <div className="ov-icon">🌊</div>
                <div className="ov-title">Love Style: Total, Selfless, and Transcendent</div>
                <p className="ov-text">Pisces does not love partially. When they love, they dissolve — their boundaries soften, their identity merges with their beloved's, and they give without measure. This is their greatest gift and their greatest vulnerability. A partner who receives Piscean love fully, without taking advantage of it, will experience a devotion that few other signs can match.</p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🌀</div>
                <div className="ov-title">The Challenge: Boundaries and Escape</div>
                <p className="ov-text">Pisces' permeable nature means they absorb their partner's pain as well as their joy — which can be overwhelming. When love becomes painful, Pisces escapes rather than confronts. They can stay in wrong relationships far too long out of compassion, sacrifice their own needs invisibly, or dissolve so completely into a partner that they lose themselves entirely.</p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🎭</div>
                <div className="ov-title">What Pisces Needs: To Be Seen and Held Gently</div>
                <p className="ov-text">Pisces needs a partner who sees them — truly sees them, beneath the romance and the dreaming — and stays. They need someone who provides emotional safety without rigidity, who honours their sensitivity rather than dismissing it as impracticality, and who is strong enough to offer an anchor without becoming a cage.</p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🪐</div>
                <div className="ov-title">Vedic Lens: Jupiter, 12th House &amp; Navamsa</div>
                <p className="ov-text">In Vedic astrology, Pisces (Meena) is ruled by Jupiter — the most benefic planet in the entire system — and associated with the 12th house of spirituality, liberation, foreign lands, and the dissolution of boundaries. Venus is exalted in Pisces — making it the most powerful placement for the planet of love in the entire zodiac. The 7th house lord for Pisces Lagna is Mercury (ruling Virgo) — meaning the ideal partner archetype for Pisces is Mercurial: grounded, communicative, precise, and analytical — someone who provides the real-world clarity that Pisces' oceanic nature lacks. The Navamsa chart reveals whether this manifests in the actual marriage.</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* COMPATIBILITY BREAKDOWN */}
        <div style={{ background: 'var(--white)', padding: '40px 6vw 80px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal">Pisces with Each Sign</span>
            <h2 className="section-title reveal">Pisces compatibility —<br /><em>sign by sign</em></h2>
            <p className="section-lead reveal">Tap any sign to reveal a full breakdown — love chemistry, long-term potential, and the Vedic astrology perspective that goes far beyond sun-sign comparison.</p>

            <div className="compat-layout">

              {/* SCORPIO */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#B8510A,#D4732A)' }}>♏</div>
                  <div className="compat-sign-info"><h3>Pisces + Scorpio</h3><p>Water meets Water &middot; Oct 23 – Nov 21</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★★★</div><span className="compat-label label-excellent">Excellent</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>A connection that feels almost mystical from the first meeting. Scorpio's depth and intensity meets Pisces' boundless compassion — and both find something they rarely encounter elsewhere: someone who can hold their full emotional truth without flinching. Scorpio's protectiveness gives Pisces the safety their gentle heart needs; Pisces' unconditional compassion slowly unlocks Scorpio's deeply guarded inner world.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Among the highest in the zodiac. Both are water signs who understand the depths of feeling that most other signs never reach. Both are loyal beyond measure when their trust is intact. The main challenge: both can get lost in emotional intensity without surfacing to practical reality. Both need individual grounding to sustain the relationship's extraordinary depth.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mars and Ketu co-rule Scorpio. Scorpio is Pisces' 9th house — the house of fortune, higher wisdom, and dharma — one of the most auspicious placements in Vedic astrology. This makes Scorpio partners a source of profound fortune and spiritual growth for Pisces. When both Mars and Jupiter are strong in their respective charts, this is one of Vedic astrology's most transcendent and enduring love pairings.</p></div>
                </div></div>
              </div>

              {/* CANCER */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#2B6CB0,#63B3ED)' }}>♋</div>
                  <div className="compat-sign-info"><h3>Pisces + Cancer</h3><p>Water meets Water &middot; Jun 21 – Jul 22</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★★★</div><span className="compat-label label-excellent">Excellent</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Two water signs who speak the same unspoken language. Cancer's nurturing warmth gives Pisces the emotional home they have always dreamed of; Pisces' romanticism and spiritual depth gives Cancer the transcendent dimension of love that most relationships never offer them. Both are givers — and here, both finally receive in full measure.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Very high. Both value deep emotional bonding, both are devoted and loyal, and both find the relationship's emotional richness genuinely sustaining. The main challenge is practical grounding — two water signs together must consciously manage real-world responsibilities rather than drifting together in emotional depth. When both are mature, this is one of the most naturally nourishing pairings in the zodiac.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>The Moon rules Cancer and is a deeply positive planet for Jupiter-ruled Pisces. Jupiter is exalted in Cancer — the sign of Pisces' most naturally compatible water partner. This extraordinary placement means Cancer partners bring Jupiter's highest blessings into Pisces' life — wisdom, abundance, and spiritual growth through the relationship. Dr. Bajrangi notes this as one of the most auspicious cosmic pairings in Vedic astrology for a Pisces Lagna native.</p></div>
                </div></div>
              </div>

              {/* TAURUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#2D6A2A,#5A9E55)' }}>♉</div>
                  <div className="compat-sign-info"><h3>Pisces + Taurus</h3><p>Water meets Earth &middot; Apr 20 – May 20</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★★★</div><span className="compat-label label-excellent">Excellent</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Earth grounds Water — and Taurus provides Pisces with exactly the tangible, sensory, secure love their dream-prone nature most needs. Pisces enriches Taurus' practical world with poetry, spiritual depth, and emotional colour that Taurus rarely creates alone. Both share a deep love of beauty, comfort, and tenderness — the chemistry is warm, genuine, and grows steadily.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Exceptional. Taurus' steadfastness gives Pisces the anchor their mutable nature needs without confining their emotional fluidity. Pisces' creativity and romance gives Taurus a richer emotional palette than their practical nature usually accesses. Both are loyal, both value beauty in love, and both find the relationship deeply nourishing over time.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Venus rules Taurus and Venus is exalted in Pisces — one of the most powerful single Vedic signals possible. When Venus is placed in Pisces, it operates at its highest capacity for love, beauty, and devotion. This mutual exaltation connection — Venus exalted in Pisces, Taurus ruled by Venus — creates an extraordinary resonance between these two signs that Dr. Bajrangi describes as one of nature's most harmonious love placements.</p></div>
                </div></div>
              </div>

              {/* CAPRICORN */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#8A5A6A,#B07A8A)' }}>♑</div>
                  <div className="compat-sign-info"><h3>Pisces + Capricorn</h3><p>Water meets Earth &middot; Dec 22 – Jan 19</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★★☆</div><span className="compat-label label-good">Good</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>An unexpected tenderness. Capricorn's worldly structure and quiet authority gives Pisces the safety to dream freely without anxiety; Pisces' compassion and spiritual warmth opens doors of feeling in Capricorn that most other signs never find. Each offers the other a dimension of life they cannot access alone — the dreamer and the builder.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good when both are emotionally mature. Capricorn must resist dismissing Pisces' emotional world as impractical — it is not a weakness, it is a different kind of intelligence. Pisces must develop enough real-world groundedness to meet Capricorn's need for a reliable partner. When both grow in these areas, this pairing has extraordinary complementarity.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Saturn rules Capricorn and is a neutral planet toward Jupiter in Vedic astrology. Capricorn is Pisces' 11th house — the house of gains, long-term goals, and social networks. Capricorn partners frequently bring significant material and professional benefit into Pisces' life, and the two often create shared goals of real-world impact together. The 11th house placement makes this relationship productive and expansive in the external world alongside its emotional depth.</p></div>
                </div></div>
              </div>

              {/* VIRGO (opposite) */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#5C6E2A,#849A3E)' }}>♍</div>
                  <div className="compat-sign-info"><h3>Pisces + Virgo</h3><p>Water meets Earth &middot; Opposite Signs &middot; Aug 23 – Sep 22</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★★☆</div><span className="compat-label label-good">Good</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Opposite signs — and profoundly complementary. Virgo brings Pisces the order, precision, and practical care they dream of but cannot create alone; Pisces brings Virgo the compassion, spiritual depth, and imaginative richness that Virgo's analytical nature rarely accesses. Each offers the wholeness the other lacks, creating a relationship that feels genuinely complete.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good when both are mature. Virgo must resist the urge to fix or improve Pisces' emotional messiness — Pisces does not need to be corrected, they need to be understood. Pisces must develop the clarity and grounding that Virgo needs to trust the relationship. The opposition creates tension but also a remarkable whole when both commit to mutual growth.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mercury rules Virgo and is also the 7th house lord for Pisces Lagna — the direct ruler of marriage for Pisces in Vedic astrology. This makes Virgo the natural marriage partner for Pisces Lagna individuals. Mercury and Jupiter are in mutual opposition — the axis of analysis and wisdom, detail and breadth, intellect and intuition. Dr. Bajrangi notes that this opposition, when both partners are strong, produces extraordinary balance and wisdom in the relationship.</p></div>
                </div></div>
              </div>

              {/* PISCES + PISCES */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,var(--sign-primary),var(--sign-secondary))' }}>♓</div>
                  <div className="compat-sign-info"><h3>Pisces + Pisces</h3><p>Water meets Water &middot; Same Sign</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★★☆</div><span className="compat-label label-good">Good</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>An ocean meeting an ocean — profound, beautiful, and potentially overwhelming. Two Pisces understand each other's emotional world with extraordinary completeness. The compassion, the dreaming, the intuitive communication, the spiritual orientation — all are fully mirrored and deeply felt. The relationship can feel like finally coming home.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good when both develop individual grounding. Two Mutable Water signs together can drift into shared fantasy, mutual enabling of avoidance, and collective disconnection from practical reality. Both must develop the discipline to face real-world challenges directly rather than retreating into the relationship as an escape. When both are grounded individually, this pairing has extraordinary emotional richness.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Two Jupiter-ruled charts amplify both Jupiter's gifts (compassion, wisdom, spiritual depth, abundance of feeling) and its shadows (over-expansion, excess, impracticality, over-idealism in love). Dr. Bajrangi looks carefully at Saturn's placement in both charts when advising on this pairing — a well-placed Saturn in one or both charts provides the discipline, structure, and commitment that two Pisces need to keep their extraordinary emotional world from becoming unmoored from reality.</p></div>
                </div></div>
              </div>

              {/* LIBRA */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#5558A8,#7B7ECC)' }}>♎</div>
                  <div className="compat-sign-info"><h3>Pisces + Libra</h3><p>Water meets Air &middot; Sep 23 – Oct 22</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Both are romantics and both are drawn to beauty and meaningful connection. The initial resonance can feel genuinely poetic — two signs who love love, who care about aesthetics, and who want a relationship that feels beautiful. But Libra's love is intellectual and social; Pisces' love is emotional and deeply personal. The depth they seek is different.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate. Libra's social nature and need for variety can leave Pisces feeling emotionally unseen; Pisces' emotional depth and intensity can feel overwhelming to the more airy Libra. Both must develop understanding of the other's fundamentally different way of experiencing love. When both are mature and communicate honestly, there is genuine tenderness available here.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Venus rules Libra and is exalted in Pisces — a powerful cosmic connection. This Venus exaltation in Pisces creates a deep resonance between Libra's planet and Pisces' sign. Libra is Pisces' 8th house — the house of transformation, shared resources, and deep bonds through crisis. Libra relationships are intensely transformative for Pisces — changing their understanding of themselves and their capacity for love, even when the relationship itself is not sustainable long-term.</p></div>
                </div></div>
              </div>

              {/* SAGITTARIUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#9A7640,#BFA060)' }}>♐</div>
                  <div className="compat-sign-info"><h3>Pisces + Sagittarius</h3><p>Water meets Fire &middot; Both Jupiter-Ruled &middot; Nov 22 – Dec 21</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Both ruled by Jupiter — an immediate sense of philosophical and spiritual kinship. Sagittarius' optimism and expansiveness resonates with Pisces' idealism and visionary nature; Pisces' depth of feeling gives Sagittarius' philosophical abstractions an emotional home. The initial resonance around shared ideals and a love of the transcendent is real and warm.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate. Sagittarius' bluntness wounds Pisces' sensitivity regularly; Pisces' emotional fluidity frustrates Sagittarius' need for clarity and directness. Both are mutable — neither provides the grounding the other occasionally needs. Works best when both have developed emotional maturity and Sagittarius has developed diplomatic sensitivity alongside their honesty.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>In Vedic astrology, Jupiter rules both Pisces and Sagittarius — two Jupiter-ruled signs in relationship creates both profound harmony and the risk of shared excess. Sagittarius is Pisces' 10th house — the house of career, public reputation, and external ambition. Sagittarius partners often play a significant role in shaping Pisces' professional identity and public standing — bringing them visibility and purpose in the external world, even when the romantic alignment is imperfect.</p></div>
                </div></div>
              </div>

              {/* AQUARIUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#3A3A4A,#5A5A72)' }}>♒</div>
                  <div className="compat-sign-info"><h3>Pisces + Aquarius</h3><p>Water meets Air &middot; Jan 20 – Feb 18</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Adjacent signs with shared idealism — both dream of a more compassionate world, though Aquarius pursues it intellectually and Pisces pursues it emotionally. The connection around shared vision can be genuinely inspiring. But Aquarius' emotional detachment leaves Pisces feeling unseen at the personal level, and Pisces' emotional intensity can overwhelm the more cerebral Aquarius.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate with growth. Aquarius must develop personal emotional presence — Pisces cannot sustain on shared ideals alone. Pisces must develop intellectual clarity and the ability to communicate feelings in Aquarius' language of ideas rather than only emotion. When both achieve this, the pairing has a uniquely beautiful quality: visionary and compassionate simultaneously.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Saturn rules Aquarius and is neutral toward Jupiter in Vedic astrology. Aquarius is Pisces' 12th house — the house of spiritual retreat, hidden matters, and loss. In Vedic astrology, 12th house relationships often carry a quality of self-sacrifice, spiritual significance, or hidden depth. Pisces natives frequently describe Aquarius relationships as the ones that most deeply touched their spiritual world — regardless of whether the relationship itself was practically sustainable.</p></div>
                </div></div>
              </div>

              {/* LEO */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#C0392B,#E05A4E)' }}>♌</div>
                  <div className="compat-sign-info"><h3>Pisces + Leo</h3><p>Water meets Fire &middot; Jul 23 – Aug 22</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Leo's warmth and theatrical love captivates Pisces' romantic imagination; Pisces' adoration and boundless compassion gives Leo the devoted audience they have always sought. The initial enchantment can be strong. But Leo needs visible, vocal appreciation — which Pisces gives — while Pisces needs deep, quiet personal intimacy — which Leo rarely prioritises.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate. Pisces can become Leo's devoted follower rather than their equal partner — which serves neither. Leo must develop the sensitivity to meet Pisces in the emotional depths; Pisces must develop the voice to ask for the personal intimacy they need rather than silently accepting Leo's spotlight-oriented love. Both must grow significantly for this to become a genuine partnership.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>The Sun rules Leo and is a friend of Jupiter in Vedic astrology — providing warmth and natural respect between these two signs. Leo is Pisces' 6th house — the house of conflict, health, and service. In Vedic astrology, 6th house relationships tend to carry themes of duty and ongoing effort. Pisces natives often find Leo relationships require sustained emotional labour — the giving is often not equally returned, creating a quiet imbalance that builds over time.</p></div>
                </div></div>
              </div>

              {/* ARIES */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#C0351A,#F26B3A)' }}>♈</div>
                  <div className="compat-sign-info"><h3>Pisces + Aries</h3><p>Water meets Fire &middot; Mar 21 – Apr 19</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Adjacent signs — Pisces ends the zodiac and Aries begins it, creating a unique wrap-around energy. Aries' decisive boldness gives Pisces the direction and protective strength their gentle nature can lean into; Pisces' compassion and emotional depth touches something in Aries they don't often access. The initial tenderness can be unexpected and real.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate. Aries' bluntness regularly wounds Pisces without Aries realising the depth of the damage; Pisces' emotional complexity and need for depth can exhaust the direct, impatient Aries. Both must develop understanding and patience for the other's fundamentally different emotional pace. Works significantly better when Aries has developed sensitivity and Pisces has developed resilience.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mars rules Aries and is neutral toward Jupiter in Vedic astrology. Aries is Pisces' 2nd house — the house of family, accumulated wealth, and speech. Aries partners often have a defining influence on Pisces' financial life and family relationships. The relationship carries practical and material significance alongside the romantic — and how the two communicate about values and resources often determines the relationship's long-term direction more than romantic chemistry alone.</p></div>
                </div></div>
              </div>

              {/* GEMINI */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#3A8A2A,#5CB84A)' }}>♊</div>
                  <div className="compat-sign-info"><h3>Pisces + Gemini</h3><p>Water meets Air &middot; May 21 – Jun 20</p></div>
                  <div className="compat-level"><div className="compat-stars">★★☆☆☆</div><span className="compat-label label-challenging">Challenging</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Both are Mutable signs — adaptable, changeable, and often directionless together. Gemini's wit and curiosity initially delights Pisces; Pisces' depth and imagination briefly intrigues Gemini. But Gemini lives at the surface of experience with great agility; Pisces lives in the depths with great feeling. The two registers of experience rarely connect in a sustained way.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Challenging. Gemini's inconsistency is deeply distressing to the emotionally invested Pisces; Pisces' emotional demands and need for depth exhausts the lighter Gemini. Two Mutable signs together can create a relationship with no fixed point — both changing, neither anchoring, both eventually drifting. Works only with significant emotional maturity and clear, explicit communication on both sides.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mercury rules Gemini and is also the 7th house lord for Pisces Lagna — the direct ruler of marriage for Pisces in Vedic astrology. This creates a paradox: Gemini carries direct marriage significance for Pisces Lagna, yet the temperamental distance is real. Dr. Bajrangi notes that Pisces natives often find themselves inexplicably drawn to Gemini partners despite the difficulties — the 7th house pull creates a magnetic force that cannot be fully explained by sun-sign compatibility alone. A full chart reading is essential before acting on this attraction.</p></div>
                </div></div>
              </div>

            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-soft)', marginTop: '18px', fontStyle: 'italic', textAlign: 'center' }}>All 12 signs covered above. For a personalised compatibility reading based on your full birth chart, see the Love &amp; Relationship Report.</p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* SCORE SUMMARY */}
        <div className="score-section">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal" style={{ textAlign: 'center', display: 'block' }}>At a Glance</span>
            <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: '36px' }}>Pisces compatibility <em>scores</em></h2>
            <div className="score-grid">
              <div className="score-card reveal"><div className="score-sign">♏</div><div className="score-name">Scorpio</div><div className="score-bar-wrap"><div className="score-bar" data-width="94%"></div></div><div className="score-pct">94%</div></div>
              <div className="score-card reveal"><div className="score-sign">♋</div><div className="score-name">Cancer</div><div className="score-bar-wrap"><div className="score-bar" data-width="91%"></div></div><div className="score-pct">91%</div></div>
              <div className="score-card reveal"><div className="score-sign">♉</div><div className="score-name">Taurus</div><div className="score-bar-wrap"><div className="score-bar" data-width="85%"></div></div><div className="score-pct">85%</div></div>
              <div className="score-card reveal"><div className="score-sign">♑</div><div className="score-name">Capricorn</div><div className="score-bar-wrap"><div className="score-bar" data-width="80%"></div></div><div className="score-pct">80%</div></div>
              <div className="score-card reveal"><div className="score-sign">♍</div><div className="score-name">Virgo</div><div className="score-bar-wrap"><div className="score-bar" data-width="74%"></div></div><div className="score-pct">74%</div></div>
              <div className="score-card reveal"><div className="score-sign">♓</div><div className="score-name">Pisces</div><div className="score-bar-wrap"><div className="score-bar" data-width="74%"></div></div><div className="score-pct">74%</div></div>
              <div className="score-card reveal"><div className="score-sign">♐</div><div className="score-name">Sagittarius</div><div className="score-bar-wrap"><div className="score-bar" data-width="62%"></div></div><div className="score-pct">62%</div></div>
              <div className="score-card reveal"><div className="score-sign">♈</div><div className="score-name">Aries</div><div className="score-bar-wrap"><div className="score-bar" data-width="58%"></div></div><div className="score-pct">58%</div></div>
              <div className="score-card reveal"><div className="score-sign">♎</div><div className="score-name">Libra</div><div className="score-bar-wrap"><div className="score-bar" data-width="55%"></div></div><div className="score-pct">55%</div></div>
              <div className="score-card reveal"><div className="score-sign">♒</div><div className="score-name">Aquarius</div><div className="score-bar-wrap"><div className="score-bar" data-width="52%"></div></div><div className="score-pct">52%</div></div>
              <div className="score-card reveal"><div className="score-sign">♌</div><div className="score-name">Leo</div><div className="score-bar-wrap"><div className="score-bar" data-width="48%"></div></div><div className="score-pct">48%</div></div>
              <div className="score-card reveal"><div className="score-sign">♊</div><div className="score-name">Gemini</div><div className="score-bar-wrap"><div className="score-bar" data-width="40%"></div></div><div className="score-pct">40%</div></div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-soft)', marginTop: '18px', fontStyle: 'italic' }}>General sun-sign compatibility only. Personalised scores require full birth chart analysis.</p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* REPORT CALLOUT */}
        <div style={{ padding: '60px 6vw', background: 'var(--white)' }}>
          <div className="report-callout reveal">
            <div>
              <span className="rc-tag">For Pisces &middot; Personalised Report</span>
              <h2 className="rc-title">Jupiter's blessing meets Mercury's precision —<br />your <em>complete love picture</em></h2>
              <p className="rc-desc">Pisces is blessed by Jupiter — but the 7th house lord is Mercury, the planet of communication and discernment. How Jupiter and Mercury interact in your specific chart, alongside Venus exaltation in Pisces, the 12th house influence, Navamsa compatibility, and your current Dasha period, reveals exactly what kind of love your chart is building toward and when it arrives. Dr. Vinay Bajrangi's Love &amp; Relationship Report covers all of this — written, personalised, delivered in 3–5 working days.</p>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-primary">✦ Get My Love &amp; Relationship Report</a>
            </div>
            <div className="rc-side">
              <div className="rc-price">
                <div className="from">Starts from</div>
                <div className="amount">₹ 799</div>
                <div className="note">Written report &middot; Delivered<br />in 3–5 working days</div>
              </div>
              <a href="https://www.vinaybajrangi.com/calculator/love-calculator" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', justifyContent: 'center', width: '100%' }}>Try Free Calculator &rarr;</a>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* GEMSTONE WEARABLES FOR PISCES */}
        <div className="gem-strip">
          <div className="gem-strip-inner">
            <span className="section-tag reveal" style={{ paddingTop: '60px', display: 'block' }}>Vedic Remedies for Pisces</span>
            <h2 className="section-title reveal">Gemstone wearables <em>for Pisces love</em></h2>
            <p className="section-lead reveal" style={{ marginBottom: 0 }}>Jupiter-ruled Pisces benefits from gemstones that deepen Jupiter's already profound influence on love, strengthen Mercury — the direct 7th house marriage lord — and honour Venus, whose exaltation in Pisces makes it the most powerful love significator for this sign of any in the zodiac. All wearables must be prescribed after full chart analysis.</p>

            <div className="gem-strip-cards">
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">💛</span>
                <div className="gem-name">Yellow Sapphire Pendant / Bracelet</div>
                <p className="gem-desc">Yellow Sapphire (Pukhraj) strengthens Jupiter — Pisces' ruling planet. For Pisces natives, it deepens wisdom in love, attracts a spiritually aligned and genuinely devoted partner, and brings clarity to the often-boundless emotional world of the Fish. Particularly effective for improving love marriage prospects and navigating Jupiter Dasha periods.</p>
                <div className="gem-planet">♃ Jupiter &middot; Worn on Thursday</div>
              </a>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">💚</span>
                <div className="gem-name">Emerald Pendant / Bracelet</div>
                <p className="gem-desc">Mercury is the 7th house lord for Pisces Lagna — the direct ruler of marriage in Vedic astrology. Emerald (Panna) strengthens Mercury, improving the quality and timing of the committed partner, bringing greater communication ease and practical clarity to Pisces' characteristically boundless emotional world, and resolving delays in committed partnership.</p>
                <div className="gem-planet">☿ Mercury &middot; Worn on Wednesday</div>
              </a>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">💎</span>
                <div className="gem-name">Diamond / White Sapphire Pendant</div>
                <p className="gem-desc">Venus is exalted in Pisces — the most powerful Venus placement in the zodiac. For Pisces natives, a diamond or white sapphire wearable activates the full depth of this Venus exaltation: extraordinary romantic magnetism, deep sensual and emotional attraction, and the capacity to manifest the ideal love that Pisces has always dreamed of but struggled to make real.</p>
                <div className="gem-planet">♀ Venus &middot; Worn on Friday</div>
              </a>
            </div>

            <div style={{ background: 'var(--sign-xpale)', borderRadius: '14px', padding: '18px 22px', marginTop: '20px', borderLeft: '3px solid var(--saffron-deep)', maxWidth: '680px', display: 'flex', gap: '12px', alignItems: 'flex-start' }} className="reveal">
              <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>⚠️</span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: '1.65' }}><strong style={{ color: 'var(--text-dark)' }}>Always consult before wearing.</strong> Even Jupiter's and Venus' own stones must be prescribed after a complete birth chart analysis. Venus exaltation in Pisces is powerful, but Venus' house placement and aspects in your specific chart determine whether the stone activates love or other Venus-related areas of life. Dr. Bajrangi recommends all wearables exclusively within a full consultation or written report.</p>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* SIGNS NAV */}
        <div className="signs-nav">
          <div className="signs-nav-inner">
            <h3 className="signs-nav-title">Explore compatibility for <em>other signs</em></h3>
            <div className="signs-nav-grid">
              <a href="https://www.vinaybajrangi.com/love-compatibility/aries" className="sign-nav-item"><span className="sni-symbol">♈</span><span className="sni-name">Aries</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/taurus" className="sign-nav-item"><span className="sni-symbol">♉</span><span className="sni-name">Taurus</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/gemini" className="sign-nav-item"><span className="sni-symbol">♊</span><span className="sni-name">Gemini</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/cancer" className="sign-nav-item"><span className="sni-symbol">♋</span><span className="sni-name">Cancer</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/leo" className="sign-nav-item"><span className="sni-symbol">♌</span><span className="sni-name">Leo</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/virgo" className="sign-nav-item"><span className="sni-symbol">♍</span><span className="sni-name">Virgo</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/libra" className="sign-nav-item"><span className="sni-symbol">♎</span><span className="sni-name">Libra</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/scorpio" className="sign-nav-item"><span className="sni-symbol">♏</span><span className="sni-name">Scorpio</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/sagittarius" className="sign-nav-item"><span className="sni-symbol">♐</span><span className="sni-name">Sagittarius</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/capricorn" className="sign-nav-item"><span className="sni-symbol">♑</span><span className="sni-name">Capricorn</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/aquarius" className="sign-nav-item"><span className="sni-symbol">♒</span><span className="sni-name">Aquarius</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/pisces" className="sign-nav-item active"><span className="sni-symbol">♓</span><span className="sni-name">Pisces</span></a>
            </div>
            <p style={{ textAlign: 'center', marginTop: '22px' }}>
              <a href="https://www.vinaybajrangi.com/love-compatibility" style={{ color: 'var(--saffron-deep)', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>&larr; Back to Love Compatibility Overview</a>
            </p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="bottom-cta">
          <div className="reveal">
            <h2>The Fish swims toward love<br />without a map — <em>let the stars be yours</em></h2>
            <p>Sun signs show the current. Jupiter, Mercury, Venus, and your Dasha reveal the ocean you were born to swim in — and the one person built to swim alongside you.</p>
            <div className="bottom-cta-btns">
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-white">✦ Order My Love Report</a>
              <a href="https://www.vinaybajrangi.com/calculator/love-calculator" className="btn-outline-white">Try Free Calculator</a>
              <a href="/services/consultation.php" className="btn-outline-white">Book a Consultation</a>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        :root {
          /* ── Brand ── */
          --saffron:       #E8821A;
          --saffron-deep:  #C4600A;
          --saffron-light: #F5A84E;
          --gold:          #D4A017;
          --gold-pale:     #F7E9C8;

          /* ── Pisces palette: deep teal-ocean with iridescent accents ── */
          --sign-primary:   #8A7200;   /* deep teal-ocean               */
          --sign-secondary: #B09A10;   /* mid ocean-teal                */
          --sign-accent:    #D4C040;   /* bright aqua-iridescent        */
          --sign-glow:      #EDE080;   /* pale bioluminescent           */
          --sign-pale:      #F8F4D8;   /* soft ocean mist               */
          --sign-xpale:     #FDFBEE;   /* near-white ocean breath       */

          /* Hero: deep sea — dark teal abyss rising to light */
          --hero-dark1: #0E0C02;
          --hero-dark2: #1E1A04;
          --hero-mid:   #3A3208;
          --hero-light: #6A5C10;

          --text-dark: #14120A;
          --text-mid:  #38300A;
          --text-soft: #807830;
          --white:     #FFFFFF;

          --font-display: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          --font-body:    var(--font-dm-sans), 'DM Sans', sans-serif;
          --shadow-sign:  0 8px 40px rgba(138,114,0,0.2);
          --shadow-card:  0 4px 20px rgba(138,114,0,0.09);
          --shadow-soft:  0 2px 12px rgba(0,0,0,0.05);
        }

        .page-wrapper {
          font-family: var(--font-body);
          background: var(--sign-xpale);
          color: var(--text-dark);
          overflow-x: hidden;
        }

        /* ── BREADCRUMB ── */
        .breadcrumb {
          background: var(--sign-pale);
          border-bottom: 1px solid rgba(138,114,0,0.14);
          padding: 12px 6vw;
          font-size: 0.78rem;
          color: var(--text-soft);
        }
        .breadcrumb a { color: var(--saffron-deep); text-decoration: none; }
        .breadcrumb a:hover { text-decoration: underline; }
        .breadcrumb span { margin: 0 6px; opacity: 0.4; }

        /* ── HERO ── */
        .hero {
          background: linear-gradient(145deg,
            var(--hero-dark1) 0%,
            var(--hero-dark2) 20%,
            var(--hero-mid)   52%,
            var(--hero-light) 82%,
            #B0A018 100%);
          padding: 72px 6vw 0;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 48px;
          align-items: end;
          min-height: 460px;
        }
        @media (max-width: 860px) {
          .hero { grid-template-columns: 1fr; padding-bottom: 52px; min-height: auto; }
          .hero-visual { display: none; }
        }

        /* Watermark glyph */
        .hero-bg-symbol {
          position: absolute;
          right: 27%;
          top: 50%;
          transform: translateY(-50%);
          font-size: 30vw;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          pointer-events: none;
          font-family: var(--font-display);
          user-select: none;
        }

        /* Two fish circles */
        .fish-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(212,192,64,0.10);
          pointer-events: none;
          animation: fishSwim 18s ease-in-out infinite;
        }
        .fish-ring:nth-child(4){
          width: 480px; height: 480px;
          top: 5%; right: 14%;
          animation-direction: normal; animation-duration: 16s;
        }
        .fish-ring:nth-child(5){
          width: 480px; height: 480px;
          top: 28%; right: 22%;
          animation-direction: reverse; animation-duration: 20s;
          border-color: rgba(237,224,128,0.07);
        }
        .fish-ring:nth-child(6){
          width: 680px; height: 680px;
          top: -8%; right: 8%;
          animation-duration: 28s;
          border-color: rgba(212,192,64,0.06);
        }
        @keyframes fishSwim {
          0%   { transform: scale(1)    rotate(0deg);   opacity: 0.5; }
          33%  { transform: scale(1.04) rotate(120deg); opacity: 0.9; }
          66%  { transform: scale(0.97) rotate(240deg); opacity: 0.6; }
          100% { transform: scale(1)    rotate(360deg); opacity: 0.5; }
        }

        /* Bioluminescent particles */
        .bio-dot {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent));
          pointer-events: none;
          animation: bioPulse 4s ease-in-out infinite;
        }
        .bio-dot:nth-child(7) { width:3px; height:3px; top:22%; right:35%; animation-delay:0s;   opacity:0.5; }
        .bio-dot:nth-child(8) { width:4px; height:4px; top:38%; right:52%; animation-delay:1s;   opacity:0.7; }
        .bio-dot:nth-child(9) { width:2px; height:2px; top:55%; right:29%; animation-delay:2s;   opacity:0.4; }
        .bio-dot:nth-child(10) { width:3px; height:3px; top:68%; right:44%; animation-delay:1.5s; opacity:0.6; }
        .bio-dot:nth-child(11) { width:4px; height:4px; top:80%; right:38%; animation-delay:0.5s; opacity:0.5; }
        @keyframes bioPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(112,200,216,0); opacity:0.3; transform:scale(1); }
          50%      { box-shadow: 0 0 16px 6px rgba(212,192,64,0.4); opacity:1; transform:scale(1.8); }
        }

        /* Deep-sea radial glow */
        .hero-glow {
          position: absolute; width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(138,114,0,0.35) 0%, transparent 70%);
          top: 50%; left: 16%; transform: translate(-50%,-50%); pointer-events: none;
        }
        .hero-glow-b {
          position: absolute; width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(212,192,64,0.18) 0%, transparent 70%);
          top: 35%; left: 44%; transform: translate(-50%,-50%); pointer-events: none;
        }

        .hero-content { position: relative; z-index: 2; padding-bottom: 60px; }

        .hero-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--sign-accent);
          margin-bottom: 18px; opacity: 0; animation: fadeUp 0.7s 0.1s forwards;
        }
        .hero-eyebrow a { color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
        .hero-eyebrow a:hover { color: var(--sign-accent); }
        .hero-eyebrow .sep { color: rgba(255,255,255,0.2); }

        .hero-sign-badge {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.13);
          border-radius: 50px; padding: 8px 20px 8px 10px;
          margin-bottom: 20px; opacity: 0; animation: fadeUp 0.7s 0.2s forwards;
        }
        .sign-glyph {
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, var(--sign-primary), var(--sign-secondary));
          display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;
          box-shadow: 0 0 18px rgba(212,192,64,0.28);
        }
        .sign-meta strong { display: block; font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--white); line-height: 1.1; }
        .sign-meta span { font-size: 0.68rem; color: rgba(255,255,255,0.5); letter-spacing: 0.08em; }

        .hero-title {
          font-family: var(--font-display); font-size: clamp(2.6rem,5.5vw,4.4rem);
          font-weight: 700; color: var(--white); line-height: 1.08; margin-bottom: 18px;
          opacity: 0; animation: fadeUp 0.8s 0.3s forwards;
        }
        .hero-title em { font-style: italic; color: var(--sign-accent); }

        .hero-desc {
          font-size: 1.05rem; font-weight: 300; color: rgba(255,255,255,0.72);
          line-height: 1.75; max-width: 520px; margin-bottom: 30px;
          opacity: 0; animation: fadeUp 0.8s 0.45s forwards;
        }

        .hero-pills {
          display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 32px;
          opacity: 0; animation: fadeUp 0.8s 0.55s forwards;
        }
        .pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.09); border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.82); font-size: 0.75rem; font-weight: 600;
          padding: 5px 14px; border-radius: 50px;
        }

        .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; opacity: 0; animation: fadeUp 0.8s 0.65s forwards; }

        /* ── BUTTONS ── */
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, var(--saffron) 0%, var(--gold) 100%);
          color: var(--white); font-family: var(--font-body); font-weight: 600;
          font-size: 0.88rem; letter-spacing: 0.03em;
          padding: 13px 26px; border-radius: 50px; text-decoration: none; border: none;
          cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 18px rgba(232,130,26,0.38);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(232,130,26,0.52); }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--white); font-family: var(--font-body);
          font-weight: 500; font-size: 0.88rem;
          padding: 13px 26px; border-radius: 50px; text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.28); transition: background 0.2s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.08); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--sign-primary); font-family: var(--font-body);
          font-weight: 600; font-size: 0.88rem;
          padding: 13px 26px; border-radius: 50px; text-decoration: none;
          border: 1.5px solid rgba(26,106,114,0.28); transition: background 0.2s;
        }
        .btn-outline:hover { background: var(--sign-pale); }

        /* ── HERO METER PANEL ── */
        .hero-visual { position: relative; z-index: 2; align-self: end; }
        .compat-meter-card {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(12px); border-radius: 20px 20px 0 0; padding: 28px 28px 32px;
        }
        .meter-title { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.42); margin-bottom: 20px; }
        .meter-row { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .meter-sign { font-size: 1.1rem; width: 26px; flex-shrink: 0; text-align: center; }
        .meter-label { font-size: 0.78rem; color: rgba(255,255,255,0.65); width: 82px; flex-shrink: 0; }
        .meter-bar-bg { flex: 1; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.1); overflow: hidden; }
        .meter-bar {
          height: 100%; border-radius: 3px;
          background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent));
          transform-origin: left; transform: scaleX(0); transition: transform 1s ease;
        }
        .meter-bar.animate { transform: scaleX(1); }
        .meter-score { font-size: 0.72rem; font-weight: 700; color: var(--sign-accent); width: 28px; text-align: right; flex-shrink: 0; }

        /* ── TRAIT STRIP ── */
        .trait-strip {
          background: var(--sign-pale); border-top: 2px solid rgba(26,106,114,0.2);
          border-bottom: 1px solid rgba(138,114,0,0.12); padding: 22px 6vw;
        }
        .trait-inner { max-width: 1100px; margin: 0 auto; display: flex; gap: 36px; flex-wrap: wrap; align-items: center; }
        .trait-item { display: flex; align-items: center; gap: 10px; }
        .trait-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, var(--sign-primary), var(--sign-secondary));
          display: flex; align-items: center; justify-content: center; font-size: 0.9rem; flex-shrink: 0;
        }
        .trait-text strong { display: block; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sign-primary); margin-bottom: 1px; }
        .trait-text span { font-size: 0.83rem; color: var(--text-mid); font-weight: 500; }

        /* ── REVEAL ── */
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        /* ── SECTION TYPE ── */
        .section-tag { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--saffron-deep); display: block; margin-bottom: 12px; }
        .section-title { font-family: var(--font-display); font-size: clamp(1.9rem,3.2vw,2.7rem); font-weight: 700; line-height: 1.18; color: var(--text-dark); margin-bottom: 14px; }
        .section-title em { font-style: italic; color: var(--sign-primary); }
        .section-lead { font-size: 1rem; font-weight: 300; color: var(--text-mid); line-height: 1.75; max-width: 660px; margin-bottom: 48px; }

        /* ── OVERVIEW CARDS ── */
        .overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 48px; }
        @media (max-width: 720px) { .overview-grid { grid-template-columns: 1fr; } }
        .overview-card {
          background: var(--white); border-radius: 18px; padding: 28px;
          border: 1.5px solid rgba(138,114,0,0.1); box-shadow: var(--shadow-soft);
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .overview-card:hover { box-shadow: var(--shadow-sign); transform: translateY(-2px); }
        .ov-icon { font-size: 1.6rem; margin-bottom: 12px; }
        .ov-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 8px; }
        .ov-text { font-size: 0.87rem; color: var(--text-mid); line-height: 1.68; }

        /* ── COMPAT ACCORDIONS ── */
        .compat-layout { display: flex; flex-direction: column; gap: 12px; }
        .compat-card {
          background: var(--white); border-radius: 18px;
          border: 1.5px solid rgba(138,114,0,0.1); box-shadow: var(--shadow-soft);
          overflow: hidden; transition: box-shadow 0.25s;
        }
        .compat-card:hover { box-shadow: var(--shadow-sign); }
        .compat-header {
          display: grid; grid-template-columns: auto 1fr auto auto;
          align-items: center; gap: 16px; padding: 20px 24px; cursor: pointer; user-select: none;
        }
        @media (max-width: 600px) { .compat-header { grid-template-columns: auto 1fr auto; } .compat-level { display: none; } }
        .compat-sign-icon { width: 46px; height: 46px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; }
        .compat-sign-info h3 { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 3px; }
        .compat-sign-info p { font-size: 0.72rem; color: var(--text-soft); font-weight: 500; }
        .compat-level { display: flex; flex-direction: column; align-items: center; gap: 4px; flex-shrink: 0; }
        .compat-stars { font-size: 0.8rem; color: var(--gold); letter-spacing: 0.05em; }
        .compat-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 10px; border-radius: 50px; }
        .label-excellent   { background: #E8F5E0; color: #2E7A1F; }
        .label-good        { background: #FFF3CD; color: #8A6200; }
        .label-moderate    { background: #F8F4D8; color: var(--sign-primary); }
        .label-challenging { background: #FFE8E5; color: #C0251A; }
        .compat-toggle { font-size: 1rem; color: var(--text-soft); transition: transform 0.3s; flex-shrink: 0; }
        .compat-card.open .compat-toggle { transform: rotate(180deg); }
        .compat-body { max-height: 0; overflow: hidden; transition: max-height 0.45s ease; }
        .compat-card.open .compat-body { max-height: 600px; }
        .compat-body-inner {
          border-top: 1px solid rgba(138,114,0,0.08); padding: 24px 24px 28px;
          display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;
          background: var(--sign-xpale);
        }
        @media (max-width: 660px) { .compat-body-inner { grid-template-columns: 1fr; } }
        .compat-aspect h4 { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sign-primary); margin-bottom: 6px; }
        .compat-aspect p { font-size: 0.83rem; color: var(--text-mid); line-height: 1.62; }

        /* ── SCORE GRID ── */
        .score-section { background: var(--sign-pale); padding: 80px 6vw; }
        .score-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
        @media (max-width: 720px) { .score-grid { grid-template-columns: repeat(2,1fr); } }
        .score-card {
          background: var(--white); border-radius: 18px; padding: 22px 18px;
          text-align: center; border: 1.5px solid rgba(138,114,0,0.1);
          box-shadow: var(--shadow-soft); transition: all 0.3s;
        }
        .score-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-sign); }
        .score-sign { font-size: 1.8rem; margin-bottom: 6px; }
        .score-name { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
        .score-bar-wrap { height: 5px; background: var(--sign-pale); border-radius: 3px; overflow: hidden; margin-bottom: 6px; }
        .score-bar { height: 100%; border-radius: 3px; background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent)); transform-origin: left; transform: scaleX(0); transition: transform 1.2s ease; }
        .score-bar.animate { transform: scaleX(1); }
        .score-pct { font-size: 0.72rem; font-weight: 600; color: var(--text-soft); }

        /* ── REPORT CALLOUT ── */
        .report-callout {
          background: linear-gradient(145deg, var(--hero-dark2) 0%, var(--hero-mid) 50%, var(--hero-light) 100%);
          border-radius: 24px; padding: 48px 52px;
          display: grid; grid-template-columns: 1fr auto; gap: 36px; align-items: center;
          max-width: 1100px; margin: 0 auto; position: relative; overflow: hidden;
          border: 1px solid rgba(212,192,64,0.12);
        }
        .report-callout::before {
          content: '♓'; position: absolute; right: 42%; top: 50%; transform: translateY(-50%);
          font-size: 220px; color: rgba(255,255,255,0.025);
          font-family: var(--font-display); pointer-events: none; line-height: 1;
        }
        @media (max-width: 760px) { .report-callout { grid-template-columns: 1fr; padding: 32px 24px; } .report-callout::before { display: none; } }
        .rc-tag { display: inline-block; background: rgba(212,192,64,0.15); color: var(--sign-accent); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; padding: 4px 14px; border-radius: 50px; margin-bottom: 16px; border: 1px solid rgba(212,192,64,0.2); }
        .rc-title { font-family: var(--font-display); font-size: clamp(1.5rem,2.5vw,2.1rem); font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.2; }
        .rc-title em { font-style: italic; color: var(--sign-accent); }
        .rc-desc { font-size: 0.9rem; font-weight: 300; color: rgba(255,255,255,0.7); line-height: 1.72; max-width: 480px; margin-bottom: 24px; }
        .rc-side { text-align: center; flex-shrink: 0; }
        .rc-price { background: var(--sign-xpale); border-radius: 14px; padding: 20px 28px; margin-bottom: 14px; }
        .rc-price .from { font-size: 0.68rem; color: var(--text-soft); text-transform: uppercase; letter-spacing: 0.1em; }
        .rc-price .amount { font-family: var(--font-display); font-size: 2rem; font-weight: 700; color: var(--sign-primary); line-height: 1.1; }
        .rc-price .note { font-size: 0.68rem; color: var(--text-soft); margin-top: 4px; line-height: 1.4; }

        /* ── GEM STRIP ── */
        .gem-strip { background: var(--white); padding: 0 6vw 80px; }
        .gem-strip-inner { max-width: 1100px; margin: 0 auto; }
        .gem-strip-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 36px; }
        @media (max-width: 660px) { .gem-strip-cards { grid-template-columns: 1fr; } }
        .gem-card {
          background: var(--sign-xpale); border-radius: 18px; padding: 24px 22px;
          border: 1.5px solid rgba(138,114,0,0.1); text-decoration: none; display: block; transition: all 0.3s;
        }
        .gem-card:hover { box-shadow: var(--shadow-sign); transform: translateY(-3px); background: var(--white); }
        .gem-emoji { font-size: 1.8rem; margin-bottom: 10px; display: block; }
        .gem-name { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
        .gem-desc { font-size: 0.8rem; color: var(--text-mid); line-height: 1.6; margin-bottom: 10px; }
        .gem-planet { font-size: 0.68rem; font-weight: 700; color: var(--sign-primary); text-transform: uppercase; letter-spacing: 0.08em; }

        /* ── SIGNS NAV ── */
        .signs-nav { background: var(--sign-pale); padding: 60px 6vw; border-top: 1px solid rgba(138,114,0,0.12); }
        .signs-nav-inner { max-width: 1100px; margin: 0 auto; }
        .signs-nav-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--text-dark); margin-bottom: 22px; text-align: center; }
        .signs-nav-title em { font-style: italic; color: var(--saffron-deep); }
        .signs-nav-grid { display: grid; grid-template-columns: repeat(12,1fr); gap: 10px; }
        @media (max-width: 860px) { .signs-nav-grid { grid-template-columns: repeat(6,1fr); } }
        @media (max-width: 440px) { .signs-nav-grid { grid-template-columns: repeat(4,1fr); } }
        .sign-nav-item {
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          padding: 12px 6px; background: var(--white); border-radius: 14px;
          border: 1.5px solid rgba(138,114,0,0.1); text-decoration: none; transition: all 0.2s;
        }
        .sign-nav-item.active { border-color: var(--sign-secondary); background: var(--sign-pale); }
        .sign-nav-item:hover:not(.active) { border-color: var(--saffron-light); box-shadow: 0 4px 16px rgba(232,130,26,0.14); transform: translateY(-2px); }
        .sni-symbol { font-size: 1.2rem; }
        .sni-name { font-size: 0.62rem; font-weight: 600; color: var(--text-mid); letter-spacing: 0.04em; }

        /* ── BOTTOM CTA ── */
        .bottom-cta {
          background: linear-gradient(145deg, var(--hero-dark1) 0%, var(--hero-dark2) 25%, var(--hero-mid) 60%, var(--sign-secondary) 100%);
          padding: 70px 6vw; text-align: center; position: relative; overflow: hidden;
        }
        .bottom-cta::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 60%, rgba(212,192,64,0.10) 0%, transparent 65%);
          pointer-events: none;
        }
        .bottom-cta h2 { font-family: var(--font-display); font-size: clamp(1.7rem,3.5vw,2.7rem); font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.2; position: relative; }
        .bottom-cta p { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 440px; margin: 0 auto 28px; line-height: 1.65; position: relative; }
        .bottom-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; }
        .btn-white { display: inline-flex; align-items: center; gap: 8px; background: var(--white); color: var(--sign-primary); font-weight: 700; font-size: 0.88rem; padding: 13px 26px; border-radius: 50px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
        .btn-outline-white { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--white); font-weight: 500; font-size: 0.88rem; padding: 13px 26px; border-radius: 50px; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.38); transition: background 0.2s; }
        .btn-outline-white:hover { background: rgba(255,255,255,0.1); }

        .section-divider { border: none; border-top: 1px solid rgba(138,114,0,0.08); margin: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
