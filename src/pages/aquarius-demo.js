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

export default function AquariusDemo() {
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
        <title>Aquarius Love Compatibility With All Signs – Dr. Vinay Bajrangi</title>
        <meta
          name="description"
          content="Which zodiac sign is most compatible with Aquarius in love and marriage? Vedic astrology insights on Aquarius compatibility with all 12 signs by Dr. Vinay Bajrangi."
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
          Aquarius Love Compatibility
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-bg-symbol">♒</div>
          <div className="hero-glow"></div>
          <div className="hero-glow-b"></div>
          {/* Electric field lines */}
          <div className="field-line"></div>
          <div className="field-line"></div>
          <div className="field-line"></div>
          <div className="field-line"></div>
          <div className="field-line"></div>
          {/* Circuit nodes */}
          <div className="node-dot"></div>
          <div className="node-dot"></div>
          <div className="node-dot"></div>
          <div className="node-dot"></div>
          <div className="node-dot"></div>

          <div className="hero-content">
            <div className="hero-eyebrow">
              <a href="https://www.vinaybajrangi.com/love-compatibility">Love Compatibility</a>
              <span className="sep">&rsaquo;</span>
              <span>Aquarius</span>
            </div>

            <div className="hero-sign-badge">
              <span className="sign-glyph">♒</span>
              <div className="sign-meta">
                <strong>Aquarius &middot; The Water Bearer</strong>
                <span>January 20 – February 18 &middot; Air Sign &middot; Saturn &amp; Uranus-Ruled</span>
              </div>
            </div>

            <h1 className="hero-title">
              Aquarius Love Compatibility<br /><em>with All 12 Signs</em>
            </h1>
            <p className="hero-desc">
              Aquarius loves like no other sign — with their mind first, their ideals second, and their heart quietly, privately, after a long time. Which signs can inhabit that vast inner world? Which will mistake their distance for indifference? And what does Vedic astrology reveal about the Water Bearer's love life that goes far beyond the sun sign?
            </p>

            <div className="hero-pills">
              <span className="pill">💨 Air Element</span>
              <span className="pill">♄ Saturn &amp; Uranus</span>
              <span className="pill">🔒 Fixed Modality</span>
              <span className="pill">Best with: Gemini, Libra, Aries</span>
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
                <span className="meter-sign">♊</span>
                <span className="meter-label">Gemini</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="92%"></div>
                </div>
                <span className="meter-score">92%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♎</span>
                <span className="meter-label">Libra</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="90%"></div>
                </div>
                <span className="meter-score">90%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♈</span>
                <span className="meter-label">Aries</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="84%"></div>
                </div>
                <span className="meter-score">84%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♐</span>
                <span className="meter-label">Sagittarius</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="80%"></div>
                </div>
                <span className="meter-score">80%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♒</span>
                <span className="meter-label">Aquarius</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="72%"></div>
                </div>
                <span className="meter-score">72%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♌</span>
                <span className="meter-label">Leo</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="65%"></div>
                </div>
                <span className="meter-score">65%</span>
              </div>
              <div className="meter-row">
                <span className="meter-sign">♏</span>
                <span className="meter-label">Scorpio</span>
                <div className="meter-bar-bg">
                  <div className="meter-bar" data-width="36%"></div>
                </div>
                <span className="meter-score">36%</span>
              </div>
            </div>
          </div>
        </section>

        {/* TRAIT STRIP — dark background for this sign */}
        <div className="trait-strip">
          <div className="trait-inner">
            <div className="trait-item">
              <div className="trait-icon">💨</div>
              <div className="trait-text"><strong>Element</strong><span>Air</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">♄</div>
              <div className="trait-text"><strong>Ruling Planets</strong><span>Saturn &amp; Uranus</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">🔒</div>
              <div className="trait-text"><strong>Modality</strong><span>Fixed</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">⚡</div>
              <div className="trait-text"><strong>Love Strength</strong><span>Original, Loyal, Visionary</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">⚠️</div>
              <div className="trait-text"><strong>Love Challenge</strong><span>Emotionally Detached, Unpredictable</span></div>
            </div>
            <div className="trait-item">
              <div className="trait-icon">✨</div>
              <div className="trait-text"><strong>Best Match</strong><span>Gemini, Libra, Aries</span></div>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* AQUARIUS IN LOVE: OVERVIEW */}
        <div style={{ background: 'var(--white)', padding: '80px 6vw 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal">Understanding Aquarius in Love</span>
            <h2 className="section-title reveal">The heart of the Water Bearer —<br /><em>how Aquarius loves</em></h2>
            <p className="section-lead reveal">Aquarius is ruled by Saturn in Vedic astrology — and in Western tradition, by Uranus, the planet of revolution and electricity. This creates the most paradoxical love nature in the zodiac: a Fixed Air sign that is simultaneously deeply loyal and constitutionally unable to be conventional. Aquarius does not love against type — they love ahead of their time.</p>

            <div className="overview-grid">
              <div className="overview-card reveal">
                <div className="ov-icon">⚡</div>
                <div className="ov-title">Love Style: Intellectual, Original, Fiercely Free</div>
                <p className="ov-text">Aquarius falls in love through the mind. If they cannot admire your intellect, respect your independence, or share in a vision of a better world with you, the connection will not sustain. But when those conditions are met, Aquarius becomes one of the zodiac's most loyal and devoted partners — though rarely in any conventional way.</p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🌌</div>
                <div className="ov-title">The Challenge: Emotional Distance</div>
                <p className="ov-text">Aquarius operates from the altitude of ideas — which can leave partners feeling unseen at the level of personal, day-to-day emotion. They are not cold; they are simply more fluent in concepts than in feelings. Partners who need constant emotional reassurance will find Aquarius' affectionate but abstract love difficult to receive.</p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🌍</div>
                <div className="ov-title">What Aquarius Needs: A Fellow Visionary</div>
                <p className="ov-text">Aquarius needs a partner who has their own inner world, their own views, and their own work in the world. They are repelled by dependency and bored by convention. A partner who can engage them in genuine debate, pursue their own vision alongside Aquarius' own, and offer freedom without abandonment will receive the Water Bearer's extraordinary, unconventional devotion.</p>
              </div>
              <div className="overview-card reveal">
                <div className="ov-icon">🪐</div>
                <div className="ov-title">Vedic Lens: Saturn, 11th House &amp; Navamsa</div>
                <p className="ov-text">In Vedic astrology, Aquarius (Kumbha) is ruled by Saturn and associated with the 11th house of networks, collective goals, and long-term vision. The 7th house lord for Aquarius Lagna is the Sun (ruling Leo) — meaning the ideal partner archetype for Aquarius is Solar: warm, confident, generous, and self-assured. This is significant: Aquarius often intellectually rejects the Leo-type partner, yet astrologically they are drawn to exactly that solar warmth that balances their own cool detachment. The Navamsa chart is essential to verify whether this manifests in the actual marriage.</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* COMPATIBILITY BREAKDOWN */}
        <div style={{ background: 'var(--white)', padding: '40px 6vw 80px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-tag reveal">Aquarius with Each Sign</span>
            <h2 className="section-title reveal">Aquarius compatibility —<br /><em>sign by sign</em></h2>
            <p className="section-lead reveal">Tap any sign to reveal a full breakdown — love chemistry, long-term potential, and the Vedic astrology angle that goes far beyond sun-sign generalisation.</p>

            <div className="compat-layout">

              {/* GEMINI */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#3A8A2A,#5CB84A)' }}>♊</div>
                  <div className="compat-sign-info"><h3>Aquarius + Gemini</h3><p>Air meets Air &middot; May 21 – Jun 20</p></div>
                  <div className="compat-level"><div class="compat-stars">★★★★★</div><span className="compat-label label-excellent">Excellent</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Two air signs who meet in the realm of ideas and never tire of each other's company. Gemini's quicksilver curiosity and verbal brilliance keeps Aquarius genuinely stimulated; Aquarius' depth of vision and originality gives Gemini's restless intelligence a worthy destination. The mental connection is immediate, multi-directional, and almost impossible to exhaust.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Very high. Neither is possessive, neither is emotionally suffocating, and both understand the other's need for intellectual freedom. Both must consciously develop emotional depth alongside their exceptional mental connection — a relationship built only on ideas eventually runs thin. When both bring their genuine feelings into the conversation, this becomes extraordinary.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mercury rules Gemini and has a friendly relationship with Saturn in Vedic astrology — providing ease in communication and shared intellectual standards. Gemini is Aquarius' 5th house — the house of romance, love, and creativity — making Gemini the natural romantic interest and love fulfilment sign for Aquarius Lagna individuals. When both Mercury and Saturn are strong, this is one of Vedic astrology's most mentally alive and romantically compatible pairings.</p></div>
                </div></div>
              </div>

              {/* LIBRA */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#5558A8,#7B7ECC)' }}>♎</div>
                  <div className="compat-sign-info"><h3>Aquarius + Libra</h3><p>Air meets Air &middot; Sep 23 – Oct 22</p></div>
                  <div className="compat-level"><div class="compat-stars">★★★★★</div><span className="compat-label label-excellent">Excellent</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Both idealistic, both fair-minded, both drawn to beauty and meaningful connection. Libra's social grace and diplomatic elegance appeals to Aquarius' love of refined, principled engagement; Aquarius' originality and visionary thinking gives Libra's need for meaningful partnership a genuinely inspiring context. Both are naturally kind and neither is petty.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Strong. Libra's need for beauty and harmony aligns well with Aquarius' need for a refined, intellectually alive partnership. Libra must develop the courage to voice real disagreement — Aquarius respects honest debate and loses respect for those who only agree. Aquarius must provide more consistent personal warmth than their nature typically inclines them to give.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Venus rules Libra and Saturn is exalted in Libra — a profound Vedic signal of deep resonance between Saturn's discipline and Libra's domain of fairness and partnership. Libra is Aquarius' 9th house — the house of fortune, higher wisdom, and dharma — one of the most auspicious placements in Vedic astrology. Libra partners bring exceptional good fortune and philosophical depth into Aquarius' life, making this pairing both romantically and karmically significant.</p></div>
                </div></div>
              </div>

              {/* ARIES */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#C0351A,#F26B3A)' }}>♈</div>
                  <div className="compat-sign-info"><h3>Aquarius + Aries</h3><p>Air meets Fire &middot; Mar 21 – Apr 19</p></div>
                  <div className="compat-level"><div class="compat-stars">★★★★☆</div><span className="compat-label label-good">Good</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Air feeds Fire — Aquarius' ideas and vision give Aries' passion a direction; Aries' bold action turns Aquarius' concepts into reality. Both are independent, both are courageous, and neither tries to cage the other. The pairing crackles with mutual respect and forward momentum.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good. Aries' directness and decisiveness complements Aquarius' more detached strategic thinking. Aries must respect Aquarius' need for intellectual freedom; Aquarius must provide the personal emotional warmth that Aries needs to feel genuinely loved rather than merely respected. When both achieve this, the relationship has remarkable energy.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mars rules Aries and is neutral toward Saturn in Vedic astrology. Aries is Aquarius' 3rd house — the house of communication, courage, and immediate creative action. Aries partners push Aquarius to act on their visions with directness and urgency, transforming Aquarius' broad intellectual plans into tangible, immediate impact. Dr. Bajrangi notes this 3rd house placement makes the partnership particularly productive for collaborative projects and creative ventures.</p></div>
                </div></div>
              </div>

              {/* SAGITTARIUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#9A7640,#BFA060)' }}>♐</div>
                  <div className="compat-sign-info"><h3>Aquarius + Sagittarius</h3><p>Air meets Fire &middot; Nov 22 – Dec 21</p></div>
                  <div className="compat-level"><div class="compat-stars">★★★★☆</div><span className="compat-label label-good">Good</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>A pairing of visionaries — Aquarius thinks in systems and futures; Sagittarius thinks in philosophies and horizons. Both love big ideas, both love freedom, and both are fundamentally optimistic about humanity. The intellectual and spiritual resonance is genuine and lasting.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good. Neither is possessive, neither is petty, and both bring genuine warmth to each other's vision. Sagittarius' blunt honesty aligns with Aquarius' commitment to truth — making communication refreshingly direct. Both must develop emotional presence alongside their shared love of ideas to ensure the relationship has personal as well as conceptual depth.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Jupiter rules Sagittarius and is a benefic planet with a complex relationship to Saturn in Vedic astrology — both are regarded as planets of wisdom, one through expansion and one through discipline. Sagittarius is Aquarius' 11th house — the house of gains, long-term goals, and community networks. Sagittarius partners bring significant social expansion, professional gains, and collective achievement into Aquarius' already-expansive world. A pairing that achieves remarkable things together in the external world.</p></div>
                </div></div>
              </div>

              {/* LEO (opposite) */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#C0392B,#E05A4E)' }}>♌</div>
                  <div className="compat-sign-info"><h3>Aquarius + Leo</h3><p>Air meets Fire &middot; Opposite Signs &middot; Jul 23 – Aug 22</p></div>
                  <div className="compat-level"><div class="compat-stars">★★★★☆</div><span class="compat-label label-good">Good</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Opposites on the zodiac wheel — and profoundly complementary in unexpected ways. Leo's solar warmth and generous confidence fascinates Aquarius; Aquarius' originality and visionary intelligence captivates Leo. Each offers what the other cannot access alone. The attraction is electric and often disorienting for both.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good when both mature. Leo must give Aquarius genuine freedom without interpreting it as rejection; Aquarius must give Leo consistent, visible, personal admiration rather than the abstract respect they naturally offer. The king and the visionary — this pairing can achieve remarkable things when both learn each other's love language.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>The Sun rules Leo and is the 7th house lord for Aquarius Lagna — the direct ruler of marriage for Aquarius in Vedic astrology. This makes Leo the natural marriage partner for Aquarius Lagna natives. Leo is Aquarius' 7th house — the house of committed partnership — confirming the deep marital significance despite the personality tension. Saturn and the Sun are natural enemies in Vedic astrology, which explains why this obvious marriage axis requires significant conscious effort from both partners to maintain warmth and mutual respect over time.</p></div>
                </div></div>
              </div>

              {/* AQUARIUS + AQUARIUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,var(--sign-primary),var(--sign-secondary))' }}>♒</div>
                  <div className="compat-sign-info"><h3>Aquarius + Aquarius</h3><p>Air meets Air &middot; Same Sign</p></div>
                  <div className="compat-level"><div class="compat-stars">★★★★☆</div><span class="compat-label label-good">Good</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Two Aquarians immediately understand each other's need for independence, their discomfort with convention, and their love of ideas over emotion. The intellectual resonance is instant and deeply satisfying. Neither tries to change or possess the other. The freedom within the relationship is genuine and mutual.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Good when both consciously develop emotional intimacy. Two Aquarians can create a remarkable intellectual partnership that builds extraordinary things — while quietly starving each other of personal warmth and vulnerability. Both must schedule emotional presence with the same intentionality they give to their shared visions. Fixed Air doubled means the relationship can become surprisingly rigid if neither bends first.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Two Saturn-ruled charts amplify both Saturn's gifts (discipline, vision, longevity) and its emotional shadows (detachment, coldness, delay in personal feeling). Dr. Bajrangi looks at both Moon sign placements carefully — if both Moon signs are in warm, emotionally expressive positions, the relationship has genuine personal depth beneath its exceptional intellectual surface.</p></div>
                </div></div>
              </div>

              {/* VIRGO */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#5C6E2A,#849A3E)' }}>♍</div>
                  <div className="compat-sign-info"><h3>Aquarius + Virgo</h3><p>Air meets Earth &middot; Aug 23 – Sep 22</p></div>
                  <div className="compat-level"><div class="compat-stars">★★★☆☆</div><span class="compat-label label-moderate">Moderate</span></div>
                  <span class="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Both are analytical, both care deeply about truth and improvement. The intellectual respect is real. But Virgo's focus is the close-up — the detail, the practical, the immediate — while Aquarius operates at the wide-angle: the systemic, the future, the collective. They talk about improvement but rarely to the same object.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate. Aquarius finds Virgo's attention to detail and critical mode confining; Virgo finds Aquarius' detachment and unpredictability difficult to trust. Both must develop genuine curiosity about the other's way of engaging the world rather than treating it as inferior to their own. When both manage this, the relationship has genuine analytical depth and practical complementarity.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mercury rules Virgo and has a friendly relationship with Saturn. Virgo is Aquarius' 8th house — the house of transformation, hidden resources, and deep bonds through crisis. This placement means Virgo relationships are intensely transformative for Aquarius — often bringing unexpected upheaval in financial or emotional areas that Aquarius thought were settled. The 8th house connection makes Virgo significant to Aquarius' deepest personal evolution, however uncomfortable that process may be.</p></div>
                </div></div>
              </div>

              {/* TAURUS */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#2D6A2A,#5A9E55)' }}>♉</div>
                  <div className="compat-sign-info"><h3>Aquarius + Taurus</h3><p>Air meets Earth &middot; Apr 20 – May 20</p></div>
                  <div className="compat-level"><div class="compat-stars">★★★☆☆</div><span class="compat-label label-moderate">Moderate</span></div>
                  <span class="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Two Fixed signs whose stubbornness runs in entirely different directions. Taurus is Fixed Earth — stable, sensory, and tradition-oriented. Aquarius is Fixed Air — visionary, unconventional, and future-focused. The initial fascination (Taurus grounds Aquarius; Aquarius expands Taurus) rarely survives the fundamental lifestyle incompatibility.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Challenging. Taurus needs security, routine, and emotional consistency — the very things Aquarius finds most limiting. Aquarius needs freedom, innovation, and resistance to any form of possessiveness — the very things Taurus struggles most to provide. Works best when both are at life stages where they have developed some flexibility in their core Fixed natures.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Venus rules Taurus and has a complex relationship with Saturn. Taurus is Aquarius' 4th house — the house of home, mother, and emotional foundations. Taurus partners often play a defining role in Aquarius' sense of domestic security and emotional roots — providing the stability Aquarius secretly needs more than they admit, or disrupting it entirely. Dr. Bajrangi notes that the 4th house placement makes this relationship emotionally significant even when intellectually incompatible.</p></div>
                </div></div>
              </div>

              {/* CANCER */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#2B6CB0,#63B3ED)' }}>♋</div>
                  <div className="compat-sign-info"><h3>Aquarius + Cancer</h3><p>Air meets Water &middot; Jun 21 – Jul 22</p></div>
                  <div className="compat-level"><div class="compat-stars">★★★☆☆</div><span class="compat-label label-moderate">Moderate</span></div>
                  <span class="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Cancer loves personally, deeply, and with total emotional investment. Aquarius loves universally, intellectually, and with consistent emotional distance. Both are deeply caring — but at entirely different scales. Cancer cares for the person in front of them; Aquarius cares for humanity. This mismatch in intimacy style is the central challenge.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate with significant growth on both sides. Aquarius must develop genuine personal emotional availability — Cancer cannot sustain a relationship on shared ideals alone. Cancer must develop trust in Aquarius' unconventional but sincere form of loyalty without interpreting distance as abandonment. When both achieve this, there is unexpected tenderness in this pairing.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>The Moon rules Cancer and is Saturn's natural enemy in Vedic astrology — one of the most significant planetary tensions in the system. Cancer is Aquarius' 6th house — the house of conflict, health, and service. In Vedic astrology, 6th house relationships tend to carry themes of ongoing effort, health concerns, or a service dynamic. Aquarius natives frequently describe Cancer relationships as emotionally requiring while also containing moments of extraordinary tenderness that are difficult to find elsewhere.</p></div>
                </div></div>
              </div>

              {/* PISCES */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#3B82B0,#82C8E0)' }}>♓</div>
                  <div className="compat-sign-info"><h3>Aquarius + Pisces</h3><p>Air meets Water &middot; Feb 19 – Mar 20</p></div>
                  <div className="compat-level"><div class="compat-stars">★★★☆☆</div><span class="compat-label label-moderate">Moderate</span></div>
                  <span class="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Adjacent signs with a shared idealism — both are drawn to human transcendence, though Aquarius approaches it intellectually and Pisces approaches it spiritually. The initial resonance around shared visions of a more compassionate world can be strong. But Pisces needs oceanic emotional immersion; Aquarius needs cool intellectual space. The needs diverge significantly in practice.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate. Pisces' emotional fluidity can feel like instability to the rational Aquarius; Aquarius' detachment can feel like abandonment to the sensitive Pisces. When both operate from maturity — Aquarius developing emotional presence, Pisces developing intellectual clarity — the relationship has a spiritually poetic quality that neither finds easily elsewhere.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Jupiter rules Pisces and is neutral toward Saturn in Vedic astrology. Pisces is Aquarius' 2nd house — the house of family, accumulated wealth, and speech. Pisces partners often play a significant role in shaping Aquarius' financial life and family relationships. Dr. Bajrangi notes that the 2nd house placement means this relationship frequently carries material significance — the two can have a profound impact on each other's resources and family structures even when the romantic alignment is imperfect.</p></div>
                </div></div>
              </div>

              {/* CAPRICORN */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#8A5A6A,#B07A8A)' }}>♑</div>
                  <div className="compat-sign-info"><h3>Aquarius + Capricorn</h3><p>Air meets Earth &middot; Dec 22 – Jan 19</p></div>
                  <div className="compat-level"><div class="compat-stars">★★★☆☆</div><span class="compat-label label-moderate">Moderate</span></div>
                  <span class="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Adjacent signs with shared Saturn rulership in Vedic tradition — both are disciplined, long-term thinkers who respect competence and commitment. The intellectual rapport can be genuine. But Capricorn builds for personal legacy; Aquarius builds for collective progress. The orientation of their shared ambition creates as many tensions as synergies.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Moderate. Capricorn needs emotional reliability and personal commitment; Aquarius needs freedom and collective purpose. Aquarius finds Capricorn conventional and emotionally closed; Capricorn finds Aquarius unpredictable and insufficiently personal. When both bring genuine respect for the other's form of ambition, they can build remarkable things together — though rarely with effortless romantic ease.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Saturn rules both signs in Vedic astrology — creating an unusual same-ruler dynamic between adjacent signs. Capricorn is Aquarius' 12th house — the house of loss, hidden matters, spiritual retreat, and expenses. This placement means Capricorn relationships often involve significant behind-the-scenes sacrifice or a spiritual dimension that is rarely visible publicly. Aquarius natives sometimes describe Capricorn relationships as their most karmic — demanding, but deeply significant to their soul's development.</p></div>
                </div></div>
              </div>

              {/* SCORPIO */}
              <div className="compat-card reveal">
                <div className="compat-header" onClick={toggleCompat}>
                  <div className="compat-sign-icon" style={{ background: 'linear-gradient(135deg,#B8510A,#D4732A)' }}>♏</div>
                  <div className="compat-sign-info"><h3>Aquarius + Scorpio</h3><p>Air meets Water &middot; Oct 23 – Nov 21</p></div>
                  <div className="compat-level"><div class="compat-stars">★★☆☆☆</div><span class="compat-label label-challenging">Challenging</span></div>
                  <span className="compat-toggle">▾</span>
                </div>
                <div className="compat-body"><div className="compat-body-inner">
                  <div className="compat-aspect"><h4>Love Chemistry</h4><p>Two Fixed signs of exceptional inner intensity — and almost no common language for expressing it. Scorpio wants total emotional possession; Aquarius wants total emotional freedom. Both are loyal in their own way; neither is loyal in the way the other needs. The fascination is real; the fundamental incompatibility in love style is equally real.</p></div>
                  <div className="compat-aspect"><h4>Long-Term Potential</h4><p>Low without extraordinary mutual evolution. Scorpio's possessiveness is the single thing Aquarius cannot tolerate. Aquarius' detachment and social diffuseness is the single thing that triggers Scorpio's deepest insecurities. Two Fixed signs who both believe they are right can sustain a stalemate indefinitely. Requires both to deeply examine what they are actually asking of the other before proceeding.</p></div>
                  <div className="compat-aspect"><h4>Vedic Astrology Note</h4><p>Mars and Ketu co-rule Scorpio. Mars is neutral toward Saturn; Ketu creates unpredictability. Scorpio is Aquarius' 10th house — the house of career, reputation, and public standing. Scorpio partners often play a significant role in shaping Aquarius' public identity and professional life — sometimes elevating it dramatically, sometimes disrupting it. The relationship carries professional significance regardless of its romantic outcome, which Aquarius may find both useful and uncomfortable.</p></div>
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
            <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: '36px' }}>Aquarius compatibility <em>scores</em></h2>
            <div className="score-grid">
              <div className="score-card reveal"><div className="score-sign">♊</div><div className="score-name">Gemini</div><div className="score-bar-wrap"><div className="score-bar" data-width="92%"></div></div><div className="score-pct">92%</div></div>
              <div className="score-card reveal"><div className="score-sign">♎</div><div className="score-name">Libra</div><div className="score-bar-wrap"><div className="score-bar" data-width="90%"></div></div><div className="score-pct">90%</div></div>
              <div className="score-card reveal"><div className="score-sign">♈</div><div className="score-name">Aries</div><div className="score-bar-wrap"><div class="score-bar" data-width="84%"></div></div><div className="score-pct">84%</div></div>
              <div className="score-card reveal"><div className="score-sign">♐</div><div className="score-name">Sagittarius</div><div className="score-bar-wrap"><div className="score-bar" data-width="80%"></div></div><div className="score-pct">80%</div></div>
              <div className="score-card reveal"><div className="score-sign">♌</div><div className="score-name">Leo</div><div className="score-bar-wrap"><div className="score-bar" data-width="74%"></div></div><div className="score-pct">74%</div></div>
              <div className="score-card reveal"><div className="score-sign">♒</div><div className="score-name">Aquarius</div><div className="score-bar-wrap"><div className="score-bar" data-width="72%"></div></div><div className="score-pct">72%</div></div>
              <div className="score-card reveal"><div className="score-sign">♓</div><div className="score-name">Pisces</div><div className="score-bar-wrap"><div className="score-bar" data-width="58%"></div></div><div className="score-pct">58%</div></div>
              <div className="score-card reveal"><div className="score-sign">♍</div><div className="score-name">Virgo</div><div className="score-bar-wrap"><div className="score-bar" data-width="55%"></div></div><div className="score-pct">55%</div></div>
              <div className="score-card reveal"><div className="score-sign">♋</div><div className="score-name">Cancer</div><div className="score-bar-wrap"><div className="score-bar" data-width="48%"></div></div><div className="score-pct">48%</div></div>
              <div className="score-card reveal"><div className="score-sign">♉</div><div className="score-name">Taurus</div><div className="score-bar-wrap"><div className="score-bar" data-width="44%"></div></div><div className="score-pct">44%</div></div>
              <div className="score-card reveal"><div className="score-sign">♑</div><div className="score-name">Capricorn</div><div className="score-bar-wrap"><div className="score-bar" data-width="42%"></div></div><div className="score-pct">42%</div></div>
              <div className="score-card reveal"><div className="score-sign">♏</div><div className="score-name">Scorpio</div><div className="score-bar-wrap"><div className="score-bar" data-width="36%"></div></div><div className="score-pct">36%</div></div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-soft)', marginTop: '18px', fontStyle: 'italic' }}>General sun-sign compatibility only. Personalised scores require full birth chart analysis.</p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* REPORT CALLOUT */}
        <div style={{ padding: '60px 6vw', background: 'var(--white)' }}>
          <div className="report-callout reveal">
            <div>
              <span className="rc-tag">For Aquarius &middot; Personalised Report</span>
              <h2 className="rc-title">Saturn's vision and the Sun's warmth —<br />your <em>complete love picture</em></h2>
              <p className="rc-desc">Aquarius is defined by Saturn's discipline — but the 7th house lord for Aquarius Lagna is the Sun, the planet of warmth, confidence, and personal radiance. How Saturn and the Sun interact in your specific birth chart, alongside Gemini's 5th house influence, Venus placement, Navamsa compatibility, and current Dasha period, reveals what love actually looks like for you and when it is ready to arrive. Dr. Vinay Bajrangi's Love &amp; Relationship Report covers all of this — written, personalised, delivered in 3–5 working days.</p>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="btn-primary">✦ Get My Love &amp; Relationship Report</a>
            </div>
            <div className="rc-side">
              <div className="rc-price">
                <div className="from">Starts from</div>
                <div className="amount">₹ 799</div>
                <div className="note">Written report &middot; Delivered<br />in 3–5 working days</div>
              </div>
              <a href="https://www.vinaybajrangi.com/calculator/love-calculator" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.68)', fontSize: '0.82rem', justifyContent: 'center', width: '100%' }}>Try Free Calculator &rarr;</a>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* GEMSTONE WEARABLES FOR AQUARIUS */}
        <div className="gem-strip">
          <div className="gem-strip-inner">
            <span className="section-tag reveal" style={{ paddingTop: '60px', display: 'block' }}>Vedic Remedies for Aquarius</span>
            <h2 className="section-title reveal">Gemstone wearables <em>for Aquarius love</em></h2>
            <p className="section-lead reveal" style={{ marginBottom: 0 }}>Saturn-ruled Aquarius benefits from gemstones that bring Saturn's discipline into productive relationship focus, strengthen the Sun — the 7th house lord and direct marriage significator — and support Venus, the natural karaka of romantic love that Aquarius' cool Saturn energy can suppress. All wearables must be prescribed after full chart analysis.</p>

            <div className="gem-strip-cards">
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">🔵</span>
                <div className="gem-name">Blue Sapphire Pendant / Bracelet</div>
                <p className="gem-desc">Blue Sapphire (Neelam) is Saturn's own gemstone. For Aquarius natives, it strengthens the ruling planet — bringing greater consistency, emotional depth, and long-term relationship vision to Aquarius' characteristically free-ranging love nature. Requires thorough chart analysis before wearing, as Neelam is among the most potent stones in Vedic astrology.</p>
                <div className="gem-planet">♄ Saturn &middot; Worn on Saturday</div>
              </a>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">🔴</span>
                <div className="gem-name">Ruby Pendant / Bracelet</div>
                <p className="gem-desc">The Sun is the 7th house lord for Aquarius Lagna — the direct ruler of marriage in Vedic astrology. Ruby (Manikya) strengthens the Sun, improving the quality and timing of the committed partner, bringing greater personal warmth to Aquarius' sometimes abstract relational presence, and resolving delays in marriage when the Sun is weak or afflicted in the chart.</p>
                <div className="gem-planet">☀️ Sun &middot; Worn on Sunday</div>
              </a>
              <a href="https://www.vinaybajrangi.com/love-and-relationship-report" className="gem-card reveal">
                <span className="gem-emoji">💎</span>
                <div className="gem-name">Diamond / White Sapphire Pendant</div>
                <p className="gem-desc">Venus is the natural karaka of romantic love for all charts. Aquarius' Saturn-dominant energy can create relationships that are intellectually rich but emotionally cool — a diamond or white sapphire wearable reactivates Venus' warmth, attracting partners who offer genuine romantic tenderness alongside the intellectual depth Aquarius requires.</p>
                <div className="gem-planet">♀ Venus &middot; Worn on Friday</div>
              </a>
            </div>

            <div style={{ background: 'var(--sign-xpale)', borderRadius: '14px', padding: '18px 22px', marginTop: '20px', borderLeft: '3px solid var(--saffron-deep)', maxWidth: '680px', display: 'flex', gap: '12px', alignItems: 'flex-start' }} className="reveal">
              <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>⚠️</span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: '1.65' }}><strong style={{ color: 'var(--text-dark)' }}>Blue Sapphire and Ruby both require careful analysis.</strong> Neelam carries rapid results — positive when correctly prescribed, disruptive when not. Ruby (Sun) must be checked against Saturn's placement, as Sun–Saturn opposition in the chart can create conflict when both stones are active. Dr. Bajrangi recommends all Aquarius wearables exclusively within a full consultation or written report.</p>
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
              <a href="https://www.vinaybajrangi.com/love-compatibility/taurus" className="sign-nav-item"><span className="sni-symbol">♉</span><span class="sni-name">Taurus</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/gemini" className="sign-nav-item"><span className="sni-symbol">♊</span><span className="sni-name">Gemini</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/cancer" className="sign-nav-item"><span className="sni-symbol">♋</span><span className="sni-name">Cancer</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/leo" className="sign-nav-item"><span className="sni-symbol">♌</span><span className="sni-name">Leo</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/virgo" className="sign-nav-item"><span className="sni-symbol">♍</span><span className="sni-name">Virgo</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/libra" className="sign-nav-item"><span className="sni-symbol">♎</span><span className="sni-name">Libra</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/scorpio" className="sign-nav-item"><span className="sni-symbol">♏</span><span className="sni-name">Scorpio</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/sagittarius" className="sign-nav-item"><span className="sni-symbol">♐</span><span className="sni-name">Sagittarius</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/capricorn" className="sign-nav-item"><span className="sni-symbol">♑</span><span className="sni-name">Capricorn</span></a>
              <a href="https://www.vinaybajrangi.com/love-compatibility/aquarius" className="sign-nav-item active"><span className="sni-symbol">♒</span><span className="sni-name">Aquarius</span></a>
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
            <h2>The Water Bearer carries love<br />for the whole world — <em>and one person</em></h2>
            <p>Sun signs reveal the current. Your Vedic birth chart — Saturn, the Sun, Venus, and your Dasha — reveals the one person the stars have in mind for you.</p>
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

          /* ── Aquarius palette: charcoal-graphite + electric cyan-silver ── */
          --sign-primary:   #3A3A4A;   /* deep graphite-slate         */
          --sign-secondary: #5A5A72;   /* mid graphite-violet         */
          --sign-accent:    #8AAABB;   /* electric silver-cyan        */
          --sign-electric:  #A0C8D8;   /* bright cyan-silver spark    */
          --sign-pale:      #ECEEF2;   /* light graphite-white        */
          --sign-xpale:     #F4F5F8;   /* near-white graphite         */
          --sign-dark:      #18181E;   /* near-black graphite         */

          /* Hero: light black — graphite that glows */
          --hero-dark1:  #0A0A0E;
          --hero-dark2:  #18182A;
          --hero-mid:    #2A2A42;
          --hero-light:  #3A3A5A;

          --text-dark: #0E0E18;
          --text-mid:  #2E2E48;
          --text-soft: #7A7A9A;
          --white:     #FFFFFF;

          --font-display: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;
          --font-body:    var(--font-dm-sans), 'DM Sans', sans-serif;
          --shadow-sign:  0 8px 40px rgba(58,58,74,0.22);
          --shadow-card:  0 4px 20px rgba(58,58,74,0.1);
          --shadow-soft:  0 2px 12px rgba(0,0,0,0.06);
          --shadow-electric: 0 0 40px rgba(160,200,216,0.15);
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
          border-bottom: 1px solid rgba(58,58,74,0.12);
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
            var(--hero-dark2) 22%,
            var(--hero-mid)   55%,
            var(--hero-light) 82%,
            #484868 100%);
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
          color: rgba(255,255,255,0.03);
          line-height: 1;
          pointer-events: none;
          font-family: var(--font-display);
          user-select: none;
        }

        /* Electric field lines */
        .field-line {
          position: absolute;
          pointer-events: none;
          background: linear-gradient(90deg, transparent, rgba(160,200,216,0.14), transparent);
          height: 1px;
          transform-origin: right center;
        }
        .field-line:nth-child(4){ width:48%; top:18%; left:-5%; transform:rotate(4deg);  animation: fieldPulse 5s ease-in-out infinite; animation-delay:0s; }
        .field-line:nth-child(5){ width:55%; top:32%; left:-5%; transform:rotate(-2deg); animation: fieldPulse 7s ease-in-out infinite; animation-delay:1.2s; }
        .field-line:nth-child(6){ width:42%; top:50%; left:-5%; transform:rotate(6deg);  animation: fieldPulse 4.5s ease-in-out infinite; animation-delay:0.6s; }
        .field-line:nth-child(7){ width:60%; top:66%; left:-5%; transform:rotate(-3deg); animation: fieldPulse 6s ease-in-out infinite; animation-delay:1.8s; }
        .field-line:nth-child(8){ width:46%; top:80%; left:-5%; transform:rotate(2deg);  animation: fieldPulse 5.5s ease-in-out infinite; animation-delay:0.4s; }
        @keyframes fieldPulse {
          0%,100% { opacity: 0.3; }
          50%      { opacity: 1.0; }
        }

        /* Circuit-node dots */
        .node-dot {
          position: absolute;
          border-radius: 50%;
          background: var(--sign-electric);
          pointer-events: none;
          animation: nodeBlink 3s ease-in-out infinite;
        }
        .node-dot:nth-child(9) { width:4px; height:4px; top:18%; left:44%; animation-delay:0s; opacity:0.6; }
        .node-dot:nth-child(10) { width:3px; height:3px; top:32%; left:52%; animation-delay:0.8s; opacity:0.5; }
        .node-dot:nth-child(11) { width:5px; height:5px; top:50%; left:39%; animation-delay:1.6s; opacity:0.7; }
        .node-dot:nth-child(12){ width:3px; height:3px; top:66%; left:57%; animation-delay:2.4s; opacity:0.4; }
        .node-dot:nth-child(13){ width:4px; height:4px; top:80%; left:46%; animation-delay:1.2s; opacity:0.6; }
        @keyframes nodeBlink {
          0%,100% { box-shadow: 0 0 0 0 rgba(160,200,216,0); opacity:0.4; }
          50%      { box-shadow: 0 0 12px 4px rgba(160,200,216,0.4); opacity:1; }
        }

        /* Inner electric glow */
        .hero-glow {
          position: absolute; width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(90,90,114,0.45) 0%, transparent 70%);
          top: 50%; left: 18%; transform: translate(-50%,-50%); pointer-events: none;
        }
        /* Secondary cyan spark glow */
        .hero-glow-b {
          position: absolute; width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(138,170,187,0.18) 0%, transparent 70%);
          top: 30%; left: 48%; transform: translate(-50%,-50%); pointer-events: none;
        }

        .hero-content { position: relative; z-index: 2; padding-bottom: 60px; }

        .hero-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--sign-electric);
          margin-bottom: 18px; opacity: 0; animation: fadeUp 0.7s 0.1s forwards;
        }
        .hero-eyebrow a { color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
        .hero-eyebrow a:hover { color: var(--sign-electric); }
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
          box-shadow: 0 0 16px rgba(160,200,216,0.25);
        }
        .sign-meta strong { display: block; font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--white); line-height: 1.1; }
        .sign-meta span { font-size: 0.68rem; color: rgba(255,255,255,0.5); letter-spacing: 0.08em; }

        .hero-title {
          font-family: var(--font-display); font-size: clamp(2.6rem,5.5vw,4.4rem);
          font-weight: 700; color: var(--white); line-height: 1.08; margin-bottom: 18px;
          opacity: 0; animation: fadeUp 0.8s 0.3s forwards;
        }
        .hero-title em { font-style: italic; color: var(--sign-electric); }

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
          border: 1.5px solid rgba(255,255,255,0.25); transition: background 0.2s, border-color 0.2s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.07); border-color: rgba(160,200,216,0.4); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--sign-primary); font-family: var(--font-body);
          font-weight: 600; font-size: 0.88rem;
          padding: 13px 26px; border-radius: 50px; text-decoration: none;
          border: 1.5px solid rgba(58,58,74,0.25); transition: background 0.2s;
        }
        .btn-outline:hover { background: var(--sign-pale); }

        /* ── HERO METER PANEL ── */
        .hero-visual { position: relative; z-index: 2; align-self: end; }
        .compat-meter-card {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.11);
          backdrop-filter: blur(12px); border-radius: 20px 20px 0 0; padding: 28px 28px 32px;
        }
        .meter-title { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 20px; }
        .meter-row { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .meter-sign { font-size: 1.1rem; width: 26px; flex-shrink: 0; text-align: center; }
        .meter-label { font-size: 0.78rem; color: rgba(255,255,255,0.62); width: 84px; flex-shrink: 0; }
        .meter-bar-bg { flex: 1; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.08); overflow: hidden; }
        .meter-bar {
          height: 100%; border-radius: 3px;
          background: linear-gradient(90deg, var(--sign-secondary), var(--sign-electric));
          transform-origin: left; transform: scaleX(0); transition: transform 1s ease;
        }
        .meter-bar.animate { transform: scaleX(1); }
        .meter-score { font-size: 0.72rem; font-weight: 700; color: var(--sign-electric); width: 28px; text-align: right; flex-shrink: 0; }

        /* ── TRAIT STRIP ── */
        .trait-strip {
          background: var(--sign-dark); border-top: 1px solid rgba(160,200,216,0.12);
          border-bottom: 1px solid rgba(160,200,216,0.08); padding: 22px 6vw;
        }
        .trait-inner { max-width: 1100px; margin: 0 auto; display: flex; gap: 36px; flex-wrap: wrap; align-items: center; }
        .trait-item { display: flex; align-items: center; gap: 10px; }
        .trait-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, var(--sign-primary), var(--sign-secondary));
          display: flex; align-items: center; justify-content: center; font-size: 0.9rem; flex-shrink: 0;
          border: 1px solid rgba(160,200,216,0.2);
        }
        .trait-text strong { display: block; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sign-electric); margin-bottom: 1px; }
        .trait-text span { font-size: 0.83rem; color: rgba(255,255,255,0.65); font-weight: 400; }

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
          border: 1.5px solid rgba(58,58,74,0.1); box-shadow: var(--shadow-soft);
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
          border: 1.5px solid rgba(58,58,74,0.1); box-shadow: var(--shadow-soft);
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
        .label-moderate    { background: #F0F0F8; color: var(--sign-primary); }
        .label-challenging { background: #FFE8E5; color: #C0251A; }
        .compat-toggle { font-size: 1rem; color: var(--text-soft); transition: transform 0.3s; flex-shrink: 0; }
        .compat-card.open .compat-toggle { transform: rotate(180deg); }
        .compat-body { max-height: 0; overflow: hidden; transition: max-height 0.45s ease; }
        .compat-card.open .compat-body { max-height: 600px; }
        .compat-body-inner {
          border-top: 1px solid rgba(58,58,74,0.08); padding: 24px 24px 28px;
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
          text-align: center; border: 1.5px solid rgba(58,58,74,0.1);
          box-shadow: var(--shadow-soft); transition: all 0.3s;
        }
        .score-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-sign); }
        .score-sign { font-size: 1.8rem; margin-bottom: 6px; }
        .score-name { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
        .score-bar-wrap { height: 5px; background: var(--sign-pale); border-radius: 3px; overflow: hidden; margin-bottom: 6px; }
        .score-bar { height: 100%; border-radius: 3px; background: linear-gradient(90deg, var(--sign-primary), var(--sign-accent)); transform-origin: left; transform: scaleX(0); transition: transform 1.2s ease; }
        .score-bar.animate { transform: scaleX(1); }
        .score-pct { font-size: 0.72rem; font-weight: 600; color: var(--text-soft); }

        /* ── REPORT CALLOUT — dark graphite ── */
        .report-callout {
          background: linear-gradient(145deg, var(--hero-dark2) 0%, var(--hero-mid) 50%, var(--hero-light) 100%);
          border-radius: 24px; padding: 48px 52px;
          display: grid; grid-template-columns: 1fr auto; gap: 36px; align-items: center;
          max-width: 1100px; margin: 0 auto; position: relative; overflow: hidden;
          border: 1px solid rgba(160,200,216,0.1);
        }
        .report-callout::before {
          content: '♒'; position: absolute; right: 42%; top: 50%; transform: translateY(-50%);
          font-size: 220px; color: rgba(255,255,255,0.025); font-family: var(--font-display); pointer-events: none; line-height: 1;
        }
        @media (max-width: 760px) { .report-callout { grid-template-columns: 1fr; padding: 32px 24px; } .report-callout::before { display: none; } }
        .rc-tag { display: inline-block; background: rgba(160,200,216,0.15); color: var(--sign-electric); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; padding: 4px 14px; border-radius: 50px; margin-bottom: 16px; border: 1px solid rgba(160,200,216,0.2); }
        .rc-title { font-family: var(--font-display); font-size: clamp(1.5rem,2.5vw,2.1rem); font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.2; }
        .rc-title em { font-style: italic; color: var(--sign-electric); }
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
          border: 1.5px solid rgba(58,58,74,0.1); text-decoration: none; display: block; transition: all 0.3s;
        }
        .gem-card:hover { box-shadow: var(--shadow-sign); transform: translateY(-3px); background: var(--white); }
        .gem-emoji { font-size: 1.8rem; margin-bottom: 10px; display: block; }
        .gem-name { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
        .gem-desc { font-size: 0.8rem; color: var(--text-mid); line-height: 1.6; margin-bottom: 10px; }
        .gem-planet { font-size: 0.68rem; font-weight: 700; color: var(--sign-primary); text-transform: uppercase; letter-spacing: 0.08em; }

        /* ── SIGNS NAV ── */
        .signs-nav { background: var(--sign-pale); padding: 60px 6vw; border-top: 1px solid rgba(58,58,74,0.1); }
        .signs-nav-inner { max-width: 1100px; margin: 0 auto; }
        .signs-nav-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--text-dark); margin-bottom: 22px; text-align: center; }
        .signs-nav-title em { font-style: italic; color: var(--saffron-deep); }
        .signs-nav-grid { display: grid; grid-template-columns: repeat(12,1fr); gap: 10px; }
        @media (max-width: 860px) { .signs-nav-grid { grid-template-columns: repeat(6,1fr); } }
        @media (max-width: 440px) { .signs-nav-grid { grid-template-columns: repeat(4,1fr); } }
        .sign-nav-item {
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          padding: 12px 6px; background: var(--white); border-radius: 14px;
          border: 1.5px solid rgba(58,58,74,0.1); text-decoration: none; transition: all 0.2s;
        }
        .sign-nav-item.active { border-color: var(--sign-secondary); background: var(--sign-pale); }
        .sign-nav-item:hover:not(.active) { border-color: var(--saffron-light); box-shadow: 0 4px 16px rgba(232,130,26,0.14); transform: translateY(-2px); }
        .sni-symbol { font-size: 1.2rem; }
        .sni-name { font-size: 0.62rem; font-weight: 600; color: var(--text-mid); letter-spacing: 0.04em; }

        /* ── BOTTOM CTA — deep graphite ── */
        .bottom-cta {
          background: linear-gradient(145deg, var(--hero-dark1) 0%, var(--hero-dark2) 28%, var(--sign-dark) 58%, var(--sign-primary) 100%);
          padding: 70px 6vw; text-align: center; position: relative; overflow: hidden;
        }
        .bottom-cta::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 60%, rgba(160,200,216,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .bottom-cta h2 { font-family: var(--font-display); font-size: clamp(1.7rem,3.5vw,2.7rem); font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.2; position: relative; }
        .bottom-cta p { font-size: 0.95rem; color: rgba(255,255,255,0.72); max-width: 440px; margin: 0 auto 28px; line-height: 1.65; position: relative; }
        .bottom-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; }
        .btn-white { display: inline-flex; align-items: center; gap: 8px; background: var(--white); color: var(--sign-primary); font-weight: 700; font-size: 0.88rem; padding: 13px 26px; border-radius: 50px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .btn-outline-white { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--white); font-weight: 500; font-size: 0.88rem; padding: 13px 26px; border-radius: 50px; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35); transition: background 0.2s, border-color 0.2s; }
        .btn-outline-white:hover { background: rgba(255,255,255,0.08); border-color: rgba(160,200,216,0.5); }

        .section-divider { border: none; border-top: 1px solid rgba(58,58,74,0.08); margin: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
