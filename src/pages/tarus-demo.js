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

export default function TaurusDemo() {
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
              const w = bar.getAttribute('data-width') || bar.style.width || '100%';
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
        <title>Taurus Love Compatibility With All Signs – Dr. Vinay Bajrangi</title>
        <meta
          name="description"
          content="Which zodiac sign is most compatible with Taurus in love and marriage? Vedic astrology insights on Taurus compatibility with all 12 signs by Dr. Vinay Bajrangi."
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
          Taurus Love Compatibility
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-bg-symbol">♉</div>
          <div className="hero-glow"></div>
          <div className="hero-ring"></div>
          <div className="hero-ring"></div>
          <div className="hero-ring"></div>

          <div className="hero-content">
            <div className="hero-eyebrow">
              <a href="https://www.vinaybajrangi.com/love-compatibility">Love Compatibility</a>
              <span className="sep">&rsaquo;</span>
              <span>Taurus</span>
            </div>

            <div className="hero-sign-badge">
              <span className="sign-glyph">♉</span>
              <div className="sign-meta">
                <strong>Taurus &middot; The Bull</strong>
                <span>April 20 – May 20 &middot; Earth Sign &middot; Venus-Ruled</span>
              </div>
            </div>

            <h1 className="hero-title">
              Taurus Love Compatibility<br />
              <em>with All 12 Signs</em>
            </h1>
            <p className="hero-desc">
              Taurus loves deeply, slowly, and forever — but only once they're sure. Which signs earn that trust? Which exhaust their patience? And what does Vedic astrology reveal about the Bull's heart beyond what the sun sign shows?
            </p>

            <div className="hero-pills">
              <span className="pill">🌍 Earth Element</span>
              <span className="pill">♀ Ruled by Venus</span>
              <span className="pill">🔒 Fixed Modality</span>
              <span className="pill">Best with: Virgo, Capricorn, Cancer</span>
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
                <span className="meter-sign">♍</span>
                <span className="meter-label">Virgo</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="93%"></div>
                </div>
                <span className="meter-score">93%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♑</span>
                <span className="meter-label">Capricorn</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="89%"></div>
                </div>
                <span className="meter-score">89%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♋</span>
                <span className="meter-label">Cancer</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="86%"></div>
                </div>
                <span className="meter-score">86%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♓</span>
                <span className="meter-label">Pisces</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="80%"></div>
                </div>
                <span className="meter-score">80%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♏</span>
                <span className="meter-label">Scorpio</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="74%"></div>
                </div>
                <span className="meter-score">74%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♊</span>
                <span className="meter-label">Gemini</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="48%"></div>
                </div>
                <span className="meter-score">48%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♒</span>
                <span className="meter-label">Aquarius</span>
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
              <div className="trait-icon">🌍</div>
              <div className="trait-text"><strong>Element</strong><span>Earth</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">♀</div>
              <div className="trait-text"><strong>Ruling Planet</strong><span>Venus (Shukra)</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">🔒</div>
              <div className="trait-text"><strong>Modality</strong><span>Fixed</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">💞</div>
              <div className="trait-text"><strong>Love Strength</strong><span>Devoted, Sensual, Steadfast</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">⚠️</div>
              <div className="trait-text"><strong>Love Challenge</strong><span>Possessive, Slow to Trust</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">✨</div>
              <div className="trait-text"><strong>Best Match</strong><span>Virgo, Capricorn, Cancer</span></div>
            </div>
          </div>
        </div>

        {/* TAURUS IN LOVE: OVERVIEW */}
        <div className="overview-section">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal">Understanding Taurus in Love</span>
            <h2 className="section-title reveal">The heart of the Bull —<br /><em>how Taurus loves</em></h2>
            <p className="section-lead reveal">Before exploring who Taurus is compatible with, it helps to understand how this sign experiences love. Venus — the planet of beauty, pleasure, and deep affection — rules Taurus entirely. This makes them one of the most romantic and sensually alive signs in the zodiac.</p>

            <div className="overview-grid">
              <div className="overview-card reveal">
                <div className="ov-icon">🌱</div>
                <div className="ov-title">Love Style: Slow Bloom, Total Commitment</div>
                <p className="ov-text">Taurus does not fall quickly. They observe, assess, and trust their instincts about a person's values and reliability. But once they commit, it is with their whole being. They are among the most loyal and devoted partners in the zodiac.</p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🛡️</div>
                <div className="ov-title">The Challenge: Possessiveness and Rigidity</div>
                <p className="ov-text">Taurus' depth of feeling can tip into possessiveness. Their Fixed nature makes them resistant to change — including change within a relationship. Partners who need variety or freedom can find Taurus suffocating if boundaries are not understood early.</p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">💎</div>
                <div className="ov-title">What Taurus Needs: Safety and Sincerity</div>
                <p className="ov-text">Taurus is deeply wounded by insincerity. They need a partner who means what they say, shows up consistently, and values the physical and emotional comfort of the relationship. Extravagance impresses them less than reliability.</p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🪐</div>
                <div className="ov-title">Vedic Lens: Venus, 2nd House &amp; Navamsa</div>
                <p className="ov-text">In Vedic astrology, Taurus (Vrishabha) is a Venus-ruled sign associated with the 2nd house of value, possession, and intimacy. The placement of Venus in the birth chart — its house, sign, and any planetary aspects — is the most critical factor in reading a Taurus native's love life. The Navamsa (D9) chart reveals whether that love potential converts into a lasting partnership.</p>
              </div>
            </div>
          </div>
        </div>

        {/* COMPATIBILITY BREAKDOWN */}
        <div className="compatibility-section">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal">Taurus with Each Sign</span>
            <h2 className="section-title reveal">Taurus compatibility —<br /><em>sign by sign</em></h2>
            <p className="section-lead reveal">Tap any sign below to explore a full breakdown: love chemistry, long-term potential, and the Vedic perspective that goes beyond Western sun-sign matching.</p>

            <div className="compat-layout">
              {/* VIRGO */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#4A7A30,#7ABE56)' }}>♍</div>
                  <div className="compat-sign-info">
                    <h3>Taurus + Virgo</h3>
                    <p>Earth meets Earth &middot; Aug 23 – Sep 22</p>
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
                      <p>Two earth signs who speak the same language of reliability, practicality, and quiet loyalty. There are no games between Taurus and Virgo — both value honesty and consistency over drama, which creates a deeply comfortable and trusting bond.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Among the highest in the zodiac. Virgo's attention to detail and Taurus' steadfastness complement each other beautifully. Both grow in depth rather than excitement — which suits them perfectly. This pairing ages very well.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Mercury rules Virgo and is a friend of Venus (Taurus' ruler) in Vedic astrology. This planetary friendship supports smooth communication and emotional alignment. Dr. Bajrangi looks at the 6th house connection between these signs for any service-based tensions that could surface long-term.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CAPRICORN */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#5A5A5A,#9A9A9A)' }}>♑</div>
                  <div className="compat-sign-info">
                    <h3>Taurus + Capricorn</h3>
                    <p>Earth meets Earth &middot; Dec 22 – Jan 19</p>
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
                      <p>Taurus and Capricorn understand each other at a fundamental level — both value security, ambition, and building something lasting. The attraction may not be impulsive or explosive, but it is real and grows steadily with time.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Exceptional. Both are builders by nature — of homes, families, wealth, and relationships. Capricorn's discipline and Taurus' patience create a partnership that strengthens through life stages rather than fading. A classic "grows into each other" pairing.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Saturn rules Capricorn and is a neutral planet toward Venus-ruled Taurus. However, Saturn's 9th-house connection from Taurus creates a fortune and dharma link between these signs that often manifests as shared goals and a deep sense of rightness in the relationship. Dasha periods here are particularly important.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CANCER */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#2B6CB0,#63B3ED)' }}>♋</div>
                  <div className="compat-sign-info">
                    <h3>Taurus + Cancer</h3>
                    <p>Earth meets Water &middot; Jun 21 – Jul 22</p>
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
                      <p>Earth and Water nourish each other — Cancer's nurturing warmth meets Taurus' grounded stability, and both find exactly what they need. This is a pairing that genuinely feels like home. Deep emotional warmth and physical affection come naturally here.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Very high. Both value family, domestic life, and emotional security above all else. They are unlikely to compete for the spotlight and are highly aligned on what a good life looks like. Conflicts tend to be emotional rather than fundamental — they can be navigated with openness.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>The Moon rules Cancer and has a strong, positive relationship with Venus in Vedic astrology. Both planets are associated with comfort, beauty, and emotional richness. When a Taurus native's Venus is well-placed and a Cancer native's Moon is strong, this combination is among the most harmonious in Vedic compatibility.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PISCES */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#3B82B0,#82C8E0)' }}>♓</div>
                  <div className="compat-sign-info">
                    <h3>Taurus + Pisces</h3>
                    <p>Earth meets Water &middot; Feb 19 – Mar 20</p>
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
                      <p>Pisces' romantic idealism and Taurus' sensuality make for a deeply tender pairing. Taurus gives Pisces the solid ground they dream of; Pisces gives Taurus the poetry and emotional depth that enriches their inner world. There is a genuine softness to this connection.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Good, with awareness. Taurus must guard against becoming Pisces' anchor while losing their own needs. Pisces must bring themselves into the real world consistently. When both are emotionally mature, this can be a beautifully complementary partnership.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Jupiter co-rules Pisces and is an exaltation planet in Cancer — the natural partner of Taurus in this axis. Jupiter's benefic influence on a Taurus native's chart, and Venus' exaltation in Pisces itself, creates a particularly beautiful spiritual and romantic resonance between these two signs.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SCORPIO */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#7B2D8B,#B05EC0)' }}>♏</div>
                  <div className="compat-sign-info">
                    <h3>Taurus + Scorpio</h3>
                    <p>Earth meets Water &middot; Opposite Signs &middot; Oct 23 – Nov 21</p>
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
                      <p>Opposites on the zodiac wheel — Taurus and Scorpio exert magnetic pull on each other. Scorpio is drawn to Taurus' solidity; Taurus is fascinated by Scorpio's intensity and mystery. The attraction is undeniable and often difficult to ignore.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>This is the axis of possession and desire. Both signs are Fixed — meaning power struggles can be stubborn and deep. Both are also fiercely loyal, which, when channelled well, creates a bond that few relationships can match in intensity and staying power.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Scorpio falls in Taurus' 7th house — the house of marriage and partnerships. This makes Scorpio the natural marriage partner for Taurus in Vedic astrology. Mars rules Scorpio; Venus rules Taurus — two planets in natural tension. Whether this manifests as passion or power struggle depends critically on both charts and current Dashas.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TAURUS + TAURUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,var(--sign-primary),var(--sign-secondary))' }}>♉</div>
                  <div className="compat-sign-info">
                    <h3>Taurus + Taurus</h3>
                    <p>Earth meets Earth &middot; Same Sign</p>
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
                      <p>Two Taurus natives immediately understand each other's need for comfort, beauty, and unhurried affection. The relationship can feel like effortless ease — warm, sensual, and deeply familiar. There's no need to explain or justify their pace.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Good, but watch for stagnation. Two Fixed Earth signs can become so settled that growth stops. Both must consciously introduce new experiences and resist the temptation to prioritise comfort over connection. When both commit to growth together, this pairing is very stable.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Even two Taurus sun signs will have significantly different birth charts — different Ascendants, Moon signs, and Dasha periods. Two Venus-ruled individuals together amplifies both the beauty and the indulgence of the sign. A chart reading reveals whether this creates harmony or excess.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LIBRA */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#2080D0,#60B8F0)' }}>♎</div>
                  <div className="compat-sign-info">
                    <h3>Taurus + Libra</h3>
                    <p>Earth meets Air &middot; Both Venus-Ruled &middot; Sep 23 – Oct 22</p>
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
                      <p>Both ruled by Venus — they share a love of beauty, art, comfort, and romance. There is genuine aesthetic and sensory compatibility here. Initial attraction is strong because both feel the other "gets" them on a surface level.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Moderate. Taurus loves depth and constancy; Libra loves variety and balance. Taurus finds Libra's indecisiveness frustrating; Libra finds Taurus' stubbornness stifling. To work, both must stretch beyond their comfort zone and honour the other's fundamentally different needs.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Though both are Venus-ruled, they express Venus very differently — Taurus as physical, sensory love; Libra as social, intellectual love. In Vedic astrology, Libra is Taurus' 6th house, the house of conflict and service. This often manifests as one partner feeling they are giving more than they receive.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ARIES */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#C0351A,#F26B3A)' }}>♈</div>
                  <div className="compat-sign-info">
                    <h3>Taurus + Aries</h3>
                    <p>Earth meets Fire &middot; Mar 21 – Apr 19</p>
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
                      <p>Aries' passion can initially sweep Taurus off their feet. But Aries moves at a pace that makes Taurus nervous, and Taurus' need to take stock can frustrate the Ram immensely. Physical chemistry is often strong; emotional pacing is the real test.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Requires significant compromise. Aries needs freedom and pace; Taurus needs security and constancy. Neither is wrong — they simply want different things. Mutual respect for these core differences, not just tolerance, is what determines this pairing's success.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Aries falls in Taurus' 12th house — the house of loss, isolation, and spiritual withdrawal. This can create an unconscious sense that the Aries partner is somehow a source of depletion rather than nourishment. Not impossible to navigate, but Taurus natives should have this checked carefully in a full reading.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GEMINI */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#1A9E6C,#4DD0A0)' }}>♊</div>
                  <div className="compat-sign-info">
                    <h3>Taurus + Gemini</h3>
                    <p>Earth meets Air &middot; May 21 – Jun 20</p>
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
                      <p>Gemini's wit and liveliness initially intrigue the sensory Taurus. But Gemini needs constant mental stimulation and variety — the very opposite of what Taurus' Fixed nature craves. The gap in emotional vs intellectual orientation becomes apparent quickly.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Long-Term Potential</h4>
                      <p>Low without real effort. Taurus sees Gemini as flighty; Gemini finds Taurus boring. Both judgements are unfair, but both are predictable. This pairing can work in a friendship context more easily than as a romantic partnership unless both charts show counterbalancing factors.</p>
                    </div>
                    <div className="compat-aspect">
                      <h4>Vedic Astrology Note</h4>
                      <p>Gemini is Taurus' 2nd house — the house of values, speech, and money. This means communication and financial compatibility are the real battleground here. Whether they fight about words or resources, the root issue is usually misaligned values. A Venus–Mercury conjunction or mutual aspect in both charts can significantly soften this.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.78rem', color: 'var(--text-soft)', marginTop: '18px', fontStyle: 'italic', textAlign: 'center' }}>
              Remaining signs (Leo, Sagittarius, Aquarius) follow the same analysis framework. For a personalised 12-sign breakdown based on your full chart, see the Love &amp; Relationship Report.
            </p>
          </div>
        </div>

        {/* SCORE SUMMARY */}
        <div className="score-section">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal" style={{ textAlign: 'center', display: 'block' }}>At a Glance</span>
            <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: '36px' }}>Taurus compatibility <em>scores</em></h2>
            <div className="score-grid">
              <div className="score-card reveal">
                <div className="score-sign">♍</div>
                <div className="score-name">Virgo</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="93%"></div>
                </div>
                <div className="score-pct">93%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♑</div>
                <div className="score-name">Capricorn</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="89%"></div>
                </div>
                <div className="score-pct">89%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♋</div>
                <div className="score-name">Cancer</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="86%"></div>
                </div>
                <div className="score-pct">86%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♓</div>
                <div className="score-name">Pisces</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="80%"></div>
                </div>
                <div className="score-pct">80%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♏</div>
                <div className="score-name">Scorpio</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="74%"></div>
                </div>
                <div className="score-pct">74%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♉</div>
                <div className="score-name">Taurus</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="70%"></div>
                </div>
                <div className="score-pct">70%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♈</div>
                <div className="score-name">Aries</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="55%"></div>
                </div>
                <div className="score-pct">55%</div>
              </div>
              <div className="score-card reveal">
                <div className="score-sign">♊</div>
                <div className="score-name">Gemini</div>
                <div className="score-bar-wrap">
                  <div className="score-bar" data-width="48%"></div>
                </div>
                <div className="score-pct">48%</div>
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-soft)', marginTop: '18px', fontStyle: 'italic' }}>
              General sun-sign compatibility only. Personalised scores require full birth chart analysis.
            </p>
          </div>
        </div>

        {/* REPORT CALLOUT */}
        <div className="report-callout-section">
          <div className="report-callout reveal">
            <div>
              <span className="rc-tag">For Taurus &middot; Personalised Report</span>
              <h2 className="rc-title">Your Venus placement tells a<br /><em>far deeper love story</em></h2>
              <p className="rc-desc">Sun sign compatibility reveals the broad strokes. Your Venus placement, its house and sign in your birth chart, the state of your 7th house lord, your Navamsa chart, and your current Dasha period determine what love actually looks like for you right now. Dr. Vinay Bajrangi's Love &amp; Relationship Report covers all of this — written, personalised, delivered within 3–5 days.</p>
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
              <a href="https://www.vinaybajrangi.com/calculator/love-calculator" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', justifyContent: 'center', width: '100%' }}>
                Try Free Calculator First &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* GEMSTONE WEARABLES FOR TAURUS */}
        <div className="gem-strip">
          <div className="gem-strip-inner">
            <span className="section-tag reveal gem-heading">Vedic Remedies for Taurus</span>
            <h2 className="section-title reveal">Gemstone wearables <em>for Taurus love</em></h2>
            <p className="section-lead reveal" style={{ marginBottom: 0 }}>Venus-ruled Taurus benefits from gemstones that strengthen emotional security, deepen affection, and attract a stable, sincere partner. These pendants and bracelets work best when prescribed after a full chart reading.</p>

            <div className="gem-strip-cards">
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">💎</span>
                <div className="gem-name">Diamond / White Sapphire Pendant</div>
                <p className="gem-desc">Diamond strengthens Venus — Taurus' ruling planet and the significator of love itself. Prescribed for Taurus natives experiencing delays in finding a partner or emotional coldness in an existing relationship.</p>
                <div className="gem-planet">♀ Venus &middot; Worn on Friday</div>
              </a>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">💚</span>
                <div className="gem-name">Emerald Bracelet / Pendant</div>
                <p className="gem-desc">Mercury rules Virgo — Taurus' most compatible partner — and an emerald bracelet can strengthen the Mercury–Venus axis, improving communication and attracting intellectually compatible relationships.</p>
                <div className="gem-planet">☿ Mercury &middot; Worn on Wednesday</div>
              </a>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">🤍</span>
                <div className="gem-name">Moonstone / Pearl Bracelet</div>
                <p className="gem-desc">The Moon and Venus are close friends in Vedic astrology. A pearl or moonstone bracelet strengthens emotional depth, attracts nurturing relationships, and is especially beneficial for Taurus natives with Cancer partners.</p>
                <div className="gem-planet">☽ Moon &middot; Worn on Monday</div>
              </a>
            </div>

            <div style={{ background: 'var(--white)', borderRadius: '14px', padding: '18px 22px', marginTop: '20px', borderLeft: '3px solid var(--saffron)', maxWidth: '680px', display: 'flex', gap: '12px', alignItems: 'flex-start' }} className="reveal">
              <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>⚠️</span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: '1.65' }}><strong style={{ color: 'var(--text-dark)' }}>Always consult before wearing.</strong> Gemstone remedies for love must be prescribed after analysing your full birth chart. Wearing an incorrect stone can weaken planetary energies rather than strengthen them. Dr. Bajrangi recommends all wearables only as part of a full consultation or written report.</p>
            </div>
          </div>
        </div>

        {/* SIGNS NAV */}
        <div className="signs-nav">
          <div className="signs-nav-inner">
            <h3 className="signs-nav-title">Explore compatibility for <em>other signs</em></h3>
            <div className="signs-nav-grid">
              <a href="https://www.vinaybajrangi.com/love-compatibility/aries" className="sign-nav-item"><span className="sni-symbol">♈</span><span className="sni-name">Aries</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/taurus" className="sign-nav-item active"><span className="sni-symbol">♉</span><span className="sni-name">Taurus</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/gemini" className="sign-nav-item"><span className="sni-symbol">♊</span><span className="sni-name">Gemini</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/cancer" className="sign-nav-item"><span className="sni-symbol">♋</span><span className="sni-name">Cancer</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/leo" className="sign-nav-item"><span className="sni-symbol">♌</span><span className="sni-name">Leo</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/virgo" className="sign-nav-item"><span className="sni-symbol">♍</span><span className="sni-name">Virgo</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/libra" className="sign-nav-item"><span className="sni-symbol">♎</span><span className="sni-name">Libra</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/scorpio" className="sign-nav-item"><span className="sni-symbol">♏</span><span className="sni-name">Scorpio</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/sagittarius" className="sign-nav-item"><span className="sni-symbol">♐</span><span className="sni-name">Sagittarius</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/capricorn" className="sign-nav-item"><span className="sni-symbol">♑</span><span className="sni-name">Capricorn</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/aquarius" className="sign-nav-item"><span className="sni-symbol">♒</span><span className="sni-name">Aquarius</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/pisces" className="sign-nav-item"><span className="sni-symbol">♓</span><span className="sni-name">Pisces</span></a>
            </div>
            <p style={{ textAlign: 'center', marginTop: '22px' }}>
              <a href="https://www.vinaybajrangi.com/love-compatibility" style={{ color: 'var(--saffron-deep)', fontWeight: 600, fontTarget: 'none', fontSize: '0.85rem', textDecoration: 'none' }}>&larr; Back to Love Compatibility Overview</a>
            </p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="bottom-cta">
          <div className="reveal">
            <h2>Ready to know who your stars<br />are pointing you toward?</h2>
            <p>Sun signs are only the surface. Discover your full Vedic compatibility story with Dr. Vinay Bajrangi.</p>
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
          --saffron: #E8821A;
          --saffron-deep: #C4600A;
          --saffron-light: #F5A84E;
          --gold: #D4A017;
          --gold-pale: #F7E9C8;
          --terracotta: #B85C38;
          --cream: #FDF6EC;
          --cream-dark: #F4E8D0;
          --text-dark: #1A0F00;
          --text-mid: #5A3A1A;
          --text-soft: #8B6A3E;
          --white: #FFFFFF;

          /* ── Taurus palette: deep forest-to-sage earth tones ── */
          --sign-primary: #2D6A2A;
          --sign-secondary: #5A9E55;
          --sign-accent: #8FCE7A;
          --sign-pale: #EAF4E5;
          --hero-dark1: #0B1E09;
          --hero-dark2: #1A3D16;
          --hero-mid: #2D6A2A;
          --hero-light: #5A9E55;

          --font-display: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          --font-body: var(--font-dm-sans), 'DM Sans', sans-serif;
          --shadow-warm: 0 8px 40px rgba(45,106,42,0.18);
          --shadow-card: 0 4px 20px rgba(45,106,42,0.09);
        }

        .page-wrapper {
          font-family: var(--font-body);
          background: var(--cream);
          color: var(--text-dark);
          overflow-x: hidden;
        }

        /* ── BREADCRUMB ─────────────────────────────── */
        .breadcrumb {
          background: var(--cream-dark);
          border-bottom: 1px solid rgba(212,160,23,0.25);
          padding: 12px 6vw;
          font-size: 0.78rem;
          color: var(--text-soft);
        }
        .breadcrumb a { color: var(--saffron-deep); text-decoration: none; }
        .breadcrumb a:hover { text-decoration: underline; }
        .breadcrumb span { margin: 0 6px; opacity: 0.5; }

        /* ── HERO ───────────────────────────────────── */
        .hero {
          background: linear-gradient(135deg,
            var(--hero-dark1) 0%,
            var(--hero-dark2) 30%,
            var(--hero-mid)   65%,
            var(--hero-light) 100%);
          padding: 72px 6vw 0;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 48px;
          align-items: end;
          min-height: 440px;
        }
        @media (max-width: 860px) {
          .hero { grid-template-columns: 1fr; padding-bottom: 48px; min-height: auto; }
          .hero-visual { display: none; }
        }

        /* large watermark glyph */
        .hero-bg-symbol {
          position: absolute;
          right: 30%;
          top: 50%;
          transform: translateY(-50%);
          font-size: 30vw;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          pointer-events: none;
          font-family: var(--font-display);
          user-select: none;
        }

        /* soft radial bloom */
        .hero-glow {
          position: absolute;
          width: 520px; height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(90,158,85,0.28) 0%, transparent 70%);
          top: 50%; left: 22%;
          transform: translate(-50%,-50%);
          pointer-events: none;
        }

        /* floating petal rings */
        .hero-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.05);
          pointer-events: none;
          animation: slowPulse 8s ease-in-out infinite alternate;
        }
        .hero-ring:nth-child(1) { width: 340px; height: 340px; top: 10%; left: 48%; }
        .hero-ring:nth-child(2) { width: 540px; height: 540px; top: -5%; left: 44%; animation-delay: 2s; }
        .hero-ring:nth-child(3) { width: 720px; height: 720px; top:-18%; left: 40%; animation-delay: 4s; }
        @keyframes slowPulse {
          from { opacity: 0.4; transform: scale(1); }
          to   { opacity: 0.8; transform: scale(1.03); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-bottom: 56px;
        }

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
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 50px;
          padding: 8px 20px 8px 10px;
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeUp 0.7s 0.2s forwards;
        }

        .sign-glyph {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--sign-primary), var(--sign-secondary));
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .sign-meta strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1.1;
        }
        .sign-meta span {
          font-size: 0.68rem;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.08em;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 700;
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 16px;
          opacity: 0;
          animation: fadeUp 0.8s 0.3s forwards;
        }
        .hero-title em { font-style: italic; color: var(--sign-accent); }

        .hero-desc {
          font-size: 1rem;
          font-weight: 300;
          color: rgba(255,255,255,0.7);
          line-height: 1.72;
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
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.13);
          color: rgba(255,255,255,0.72);
          font-size: 0.75rem; font-weight: 500;
          padding: 5px 14px; border-radius: 50px;
        }

        .hero-ctas {
          display: flex; gap: 14px; flex-wrap: wrap;
          opacity: 0; animation: fadeUp 0.8s 0.65s forwards;
        }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, var(--saffron) 0%, var(--gold) 100%);
          color: var(--white); font-family: var(--font-body); font-weight: 600;
          font-size: 0.88rem; letter-spacing: 0.03em;
          padding: 13px 26px; border-radius: 50px; text-decoration: none;
          border: none; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 18px rgba(232,130,26,0.38);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(232,130,26,0.5); }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--white);
          font-family: var(--font-body); font-weight: 500; font-size: 0.88rem;
          padding: 13px 26px; border-radius: 50px; text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.3);
          transition: background 0.2s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.08); }

        /* ── Hero right panel ── */
        .hero-visual {
          position: relative;
          z-index: 2;
          align-self: end;
        }
        .compat-meter-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border-radius: 20px 20px 0 0;
          padding: 28px 28px 32px;
        }
        .meter-title {
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em;
          text-transform: uppercase; color: rgba(255,255,255,0.45); margin-bottom: 20px;
        }
        .meter-row {
          display: flex; align-items: center; gap: 12px; margin-bottom: 12px;
        }
        .meter-sign { font-size: 1.1rem; width: 26px; flex-shrink: 0; text-align: center; }
        .meter-label { font-size: 0.78rem; color: rgba(255,255,255,0.65); width: 78px; flex-shrink: 0; }
        .meter-bar-bg {
          flex: 1; height: 6px; border-radius: 3px;
          background: rgba(255,255,255,0.1); overflow: hidden;
        }
        .meter-bar {
          height: 100%; border-radius: 3px;
          background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent));
          transform-origin: left; transform: scaleX(0);
          transition: transform 1s ease;
        }
        .meter-bar.animate { transform: scaleX(1); }
        .meter-score { font-size: 0.72rem; font-weight: 600; color: var(--sign-accent); width: 28px; text-align: right; flex-shrink: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── TRAIT STRIP ─────────────────────────────── */
        .trait-strip {
          background: var(--sign-pale);
          border-top: 2px solid rgba(45,106,42,0.18);
          border-bottom: 2px solid rgba(45,106,42,0.18);
          padding: 22px 6vw;
        }
        .trait-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; gap: 36px; flex-wrap: wrap; align-items: center;
        }
        .trait-item { display: flex; align-items: center; gap: 10px; }
        .trait-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, var(--sign-primary), var(--sign-secondary));
          display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; flex-shrink: 0;
        }
        .trait-text strong {
          display: block; font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--sign-primary); margin-bottom: 1px;
        }
        .trait-text span { font-size: 0.83rem; color: var(--text-mid); font-weight: 500; }

        /* ── SECTION SCAFFOLDING ─────────────────────── */
        .reveal {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        .section-tag {
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--saffron); display: block; margin-bottom: 12px;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(1.9rem, 3.2vw, 2.7rem);
          font-weight: 700; line-height: 1.18; color: var(--text-dark); margin-bottom: 14px;
        }
        .section-title em { font-style: italic; color: var(--sign-primary); }

        .section-lead {
          font-size: 1rem; font-weight: 300; color: var(--text-mid);
          line-height: 1.75; max-width: 660px; margin-bottom: 48px;
        }

        /* ── OVERVIEW CARDS ──────────────────────────── */
        .overview-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 48px;
        }
        @media (max-width: 720px) { .overview-grid { grid-template-columns: 1fr; } }

        .overview-card {
          background: var(--white); border-radius: 18px; padding: 28px;
          border: 1.5px solid var(--cream-dark);
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .overview-card:hover { box-shadow: var(--shadow-warm); transform: translateY(-2px); }
        .ov-icon { font-size: 1.6rem; margin-bottom: 12px; }
        .ov-title {
          font-family: var(--font-display); font-size: 1.1rem;
          font-weight: 700; color: var(--text-dark); margin-bottom: 8px;
        }
        .ov-text { font-size: 0.87rem; color: var(--text-mid); line-height: 1.68; }

        /* ── COMPATIBILITY ACCORDIONS ────────────────── */
        .compat-layout { display: flex; flex-direction: column; gap: 14px; }

        .compat-card {
          background: var(--white); border-radius: 20px;
          border: 1.5px solid var(--cream-dark); overflow: hidden;
          transition: box-shadow 0.25s;
        }
        .compat-card:hover { box-shadow: var(--shadow-warm); }

        .compat-header {
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          align-items: center; gap: 16px; padding: 20px 24px;
          cursor: pointer; user-select: none;
        }

        .compat-sign-icon {
          width: 46px; height: 46px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem; flex-shrink: 0;
        }
        .compat-sign-info h3 {
          font-family: var(--font-display); font-size: 1.1rem;
          font-weight: 700; color: var(--text-dark); margin-bottom: 3px;
        }
        .compat-sign-info p { font-size: 0.72rem; color: var(--text-soft); font-weight: 500; }

        .compat-level { display: flex; flex-direction: column; align-items: center; gap: 4px; flex-shrink: 0; }
        .compat-stars { font-size: 0.8rem; color: var(--gold); letter-spacing: 0.05em; }
        .compat-label {
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; padding: 3px 10px; border-radius: 50px;
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
          border-top: 1px solid var(--cream-dark);
          padding: 24px 24px 28px;
          display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;
        }
        @media (max-width: 660px) { .compat-body-inner { grid-template-columns: 1fr; } }

        .compat-aspect h4 {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--sign-primary); margin-bottom: 6px;
        }
        .compat-aspect p { font-size: 0.83rem; color: var(--text-mid); line-height: 1.62; }

        /* ── SECTION SCALED DOWN DESKTOP PADDINGS ── */
        .overview-section {
          background: var(--cream);
          padding: 60px 6vw 30px;
        }
        .compatibility-section {
          background: var(--cream);
          padding: 0 6vw 60px;
        }
        .report-callout-section {
          background: var(--cream);
          padding: 45px 6vw 0;
        }
        .score-section {
          background: var(--cream-dark);
          padding: 60px 6vw;
        }
        .gem-strip {
          background: var(--cream);
          padding: 0 6vw 60px;
        }
        .gem-heading {
          padding-top: 45px;
          display: block;
        }
        .signs-nav {
          background: var(--cream-dark);
          padding: 45px 6vw;
          border-top: 1px solid rgba(212,160,23,0.2);
        }
        .bottom-cta {
          background: linear-gradient(135deg, var(--sign-primary) 0%, #1A5C17 50%, #3A7A35 100%);
          padding: 50px 6vw;
          text-align: center;
        }

        /* ── SCORE SUMMARY ───────────────────────────── */
        .score-grid {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4,1fr); gap: 16px;
        }
        @media (max-width: 720px) { .score-grid { grid-template-columns: repeat(2,1fr); } }

        .score-card {
          background: var(--white); border-radius: 18px; padding: 22px 18px;
          text-align: center; border: 1.5px solid var(--cream-dark);
          transition: all 0.3s;
        }
        .score-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-warm); }
        .score-sign { font-size: 1.8rem; margin-bottom: 6px; }
        .score-name { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
        .score-bar-wrap { height: 5px; background: var(--cream-dark); border-radius: 3px; overflow: hidden; margin-bottom: 6px; }
        .score-bar {
          height: 100%; border-radius: 3px;
          background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent));
          transform-origin: left; transform: scaleX(0);
          transition: transform 1.2s ease;
        }
        .score-bar.animate { transform: scaleX(1); }
        .score-pct { font-size: 0.72rem; font-weight: 600; color: var(--text-soft); }

        /* ── REPORT CALLOUT ──────────────────────────── */
        .report-callout {
          background: linear-gradient(135deg, #0B1E09 0%, #1A3D16 45%, #3A7A35 100%);
          border-radius: 24px; padding: 48px 52px;
          display: grid; grid-template-columns: 1fr auto; gap: 36px;
          align-items: center;
          max-width: 1100px; margin: 0 auto 0;
          position: relative; overflow: hidden;
        }
        .report-callout::before {
          content: '♉';
          position: absolute; right: 42%; top: 50%; transform: translateY(-50%);
          font-size: 220px; color: rgba(255,255,255,0.025);
          font-family: var(--font-display); pointer-events: none; line-height: 1;
        }
        @media (max-width: 760px) {
          .report-callout { grid-template-columns: 1fr; padding: 32px 24px; }
          .report-callout::before { display: none; }
        }
        .rc-tag {
          display: inline-block; background: rgba(255,255,255,0.1);
          color: var(--sign-accent); font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          padding: 4px 14px; border-radius: 50px; margin-bottom: 16px;
        }
        .rc-title {
          font-family: var(--font-display); font-size: clamp(1.5rem,2.5vw,2.1rem);
          font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.2;
        }
        .rc-title em { font-style: italic; color: var(--sign-accent); }
        .rc-desc {
          font-size: 0.9rem; font-weight: 300; color: rgba(255,255,255,0.7);
          line-height: 1.7; max-width: 480px; margin-bottom: 24px;
        }
        .rc-side { text-align: center; flex-shrink: 0; }
        .rc-price { background: var(--gold-pale); border-radius: 14px; padding: 20px 28px; margin-bottom: 14px; }
        .rc-price .from { font-size: 0.68rem; color: var(--text-soft); text-transform: uppercase; letter-spacing: 0.1em; }
        .rc-price .amount { font-family: var(--font-display); font-size: 2rem; font-weight: 700; color: var(--saffron-deep); line-height: 1.1; }
        .rc-price .note { font-size: 0.68rem; color: var(--text-soft); margin-top: 4px; line-height: 1.4; }

        /* ── GEMSTONE STRIP ──────────────────────────── */
        .gem-strip-inner { max-width: 1100px; margin: 0 auto; }
        .gem-strip-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 36px; }
        @media (max-width: 660px) { .gem-strip-cards { grid-template-columns: 1fr; } }

        .gem-card {
          background: var(--white); border-radius: 16px; padding: 24px 20px;
          border: 1.5px solid var(--cream-dark); text-decoration: none; display: block;
          transition: all 0.3s;
        }
        .gem-card:hover { box-shadow: var(--shadow-warm); transform: translateY(-3px); }
        .gem-emoji { font-size: 1.8rem; margin-bottom: 10px; display: block; }
        .gem-name { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
        .gem-desc { font-size: 0.8rem; color: var(--text-mid); line-height: 1.6; margin-bottom: 10px; }
        .gem-planet { font-size: 0.68rem; font-weight: 600; color: var(--sign-primary); text-transform: uppercase; letter-spacing: 0.08em; }

        /* ── SIGNS NAV ───────────────────────────────── */
        .signs-nav-inner { max-width: 1100px; margin: 0 auto; }
        .signs-nav-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--text-dark); margin-bottom: 22px; text-align: center; }
        .signs-nav-title em { font-style: italic; color: var(--saffron-deep); }
        .signs-nav-grid { display: grid; grid-template-columns: repeat(12,1fr); gap: 10px; }
        @media (max-width: 860px) { .signs-nav-grid { grid-template-columns: repeat(6,1fr); } }
        @media (max-width: 440px) { .signs-nav-grid { grid-template-columns: repeat(4,1fr); } }

        .sign-nav-item {
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          padding: 12px 6px; background: var(--white); border-radius: 14px;
          border: 1.5px solid var(--cream-dark); text-decoration: none; transition: all 0.2s;
        }
        .sign-nav-item.active { border-color: var(--sign-secondary); background: var(--sign-pale); }
        .sign-nav-item:hover:not(.active) { border-color: var(--saffron-light); box-shadow: 0 4px 16px rgba(232,130,26,0.14); transform: translateY(-2px); }
        .sni-symbol { font-size: 1.2rem; }
        .sni-name { font-size: 0.62rem; font-weight: 600; color: var(--text-mid); letter-spacing: 0.04em; }

        /* ── BOTTOM CTA ──────────────────────────────── */
        .bottom-cta::before {
          content: '✦ ✦ ✦'; font-size: 0.7rem;
          color: rgba(255,255,255,0.18); letter-spacing: 1.5em; display: block; margin-bottom: 24px;
        }
        .bottom-cta h2 {
          font-family: var(--font-display); font-size: clamp(1.7rem,3.5vw,2.7rem);
          font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.2;
        }
        .bottom-cta p {
          font-size: 0.95rem; color: rgba(255,255,255,0.72);
          max-width: 440px; margin: 0 auto 28px; line-height: 1.65;
        }
        .bottom-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-white {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--white); color: var(--sign-primary);
          font-weight: 700; font-size: 0.88rem;
          padding: 13px 26px; border-radius: 50px; text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
        .btn-outline-white {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--white); font-weight: 500; font-size: 0.88rem;
          padding: 13px 26px; border-radius: 50px; text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.4); transition: background 0.2s;
        }
        .btn-outline-white:hover { background: rgba(255,255,255,0.1); }

        .section-divider { border: none; border-top: 1px solid rgba(212,160,23,0.15); margin: 0; }

        /* ── RESPONSIVE COMPACT OVERRIDES CASCADING CORRECTLY AT THE END ── */
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
            padding: 0 4vw 24px;
          }
          .report-callout-section {
            padding: 20px 4vw 0;
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
