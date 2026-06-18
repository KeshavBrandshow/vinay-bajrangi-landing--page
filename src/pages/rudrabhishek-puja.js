"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "What is Rudrabhishek and who should do it?",
    answer:
      "Rudrabhishek is the sacred bathing of Lord Shiva's lingam with Panchamrit, Ganga Jal, and other divine substances while the Rudra Chamakam and Namakam are chanted. Anyone seeking relief from suffering, karmic burdens, health issues, career stagnation, marital problems, or spiritual growth should perform Rudrabhishek at least once in their lifetime.",
  },
  {
    question: "What is the best time to perform Rudrabhishek?",
    answer:
      "Mondays (Somvar), Pradosh Vrat, Sawan month, Maha Shivratri, and Amavasya are the most auspicious. However, Rudrabhishek performed with sincere devotion at any time yields powerful results. Our scheduled dates are carefully chosen for maximum spiritual potency.",
  },
  {
    question: "Can I attend from outside India or abroad?",
    answer:
      "Absolutely. Thousands of devotees from 50+ countries participate in our pujas via live stream. You receive the full sankalp benefit regardless of your physical location. The divine energy of Bajrangi Dhaam travels through your sincere devotion.",
  },
  {
    question: "What is the difference between Group and Individual Puja?",
    answer:
      "In Group Puja (₹500), multiple devotees participate in a single Rudrabhishek; your name and gotra are included in the collective sankalp. In Individual Puja (₹5,100), the entire ritual is performed exclusively for you — aligned to your personal kundli, your specific concerns, and your unique sankalp — making it significantly more targeted and powerful.",
  },
  {
    question: "How will I receive prasad and what is included?",
    answer:
      "For Individual Puja bookings, we courier energized prasad, Vibhuti (sacred ash), Rudraksha, and a letter of sankalp completion to your registered address anywhere in India. For Group Puja, a digital prasad and blessing certificate are sent via WhatsApp.",
  },
  {
    question: "How quickly can I expect results after the puja?",
    answer:
      "Many devotees report a palpable shift in energy, peace, and circumstance within 11–40 days of Rudrabhishek. Results depend on the depth of karma involved. Consistently performing Rudrabhishek during Sawan or Pradosh Vrat accelerates transformation significantly.",
  },
];

export default function RudrabhishekPuja() {
  const canvasRef = useRef(null);

  const [events, setEvents] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const [formData, setFormData] = useState({
    date: "",
    title: "",
    time: "",
    type: "both",
    note: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentType, setCurrentType] = useState("group");

  const [bookingData, setBookingData] = useState({
    name: "",
    gotra: "",
    mobile: "",
    email: "",
    concern: "",
    address: "",
  });

  const [openFaq, setOpenFaq] = useState(null);


  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrame;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -(Math.random() * 2 + 0.5),
      size: Math.random() * 3 + 1,
      life: 1,
      decay: Math.random() * 0.008 + 0.004,
      hue: Math.random() * 40 + 10,
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length < 120) {
        particles.push(createParticle());
      }

      particles = particles.filter((p) => p.life > 0);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.life})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const savedEvents = JSON.parse(
      localStorage.getItem("rudra_events") || "[]"
    );

    setEvents(savedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem("rudra_events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr + "T00:00:00");

    return {
      day: d.getDate(),
      month: d
        .toLocaleString("en-IN", { month: "short" })
        .toUpperCase(),
      year: d.getFullYear(),
      weekday: d.toLocaleString("en-IN", {
        weekday: "long",
      }),
    };
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return "";

    const [h, m] = timeStr.split(":");

    const hour = parseInt(h);

    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;

    return `${hour12}:${m} ${ampm}`;
  };

  const addEvent = () => {
    if (!formData.date) {
      alert("Please select a puja date.");
      return;
    }

    setEvents([
      ...events,
      {
        date: formData.date,
        title: formData.title || "Rudrabhishek Puja",
        time: formData.time,
        type: formData.type,
        note: formData.note,
      },
    ]);

    setFormData({
      date: "",
      title: "",
      time: "",
      type: "both",
      note: "",
    });

    setShowAddForm(false);
  };

  const deleteEvent = (index) => {
    if (!confirm("Remove this puja date?")) return;

    const updated = [...events];
    updated.splice(index, 1);

    setEvents(updated);
  };

  const clearAll = () => {
    if (!confirm("Remove ALL puja dates? This cannot be undone.")) return;

    setEvents([]);
  };

  const openModal = (type) => {
    setCurrentType(type);
    setIsModalOpen(true);

    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);

    document.body.style.overflow = "";
  };

  const submitBooking = () => {
    if (!bookingData.name || !bookingData.mobile) {
      alert("Please fill your name and mobile number.");
      return;
    }

    const text = encodeURIComponent(`
🙏 Jai Shiv Shankar!

I would like to book a Rudrabhishek Puja at Bajrangi Dhaam.

Type: ${currentType === "group"
        ? "Group Puja ₹500"
        : "Individual Puja ₹5,100"
      }

Name: ${bookingData.name}
Gotra: ${bookingData.gotra || "Not mentioned"}
Mobile: ${bookingData.mobile}
Email: ${bookingData.email || "Not provided"}

${currentType === "individual"
        ? `Concern: ${bookingData.concern || "Not specified"
        }

Address: ${bookingData.address || "Not provided"
        }`
        : ""
      }

Please share payment details.

Om Namah Shivaya 🕉️
`);

    window.open(
      `https://wa.me/919999113366?text=${text}`,
      "_blank"
    );
  };

  const toggleAddForm = () => {
    setShowAddForm((prev) => !prev);
  };

  const toggleFAQ = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* Google Fonts */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
     <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet" />


      <style jsx global>{`
           :root {
    --saffron:       #C4510A;
    --deep-saffron:  #A03D08;
    --gold:          #A07010;
    --gold-light:    #7A5200;
    --dark:          #FDFAF5;
    --dark-mid:      #F5EFE3;
    --dark-card:     #FFFFFF;
    --dark-border:   #E2D4B8;
    --cream:         #3A2000;
    --text-muted:    #7A5C30;
    --white:         #FFFFFF;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--dark);
    color: var(--cream);
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    line-height: 1.7;
    overflow-x: hidden;
  }

  /* ═══════════════════════════════════════
     FIRE PARTICLES CANVAS
  ═══════════════════════════════════════ */
#fireCanvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

  .fade-in {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

  /* ═══════════════════════════════════════
     DECORATIVE PATTERN OVERLAY
  ═══════════════════════════════════════ */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -10%, rgba(196,81,10,0.10) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 50% 110%, rgba(160,112,16,0.08) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  .page-wrap { position: relative; z-index: 1; }

  /* ═══════════════════════════════════════
     HEADER / HERO
  ═══════════════════════════════════════ */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 60px 24px 80px;
    position: relative;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A07010' fill-opacity='0.06'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      repeat;
    opacity: 0.4;
    pointer-events: none;
  }

  .om-symbol {
    font-size: 80px;
    line-height: 1;
    color: var(--gold);
    filter: drop-shadow(0 0 24px rgba(212,160,23,0.7));
    animation: pulse-glow 3s ease-in-out infinite;
    margin-bottom: 24px;
  }

  @keyframes pulse-glow {
    0%, 100% { filter: drop-shadow(0 0 16px rgba(160,112,16,0.5)); }
    50%       { filter: drop-shadow(0 0 32px rgba(196,81,10,0.7)); }
  }

  .hero-eyebrow {
    font-family: 'Cinzel', serif;
    font-size: 13px;
    letter-spacing: 5px;
    color: var(--saffron);
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .hero-title {
    font-family: 'Cinzel Decorative', serif;
    font-size: clamp(32px, 6vw, 72px);
    font-weight: 900;
    line-height: 1.1;
    background: linear-gradient(135deg, #8B4000 0%, #C4510A 50%, #A07010 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
    margin-bottom: 12px;
  }

  .hero-subtitle {
    font-family: 'Cinzel', serif;
    font-size: clamp(14px, 2.5vw, 22px);
    color: var(--gold-light);
    letter-spacing: 3px;
    margin-bottom: 28px;
  }

  .hero-divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 0 auto 32px;
    max-width: 400px;
  }
  .hero-divider span { height: 1px; flex: 1; background: linear-gradient(to right, transparent, var(--gold)); }
  .hero-divider span:last-child { background: linear-gradient(to left, transparent, var(--gold)); }
  .hero-divider i { color: var(--saffron); font-style: normal; font-size: 22px; }

  .hero-desc {
    max-width: 640px;
    font-size: 19px;
    color: var(--cream);
    opacity: 0.9;
    line-height: 1.8;
    margin-bottom: 48px;
  }

  .hero-cta-row {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 36px;
    background: linear-gradient(135deg, var(--saffron), var(--deep-saffron));
    color: var(--white);
    font-family: 'Cinzel', serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    text-decoration: none;
    clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
    transition: all 0.3s ease;
    box-shadow: 0 4px 24px rgba(232,105,10,0.45);
  }
  .btn-primary:hover {
    background: linear-gradient(135deg, #A03D08, #7A2C04);
    box-shadow: 0 6px 36px rgba(196,81,10,0.4);
    transform: translateY(-2px);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 15px 36px;
    background: transparent;
    color: var(--gold-light);
    font-family: 'Cinzel', serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: 1px solid var(--gold);
    cursor: pointer;
    text-decoration: none;
    clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
    transition: all 0.3s ease;
  }
  .btn-secondary:hover {
    background: rgba(212,160,23,0.12);
    border-color: var(--gold-light);
    transform: translateY(-2px);
  }

  .scroll-hint {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    opacity: 0.5;
    font-family: 'Cinzel', serif;
    font-size: 11px;
    letter-spacing: 3px;
    color: var(--gold);
  }
  .scroll-hint .arrow { animation: bounce 2s infinite; font-size: 18px; }
  @keyframes bounce {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(8px); }
  }

  /* ═══════════════════════════════════════
     SECTION WRAPPER
  ═══════════════════════════════════════ */
  section { position: relative; }

  .section-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 24px;
  }

  .section-heading {
    text-align: center;
    margin-bottom: 56px;
  }
  .section-heading .eyebrow {
    font-family: 'Cinzel', serif;
    font-size: 12px;
    letter-spacing: 5px;
    color: var(--saffron);
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .section-heading h2 {
    font-family: 'Cinzel Decorative', serif;
    font-size: clamp(22px, 4vw, 40px);
    font-weight: 700;
    color: var(--gold-light);
    line-height: 1.25;
  }
  .section-heading .rule {
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, var(--saffron), var(--gold));
    margin: 18px auto 0;
    border-radius: 2px;
  }

  /* ═══════════════════════════════════════
     UPCOMING DATES (ADMIN TABLE)
  ═══════════════════════════════════════ */
  .dates-section {
    background: var(--dark-mid);
    border-top: 1px solid var(--dark-border);
    border-bottom: 1px solid var(--dark-border);
  }

  .dates-grid {
    display: grid;
    gap: 16px;
  }

  /* Admin Controls */
  .admin-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 28px;
    padding: 16px 20px;
    background: rgba(0,0,0,0.03);
    border: 1px solid var(--dark-border);
    border-radius: 4px;
  }
  .admin-bar span {
    font-family: 'Cinzel', serif;
    font-size: 12px;
    letter-spacing: 2px;
    color: var(--text-muted);
    text-transform: uppercase;
  }
  .admin-actions { display: flex; gap: 10px; flex-wrap: wrap; }
  .admin-btn {
    padding: 8px 18px;
    background: rgba(212,160,23,0.12);
    border: 1px solid var(--gold);
    color: var(--gold-light);
    font-family: 'Cinzel', serif;
    font-size: 11px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.2s;
  }
  .admin-btn:hover { background: rgba(212,160,23,0.22); }
  .admin-btn.danger { border-color: #cc3300; color: #ff6644; background: rgba(204,51,0,0.08); }
  .admin-btn.danger:hover { background: rgba(204,51,0,0.18); }

  /* Add Event Form */
  #addEventForm {
    display: none;
    background: rgba(160,112,16,0.05);
    border: 1px solid var(--dark-border);
    border-radius: 4px;
    padding: 24px;
    margin-bottom: 24px;
  }
  #addEventForm.visible { display: block; }
  .form-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; margin-bottom: 14px; }
  .form-group { display: flex; flex-direction: column; gap: 6px; }
  .form-group label { font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: 2px; color: var(--text-muted); text-transform: uppercase; }
  .form-group input, .form-group select, .form-group textarea {
    padding: 10px 14px;
    background: rgba(0,0,0,0.04);
    border: 1px solid var(--dark-border);
    color: var(--cream);
    font-family: 'EB Garamond', serif;
    font-size: 16px;
    border-radius: 2px;
    outline: none;
    transition: border-color 0.2s;
  }
  .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--gold); }
  .form-group select option { background: #FDFAF5; color: #3A2000; }
  .form-save-btn {
    padding: 11px 28px;
    background: linear-gradient(135deg, var(--saffron), var(--deep-saffron));
    border: none;
    color: white;
    font-family: 'Cinzel', serif;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 2px;
    transition: opacity 0.2s;
  }
  .form-save-btn:hover { opacity: 0.85; }

  /* Date Cards */
  .date-card {
    display: grid;
    grid-template-columns: 90px 1fr auto;
    align-items: center;
    gap: 20px;
    padding: 20px 24px;
    background: var(--dark-card);
    border: 1px solid var(--dark-border);
    border-left: 3px solid var(--saffron);
    transition: all 0.25s ease;
  }
  .date-card:hover { border-left-color: var(--gold); background: rgba(212,160,23,0.05); }

  .date-badge {
    text-align: center;
    background: rgba(196,81,10,0.08);
    border: 1px solid rgba(196,81,10,0.25);
    padding: 10px 8px;
    border-radius: 2px;
  }
  .date-badge .day { font-family: 'Cinzel Decorative', serif; font-size: 26px; color: var(--saffron); line-height: 1; }
  .date-badge .month { font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: 2px; color: var(--gold); text-transform: uppercase; margin-top: 4px; }
  .date-badge .year { font-family: 'Cinzel', serif; font-size: 10px; color: var(--text-muted); }

  .date-info h3 { font-family: 'Cinzel', serif; font-size: 15px; color: var(--gold-light); letter-spacing: 1px; margin-bottom: 4px; }
  .date-info p { font-size: 14px; color: var(--text-muted); line-height: 1.5; }
  .date-tags { display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap; }
  .tag {
    padding: 2px 10px;
    font-family: 'Cinzel', serif;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border-radius: 20px;
  }
  .tag.group { background: rgba(196,81,10,0.10); color: #8B3608; border: 1px solid rgba(196,81,10,0.25); }
  .tag.individual { background: rgba(160,112,16,0.10); color: #7A5200; border: 1px solid rgba(160,112,16,0.3); }
  .tag.special { background: rgba(30,130,30,0.08); color: #2A7A2A; border: 1px solid rgba(30,130,30,0.25); }

  .date-book { display: flex; flex-direction: column; gap: 8px; align-items: flex-end; }
  .book-btn {
    padding: 10px 22px;
    background: linear-gradient(135deg, var(--saffron), var(--deep-saffron));
    color: white;
    font-family: 'Cinzel', serif;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.25s;
    clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  }
  .book-btn:hover { background: linear-gradient(135deg, #A03D08, #7A2C04); box-shadow: 0 4px 18px rgba(196,81,10,0.35); }
  .delete-btn {
    padding: 5px 12px;
    background: transparent;
    border: 1px solid #DDBBAA;
    color: #AA7755;
    font-size: 11px;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.2s;
  }
  .delete-btn:hover { border-color: #cc3300; color: #cc3300; background: rgba(204,51,0,0.06); }

  .no-dates {
    text-align: center;
    padding: 40px;
    color: var(--text-muted);
    font-style: italic;
    border: 1px dashed var(--dark-border);
  }

  /* ═══════════════════════════════════════
     WHY RUDRABHISHEK – BENEFITS
  ═══════════════════════════════════════ */
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .benefit-card {
    padding: 32px 28px;
    background: var(--dark-card);
    border: 1px solid var(--dark-border);
    border-top: 2px solid var(--saffron);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .benefit-card::before {
    content: '';
    position: absolute;
    top: -40px; right: -40px;
    width: 120px; height: 120px;
    background: radial-gradient(circle, rgba(196,81,10,0.06) 0%, transparent 70%);
    border-radius: 50%;
  }
  .benefit-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(196,81,10,0.12); }

  .benefit-icon { font-size: 36px; margin-bottom: 16px; display: block; }
  .benefit-card h3 {
    font-family: 'Cinzel', serif;
    font-size: 15px;
    color: var(--gold-light);
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  .benefit-card p { font-size: 16px; color: var(--text-muted); line-height: 1.7; }

  /* ═══════════════════════════════════════
     THE RUDRA CONNECTION — Narrative
  ═══════════════════════════════════════ */
  .narrative-section {
    background: linear-gradient(180deg, #FDFAF5 0%, #F0E8D0 50%, #FDFAF5 100%);
  }

  .narrative-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }
  @media (max-width: 768px) { .narrative-block { grid-template-columns: 1fr; } }

  .narrative-text h2 {
    font-family: 'Cinzel Decorative', serif;
    font-size: clamp(20px, 3vw, 34px);
    color: var(--gold-light);
    line-height: 1.3;
    margin-bottom: 20px;
  }
  .narrative-text p {
    color: var(--text-muted);
    font-size: 17px;
    line-height: 1.9;
    margin-bottom: 16px;
  }
  .narrative-text .highlight {
    color: var(--cream);
    font-style: italic;
    font-size: 19px;
    border-left: 3px solid var(--saffron);
    padding-left: 20px;
    margin: 24px 0;
    line-height: 1.8;
  }

  .shiva-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .shiva-mandala {
    width: 280px;
    height: 280px;
    position: relative;
  }
  .mandala-ring {
    position: absolute;
    inset: 0;
    border: 2px solid var(--gold);
    border-radius: 50%;
    opacity: 0.4;
    animation: spin-slow 20s linear infinite;
  }
  .mandala-ring:nth-child(2) {
    inset: 20px;
    border-color: var(--saffron);
    opacity: 0.3;
    animation-direction: reverse;
    animation-duration: 15s;
  }
  .mandala-ring:nth-child(3) {
    inset: 40px;
    opacity: 0.2;
    animation-duration: 25s;
  }
  .mandala-center {
    position: absolute;
    inset: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 90px;
    filter: drop-shadow(0 0 30px rgba(160,112,16,0.4));
    animation: pulse-glow 4s ease-in-out infinite;
  }
  @keyframes spin-slow { to { transform: rotate(360deg); } }

  /* ═══════════════════════════════════════
     PUJA OPTIONS
  ═══════════════════════════════════════ */
  .puja-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    max-width: 860px;
    margin: 0 auto;
  }
  @media (max-width: 600px) { .puja-options { grid-template-columns: 1fr; } }

  .puja-card {
    background: var(--dark-card);
    border: 1px solid var(--dark-border);
    padding: 40px 32px;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .puja-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(to right, var(--saffron), var(--gold));
  }
  .puja-card.featured {
    border-color: var(--gold);
    background: linear-gradient(145deg, rgba(160,112,16,0.07) 0%, var(--dark-card) 60%);
  }
  .puja-card.featured::after { height: 3px; background: linear-gradient(to right, var(--gold-light), var(--saffron)); }
  .puja-card:hover { transform: translateY(-5px); box-shadow: 0 16px 50px rgba(160,112,16,0.13); }

  .puja-badge {
    position: absolute;
    top: 16px; right: 16px;
    padding: 4px 12px;
    font-family: 'Cinzel', serif;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: rgba(160,112,16,0.10);
    border: 1px solid var(--gold);
    color: var(--gold);
    border-radius: 20px;
  }

  .puja-icon { font-size: 48px; margin-bottom: 16px; display: block; }
  .puja-card h3 { font-family: 'Cinzel', serif; font-size: 18px; color: var(--gold-light); margin-bottom: 12px; letter-spacing: 1px; }
  .puja-price {
    font-family: 'Cinzel Decorative', serif;
    font-size: 38px;
    color: var(--saffron);
    margin: 16px 0 4px;
    line-height: 1;
  }
  .puja-price-label { font-size: 13px; color: var(--text-muted); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px; font-family: 'Cinzel', serif; }
  .puja-features { list-style: none; margin-bottom: 28px; text-align: left; }
  .puja-features li {
    padding: 8px 0;
    border-bottom: 1px solid rgba(0,0,0,0.07);
    font-size: 15px;
    color: var(--cream);
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .puja-features li::before { content: '✦'; color: var(--gold); flex-shrink: 0; font-size: 10px; margin-top: 5px; }
  .puja-features li:last-child { border-bottom: none; }

  /* ═══════════════════════════════════════
     HOW IT WORKS
  ═══════════════════════════════════════ */
  .steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0; }
  .step {
    padding: 36px 28px;
    text-align: center;
    border-right: 1px solid var(--dark-border);
    position: relative;
  }
  .step:last-child { border-right: none; }
  .step-num {
    font-family: 'Cinzel Decorative', serif;
    font-size: 48px;
    color: rgba(212,160,23,0.15);
    line-height: 1;
    margin-bottom: 12px;
  }
  .step-icon { font-size: 32px; margin-bottom: 12px; display: block; }
  .step h3 { font-family: 'Cinzel', serif; font-size: 14px; color: var(--gold-light); letter-spacing: 1px; margin-bottom: 10px; }
  .step p { font-size: 15px; color: var(--text-muted); }

  /* ═══════════════════════════════════════
     BAJRANGI DHAAM TRUST SECTION
  ═══════════════════════════════════════ */
  .trust-section { background: var(--dark-mid); border-top: 1px solid var(--dark-border); border-bottom: 1px solid var(--dark-border); }
  .trust-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 24px; }
  .trust-item { text-align: center; padding: 28px 16px; }
  .trust-num { font-family: 'Cinzel Decorative', serif; font-size: 38px; color: var(--saffron); line-height: 1; margin-bottom: 6px; }
  .trust-label { font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: 2px; color: var(--text-muted); text-transform: uppercase; }

  /* ═══════════════════════════════════════
     FAQ
  ═══════════════════════════════════════ */
  .faq-list { max-width: 760px; margin: 0 auto; }
  .faq-item {
    border-bottom: 1px solid var(--dark-border);
  }
  .faq-q {
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    padding: 22px 0;
    color: var(--gold-light);
    font-family: 'Cinzel', serif;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    transition: color 0.2s;
  }
  .faq-q:hover { color: var(--gold); }
  .faq-q .chevron { font-size: 18px; color: var(--saffron); transition: transform 0.3s; flex-shrink: 0; }
  .faq-q.open .chevron { transform: rotate(180deg); }
  .faq-a { display: none; padding: 0 0 22px; color: var(--text-muted); font-size: 16px; line-height: 1.8; }
  .faq-a.open { display: block; }

  .faq-a {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}

.faq-a.open {
  max-height: 300px;
  opacity: 1;
  margin-top: 16px;
}

.faq-q {
  width: 100%;
  cursor: pointer;
}

.chevron {
  transition: transform 0.3s ease;
}

.faq-q.open .chevron {
  transform: rotate(180deg);
}

  /* ═══════════════════════════════════════
     BOOKING MODAL
  ═══════════════════════════════════════ */
  .modal-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    z-index: 1000;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .modal-overlay.open { display: flex; }
  .modal {
    background: var(--dark-mid);
    border: 1px solid var(--dark-border);
    border-top: 3px solid var(--saffron);
    max-width: 500px;
    width: 100%;
    padding: 40px;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
  }
  .modal-close {
    position: absolute;
    top: 16px; right: 16px;
    background: none;
    border: none;
    color: var(--text-muted);
    font-size: 22px;
    cursor: pointer;
  }
  .modal-close:hover { color: var(--cream); }
  .modal h3 { font-family: 'Cinzel Decorative', serif; font-size: 22px; color: var(--gold-light); margin-bottom: 6px; }
  .modal .modal-sub { font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: 2px; color: var(--saffron); text-transform: uppercase; margin-bottom: 28px; }
  .modal .form-group { margin-bottom: 16px; }
  .modal .form-group input, .modal .form-group select, .modal .form-group textarea {
    width: 100%;
  }
  .modal-price-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    background: rgba(196,81,10,0.06);
    border: 1px solid rgba(196,81,10,0.18);
    margin-bottom: 20px;
    border-radius: 2px;
  }
  .modal-price-row span { font-family: 'Cinzel', serif; font-size: 13px; color: var(--text-muted); letter-spacing: 1px; }
  .modal-price-row strong { font-family: 'Cinzel Decorative', serif; font-size: 24px; color: var(--saffron); }
  .modal-submit {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, var(--saffron), var(--deep-saffron));
    border: none;
    color: white;
    font-family: 'Cinzel', serif;
    font-size: 13px;
    letter-spacing: 3px;
    text-transform: uppercase;
    cursor: pointer;
    transition: opacity 0.2s;
    margin-top: 4px;
  }
  .modal-submit:hover { opacity: 0.85; }

  /* ═══════════════════════════════════════
     FOOTER CTA
  ═══════════════════════════════════════ */
  .footer-cta {
    text-align: center;
    padding: 80px 24px;
    background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(196,81,10,0.07) 0%, transparent 70%);
  }
  .footer-cta h2 { font-family: 'Cinzel Decorative', serif; font-size: clamp(22px, 4vw, 42px); color: var(--gold-light); margin-bottom: 16px; }
  .footer-cta p { max-width: 560px; margin: 0 auto 36px; color: var(--text-muted); font-size: 17px; }

  footer {
    border-top: 1px solid var(--dark-border);
    padding: 24px;
    text-align: center;
    font-family: 'Cinzel', serif;
    font-size: 11px;
    letter-spacing: 2px;
    color: var(--text-muted);
  }
  footer a { color: var(--gold); text-decoration: none; }

  /* ═══════════════════════════════════════
     RESPONSIVE
  ═══════════════════════════════════════ */
  @media (max-width: 700px) {
    .date-card { grid-template-columns: 72px 1fr; }
    .date-book { display: none; }
    .date-card { border-bottom: 1px solid var(--dark-border); }
    .steps { grid-template-columns: 1fr 1fr; }
    .step { border-right: none; border-bottom: 1px solid var(--dark-border); }
  }

  /* Fade-in on scroll */
  .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <canvas id="fireCanvas"></canvas>

      <div className="page-wrap">

        {/* ══════════════════════════════ HERO ══════════════════════════════ */}
        <section className="hero">
          <div className="om-symbol">ॐ</div>

          <p className="hero-eyebrow">Bajrangi Dhaam presents</p>

          <h1 className="hero-title">
            Rudrabhishek
            <br />
            Puja
          </h1>

          <p className="hero-subtitle">
            The Sacred Anointing of Lord Shiva
          </p>

          <div className="hero-divider">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>

          <p className="hero-desc">
            The most potent Vedic ritual known to dissolve karma, awaken divine
            grace, and forge an unbreakable bond between the seeker and Lord Rudra
            — performed with full Vedic Vidhi at the sacred Bajrangi Dhaam.
          </p>

          <div className="hero-cta-row">
            <a href="#book-puja" className="btn-primary">
              🔔 Book Your Puja
            </a>

            <a href="#upcoming-dates" className="btn-secondary">
              📅 View Upcoming Dates
            </a>
          </div>

          <div className="scroll-hint">
            <span>DISCOVER MORE</span>
            <span className="arrow">↓</span>
          </div>
        </section>

        {/* ══════════════════════════════ TRUST STRIP ══════════════════════════════ */}
        <section className="trust-section">
          <div
            className="section-inner"
            style={{ padding: "40px 24px" }}
          >
            <div className="trust-grid">

              <div className="trust-item fade-in">
                <div className="trust-num">25+</div>
                <div className="trust-label">Years of Practice</div>
              </div>

              <div className="trust-item fade-in">
                <div className="trust-num">50+</div>
                <div className="trust-label">Countries Served</div>
              </div>

              <div className="trust-item fade-in">
                <div className="trust-num">1M+</div>
                <div className="trust-label">YouTube Subscribers</div>
              </div>

              <div className="trust-item fade-in">
                <div className="trust-num">100%</div>
                <div className="trust-label">Vedic Authenticity</div>
              </div>

              <div className="trust-item fade-in">
                <div className="trust-num">Live</div>
                <div className="trust-label">Streaming Available</div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════ UPCOMING DATES ══════════════════════════════ */}
        <section className="dates-section" id="upcoming-dates">
          <div className="section-inner">

            <div className="section-heading fade-in">
              <p className="eyebrow">Sacred Calendar</p>

              <h2>Upcoming Rudrabhishek Dates</h2>

              <div className="rule"></div>
            </div>

            {/* Admin Bar */}
            <div className="admin-bar fade-in">
              <span>🛕 Admin — Bajrangi Ram</span>

              <div className="admin-actions">
                <button
                  className="admin-btn"
                  onClick={toggleAddForm}
                >
                  + Add Puja Date
                </button>

                <button
                  className="admin-btn danger"
                  onClick={clearAll}
                >
                  Clear All
                </button>
              </div>
            </div>

            {/* Add Form */}
            <div id="addEventForm">

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="f_date">Puja Date *</label>
                  <input type="date" id="f_date" />
                </div>

                <div className="form-group">
                  <label htmlFor="f_title">Occasion / Title</label>
                  <input
                    type="text"
                    id="f_title"
                    placeholder="e.g. Sawan Somvar, Maha Shivratri"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="f_time">Puja Time *</label>
                  <input type="time" id="f_time" />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="f_type">Type</label>

                  <select id="f_type">
                    <option value="both">Group + Individual</option>
                    <option value="group">Group Only</option>
                    <option value="individual">Individual Only</option>
                    <option value="special">Special Puja</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="f_note">Note (optional)</label>

                  <input
                    type="text"
                    id="f_note"
                    placeholder="e.g. Amavasya special, Pradosh Vrat"
                  />
                </div>

              </div>

              <button
                className="form-save-btn"
                onClick={addEvent}
              >
                ✦ Save Puja Date
              </button>
            </div>

            {/* Events List */}
            <div className="dates-grid" id="eventsGrid">
              {/* Populated by JS */}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════ WHY RUDRABHISHEK ══════════════════════════════ */}
        <section>
          <div className="section-inner">

            <div className="section-heading fade-in">
              <p className="eyebrow">The Power of Rudrabhishek</p>

              <h2>What This Sacred Puja Can Do for You</h2>

              <div className="rule"></div>
            </div>

            <div className="benefits-grid">

              <div className="benefit-card fade-in">
                <span className="benefit-icon">🐍</span>

                <h3>Dissolves Doshas &amp; Curses</h3>

                <p>
                  Rudrabhishek is the supreme remedy for Kaal Sarp Dosha,
                  Pitra Dosha, Shani Dosh, and ancestral curses that block
                  prosperity and peace across generations.
                </p>
              </div>

              <div className="benefit-card fade-in">
                <span className="benefit-icon">🧘</span>

                <h3>Restores Mental Peace</h3>

                <p>
                  When the mind is tormented by anxiety, fear, or recurring
                  negative thoughts, Lord Shiva&apos;s Abhishek washes away
                  the emotional debris and brings profound stillness.
                </p>
              </div>

              <div className="benefit-card fade-in">
                <span className="benefit-icon">💼</span>

                <h3>Unlocks Career &amp; Wealth</h3>

                <p>
                  Stagnation in business, job losses, or financial blocks often
                  stem from karmic debt. Rudrabhishek cleanses this karma and
                  opens new doors of abundance.
                </p>
              </div>

              <div className="benefit-card fade-in">
                <span className="benefit-icon">🏥</span>

                <h3>Heals Chronic Illness</h3>

                <p>
                  Many long-standing physical ailments have a karmic or
                  negative-energy root. The sacred vibrations of Rudra
                  recitation penetrate the subtle body and begin deep healing.
                </p>
              </div>

              <div className="benefit-card fade-in">
                <span className="benefit-icon">🛡️</span>

                <h3>Protection from Evil Energies</h3>

                <p>
                  Creates a powerful divine shield against black magic, evil eye,
                  and negative influences — keeping you and your family safe in
                  every dimension.
                </p>
              </div>

              <div className="benefit-card fade-in">
                <span className="benefit-icon">💑</span>

                <h3>Harmonises Marriage &amp; Family</h3>

                <p>
                  Marital discord, delayed marriage, or family conflicts caused by
                  planetary afflictions are soothed by Lord Shiva&apos;s
                  compassionate grace after this puja.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════ THE RUDRA CONNECTION ══════════════════════════════ */}
        <section className="narrative-section">
          <div className="section-inner">

            <div className="narrative-block">

              <div className="narrative-text fade-in">

                <h2>Who Is Rudra — And Why Does He Answer?</h2>

                <p>
                  Rudra is not merely a name. It is the primal sound that the
                  cosmos itself uttered at the moment of creation. Rudra is the
                  aspect of Lord Shiva who dissolves what needs to end — pain,
                  disease, negativity, and accumulated karma — so that the new
                  and divine can take its place.
                </p>

                <blockquote className="highlight">
                  &quot;Those who bathe the Shivalingam with pure water, milk,
                  and devotion do not merely perform a ritual — they become one
                  with the flow of divine consciousness.&quot;
                </blockquote>

                <p>
                  The Vedic texts declare: <em>Rudrabhishek creates a divine bridge
                    between the mortal and Rudra himself.</em> When the Namakam and
                  Chamakam are chanted, each verse is a surrender — a stripping away
                  of the false self.
                </p>

                <p>
                  By the end of the puja, the devotee does not just receive blessings.
                  They{" "}
                  <strong style={{ color: "var(--gold-light)" }}>
                    become connected to Rudra
                  </strong>{" "}
                  — eternally protected, guided, and beloved by Lord Shiva.
                </p>

                <p>
                  This is why our ancestors never treated Rudrabhishek as an optional
                  ritual. It was considered <em>the most essential act of a lifetime</em> —
                  the one puja that could alter the entire arc of one&apos;s karma.
                </p>

              </div>

              <div className="shiva-visual fade-in">
                <div className="shiva-mandala">
                  <div className="mandala-ring"></div>
                  <div className="mandala-ring"></div>
                  <div className="mandala-ring"></div>

                  <div className="mandala-center">🕉️</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════ BOOK PUJA OPTIONS ══════════════════════════════ */}
        <section id="book-puja">
          <div className="section-inner">

            <div className="section-heading fade-in">
              <p className="eyebrow">Choose Your Participation</p>

              <h2>Book Your Rudrabhishek</h2>

              <div className="rule"></div>
            </div>

            <div className="puja-options">

              <div className="puja-card fade-in">

                <span className="puja-icon">🙏</span>

                <h3>Samuhik (Group) Puja</h3>

                <div className="puja-price">₹500</div>

                <div className="puja-price-label">per sankalp</div>

                <ul className="puja-features">
                  <li>Collective Rudra Abhishek with shared sankalp</li>
                  <li>Your name &amp; gotra included in the sankalp</li>
                  <li>Live streaming access provided</li>
                  <li>Video recording sent if unavailable</li>
                  <li>Blessings of unified divine energy</li>
                </ul>

                <button
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => openModal("group")}
                >
                  Book Group Puja — ₹500
                </button>

              </div>

              <div className="puja-card featured fade-in">

                <span className="puja-badge">Most Powerful</span>

                <span className="puja-icon">✨</span>

                <h3>Vyaktigat (Individual) Puja</h3>

                <div className="puja-price">₹5,100</div>

                <div className="puja-price-label">exclusive ritual</div>

                <ul className="puja-features">
                  <li>Puja performed exclusively for you</li>
                  <li>Aligned to your Kundli &amp; specific concern</li>
                  <li>Personalized sankalp with full details</li>
                  <li>Live streaming — your puja, your name</li>
                  <li>Prasad &amp; energized Rudraksha couriered home</li>
                  <li>Post-puja guidance from Dr. Bajrangi&apos;s team</li>
                </ul>

                <button
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg,var(--gold),var(--saffron))",
                  }}
                  onClick={() => openModal("individual")}
                >
                  Book Individual Puja — ₹5,100
                </button>

              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════ HOW IT WORKS ══════════════════════════════ */}
        <section
          style={{
            background: "var(--dark-mid)",
            borderTop: "1px solid var(--dark-border)",
            borderBottom: "1px solid var(--dark-border)",
          }}
        >
          <div className="section-inner">
            <div className="section-heading fade-in">
              <p className="eyebrow">Simple Process</p>

              <h2>How to Participate</h2>

              <div className="rule"></div>
            </div>

            <div className="steps">
              <div className="step fade-in">
                <div className="step-num">01</div>

                <span className="step-icon">📝</span>

                <h3>Book &amp; Pay</h3>

                <p>
                  Choose Group or Individual. Fill your details and complete
                  payment securely.
                </p>
              </div>

              <div className="step fade-in">
                <div className="step-num">02</div>

                <span className="step-icon">📲</span>

                <h3>Receive Confirmation</h3>

                <p>
                  Get your puja date, live link, and sankalp confirmation on
                  WhatsApp/email.
                </p>
              </div>

              <div className="step fade-in">
                <div className="step-num">03</div>

                <span className="step-icon">🔴</span>

                <h3>Watch Live</h3>

                <p>
                  Join from anywhere in the world. Watch your puja performed live
                  at Bajrangi Dhaam.
                </p>
              </div>

              <div className="step fade-in">
                <div className="step-num">04</div>

                <span className="step-icon">📦</span>

                <h3>Receive Prasad</h3>

                <p>
                  Energized prasad and sacred items couriered to your registered
                  address (Individual Puja).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ FAQ ══════════════════════════════ */}
        <section>
          <div className="section-inner">
            <div className="section-heading fade-in">
              <p className="eyebrow">Common Questions</p>

              <h2>Frequently Asked Questions</h2>

              <div className="rule"></div>
            </div>

            <div className="faq-list fade-in">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    type="button"
                    className={`faq-q ${openFaq === index ? "open" : ""}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}

                    <span className="chevron">
                      {openFaq === index ? "▴" : "▾"}
                    </span>
                  </button>

                  <div className={`faq-a ${openFaq === index ? "open" : ""}`}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ FOOTER CTA ══════════════════════════════ */}
        <section className="footer-cta">
          <div
            className="om-symbol"
            style={{
              fontSize: "50px",
              marginBottom: "16px",
            }}
          >
            🕉️
          </div>

          <h2>Let Rudra&apos;s Grace Find You</h2>

          <p>
            Do not wait for the right moment. In the eyes of Lord Shiva, the most
            auspicious moment is always the one where you choose to turn toward
            Him.
          </p>

          <div className="hero-cta-row">
            <button
              className="btn-primary"
              onClick={() => openModal("group")}
            >
              Book Group Puja — ₹500
            </button>

            <button
              className="btn-primary"
              style={{
                background:
                  "linear-gradient(135deg,var(--gold),var(--saffron))",
              }}
              onClick={() => openModal("individual")}
            >
              Book Individual Puja — ₹5,100
            </button>
          </div>
        </section>

        <footer>
          <p>
            © 2026{" "}
            <a
              href="https://www.vinaybajrangi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bajrangi Dhaam
            </a>{" "}
            · Dr. Vinay Bajrangi · Vedic Astrology &amp; Puja Services · All
            rights reserved
          </p>
        </footer>

        {/* .page-wrap */}

      </div>


      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="modal">
            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
            >
              ✕
            </button>

            <h3>
              {currentType === "group"
                ? "Book Samuhik (Group) Puja"
                : "Book Vyaktigat (Individual) Puja"}
            </h3>

            <p className="modal-sub">
              {currentType === "group"
                ? "Collective Rudrabhishek at Bajrangi Dhaam"
                : "Exclusive Personal Rudrabhishek at Bajrangi Dhaam"}
            </p>

            <div className="modal-price-row">
              <span>Puja Fee</span>

              <strong>
                {currentType === "group" ? "₹500" : "₹5,100"}
              </strong>
            </div>

            <div className="form-group">
              <label htmlFor="m_name">Full Name *</label>

              <input
                id="m_name"
                type="text"
                placeholder="Your name as per Kundli"
                value={bookingData.name}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="m_gotra">Gotra (if known)</label>

              <input
                id="m_gotra"
                type="text"
                placeholder="e.g. Kashyap, Bharadwaj"
                value={bookingData.gotra}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    gotra: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="m_mobile">Mobile Number *</label>

              <input
                id="m_mobile"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={bookingData.mobile}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    mobile: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="m_email">Email Address</label>

              <input
                id="m_email"
                type="email"
                placeholder="For live stream link"
                value={bookingData.email}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    email: e.target.value,
                  })
                }
              />
            </div>

            {currentType === "individual" && (
              <>
                <div className="form-group">
                  <label htmlFor="m_concern">
                    Your Specific Concern (for Individual Puja)
                  </label>

                  <textarea
                    id="m_concern"
                    rows={3}
                    placeholder="e.g. health issues since 2 years, career blocked, delayed marriage…"
                    value={bookingData.concern}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        concern: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="m_address">
                    Delivery Address (for Prasad)
                  </label>

                  <textarea
                    id="m_address"
                    rows={3}
                    placeholder="Full postal address for prasad courier"
                    value={bookingData.address}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
              </>
            )}

            <button
              type="button"
              className="modal-submit"
              onClick={submitBooking}
            >
              🔔 Confirm Booking &amp; Proceed to Payment
            </button>
          </div>
        </div>
      )}


    </>
  );
}