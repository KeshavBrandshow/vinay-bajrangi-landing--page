export default function BaglamukhiPooja() {
    return (
        <>
            <style jsx global>{`
                :root {
                    --bg: #1a1608;
                    --bg-mid: #201c0a;
                    --bg-card: #252010;
                    --bg-card2: #1e1a08;
                    --border: #3a3210;
                    --border-lt: #504820;

                    --yellow: #e8c020;
                    --yellow-lt: #f4d840;
                    --yellow-pale: #fff8c0;
                    --yellow-deep: #c09800;
                    --turmeric: #d4a800;
                    --turmeric-dk: #a07800;

                    --red: #c02020;
                    --red-lt: #e03030;

                    --text: #fff8d0;
                    --text-mid: #c8b870;
                    --text-muted: #807040;
                    --white: #ffffff;
                }

                *,
                *::before,
                *::after {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                html {
                    scroll-behavior: smooth;
                }

                body {
                    background: var(--bg);
                    color: var(--text);
                    font-family: "Cormorant Garamond", serif;
                    font-size: 19px;
                    line-height: 1.8;
                    overflow-x: hidden;
                }

                /* ══════════════════════════════════════════════
   LIGHTNING CANVAS
══════════════════════════════════════════════ */
                #bgCanvas {
                    position: fixed;
                    inset: 0;
                    pointer-events: none;
                    z-index: 0;
                    opacity: 0.12;
                }

                body::before {
                    content: "";
                    position: fixed;
                    inset: 0;
                    background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232, 192, 32, 0.14) 0%, transparent 60%),
                        radial-gradient(ellipse 60% 40% at 10% 60%, rgba(192, 32, 32, 0.06) 0%, transparent 50%),
                        radial-gradient(ellipse 50% 50% at 90% 80%, rgba(192, 32, 32, 0.05) 0%, transparent 50%);
                    pointer-events: none;
                    z-index: 0;
                }

                .page {
                    position: relative;
                    z-index: 1;
                }

                /* ══════════════════════════════════════════════
   NEXT PUJA DATE BANNER (top holder)
══════════════════════════════════════════════ */
                .next-puja-banner {
                    background: linear-gradient(90deg, #c09800, #e8c020, #c09800);
                    color: #1a1608;
                    padding: 0;
                    position: relative;
                    overflow: hidden;
                }
                .next-puja-banner::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 2 L38 20 L20 38 L2 20z' fill='%231A1608' fill-opacity='0.06'/%3E%3C/svg%3E")
                        repeat;
                }
                .banner-inner {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 12px;
                    max-width: 1060px;
                    margin: 0 auto;
                    padding: 14px 24px;
                }
                .banner-left {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }
                .banner-icon {
                    font-size: 22px;
                }
                .banner-text {
                    font-family: "Cinzel", serif;
                }
                .banner-text .bt-label {
                    font-size: 9px;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    opacity: 0.7;
                }
                .banner-text .bt-date {
                    font-size: 15px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    color: #1a1608;
                }
                .banner-text .bt-note {
                    font-size: 11px;
                    opacity: 0.75;
                }
                .banner-edit-btn {
                    padding: 7px 18px;
                    background: rgba(26, 22, 8, 0.15);
                    border: 1px solid rgba(26, 22, 8, 0.3);
                    color: #1a1608;
                    font-family: "Cinzel", serif;
                    font-size: 10px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    cursor: pointer;
                    border-radius: 2px;
                    transition: background 0.2s;
                }
                .banner-edit-btn:hover {
                    background: rgba(26, 22, 8, 0.25);
                }

                /* Inline edit form */
                .banner-edit-form {
                    display: none;
                    background: #1a1608;
                    border-bottom: 2px solid var(--yellow);
                    padding: 16px 24px;
                }
                .banner-edit-form.open {
                    display: block;
                }
                .bef-inner {
                    max-width: 1060px;
                    margin: 0 auto;
                    display: flex;
                    gap: 14px;
                    flex-wrap: wrap;
                    align-items: flex-end;
                }
                .bef-group {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .bef-group label {
                    font-family: "Cinzel", serif;
                    font-size: 9px;
                    letter-spacing: 2px;
                    color: var(--text-muted);
                    text-transform: uppercase;
                }
                .bef-group input,
                .bef-group select {
                    padding: 8px 12px;
                    background: var(--bg-card);
                    border: 1px solid var(--border-lt);
                    color: var(--text);
                    font-family: "Cormorant Garamond", serif;
                    font-size: 16px;
                    border-radius: 2px;
                    outline: none;
                }
                .bef-group input:focus {
                    border-color: var(--yellow);
                }
                .bef-save {
                    padding: 8px 20px;
                    background: var(--yellow);
                    border: none;
                    color: #1a1608;
                    font-family: "Cinzel", serif;
                    font-size: 10px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    cursor: pointer;
                    border-radius: 2px;
                    transition: opacity 0.2s;
                }
                .bef-save:hover {
                    opacity: 0.85;
                }

                /* ══════════════════════════════════════════════
   TOPBAR
══════════════════════════════════════════════ */
                .topbar {
                    background: #100e04;
                    border-bottom: 1px solid var(--border);
                    text-align: center;
                    padding: 10px 24px;
                    font-family: "Cinzel", serif;
                    font-size: 11px;
                    letter-spacing: 3px;
                    color: var(--text-muted);
                }
                .topbar a {
                    color: var(--yellow);
                    text-decoration: none;
                }
                .topbar span {
                    color: var(--red);
                    margin: 0 8px;
                }

                /* ══════════════════════════════════════════════
   HERO
══════════════════════════════════════════════ */
                .hero {
                    min-height: 96vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 64px 24px 80px;
                    position: relative;
                    overflow: hidden;
                }
                .hero::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 4 L76 40 L40 76 L4 40z' fill='none' stroke='%23E8C020' stroke-opacity='0.04' stroke-width='1'/%3E%3C/svg%3E")
                        repeat;
                    pointer-events: none;
                }

                .hero-deity {
                    font-size: 78px;
                    display: block;
                    margin-bottom: 18px;
                    filter: drop-shadow(0 0 28px rgba(232, 192, 32, 0.7));
                    animation: deity-glow 4s ease-in-out infinite;
                }
                @keyframes deity-glow {
                    0%,
                    100% {
                        filter: drop-shadow(0 0 24px rgba(232, 192, 32, 0.6));
                        transform: scale(1);
                    }
                    50% {
                        filter: drop-shadow(0 0 50px rgba(232, 192, 32, 0.9));
                        transform: scale(1.05);
                    }
                }

                .hero-eyebrow {
                    font-family: "Cinzel", serif;
                    font-size: 11px;
                    letter-spacing: 6px;
                    color: var(--turmeric);
                    text-transform: uppercase;
                    margin-bottom: 14px;
                }

                .hero-title {
                    font-family: "Abril Fatface", serif;
                    font-size: clamp(42px, 8vw, 96px);
                    line-height: 1;
                    margin-bottom: 10px;
                    color: var(--yellow-lt);
                    text-shadow:
                        0 0 60px rgba(232, 192, 32, 0.3),
                        0 2px 0 rgba(0, 0, 0, 0.4);
                    letter-spacing: 2px;
                }

                .hero-devanagari {
                    font-size: clamp(18px, 3vw, 28px);
                    color: var(--turmeric);
                    letter-spacing: 3px;
                    margin-bottom: 8px;
                    font-style: italic;
                }

                .hero-power-line {
                    font-family: "Cinzel", serif;
                    font-size: clamp(12px, 2vw, 17px);
                    letter-spacing: 3px;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    margin-bottom: 28px;
                }

                .hero-divider {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    max-width: 380px;
                    margin: 0 auto 28px;
                }
                .hero-divider .line {
                    height: 1px;
                    flex: 1;
                    background: linear-gradient(to right, transparent, var(--yellow));
                }
                .hero-divider .line:last-child {
                    background: linear-gradient(to left, transparent, var(--yellow));
                }
                .hero-divider i {
                    color: var(--yellow-lt);
                    font-style: normal;
                    font-size: 16px;
                }

                .hero-desc {
                    max-width: 680px;
                    font-size: 20px;
                    color: var(--text-mid);
                    line-height: 1.9;
                    margin-bottom: 20px;
                }
                .hero-desc strong {
                    color: var(--text);
                }

                /* Urgency pill */
                .urgency-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 20px;
                    background: rgba(192, 32, 32, 0.15);
                    border: 1px solid rgba(192, 32, 32, 0.4);
                    color: #ff8080;
                    font-family: "Cinzel", serif;
                    font-size: 11px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    border-radius: 2px;
                    margin-bottom: 36px;
                    animation: urgency-pulse 2.5s ease-in-out infinite;
                }
                @keyframes urgency-pulse {
                    0%,
                    100% {
                        border-color: rgba(192, 32, 32, 0.4);
                    }
                    50% {
                        border-color: rgba(192, 32, 32, 0.8);
                        box-shadow: 0 0 16px rgba(192, 32, 32, 0.2);
                    }
                }
                .urgency-dot {
                    width: 7px;
                    height: 7px;
                    background: var(--red-lt);
                    border-radius: 50%;
                    animation: dot-blink 1.2s ease-in-out infinite;
                }
                @keyframes dot-blink {
                    0%,
                    100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.2;
                    }
                }

                .cta-row {
                    display: flex;
                    gap: 14px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                /* ══════════════════════════════════════════════
   BUTTONS
══════════════════════════════════════════════ */
                .btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 16px 34px;
                    background: linear-gradient(135deg, var(--yellow), var(--yellow-deep));
                    color: #1a1608;
                    font-family: "Cinzel", serif;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                    border: none;
                    cursor: pointer;
                    text-decoration: none;
                    clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
                    transition: all 0.3s;
                    box-shadow: 0 4px 24px rgba(232, 192, 32, 0.35);
                }
                .btn-primary:hover {
                    background: linear-gradient(135deg, var(--yellow-lt), var(--yellow));
                    transform: translateY(-2px);
                    box-shadow: 0 6px 36px rgba(232, 192, 32, 0.55);
                }

                .btn-outline {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 15px 34px;
                    background: transparent;
                    color: var(--yellow-lt);
                    font-family: "Cinzel", serif;
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                    border: 1px solid var(--yellow-deep);
                    cursor: pointer;
                    text-decoration: none;
                    clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
                    transition: all 0.3s;
                }
                .btn-outline:hover {
                    background: rgba(232, 192, 32, 0.08);
                    border-color: var(--yellow);
                }

                /* ══════════════════════════════════════════════
   SECTION FRAMEWORK
══════════════════════════════════════════════ */
                section {
                    position: relative;
                }
                .section-inner {
                    max-width: 1060px;
                    margin: 0 auto;
                    padding: 72px 24px;
                }

                .section-label {
                    font-family: "Cinzel", serif;
                    font-size: 10px;
                    letter-spacing: 5px;
                    color: var(--turmeric);
                    text-transform: uppercase;
                    margin-bottom: 10px;
                }
                h2.section-title {
                    font-family: "Abril Fatface", serif;
                    font-size: clamp(24px, 4vw, 46px);
                    color: var(--yellow-lt);
                    line-height: 1.15;
                    margin-bottom: 12px;
                }
                h2.section-title .red {
                    color: var(--red-lt);
                }
                .section-rule {
                    width: 56px;
                    height: 3px;
                    background: linear-gradient(to right, var(--yellow), transparent);
                    margin-bottom: 36px;
                    border-radius: 2px;
                }
                h3.sub-title {
                    font-family: "Cinzel", serif;
                    font-size: 14px;
                    color: var(--yellow-lt);
                    letter-spacing: 1px;
                    margin: 32px 0 10px;
                }
                h3.sub-title::before {
                    content: "▸ ";
                    color: var(--red-lt);
                    font-size: 11px;
                }
                p.body-text {
                    color: var(--text-mid);
                    font-size: 18px;
                    line-height: 1.9;
                    margin-bottom: 14px;
                }
                .pull-quote {
                    font-style: italic;
                    font-size: 20px;
                    color: var(--text);
                    border-left: 3px solid var(--yellow);
                    padding: 14px 22px;
                    margin: 24px 0;
                    background: rgba(232, 192, 32, 0.05);
                    line-height: 1.75;
                }

                .alt-bg {
                    background: var(--bg-mid);
                    border-top: 1px solid var(--border);
                    border-bottom: 1px solid var(--border);
                }
                .deep-bg {
                    background: var(--bg-card);
                    border-top: 1px solid var(--border);
                    border-bottom: 1px solid var(--border);
                }

                /* ══════════════════════════════════════════════
   PROBLEM CARDS — who needs this puja
══════════════════════════════════════════════ */
                .problem-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
                    gap: 16px;
                }
                .problem-card {
                    padding: 26px 22px;
                    background: var(--bg-card2);
                    border: 1px solid var(--border);
                    border-left: 3px solid var(--red);
                    position: relative;
                    overflow: hidden;
                    transition: all 0.25s;
                }
                .problem-card::after {
                    content: "";
                    position: absolute;
                    top: -30px;
                    right: -30px;
                    width: 80px;
                    height: 80px;
                    background: radial-gradient(circle, rgba(232, 192, 32, 0.06) 0%, transparent 70%);
                    border-radius: 50%;
                }
                .problem-card:hover {
                    border-left-color: var(--yellow);
                    background: rgba(232, 192, 32, 0.03);
                    transform: translateX(4px);
                }
                .problem-card .pc-icon {
                    font-size: 28px;
                    margin-bottom: 12px;
                    display: block;
                }
                .problem-card h3 {
                    font-family: "Cinzel", serif;
                    font-size: 13px;
                    color: var(--yellow-lt);
                    letter-spacing: 1px;
                    margin-bottom: 8px;
                }
                .problem-card p {
                    font-size: 15px;
                    color: var(--text-muted);
                    line-height: 1.7;
                }

                /* ══════════════════════════════════════════════
   AMAVASYA DATE HOLDER
══════════════════════════════════════════════ */
                .dates-admin-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 12px;
                    padding: 14px 20px;
                    background: rgba(232, 192, 32, 0.05);
                    border: 1px solid var(--border-lt);
                    margin-bottom: 20px;
                }
                .admin-label {
                    font-family: "Cinzel", serif;
                    font-size: 10px;
                    letter-spacing: 2px;
                    color: var(--turmeric);
                    text-transform: uppercase;
                }
                .admin-actions {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                .admin-btn {
                    padding: 7px 16px;
                    background: rgba(232, 192, 32, 0.07);
                    border: 1px solid var(--yellow-deep);
                    color: var(--yellow-lt);
                    font-family: "Cinzel", serif;
                    font-size: 10px;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    cursor: pointer;
                    border-radius: 2px;
                    transition: all 0.2s;
                }
                .admin-btn:hover {
                    background: rgba(232, 192, 32, 0.15);
                }
                .admin-btn.danger {
                    border-color: var(--red);
                    color: #ff8080;
                    background: rgba(192, 32, 32, 0.06);
                }
                .admin-btn.danger:hover {
                    background: rgba(192, 32, 32, 0.14);
                }

                #addDateForm {
                    display: none;
                    background: rgba(232, 192, 32, 0.03);
                    border: 1px solid var(--border);
                    padding: 22px;
                    margin-bottom: 22px;
                }
                #addDateForm.visible {
                    display: block;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 14px;
                    margin-bottom: 14px;
                }
                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .form-group label {
                    font-family: "Cinzel", serif;
                    font-size: 10px;
                    letter-spacing: 2px;
                    color: var(--text-muted);
                    text-transform: uppercase;
                }
                .form-group input,
                .form-group select,
                .form-group textarea {
                    padding: 10px 14px;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid var(--border-lt);
                    color: var(--text);
                    font-family: "Cormorant Garamond", serif;
                    font-size: 16px;
                    border-radius: 2px;
                    outline: none;
                    transition: border-color 0.2s;
                }
                .form-group input:focus,
                .form-group select:focus {
                    border-color: var(--yellow);
                }
                .form-group select option {
                    background: #201c0a;
                    color: var(--text);
                }
                .form-save-btn {
                    padding: 10px 24px;
                    background: linear-gradient(135deg, var(--yellow), var(--yellow-deep));
                    border: none;
                    color: #1a1608;
                    font-family: "Cinzel", serif;
                    font-size: 10px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    cursor: pointer;
                    border-radius: 2px;
                    transition: opacity 0.2s;
                }
                .form-save-btn:hover {
                    opacity: 0.85;
                }

                .dates-grid {
                    display: grid;
                    gap: 12px;
                }
                .date-card {
                    display: grid;
                    grid-template-columns: 86px 1fr auto;
                    align-items: center;
                    gap: 20px;
                    padding: 18px 22px;
                    background: var(--bg-card2);
                    border: 1px solid var(--border);
                    border-left: 3px solid var(--yellow-deep);
                    transition: all 0.25s;
                }
                .date-card:hover {
                    border-left-color: var(--yellow);
                    background: rgba(232, 192, 32, 0.03);
                }
                .date-badge {
                    text-align: center;
                    background: rgba(232, 192, 32, 0.08);
                    border: 1px solid rgba(232, 192, 32, 0.2);
                    padding: 10px 6px;
                    border-radius: 2px;
                }
                .date-badge .db-day {
                    font-family: "Abril Fatface", serif;
                    font-size: 28px;
                    color: var(--yellow-lt);
                    line-height: 1;
                }
                .date-badge .db-month {
                    font-family: "Cinzel", serif;
                    font-size: 10px;
                    letter-spacing: 2px;
                    color: var(--turmeric);
                    text-transform: uppercase;
                    margin-top: 4px;
                }
                .date-badge .db-year {
                    font-family: "Cinzel", serif;
                    font-size: 9px;
                    color: var(--text-muted);
                }
                .date-info h3 {
                    font-family: "Cinzel", serif;
                    font-size: 13px;
                    color: var(--yellow-lt);
                    letter-spacing: 1px;
                    margin-bottom: 4px;
                }
                .date-info p {
                    font-size: 14px;
                    color: var(--text-muted);
                    line-height: 1.5;
                }
                .date-tags {
                    display: flex;
                    gap: 7px;
                    margin-top: 7px;
                    flex-wrap: wrap;
                }
                .dtag {
                    padding: 2px 10px;
                    font-family: "Cinzel", serif;
                    font-size: 9px;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    border-radius: 20px;
                }
                .dtag.amavas {
                    background: rgba(192, 32, 32, 0.12);
                    color: #ff8080;
                    border: 1px solid rgba(192, 32, 32, 0.3);
                }
                .dtag.court {
                    background: rgba(232, 192, 32, 0.1);
                    color: var(--yellow-lt);
                    border: 1px solid rgba(232, 192, 32, 0.25);
                }
                .dtag.special {
                    background: rgba(120, 80, 200, 0.12);
                    color: #b090f0;
                    border: 1px solid rgba(120, 80, 200, 0.3);
                }
                .date-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    align-items: flex-end;
                }
                .book-btn {
                    padding: 10px 20px;
                    background: linear-gradient(135deg, var(--yellow), var(--yellow-deep));
                    color: #1a1608;
                    border: none;
                    cursor: pointer;
                    font-family: "Cinzel", serif;
                    font-size: 10px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    white-space: nowrap;
                    transition: all 0.25s;
                    clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
                }
                .book-btn:hover {
                    background: linear-gradient(135deg, var(--yellow-lt), var(--yellow));
                    box-shadow: 0 4px 16px rgba(232, 192, 32, 0.4);
                }
                .del-btn {
                    padding: 4px 12px;
                    background: transparent;
                    border: 1px solid #302810;
                    color: #504020;
                    font-size: 10px;
                    cursor: pointer;
                    border-radius: 2px;
                    transition: all 0.2s;
                }
                .del-btn:hover {
                    border-color: var(--red);
                    color: #ff8080;
                }
                .no-dates {
                    text-align: center;
                    padding: 40px;
                    color: var(--text-muted);
                    font-style: italic;
                    border: 1px dashed var(--border);
                }

                /* ══════════════════════════════════════════════
   WHO IS BAGLAMUKHI — 2 col
══════════════════════════════════════════════ */
                .intro-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 52px;
                    align-items: center;
                }
                @media (max-width: 720px) {
                    .intro-layout {
                        grid-template-columns: 1fr;
                    }
                }
                .yantra-visual {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .yantra-frame {
                    width: 260px;
                    height: 260px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .yantra-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 1px solid rgba(232, 192, 32, 0.3);
                    animation: spin-y 20s linear infinite;
                }
                .yantra-ring:nth-child(1) {
                    inset: 0;
                }
                .yantra-ring:nth-child(2) {
                    inset: 24px;
                    animation-direction: reverse;
                    animation-duration: 14s;
                    border-color: rgba(192, 32, 32, 0.25);
                }
                .yantra-ring:nth-child(3) {
                    inset: 48px;
                    animation-duration: 28s;
                    border-color: rgba(232, 192, 32, 0.2);
                }
                @keyframes spin-y {
                    to {
                        transform: rotate(360deg);
                    }
                }
                .yantra-center {
                    font-size: 80px;
                    filter: drop-shadow(0 0 24px rgba(232, 192, 32, 0.8));
                    animation: deity-glow 4s ease-in-out infinite;
                    z-index: 1;
                }

                /* ══════════════════════════════════════════════
   POWERS LIST
══════════════════════════════════════════════ */
                .powers-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
                    gap: 14px;
                }
                .power-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    padding: 18px 20px;
                    background: var(--bg-card2);
                    border: 1px solid var(--border);
                    transition:
                        border-color 0.2s,
                        background 0.2s;
                }
                .power-item:hover {
                    border-color: var(--yellow-deep);
                    background: rgba(232, 192, 32, 0.03);
                }
                .power-item .pi-icon {
                    font-size: 26px;
                    flex-shrink: 0;
                    margin-top: 2px;
                }
                .power-item .pi-content h4 {
                    font-family: "Cinzel", serif;
                    font-size: 12px;
                    color: var(--yellow-lt);
                    letter-spacing: 1px;
                    margin-bottom: 4px;
                }
                .power-item .pi-content p {
                    font-size: 15px;
                    color: var(--text-muted);
                    line-height: 1.65;
                }

                /* ══════════════════════════════════════════════
   PROCESS STEPS
══════════════════════════════════════════════ */
                .process-strip {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1px;
                    background: var(--border);
                    border: 1px solid var(--border);
                    overflow: hidden;
                }
                .process-step {
                    padding: 30px 22px;
                    background: var(--bg-card);
                    text-align: center;
                    transition: background 0.2s;
                }
                .process-step:hover {
                    background: rgba(232, 192, 32, 0.04);
                }
                .ps-num {
                    font-family: "Abril Fatface", serif;
                    font-size: 44px;
                    color: rgba(232, 192, 32, 0.12);
                    line-height: 1;
                    margin-bottom: 10px;
                }
                .ps-icon {
                    font-size: 28px;
                    margin-bottom: 10px;
                    display: block;
                }
                .ps-title {
                    font-family: "Cinzel", serif;
                    font-size: 11px;
                    color: var(--yellow-lt);
                    letter-spacing: 1px;
                    margin-bottom: 8px;
                }
                .ps-text {
                    font-size: 15px;
                    color: var(--text-muted);
                    line-height: 1.65;
                }

                /* ══════════════════════════════════════════════
   TIMING SECTION
══════════════════════════════════════════════ */
                .timing-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 36px;
                }
                @media (max-width: 640px) {
                    .timing-layout {
                        grid-template-columns: 1fr;
                    }
                }
                .timing-box {
                    background: var(--bg-card2);
                    border: 1px solid var(--border);
                    padding: 28px 24px;
                }
                .timing-box h3 {
                    font-family: "Cinzel", serif;
                    font-size: 12px;
                    letter-spacing: 2px;
                    color: var(--turmeric);
                    text-transform: uppercase;
                    margin-bottom: 18px;
                }
                .timing-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    padding: 10px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    gap: 14px;
                }
                .timing-row:last-child {
                    border-bottom: none;
                }
                .timing-row .tl {
                    font-family: "Cinzel", serif;
                    font-size: 11px;
                    color: var(--text-muted);
                    letter-spacing: 1px;
                    flex-shrink: 0;
                }
                .timing-row .tv {
                    font-size: 16px;
                    color: var(--text);
                    text-align: right;
                }
                .timing-row .tv.accent {
                    color: var(--yellow-lt);
                    font-family: "Abril Fatface", serif;
                    font-size: 18px;
                }

                /* ══════════════════════════════════════════════
   PRICING
══════════════════════════════════════════════ */
                .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .pricing-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    padding: 36px 28px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s;
                }
                .pricing-card::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                }
                .pricing-card.tier1::before {
                    background: linear-gradient(to right, var(--turmeric-dk), var(--turmeric));
                }
                .pricing-card.tier2::before {
                    background: linear-gradient(to right, var(--yellow-deep), var(--yellow));
                }
                .pricing-card.tier3::before {
                    background: linear-gradient(to right, var(--yellow-lt), #fffaaa, var(--yellow-lt));
                }
                .pricing-card.tier3 {
                    border-color: var(--border-lt);
                }
                .pricing-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 16px 48px rgba(232, 192, 32, 0.1);
                }
                .pricing-badge {
                    display: none;
                    position: absolute;
                    top: 14px;
                    right: 14px;
                    padding: 3px 12px;
                    background: rgba(232, 192, 32, 0.12);
                    border: 1px solid var(--yellow-deep);
                    color: var(--yellow-lt);
                    font-family: "Cinzel", serif;
                    font-size: 9px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    border-radius: 20px;
                }
                .pricing-card.tier3 .pricing-badge {
                    display: block;
                }
                .pricing-tier-icon {
                    font-size: 40px;
                    margin-bottom: 12px;
                    display: block;
                }
                .pricing-tier-name {
                    font-family: "Cinzel", serif;
                    font-size: 12px;
                    letter-spacing: 2px;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    margin-bottom: 10px;
                }
                .pricing-amount {
                    font-family: "Abril Fatface", serif;
                    font-size: 44px;
                    color: var(--yellow-lt);
                    line-height: 1;
                    margin-bottom: 6px;
                }
                .pricing-spec {
                    font-family: "Cinzel", serif;
                    font-size: 10px;
                    letter-spacing: 1.5px;
                    color: var(--turmeric);
                    text-transform: uppercase;
                    margin-bottom: 20px;
                }
                .pricing-features {
                    list-style: none;
                    margin-bottom: 28px;
                    text-align: left;
                }
                .pricing-features li {
                    padding: 8px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
                    font-size: 15px;
                    color: var(--text-mid);
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                }
                .pricing-features li:last-child {
                    border-bottom: none;
                }
                .pricing-features li::before {
                    content: "▸";
                    color: var(--yellow-deep);
                    flex-shrink: 0;
                    font-size: 10px;
                    margin-top: 5px;
                }

                /* ══════════════════════════════════════════════
   NOTICE / WARNING BOXES
══════════════════════════════════════════════ */
                .notice-box {
                    background: rgba(232, 192, 32, 0.04);
                    border: 1px solid rgba(232, 192, 32, 0.18);
                    border-left: 4px solid var(--yellow);
                    padding: 18px 22px;
                    margin: 20px 0;
                }
                .notice-box .nb-head {
                    font-family: "Cinzel", serif;
                    font-size: 11px;
                    letter-spacing: 2px;
                    color: var(--yellow-lt);
                    text-transform: uppercase;
                    margin-bottom: 8px;
                }
                .notice-box p {
                    font-size: 16px;
                    color: var(--text-mid);
                    line-height: 1.8;
                }
                .urgent-box {
                    background: rgba(192, 32, 32, 0.05);
                    border: 1px solid rgba(192, 32, 32, 0.2);
                    border-left: 4px solid var(--red);
                    padding: 18px 22px;
                    margin: 20px 0;
                }
                .urgent-box .ub-head {
                    font-family: "Cinzel", serif;
                    font-size: 11px;
                    letter-spacing: 2px;
                    color: var(--red-lt);
                    text-transform: uppercase;
                    margin-bottom: 8px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .urgent-box p {
                    font-size: 16px;
                    color: var(--text-mid);
                    line-height: 1.8;
                }

                /* ══════════════════════════════════════════════
   TRUST NUMBERS
══════════════════════════════════════════════ */
                .trust-row {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
                    gap: 0;
                    border: 1px solid var(--border);
                    overflow: hidden;
                }
                .trust-cell {
                    padding: 26px 14px;
                    text-align: center;
                    border-right: 1px solid var(--border);
                    transition: background 0.2s;
                }
                .trust-cell:last-child {
                    border-right: none;
                }
                .trust-cell:hover {
                    background: rgba(232, 192, 32, 0.05);
                }
                .tc-num {
                    font-family: "Abril Fatface", serif;
                    font-size: 34px;
                    color: var(--yellow-lt);
                    line-height: 1;
                    margin-bottom: 4px;
                }
                .tc-label {
                    font-family: "Cinzel", serif;
                    font-size: 9px;
                    letter-spacing: 2px;
                    color: var(--text-muted);
                    text-transform: uppercase;
                }

                /* ══════════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════════ */
                .testimony-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 18px;
                }
                .testimony-card {
                    padding: 26px 22px;
                    background: var(--bg-card2);
                    border: 1px solid var(--border);
                    border-bottom: 2px solid var(--yellow-deep);
                    transition: border-bottom-color 0.2s;
                }
                .testimony-card:hover {
                    border-bottom-color: var(--yellow-lt);
                }
                .tc-stars {
                    color: var(--yellow);
                    font-size: 14px;
                    margin-bottom: 12px;
                    letter-spacing: 2px;
                }
                .tc-text {
                    font-style: italic;
                    font-size: 16px;
                    color: var(--text-mid);
                    line-height: 1.8;
                    margin-bottom: 14px;
                }
                .tc-name {
                    font-family: "Cinzel", serif;
                    font-size: 11px;
                    color: var(--turmeric);
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }

                /* ══════════════════════════════════════════════
   MODAL
══════════════════════════════════════════════ */
                .modal-overlay {
                    display: none;
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.88);
                    z-index: 1000;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }
                .modal-overlay.open {
                    display: flex;
                }
                .modal {
                    background: var(--bg-card);
                    border: 1px solid var(--border-lt);
                    border-top: 3px solid var(--yellow);
                    max-width: 500px;
                    width: 100%;
                    padding: 40px 36px;
                    position: relative;
                    max-height: 90vh;
                    overflow-y: auto;
                }
                .modal-close {
                    position: absolute;
                    top: 14px;
                    right: 16px;
                    background: none;
                    border: none;
                    font-size: 22px;
                    color: var(--text-muted);
                    cursor: pointer;
                }
                .modal-close:hover {
                    color: var(--text);
                }
                .modal h3 {
                    font-family: "Abril Fatface", serif;
                    font-size: 28px;
                    color: var(--yellow-lt);
                    margin-bottom: 4px;
                }
                .modal .modal-sub {
                    font-family: "Cinzel", serif;
                    font-size: 10px;
                    letter-spacing: 2px;
                    color: var(--turmeric);
                    text-transform: uppercase;
                    margin-bottom: 24px;
                }
                .modal-price-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 14px 18px;
                    background: rgba(232, 192, 32, 0.06);
                    border: 1px solid rgba(232, 192, 32, 0.15);
                    margin-bottom: 20px;
                }
                .modal-price-row span {
                    font-family: "Cinzel", serif;
                    font-size: 12px;
                    color: var(--text-muted);
                }
                .modal-price-row strong {
                    font-family: "Abril Fatface", serif;
                    font-size: 28px;
                    color: var(--yellow-lt);
                }
                .modal-submit {
                    width: 100%;
                    padding: 16px;
                    background: linear-gradient(135deg, var(--yellow), var(--yellow-deep));
                    border: none;
                    color: #1a1608;
                    font-family: "Cinzel", serif;
                    font-size: 12px;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    cursor: pointer;
                    margin-top: 4px;
                    transition: opacity 0.2s;
                }
                .modal-submit:hover {
                    opacity: 0.88;
                }

                /* ══════════════════════════════════════════════
   FOOTER CTA & FOOTER
══════════════════════════════════════════════ */
                .footer-cta {
                    text-align: center;
                    padding: 80px 24px;
                    background: radial-gradient(
                        ellipse 70% 60% at 50% 50%,
                        rgba(232, 192, 32, 0.08) 0%,
                        transparent 70%
                    );
                }
                .footer-cta h2 {
                    font-family: "Abril Fatface", serif;
                    font-size: clamp(24px, 4.5vw, 52px);
                    color: var(--yellow-lt);
                    margin-bottom: 14px;
                }
                .footer-cta p {
                    max-width: 540px;
                    margin: 0 auto 36px;
                    color: var(--text-mid);
                    font-size: 18px;
                }
                footer {
                    background: var(--bg-card);
                    border-top: 1px solid var(--border);
                    padding: 24px;
                    text-align: center;
                    font-family: "Cinzel", serif;
                    font-size: 10px;
                    letter-spacing: 2px;
                    color: var(--text-muted);
                }
                footer a {
                    color: var(--yellow);
                    text-decoration: none;
                }

                /* ══════════════════════════════════════════════
   FADE IN
══════════════════════════════════════════════ */
                .fade-in {
                    opacity: 0;
                    transform: translateY(22px);
                    transition:
                        opacity 0.6s ease,
                        transform 0.6s ease;
                }
                .fade-in.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                @media (max-width: 600px) {
                    .date-card {
                        grid-template-columns: 72px 1fr;
                    }
                    .date-actions {
                        display: none;
                    }
                    .process-strip {
                        grid-template-columns: 1fr 1fr;
                    }
                }
            `}</style>

            <canvas id="bgCanvas"></canvas>

            <div className="page">
                {/* <!-- ══════════════ NEXT PUJA DATE BANNER ══════════════ --> */}
                <div className="next-puja-banner" id="nextPujaBanner">
                    <div className="banner-inner">
                        <div className="banner-left">
                            <span className="banner-icon">🌑</span>
                            <div className="banner-text">
                                <div className="bt-label">Next Baglamukhi Puja</div>
                                <div className="bt-date" id="bannerDate">
                                    Loading...
                                </div>
                                <div className="bt-note" id="bannerNote"></div>
                            </div>
                        </div>
                        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
                            <a
                                href="#book-puja"
                                style="padding:8px 20px;background:rgba(26,22,8,0.2);border:1px solid rgba(26,22,8,0.4);color:#1A1608;font-family:'Cinzel',serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;border-radius:2px;"
                            >
                                Book This Date →
                            </a>
                            <button className="banner-edit-btn" onclick="toggleBannerEdit()">
                                Admin Edit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="banner-edit-form" id="bannerEditForm">
                    <div className="bef-inner">
                        <div className="bef-group">
                            <label>Next Puja Date *</label>
                            <input type="date" id="bf_date" />
                        </div>
                        <div className="bef-group">
                            <label>Occasion / Note</label>
                            <input type="text" id="bf_note" placeholder="e.g. Ashadha Amavasya, Shravana Amavasya" />
                        </div>
                        <div className="bef-group">
                            <label>Puja Time</label>
                            <input type="time" id="bf_time" />
                        </div>
                        <button className="bef-save" onclick="saveBanner()">
                            Update Banner
                        </button>
                    </div>
                </div>

                {/* <!-- ══ TOPBAR ══ --> */}
                <div className="topbar">
                    ⚡ Baglamukhi Puja — Victory Over All Enemies
                    <span>◆</span>
                    Performed on Amavasya &amp; Before Court Dates
                    <span>◆</span>
                    <a href="#book-puja">Book Now at Bajrangi Dhaam →</a>
                </div>

                {/* <!-- ══════════════ HERO ══════════════ --> */}
                <section className="hero">
                    <span className="hero-deity">🔱</span>
                    <p className="hero-eyebrow">Bajrangi Dhaam — The Supreme Victory Ritual</p>
                    <h1 className="hero-title">Baglamukhi</h1>
                    <p className="hero-devanagari">बगलामुखी पूजा</p>
                    <p className="hero-power-line">The Goddess Who Paralyses All Opposition</p>
                    <div className="hero-divider">
                        <span className="line"></span>
                        <i>⚡</i>
                        <span className="line"></span>
                    </div>
                    <div className="urgency-pill">
                        <span className="urgency-dot"></span>
                        If you are fighting a battle — this puja is for you
                    </div>
                    <p className="hero-desc">
                        <strong>Facing a court case? Enemy destroying your life? Business rival spreading lies?</strong>
                        <br />
                        Baglamukhi is the Goddess of Stambhan — the power to freeze, paralyse, and silence all forces
                        that oppose you. When She acts, enemies lose their voice, their power, and their ability to harm
                        you.
                    </p>
                    <div className="cta-row">
                        <a href="#book-puja" className="btn-primary">
                            ⚡ Book Baglamukhi Puja
                        </a>
                        <a href="#amavasya-dates" className="btn-outline">
                            🌑 See Upcoming Dates
                        </a>
                    </div>
                </section>

                {/* <!-- ══════════════ TRUST STRIP ══════════════ --> */}
                <div className="alt-bg">
                    <div className="section-inner" style="padding:36px 24px;">
                        <div className="trust-row fade-in">
                            <div className="trust-cell">
                                <div className="tc-num">25+</div>
                                <div className="tc-label">Years Practice</div>
                            </div>
                            <div className="trust-cell">
                                <div className="tc-num">50+</div>
                                <div className="tc-label">Countries Served</div>
                            </div>
                            <div className="trust-cell">
                                <div className="tc-num">1M+</div>
                                <div className="tc-label">YouTube Followers</div>
                            </div>
                            <div className="trust-cell">
                                <div className="tc-num">100%</div>
                                <div className="tc-label">Vedic Authenticity</div>
                            </div>
                            <div className="trust-cell">
                                <div className="tc-num">Amavas</div>
                                <div className="tc-label">Performed Every</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- ══════════════ WHO NEEDS THIS ══════════════ --> */}
                <section>
                    <div className="section-inner">
                        <p className="section-label fade-in">Is This Puja for You?</p>
                        <h2 className="section-title fade-in">
                            Are You Facing Any of <span className="red">These Battles?</span>
                        </h2>
                        <div className="section-rule fade-in"></div>
                        <p className="body-text fade-in" style="max-width:680px;margin-bottom:32px;">
                            Baglamukhi Puja is not for everyone — it is specifically for those who are under active
                            attack, whether through the courts, through enemies, through professional rivals, or through
                            black magic. If you recognise your situation below, this puja is your answer.
                        </p>
                        <div className="problem-grid fade-in">
                            <div className="problem-card">
                                <span className="pc-icon">⚖️</span>
                                <h3>Court Cases & Legal Battles</h3>
                                <p>
                                    Stuck in a prolonged court case where the other side has money, influence, or unfair
                                    advantage? Baglamukhi delivers the verdict-turning power that no lawyer alone can
                                    provide.
                                </p>
                            </div>
                            <div className="problem-card">
                                <span className="pc-icon">🗡️</span>
                                <h3>Powerful Enemies & Rivals</h3>
                                <p>
                                    Someone powerful is working against you — in business, in family, in your career.
                                    They spread lies, block opportunities, damage your reputation. Baglamukhi's Stambhan
                                    stops them in their tracks.
                                </p>
                            </div>
                            <div className="problem-card">
                                <span className="pc-icon">🏢</span>
                                <h3>Business Disputes & Fraud</h3>
                                <p>
                                    Partners who cheated you, fraudulent claims against your business, property disputes
                                    where the other party is aggressive — all these fall under Baglamukhi's domain of
                                    justice and victory.
                                </p>
                            </div>
                            <div className="problem-card">
                                <span className="pc-icon">🗣️</span>
                                <h3>Slander & False Accusations</h3>
                                <p>
                                    When people spread false information about you — damaging your name, your marriage,
                                    your career — the Goddess of Stambhan silences the tongues of those who speak
                                    against you.
                                </p>
                            </div>
                            <div className="problem-card">
                                <span className="pc-icon">🧿</span>
                                <h3>Black Magic & Evil Intentions</h3>
                                <p>
                                    If someone has used Tantra, dark rituals, or intentional negative energy against you
                                    or your family, Baglamukhi is among the very few forces that can reverse and destroy
                                    such attacks completely.
                                </p>
                            </div>
                            <div className="problem-card">
                                <span className="pc-icon">👨‍💼</span>
                                <h3>Job & Career Sabotage</h3>
                                <p>
                                    Colleagues conspiring against you, bosses being unjustly hostile, promotions being
                                    blocked despite your merit — when your professional battlefield is rigged, this puja
                                    levels it.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ══════════════ AMAVASYA DATES ══════════════ --> */}
                <section className="alt-bg" id="amavasya-dates">
                    <div className="section-inner">
                        <p className="section-label fade-in">Sacred Calendar</p>
                        <h2 className="section-title fade-in">
                            Upcoming Baglamukhi <span className="red">Puja Dates</span>
                        </h2>
                        <div className="section-rule fade-in"></div>
                        <p className="body-text fade-in" style="max-width:680px;margin-bottom:28px;">
                            Baglamukhi Puja is performed on every{" "}
                            <strong style="color:var(--yellow-lt);">Amavasya (New Moon)</strong> — the most powerful
                            night for Stambhan vidya. It can also be performed{" "}
                            <strong style="color:var(--yellow-lt);">specifically before your court date</strong> for
                            maximum impact. Contact us to schedule a special date aligned to your hearing.
                        </p>

                        <div className="dates-admin-bar fade-in">
                            <span className="admin-label">🌑 Admin — Bajrangi Dhaam: Manage Puja Dates</span>
                            <div className="admin-actions">
                                <button className="admin-btn" onclick="toggleDateForm()">
                                    + Add Date
                                </button>
                                <button className="admin-btn danger" onclick="clearAllDates()">
                                    Clear All
                                </button>
                            </div>
                        </div>

                        <div id="addDateForm">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Amavasya / Court Date *</label>
                                    <input type="date" id="f_date" />
                                </div>
                                <div className="form-group">
                                    <label>Occasion / Title</label>
                                    <input
                                        type="text"
                                        id="f_title"
                                        placeholder="e.g. Ashadha Amavasya, Pre-court special"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Puja Start Time</label>
                                    <input type="time" id="f_time" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Type</label>
                                    <select id="f_tag">
                                        <option value="amavas">Amavasya</option>
                                        <option value="court">Pre-Court Special</option>
                                        <option value="special">Special Occasion</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Available Slots</label>
                                    <input type="number" id="f_slots" placeholder="e.g. 3" min="1" />
                                </div>
                                <div className="form-group">
                                    <label>Note</label>
                                    <input
                                        type="text"
                                        id="f_note"
                                        placeholder="e.g. Shravan Amavasya — highly auspicious"
                                    />
                                </div>
                            </div>
                            <button className="form-save-btn" onclick="addDate()">
                                ▸ Save Puja Date
                            </button>
                        </div>

                        <div className="dates-grid" id="datesGrid"></div>
                    </div>
                </section>

                {/* <!-- ══════════════ WHO IS BAGLAMUKHI ══════════════ --> */}
                <section>
                    <div className="section-inner">
                        <p className="section-label fade-in">The Divine Power</p>
                        <h2 className="section-title fade-in">
                            Who is Goddess <span className="red">Baglamukhi?</span>
                        </h2>
                        <div className="section-rule fade-in"></div>
                        <div className="intro-layout fade-in">
                            <div>
                                <p className="body-text">
                                    Baglamukhi — also called <em>Pitambara Devi</em> — is the eighth of the ten
                                    Mahavidyas, the supreme tantric forms of the Divine Mother. She is depicted in
                                    brilliant yellow, seated on a golden throne, holding the tongue of an enemy in one
                                    hand and a club raised to strike in the other. This is her eternal message:{" "}
                                    <strong style="color:var(--text);">
                                        She does not just protect — She conquers.
                                    </strong>
                                </p>
                                <p className="body-text">
                                    Her primary power is <em>Stambhan</em> — the complete paralysis of an adversary's
                                    speech, movement, intellect, and intentions. When Baglamukhi's grace falls on your
                                    enemy, they lose the ability to act against you. Their plans fail. Their words are
                                    silenced. Their power dissolves.
                                </p>
                                <blockquote className="pull-quote">
                                    "Baglamukhi is worshipped by kings, warriors, and those in desperate battle. She
                                    does not offer comfort — She offers <em>victory.</em>"
                                </blockquote>
                                <p className="body-text">
                                    Yellow is her sacred colour — the colour of turmeric, of the sun's power, of divine
                                    authority. Offerings to Her are always yellow: yellow flowers, yellow cloth, yellow
                                    sweets, and the Havan performed in her name invokes this fiery, unstoppable divine
                                    force directly into your situation.
                                </p>
                            </div>
                            <div className="yantra-visual">
                                <div className="yantra-frame">
                                    <div className="yantra-ring"></div>
                                    <div className="yantra-ring"></div>
                                    <div className="yantra-ring"></div>
                                    <div className="yantra-center">⚡</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ══════════════ POWERS & BENEFITS ══════════════ --> */}
                <section className="deep-bg">
                    <div className="section-inner">
                        <p className="section-label fade-in">Divine Capabilities</p>
                        <h2 className="section-title fade-in">
                            What Baglamukhi Puja <span className="red">Does for You</span>
                        </h2>
                        <div className="section-rule fade-in"></div>
                        <div className="powers-grid fade-in">
                            <div className="power-item">
                                <span className="pi-icon">🔇</span>
                                <div className="pi-content">
                                    <h4>Silences Enemies</h4>
                                    <p>
                                        Those spreading lies about you lose the ability — and the desire — to continue.
                                        The Stambhan power makes their words fall flat.
                                    </p>
                                </div>
                            </div>
                            <div className="power-item">
                                <span className="pi-icon">⚖️</span>
                                <div className="pi-content">
                                    <h4>Turns Court Verdicts</h4>
                                    <p>
                                        Baglamukhi is directly associated with victory in judicial proceedings. She is
                                        invoked specifically before court dates for decisive divine intervention.
                                    </p>
                                </div>
                            </div>
                            <div className="power-item">
                                <span className="pi-icon">🛑</span>
                                <div className="pi-content">
                                    <h4>Stops Opposition Plans</h4>
                                    <p>
                                        Enemies who are actively plotting against you find their plans mysteriously
                                        collapsing — decisions reversed, supporters withdrawing, momentum dying.
                                    </p>
                                </div>
                            </div>
                            <div className="power-item">
                                <span className="pi-icon">🏆</span>
                                <div className="pi-content">
                                    <h4>Delivers Victory in Disputes</h4>
                                    <p>
                                        Business disputes, property conflicts, partnership betrayals — wherever there is
                                        an unjust adversary, Baglamukhi tips the scales toward the righteous side.
                                    </p>
                                </div>
                            </div>
                            <div className="power-item">
                                <span className="pi-icon">🛡️</span>
                                <div className="pi-content">
                                    <h4>Destroys Black Magic</h4>
                                    <p>
                                        She is one of the most powerful forces for reversing and destroying targeted
                                        negative energy, dark tantra, and psychic attack sent by enemies.
                                    </p>
                                </div>
                            </div>
                            <div className="power-item">
                                <span className="pi-icon">💪</span>
                                <div className="pi-content">
                                    <h4>Infuses Inner Strength</h4>
                                    <p>
                                        Beyond defeating enemies — She builds in the devotee an unshakeable confidence,
                                        mental fortitude, and clarity that makes them dangerous to oppose.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ══════════════ ASTROLOGICAL IMPORTANCE ══════════════ --> */}
                <section>
                    <div className="section-inner">
                        <p className="section-label fade-in">Jyotish Perspective</p>
                        <h2 className="section-title fade-in">
                            When Planets Create <span className="red">Your Enemies</span>
                        </h2>
                        <div className="section-rule fade-in"></div>
                        <div style="max-width:780px;" className="fade-in">
                            <h3 className="sub-title">Saturn, Rahu & the 6th House — The Source of Enemies</h3>
                            <p className="body-text">
                                In Vedic Astrology, the 6th house rules enemies, litigation, disease, and debt. When
                                Saturn, Rahu, or malefic planets afflict the 6th house or its lord — or when a person is
                                running their dasha/antardasha — powerful enemies arise, court cases multiply, and
                                opposition intensifies. Baglamukhi Puja directly addresses and neutralises these
                                specific planetary configurations.
                            </p>

                            <h3 className="sub-title">Why Amavasya is the Most Potent Time</h3>
                            <p className="body-text">
                                Amavasya — the moonless night — is when the boundary between the seen and unseen world
                                is at its thinnest. The absence of the Moon amplifies Shakti energy and makes Tantric
                                rituals dramatically more powerful. Baglamukhi Puja performed on Amavasya carries ten
                                times the force of the same ritual performed on an ordinary day. The energy of Stambhan
                                reaches its maximum potency on this night.
                            </p>

                            <h3 className="sub-title">Pre-Court Puja — The Timing of Victory</h3>
                            <p className="body-text">
                                Dr. Vinay Bajrangi has observed across 25+ years that clients who perform Baglamukhi
                                Puja within 3–7 days before their court hearing consistently report favourable
                                developments — witnesses turning, documents emerging, opposing counsel making errors,
                                judges responding differently. The divine force works through the natural channels of
                                the situation.
                            </p>

                            <div className="urgent-box">
                                <div className="ub-head">
                                    <span>⚠️</span> Important
                                </div>
                                <p>
                                    Baglamukhi Puja must be performed by Brahmins who are specifically trained in this
                                    Vidya. It requires the correct mantras, the precise yellow offerings, and the proper
                                    Havan procedure for Stambhan. Incorrect performance diminishes — or reverses — the
                                    effect. Bajrangi Dhaam performs this puja with full adherence to the Pitambara
                                    tradition.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ══════════════ HOW IT IS PERFORMED ══════════════ --> */}
                <section className="alt-bg">
                    <div className="section-inner">
                        <p className="section-label fade-in">The Sacred Process</p>
                        <h2 className="section-title fade-in">
                            How the Puja is <span className="red">Performed</span>
                        </h2>
                        <div className="section-rule fade-in"></div>
                        <div className="process-strip fade-in">
                            <div className="process-step">
                                <div className="ps-num">1</div>
                                <span className="ps-icon">📋</span>
                                <div className="ps-title">Your Details & Sankalp</div>
                                <div className="ps-text">
                                    Your full name, gotra, birth details, and the specific enemy/case are incorporated
                                    into a personalised sankalp — so the divine force is precisely directed at your
                                    situation.
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="ps-num">2</div>
                                <span className="ps-icon">🌑</span>
                                <div className="ps-title">Amavasya or Court Date</div>
                                <div className="ps-text">
                                    The puja is scheduled on Amavasya for maximum potency, or within 3–7 days before
                                    your court hearing date for targeted pre-hearing intervention.
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="ps-num">3</div>
                                <span className="ps-icon">🟡</span>
                                <div className="ps-title">Yellow Offerings</div>
                                <div className="ps-text">
                                    Yellow flowers, yellow cloth (peetambar), turmeric, yellow sweets, and other
                                    Pitambara offerings are made to Baglamukhi's yantra with full Vedic procedure.
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="ps-num">4</div>
                                <span className="ps-icon">🔥</span>
                                <div className="ps-title">Baglamukhi Havan</div>
                                <div className="ps-text">
                                    A dedicated Havan with specific Baglamukhi mantras is performed. The number of
                                    Brahmins and duration varies by tier — 2 Brahmins (1.5–2 hrs) to 4 Brahmins (4+
                                    hrs).
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="ps-num">5</div>
                                <span className="ps-icon">📱</span>
                                <div className="ps-title">Live Streaming</div>
                                <div className="ps-text">
                                    Watch your puja live from anywhere in the world. If unavailable, a full video
                                    recording is provided so you can witness and connect with the ritual.
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="ps-num">6</div>
                                <span className="ps-icon">📦</span>
                                <div className="ps-title">Prasad & Guidance</div>
                                <div className="ps-text">
                                    Energized Baglamukhi yantra, yellow turmeric prasad, and a post-puja guidance note
                                    from Dr. Bajrangi's team are couriered to your address.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ══════════════ TIMING ══════════════ --> */}
                <section className="deep-bg">
                    <div className="section-inner">
                        <p className="section-label fade-in">When to Perform</p>
                        <h2 className="section-title fade-in">
                            Timing & <span className="red">Scheduling</span>
                        </h2>
                        <div className="section-rule fade-in"></div>
                        <div className="timing-layout fade-in">
                            <div className="timing-box">
                                <h3>Amavasya Schedule</h3>
                                <div className="timing-row">
                                    <span className="tl">Best Time</span>
                                    <span className="tv accent">Amavasya Night</span>
                                </div>
                                <div className="timing-row">
                                    <span className="tl">Start Window</span>
                                    <span className="tv">After Sunset (Pradosh)</span>
                                </div>
                                <div className="timing-row">
                                    <span className="tl">Minimum Duration</span>
                                    <span className="tv">1.5 Hours (2 Brahmins)</span>
                                </div>
                                <div className="timing-row">
                                    <span className="tl">Maximum Duration</span>
                                    <span className="tv">4+ Hours (4 Brahmins)</span>
                                </div>
                                <div className="timing-row">
                                    <span className="tl">Frequency</span>
                                    <span className="tv">Monthly (every Amavasya)</span>
                                </div>
                                <div className="timing-row">
                                    <span className="tl">Repeat Puja</span>
                                    <span className="tv">Yes — highly recommended for serious cases</span>
                                </div>
                            </div>
                            <div className="timing-box">
                                <h3>Pre-Court Date Puja</h3>
                                <div className="timing-row">
                                    <span className="tl">Ideal Window</span>
                                    <span className="tv accent">3–7 Days Before</span>
                                </div>
                                <div className="timing-row">
                                    <span className="tl">Minimum Notice</span>
                                    <span className="tv">48 Hours advance booking</span>
                                </div>
                                <div className="timing-row">
                                    <span className="tl">Best Day</span>
                                    <span className="tv">Tuesday or Saturday</span>
                                </div>
                                <div className="timing-row">
                                    <span className="tl">Time of Day</span>
                                    <span className="tv">Early morning or after sunset</span>
                                </div>
                                <div className="timing-row">
                                    <span className="tl">Urgency Case</span>
                                    <span className="tv">Contact directly for same-week scheduling</span>
                                </div>
                                <div className="timing-row">
                                    <span className="tl">Availability</span>
                                    <span className="tv">Year-round, not limited to Amavasya</span>
                                </div>
                            </div>
                        </div>
                        <div className="notice-box fade-in" style="margin-top:28px;">
                            <div className="nb-head">💡 Booking Note</div>
                            <p>
                                For Pre-Court pujas, please book at least 48 hours in advance and mention your exact
                                court date so the puja can be optimally timed. WhatsApp us immediately for urgent
                                same-week requests — we will do our best to accommodate critical cases.
                            </p>
                        </div>
                    </div>
                </section>

                {/* <!-- ══════════════ PRICING ══════════════ --> */}
                <section id="book-puja">
                    <div className="section-inner">
                        <p className="section-label fade-in" style="text-align:center;">
                            Choose Your Level of Intervention
                        </p>
                        <h2 className="section-title fade-in" style="text-align:center;">
                            Book <span className="red">Baglamukhi Puja</span>
                        </h2>
                        <div className="section-rule fade-in" style="margin:12px auto 16px;"></div>
                        <p className="body-text fade-in" style="text-align:center;max-width:580px;margin:0 auto 40px;">
                            All tiers are Individual Pujas — performed exclusively for you with your personal sankalp.
                            The tiers differ in the number of Brahmins, duration of the puja, and the depth of the
                            Havan.{" "}
                            <strong style="color:var(--text);">
                                For serious court cases or powerful enemies, we recommend Tier 2 or Tier 3.
                            </strong>
                        </p>
                        <div className="pricing-grid">
                            <div className="pricing-card tier1 fade-in">
                                <span className="pricing-tier-icon">🟡</span>
                                <div className="pricing-tier-name">Pratham Tier</div>
                                <div className="pricing-amount">₹51,000</div>
                                <div className="pricing-spec">2 Brahmins · 1.5–2 Hours</div>
                                <ul className="pricing-features">
                                    <li>2 trained Brahmins</li>
                                    <li>Full Baglamukhi Havan</li>
                                    <li>Personalised sankalp with your details</li>
                                    <li>Yellow offerings — yantra, flowers, cloth</li>
                                    <li>Live stream access</li>
                                    <li>Prasad courier to your address</li>
                                    <li>Suitable for: moderate disputes, job battles</li>
                                </ul>
                                <button
                                    className="btn-primary"
                                    style="width:100%;justify-content:center;"
                                    onclick="openModal(51000,'Pratham Tier — 2 Brahmins')"
                                >
                                    Book — ₹51,000
                                </button>
                            </div>
                            <div className="pricing-card tier2 fade-in">
                                <div className="pricing-badge">Recommended</div>
                                <span className="pricing-tier-icon">⚡</span>
                                <div className="pricing-tier-name">Madhyam Tier</div>
                                <div className="pricing-amount">₹71,000</div>
                                <div className="pricing-spec">3 Brahmins · 2.5–3 Hours</div>
                                <ul className="pricing-features">
                                    <li>3 senior trained Brahmins</li>
                                    <li>Extended Havan with full Stambhan vidhi</li>
                                    <li>Personalised sankalp — enemy named in puja</li>
                                    <li>Complete yellow ritual offerings</li>
                                    <li>Live stream + video recording</li>
                                    <li>Energized Baglamukhi yantra couriered</li>
                                    <li>Suitable for: court cases, powerful enemies</li>
                                </ul>
                                <button
                                    className="btn-primary"
                                    style="width:100%;justify-content:center;"
                                    onclick="openModal(71000,'Madhyam Tier — 3 Brahmins')"
                                >
                                    Book — ₹71,000
                                </button>
                            </div>
                            <div className="pricing-card tier3 fade-in">
                                <div className="pricing-badge">Supreme</div>
                                <span className="pricing-tier-icon">👑</span>
                                <div className="pricing-tier-name">Uttam Tier</div>
                                <div className="pricing-amount">₹1,21,000</div>
                                <div className="pricing-spec">4 Brahmins · 4+ Hours</div>
                                <ul className="pricing-features">
                                    <li>4 senior Brahmins — full parivar puja</li>
                                    <li>Full-length Baglamukhi Mahayagna</li>
                                    <li>Sankalp naming adversary + case details</li>
                                    <li>108 Ahutis with individual planetary mantras</li>
                                    <li>Exclusive 1-on-1 Sankalp with Dr. Bajrangi</li>
                                    <li>Post-puja astrological reading included</li>
                                    <li>Yantra + kavach + prasad couriered</li>
                                    <li>Suitable for: major court cases, existential threats</li>
                                </ul>
                                <button
                                    className="btn-primary"
                                    style="width:100%;justify-content:center;background:linear-gradient(135deg,var(--yellow-lt),var(--yellow-deep));"
                                    onclick="openModal(121000,'Uttam Tier — 4 Brahmins')"
                                >
                                    Book — ₹1,21,000
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ══════════════ TESTIMONIALS ══════════════ --> */}
                <section className="alt-bg">
                    <div className="section-inner">
                        <p className="section-label fade-in" style="text-align:center;">
                            Voices of Victory
                        </p>
                        <h2 className="section-title fade-in" style="text-align:center;">
                            What Devotees <span className="red">Experienced</span>
                        </h2>
                        <div className="section-rule fade-in" style="margin:12px auto 36px;"></div>
                        <div className="testimony-grid fade-in">
                            <div className="testimony-card">
                                <div className="tc-stars">★★★★★</div>
                                <p className="tc-text">
                                    "I had a land dispute case running for 11 years. After performing Baglamukhi Puja at
                                    Bajrangi Dhaam before my hearing, the opposing party suddenly withdrew key claims.
                                    We got a favourable order within 3 hearings."
                                </p>
                                <div className="tc-name">R.K. Sharma — Delhi</div>
                            </div>
                            <div className="testimony-card">
                                <div className="tc-stars">★★★★★</div>
                                <p className="tc-text">
                                    "A business partner had spread completely false accusations against me in the
                                    industry. After the puja on Amavasya, within one month all those people either
                                    retracted their statements or distanced themselves from him."
                                </p>
                                <div className="tc-name">Priya Verma — Mumbai</div>
                            </div>
                            <div className="testimony-card">
                                <div className="tc-stars">★★★★★</div>
                                <p className="tc-text">
                                    "I was being targeted by a colleague who wanted my position. After the Madhyam Tier
                                    Baglamukhi Puja, his influence at the company collapsed and I received a promotion
                                    within 45 days. Dr. Bajrangi's guidance throughout was exceptional."
                                </p>
                                <div className="tc-name">Anand S. — Bengaluru</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ══════════════ FOOTER CTA ══════════════ --> */}
                <section className="footer-cta">
                    <div style="font-size:52px;margin-bottom:18px;">⚡</div>
                    <h2>
                        Stop Being the Victim.
                        <br />
                        Become the Victor.
                    </h2>
                    <p>
                        You have endured long enough. Baglamukhi Puja is not a last resort — it is the divine right of
                        every person who is fighting a just battle and needs the gods on their side.
                    </p>
                    <div className="cta-row">
                        <button className="btn-primary" onclick="openModal(71000,'Madhyam Tier — 3 Brahmins')">
                            ⚡ Book Baglamukhi Puja Now
                        </button>
                        <a href="https://www.vinaybajrangi.com/services/consultation.php" className="btn-outline">
                            Consult Dr. Bajrangi First
                        </a>
                    </div>
                </section>

                <footer>
                    <p>
                        © 2026 <a href="https://www.vinaybajrangi.com">Bajrangi Dhaam</a> · Dr. Vinay Bajrangi · Vedic
                        Astrology &amp; Puja Services · All rights reserved
                    </p>
                </footer>
            </div>
            {/* <!-- .page --> */}

            {/* <!-- ══════════════ BOOKING MODAL ══════════════ --> */}
            <div className="modal-overlay" id="bookingModal">
                <div className="modal">
                    <button className="modal-close" onclick="closeModal()">
                        ✕
                    </button>
                    <h3>Book Puja</h3>
                    <p className="modal-sub" id="modalSub">
                        Baglamukhi Puja — Individual
                    </p>
                    <div className="modal-price-row">
                        <span>Puja Fee</span>
                        <strong id="modalPrice">₹51,000</strong>
                    </div>
                    <div className="form-group">
                        <label>Full Name *</label>
                        <input type="text" id="m_name" placeholder="Your name as per kundli" />
                    </div>
                    <div className="form-group">
                        <label>Gotra *</label>
                        <input type="text" id="m_gotra" placeholder="e.g. Kashyap, Bharadwaj (required for sankalp)" />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number *</label>
                        <input type="tel" id="m_mobile" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" id="m_email" placeholder="For live stream link & updates" />
                    </div>
                    <div className="form-group">
                        <label>Nature of Problem / Enemy / Case</label>
                        <textarea
                            id="m_concern"
                            rows="3"
                            placeholder="Briefly describe: court case, business dispute, enemy situation, black magic…"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Court Date (if applicable)</label>
                        <input type="date" id="m_courtdate" />
                    </div>
                    <div className="form-group">
                        <label>Delivery Address (for Prasad & Yantra)</label>
                        <textarea id="m_address" rows="2" placeholder="Full postal address with PIN code"></textarea>
                    </div>
                    <button className="modal-submit" onclick="submitBooking()">
                        ⚡ Confirm Booking — Proceed to Payment
                    </button>
                </div>
            </div>
        </>
    );
}
