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

export default function LibraDemo() {
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
        <title>Libra Love Compatibility With All Signs – Dr. Vinay Bajrangi</title>
        <meta
          name="description"
          content="Which zodiac sign is most compatible with Libra in love and marriage? Vedic astrology insights on Libra compatibility with all 12 signs by Dr. Vinay Bajrangi."
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
          Libra Love Compatibility
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-bg-symbol">♎</div>
          <div className="hero-glow-a"></div>
          <div className="hero-glow-b"></div>
          <div className="balance-arc"></div>
          <div className="balance-arc"></div>
          <div className="balance-arc"></div>

          <div className="hero-content">
            <div className="hero-eyebrow">
              <a href="https://www.vinaybajrangi.com/love-compatibility">Love Compatibility</a>
              <span className="sep">&rsaquo;</span>
              <span>Libra</span>
            </div>

            <div className="hero-sign-badge">
              <span className="sign-glyph">♎</span>
              <div className="sign-meta">
                <strong>Libra &middot; The Scales</strong>
                <span>September 23 – October 22 &middot; Air Sign &middot; Venus-Ruled</span>
              </div>
            </div>

            <h1 className="hero-title">
              Libra Love Compatibility<br /><em>with All 12 Signs</em>
            </h1>
            <p className="hero-desc">
              Libra was made for love — charming, fair, and endlessly romantic. But which signs can hold their own against that magnetic grace? Which will tip the scales? And what does Vedic astrology reveal about the Scales' heart that goes far deeper than any sun-sign match?
            </p>

            <div className="hero-pills">
              <span className="pill">💨 Air Element</span>
              <span className="pill">♀ Ruled by Venus</span>
              <span className="pill">🔑 Cardinal Modality</span>
              <span className="pill">Best with: Gemini, Aquarius, Leo</span>
            </div>

            <div className="hero-ctas">
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-primary">
                ✦ Get My Personalised Report
              </a>
              <a href="https://www.vinaybajrangi.com/calculator/love-calculator" className="btn-outline">
                Free Love Calculator &rarr;
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="compat-meter-card">
              <div className="meter-title">Quick Compatibility at a Glance</div>
              <div className="meter-row">
                <span className="meter-sign">♊</span>
                <span className="meter-label">Gemini</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="93%"></div>
                </div>
                <span className="meter-score">93%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♒</span>
                <span className="meter-label">Aquarius</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="90%"></div>
                </div>
                <span className="meter-score">90%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♌</span>
                <span className="meter-label">Leo</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="83%"></div>
                </div>
                <span className="meter-score">83%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♐</span>
                <span className="meter-label">Sagittarius</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="79%"></div>
                </div>
                <span className="meter-score">79%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♎</span>
                <span className="meter-label">Libra</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="72%"></div>
                </div>
                <span className="meter-score">72%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♉</span>
                <span className="meter-label">Taurus</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="55%"></div>
                </div>
                <span className="meter-score">55%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♑</span>
                <span className="meter-label">Capricorn</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="42%"></div>
                </div>
                <span className="meter-score">42%</span>
              </div>
            </div>
          </div>
        </section>

        {/* TRAIT STRIP */}
        <div className="trait-strip">
          <div className="trait-inner">
            <div className="trait-item">
              <div className="trait-icon">💨</div>
              <div className="trait-text"><strong>Element</strong><span>Air</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">♀</div>
              <div className="trait-text"><strong>Ruling Planet</strong><span>Venus (Shukra)</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">🔑</div>
              <div className="trait-text"><strong>Modality</strong><span>Cardinal</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">⚖️</div>
              <div className="trait-text"><strong>Love Strength</strong><span>Charming, Fair, Deeply Romantic</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">⚠️</div>
              <div className="trait-text"><strong>Love Challenge</strong><span>Indecisive, People-Pleasing</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">✨</div>
              <div className="trait-text"><strong>Best Match</strong><span>Gemini, Aquarius, Leo</span></div>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* LIBRA IN LOVE: OVERVIEW */}
        <div className="overview-section">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal">Understanding Libra in Love</span>
            <h2 className="section-title reveal">The heart of the Scales —<br /><em>how Libra loves</em></h2>
            <p className="section-lead reveal">
              Libra is ruled by Venus — the planet of love, beauty, and harmony — expressed through Air rather than Earth. Where Taurus (also Venus-ruled) loves through physical devotion and sensory comfort, Libra loves through intellectual connection, aesthetic shared experience, and the art of genuine partnership. For Libra, love is not a feeling — it is a philosophy.
            </p>

            <div className="overview-grid">
              <div className="overview-card reveal">
                <div className="ov-icon">⚖️</div>
                <div className="ov-title">Love Style: Partnership, Beauty, and Harmony</div>
                <p className="ov-text">
                  Libra is the only sign symbolised by an inanimate object — the Scales. This captures something essential: Libra is always weighing, always calibrating, always seeking the balance point between self and other. They are the zodiac's supreme relationship sign, most fully alive when in meaningful partnership.
                </p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🌊</div>
                <div className="ov-title">The Challenge: Indecision and Avoidance</div>
                <p className="ov-text">
                  Libra's need for harmony can become a trap. They avoid conflict to such a degree that resentment quietly builds beneath the surface. They can stay in the wrong relationship far too long because leaving feels like creating imbalance. Partners need to create a safe enough environment for Libra's honest voice to emerge.
                </p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🎨</div>
                <div className="ov-title">What Libra Needs: Intellectual Equals and Beauty</div>
                <p className="ov-text">
                  Libra needs a partner who can converse beautifully, appreciate refinement, and treat the relationship as a mutual work of art. They are not drawn to dominance or passivity — they want genuine equality. A partner who engages them mentally, brings beauty into shared life, and treats conflict with fairness will hold Libra's heart completely.
                </p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🪐</div>
                <div className="ov-title">Vedic Lens: Venus, 7th House &amp; Navamsa</div>
                <p className="ov-text">
                  In Vedic astrology, Libra (Tula) is ruled by Venus and is the natural ruler of the 7th house of partnerships and marriage. This makes Libra the most relationship-oriented sign in the entire zodiac — not just by temperament, but by cosmic design. Saturn is exalted in Libra, giving it unusual discipline and seriousness beneath its charming exterior. The 7th house lord for Libra Lagna is Mars (ruling Aries) — meaning the ideal partner for a Libra Lagna native carries Martian qualities: direct, courageous, and action-oriented, even though Libra may not consciously seek such a partner.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* COMPATIBILITY BREAKDOWN */}
        <div className="compatibility-section">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal">Libra with Each Sign</span>
            <h2 className="section-title reveal">Libra compatibility —<br /><em>sign by sign</em></h2>
            <p className="section-lead reveal">
              Tap any sign to expand a full breakdown: love chemistry, long-term potential, and the Vedic astrology angle that goes beyond sun-sign generalisation.
            </p>

            <div className="compat-layout">
              {/* GEMINI */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg, #3A8A2A, #5CB84A)' }}>♊</div>
                  <div className="compat-sign-info">
                    <h3>Libra + Gemini</h3>
                    <p>Air meets Air &middot; May 21 – Jun 20</p>
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
                      <p>Two air signs who meet on the plane of ideas and never run out of things to say. Libra's grace and aesthetic sensibility enchants Gemini; Gemini's wit and spontaneity keeps Libra endlessly entertained. Both are social, curious, and fundamentally optimistic about love — a rare and energising combination.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Very high. Neither is possessive or prone to jealousy, which gives the relationship freedom to breathe. Both must ensure that intellectual ease does not become a substitute for emotional depth. When both bring their genuine feelings into the light of their already-excellent communication, this pairing becomes genuinely extraordinary.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Mercury rules Gemini and is a natural friend of Venus (Libra's ruler) in Vedic astrology — a planetary friendship that creates easy communication, shared aesthetic tastes, and mutual emotional attunement. Gemini is Libra's 9th house — the house of fortune, higher wisdom, and dharma — making Gemini partners a source of significant good fortune and philosophical expansion for Libra natives.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AQUARIUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg, #1A5A9E, #4A9ECC)' }}>♒</div>
                  <div className="compat-sign-info">
                    <h3>Libra + Aquarius</h3>
                    <p>Air meets Air &middot; Jan 20 – Feb 18</p>
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
                      <p>A meeting of idealists — Libra seeks beauty and balance in human relationships; Aquarius seeks justice and progress in human society. Both care deeply about fairness, both are fundamentally kind, and both are attracted to ideas as much as to people. The chemistry is intellectual, warm, and unusually egalitarian.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Strong. Both value independence within commitment and neither attempts to control or possess the other. The relationship feels more like a deep friendship that chose each other — which is, in fact, one of the most durable forms of love. Libra must occasionally draw Aquarius back to personal warmth; Aquarius must accept Libra's need for relational beauty over ideological purity.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Saturn rules Aquarius and is exalted in Libra — an extraordinary cosmic signal. Saturn reaches its highest expression in Libra's domain of justice, fairness, and partnership. This makes Aquarius a profoundly compatible sign for Libra at a karmic and structural level. Aquarius is Libra's 5th house — the house of romance and love — confirming that Aquarius natives are the natural love interest for many Libra Lagna individuals.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LEO */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg, #C0392B, #E05A4E)' }}>♌</div>
                  <div className="compat-sign-info">
                    <h3>Libra + Leo</h3>
                    <p>Air meets Fire &middot; Jul 23 – Aug 22</p>
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
                      <p>Air fans Fire — Libra's admiration and elegant charm gives Leo exactly what they most need. Leo's confidence and generous warmth gives Libra the strong, decisive partner they quietly crave. Together they are one of the zodiac's most socially radiant pairings — beautiful, entertaining, and mutually enhancing.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Good. Libra genuinely appreciates Leo in a way that feels authentic rather than performative — a distinction Leo reads instantly. Leo gives Libra the certainty their indecisive nature craves. The main challenge is ensuring both maintain their individual identities rather than Libra gradually subordinating themselves to Leo's strong will.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>The Sun rules Leo and is a friend of Venus in Vedic astrology. Leo is Libra's 11th house — the house of gains, long-term aspirations, and social networks. Leo partners frequently bring significant material and social benefits to Libra's life. Dr. Bajrangi notes that this house placement means Leo partners are often connected to Libra's most important friendships and professional opportunities as well as the romantic relationship.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SAGITTARIUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg, #6B3FA0, #9B6BD0)' }}>♐</div>
                  <div className="compat-sign-info">
                    <h3>Libra + Sagittarius</h3>
                    <p>Air meets Fire &middot; Nov 22 – Dec 21</p>
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
                      <p>A spirited, intellectually alive pairing. Sagittarius' expansive vision and philosophical depth fascinates Libra; Libra's refinement and social grace gives Sagittarius' raw enthusiasm an elegant form. Both are optimistic, both love ideas and beauty, and neither is prone to possessiveness.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Good. Sagittarius must learn to deliver their honesty with Libra's required diplomacy — bluntness wounds Libra more deeply than most. Libra must develop the courage to speak their real feelings rather than managing Sagittarius' moods. When both achieve this, the relationship has genuine warmth, adventure, and longevity.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Jupiter rules Sagittarius and is a benefic planet well-disposed toward Venus in Vedic astrology. Sagittarius is Libra's 3rd house — the house of communication, courage, and short travel. Sagittarius partners push Libra to speak more directly, travel more boldly, and engage with the world with less hesitation. This is often exactly what Libra needs, even when it is uncomfortable.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ARIES */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg, #C0351A, #F26B3A)' }}>♈</div>
                  <div className="compat-sign-info">
                    <h3>Libra + Aries</h3>
                    <p>Air meets Fire &middot; Opposite Signs &middot; Mar 21 – Apr 19</p>
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
                      <p>Opposite signs — and the opposition is one of the most compelling in the zodiac. Libra is drawn to Aries' decisive boldness; Aries is drawn to Libra's charm and ease. Each offers what the other cannot give themselves. The attraction is immediate, physical, and charged with the energy of complementary forces.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Good when both mature. Aries must learn patience and diplomatic sensitivity; Libra must learn to make decisions and stand by them. The opposites that initially attract can become the source of sustained friction if neither grows. When both do, this pairing achieves remarkable balance — the zodiac axis of self and other at its finest.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Mars rules Aries and is also the 7th house lord for Libra Lagna — the house of marriage itself. This makes Aries the natural marriage partner for Libra Lagna natives in Vedic astrology. The Venus-Mars axis between these signs creates deep romantic and physical chemistry. However, Mars is an enemy of Venus in Vedic astrology, which means this relationship carries an inherent tension between love and conflict that both must consciously navigate.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LIBRA + LIBRA */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg, var(--sign-primary), var(--sign-secondary))' }}>♎</div>
                  <div className="compat-sign-info">
                    <h3>Libra + Libra</h3>
                    <p>Air meets Air &middot; Same Sign</p>
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
                      <p>A beautifully aesthetically harmonious pairing — two people who understand beauty, balance, and the art of elegant relationship in the same instinctive way. The mutual appreciation is immediate and deep. Both feel seen and understood without explanation. Social life together is effortless and enviable.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Good, with one significant caveat: two Libras can become paralysed by mutual indecision. If neither is willing to make the difficult call, the relationship drifts. Both must develop the courage to voice their actual preferences — including when those preferences conflict — rather than endlessly deferring to the other's comfort.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Two Venus-ruled charts amplify both Venus' gifts (beauty, harmony, romantic depth) and its shadows (indulgence, avoidance, over-idealisation). Dr. Bajrangi notes that the Moon sign compatibility between two Libra natives is particularly important — if both Moon signs are emotionally stable and compatible, the relationship has genuine depth beneath its beautiful surface.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TAURUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg, #2D6A2A, #5A9E55)' }}>♉</div>
                  <div className="compat-sign-info">
                    <h3>Libra + Taurus</h3>
                    <p>Air meets Earth &middot; Both Venus-Ruled &middot; Apr 20 – May 20</p>
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
                      <p>Both ruled by Venus — they share a natural appreciation for beauty, comfort, and romance. The initial attraction is built on aesthetic harmony and genuine warmth. But Taurus loves through physical constancy and earthy devotion; Libra loves through intellectual connection and social beauty — two very different expressions of the same planet.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Moderate. Taurus' possessiveness can feel controlling to Libra's free-ranging social nature; Libra's indecisiveness can frustrate Taurus who prefers clear, grounded commitment. Both must make significant adjustments. When both honour what the other brings — Taurus offering stability, Libra offering grace — the relationship has genuine richness.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Though both are Venus-ruled, Taurus and Libra express Venus through entirely different elements — Earth (physical, sensory love) and Air (intellectual, social love). Taurus is Libra's 8th house — the house of transformation, hidden matters, and shared resources. This often manifests as a relationship that significantly transforms Libra's financial situation or brings deep, unexpected emotional upheaval beneath the surface harmony.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CANCER */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg, #2B6CB0, #63B3ED)' }}>♋</div>
                  <div className="compat-sign-info">
                    <h3>Libra + Cancer</h3>
                    <p>Air meets Water &middot; Jun 21 – Jul 22</p>
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
                      <p>Both are romantics at heart and both want a relationship that feels genuinely meaningful. Cancer's warmth and tenderness appeals to Libra's love of harmony; Libra's charm and social ease delights Cancer initially. But Cancer needs emotional depth and constancy; Libra needs variety and lightness — the emotional registers are fundamentally different.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Moderate with effort. Libra must develop greater emotional availability and consistency — Cancer cannot sustain a relationship on charm alone. Cancer must develop resilience to Libra's more social, less emotionally intense approach. When both stretch toward each other genuinely, there is real tenderness in this pairing.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>The Moon rules Cancer and is a friend of Venus in Vedic astrology — providing underlying warmth. Cancer is Libra's 10th house — the house of career, public reputation, and social standing. Cancer partners often play a significant role in shaping Libra's professional life or public image. Dr. Bajrangi notes that the relationship frequently carries professional as well as personal significance for Libra natives.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SCORPIO */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg, #7B2D8B, #B05EC0)' }}>♏</div>
                  <div className="compat-sign-info">
                    <h3>Libra + Scorpio</h3>
                    <p>Air meets Water &middot; Oct 23 – Nov 21</p>
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
                      <p>Adjacent signs with an intense magnetic pull. Scorpio's depth and intensity fascinates Libra's curious mind; Libra's grace and social ease disarms Scorpio's habitual guardedness. The attraction is real. But Scorpio's emotional demands and possessiveness quickly discomfit Libra, who needs breathing room to feel balanced.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Challenging without genuine mutual understanding. Scorpio wants total emotional immersion; Libra wants harmonious partnership with personal freedom. Scorpio reads Libra's social ease as flirtation; Libra finds Scorpio's intensity exhausting. With emotional maturity and explicit communication about needs, this pairing can reach unexpected depth.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Mars and Ketu co-rule Scorpio. Mars is the 7th house lord for Libra Lagna — meaning Scorpio, being Mars-influenced, carries strong marriage energy for Libra. Scorpio is Libra's 2nd house — the house of family, accumulated wealth, and speech — meaning Scorpio partners frequently shape Libra's financial life and family relationships in lasting ways, for better or worse.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* VIRGO */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg, #5C6E2A, #849A3E)' }}>♍</div>
                  <div className="compat-sign-info">
                    <h3>Libra + Virgo</h3>
                    <p>Air meets Earth &middot; Aug 23 – Sep 22</p>
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
                      <p>Both are refined, analytical in their own ways, and appreciate quality. The intellectual connection can be genuine. But Virgo's critical streak wounds Libra's need for harmony, and Libra's idealism and people-pleasing frustrates Virgo's demand for directness. Both must learn to express love without retreating into their respective avoidance patterns.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Moderate. These two function better as friends or collaborators than as romantic partners unless both have developed significant emotional maturity. Virgo must soften their criticism; Libra must develop the backbone to voice disagreement clearly. The relationship improves enormously when both stop trying to make the other comfortable and start making each other honest.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Mercury rules Virgo and is a friend of Venus in Vedic astrology — providing intellectual ease and shared aesthetic standards. Virgo is Libra's 12th house — the house of loss, isolation, and spiritual retreat. This placement often creates a relationship where Libra feels subtly depleted over time, or where significant sacrifice is required. Dr. Bajrangi assesses the 12th house lord's strength carefully before advising on this pairing.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CAPRICORN */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg, #5A5A5A, #9A9A9A)' }}>♑</div>
                  <div className="compat-sign-info">
                    <h3>Libra + Capricorn</h3>
                    <p>Air meets Earth &middot; Dec 22 – Jan 19</p>
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
                      <p>Mutual respect is possible — both are Cardinal signs who lead in their respective domains. But Capricorn's emotional reserve and single-minded ambition sits at odds with Libra's need for relational warmth, beauty, and reciprocal engagement. Capricorn finds Libra indecisive; Libra finds Capricorn cold and tunnel-visioned.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Low without substantial effort from both sides. Capricorn must make active space for the relational beauty that Libra requires to feel loved. Libra must develop the discipline and seriousness that Capricorn respects. When both bring their best rather than their defaults, there is genuine complementarity — but it requires consistent conscious effort.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Saturn rules Capricorn and is exalted in Libra — making Saturn deeply resonant with Libra's sign. Capricorn is Libra's 4th house — the house of home, mother, and emotional foundations. Capricorn partners often create or destroy Libra's sense of domestic security and emotional groundedness. Saturn's exaltation in Libra means these two have a deep karmic connection, but karma is not always comfortable — this is a relationship that teaches rather than soothes.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PISCES */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg, #3B82B0, #82C8E0)' }}>♓</div>
                  <div className="compat-sign-info">
                    <h3>Libra + Pisces</h3>
                    <p>Air meets Water &middot; Feb 19 – Mar 20</p>
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
                      <p>Both are romantics and both are drawn to beauty, harmony, and meaningful connection. The initial resonance is real and often poetic. Pisces' dreamy compassion softens Libra; Libra's structure and social ease gives Pisces an anchor. But Pisces' emotional depth can overwhelm Libra's need for lightness, and Libra's social butterfly quality can make Pisces feel insecure.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Moderate. Both must resist the temptation to idealise each other — Libra and Pisces are both prone to seeing what they wish were there. When grounded communication replaces romantic fantasy, this pairing has genuine tenderness. Both must develop emotional honesty without sacrificing the genuine beauty they bring to each other.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Jupiter rules Pisces and is a benefic planet friendly to Venus. Pisces is Libra's 6th house — the house of conflict, health, and service. In Vedic astrology, 6th house relationships often carry themes of duty, health challenges, or subtle ongoing effort. Libra natives frequently describe Pisces relationships as ones that require significant emotional maintenance, even when the love itself is genuine and warm.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.78rem', color: 'var(--text-soft)', marginTop: '18px', fontStyle: 'italic', textAlign: 'center' }}>
              All 12 signs covered above. For a personalised compatibility reading based on your full birth chart, see the Love &amp; Relationship Report.
            </p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* SCORE SUMMARY */}
        <div className="score-section">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal" style={{ textAlign: 'center', display: 'block' }}>At a Glance</span>
            <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: '36px' }}>Libra compatibility <em>scores</em></h2>
            <div className="score-grid">
              <div className="score-card reveal">
                <div className="score-sign">♊</div>
                <div className="score-name">Gemini</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="93%"></div>
                </div>
                <div className="score-pct">93%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♒</div>
                <div className="score-name">Aquarius</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="90%"></div>
                </div>
                <div className="score-pct">90%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♌</div>
                <div className="score-name">Leo</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="83%"></div>
                </div>
                <div className="score-pct">83%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♐</div>
                <div className="score-name">Sagittarius</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="79%"></div>
                </div>
                <div className="score-pct">79%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♈</div>
                <div className="score-name">Aries</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="76%"></div>
                </div>
                <div className="score-pct">76%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♎</div>
                <div className="score-name">Libra</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="72%"></div>
                </div>
                <div className="score-pct">72%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♏</div>
                <div className="score-name">Scorpio</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="58%"></div>
                </div>
                <div className="score-pct">58%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♋</div>
                <div className="score-name">Cancer</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="56%"></div>
                </div>
                <div className="score-pct">56%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♉</div>
                <div className="score-name">Taurus</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="55%"></div>
                </div>
                <div className="score-pct">55%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♓</div>
                <div className="score-name">Pisces</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="52%"></div>
                </div>
                <div className="score-pct">52%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♍</div>
                <div className="score-name">Virgo</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="48%"></div>
                </div>
                <div className="score-pct">48%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♑</div>
                <div className="score-name">Capricorn</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="42%"></div>
                </div>
                <div className="score-pct">42%</div>
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-soft)', marginTop: '18px', fontStyle: 'italic' }}>
              General sun-sign compatibility only. Personalised scores require full birth chart analysis.
            </p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* REPORT CALLOUT */}
        <div className="report-callout-section">
          <div className="report-callout reveal">
            <div>
              <span className="rc-tag">For Libra &middot; Personalised Report</span>
              <h2 className="rc-title">Venus and Mars together<br />tell your <em>real love story</em></h2>
              <p className="rc-desc">
                Libra is defined by Venus — but the 7th house lord for Libra Lagna is Mars, the planet of action and desire. Understanding how Venus and Mars interact in your birth chart — their houses, signs, mutual aspects, and Dasha periods — gives you a precise picture of the kind of love you attract and when it arrives. Dr. Vinay Bajrangi's Love &amp; Relationship Report covers this in full: written, personalised, and delivered in 3–5 working days.
              </p>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-primary">
                ✦ Get My Love &amp; Relationship Report
              </a>
            </div>
            <div className="rc-side">
              <div className="rc-price">
                <div className="from">Starts from</div>
                <div className="amount">₹ 799</div>
                <div className="note">Written report &middot; Delivered<br />in 3–5 working days</div>
              </div>
              <a href="https://www.vinaybajrangi.com/calculator/love-calculator" className="btn-outline" style={{ fontSize: '0.82rem', justifyContent: 'center', width: '100%', marginTop: '4px' }}>
                Try Free Calculator &rarr;
              </a>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* GEMSTONE WEARABLES FOR LIBRA */}
        <div className="gem-strip">
          <div className="gem-strip-inner">
            <span className="section-tag reveal gem-heading">Vedic Remedies for Libra</span>
            <h2 className="section-title reveal">Gemstone wearables <em>for Libra love</em></h2>
            <p className="section-lead reveal" style={{ marginBottom: 0 }}>
              Venus-ruled Libra benefits from gemstones that deepen romantic magnetism, strengthen the 7th house lord Mars (the direct marriage significator for Libra Lagna), and support Saturn — which is exalted in Libra and governs the discipline that makes relationships last. All wearables prescribed after chart analysis only.
            </p>

            <div className="gem-strip-cards">
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">💎</span>
                <div className="gem-name">Diamond / White Sapphire Pendant</div>
                <p className="gem-desc">
                  Diamond strengthens Venus — Libra's ruling planet and the natural significator of love. For Libra natives, it enhances romantic magnetism, deepens aesthetic pleasure in relationships, and attracts a partner who matches their standard of beauty and refinement.
                </p>
                <div className="gem-planet">♀ Venus &middot; Worn on Friday</div>
              </a>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">🔴</span>
                <div className="gem-name">Red Coral Pendant / Bracelet</div>
                <p className="gem-desc">
                  Mars is the 7th house lord for Libra Lagna — the direct ruler of marriage in Vedic astrology. Red Coral (Moonga) strengthens Mars, improving the quality and timing of the marriage partner, resolving delays in commitment, and bringing decisiveness to Libra's famously indecisive love life.
                </p>
                <div className="gem-planet">♂ Mars &middot; Worn on Tuesday</div>
              </a>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">🔵</span>
                <div className="gem-name">Blue Sapphire Pendant / Bracelet</div>
                <p className="gem-desc">
                  Saturn is exalted in Libra, making Blue Sapphire (Neelam) particularly resonant for Libra natives when prescribed after careful chart analysis. It brings discipline and stability to relationships, attracts a mature and responsible partner, and can significantly accelerate marriage timing when indicated.
                </p>
                <div className="gem-planet">♄ Saturn &middot; Worn on Saturday</div>
              </a>
            </div>

            <div className="reveal" style={{ background: 'var(--sign-xpale)', borderRadius: '14px', padding: '18px 22px', marginTop: '20px', borderLeft: '3px solid var(--saffron)', maxWidth: '680px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>⚠️</span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: '1.65' }}>
                <strong style={{ color: 'var(--text-dark)' }}>Blue Sapphire requires special caution.</strong> Neelam is one of Vedic astrology's most powerful gemstones and must only be worn after a thorough chart analysis. It can bring rapid positive results when correctly prescribed, and equally rapid disruption when incorrect. Dr. Bajrangi recommends all wearables — especially Saturn stones — only within a full consultation or written report.
              </p>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* SIGNS NAV */}
        <div className="signs-nav">
          <div className="signs-nav-inner">
            <h3 className="signs-nav-title">Explore compatibility for <em>other signs</em></h3>
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
              <a href="https://www.vinaybajrangi.com/love-compatibility/virgo" className="sign-nav-item">
                <span className="sni-symbol">♍</span>
                <span className="sni-name">Virgo</span>
              </a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/libra" className="sign-nav-item active">
                <span className="sni-symbol">♎</span>
                <span className="sni-name">Libra</span>
              </a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/scorpio" className="sign-nav-item">
                <span className="sni-symbol">♏</span>
                <span className="sni-name">Scorpio</span>
              </a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/sagittarius" className="sign-nav-item">
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
            <p style={{ textAlign: 'center', marginTop: '22px' }}>
              <a href="https://www.vinaybajrangi.com/love-compatibility" style={{ color: 'var(--saffron-deep)', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>
                &larr; Back to Love Compatibility Overview
              </a>
            </p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="bottom-cta">
          <div className="reveal">
            <h2>The Scales seek perfect balance —<br />let the stars find yours</h2>
            <p>Sun signs reveal the attraction. Your Vedic birth chart — Venus, Mars, the 7th house, and your Dasha — reveals the relationship you were made for.</p>
            <div className="bottom-cta-btns">
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-white">✦ Order My Love Report</a>
              <a href="https://www.vinaybajrangi.com/calculator/love-calculator" className="btn-outline-white">Try Free Calculator</a>
              <a href="https://www.vinaybajrangi.com/services/consultation.php" className="btn-outline-white">Book a Consultation</a>
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
          --cream:         #FDF6EC;

          /* ── Libra palette: periwinkle-indigo ── */
          --sign-primary:   #5558A8;
          --sign-secondary: #7B7ECC;
          --sign-accent:    #A8AAEE;
          --sign-pale:      #EDEDF8;
          --sign-xpale:     #F6F6FC;

          /* Hero: white-to-periwinkle blush */
          --hero-from: #FAFAFF;
          --hero-mid:  #EEEEFF;
          --hero-to:   #D8D8F5;

          --text-dark:  #12122E;
          --text-mid:   #32325A;
          --text-soft:  #7070A8;
          --white:      #FFFFFF;

          --font-display: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          --font-body:    var(--font-dm-sans), 'DM Sans', sans-serif;
          --shadow-sign:  0 6px 32px rgba(85,88,168,0.15);
          --shadow-card:  0 3px 18px rgba(85,88,168,0.08);
          --shadow-soft:  0 2px 12px rgba(0,0,0,0.05);
        }

        .page-wrapper {
          font-family: var(--font-body);
          background: var(--white);
          color: var(--text-dark);
          overflow-x: hidden;
        }

        /* ── BREADCRUMB ── */
        .breadcrumb {
          background: var(--sign-xpale);
          border-bottom: 1px solid rgba(85,88,168,0.1);
          padding: 12px 6vw;
          font-size: 0.78rem;
          color: var(--text-soft);
        }
        .breadcrumb a { color: var(--saffron-deep); text-decoration: none; }
        .breadcrumb a:hover { text-decoration: underline; }
        .breadcrumb span { margin: 0 6px; opacity: 0.4; }

        /* ── HERO ── */
        .hero {
          background: linear-gradient(155deg, var(--hero-from) 0%, var(--hero-mid) 45%, var(--hero-to) 100%);
          padding: 72px 6vw 0;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 48px;
          align-items: end;
          min-height: 460px;
          border-bottom: 1px solid rgba(85,88,168,0.1);
        }
        @media (max-width: 860px) {
          .hero { grid-template-columns: 1fr; padding-bottom: 52px; min-height: auto; }
          .hero-visual { display: none; }
        }

        /* ── SCALES MOTIF ── */
        .hero-bg-symbol {
          position: absolute;
          right: 27%;
          top: 50%;
          transform: translateY(-50%);
          font-size: 30vw;
          color: var(--sign-primary);
          line-height: 1;
          pointer-events: none;
          font-family: var(--font-display);
          user-select: none;
          z-index: 1;
          opacity: 0.05;
        }

        /* Balance arcs */
        .balance-arc {
          position: absolute;
         
          pointer-events: none;
        }
        .balance-arc:nth-child(4){
          width: 520px; height: 520px;
          top: 50%; right: 18%;
          transform: translateY(-50%);
          animation: arcFloat 9s ease-in-out infinite alternate;
        }
        .balance-arc:nth-child(5){
          width: 360px; height: 360px;
          top: 50%; right: 22%;
          transform: translateY(-50%);
          animation: arcFloat 12s ease-in-out infinite alternate-reverse;
          border-color: rgba(85,88,168,0.1);
        }
        .balance-arc:nth-child(6){
          width: 700px; height: 700px;
          top: 50%; right: 12%;
          transform: translateY(-50%);
          animation: arcFloat 15s ease-in-out infinite alternate;
          border-color: rgba(85,88,168,0.05);
        }
        @keyframes arcFloat {
          from { transform: translateY(-50%) scale(1);    opacity: 0.5; }
          to   { transform: translateY(-50%) scale(1.03); opacity: 0.9; }
        }

        /* Dual glow */
        .hero-glow-a {
          position: absolute; width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(123,126,204,0.2) 0%, transparent 70%);
          top: 30%; left: 15%; transform: translate(-50%,-50%); pointer-events: none;
        }
        .hero-glow-b {
          position: absolute; width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(168,170,238,0.15) 0%, transparent 70%);
          top: 70%; left: 28%; transform: translate(-50%,-50%); pointer-events: none;
        }

        .hero-content { position: relative; z-index: 2; padding-bottom: 60px; }

        .hero-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--sign-primary);
          margin-bottom: 18px; opacity: 0; animation: fadeUp 0.7s 0.1s forwards;
        }
        .hero-eyebrow a { color: var(--text-soft); text-decoration: none; transition: color 0.2s; }
        .hero-eyebrow a:hover { color: var(--sign-primary); }
        .hero-eyebrow .sep { opacity: 0.4; }

        .hero-sign-badge {
          display: inline-flex; align-items: center; gap: 12px;
          background: var(--white); border: 1.5px solid rgba(85,88,168,0.15);
          border-radius: 50px; padding: 8px 20px 8px 10px;
          margin-bottom: 20px; box-shadow: var(--shadow-soft);
          opacity: 0; animation: fadeUp 0.7s 0.2s forwards;
        }
        .sign-glyph {
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, var(--sign-primary), var(--sign-secondary));
          display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;
        }
        .sign-meta strong { display: block; font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--text-dark); line-height: 1.1; }
        .sign-meta span { font-size: 0.68rem; color: var(--text-soft); letter-spacing: 0.08em; }

        .hero-title {
          font-family: var(--font-display); font-size: clamp(2.6rem,5.5vw,4.4rem);
          font-weight: 700; color: var(--text-dark); line-height: 1.08; margin-bottom: 18px;
          opacity: 0; animation: fadeUp 0.8s 0.3s forwards;
        }
        .hero-title em { font-style: italic; color: var(--sign-primary); }

        .hero-desc {
          font-size: 1.05rem; font-weight: 300; color: var(--text-mid);
          line-height: 1.75; max-width: 520px; margin-bottom: 30px;
          opacity: 0; animation: fadeUp 0.8s 0.45s forwards;
        }

        .hero-pills {
          display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 32px;
          opacity: 0; animation: fadeUp 0.8s 0.55s forwards;
        }
        .pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--sign-pale); border: 1px solid rgba(85,88,168,0.15);
          color: var(--sign-primary); font-size: 0.75rem; font-weight: 600;
          padding: 5px 14px; border-radius: 50px;
        }

        .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; opacity: 0; animation: fadeUp 0.8s 0.65s forwards; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── BUTTONS ── */
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, var(--saffron) 0%, var(--gold) 100%);
          color: var(--white); font-weight: 600;
          font-size: 0.88rem; letter-spacing: 0.03em;
          padding: 13px 26px; border-radius: 50px; text-decoration: none; border: none;
          cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 18px rgba(232,130,26,0.35);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(232,130,26,0.48); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--sign-primary);
          font-weight: 600; font-size: 0.88rem;
          padding: 13px 26px; border-radius: 50px; text-decoration: none;
          border: 1.5px solid rgba(85,88,168,0.28); transition: background 0.2s, border-color 0.2s;
        }
        .btn-outline:hover { background: var(--sign-pale); border-color: var(--sign-secondary); }

        /* ── HERO METER PANEL ── */
        .hero-visual { position: relative; z-index: 2; align-self: end; }
        .compat-meter-card {
          background: var(--white); border: 1.5px solid rgba(85,88,168,0.14);
          box-shadow: var(--shadow-sign); border-radius: 20px 20px 0 0; padding: 28px 28px 32px;
        }
        .meter-title { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-soft); margin-bottom: 20px; }
        .meter-row { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .meter-sign { font-size: 1.1rem; width: 26px; flex-shrink: 0; text-align: center; }
        .meter-label { font-size: 0.78rem; color: var(--text-mid); width: 84px; flex-shrink: 0; }
        .meter-bar-bg { flex: 1; height: 6px; border-radius: 3px; background: var(--sign-pale); overflow: hidden; }
        .meter-bar {
          height: 100%; border-radius: 3px;
          background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent));
          transform-origin: left; transform: scaleX(0); transition: transform 1s ease;
        }
        .meter-bar.animate { transform: scaleX(1); }
        .meter-score { font-size: 0.72rem; font-weight: 700; color: var(--sign-primary); width: 28px; text-align: right; flex-shrink: 0; }

        /* ── TRAIT STRIP ── */
        .trait-strip {
          background: var(--sign-pale); border-bottom: 1px solid rgba(85,88,168,0.1); padding: 22px 6vw;
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
        .section-tag { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--saffron); display: block; margin-bottom: 12px; }
        .section-title { font-family: var(--font-display); font-size: clamp(1.9rem,3.2vw,2.7rem); font-weight: 700; line-height: 1.18; color: var(--text-dark); margin-bottom: 14px; }
        .section-title em { font-style: italic; color: var(--sign-primary); }
        .section-lead { font-size: 1rem; font-weight: 300; color: var(--text-mid); line-height: 1.75; max-width: 660px; margin-bottom: 48px; }

        /* ── OVERVIEW CARDS ── */
        .overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 48px; }
        @media (max-width: 720px) { .overview-grid { grid-template-columns: 1fr; } }
        .overview-card {
          background: var(--white); border-radius: 18px; padding: 28px;
          border: 1.5px solid rgba(85,88,168,0.1); box-shadow: var(--shadow-soft);
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
          border: 1.5px solid rgba(85,88,168,0.1); box-shadow: var(--shadow-soft);
          overflow: hidden; transition: box-shadow 0.25s;
        }
        .compat-card:hover { box-shadow: var(--shadow-sign); }
        .compat-header {
          display: grid; grid-template-columns: auto 1fr auto auto;
          align-items: center; gap: 16px; padding: 20px 24px; cursor: pointer; user-select: none;
        }
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

        .compat-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s ease;
        }
        .compat-card.open .compat-body {
          max-height: 600px;
        }
        .overview-section {
          background: var(--white);
          padding: 60px 6vw 30px;
        }
        .compatibility-section {
          background: var(--white);
          padding: 30px 6vw 60px;
        }
        .report-callout-section {
          background: var(--white);
          padding: 45px 6vw;
        }

        .compat-body-inner {
          border-top: 1px solid rgba(85,88,168,0.08); padding: 24px 24px 28px;
          display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;
          background: var(--sign-xpale);
        }
        @media (max-width: 660px) { .compat-body-inner { grid-template-columns: 1fr; } }
        .compat-aspect h4 { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sign-primary); margin-bottom: 6px; }
        .compat-aspect p { font-size: 0.83rem; color: var(--text-mid); line-height: 1.62; }

        /* ── SCORE GRID ── */
        .score-section { background: var(--sign-pale); padding: 60px 6vw; }
        .score-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
        @media (max-width: 720px) { .score-grid { grid-template-columns: repeat(2,1fr); } }
        .score-card {
          background: var(--white); border-radius: 18px; padding: 22px 18px;
          text-align: center; border: 1.5px solid rgba(85,88,168,0.1);
          box-shadow: var(--shadow-soft); transition: all 0.3s;
        }
        .score-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-sign); }
        .score-sign { font-size: 1.8rem; margin-bottom: 6px; }
        .score-name { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
        .score-bar-wrap { height: 5px; background: var(--sign-pale); border-radius: 3px; overflow: hidden; margin-bottom: 6px; }
        .score-bar {
          height: 100%; border-radius: 3px;
          background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent));
          transform-origin: left; transform: scaleX(0); transition: transform 1.2s ease;
        }
        .score-bar.animate { transform: scaleX(1); }
        .score-pct { font-size: 0.72rem; font-weight: 600; color: var(--text-soft); }

        /* ── REPORT CALLOUT ── */
        .report-callout {
          background: var(--white); border: 1.5px solid rgba(85,88,168,0.13);
          border-left: 5px solid var(--sign-primary);
          border-radius: 24px; padding: 48px 52px;
          display: grid; grid-template-columns: 1fr auto; gap: 36px; align-items: center;
          max-width: 1100px; margin: 0 auto; box-shadow: var(--shadow-sign);
          position: relative; overflow: hidden;
        }
        .report-callout::before {
          content: '♎'; position: absolute; right: 40%; top: 50%; transform: translateY(-50%);
          font-size: 200px; color: var(--sign-primary); font-family: var(--font-display); pointer-events: none; line-height: 1;
          z-index: -1;
          opacity: 0.1;
        }
        @media (max-width: 760px) { .report-callout { grid-template-columns: 1fr; padding: 32px 24px; } .report-callout::before { display: none; } }
        .rc-tag { display: inline-block; background: var(--sign-pale); color: var(--sign-primary); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; padding: 4px 14px; border-radius: 50px; margin-bottom: 16px; border: 1px solid rgba(85,88,168,0.15); }
        .rc-title { font-family: var(--font-display); font-size: clamp(1.5rem,2.5vw,2.1rem); font-weight: 700; color: var(--text-dark); margin-bottom: 12px; line-height: 1.2; }
        .rc-title em { font-style: italic; color: var(--sign-primary); }
        .rc-desc { font-size: 0.9rem; font-weight: 300; color: var(--text-mid); line-height: 1.72; max-width: 480px; margin-bottom: 24px; }
        .rc-side { text-align: center; flex-shrink: 0; }
        .rc-price { background: linear-gradient(135deg, var(--sign-primary), var(--sign-secondary)); border-radius: 18px; padding: 24px 28px; margin-bottom: 14px; }
        .rc-price .from { font-size: 0.68rem; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.1em; }
        .rc-price .amount { font-family: var(--font-display); font-size: 2.2rem; font-weight: 700; color: var(--white); line-height: 1.1; }
        .rc-price .note { font-size: 0.68rem; color: rgba(255,255,255,0.65); margin-top: 4px; line-height: 1.4; }

        /* ── GEM STRIP ── */
        .gem-strip { background: var(--white); padding: 0 6vw 60px; }
        .gem-heading { padding-top: 45px; display: block; }
        .gem-strip-inner { max-width: 1100px; margin: 0 auto; }
        .gem-strip-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 36px; }
        @media (max-width: 660px) { .gem-strip-cards { grid-template-columns: 1fr; } }
        .gem-card {
          background: var(--sign-xpale); border-radius: 18px; padding: 24px 22px;
          border: 1.5px solid rgba(85,88,168,0.1); text-decoration: none; display: block; transition: all 0.3s;
        }
        .gem-card:hover { box-shadow: var(--shadow-sign); transform: translateY(-3px); background: var(--white); }
        .gem-emoji { font-size: 1.8rem; margin-bottom: 10px; display: block; }
        .gem-name { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
        .gem-desc { font-size: 0.8rem; color: var(--text-mid); line-height: 1.6; margin-bottom: 10px; }
        .gem-planet { font-size: 0.68rem; font-weight: 700; color: var(--sign-primary); text-transform: uppercase; letter-spacing: 0.08em; }

        /* ── SIGNS NAV ── */
        .signs-nav { background: var(--sign-pale); padding: 45px 6vw; border-top: 1px solid rgba(85,88,168,0.1); }
        .signs-nav-inner { max-width: 1100px; margin: 0 auto; }
        .signs-nav-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--text-dark); margin-bottom: 22px; text-align: center; }
        .signs-nav-title em { font-style: italic; color: var(--saffron-deep); }
        .signs-nav-grid { display: grid; grid-template-columns: repeat(12,1fr); gap: 10px; }
        @media (max-width: 860px) { .signs-nav-grid { grid-template-columns: repeat(6,1fr); } }
        @media (max-width: 440px) { .signs-nav-grid { grid-template-columns: repeat(4,1fr); } }
        .sign-nav-item {
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          padding: 12px 6px; background: var(--white); border-radius: 14px;
          border: 1.5px solid rgba(85,88,168,0.1); text-decoration: none; transition: all 0.2s;
        }
        .sign-nav-item.active { border-color: var(--sign-secondary); background: var(--sign-pale); }
        .sign-nav-item:hover:not(.active) { border-color: var(--saffron-light); box-shadow: 0 4px 16px rgba(232,130,26,0.14); transform: translateY(-2px); }
        .sni-symbol { font-size: 1.2rem; }
        .sni-name { font-size: 0.62rem; font-weight: 600; color: var(--text-mid); letter-spacing: 0.04em; }

        /* ── BOTTOM CTA ── */
        .bottom-cta {
          background: linear-gradient(155deg, #1E1E5A 0%, var(--sign-primary) 55%, var(--sign-secondary) 100%);
          padding: 50px 6vw; text-align: center; position: relative; overflow: hidden;
        }
        .bottom-cta::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 60% 40%, rgba(168,170,238,0.12) 0%, transparent 60%);
          pointer-events: none;
        }
        .bottom-cta h2 { font-family: var(--font-display); font-size: clamp(1.7rem,3.5vw,2.7rem); font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.2; position: relative; }
        .bottom-cta p { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 440px; margin: 0 auto 28px; line-height: 1.65; position: relative; }
        .bottom-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; }
        .btn-white { display: inline-flex; align-items: center; gap: 8px; background: var(--white); color: var(--sign-primary); font-weight: 700; font-size: 0.88rem; padding: 13px 26px; border-radius: 50px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
        .btn-outline-white { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--white); font-weight: 500; font-size: 0.88rem; padding: 13px 26px; border-radius: 50px; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.4); transition: background 0.2s; }
        .btn-outline-white:hover { background: rgba(255,255,255,0.1); }

        .section-divider { border: none; border-top: 1px solid rgba(85,88,168,0.07); margin: 0; }

        @media (max-width: 600px) {
          .compat-header {
            grid-template-columns: auto 1fr auto auto;
            gap: 8px;
            padding: 12px 14px;
          }
          .compat-sign-icon {
            width: 38px;
            height: 38px;
            font-size: 1.1rem;
          }
          .compat-sign-info h3 {
            font-size: 0.95rem;
          }
          .compat-sign-info p {
            font-size: 0.65rem;
          }
          .compat-stars {
            font-size: 0.7rem;
          }
          .compat-label {
            font-size: 0.55rem;
            padding: 2px 6px;
          }
          .hero {
            padding: 32px 4vw 32px;
          }
          .overview-section {
            padding: 24px 4vw 16px;
          }
          .compatibility-section {
            padding: 16px 4vw 24px;
          }
          .report-callout-section {
            padding: 20px 4vw;
          }
          .score-section {
            padding: 30px 4vw;
          }
          .gem-strip {
            padding: 0 4vw 30px;
          }
          .gem-heading {
            padding-top: 24px;
          }
          .signs-nav {
            padding: 24px 4vw;
          }
          .bottom-cta {
            padding: 30px 4vw;
          }
          .section-lead {
            margin-bottom: 20px;
            font-size: 0.88rem;
          }
          .section-title {
            margin-bottom: 10px;
          }
          .overview-grid {
            margin-bottom: 24px;
            gap: 12px;
          }
          .compat-body-inner {
            padding: 12px 14px 16px;
            gap: 12px;
          }
        }
      `}</style>
    </>
  );
}
