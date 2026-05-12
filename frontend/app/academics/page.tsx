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
          
          <div className="academic-card shimmer-border glass group">
            <div className="card-id-label font-mono">ID:EDU-VIT</div>
            
            <div className="card-content">
              <div className="card-header">
                <h2 className="font-montserrat institution-name">Vellore Institute of Technology, Amaravati</h2>
                <div className="font-mono duration">Aug 2024 — Aug 2028</div>
              </div>
              
              <div className="divider" />
              
              <div className="card-body">
                <h3 className="font-inter degree-name">Bachelor of Technology in Computer Science</h3>
                
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
        }
      `}</style>
    </>
  );
}
