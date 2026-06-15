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

export default function ScorpioDemo() {
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
        <title>Scorpio Love Compatibility With All Signs – Dr. Vinay Bajrangi</title>
        <meta name="description" content="Which zodiac sign is most compatible with Scorpio in love and marriage? Vedic astrology insights on Scorpio compatibility with all 12 signs by Dr. Vinay Bajrangi." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={`${cormorant.variable} ${dmSans.variable} page-wrapper`}>
        {/* BREADCRUMB */}
<nav className="breadcrumb">
  <a href="https://www.vinaybajrangi.com">Home</a><span>›</span>
  <a href="https://www.vinaybajrangi.com/love-compatibility">Love Compatibility</a><span>›</span>
  Scorpio Love Compatibility
</nav>

{/* HERO */}
<section className="hero">
  <div className="hero-bg-symbol">♏</div>
  <div className="hero-glow"></div>
  <div className="vortex-ring"></div>
  <div className="vortex-ring"></div>
  <div className="vortex-ring"></div>
  <div className="vortex-ring"></div>

  <div className="hero-content">
    <div className="hero-eyebrow">
      <a href="https://www.vinaybajrangi.com/love-compatibility">Love Compatibility</a>
      <span className="sep">›</span><span>Scorpio</span>
    </div>

    <div className="hero-sign-badge">
      <span className="sign-glyph">♏</span>
      <div className="sign-meta">
        <strong>Scorpio · The Scorpion</strong>
        <span>October 23 – November 21 · Water Sign · Mars &amp; Ketu-Ruled</span>
      </div>
    </div>

    <h1 className="hero-title">
      Scorpio Love Compatibility<br /><em>with All 12 Signs</em>
    </h1>
    <p className="hero-desc">
      Scorpio does not fall in love — they transform through it. Magnetic, fiercely loyal, and incapable of anything shallow, they demand the whole truth from every relationship. Which signs can match that depth? Which will retreat from it? And what does Vedic astrology reveal that the sun sign alone never will?
    </p>

    <div className="hero-pills">
      <span className="pill">💧 Water Element</span>
      <span className="pill">♂ Mars &amp; Ketu Ruled</span>
      <span className="pill">🔒 Fixed Modality</span>
      <span className="pill">Best with: Cancer, Pisces, Virgo</span>
    </div>

    <div className="hero-ctas">
      <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-primary">✦ Get My Personalised Report</a>
      <a href="https://www.vinaybajrangi.com/calculator/love-calculator" className="btn-ghost">Free Love Calculator →</a>
    </div>
  </div>

  <div className="hero-visual">
    <div className="compat-meter-card">
      <div className="meter-title">Quick Compatibility at a Glance</div>
      <div className="meter-row"><span className="meter-sign">♋</span><span className="meter-label">Cancer</span><div className="meter-bar-bg"><div className="meter-bar" data-width="95%"></div></div><span className="meter-score">95%</span></div>
      <div className="meter-row"><span className="meter-sign">♓</span><span className="meter-label">Pisces</span><div className="meter-bar-bg"><div className="meter-bar" data-width="92%"></div></div><span className="meter-score">92%</span></div>
      <div className="meter-row"><span className="meter-sign">♍</span><span className="meter-label">Virgo</span><div className="meter-bar-bg"><div className="meter-bar" data-width="86%"></div></div><span className="meter-score">86%</span></div>
      <div className="meter-row"><span className="meter-sign">♑</span><span className="meter-label">Capricorn</span><div className="meter-bar-bg"><div className="meter-bar" data-width="82%"></div></div><span className="meter-score">82%</span></div>
      <div className="meter-row"><span className="meter-sign">♉</span><span className="meter-label">Taurus</span><div className="meter-bar-bg"><div className="meter-bar" data-width="72%"></div></div><span className="meter-score">72%</span></div>
      <div className="meter-row"><span className="meter-sign">♏</span><span className="meter-label">Scorpio</span><div className="meter-bar-bg"><div className="meter-bar" data-width="68%"></div></div><span className="meter-score">68%</span></div>
      <div className="meter-row"><span className="meter-sign">♊</span><span className="meter-label">Gemini</span><div className="meter-bar-bg"><div className="meter-bar" data-width="36%"></div></div><span className="meter-score">36%</span></div>
    </div>
  </div>
</section>

{/* TRAIT STRIP */}
<div className="trait-strip">
  <div className="trait-inner">
    <div className="trait-item"><div className="trait-icon">💧</div><div className="trait-text"><strong>Element</strong><span>Water</span></div></div>
    <div className="trait-item"><div className="trait-icon">♂</div><div className="trait-text"><strong>Ruling Planets</strong><span>Mars &amp; Ketu</span></div></div>
    <div className="trait-item"><div className="trait-icon">🔒</div><div className="trait-text"><strong>Modality</strong><span>Fixed</span></div></div>
    <div className="trait-item"><div className="trait-icon">🦂</div><div className="trait-text"><strong>Love Strength</strong><span>Intense, Loyal, Transformative</span></div></div>
    <div className="trait-item"><div className="trait-icon">⚠️</div><div className="trait-text"><strong>Love Challenge</strong><span>Possessive, Controlling, Secretive</span></div></div>
    <div className="trait-item"><div className="trait-icon">✨</div><div className="trait-text"><strong>Best Match</strong><span>Cancer, Pisces, Virgo</span></div></div>
  </div>
</div>

<hr className="section-divider" />

{/* SCORPIO IN LOVE: OVERVIEW */}
<div style={{background: 'var(--white)', padding: '80px 6vw 40px'}}>
  <div style={{maxWidth: '1100px', margin: '0 auto'}}>
    <span className="section-tag reveal">Understanding Scorpio in Love</span>
    <h2 className="section-title reveal">The heart of the Scorpion —<br /><em>how Scorpio loves</em></h2>
    <p className="section-lead reveal">Scorpio is ruled by Mars and Ketu in Vedic astrology — the planet of desire and action alongside the shadow planet of spiritual dissolution and past karma. This creates a love nature unlike any other: magnetic at the surface, unfathomable beneath it, and utterly incapable of anything superficial.</p>

    <div className="overview-grid">
      <div className="overview-card reveal">
        <div className="ov-icon">🌊</div>
        <div className="ov-title">Love Style: All-or-Nothing, Forever</div>
        <p className="ov-text">Scorpio does not do casual relationships. When they love, they love with the full force of their being — protectively, completely, and with a memory that forgets nothing. They are the most loyal partner in the zodiac when their trust is intact. And the most formidable opponent when it is broken.</p>
      </div>
      <div className="overview-card reveal">
        <div className="ov-icon">🔐</div>
        <div className="ov-title">The Challenge: Control and Jealousy</div>
        <p className="ov-text">Scorpio&apos;s deepest wound is betrayal — and they sense it before it happens, which sometimes causes the very outcome they feared. Possessiveness, jealousy, and the need to control can slowly suffocate even the most devoted partner. The path forward is trust — developed consciously, not demanded instinctively.</p>
      </div>
      <div className="overview-card reveal">
        <div className="ov-icon">🕯️</div>
        <div className="ov-title">What Scorpio Needs: Truth and Total Presence</div>
        <p className="ov-text">Scorpio can read people with startling accuracy and has no tolerance for pretence. They need a partner who is emotionally real — capable of sitting with darkness as well as light, willing to be fully known and to fully know. Anything less than complete authenticity eventually becomes unbearable to a Scorpio.</p>
      </div>
      <div className="overview-card reveal">
        <div className="ov-icon">🪐</div>
        <div className="ov-title">Vedic Lens: Mars, Ketu, 8th House &amp; Navamsa</div>
        <p className="ov-text">In Vedic astrology, Scorpio (Vrishchika) is associated with the 8th house — transformation, hidden knowledge, shared resources, and the deep bonds formed through crisis. Mars gives it its raw sexual and protective energy; Ketu gives it its detachment, spiritual depth, and karmic weight. The 7th house lord for Scorpio Lagna is Venus (ruling Taurus) — meaning the ideal partner archetype for Scorpio is Venusian: beautiful, sensual, stable, and devoted. The Navamsa chart is essential for understanding whether love converts to lasting union.</p>
      </div>
    </div>
  </div>
</div>

<hr className="section-divider" />

{/* COMPATIBILITY BREAKDOWN */}
<div style={{background: 'var(--white)', padding: '40px 6vw 80px'}}>
  <div style={{maxWidth: '1100px', margin: '0 auto'}}>
    <span className="section-tag reveal">Scorpio with Each Sign</span>
    <h2 className="section-title reveal">Scorpio compatibility —<br /><em>sign by sign</em></h2>
    <p className="section-lead reveal">Tap any sign to reveal the full breakdown — love chemistry, long-term potential, and the Vedic astrology perspective that no generic compatibility tool will give you.</p>

    <div className="compat-layout">

      {/* CANCER */}
      <div className="compat-card reveal">
        <div className="compat-header" onClick={toggleCompat}>
          <div className="compat-sign-icon" style={{background: 'linear-gradient(135deg,#2B6CB0,#63B3ED)'}}>♋</div>
          <div className="compat-sign-info"><h3>Scorpio + Cancer</h3><p>Water meets Water · Jun 21 – Jul 22</p></div>
          <div className="compat-level"><div className="compat-stars">★★★★★</div><span className="compat-label label-excellent">Excellent</span></div>
          <span className="compat-toggle">▾</span>
        </div>
        <div className="compat-body"><div className="compat-body-inner">
          <div className="compat-aspect"><h4>Love Chemistry</h4><p>Two water signs who meet in the ocean of feeling and immediately recognise each other. Cancer&apos;s nurturing tenderness gives Scorpio the emotional safety they need to lower their guard; Scorpio&apos;s depth and protective instinct gives Cancer the security they have always sought. The bond forms quickly and roots deeply.</p></div>
          <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Among the highest in the zodiac. Both are fiercely loyal, both feel everything intensely, and both place the relationship above external concerns. The main challenge is emotional overwhelm — two water signs can create a world so emotionally charged that perspective becomes difficult. Both need individual outlets to maintain balance within the relationship.</p></div>
          <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>The Moon rules Cancer and has a complex but ultimately workable relationship with Mars (Scorpio&apos;s co-ruler) in Vedic astrology. Cancer is Scorpio&apos;s 9th house — the house of fortune, higher wisdom, and dharma — one of the most auspicious placements possible. Cancer partners bring significant good fortune and philosophical depth into Scorpio&apos;s life, making this pairing one of the most spiritually and romantically aligned in Vedic astrology.</p></div>
        </div></div>
      </div>

      {/* PISCES */}
      <div className="compat-card reveal">
        <div className="compat-header" onClick={toggleCompat}>
          <div className="compat-sign-icon" style={{background: 'linear-gradient(135deg,#3B82B0,#82C8E0)'}}>♓</div>
          <div className="compat-sign-info"><h3>Scorpio + Pisces</h3><p>Water meets Water · Feb 19 – Mar 20</p></div>
          <div className="compat-level"><div className="compat-stars">★★★★★</div><span className="compat-label label-excellent">Excellent</span></div>
          <span className="compat-toggle">▾</span>
        </div>
        <div className="compat-body"><div className="compat-body-inner">
          <div className="compat-aspect"><h4>Love Chemistry</h4><p>A deeply mystical pairing. Pisces is one of the few signs that can match Scorpio&apos;s emotional ocean without drowning in it. Scorpio finds in Pisces a partner who is genuinely boundless — whose compassion and spiritual depth meets even Scorpio&apos;s most profound need to be truly known. Pisces finds in Scorpio the protective intensity they always dreamed of.</p></div>
          <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Very high. Both operate in realms of feeling that most other signs cannot access. The relationship often carries a spiritual and karmic quality — a sense of having found each other across time. The greatest challenge is practical grounding — two water signs must consciously build real-world structure around their profound emotional connection.</p></div>
          <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Jupiter rules Pisces and is a generally benefic planet for Mars-ruled Scorpio charts. Pisces is Scorpio&apos;s 5th house — the house of romance, love, creativity, and children — making Pisces the natural love interest and romantic fulfilment sign for Scorpio in Vedic astrology. When both Jupiter and Mars are well-placed in the respective charts, this is one of Vedic astrology&apos;s most transcendent romantic pairings.</p></div>
        </div></div>
      </div>

      {/* VIRGO */}
      <div className="compat-card reveal">
        <div className="compat-header" onClick={toggleCompat}>
          <div className="compat-sign-icon" style={{background: 'linear-gradient(135deg,#5C6E2A,#849A3E)'}}>♍</div>
          <div className="compat-sign-info"><h3>Scorpio + Virgo</h3><p>Water meets Earth · Aug 23 – Sep 22</p></div>
          <div className="compat-level"><div className="compat-stars">★★★★☆</div><span className="compat-label label-good">Good</span></div>
          <span className="compat-toggle">▾</span>
        </div>
        <div className="compat-body"><div className="compat-body-inner">
          <div className="compat-aspect"><h4>Love Chemistry</h4><p>A quietly powerful pairing built on mutual observation. Scorpio&apos;s depth intrigues Virgo&apos;s analytical mind; Virgo&apos;s reliability and quiet attentiveness slowly earns Scorpio&apos;s trust — the most precious commodity any sign can offer the Scorpion. Both are private, both notice everything, and both prefer substance over spectacle.</p></div>
          <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good. Virgo&apos;s practical devotion gives Scorpio the constancy they need; Scorpio&apos;s emotional depth gives Virgo the richness of feeling that their Mercury-ruled nature often suppresses. Virgo&apos;s critical tendencies must be carefully managed — Scorpio does not forget a wound. When both bring their best, this is a profoundly complementary partnership.</p></div>
          <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mercury rules Virgo and is neutral toward Mars in Vedic astrology. Virgo is Scorpio&apos;s 11th house — the house of gains, long-term goals, and social networks. Virgo partners frequently bring material and professional benefit into Scorpio&apos;s life alongside the emotional connection. Dr. Bajrangi notes that the 11th house placement makes this pairing particularly productive for shared goals and financial aspirations.</p></div>
        </div></div>
      </div>

      {/* CAPRICORN */}
      <div className="compat-card reveal">
        <div className="compat-header" onClick={toggleCompat}>
          <div className="compat-sign-icon" style={{background: 'linear-gradient(135deg,#5A5A5A,#9A9A9A)'}}>♑</div>
          <div className="compat-sign-info"><h3>Scorpio + Capricorn</h3><p>Water meets Earth · Dec 22 – Jan 19</p></div>
          <div className="compat-level"><div className="compat-stars">★★★★☆</div><span className="compat-label label-good">Good</span></div>
          <span className="compat-toggle">▾</span>
        </div>
        <div className="compat-body"><div className="compat-body-inner">
          <div className="compat-aspect"><h4>Love Chemistry</h4><p>A powerful pairing of ambition and depth. Capricorn&apos;s quiet authority and disciplined focus resonates with Scorpio&apos;s strategic, goal-oriented nature. Both are reserved with their emotions and earn trust slowly — which means when they open to each other, the act carries extraordinary weight. Mutual respect precedes love here, and that is a very strong foundation.</p></div>
          <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Strong. Both are Fixed or Cardinal — determined and not easily swayed. Both prioritise achievement, loyalty, and building something lasting. The relationship can become overly serious and emotionally closed if neither develops the courage to be vulnerable. When both do, this is a deeply bonded, enduring, and formidable partnership.</p></div>
          <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Saturn rules Capricorn and has a complex relationship with Mars in Vedic astrology — Mars considers Saturn a friend, but Saturn is neutral toward Mars. Capricorn is Scorpio&apos;s 3rd house — the house of communication, courage, and immediate environment. Capricorn partners often encourage Scorpio to speak more directly, take decisive action, and communicate their formidable inner world rather than keeping it hidden. This is genuinely valuable for Scorpio&apos;s growth.</p></div>
        </div></div>
      </div>

      {/* TAURUS (opposite) */}
      <div className="compat-card reveal">
        <div className="compat-header" onClick={toggleCompat}>
          <div className="compat-sign-icon" style={{background: 'linear-gradient(135deg,#2D6A2A,#5A9E55)'}}>♉</div>
          <div className="compat-sign-info"><h3>Scorpio + Taurus</h3><p>Water meets Earth · Opposite Signs · Apr 20 – May 20</p></div>
          <div className="compat-level"><div className="compat-stars">★★★★☆</div><span className="compat-label label-good">Good</span></div>
          <span className="compat-toggle">▾</span>
        </div>
        <div className="compat-body"><div className="compat-body-inner">
          <div className="compat-aspect"><h4>Love Chemistry</h4><p>Opposite signs on the zodiac wheel — and the attraction is one of the most powerful in the zodiac. Taurus&apos; sensual constancy and grounded presence draws Scorpio irresistibly; Scorpio&apos;s magnetic depth and intensity captivates Taurus in a way nothing else can. Both are Fixed signs — when this works, it is unshakeable. When it doesn&apos;t, it is immovable.</p></div>
          <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good with maturity. Taurus is Scorpio&apos;s 7th house — the house of marriage — making Taurus the natural marriage partner for Scorpio Lagna in Vedic astrology. Both are intensely loyal and deeply possessive, which can be a strength or a source of sustained power struggle. The key is that neither needs to win — both need to trust.</p></div>
          <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Venus rules Taurus and is also the 7th house lord for Scorpio Lagna — making Taurus the archetypal marriage sign for Scorpio in Vedic astrology. Venus and Mars are natural enemies in Vedic astrology, which explains the extraordinary tension and attraction in this pairing. The Mars–Venus axis is the primary axis of romantic desire in the entire Vedic system, making this one of the most electrically charged unions possible.</p></div>
        </div></div>
      </div>

      {/* SCORPIO + SCORPIO */}
      <div className="compat-card reveal">
        <div className="compat-header" onClick={toggleCompat}>
          <div className="compat-sign-icon" style={{background: 'linear-gradient(135deg,var(--sign-primary),var(--sign-secondary))'}}>♏</div>
          <div className="compat-sign-info"><h3>Scorpio + Scorpio</h3><p>Water meets Water · Same Sign</p></div>
          <div className="compat-level"><div className="compat-stars">★★★★☆</div><span className="compat-label label-good">Good</span></div>
          <span className="compat-toggle">▾</span>
        </div>
        <div className="compat-body"><div className="compat-body-inner">
          <div className="compat-aspect"><h4>Love Chemistry</h4><p>Two Scorpios understand each other&apos;s depth, intensity, and emotional complexity instantly — no explanation required. The connection is immediate and profound. Both can handle the other&apos;s darkness without flinching. The passion and loyalty are amplified beyond what most relationships reach.</p></div>
          <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good when both have done inner work. Two Scorpios at their worst amplify each other&apos;s possessiveness, jealousy, and power games into something destructive. Two Scorpios at their best create an unparalleled depth of emotional truth and mutual protection. The relationship rises or falls entirely on the emotional maturity of both individuals.</p></div>
          <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Two Mars and Ketu-ruled charts create double intensity — the full force of Scorpionic energy with no natural counterbalance. Dr. Bajrangi pays particular attention to whether one or both charts have a strong benefic influence (Jupiter, Venus, or a strong Moon) to moderate the combined intensity. Without softening planetary influences, this pairing can become a sustained emotional crucible rather than a sanctuary.</p></div>
        </div></div>
      </div>

      {/* LEO */}
      <div className="compat-card reveal">
        <div className="compat-header" onClick={toggleCompat}>
          <div className="compat-sign-icon" style={{background: 'linear-gradient(135deg,#C0392B,#E05A4E)'}}>♌</div>
          <div className="compat-sign-info"><h3>Scorpio + Leo</h3><p>Water meets Fire · Jul 23 – Aug 22</p></div>
          <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
          <span className="compat-toggle">▾</span>
        </div>
        <div className="compat-body"><div className="compat-body-inner">
          <div className="compat-aspect"><h4>Love Chemistry</h4><p>Two Fixed signs with powerful wills — the initial attraction can be intense and magnetic. Scorpio is drawn to Leo&apos;s regal confidence; Leo is fascinated by Scorpio&apos;s mysterious depth. But Leo needs visible, public admiration and Scorpio operates in the private and hidden. These fundamental orientations inevitably collide.</p></div>
          <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate to challenging. Leo&apos;s need for external validation conflicts with Scorpio&apos;s demand for exclusive, private devotion. Power struggles between two Fixed signs can be prolonged and entrenched. When both consciously honour the other&apos;s core needs — Scorpio giving Leo genuine appreciation, Leo giving Scorpio genuine emotional exclusivity — this pairing has real fire.</p></div>
          <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>The Sun rules Leo and is considered neutral toward Mars in Vedic astrology. Leo is Scorpio&apos;s 10th house — the house of career, reputation, and public life. Leo partners often play a significant role in shaping Scorpio&apos;s professional standing and public identity. Dr. Bajrangi notes that this makes the relationship professionally meaningful even when romantically complicated — Scorpio and Leo frequently build significant things together in the external world.</p></div>
        </div></div>
      </div>

      {/* ARIES */}
      <div className="compat-card reveal">
        <div className="compat-header" onClick={toggleCompat}>
          <div className="compat-sign-icon" style={{background: 'linear-gradient(135deg,#C0351A,#F26B3A)'}}>♈</div>
          <div className="compat-sign-info"><h3>Scorpio + Aries</h3><p>Water meets Fire · Both Mars-Ruled · Mar 21 – Apr 19</p></div>
          <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
          <span className="compat-toggle">▾</span>
        </div>
        <div className="compat-body"><div className="compat-body-inner">
          <div className="compat-aspect"><h4>Love Chemistry</h4><p>Both ruled by Mars in traditional astrology — raw, intense chemistry that ignites immediately. Aries&apos; boldness intrigues Scorpio; Scorpio&apos;s depth and magnetism draws Aries in. But Aries moves on impulse and forgets quickly; Scorpio moves deliberately and forgets nothing. These rhythms conflict as often as they connect.</p></div>
          <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate. Aries&apos; bluntness can wound Scorpio; Scorpio&apos;s jealousy and intensity can overwhelm the freedom-loving Aries. Both are Fixed or Cardinal — neither yields easily. Works best when Aries develops the depth Scorpio requires and Scorpio develops the lightness Aries needs. Both must choose each other actively rather than assuming possession.</p></div>
          <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>In Vedic astrology, Mars rules Aries directly and co-rules Scorpio — two Mars-dominant charts create doubled intensity. Aries is Scorpio&apos;s 6th house — the house of conflict, health, and service. This placement frequently manifests as a relationship that feels like sustained work or carries themes of health and service — meaningful but rarely effortless. The 6th house connection makes Aries a challenging but growth-inducing partner for Scorpio.</p></div>
        </div></div>
      </div>

      {/* AQUARIUS */}
      <div className="compat-card reveal">
        <div className="compat-header" onClick={toggleCompat}>
          <div className="compat-sign-icon" style={{background: 'linear-gradient(135deg,#1A5A9E,#4A9ECC)'}}>♒</div>
          <div className="compat-sign-info"><h3>Scorpio + Aquarius</h3><p>Water meets Air · Oct 23 – Jan 20</p></div>
          <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
          <span className="compat-toggle">▾</span>
        </div>
        <div className="compat-body"><div className="compat-body-inner">
          <div className="compat-aspect"><h4>Love Chemistry</h4><p>Both are intensely private in their own ways and both possess formidable depth of mind. The intellectual respect can be real. But Scorpio loves personally, possessively, and completely; Aquarius loves universally, freely, and often abstractly. These are fundamentally different love languages — and neither bends naturally.</p></div>
          <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Challenging without profound mutual growth. Scorpio&apos;s possessiveness is the antithesis of Aquarius&apos; need for emotional freedom; Aquarius&apos; detachment triggers Scorpio&apos;s deepest insecurities. Both are Fixed signs — the stalemates can be spectacular. This pairing requires both to evolve significantly beyond their default modes.</p></div>
          <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Saturn rules Aquarius and is considered neutral toward Mars in Vedic astrology. Aquarius is Scorpio&apos;s 4th house — the house of home, mother, and emotional foundations. Aquarius partners often deeply affect Scorpio&apos;s sense of domestic security and inner emotional life — sometimes providing it, sometimes disrupting it entirely. Dr. Bajrangi notes that the 4th house placement makes this pairing emotionally significant even when intellectually incompatible.</p></div>
        </div></div>
      </div>

      {/* LIBRA */}
      <div className="compat-card reveal">
        <div className="compat-header" onClick={toggleCompat}>
          <div className="compat-sign-icon" style={{background: 'linear-gradient(135deg,#5558A8,#7B7ECC)'}}>♎</div>
          <div className="compat-sign-info"><h3>Scorpio + Libra</h3><p>Water meets Air · Sep 23 – Oct 22</p></div>
          <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
          <span className="compat-toggle">▾</span>
        </div>
        <div className="compat-body"><div className="compat-body-inner">
          <div className="compat-aspect"><h4>Love Chemistry</h4><p>Adjacent signs with initial magnetic pull. Libra&apos;s grace and charm disarms Scorpio&apos;s habitual guardedness — no small feat. Scorpio&apos;s intensity and depth fascinates the normally surface-skimming Libra. The intrigue is real. But Scorpio&apos;s emotional demands and possessiveness quickly discomfits Libra, who needs social freedom and lighter emotional air.</p></div>
          <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate with genuine understanding. Libra must develop greater emotional availability — Scorpio cannot sustain a relationship on charm and harmony alone. Scorpio must learn that Libra&apos;s social ease is not a betrayal — it is simply how Libra breathes. The relationship improves enormously when both become honest about their actual emotional needs rather than managing appearances.</p></div>
          <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Venus rules Libra and is the 7th house lord for Scorpio Lagna — meaning Venus-ruled signs carry direct marriage significance for Scorpio. This gives Libra unexpected weight in Scorpio&apos;s chart despite the temperamental distance. Libra is Scorpio&apos;s 12th house — the house of hidden matters, loss, and spiritual retreat. Libra partners often play a significant behind-the-scenes role in Scorpio&apos;s life, carrying spiritual or karmic significance not visible on the surface.</p></div>
        </div></div>
      </div>

      {/* GEMINI */}
      <div className="compat-card reveal">
        <div className="compat-header" onClick={toggleCompat}>
          <div className="compat-sign-icon" style={{background: 'linear-gradient(135deg,#3A8A2A,#5CB84A)'}}>♊</div>
          <div className="compat-sign-info"><h3>Scorpio + Gemini</h3><p>Water meets Air · May 21 – Jun 20</p></div>
          <div className="compat-level"><div className="compat-stars">★★☆☆☆</div><span className="compat-label label-challenging">Challenging</span></div>
          <span className="compat-toggle">▾</span>
        </div>
        <div className="compat-body"><div className="compat-body-inner">
          <div className="compat-aspect"><h4>Love Chemistry</h4><p>A fascinating contradiction. Gemini&apos;s quicksilver mind initially intrigues Scorpio — a puzzle worth solving. Scorpio&apos;s magnetic mystery captivates Gemini briefly. But Gemini moves in the world of ideas and surface connection; Scorpio demands emotional immersion. Scorpio reads Gemini&apos;s variability as shallowness; Gemini finds Scorpio&apos;s intensity suffocating.</p></div>
          <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Low without exceptional mutual evolution. These two signs want fundamentally different things from love — Gemini wants stimulation, variety, and freedom; Scorpio wants depth, constancy, and emotional exclusivity. Neither is asking for something unreasonable. They are simply incompatible in their most fundamental romantic needs. The intellectual fascination can endure; the emotional fulfillment rarely does.</p></div>
          <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mercury rules Gemini and Scorpio considers Mercury&apos;s energy light and evasive in comparison to its own Mars-Ketu depth. Gemini is Scorpio&apos;s 8th house — the house of transformation, hidden resources, and crisis. This creates an 8th house relationship quality — encounters that are intensely transformative, often financially or emotionally destabilising, and rarely comfortable. The 8th house connection makes Gemini significant to Scorpio&apos;s deepest personal changes, whether or not the relationship itself is sustainable.</p></div>
        </div></div>
      </div>

      {/* SAGITTARIUS */}
      <div className="compat-card reveal">
        <div className="compat-header" onClick={toggleCompat}>
          <div className="compat-sign-icon" style={{background: 'linear-gradient(135deg,#6B3FA0,#9B6BD0)'}}>♐</div>
          <div className="compat-sign-info"><h3>Scorpio + Sagittarius</h3><p>Water meets Fire · Nov 22 – Dec 21</p></div>
          <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
          <span className="compat-toggle">▾</span>
        </div>
        <div className="compat-body"><div className="compat-body-inner">
          <div className="compat-aspect"><h4>Love Chemistry</h4><p>Adjacent signs with a strong initial draw. Sagittarius&apos; expansive optimism and philosophical range genuinely intrigues Scorpio; Scorpio&apos;s depth and mystery pulls Sagittarius in. But Sagittarius needs freedom and lightness; Scorpio needs depth and loyalty. The optimist and the intensity-seeker can inspire each other or exhaust each other in equal measure.</p></div>
          <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate. Sagittarius&apos; honesty — which they deliver without diplomatic softening — can cut Scorpio more deeply than Sagittarius realises. Scorpio&apos;s possessiveness and intensity can feel confining to the free-ranging Archer. Both must develop their shared philosophical nature — the love of truth — as the relationship&apos;s central language, rather than its battlefield.</p></div>
          <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Jupiter rules Sagittarius and is a benefic planet that has a generally positive relationship with Mars in Vedic astrology. Sagittarius is Scorpio&apos;s 2nd house — the house of family, accumulated wealth, and speech. Sagittarius partners frequently have significant influence on Scorpio&apos;s financial life, family relationships, and the way Scorpio communicates. When Jupiter is strong in both charts, this placement can bring material and familial expansion into the Scorpio native&apos;s life through this partnership.</p></div>
        </div></div>
      </div>

    </div>
    <p style={{fontSize: '0.78rem', color: 'var(--text-soft)', marginTop: '18px', fontStyle: 'italic', textAlign: 'center'}}>All 12 signs covered above. For a personalised compatibility reading based on your full birth chart, see the Love &amp; Relationship Report.</p>
  </div>
</div>

<hr className="section-divider" />

{/* SCORE SUMMARY */}
<div className="score-section">
  <div style={{maxWidth: '1100px', margin: '0 auto'}}>
    <span className="section-tag reveal" style={{textAlign: 'center', display: 'block'}}>At a Glance</span>
    <h2 className="section-title reveal" style={{textAlign: 'center', marginBottom: '36px'}}>Scorpio compatibility <em>scores</em></h2>
    <div className="score-grid">
      <div className="score-card reveal"><div className="score-sign">♋</div><div className="score-name">Cancer</div><div className="score-bar-wrap"><div className="score-bar" data-width="95%"></div></div><div className="score-pct">95%</div></div>
      <div className="score-card reveal"><div className="score-sign">♓</div><div className="score-name">Pisces</div><div className="score-bar-wrap"><div className="score-bar" data-width="92%"></div></div><div className="score-pct">92%</div></div>
      <div className="score-card reveal"><div className="score-sign">♍</div><div className="score-name">Virgo</div><div className="score-bar-wrap"><div className="score-bar" data-width="86%"></div></div><div className="score-pct">86%</div></div>
      <div className="score-card reveal"><div className="score-sign">♑</div><div className="score-name">Capricorn</div><div className="score-bar-wrap"><div className="score-bar" data-width="82%"></div></div><div className="score-pct">82%</div></div>
      <div className="score-card reveal"><div className="score-sign">♉</div><div className="score-name">Taurus</div><div className="score-bar-wrap"><div className="score-bar" data-width="72%"></div></div><div className="score-pct">72%</div></div>
      <div className="score-card reveal"><div className="score-sign">♏</div><div className="score-name">Scorpio</div><div className="score-bar-wrap"><div className="score-bar" data-width="68%"></div></div><div className="score-pct">68%</div></div>
      <div className="score-card reveal"><div className="score-sign">♐</div><div className="score-name">Sagittarius</div><div className="score-bar-wrap"><div className="score-bar" data-width="58%"></div></div><div className="score-pct">58%</div></div>
      <div className="score-card reveal"><div className="score-sign">♌</div><div className="score-name">Leo</div><div className="score-bar-wrap"><div className="score-bar" data-width="55%"></div></div><div className="score-pct">55%</div></div>
      <div className="score-card reveal"><div className="score-sign">♎</div><div className="score-name">Libra</div><div className="score-bar-wrap"><div className="score-bar" data-width="52%"></div></div><div className="score-pct">52%</div></div>
      <div className="score-card reveal"><div className="score-sign">♈</div><div className="score-name">Aries</div><div className="score-bar-wrap"><div className="score-bar" data-width="50%"></div></div><div className="score-pct">50%</div></div>
      <div className="score-card reveal"><div className="score-sign">♒</div><div className="score-name">Aquarius</div><div className="score-bar-wrap"><div className="score-bar" data-width="42%"></div></div><div className="score-pct">42%</div></div>
      <div className="score-card reveal"><div className="score-sign">♊</div><div className="score-name">Gemini</div><div className="score-bar-wrap"><div className="score-bar" data-width="36%"></div></div><div className="score-pct">36%</div></div>
    </div>
    <p style={{textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-soft)', marginTop: '18px', fontStyle: 'italic'}}>General sun-sign compatibility only. Personalised scores require full birth chart analysis.</p>
  </div>
</div>

<hr className="section-divider" />

{/* REPORT CALLOUT */}
<div style={{padding: '60px 6vw', background: 'var(--white)'}}>
  <div className="report-callout reveal">
    <div>
      <span className="rc-tag">For Scorpio · Personalised Report</span>
      <h2 className="rc-title">Mars, Ketu, and Venus together reveal<br />your <em>true love destiny</em></h2>
      <p className="rc-desc">Scorpio&apos;s love life is shaped by three forces: Mars (desire and action), Ketu (past karma and spiritual depth), and Venus — the 7th house lord for Scorpio Lagna who directly governs the quality and timing of marriage. Understanding how these three interact in your specific birth chart, alongside the 8th house (transformation), Navamsa compatibility, and current Dasha, gives you a precise picture of the love you are moving toward. Dr. Vinay Bajrangi&apos;s Love &amp; Relationship Report covers all of this — written, personalised, delivered in 3–5 working days.</p>
      <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-primary">✦ Get My Love &amp; Relationship Report</a>
    </div>
    <div className="rc-side">
      <div className="rc-price">
        <div className="from">Starts from</div>
        <div className="amount">₹ 799</div>
        <div className="note">Written report · Delivered<br />in 3–5 working days</div>
      </div>
      <a href="https://www.vinaybajrangi.com/calculator/love-calculator" className="btn-ghost" style={{borderColor: 'rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.72)', fontSize: '0.82rem', justifyContent: 'center', width: '100%'}}>Try Free Calculator →</a>
    </div>
  </div>
</div>

<hr className="section-divider" />

{/* GEMSTONE WEARABLES FOR SCORPIO */}
<div className="gem-strip">
  <div className="gem-strip-inner">
    <span className="section-tag reveal" style={{paddingTop: '60px', display: 'block'}}>Vedic Remedies for Scorpio</span>
    <h2 className="section-title reveal">Gemstone wearables <em>for Scorpio love</em></h2>
    <p className="section-lead reveal" style={{marginBottom: 0}}>Scorpio benefits from gemstones that channel Mars&apos; intensity productively, strengthen Venus — the direct 7th house marriage lord — and soften Ketu&apos;s tendency to create karmic entanglement and emotional isolation in relationships. All wearables must be prescribed after a full chart analysis.</p>

    <div className="gem-strip-cards">
      <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
        <span className="gem-emoji">🔴</span>
        <div className="gem-name">Red Coral Pendant / Bracelet</div>
        <p className="gem-desc">Red Coral (Moonga) strengthens Mars — Scorpio&apos;s primary ruling planet. For Scorpio natives, it sharpens emotional courage, reduces fear-based possessiveness, and brings decisive, protective energy to relationships. Particularly recommended when Scorpio&apos;s intensity is turning inward as self-destruction rather than outward as passion.</p>
        <div className="gem-planet">♂ Mars · Worn on Tuesday</div>
      </a>
      <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
        <span className="gem-emoji">💎</span>
        <div className="gem-name">Diamond / White Sapphire Pendant</div>
        <p className="gem-desc">Venus is the 7th house lord for Scorpio Lagna — the direct ruler of marriage in Vedic astrology. A diamond or white sapphire wearable strengthens Venus directly, improving the quality and timing of the marriage partner, bringing greater tenderness to Scorpio&apos;s often guarded emotional expression, and resolving delays in committed partnership.</p>
        <div className="gem-planet">♀ Venus · Worn on Friday</div>
      </a>
      <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
        <span className="gem-emoji">🟡</span>
        <div className="gem-name">Cat&apos;s Eye Bracelet / Pendant</div>
        <p className="gem-desc">Cat&apos;s Eye (Lehsunia) is the gemstone of Ketu — Scorpio&apos;s co-ruling shadow planet. When correctly prescribed, it reduces Ketu&apos;s tendency to create sudden disruptions, karmic separations, and inexplicable emotional distance in relationships. Consult Dr. Bajrangi before considering this stone — Ketu remedies require particular care and chart precision.</p>
        <div className="gem-planet">☊ Ketu · Worn on Wednesday</div>
      </a>
    </div>

    <div style={{background: 'var(--sign-xpale)', borderRadius: '14px', padding: '18px 22px', marginTop: '20px', borderLeft: '3px solid var(--saffron-deep)', maxWidth: '680px', display: 'flex', gap: '12px', alignItems: 'flex-start'}} className="reveal">
      <span style={{fontSize: '1.2rem', flexShrink: 0}}>⚠️</span>
      <p style={{fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: '1.65'}}><strong style={{color: 'var(--text-dark)'}}>Ketu stones require special caution.</strong> Cat&apos;s Eye is one of the most potent and unpredictable gemstones in Vedic astrology. It must only be worn after a thorough chart analysis confirming Ketu&apos;s placement, strength, and current Dasha influence. Dr. Bajrangi recommends all Scorpio wearables — especially Ketu stones — exclusively within a full consultation or written report.</p>
    </div>
  </div>
</div>

<hr className="section-divider" />

{/* SIGNS NAV */}
<div className="signs-nav">
  <div className="signs-nav-inner">
    <h3 className="signs-nav-title">Explore compatibility for <em>other signs</em></h3>
    <div className="signs-nav-grid">
      <a href="https://www.vinaybajrangi.com/love-compatibility/aries"       className="sign-nav-item"><span className="sni-symbol">♈</span><span className="sni-name">Aries</span></a>
      <a href="https://www.vinaybajrangi.com/love-compatibility/taurus"      className="sign-nav-item"><span className="sni-symbol">♉</span><span className="sni-name">Taurus</span></a>
      <a href="https://www.vinaybajrangi.com/love-compatibility/gemini"      className="sign-nav-item"><span className="sni-symbol">♊</span><span className="sni-name">Gemini</span></a>
      <a href="https://www.vinaybajrangi.com/love-compatibility/cancer"      className="sign-nav-item"><span className="sni-symbol">♋</span><span className="sni-name">Cancer</span></a>
      <a href="https://www.vinaybajrangi.com/love-compatibility/leo"         className="sign-nav-item"><span className="sni-symbol">♌</span><span className="sni-name">Leo</span></a>
      <a href="https://www.vinaybajrangi.com/love-compatibility/virgo"       className="sign-nav-item"><span className="sni-symbol">♍</span><span className="sni-name">Virgo</span></a>
      <a href="https://www.vinaybajrangi.com/love-compatibility/libra"       className="sign-nav-item"><span className="sni-symbol">♎</span><span className="sni-name">Libra</span></a>
      <a href="https://www.vinaybajrangi.com/love-compatibility/scorpio"     className="sign-nav-item active"><span className="sni-symbol">♏</span><span className="sni-name">Scorpio</span></a>
      <a href="https://www.vinaybajrangi.com/love-compatibility/sagittarius" className="sign-nav-item"><span className="sni-symbol">♐</span><span className="sni-name">Sagittarius</span></a>
      <a href="https://www.vinaybajrangi.com/love-compatibility/capricorn"   className="sign-nav-item"><span className="sni-symbol">♑</span><span className="sni-name">Capricorn</span></a>
      <a href="https://www.vinaybajrangi.com/love-compatibility/aquarius"    className="sign-nav-item"><span className="sni-symbol">♒</span><span className="sni-name">Aquarius</span></a>
      <a href="https://www.vinaybajrangi.com/love-compatibility/pisces"      className="sign-nav-item"><span className="sni-symbol">♓</span><span className="sni-name">Pisces</span></a>
    </div>
    <p style={{textAlign: 'center', marginTop: '22px'}}>
      <a href="https://www.vinaybajrangi.com/love-compatibility" style={{color: 'var(--saffron-deep)', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none'}}>← Back to Love Compatibility Overview</a>
    </p>
  </div>
</div>

{/* BOTTOM CTA */}
<section className="bottom-cta">
  <div className="reveal">
    <h2>The Scorpion loves once —<br />make sure the stars align</h2>
    <p>Sun signs reveal the surface. Mars, Ketu, Venus, and your 7th house reveal the depth — the real story of who you are built to love and when.</p>
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
    --saffron:       #E8821A;
    --saffron-deep:  #C4600A;
    --saffron-light: #F5A84E;
    --gold:          #D4A017;
    --gold-pale:     #F7E9C8;

    /* ── Scorpio palette: burnt amber-orange ──
       Dark, smouldering, transformative.
       Distinct from Leo's coral-red and the brand saffron.
       Think molten amber, scorched earth, deep magnetism.      */
    --sign-primary:   #B8510A;   /* deep burnt amber-orange   */
    --sign-secondary: #D4732A;   /* warm amber                */
    --sign-accent:    #EDA060;   /* soft apricot highlight    */
    --sign-pale:      #FDF0E4;   /* warm parchment-amber      */
    --sign-xpale:     #FEF7F0;   /* near-white amber          */
    --sign-dark:      #4A1E05;   /* very dark burnt sienna    */

    /* Hero: deep dark hero — Scorpio demands darkness */
    --hero-dark1: #0D0500;
    --hero-dark2: #2A0E02;
    --hero-mid:   #5C2508;
    --hero-light: #9A3E10;

    --text-dark: #1A0800;
    --text-mid:  #4A2010;
    --text-soft: #9A6040;
    --white:     #FFFFFF;

    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body:    'DM Sans', sans-serif;
    --shadow-sign:  0 8px 40px rgba(184,81,10,0.22);
    --shadow-card:  0 4px 20px rgba(184,81,10,0.09);
    --shadow-soft:  0 2px 12px rgba(0,0,0,0.06);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-body); background: var(--sign-xpale); color: var(--text-dark); overflow-x: hidden; }

  /* ── BREADCRUMB ── */
  .breadcrumb {
    background: var(--sign-pale); border-bottom: 1px solid rgba(184,81,10,0.12);
    padding: 12px 6vw; font-size: 0.78rem; color: var(--text-soft);
  }
  .breadcrumb a { color: var(--saffron-deep); text-decoration: none; }
  .breadcrumb a:hover { text-decoration: underline; }
  .breadcrumb span { margin: 0 6px; opacity: 0.4; }

  /* ── HERO — dark and dramatic ── */
  .hero {
    background: linear-gradient(140deg,
      var(--hero-dark1) 0%,
      var(--hero-dark2) 25%,
      var(--hero-mid)   58%,
      var(--hero-light) 100%);
    padding: 72px 6vw 0; position: relative; overflow: hidden;
    display: grid; grid-template-columns: 1fr 380px; gap: 48px;
    align-items: end; min-height: 460px;
  }
  @media (max-width: 860px) {
    .hero { grid-template-columns: 1fr; padding-bottom: 52px; min-height: auto; }
    .hero-visual { display: none; }
  }

  /* Large faint glyph watermark */
  .hero-bg-symbol {
    position: absolute; right: 27%; top: 50%; transform: translateY(-50%);
    font-size: 30vw; color: rgba(255,255,255,0.03);
    line-height: 1; pointer-events: none; font-family: var(--font-display); user-select: none;
  }

  /* Scorpion tail — curved spiral rings, tightening inward */
  .vortex-ring {
    position: absolute; border-radius: 50%; border: 1px solid rgba(237,160,96,0.06);
    pointer-events: none; transform-origin: center;
    animation: vortexSpin 40s linear infinite;
  }
  .vortex-ring:nth-child(2){ width:680px; height:680px; top:50%; right:12%; transform:translateY(-50%); animation-duration:55s; }
  .vortex-ring:nth-child(3){ width:500px; height:500px; top:50%; right:16%; transform:translateY(-50%); animation-duration:40s; animation-direction:reverse; border-color:rgba(237,160,96,0.09); }
  .vortex-ring:nth-child(4){ width:340px; height:340px; top:50%; right:20%; transform:translateY(-50%); animation-duration:28s; border-color:rgba(237,160,96,0.12); }
  .vortex-ring:nth-child(5){ width:190px; height:190px; top:50%; right:24%; transform:translateY(-50%); animation-duration:18s; border-color:rgba(237,160,96,0.16); }
  @keyframes vortexSpin {
    from { transform: translateY(-50%) rotate(0deg); }
    to   { transform: translateY(-50%) rotate(360deg); }
  }

  /* Deep amber glow */
  .hero-glow {
    position: absolute; width: 520px; height: 520px; border-radius: 50%;
    background: radial-gradient(circle, rgba(184,81,10,0.4) 0%, transparent 70%);
    top: 50%; left: 18%; transform: translate(-50%,-50%); pointer-events: none;
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
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14);
    color: rgba(255,255,255,0.8); font-size: 0.75rem; font-weight: 600;
    padding: 5px 14px; border-radius: 50px;
  }

  .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; opacity: 0; animation: fadeUp 0.8s 0.65s forwards; }

  @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }

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
    border: 1.5px solid rgba(255,255,255,0.3); transition: background 0.2s;
  }
  .btn-ghost:hover { background: rgba(255,255,255,0.08); }

  .btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--sign-primary); font-family: var(--font-body);
    font-weight: 600; font-size: 0.88rem;
    padding: 13px 26px; border-radius: 50px; text-decoration: none;
    border: 1.5px solid rgba(184,81,10,0.28); transition: background 0.2s;
  }
  .btn-outline:hover { background: var(--sign-pale); }

  /* ── HERO METER PANEL ── */
  .hero-visual { position: relative; z-index: 2; align-self: end; }
  .compat-meter-card {
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
    backdrop-filter: blur(10px); border-radius: 20px 20px 0 0; padding: 28px 28px 32px;
  }
  .meter-title { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.45); margin-bottom: 20px; }
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
    background: var(--sign-pale); border-top: 2px solid rgba(184,81,10,0.15);
    border-bottom: 1px solid rgba(184,81,10,0.12); padding: 22px 6vw;
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
    border: 1.5px solid rgba(184,81,10,0.1); box-shadow: var(--shadow-soft);
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
    border: 1.5px solid rgba(184,81,10,0.1); box-shadow: var(--shadow-soft);
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
  .label-moderate    { background: #FDE8D0; color: var(--saffron-deep); }
  .label-challenging { background: #FFE8E5; color: #C0251A; }
  .compat-toggle { font-size: 1rem; color: var(--text-soft); transition: transform 0.3s; flex-shrink: 0; }
  .compat-card.open .compat-toggle { transform: rotate(180deg); }
  .compat-body { max-height: 0; overflow: hidden; transition: max-height 0.45s ease; }
  .compat-card.open .compat-body { max-height: 600px; }
  .compat-body-inner {
    border-top: 1px solid rgba(184,81,10,0.08); padding: 24px 24px 28px;
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
    text-align: center; border: 1.5px solid rgba(184,81,10,0.1);
    box-shadow: var(--shadow-soft); transition: all 0.3s;
  }
  .score-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-sign); }
  .score-sign { font-size: 1.8rem; margin-bottom: 6px; }
  .score-name { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
  .score-bar-wrap { height: 5px; background: var(--sign-pale); border-radius: 3px; overflow: hidden; margin-bottom: 6px; }
  .score-bar { height: 100%; border-radius: 3px; background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent)); transform-origin: left; transform: scaleX(0); transition: transform 1.2s ease; }
  .score-bar.animate { transform: scaleX(1); }
  .score-pct { font-size: 0.72rem; font-weight: 600; color: var(--text-soft); }

  /* ── REPORT CALLOUT — dark amber card ── */
  .report-callout {
    background: linear-gradient(140deg, var(--hero-dark2) 0%, var(--hero-mid) 50%, var(--hero-light) 100%);
    border-radius: 24px; padding: 48px 52px;
    display: grid; grid-template-columns: 1fr auto; gap: 36px; align-items: center;
    max-width: 1100px; margin: 0 auto; position: relative; overflow: hidden;
  }
  .report-callout::before {
    content: '♏'; position: absolute; right: 42%; top: 50%; transform: translateY(-50%);
    font-size: 220px; color: rgba(255,255,255,0.025); font-family: var(--font-display); pointer-events: none; line-height: 1;
  }
  @media (max-width: 760px) { .report-callout { grid-template-columns: 1fr; padding: 32px 24px; } .report-callout::before { display: none; } }
  .rc-tag { display: inline-block; background: rgba(255,255,255,0.1); color: var(--sign-accent); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; padding: 4px 14px; border-radius: 50px; margin-bottom: 16px; }
  .rc-title { font-family: var(--font-display); font-size: clamp(1.5rem,2.5vw,2.1rem); font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.2; }
  .rc-title em { font-style: italic; color: var(--sign-accent); }
  .rc-desc { font-size: 0.9rem; font-weight: 300; color: rgba(255,255,255,0.72); line-height: 1.72; max-width: 480px; margin-bottom: 24px; }
  .rc-side { text-align: center; flex-shrink: 0; }
  .rc-price { background: var(--gold-pale); border-radius: 14px; padding: 20px 28px; margin-bottom: 14px; }
  .rc-price .from { font-size: 0.68rem; color: var(--text-soft); text-transform: uppercase; letter-spacing: 0.1em; }
  .rc-price .amount { font-family: var(--font-display); font-size: 2rem; font-weight: 700; color: var(--saffron-deep); line-height: 1.1; }
  .rc-price .note { font-size: 0.68rem; color: var(--text-soft); margin-top: 4px; line-height: 1.4; }

  /* ── GEM STRIP ── */
  .gem-strip { background: var(--white); padding: 0 6vw 80px; }
  .gem-strip-inner { max-width: 1100px; margin: 0 auto; }
  .gem-strip-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 36px; }
  @media (max-width: 660px) { .gem-strip-cards { grid-template-columns: 1fr; } }
  .gem-card {
    background: var(--sign-xpale); border-radius: 18px; padding: 24px 22px;
    border: 1.5px solid rgba(184,81,10,0.1); text-decoration: none; display: block; transition: all 0.3s;
  }
  .gem-card:hover { box-shadow: var(--shadow-sign); transform: translateY(-3px); background: var(--white); }
  .gem-emoji { font-size: 1.8rem; margin-bottom: 10px; display: block; }
  .gem-name { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
  .gem-desc { font-size: 0.8rem; color: var(--text-mid); line-height: 1.6; margin-bottom: 10px; }
  .gem-planet { font-size: 0.68rem; font-weight: 700; color: var(--sign-primary); text-transform: uppercase; letter-spacing: 0.08em; }

  /* ── SIGNS NAV ── */
  .signs-nav { background: var(--sign-pale); padding: 60px 6vw; border-top: 1px solid rgba(184,81,10,0.1); }
  .signs-nav-inner { max-width: 1100px; margin: 0 auto; }
  .signs-nav-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--text-dark); margin-bottom: 22px; text-align: center; }
  .signs-nav-title em { font-style: italic; color: var(--saffron-deep); }
  .signs-nav-grid { display: grid; grid-template-columns: repeat(11,1fr); gap: 10px; }
  @media (max-width: 860px) { .signs-nav-grid { grid-template-columns: repeat(6,1fr); } }
  @media (max-width: 440px) { .signs-nav-grid { grid-template-columns: repeat(4,1fr); } }
  .sign-nav-item {
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    padding: 12px 6px; background: var(--white); border-radius: 14px;
    border: 1.5px solid rgba(184,81,10,0.1); text-decoration: none; transition: all 0.2s;
  }
  .sign-nav-item.active { border-color: var(--sign-secondary); background: var(--sign-pale); }
  .sign-nav-item:hover:not(.active) { border-color: var(--saffron-light); box-shadow: 0 4px 16px rgba(232,130,26,0.14); transform: translateY(-2px); }
  .sni-symbol { font-size: 1.2rem; }
  .sni-name { font-size: 0.62rem; font-weight: 600; color: var(--text-mid); letter-spacing: 0.04em; }

  /* ── BOTTOM CTA ── */
  .bottom-cta {
    background: linear-gradient(140deg, var(--hero-dark1) 0%, var(--hero-dark2) 35%, var(--sign-primary) 75%, var(--sign-secondary) 100%);
    padding: 70px 6vw; text-align: center; position: relative; overflow: hidden;
  }
  .bottom-cta::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse at 50% 60%, rgba(237,160,96,0.1) 0%, transparent 65%);
    pointer-events: none;
  }
  .bottom-cta h2 { font-family: var(--font-display); font-size: clamp(1.7rem,3.5vw,2.7rem); font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.2; position: relative; }
  .bottom-cta p { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 440px; margin: 0 auto 28px; line-height: 1.65; position: relative; }
  .bottom-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; }
  .btn-white { display: inline-flex; align-items: center; gap: 8px; background: var(--white); color: var(--sign-primary); font-weight: 700; font-size: 0.88rem; padding: 13px 26px; border-radius: 50px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
  .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
  .btn-outline-white { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--white); font-weight: 500; font-size: 0.88rem; padding: 13px 26px; border-radius: 50px; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.4); transition: background 0.2s; }
  .btn-outline-white:hover { background: rgba(255,255,255,0.1); }

  .section-divider { border: none; border-top: 1px solid rgba(184,81,10,0.08); margin: 0; }

      `}</style>
    </>
  );
}
