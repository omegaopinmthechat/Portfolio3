import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Projects — ASM.PORTFOLIO | Amar Sankar Maitra",
  description:
    "Explore the engineering projects of Amar Sankar Maitra — scalable distributed systems, cloud infrastructure, and backend architecture built for enterprise environments.",
};

const projects = [
  {
    id: "PRJ_001",
    title: "LearnChain — Blockchain App",
    category: "WEB3 · SMART CONTRACTS",
    description:
      "A comprehensive blockchain platform featuring Solidity smart contract projects, an online compiler (Solidity Lab), an offline desktop application for testing, and extensive deployment documentation.",
    stack: ["Solidity", "Next.js", "Electron", "IPFS", "MetaMask", "Express.js", "Node.js"],
    status: "PRODUCTION",
    year: "2024",
    link: "https://www.learnchain.live/",
    github: "https://github.com/omegaopinmthechat/blockchain_projects",
  },
  {
    id: "PRJ_002",
    title: "Multi-Region API Gateway",
    category: "CLOUD INFRASTRUCTURE · API DESIGN",
    description:
      "A custom reverse-proxy and API gateway deployed across 3 cloud regions with sub-20ms failover. Features JWT validation, rate-limiting, request coalescing, and distributed tracing via OpenTelemetry.",
    stack: ["Rust", "Nginx", "AWS Lambda", "DynamoDB", "Terraform"],
    status: "PRODUCTION",
    year: "2024",
  },
  {
    id: "PRJ_003",
    title: "Real-Time Collaborative IDE",
    category: "FULL STACK · WEBSOCKETS",
    description:
      "A browser-based IDE with operational transformation for real-time multi-user code editing. Supports 20+ language runtimes via Docker sandbox isolation with live terminal sharing and AI-assisted completions.",
    stack: ["Next.js", "Node.js", "WebSockets", "Monaco Editor", "Docker"],
    status: "BETA",
    year: "2023",
  },
  {
    id: "PRJ_004",
    title: "Blockchain Transaction Monitor",
    category: "WEB3 · DATA ENGINEERING",
    description:
      "An on-chain analytics pipeline ingesting 2M+ daily transactions from Ethereum & Solana. Provides real-time wallet profiling, MEV detection, and smart contract interaction graphs using stream processing.",
    stack: ["Python", "Apache Kafka", "ClickHouse", "GraphQL", "React"],
    status: "ARCHIVED",
    year: "2023",
  },
  {
    id: "PRJ_005",
    title: "Proctora — AI Proctoring Engine",
    category: "AI · COMPUTER VISION",
    description:
      "A computer-vision proctoring system for online assessments. Detects gaze deviation, tab-switching, and face-substitution in real time using lightweight ONNX models, achieving <80ms inference latency.",
    stack: ["Python", "FastAPI", "ONNX Runtime", "WebRTC", "Next.js"],
    status: "IN PROGRESS",
    year: "2025",
  },
  {
    id: "PRJ_006",
    title: "LifeLine AI — Doctor Portal",
    category: "HEALTH TECH · WEBRTC",
    description:
      "A telemedicine platform for patient-doctor video consultations. Implements peer-to-peer WebRTC with TURN fallback, Firebase Auth, and Firestore-backed session management with HIPAA-aligned data policies.",
    stack: ["Next.js", "Firebase", "WebRTC", "Twilio TURN", "TypeScript"],
    status: "PRODUCTION",
    year: "2024",
  },
];

const statusColor: Record<string, string> = {
  PRODUCTION:  "rgba(233,196,0,0.9)",
  BETA:        "rgba(100,180,255,0.9)",
  "IN PROGRESS":"rgba(160,220,100,0.9)",
  ARCHIVED:    "rgba(153,144,119,0.7)",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "80px", minHeight: "100vh" }}>
        {/* ── Page Header ──────────────────────────────────────────── */}
        <section className="projects-header">
          <div className="projects-header-inner">
            {/* Label */}
            <div className="section-label font-mono">
              <span className="label-dot" />
              PORTFOLIO / PROJECTS
            </div>
            <h1 className="font-montserrat projects-title">
              ARCHITECTURE<br />
              <span className="title-dim">CASE STUDIES</span>
            </h1>
            <p className="font-inter projects-subtitle">
              A curated selection of systems designed for scale, precision, and
              performance — each engineered from first principles.
            </p>
          </div>
          {/* Decorative grid counter */}
          <div className="project-count font-mono">
            <span className="count-num">{String(projects.length).padStart(2, "0")}</span>
            <span className="count-label">TOTAL BUILDS</span>
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────────── */}
        <div className="divider" />

        {/* ── Project Grid ────────────────────────────────────────── */}
        <section className="projects-grid-section">
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <article key={project.id} className="project-card shimmer-border glass">
                {/* Card header row */}
                <div className="card-header">
                  <span className="font-mono card-id">{project.id}</span>
                  <span
                    className="font-mono card-status"
                    style={{ color: statusColor[project.status] }}
                  >
                    ● {project.status}
                  </span>
                </div>

                {/* Category */}
                <div className="font-mono card-category">{project.category}</div>

                {/* Title */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link-wrapper"
                  >
                    <h2 className="font-montserrat card-title card-title-link">
                      {project.title}
                      <span className="material-symbols-outlined external-icon">open_in_new</span>
                    </h2>
                  </a>
                ) : (
                  <h2 className="font-montserrat card-title">{project.title}</h2>
                )}

                {/* Description */}
                <p className="font-inter card-desc">{project.description}</p>

                {/* Stack pills */}
                <div className="stack-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="font-mono stack-pill">{tech}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="card-footer">
                  <div className="footer-left">
                    <span className="font-mono card-year">{project.year}</span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                        title="View Source Code"
                      >
                        <span className="material-symbols-outlined">code</span>
                      </a>
                    )}
                  </div>
                  <span className="font-mono card-idx">
                    {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ── Scoped styles ────────────────────────────────────────────── */}
      <style>{`
        /* ── Header ───────────────────────────────── */
        .projects-header {
          max-width: 1600px;
          margin: 0 auto;
          padding: 64px var(--margin-desktop) 48px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
        }
        .projects-header-inner {
          display: flex; flex-direction: column; gap: 20px;
          max-width: 700px;
        }

        .section-label {
          display: flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.15em;
          color: var(--primary-fixed-dim); text-transform: uppercase;
        }
        .label-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--primary-fixed-dim);
          flex-shrink: 0;
        }

        .projects-title {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700; letter-spacing: 0.05em;
          line-height: 1.05; color: var(--on-surface);
          text-transform: uppercase;
        }
        .title-dim { color: var(--surface-variant); }

        .projects-subtitle {
          font-size: 15px; line-height: 1.7;
          color: var(--on-surface-variant);
          max-width: 480px;
        }

        .project-count {
          display: flex; flex-direction: column; align-items: flex-end;
          gap: 4px; flex-shrink: 0;
        }
        .count-num {
          font-size: 56px; font-weight: 500; letter-spacing: -0.02em;
          color: var(--primary-fixed-dim); line-height: 1;
        }
        .count-label {
          font-size: 11px; letter-spacing: 0.15em;
          color: var(--on-surface-variant);
        }

        /* ── Divider ──────────────────────────────── */
        .divider {
          max-width: 1600px; margin: 0 auto;
          height: 1px;
          background: linear-gradient(
            to right, transparent,
            rgba(153,144,119,0.4) 20%,
            rgba(233,196,0,0.3) 50%,
            rgba(153,144,119,0.4) 80%,
            transparent
          );
          padding: 0 var(--margin-desktop);
        }

        /* ── Project Grid ─────────────────────────── */
        .projects-grid-section {
          max-width: 1600px; margin: 0 auto;
          padding: 48px var(--margin-desktop) 96px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* ── Project Card ─────────────────────────── */
        .project-card {
          border: 1px solid rgba(77, 71, 50, 0.5);
          border-radius: 0.5rem;
          padding: 28px;
          display: flex; flex-direction: column; gap: 16px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease,
                      background 0.3s ease;
          cursor: default;
        }
        .project-card:hover {
          border-color: rgba(233, 196, 0, 0.35);
          box-shadow: 0 0 32px rgba(233,196,0,0.08), 0 8px 40px rgba(0,0,0,0.3);
          background: rgba(32, 31, 31, 0.75);
        }

        .card-header {
          display: flex; justify-content: space-between; align-items: center;
        }
        .card-id {
          font-size: 10px; letter-spacing: 0.15em;
          color: var(--outline); opacity: 0.8;
        }
        .card-status {
          font-size: 10px; letter-spacing: 0.1em;
        }

        .card-category {
          font-size: 10px; letter-spacing: 0.12em;
          color: var(--on-surface-variant); text-transform: uppercase;
        }

        .card-title {
          font-size: 20px; font-weight: 700;
          letter-spacing: 0.02em; line-height: 1.2;
          color: var(--on-surface); text-transform: uppercase;
          display: flex; align-items: center; gap: 8px;
        }

        .card-link-wrapper {
          text-decoration: none;
          display: inline-block;
        }
        .card-title-link {
          transition: color 0.2s ease;
        }
        .card-link-wrapper:hover .card-title-link {
          color: var(--primary-fixed-dim);
        }
        .external-icon {
          font-size: 18px !important;
          opacity: 0.5;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .card-link-wrapper:hover .external-icon {
          opacity: 1;
          transform: translate(2px, -2px);
        }

        .card-desc {
          font-size: 14px; line-height: 1.7;
          color: var(--on-surface-variant); flex: 1;
        }

        /* Stack pills */
        .stack-row {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-top: auto;
        }
        .stack-pill {
          font-size: 10px; letter-spacing: 0.1em;
          color: var(--primary-fixed-dim);
          border: 1px solid rgba(233,196,0,0.25);
          background: rgba(233,196,0,0.06);
          padding: 3px 8px; border-radius: 2px;
        }

        /* Card footer */
        .card-footer {
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px solid rgba(77,71,50,0.3);
          padding-top: 12px; margin-top: 4px;
        }
        .footer-left {
          display: flex; align-items: center; gap: 12px;
        }
        .card-year {
          font-size: 11px; letter-spacing: 0.1em;
          color: var(--on-surface-variant); opacity: 0.6;
        }
        .github-link {
          color: var(--on-surface-variant);
          opacity: 0.5;
          text-decoration: none;
          display: flex; align-items: center;
          transition: opacity 0.2s ease, color 0.2s ease;
        }
        .github-link:hover {
          opacity: 1;
          color: var(--primary-fixed-dim);
        }
        .github-link .material-symbols-outlined {
          font-size: 16px !important;
        }
        .card-idx {
          font-size: 11px; letter-spacing: 0.1em;
          color: var(--on-surface-variant); opacity: 0.4;
        }

        /* ── Responsive ───────────────────────────── */
        @media (max-width: 1200px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
          .project-count { display: none; }
        }
        @media (max-width: 900px) {
          .projects-header {
            padding: 40px var(--margin-mobile) 32px;
            flex-direction: column; align-items: flex-start;
          }
          .projects-grid-section {
            padding: 32px var(--margin-mobile) 96px;
          }
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
