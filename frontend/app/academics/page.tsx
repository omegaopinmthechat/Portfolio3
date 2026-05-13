import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Academics — ASM.PORTFOLIO | Amar Sankar Maitra",
  description: "Academic history and qualifications of Amar Sankar Maitra.",
};

export default function AcademicsPage() {
  return (
    <>
      <Navbar />
      <main id="academics-page" style={{
        flex: 1, paddingTop: "120px", paddingBottom: "120px",
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center"
      }}>
        <div className="academics-container" style={{
          width: "100%", maxWidth: "1200px", margin: "0 auto",
          padding: "0 var(--margin-desktop)", display: "flex",
          flexDirection: "column", gap: "64px"
        }}>
          
          <div className="page-header">
            <div className="header-indicator">
              <span className="pulse-gold status-dot" />
              <span className="font-mono label-text">EDUCATION LOG</span>
            </div>
            <h1 className="font-montserrat page-title">ACADEMICS</h1>
          </div>
          
          {/* ── Card 1: Research Publication ─────────────────────────── */}
          <div className="academic-card shimmer-border glass group">
            <div className="card-id-label font-mono">ID:PUB-001</div>

            <div className="card-content">
              <div className="card-header">
                <div>
                  <div className="pub-pre-label font-mono">RESEARCH PUBLICATION</div>
                  <h2 className="font-montserrat institution-name">
                    Heart Abnormality Detector
                  </h2>
                </div>
                <div className="pub-journal-badge font-mono">
                  <span className="pjb-label">JOURNAL</span>
                  <span className="pjb-name">STAPS · Scopus · Vol.11 · 2025</span>
                </div>
              </div>

              <div className="divider" />

              <div className="pub-inner">
                <div className="pub-meta-row">
                  <div className="pub-id font-mono">PAPER ID: STAPS-3761 F</div>
                </div>

                <h3 className="font-montserrat pub-title">
                  Portable ECG Monitoring with ML Classification
                </h3>

                <p className="font-inter pub-desc">
                  Developed a portable, low-cost ECG monitoring device capable of detecting heart
                  abnormalities in real-time. Using Arduino UNO, ESP-32, AD8232 ECG sensor, pulse
                  sensor, and a 16×2 LCD, we built a complete system for ECG acquisition, signal
                  processing, and wireless transmission. The device integrates a TensorFlow Lite ML
                  model that classifies ECG beats as healthy or unhealthy by analysing PQRST values,
                  as explained in our paper STAPS-3761 F.
                </p>

                <div className="pub-features">
                  <span className="pub-feature-label font-mono">KEY FEATURES</span>
                  <ul className="pub-feature-list">
                    {[
                      "Real-time ECG signal monitoring",
                      "Wireless cloud transmission via ESP-32",
                      "ML-based heartbeat classification",
                      "Portable, low-cost, easy-to-use hardware",
                      "Live monitoring dashboard built with Next.js",
                    ].map((f) => (
                      <li key={f} className="font-inter pub-feature-item">
                        <span className="pub-bullet" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pub-links">
                  <a
                    href="https://drive.google.com/file/d/1ZQLLqvIugWzZLVaY16ZUDjCt7QS5AyzN/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-link font-mono"
                    id="pub-paper-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    VIEW PAPER
                  </a>
                  <a
                    href="https://github.com/omegaopinmthechat/Heart-Abnormality-Detector"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-link pub-link-github font-mono"
                    id="pub-github-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GITHUB REPO
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Card 2: College / CGPA ────────────────────────────────── */}
          <div className="academic-card shimmer-border glass group">
            <div className="card-id-label font-mono">ID:EDU-VIT</div>

            <div className="card-content">
              <div className="card-header">
                <h2 className="font-montserrat institution-name">
                  Vellore Institute of Technology, Amaravati
                </h2>
                <div className="font-mono duration">Aug 2024 — Aug 2028</div>
              </div>

              <div className="divider" />

              <div className="card-body">
                <h3 className="font-inter degree-name">
                  Bachelor of Technology in Computer Science
                </h3>
                <div className="gpa-container">
                  <span className="font-mono gpa-label">CGPA</span>
                  <span className="font-montserrat gpa-value">8.86</span>
                  <span className="font-mono gpa-scale">/ 10</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <style>{`
        .status-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--primary-fixed-dim);
          display: block;
        }
        .header-indicator {
          display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
        }
        .label-text {
          font-size: 13px; font-weight: 500; letter-spacing: 0.1em;
          color: var(--primary-fixed-dim);
        }
        .page-title {
          font-size: clamp(48px, 6vw, 80px);
          font-weight: 700; letter-spacing: 0.05em;
          color: var(--on-surface); line-height: 1.1;
        }

        .academic-card {
          position: relative;
          padding: 64px;
          border: 1px solid rgba(77, 71, 50, 0.3);
          border-radius: 0.75rem;
          background: rgba(42, 42, 42, 0.4);
          backdrop-filter: blur(12px);
          overflow: hidden;
          transition: box-shadow 0.4s ease;
        }
        .academic-card:hover {
          box-shadow: 0 0 40px rgba(233,196,0,0.08);
        }
        
        .card-id-label {
          position: absolute; top: 24px; right: 32px;
          font-size: 13px; color: rgba(208, 198, 171, 0.5);
          letter-spacing: 0.1em;
        }
        
        .card-content {
          display: flex; flex-direction: column; gap: 32px;
          position: relative; z-index: 10;
        }
        
        .card-header {
          display: flex; justify-content: space-between; align-items: flex-start; gap: 24px;
        }
        
        .institution-name {
          font-size: 32px; font-weight: 600; color: var(--on-surface);
          line-height: 1.3;
        }
        
        .duration {
          font-size: 16px; color: var(--primary-fixed-dim);
          letter-spacing: 0.05em; white-space: nowrap; padding-top: 8px;
        }
        
        .divider {
          height: 1px; width: 100%;
          background: linear-gradient(90deg, rgba(77, 71, 50, 0.5) 0%, transparent 100%);
        }
        
        .card-body {
          display: flex; justify-content: space-between; align-items: flex-end; gap: 24px;
        }

        /* Publication card header helpers */
        .pub-pre-label {
          font-size: 11px; letter-spacing: 0.18em;
          color: var(--primary-fixed-dim); margin-bottom: 8px;
          opacity: 0.8;
        }

        .pub-journal-badge {
          display: flex; flex-direction: column; align-items: flex-end; gap: 4px;
          text-align: right;
        }
        .pjb-label {
          font-size: 10px; letter-spacing: 0.2em;
          color: rgba(208, 198, 171, 0.4);
        }
        .pjb-name {
          font-size: 12px; letter-spacing: 0.08em;
          color: var(--primary-fixed-dim);
        }

        .pub-inner {
          display: flex; flex-direction: column; gap: 24px;
        }

        .pub-meta-row {
          display: flex; align-items: center; gap: 16px;
        }
        
        .degree-name {
          font-size: 24px; font-weight: 400; color: var(--on-surface-variant);
        }
        
        .gpa-container {
          display: flex; align-items: baseline; gap: 8px;
        }
        
        .gpa-label {
          font-size: 14px; color: var(--on-surface-variant); letter-spacing: 0.1em;
        }
        
        .gpa-value {
          font-size: 48px; font-weight: 600; color: var(--primary-fixed-dim);
          line-height: 1;
        }
        
        .gpa-scale {
          font-size: 16px; color: rgba(208, 198, 171, 0.5); letter-spacing: 0.1em;
        }

        /* ── Publication Section ── */
        .publication-section {
          display: flex; flex-direction: column; gap: 28px;
        }

        .pub-section-header {
          display: flex; align-items: center; gap: 16px;
        }

        .pub-tag {
          font-size: 11px; letter-spacing: 0.15em;
          color: var(--primary-fixed-dim);
          border: 1px solid rgba(233,196,0,0.3);
          padding: 3px 10px; border-radius: 4px;
          background: rgba(233,196,0,0.06);
        }

        .pub-section-label {
          font-size: 12px; letter-spacing: 0.18em;
          color: rgba(208, 198, 171, 0.5);
        }

        .pub-body {
          display: flex; flex-direction: column; gap: 24px;
          padding: 32px;
          border: 1px solid rgba(77, 71, 50, 0.25);
          border-radius: 0.5rem;
          background: rgba(15, 15, 15, 0.35);
          position: relative;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .pub-body:hover {
          border-color: rgba(233,196,0,0.2);
          background: rgba(15, 15, 15, 0.5);
        }

        .pub-meta {
          display: flex; justify-content: space-between; align-items: flex-start;
          flex-wrap: wrap; gap: 12px;
        }

        .pub-journal {
          display: flex; flex-direction: column; gap: 4px;
        }
        .pub-journal-label {
          font-size: 10px; letter-spacing: 0.2em;
          color: rgba(208, 198, 171, 0.4);
        }
        .pub-journal-name {
          font-size: 12px; letter-spacing: 0.08em;
          color: var(--primary-fixed-dim);
        }

        .pub-id {
          font-size: 11px; letter-spacing: 0.12em;
          color: rgba(208, 198, 171, 0.4);
          align-self: flex-end;
        }

        .pub-title {
          font-size: 20px; font-weight: 600;
          color: var(--on-surface); line-height: 1.4;
          letter-spacing: 0.02em;
        }

        .pub-desc {
          font-size: 15px; line-height: 1.75;
          color: var(--on-surface-variant);
        }

        .pub-features {
          display: flex; flex-direction: column; gap: 14px;
        }

        .pub-feature-label {
          font-size: 11px; letter-spacing: 0.18em;
          color: rgba(208, 198, 171, 0.45);
        }

        .pub-feature-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 10px;
        }

        .pub-feature-item {
          display: flex; align-items: center; gap: 12px;
          font-size: 14px; color: var(--on-surface-variant);
          line-height: 1.5;
        }

        .pub-bullet {
          width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
          background: var(--primary-fixed-dim);
          opacity: 0.7;
        }

        .pub-links {
          display: flex; gap: 16px; flex-wrap: wrap; padding-top: 8px;
        }

        .pub-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; letter-spacing: 0.12em;
          color: var(--primary-fixed-dim);
          border: 1px solid rgba(233,196,0,0.3);
          padding: 10px 20px; border-radius: 4px;
          text-decoration: none;
          background: rgba(233,196,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.2s ease;
        }
        .pub-link:hover {
          background: rgba(233,196,0,0.12);
          border-color: rgba(233,196,0,0.6);
          transform: translateY(-2px);
        }

        .pub-link-github {
          color: rgba(208, 198, 171, 0.8);
          border-color: rgba(77, 71, 50, 0.5);
          background: rgba(255,255,255,0.03);
        }
        .pub-link-github:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(208, 198, 171, 0.5);
          color: var(--on-surface);
        }

        @media (max-width: 900px) {
          .academics-container {
            padding: 0 var(--margin-mobile) !important;
          }
          .academic-card {
            padding: 32px 24px;
          }
          .card-header, .card-body {
            flex-direction: column; align-items: flex-start; gap: 16px;
          }
          .institution-name {
            font-size: 24px;
          }
          .degree-name {
            font-size: 18px;
          }
          .gpa-value {
            font-size: 36px;
          }
          .pub-body {
            padding: 24px 20px;
          }
          .pub-meta {
            flex-direction: column;
          }
          .pub-title {
            font-size: 17px;
          }
          .pub-links {
            flex-direction: column;
          }
          .pub-link {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
