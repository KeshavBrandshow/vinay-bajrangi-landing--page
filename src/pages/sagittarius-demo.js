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

export default function SagittariusDemo() {
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
        <title>Sagittarius Love Compatibility With All Signs – Dr. Vinay Bajrangi</title>
        <meta
          name="description"
          content="Which zodiac sign is most compatible with Sagittarius in love and marriage? Vedic astrology insights on Sagittarius compatibility with all 12 signs by Dr. Vinay Bajrangi."
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
          Sagittarius Love Compatibility
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-bg-symbol">♐</div>
          <div className="hero-glow"></div>
          <div className="arrow-line"></div>
          <div className="arrow-line"></div>
          <div className="arrow-line"></div>
          <div className="arrow-line"></div>
          <div className="expand-ring"></div>
          <div className="expand-ring"></div>
          <div className="expand-ring"></div>

          <div className="hero-content">
            <div className="hero-eyebrow">
              <a href="https://www.vinaybajrangi.com/love-compatibility">Love Compatibility</a>
              <span className="sep">&rsaquo;</span>
              <span>Sagittarius</span>
            </div>

            <div className="hero-sign-badge">
              <span className="sign-glyph">♐</span>
              <div className="sign-meta">
                <strong>Sagittarius &middot; The Archer</strong>
                <span>November 22 – December 21 &middot; Fire Sign &middot; Jupiter-Ruled</span>
              </div>
            </div>

            <h1 className="hero-title">
              Sagittarius Love Compatibility<br /><em>with All 12 Signs</em>
            </h1>
            <p className="hero-desc">
              Sagittarius loves like they travel — boldly, joyfully, and always with one eye on the horizon. Which signs can keep pace with the Archer&apos;s restless heart? Which will ground them without clipping their wings? And what does Vedic astrology reveal that the sun sign alone never captures?
            </p>

            <div className="hero-pills">
              <span className="pill">🔥 Fire Element</span>
              <span className="pill">♃ Ruled by Jupiter</span>
              <span className="pill">🔄 Mutable Modality</span>
              <span className="pill">Best with: Aries, Leo, Aquarius</span>
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
                <span className="meter-sign">♈</span>
                <span className="meter-label">Aries</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="92%"></div>
                </div>
                <span className="meter-score">92%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♌</span>
                <span className="meter-label">Leo</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="89%"></div>
                </div>
                <span className="meter-score">89%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♒</span>
                <span className="meter-label">Aquarius</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="85%"></div>
                </div>
                <span className="meter-score">85%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♊</span>
                <span className="meter-label">Gemini</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="80%"></div>
                </div>
                <span className="meter-score">80%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♐</span>
                <span className="meter-label">Sagittarius</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="74%"></div>
                </div>
                <span className="meter-score">74%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♎</span>
                <span className="meter-label">Libra</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="70%"></div>
                </div>
                <span className="meter-score">70%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♑</span>
                <span className="meter-label">Capricorn</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="38%"></div>
                </div>
                <span className="meter-score">38%</span>
              </div>
            </div>
          </div>
        </section>

        {/* TRAIT STRIP */}
        <div className="trait-strip">
          <div className="trait-inner">
            <div className="trait-item">
              <div className="trait-icon">🔥</div>
              <div className="trait-text"><strong>Element</strong><span>Fire</span></div>
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
              <div className="trait-icon">🏹</div>
              <div className="trait-text"><strong>Love Strength</strong><span>Honest, Joyful, Adventurous</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">⚠️</div>
              <div className="trait-text"><strong>Love Challenge</strong><span>Commitment-Averse, Blunt, Restless</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">✨</div>
              <div className="trait-text"><strong>Best Match</strong><span>Aries, Leo, Aquarius</span></div>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* SAGITTARIUS IN LOVE: OVERVIEW */}
        <div style={{ background: 'var(--white)', padding: '80px 6vw 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal">Understanding Sagittarius in Love</span>
            <h2 className="section-title reveal">The heart of the Archer —<br /><em>how Sagittarius loves</em></h2>
            <p className="section-lead reveal">Sagittarius is ruled by Jupiter — the planet of expansion, wisdom, abundance, and philosophical truth. This shapes a love nature that is inherently generous, optimistic, and idealistic. Sagittarius loves at the scale of their vision — which is always larger than most other signs can fully inhabit.</p>

            <div className="overview-grid">
              <div className="overview-card reveal">
                <div className="ov-icon">🏹</div>
                <div className="ov-title">Love Style: Free, Honest, and Expansive</div>
                <p className="ov-text">Sagittarius loves with their whole heart and without pretension. What you see is what you get — their enthusiasm, their laughter, and their startling honesty are all genuine. They want a partner who can be their best friend, travel companion, and philosophical equal simultaneously. Half-hearted love bores them quickly.</p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🌍</div>
                <div className="ov-title">The Challenge: Commitment and Tactlessness</div>
                <p className="ov-text">Sagittarius&apos; love of freedom can look like fear of commitment. Their brutal honesty — delivered without diplomatic softening — wounds partners more deeply than the Archer realises or intends. They leave when they feel confined; they stay when they feel free. The partner who understands this distinction gets the most loyal, devoted Sagittarius possible.</p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🔭</div>
                <div className="ov-title">What Sagittarius Needs: A Co-Explorer</div>
                <p>Sagittarius needs a partner who matches their intellectual curiosity and appetite for life. Someone who can debate philosophy, plan a spontaneous trip, laugh at absurdity, and still bring genuine depth to the relationship. Routine, possessiveness, and emotional dependency are the three things most likely to end a Sagittarius relationship.</p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🪐</div>
                <div className="ov-title">Vedic Lens: Jupiter, 9th House &amp; Navamsa</div>
                <p className="ov-text">In Vedic astrology, Sagittarius (Dhanu) is ruled by Jupiter — the most benefic planet in the entire system, the guru of the gods, the planet of dharma, wisdom, and divine grace. Sagittarius is associated with the 9th house of higher learning, fortune, and spiritual law. The 7th house lord for Sagittarius Lagna is Mercury (ruling Gemini) — meaning the ideal partner archetype for Sagittarius is Mercurial: communicative, intelligent, adaptable, and intellectually stimulating. The Navamsa chart reveals whether this compatibility manifests in practice.</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* COMPATIBILITY BREAKDOWN */}
        <div style={{ background: 'var(--white)', padding: '40px 6vw 80px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal">Sagittarius with Each Sign</span>
            <h2 className="section-title reveal">Sagittarius compatibility —<br /><em>sign by sign</em></h2>
            <p className="section-lead reveal">Tap any sign to expand the full breakdown — love chemistry, long-term potential, and the Vedic astrology perspective that goes far beyond generic sun-sign compatibility.</p>

            <div className="compat-layout">

              {/* ARIES */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#C0351A,#F26B3A)' }}>♈</div>
                  <div className="compat-sign-info"><h3>Sagittarius + Aries</h3><p>Fire meets Fire &middot; Mar 21 – Apr 19</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★★★</div><span className="compat-label label-excellent">Excellent</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Two fire signs who match each other&apos;s energy without exhausting each other. Aries&apos; bold initiative meets Sagittarius&apos; expansive vision — together they are endlessly adventurous, enthusiastic, and mutually energising. Neither is threatened by the other&apos;s independence, and both bring genuine passion to the relationship.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Very high. Both are honest, both are direct, and both respect courage. Arguments are sharp but short — neither holds grudges. Aries provides the decisive action that Sagittarius&apos; mutable nature sometimes lacks; Sagittarius provides the philosophical depth and humour that grounds Aries&apos; intensity. A genuinely joyful pairing.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mars rules Aries and is a friend of Jupiter in Vedic astrology — an important planetary harmony. Aries is Sagittarius&apos; 5th house — the house of romance, love, and creativity — making Aries natives the natural romantic interest and love fulfilment for Sagittarius Lagna individuals. When both Jupiter and Mars are strong in the respective charts, this is one of Vedic astrology&apos;s most vibrant and fortunate love pairings.</p></div>
                </div></div>
              </div>

              {/* LEO */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#C0392B,#E05A4E)' }}>♌</div>
                  <div className="compat-sign-info"><h3>Sagittarius + Leo</h3><p>Fire meets Fire &middot; Jul 23 – Aug 22</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★★★</div><span className="compat-label label-excellent">Excellent</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Leo&apos;s warmth and theatrical love of life meets Sagittarius&apos; boundless optimism and adventure — and the result is one of the zodiac&apos;s most exuberant pairings. Both celebrate each other naturally. Leo loves that Sagittarius sees their greatness; Sagittarius loves that Leo matches their enthusiasm for experiencing everything life offers.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Strong. Leo&apos;s Fixed loyalty anchors Sagittarius&apos; Mutable wandering without suffocating it; Sagittarius&apos; philosophical depth and wit gives Leo an audience that is genuinely stimulating rather than merely admiring. The main watchpoint: Sagittarius&apos; bluntness can wound Leo&apos;s pride. Delivering honesty with Leo&apos;s required warmth is the key skill to develop.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>The Sun rules Leo and is a friend of Jupiter in Vedic astrology — reinforcing the natural warmth between these two fire signs. Leo is Sagittarius&apos; 9th house — the house of fortune, dharma, and higher wisdom — one of the most auspicious placements possible. Leo partners bring significant good fortune and life purpose into Sagittarius&apos; world, making this a pairing with both romantic and karmic significance.</p></div>
                </div></div>
              </div>

              {/* AQUARIUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#1A5A9E,#4A9ECC)' }}>♒</div>
                  <div className="compat-sign-info"><h3>Sagittarius + Aquarius</h3><p>Fire meets Air &middot; Jan 20 – Feb 18</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★★★</div><span className="compat-label label-excellent">Excellent</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Air feeds Fire — and Aquarius&apos; revolutionary idealism gives Sagittarius&apos; philosophical fire the oxygen it craves. Both are freedom-loving, both are idealistic, and both operate at the level of big ideas and bold visions. The relationship crackles with intellectual energy and mutual respect for each other&apos;s independence.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Very good. Neither is possessive, neither is petty, and both grow through the relationship rather than being diminished by it. The main challenge is ensuring emotional depth develops alongside intellectual connection — both can sometimes treat feelings as less important than ideas. When both commit to emotional presence as well as intellectual companionship, this pairing is extraordinary.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Saturn rules Aquarius and has a complex but ultimately workable relationship with Jupiter. Aquarius is Sagittarius&apos; 3rd house — the house of communication, courage, and short journeys. Aquarius partners push Sagittarius to articulate their philosophical vision with greater precision and social impact, transforming Sagittarius&apos; personal wisdom into actionable ideas. Dr. Bajrangi notes that this 3rd house placement makes the partnership particularly productive for shared creative or intellectual projects.</p></div>
                </div></div>
              </div>

              {/* GEMINI (opposite) */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#3A8A2A,#5CB84A)' }}>♊</div>
                  <div className="compat-sign-info"><h3>Sagittarius + Gemini</h3><p>Fire meets Air &middot; Opposite Signs &middot; May 21 – Jun 20</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★★☆</div><span className="compat-label label-good">Good</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Opposite signs — and the complementarity is immediate and electric. Gemini&apos;s quicksilver wit and verbal brilliance delights Sagittarius; Sagittarius&apos; broad philosophical sweep and optimism gives Gemini&apos;s restlessness a sense of direction. Both love ideas, both love freedom, and both are fundamentally playful.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good when both commit. Gemini provides the intelligent communication Sagittarius needs in a partner; Sagittarius provides the vision and depth that gives Gemini&apos;s many interests a unifying purpose. Neither is naturally monogamous by temperament — both must consciously choose constancy. When they do, this is one of the zodiac&apos;s most stimulating partnerships.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mercury rules Gemini and is also the 7th house lord for Sagittarius Lagna — the direct ruler of marriage for Sagittarius in Vedic astrology. This makes Gemini the natural marriage partner for Sagittarius Lagna individuals. Gemini is Sagittarius&apos; 7th house — the house of committed partnership — giving this apparently casual air-and-fire pairing deep marital significance in Vedic terms. The Jupiter–Mercury axis is the relationship between wisdom and intelligence, teacher and student — a powerful dynamic in intimate partnerships.</p></div>
                </div></div>
              </div>

              {/* LIBRA */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#5558A8,#7B7ECC)' }}>♎</div>
                  <div className="compat-sign-info"><h3>Sagittarius + Libra</h3><p>Fire meets Air &middot; Sep 23 – Oct 22</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★★☆</div><span className="compat-label label-good">Good</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>A warm and aesthetically pleasing pairing. Libra&apos;s charm and elegance appeals to Sagittarius&apos; appreciation of beauty and quality; Sagittarius&apos; adventurousness and philosophical energy gives Libra&apos;s need for partnership a genuinely exciting context. Both are social, optimistic, and drawn to a life that is beautiful and meaningful.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good. Libra must develop the backbone to voice real disagreement — Sagittarius deeply respects honesty and finds Libra&apos;s people-pleasing instinct difficult to trust over time. Sagittarius must learn to soften their bluntness for Libra&apos;s more delicate emotional register. When both grow in these areas, the relationship is genuinely warm and expansive.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Venus rules Libra and is a friend of Jupiter in Vedic astrology — providing a naturally warm and harmonious planetary foundation. Libra is Sagittarius&apos; 11th house — the house of gains, long-term goals, and social networks. Libra partners frequently bring significant social and material benefit into Sagittarius&apos; life, and the two often share expansive social circles and creative ambitions that make the partnership feel productive as well as romantic.</p></div>
                </div></div>
              </div>

              {/* SAGITTARIUS + SAGITTARIUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,var(--sign-primary),var(--sign-secondary))' }}>♐</div>
                  <div className="compat-sign-info"><h3>Sagittarius + Sagittarius</h3><p>Fire meets Fire &middot; Same Sign</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★★☆</div><span className="compat-label label-good">Good</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Two Sagittarians together is an adventure in every sense — intellectual, physical, philosophical, and comedic. The laughter never stops. Both understand each other&apos;s need for freedom completely, and neither attempts to clip the other&apos;s wings. The companionship is immediate, joyful, and deeply mutual.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good when both also develop individual groundedness. Two Mutable Fire signs together can be wonderful but directionless — big dreams discussed at length but rarely executed. Both must consciously develop commitment and practical follow-through rather than always moving on to the next adventure before the current one is complete.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Two Jupiter-ruled charts amplify both Jupiter&apos;s gifts (optimism, generosity, wisdom, abundance) and its shadows (over-expansion, excess, impracticality). Dr. Bajrangi pays particular attention to the Saturn placement in both charts when advising on this pairing — a well-placed Saturn in one or both charts provides the discipline and commitment that two Sagittarians need to build something lasting rather than simply enjoying each other in the moment.</p></div>
                </div></div>
              </div>

              {/* CANCER */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#2B6CB0,#63B3ED)' }}>♋</div>
                  <div className="compat-sign-info"><h3>Sagittarius + Cancer</h3><p>Fire meets Water &middot; Jun 21 – Jul 22</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>An unlikely but occasionally touching pairing. Cancer&apos;s warmth and tenderness can soften Sagittarius&apos; restlessness in ways the Archer doesn&apos;t expect; Sagittarius&apos; optimism can lift Cancer out of emotional depths that would otherwise feel inescapable. But their love languages are fundamentally different — Cancer needs constancy; Sagittarius needs movement.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate with significant effort. Sagittarius&apos; bluntness cuts Cancer deeply; Cancer&apos;s emotional intensity and need for security can feel suffocating to the free-ranging Archer. For this to work, Sagittarius must develop emotional sensitivity and Cancer must develop emotional resilience. Neither change comes naturally, but both are possible with genuine will.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>The Moon rules Cancer and has a generally positive relationship with Jupiter. Cancer is Sagittarius&apos; 8th house — the house of transformation, hidden assets, and deep bonds formed through crisis. This placement makes Cancer relationships intensely transformative for Sagittarius — not always comfortable, but almost always profoundly changing. Dr. Bajrangi notes that many Sagittarius natives describe Cancer relationships as the ones that most deeply changed their understanding of themselves.</p></div>
                </div></div>
              </div>

              {/* TAURUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#2D6A2A,#5A9E55)' }}>♉</div>
                  <div className="compat-sign-info"><h3>Sagittarius + Taurus</h3><p>Fire meets Earth &middot; Apr 20 – May 20</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>An initial attraction built on complementary qualities — Taurus offers the comfort and beauty Sagittarius occasionally craves; Sagittarius offers the excitement and expansion Taurus rarely allows themselves. But the pace of life is entirely different. Sagittarius moves in leaps; Taurus moves in deliberate steps. The gap widens quickly.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate to challenging. Taurus needs security and constancy; Sagittarius needs freedom and variety. Taurus finds Sagittarius unreliable; Sagittarius finds Taurus suffocating. Works best when Sagittarius has reached a life stage where they genuinely want to settle, and when Taurus has developed the flexibility to accommodate a partner who lives at a larger scale.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Venus rules Taurus and is a friend of Jupiter in Vedic astrology — providing a warmer underlying dynamic than the temperamental distance might suggest. Taurus is Sagittarius&apos; 6th house — the house of conflict, health, and service. In Vedic astrology, 6th house relationships tend to involve themes of effort, duty, and health concerns. Sagittarius natives often describe Taurus relationships as requiring more sustained daily effort than they naturally enjoy giving.</p></div>
                </div></div>
              </div>

              {/* VIRGO */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#5C6E2A,#849A3E)' }}>♍</div>
                  <div className="compat-sign-info"><h3>Sagittarius + Virgo</h3><p>Fire meets Earth &middot; Aug 23 – Sep 22</p></div>
                  <div className="compat-level"><div className="compat-stars">★★☆☆☆</div><span className="compat-label label-challenging">Challenging</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Mutual fascination that quickly becomes mutual frustration. Sagittarius&apos; sweeping optimism and big-picture thinking intrigues Virgo; Virgo&apos;s deep competence and analytical precision impresses Sagittarius briefly. But Sagittarius finds Virgo&apos;s attention to detail suffocating; Virgo finds Sagittarius reckless and imprecise. Both are right about the other, which makes the friction difficult to resolve.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Challenging. These two signs operate at entirely different resolutions — Sagittarius sees the forest; Virgo counts the trees. For long-term success, Sagittarius must develop genuine appreciation for detail and follow-through; Virgo must develop trust in vision and spontaneity. Both require the other to fundamentally stretch.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mercury rules Virgo and is also the 7th house lord for Sagittarius Lagna — meaning Mercury-ruled signs carry direct marriage significance for Sagittarius. However, Virgo is Sagittarius&apos; 10th house — the house of career, public reputation, and external ambition. This makes Virgo partners professionally significant for Sagittarius rather than naturally romantic. The relationship often has the quality of a work alliance that has also become personal — productive but rarely effortlessly intimate.</p></div>
                </div></div>
              </div>

              {/* PISCES */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#3B82B0,#82C8E0)' }}>♓</div>
                  <div className="compat-sign-info"><h3>Sagittarius + Pisces</h3><p>Fire meets Water &middot; Feb 19 – Mar 20</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>A spiritually resonant pairing — both are mutable signs who operate beyond the merely material, both are ruled by Jupiter (Pisces in traditional astrology), and both are drawn to the transcendent dimensions of human experience. The initial connection can feel fated and deeply idealistic. Reality, however, has a way of testing that idealism.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate. Both are mutable — neither provides the grounding the other occasionally needs. Sagittarius&apos; bluntness wounds Pisces&apos; sensitivity; Pisces&apos; emotional formlessness frustrates Sagittarius&apos; need for clarity and action. When both are emotionally mature and spiritually oriented, this pairing has genuine beauty and philosophical depth.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>In Vedic astrology, Jupiter rules both Sagittarius and Pisces — two Jupiter-ruled signs in relationship creates both harmony and excess. Pisces is Sagittarius&apos; 4th house — the house of home, mother, and emotional foundations. Pisces partners often deeply affect Sagittarius&apos; sense of domestic security and emotional rootedness — providing a home base for the wandering Archer when the relationship works, or creating emotional turbulence when it doesn&apos;t.</p></div>
                </div></div>
              </div>

              {/* SCORPIO */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#B8510A,#D4732A)' }}>♏</div>
                  <div className="compat-sign-info"><h3>Sagittarius + Scorpio</h3><p>Fire meets Water &middot; Oct 23 – Nov 21</p></div>
                  <div className="compat-level"><div className="compat-stars">★★★☆☆</div><span className="compat-label label-moderate">Moderate</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Adjacent signs with genuine magnetism. Scorpio&apos;s depth and mystery draws Sagittarius&apos; curiosity; Sagittarius&apos; expansive optimism and honesty intrigues the typically guarded Scorpio. But Scorpio requires emotional exclusivity and complete loyalty; Sagittarius requires freedom and social range — fundamentally different needs that must be negotiated explicitly.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate. Sagittarius&apos; bluntness triggers Scorpio&apos;s defensive intensity; Scorpio&apos;s possessiveness pushes Sagittarius toward the door. Both must develop understanding of the other&apos;s core need — Scorpio must trust without controlling; Sagittarius must commit without feeling confined. Achievable, but requires sustained conscious effort from both.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mars and Ketu co-rule Scorpio. Mars is a friend of Jupiter in Vedic astrology — providing a warmer planetary foundation than the temperamental differences suggest. Scorpio is Sagittarius&apos; 12th house — the house of hidden matters, spiritual retreat, and loss. This often creates a relationship where Sagittarius feels a deep, inexplicable draw to Scorpio despite surface incompatibility — a pull that is frequently karmic and spiritually significant even when practically difficult.</p></div>
                </div></div>
              </div>

              {/* CAPRICORN */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#5A5A5A,#9A9A9A)' }}>♑</div>
                  <div className="compat-sign-info"><h3>Sagittarius + Capricorn</h3><p>Fire meets Earth &middot; Dec 22 – Jan 19</p></div>
                  <div className="compat-level"><div className="compat-stars">★★☆☆☆</div><span className="compat-label label-challenging">Challenging</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Adjacent signs with complementary strengths that rarely translate into romantic ease. Sagittarius&apos; optimism and expansiveness can briefly inspire Capricorn&apos;s more guarded nature; Capricorn&apos;s ambition and solidity can briefly ground Sagittarius. But Capricorn&apos;s emotional reserve and relentless seriousness eventually dampens Sagittarius&apos; natural joy.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Challenging. Sagittarius needs lightness, adventure, and philosophical freedom; Capricorn needs structure, achievement, and emotional discipline. Sagittarius finds Capricorn joyless; Capricorn finds Sagittarius irresponsible. Works best when both are at a life stage where they have each developed some of the other&apos;s qualities — Sagittarius some discipline, Capricorn some levity.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Saturn rules Capricorn and has a complex relationship with Jupiter in Vedic astrology — Jupiter considers Saturn a friend, but Saturn is neutral toward Jupiter. The two are often called the &quot;great planets of wisdom and discipline&quot; — complementary in cosmic function but different in expression. Capricorn is Sagittarius&apos; 2nd house — the house of family, accumulated wealth, and speech — meaning Capricorn partners significantly influence Sagittarius&apos; financial life and family relationships, whether or not the romance itself thrives.</p></div>
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
            <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: '36px' }}>Sagittarius compatibility <em>scores</em></h2>
            <div className="score-grid">
              <div className="score-card reveal"><div className="score-sign">♈</div><div className="score-name">Aries</div><div className="score-bar-wrap"><div className="score-bar" data-width="92%"></div></div><div className="score-pct">92%</div></div>
              <div className="score-card reveal"><div className="score-sign">♌</div><div className="score-name">Leo</div><div className="score-bar-wrap"><div className="score-bar" data-width="89%"></div></div><div className="score-pct">89%</div></div>
              <div className="score-card reveal"><div className="score-sign">♒</div><div className="score-name">Aquarius</div><div className="score-bar-wrap"><div className="score-bar" data-width="85%"></div></div><div className="score-pct">85%</div></div>
              <div className="score-card reveal"><div className="score-sign">♊</div><div className="score-name">Gemini</div><div className="score-bar-wrap"><div className="score-bar" data-width="80%"></div></div><div className="score-pct">80%</div></div>
              <div className="score-card reveal"><div className="score-sign">♐</div><div className="score-name">Sagittarius</div><div className="score-bar-wrap"><div className="score-bar" data-width="74%"></div></div><div className="score-pct">74%</div></div>
              <div className="score-card reveal"><div className="score-sign">♎</div><div className="score-name">Libra</div><div className="score-bar-wrap"><div className="score-bar" data-width="70%"></div></div><div className="score-pct">70%</div></div>
              <div className="score-card reveal"><div className="score-sign">♓</div><div className="score-name">Pisces</div><div className="score-bar-wrap"><div className="score-bar" data-width="60%"></div></div><div className="score-pct">60%</div></div>
              <div className="score-card reveal"><div className="score-sign">♋</div><div className="score-name">Cancer</div><div className="score-bar-wrap"><div className="score-bar" data-width="55%"></div></div><div className="score-pct">55%</div></div>
              <div className="score-card reveal"><div className="score-sign">♏</div><div className="score-name">Scorpio</div><div className="score-bar-wrap"><div className="score-bar" data-width="52%"></div></div><div className="score-pct">52%</div></div>
              <div className="score-card reveal"><div className="score-sign">♉</div><div className="score-name">Taurus</div><div className="score-bar-wrap"><div className="score-bar" data-width="48%"></div></div><div className="score-pct">48%</div></div>
              <div className="score-card reveal"><div className="score-sign">♑</div><div className="score-name">Capricorn</div><div className="score-bar-wrap"><div className="score-bar" data-width="38%"></div></div><div className="score-pct">38%</div></div>
              <div className="score-card reveal"><div className="score-sign">♍</div><div className="score-name">Virgo</div><div className="score-bar-wrap"><div className="score-bar" data-width="36%"></div></div><div className="score-pct">36%</div></div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-soft)', marginTop: '18px', fontStyle: 'italic' }}>General sun-sign compatibility only. Personalised scores require full birth chart analysis.</p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* REPORT CALLOUT */}
        <div style={{ padding: '60px 6vw', background: 'var(--white)' }}>
          <div className="report-callout reveal">
            <div>
              <span className="rc-tag">For Sagittarius &middot; Personalised Report</span>
              <h2 className="rc-title">Jupiter&apos;s blessing and Mercury&apos;s challenge —<br />your <em>complete love picture</em></h2>
              <p className="rc-desc">Sagittarius is blessed by Jupiter — but the 7th house lord is Mercury, the planet of intelligence and communication. How Jupiter and Mercury interact in your specific birth chart, alongside the 9th house (fortune and dharma), Venus placement, Navamsa compatibility, and your current Dasha period, determines what love actually looks like for you and when it arrives. Dr. Vinay Bajrangi&apos;s Love &amp; Relationship Report covers all of this — written, personalised, and delivered in 3–5 working days.</p>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-primary">✦ Get My Love &amp; Relationship Report</a>
            </div>
            <div className="rc-side">
              <div className="rc-price">
                <div className="from">Starts from</div>
                <div className="amount">₹ 799</div>
                <div className="note">Written report &middot; Delivered<br />in 3–5 working days</div>
              </div>
              <a href="https://www.vinaybajrangi.com/calculator/love-calculator" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.72)', fontSize: '0.82rem', justifyContent: 'center', width: '100%' }}>Try Free Calculator &rarr;</a>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* GEMSTONE WEARABLES FOR SAGITTARIUS */}
        <div className="gem-strip">
          <div className="gem-strip-inner">
            <span className="section-tag reveal" style={{ paddingTop: '60px', display: 'block' }}>Vedic Remedies for Sagittarius</span>
            <h2 className="section-title reveal">Gemstone wearables <em>for Sagittarius love</em></h2>
            <p className="section-lead reveal" style={{ marginBottom: 0 }}>Jupiter-ruled Sagittarius benefits from gemstones that deepen Jupiter&apos;s already generous influence on love, strengthen Mercury — the direct 7th house marriage lord — and support Venus, the natural significator of romantic love. All wearables must be prescribed after a full chart analysis.</p>

            <div className="gem-strip-cards">
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">💛</span>
                <div className="gem-name">Yellow Sapphire Pendant / Bracelet</div>
                <p className="gem-desc">Yellow Sapphire (Pukhraj) strengthens Jupiter — Sagittarius&apos; ruling planet. For Sagittarius natives, it amplifies wisdom in love, attracts a partner of genuine character and intelligence, and is especially powerful for improving the prospects of love marriage converting to a lasting, joyful union.</p>
                <div className="gem-planet">♃ Jupiter &middot; Worn on Thursday</div>
              </a>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">💚</span>
                <div className="gem-name">Emerald Pendant / Bracelet</div>
                <p className="gem-desc">Mercury is the 7th house lord for Sagittarius Lagna — the direct ruler of marriage in Vedic astrology. Emerald (Panna) strengthens Mercury, improving the quality and timing of the committed partner, bringing greater communication ease to relationships, and resolving delays in marriage when Mercury is weak or afflicted.</p>
                <div className="gem-planet">☿ Mercury &middot; Worn on Wednesday</div>
              </a>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">💎</span>
                <div className="gem-name">Diamond / White Sapphire Pendant</div>
                <p className="gem-desc">Venus is the natural significator of romantic love for all charts. Sagittarius&apos; Jupiter-dominant energy can sometimes create relationships that are philosophically rich but lacking in sensual tenderness. A Venus wearable reactivates this, attracting partners who combine intellectual depth with genuine warmth and romantic devotion.</p>
                <div className="gem-planet">♀ Venus &middot; Worn on Friday</div>
              </a>
            </div>

            <div style={{ background: 'var(--sign-xpale)', borderRadius: '14px', padding: '18px 22px', marginTop: '20px', borderLeft: '3px solid var(--saffron-deep)', maxWidth: '680px', display: 'flex', gap: '12px', alignItems: 'flex-start' }} className="reveal">
              <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>⚠️</span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: '1.65' }}><strong style={{ color: 'var(--text-dark)' }}>Always consult before wearing.</strong> Even Jupiter&apos;s own stone — Yellow Sapphire — can cause unexpected results if Jupiter is combust, debilitated, or poorly placed in the chart. Gemstone remedies must be prescribed only after your complete birth chart is analysed. Dr. Bajrangi recommends all wearables exclusively within a full consultation or written report.</p>
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
              <a href="https://www.vinaybajrangi.com/love-compatibility/sagittarius" className="sign-nav-item active"><span className="sni-symbol">♐</span><span className="sni-name">Sagittarius</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/capricorn" className="sign-nav-item"><span className="sni-symbol">♑</span><span className="sni-name">Capricorn</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/aquarius" className="sign-nav-item"><span className="sni-symbol">♒</span><span className="sni-name">Aquarius</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/pisces" className="sign-nav-item"><span className="sni-symbol">♓</span><span className="sni-name">Pisces</span></a>
            </div>
            <p style={{ textAlign: 'center', marginTop: '22px' }}>
              <a href="https://www.vinaybajrangi.com/love-compatibility" style={{ color: 'var(--saffron-deep)', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>&larr; Back to Love Compatibility Overview</a>
            </p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="bottom-cta">
          <div className="reveal">
            <h2>The Archer aims for forever —<br />let the stars confirm the target</h2>
            <p>Sun signs show you the direction. Your Vedic birth chart — Jupiter, Mercury, Venus, and your Dasha — shows you the exact moment and the right partner.</p>
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

          /* ── Sagittarius palette ── */
          --sign-primary:   #9A7640;
          --sign-secondary: #BFA060;
          --sign-accent:    #D8C090;
          --sign-pale:      #F5EDD8;
          --sign-xpale:     #FAF6EE;
          --sign-dark:      #4A3010;

          /* Hero */
          --hero-dark1: #1A0E04;
          --hero-dark2: #3A2208;
          --hero-mid:   #705020;
          --hero-light: #A8802E;

          --text-dark: #1E1408;
          --text-mid:  #4A3818;
          --text-soft: #9A7840;
          --white:     #FFFFFF;

          --font-display: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          --font-body:    var(--font-dm-sans), 'DM Sans', sans-serif;
          --shadow-sign:  0 8px 40px rgba(154,118,64,0.18);
          --shadow-card:  0 4px 20px rgba(154,118,64,0.09);
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
          border-bottom: 1px solid rgba(154,118,64,0.15);
          padding: 12px 6vw;
          font-size: 0.78rem;
          color: var(--text-soft);
        }
        .breadcrumb a { color: var(--saffron-deep); text-decoration: none; }
        .breadcrumb a:hover { text-decoration: underline; }
        .breadcrumb span { margin: 0 6px; opacity: 0.4; }

        /* ── HERO ── */
        .hero {
          background: linear-gradient(140deg,
            var(--hero-dark1) 0%,
            var(--hero-dark2) 22%,
            var(--hero-mid)   55%,
            var(--hero-light) 88%,
            #C8A04A 100%);
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

        /* Arrow trajectory lines */
        .arrow-line {
          position: absolute;
          pointer-events: none;
          background: linear-gradient(90deg, transparent, rgba(216,192,144,0.12), transparent);
          height: 1px;
          transform-origin: left center center;
          animation: arrowFly 8s ease-in-out infinite;
        }
        .arrow-line:nth-child(3){ width:55%; top:28%; right:-5%; transform:rotate(-8deg);  animation-delay:0s;   animation-duration:7s; }
        .arrow-line:nth-child(4){ width:48%; top:44%; right:-5%; transform:rotate(-14deg); animation-delay:1.5s; animation-duration:9s; }
        .arrow-line:nth-child(5){ width:60%; top:62%; right:-5%; transform:rotate(-5deg);  animation-delay:3s;   animation-duration:6.5s; }
        .arrow-line:nth-child(6){ width:42%; top:76%; right:-5%; transform:rotate(-18deg); animation-delay:0.8s; animation-duration:8.5s; }
        @keyframes arrowFly {
          0%   { opacity: 0; transform: rotate(var(--r, -8deg)) translateX(0); }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { opacity: 0; transform: rotate(var(--r, -8deg)) translateX(-15px); }
        }

        /* Jupiter glow */
        .hero-glow {
          position: absolute; width: 560px; height: 560px; border-radius: 50%;
          background: radial-gradient(circle, rgba(168,128,46,0.35) 0%, transparent 70%);
          top: 50%; left: 18%; transform: translate(-50%,-50%); pointer-events: none;
        }

        /* Expanding ring */
        .expand-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(216,192,144,0.08);
          pointer-events: none;
          top: 50%;
          right: 15%;
          animation: expand 12s ease-out infinite;
        }
        .expand-ring:nth-child(7){ width:200px; height:200px; animation-delay:0s; }
        .expand-ring:nth-child(8){ width:200px; height:200px; animation-delay:3s; }
        .expand-ring:nth-child(9){ width:200px; height:200px; animation-delay:6s; }
        @keyframes expand {
          0%  { transform:translate(50%,-50%) scale(1);   opacity:0.6; }
          100%{ transform:translate(50%,-50%) scale(4.5); opacity:0; }
        }

        .hero-content { position: relative; z-index: 2; padding-bottom: 60px; }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--sign-accent);
          margin-bottom: 18px;
          opacity: 0;
          animation: fadeUp 0.7s 0.1s forwards;
        }
        .hero-eyebrow a { color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
        .hero-eyebrow a:hover { color: var(--sign-accent); }
        .hero-eyebrow .sep { color: rgba(255,255,255,0.2); }

        .hero-sign-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 50px;
          padding: 8px 20px 8px 10px;
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeUp 0.7s 0.2s forwards;
        }
        .sign-glyph {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--sign-primary), var(--sign-secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .sign-meta strong { display: block; font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--white); line-height: 1.1; }
        .sign-meta span { font-size: 0.68rem; color: rgba(255,255,255,0.5); letter-spacing: 0.08em; }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.6rem,5.5vw,4.4rem);
          font-weight: 700;
          color: var(--white);
          line-height: 1.08;
          margin-bottom: 18px;
          opacity: 0;
          animation: fadeUp 0.8s 0.3s forwards;
        }
        .hero-title em { font-style: italic; color: var(--sign-accent); }

        .hero-desc {
          font-size: 1.05rem;
          font-weight: 300;
          color: rgba(255,255,255,0.72);
          line-height: 1.75;
          max-width: 520px;
          margin-bottom: 30px;
          opacity: 0;
          animation: fadeUp 0.8s 0.45s forwards;
        }

        .hero-pills {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 32px;
          opacity: 0;
          animation: fadeUp 0.8s 0.55s forwards;
        }
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.16);
          color: rgba(255,255,255,0.82);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 50px;
        }

        .hero-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp 0.8s 0.65s forwards;
        }

        /* ── BUTTONS ── */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--saffron) 0%, var(--gold) 100%);
          color: var(--white);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.88rem;
          letter-spacing: 0.03em;
          padding: 13px 26px;
          border-radius: 50px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 18px rgba(232,130,26,0.38);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(232,130,26,0.52); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--white);
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.88rem;
          padding: 13px 26px;
          border-radius: 50px;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.3);
          transition: background 0.2s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.09); }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--sign-primary);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.88rem;
          padding: 13px 26px;
          border-radius: 50px;
          text-decoration: none;
          border: 1.5px solid rgba(154,118,64,0.3);
          transition: background 0.2s;
        }
        .btn-outline:hover { background: var(--sign-pale); }

        /* ── HERO METER PANEL ── */
        .hero-visual { position: relative; z-index: 2; align-self: end; }
        .compat-meter-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.13);
          backdrop-filter: blur(10px);
          border-radius: 20px 20px 0 0;
          padding: 28px 28px 32px;
        }
        .meter-title {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 20px;
        }
        .meter-row { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .meter-sign { font-size: 1.1rem; width: 26px; flex-shrink: 0; text-align: center; }
        .meter-label { font-size: 0.78rem; color: rgba(255,255,255,0.65); width: 84px; flex-shrink: 0; }
        .meter-bar-bg { flex: 1; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.1); overflow: hidden; }
        .meter-bar {
          height: 100%;
          border-radius: 3px;
          background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent));
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 1s ease;
        }
        .meter-bar.animate { transform: scaleX(1); }
        .meter-score { font-size: 0.72rem; font-weight: 700; color: var(--sign-accent); width: 28px; text-align: right; flex-shrink: 0; }

        /* ── TRAIT STRIP ── */
        .trait-strip {
          background: var(--sign-pale);
          border-top: 2px solid rgba(154,118,64,0.18);
          border-bottom: 1px solid rgba(154,118,64,0.12);
          padding: 22px 6vw;
        }
        .trait-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          gap: 36px;
          flex-wrap: wrap;
          align-items: center;
        }
        .trait-item { display: flex; align-items: center; gap: 10px; }
        .trait-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--sign-primary), var(--sign-secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          flex-shrink: 0;
        }
        .trait-text strong {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--sign-primary);
          margin-bottom: 1px;
        }
        .trait-text span { font-size: 0.83rem; color: var(--text-mid); font-weight: 500; }

        /* ── REVEAL ── */
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        /* ── SECTION TYPE ── */
        .section-tag {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--saffron-deep);
          display: block;
          margin-bottom: 12px;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(1.9rem,3.2vw,2.7rem);
          font-weight: 700;
          line-height: 1.18;
          color: var(--text-dark);
          margin-bottom: 14px;
        }
        .section-title em { font-style: italic; color: var(--sign-primary); }
        .section-lead {
          font-size: 1rem;
          font-weight: 300;
          color: var(--text-mid);
          line-height: 1.75;
          max-width: 660px;
          margin-bottom: 48px;
        }

        /* ── OVERVIEW CARDS ── */
        .overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 48px; }
        @media (max-width: 720px) { .overview-grid { grid-template-columns: 1fr; } }
        .overview-card {
          background: var(--white);
          border-radius: 18px;
          padding: 28px;
          border: 1.5px solid rgba(154,118,64,0.12);
          box-shadow: var(--shadow-soft);
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .overview-card:hover { box-shadow: var(--shadow-sign); transform: translateY(-2px); }
        .ov-icon { font-size: 1.6rem; margin-bottom: 12px; }
        .ov-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }
        .ov-text { font-size: 0.87rem; color: var(--text-mid); line-height: 1.68; }

        /* ── COMPAT ACCORDIONS ── */
        .compat-layout { display: flex; flex-direction: column; gap: 12px; }
        .compat-card {
          background: var(--white);
          border-radius: 18px;
          border: 1.5px solid rgba(154,118,64,0.1);
          box-shadow: var(--shadow-soft);
          overflow: hidden;
          transition: box-shadow 0.25s;
        }
        .compat-card:hover { box-shadow: var(--shadow-sign); }
        .compat-header {
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          cursor: pointer;
          user-select: none;
        }
        @media (max-width: 600px) { .compat-header { grid-template-columns: auto 1fr auto; } .compat-level { display: none; } }
        .compat-sign-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
        }
        .compat-sign-info h3 {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 3px;
        }
        .compat-sign-info p { font-size: 0.72rem; color: var(--text-soft); font-weight: 500; }
        .compat-level { display: flex; flex-direction: column; align-items: center; gap: 4px; flex-shrink: 0; }
        .compat-stars { font-size: 0.8rem; color: var(--gold); letter-spacing: 0.05em; }
        .compat-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 50px;
        }
        .label-excellent   { background: #E8F5E0; color: #2E7A1F; }
        .label-good        { background: #FFF3CD; color: #8A6200; }
        .label-moderate    { background: #FDE8D0; color: var(--saffron-deep); }
        .label-challenging { background: #FFE8E5; color: #C0251A; }
        .compat-toggle { font-size: 1rem; color: var(--text-soft); transition: transform 0.3s; flex-shrink: 0; }
        .compat-card.open .compat-toggle { transform: rotate(180deg); }
        .compat-body { max-height: 0; overflow: hidden; transition: max-height 0.45s ease; }
        .compat-card.open .compat-body { max-height: 600px; }
        .compat-body-inner {
          border-top: 1px solid rgba(154,118,64,0.08);
          padding: 24px 24px 28px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          background: var(--sign-xpale);
        }
        @media (max-width: 660px) { .compat-body-inner { grid-template-columns: 1fr; } }
        .compat-aspect h4 {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--sign-primary);
          margin-bottom: 6px;
        }
        .compat-aspect p { font-size: 0.83rem; color: var(--text-mid); line-height: 1.62; }

        /* ── SCORE GRID ── */
        .score-section { background: var(--sign-pale); padding: 80px 6vw; }
        .score-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
        @media (max-width: 720px) { .score-grid { grid-template-columns: repeat(2,1fr); } }
        .score-card {
          background: var(--white);
          border-radius: 18px;
          padding: 22px 18px;
          text-align: center;
          border: 1.5px solid rgba(154,118,64,0.1);
          box-shadow: var(--shadow-soft);
          transition: all 0.3s;
        }
        .score-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-sign); }
        .score-sign { font-size: 1.8rem; margin-bottom: 6px; }
        .score-name {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 6px;
        }
        .score-bar-wrap { height: 5px; background: var(--sign-pale); border-radius: 3px; overflow: hidden; margin-bottom: 6px; }
        .score-bar {
          height: 100%;
          border-radius: 3px;
          background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent));
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 1.2s ease;
        }
        .score-bar.animate { transform: scaleX(1); }
        .score-pct { font-size: 0.72rem; font-weight: 600; color: var(--text-soft); }

        /* ── REPORT CALLOUT ── */
        .report-callout {
          background: linear-gradient(140deg, var(--hero-dark2) 0%, var(--hero-mid) 48%, var(--hero-light) 100%);
          border-radius: 24px;
          padding: 48px 52px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 36px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }
        .report-callout::before {
          content: '♐';
          position: absolute;
          right: 42%;
          top: 50%;
          transform: translateY(-50%);
          font-size: 220px;
          color: rgba(255,255,255,0.03);
          font-family: var(--font-display);
          pointer-events: none;
          line-height: 1;
        }
        @media (max-width: 760px) { .report-callout { grid-template-columns: 1fr; padding: 32px 24px; } .report-callout::before { display: none; } }
        .rc-tag {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          color: var(--sign-accent);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 50px;
          margin-bottom: 16px;
        }
        .rc-title {
          font-family: var(--font-display);
          font-size: clamp(1.5rem,2.5vw,2.1rem);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .rc-title em { font-style: italic; color: var(--sign-accent); }
        .rc-desc {
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(255,255,255,0.72);
          line-height: 1.72;
          max-width: 480px;
          margin-bottom: 24px;
        }
        .rc-side { text-align: center; flex-shrink: 0; }
        .rc-price {
          background: var(--sign-xpale);
          border-radius: 14px;
          padding: 20px 28px;
          margin-bottom: 14px;
        }
        .rc-price .from { font-size: 0.68rem; color: var(--text-soft); text-transform: uppercase; letter-spacing: 0.1em; }
        .rc-price .amount { font-family: var(--font-display); font-size: 2rem; font-weight: 700; color: var(--sign-primary); line-height: 1.1; }
        .rc-price .note { font-size: 0.68rem; color: var(--text-soft); margin-top: 4px; line-height: 1.4; }

        /* ── GEM STRIP ── */
        .gem-strip { background: var(--white); padding: 0 6vw 80px; }
        .gem-strip-inner { max-width: 1100px; margin: 0 auto; }
        .gem-strip-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 36px; }
        @media (max-width: 660px) { .gem-strip-cards { grid-template-columns: 1fr; } }
        .gem-card {
          background: var(--sign-xpale);
          border-radius: 18px;
          padding: 24px 22px;
          border: 1.5px solid rgba(154,118,64,0.12);
          text-decoration: none;
          display: block;
          transition: all 0.3s;
        }
        .gem-card:hover { box-shadow: var(--shadow-sign); transform: translateY(-3px); background: var(--white); }
        .gem-emoji { font-size: 1.8rem; margin-bottom: 10px; display: block; }
        .gem-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 6px;
        }
        .gem-desc { font-size: 0.8rem; color: var(--text-mid); line-height: 1.6; margin-bottom: 10px; }
        .gem-planet {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--sign-primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ── SIGNS NAV ── */
        .signs-nav { background: var(--sign-pale); padding: 60px 6vw; border-top: 1px solid rgba(154,118,64,0.12); }
        .signs-nav-inner { max-width: 1100px; margin: 0 auto; }
        .signs-nav-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 22px;
          text-align: center;
        }
        .signs-nav-title em { font-style: italic; color: var(--saffron-deep); }
        .signs-nav-grid { display: grid; grid-template-columns: repeat(12,1fr); gap: 10px; }
        @media (max-width: 860px) { .signs-nav-grid { grid-template-columns: repeat(6,1fr); } }
        @media (max-width: 440px) { .signs-nav-grid { grid-template-columns: repeat(4,1fr); } }
        .sign-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 12px 6px;
          background: var(--white);
          border-radius: 14px;
          border: 1.5px solid rgba(154,118,64,0.12);
          text-decoration: none;
          transition: all 0.2s;
        }
        .sign-nav-item.active { border-color: var(--sign-secondary); background: var(--sign-pale); }
        .sign-nav-item:hover:not(.active) {
          border-color: var(--saffron-light);
          box-shadow: 0 4px 16px rgba(232,130,26,0.14);
          transform: translateY(-2px);
        }
        .sni-symbol { font-size: 1.2rem; }
        .sni-name { font-size: 0.62rem; font-weight: 600; color: var(--text-mid); letter-spacing: 0.04em; }

        /* ── BOTTOM CTA ── */
        .bottom-cta {
          background: linear-gradient(140deg, var(--hero-dark1) 0%, var(--hero-dark2) 30%, var(--sign-dark) 60%, var(--sign-primary) 100%);
          padding: 70px 6vw;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .bottom-cta::before {
          content: '✦ ✦ ✦';
          font-size: 0.7rem;
          color: rgba(255,255,255,0.15);
          letter-spacing: 1.5em;
          display: block;
          margin-bottom: 24px;
        }
        .bottom-cta h2 {
          font-family: var(--font-display);
          font-size: clamp(1.7rem,3.5vw,2.7rem);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .bottom-cta p {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.75);
          max-width: 440px;
          margin: 0 auto 28px;
          line-height: 1.65;
        }
        .bottom-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--white);
          color: var(--sign-dark);
          font-weight: 700;
          font-size: 0.88rem;
          padding: 13px 26px;
          border-radius: 50px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
        .btn-outline-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--white);
          font-weight: 500;
          font-size: 0.88rem;
          padding: 13px 26px;
          border-radius: 50px;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.4);
          transition: background 0.2s;
        }
        .btn-outline-white:hover { background: rgba(255,255,255,0.1); }

        .section-divider { border: none; border-top: 1px solid rgba(154,118,64,0.08); margin: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
