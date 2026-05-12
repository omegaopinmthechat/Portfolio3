import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "ASM.PORTFOLIO — Amar Sankar Maitra | Home",
  description:
    "Home of Amar Sankar Maitra — System Architect & Backend Developer engineering scalable, high-performance backend systems with architectural precision.",
};

export default function HomePage() {
  const portraitUrl =
    "https://res.cloudinary.com/ddsx7wlkq/image/upload/v1778583423/my_image_bgchanged_kdk5ab.png";

  return (
    <>
      {/* ── Navbar (separate component) ─────────────────────────────── */}
      <Navbar />

      {/* ── Hero Main Content ─────────────────────────────────────────── */}
      <main id="hero" style={{
        flex: 1, paddingTop: "80px", minHeight: "100vh",
        display: "flex", alignItems: "center",
      }}>
        <div className="hero-grid" style={{
          width: "100%", maxWidth: "1600px",
          margin: "0 auto", padding: "0 var(--margin-desktop)",
          display: "grid", gridTemplateColumns: "7fr 5fr",
          gap: "48px", alignItems: "center",
        }}>

          {/* ── Left: Text Content ──────────────────────────────────── */}
          <div className="hero-text" style={{ display: "flex", flexDirection: "column", gap: "32px", minWidth: 0 }}>

            {/* Status Badge */}
            <div id="status-badge" className="shimmer-border glass status-badge">
              <span className="pulse-gold status-dot" />
              <span className="font-mono status-label">
                SYSTEM ARCHITECT &amp; BACKEND DEVELOPER
              </span>
            </div>

            {/* Name */}
            <h1 className="font-montserrat hero-name">
              AMAR SANKAR<br />
              <span className="name-dim">MAITRA</span>
            </h1>

            {/* Body */}
            <p className="font-inter hero-body">
              Engineering scalable, high-performance backend systems with architectural
              precision. Specializing in distributed networks, cloud infrastructure, and
              robust API design tailored for enterprise environments.
            </p>

            {/* CTAs */}
            <div className="cta-row">
              <Link href="/projects" id="cta-view-projects" className="btn-primary">
                <span className="material-symbols-outlined btn-icon">terminal</span>
                VIEW PROJECTS
              </Link>
              <a
                href="https://drive.google.com/file/d/1pMGRuFp56jnQoFTmUzarX0khuCWAeq3A/view?usp=sharing"
                id="cta-download-resume"
                className="btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined btn-icon">download</span>
                DOWNLOAD RESUME
              </a>
            </div>

            {/* Tech Stack Marquee */}
            <div className="tech-stack-section" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(77, 71, 50, 0.2)', position: 'relative' }}>
              <div style={{ marginBottom: '1rem' }}>
                <span className="font-mono" style={{ fontSize: '11px', color: 'rgba(255, 225, 109, 0.6)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                  // SYSTEM_CAPABILITIES
                </span>
              </div>
              <div className="marquee-container" style={{ width: '100%', padding: '1rem 0' }}>
                <div className="marquee-content">
                  <i className="devicon-react-original tech-logo" title="React.js"></i>
                  <i className="devicon-nextjs-plain tech-logo" title="Next.js"></i>
                  <i className="devicon-nodejs-plain tech-logo" title="Node.js"></i>
                  <i className="devicon-express-original tech-logo" title="Express.js"></i>
                  <i className="devicon-javascript-plain tech-logo" title="Javascript"></i>
                  <i className="devicon-typescript-plain tech-logo" title="Typescript"></i>
                  <i className="devicon-java-plain tech-logo" title="Java"></i>
                  <i className="devicon-python-plain tech-logo" title="Python"></i>
                  <i className="devicon-c-plain tech-logo" title="C"></i>
                  <i className="devicon-cplusplus-plain tech-logo" title="C++"></i>
                  <i className="devicon-rust-plain tech-logo" title="Rust"></i>
                  <i className="devicon-mongodb-plain tech-logo" title="Mongodb"></i>
                  <i className="devicon-postgresql-plain tech-logo" title="PostgreSql"></i>
                  <i className="devicon-redis-plain tech-logo" title="Redis"></i>
                  <i className="devicon-nginx-original tech-logo" title="Nginx"></i>
                  <i className="devicon-docker-plain tech-logo" title="Docker"></i>
                  <i className="devicon-kubernetes-plain tech-logo" title="Kubernetes"></i>
                  <i className="devicon-electron-original tech-logo" title="Electron"></i>
                  <i className="devicon-tauri-plain tech-logo" title="Tauri"></i>
                  <i className="devicon-flutter-plain tech-logo" title="Flutter"></i>
                  <i className="devicon-matlab-plain tech-logo" title="Matlab"></i>
                  <i className="devicon-git-plain tech-logo" title="Git"></i>
                  <i className="devicon-figma-plain tech-logo" title="Figma"></i>
                  <i className="devicon-linux-plain tech-logo" title="Linux"></i>
                  <i className="devicon-tailwindcss-original tech-logo" title="Tailwind"></i>
                  {/* Duplicate for Seamless Marquee */}
                  <i className="devicon-react-original tech-logo" title="React.js"></i>
                  <i className="devicon-nextjs-plain tech-logo" title="Next.js"></i>
                  <i className="devicon-nodejs-plain tech-logo" title="Node.js"></i>
                  <i className="devicon-express-original tech-logo" title="Express.js"></i>
                  <i className="devicon-javascript-plain tech-logo" title="Javascript"></i>
                  <i className="devicon-typescript-plain tech-logo" title="Typescript"></i>
                  <i className="devicon-java-plain tech-logo" title="Java"></i>
                  <i className="devicon-python-plain tech-logo" title="Python"></i>
                  <i className="devicon-c-plain tech-logo" title="C"></i>
                  <i className="devicon-cplusplus-plain tech-logo" title="C++"></i>
                  <i className="devicon-rust-plain tech-logo" title="Rust"></i>
                  <i className="devicon-mongodb-plain tech-logo" title="Mongodb"></i>
                  <i className="devicon-postgresql-plain tech-logo" title="PostgreSql"></i>
                  <i className="devicon-redis-plain tech-logo" title="Redis"></i>
                  <i className="devicon-nginx-original tech-logo" title="Nginx"></i>
                  <i className="devicon-docker-plain tech-logo" title="Docker"></i>
                  <i className="devicon-kubernetes-plain tech-logo" title="Kubernetes"></i>
                  <i className="devicon-electron-original tech-logo" title="Electron"></i>
                  <i className="devicon-tauri-plain tech-logo" title="Tauri"></i>
                  <i className="devicon-flutter-plain tech-logo" title="Flutter"></i>
                  <i className="devicon-matlab-plain tech-logo" title="Matlab"></i>
                  <i className="devicon-git-plain tech-logo" title="Git"></i>
                  <i className="devicon-figma-plain tech-logo" title="Figma"></i>
                  <i className="devicon-linux-plain tech-logo" title="Linux"></i>
                  <i className="devicon-tailwindcss-original tech-logo" title="Tailwind"></i>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Portrait Card ─────────────────────────────────── */}
          <div className="portrait-wrapper">
            <div className="portrait-tilt" />

            <div id="portrait-card" className="shimmer-border portrait-card">
              {/* Label */}
              <div className="portrait-label">
                <span className="font-mono portrait-label-text">SRC_ID: PORTRAIT_01</span>
              </div>

              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={portraitUrl}
                alt="Amar Sankar Maitra — professional portrait of a System Architect and Backend Developer"
                className="portrait-img"
              />

              {/* Bottom gradient */}
              <div className="portrait-gradient" />
            </div>
          </div>
        </div>
      </main>



      {/* ── Testimonial Section ─────────────────────────────────────────── */}
      <section id="testimonials" className="testimonial-section">
        <div className="testimonial-header">
          <div className="divider-line" />
          <h2 className="font-mono section-label">
            CLIENT ASSESSMENT
          </h2>
        </div>
        
        <div className="testimonial-card shimmer-border glass group">
          {/* Component ID */}
          <div className="card-id-label font-mono">ID:TST-001</div>
          
          <div className="testimonial-content">
            <div className="testimonial-profile">
              <div className="profile-img-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://res.cloudinary.com/ddsx7wlkq/image/upload/v1778585231/image_kpftp8.jpg" 
                  alt="Cherukuri Lohit" 
                  className="profile-img" 
                />
              </div>
              <div className="profile-info">
                <h3 className="font-montserrat profile-name">Cherukuri Lohit</h3>
                <p className="font-mono profile-role">Founder &amp; CEO @OnlyClick</p>
              </div>
            </div>
            
            <div className="testimonial-text-wrapper">
              <span className="material-symbols-outlined quote-icon" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <blockquote className="font-inter testimonial-text">
                "I had the pleasure of working with Amar Sankar during his time as an intern at Only Click, and I can genuinely say he made a real impact on our mobile app development. For a sophomore still early in his Computer Science journey, Amar brought an impressive level of skill and enthusiasm to the table. Amar dove into our full tech stack—React Native for the mobile app, React.js and Next.js for our web platform, plus Node.js and Express.js on the backend. He picked up Supabase, SQL, and PostgreSQL quickly and handled our database work with confidence. What really stood out was how fast he learned and how well he applied that knowledge to actual problems.<br /><br />
                Beyond just writing code, Amar had this knack for understanding what we were trying to build and finding smart ways to make it happen. He was reliable, communicated well with the team, and didn't shy away from tackling tough challenges. Several features in the Only Click app wouldn't be what they are today without his contributions.<br /><br />
                Amar's got solid technical chops with the MERN stack and modern development tools, but more importantly, he's got the right attitude—curious, hardworking, and a great team player. Any team would be lucky to have him, and I'd recommend him without hesitation for software engineering opportunities."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Page-scoped styles ────────────────────────────────────────── */}
      <style>{`
        /* Status badge */
        .status-badge {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 8px 16px;
          border-radius: 0.25rem;
          border: 1px solid var(--outline-variant);
          align-self: flex-start;
        }
        .status-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--primary-fixed-dim);
          flex-shrink: 0; display: block;
        }
        .status-label {
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.1em; color: var(--primary-fixed-dim);
        }

        /* Hero name */
        .hero-name {
          font-size: clamp(44px, 5.5vw, 80px);
          font-weight: 700; letter-spacing: 0.05em;
          line-height: 1.05; color: var(--on-surface);
          text-transform: uppercase;
        }
        .name-dim { color: var(--surface-variant); }

        /* Hero body */
        .hero-body {
          font-size: 16px; font-weight: 400; line-height: 1.7;
          letter-spacing: 0.01em;
          color: var(--on-surface-variant); max-width: 540px;
        }

        /* CTA row */
        .cta-row { display: flex; gap: 16px; flex-wrap: wrap; }
        .btn-icon { font-size: 18px !important; }

        /* Portrait wrapper */
        .portrait-wrapper { position: relative; display: flex; justify-content: center; }

        /* Decorative tilt */
        .portrait-tilt {
          position: absolute; inset: 0;
          background: linear-gradient(135deg,
            var(--surface-container-lowest),
            var(--surface-container),
            var(--surface-container-low));
          border: 1px solid rgba(77,71,50,0.25);
          border-radius: 0.75rem;
          transform: rotate(3deg);
          opacity: 0.5; z-index: 0;
        }

        /* Portrait card */
        .portrait-card {
          position: relative; z-index: 1;
          width: 100%; aspect-ratio: 3/4;
          max-width: 400px;
          background: rgba(42,42,42,0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(153,144,119,0.4);
          border-radius: 0.75rem;
          overflow: hidden;
          transition: box-shadow 0.4s ease;
        }
        .portrait-card:hover {
          box-shadow: 0 0 40px rgba(233,196,0,0.14), 0 0 80px rgba(233,196,0,0.06);
        }

        /* Portrait label */
        .portrait-label {
          position: absolute; top: 16px; right: 16px; z-index: 20;
          background: rgba(14,14,14,0.8);
          border: 1px solid rgba(77,71,50,0.4);
          backdrop-filter: blur(8px);
          padding: 4px 8px; border-radius: 2px;
        }
        .portrait-label-text {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--primary-fixed-dim); opacity: 0.85;
        }

        /* Portrait image */
        .portrait-img {
          width: 100%; height: 100%; object-fit: cover;
          filter: grayscale(100%) contrast(1.2);
          opacity: 0.85; mix-blend-mode: luminosity;
          transition: filter 0.7s ease, opacity 0.7s ease;
        }
        .portrait-card:hover .portrait-img {
          filter: grayscale(0%) contrast(1.05);
          opacity: 1;
        }

        /* Bottom gradient overlay */
        .portrait-gradient {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 45%; z-index: 10;
          background: linear-gradient(to top, var(--background) 10%, transparent 100%);
        }

        /* ── Testimonial Section ─────────────────────────── */
        .testimonial-section {
          max-width: 1600px;
          margin: 0 auto;
          padding: 64px var(--margin-desktop) 128px;
        }
        .testimonial-header {
          display: flex; align-items: center; margin-bottom: 48px;
        }
        .divider-line {
          height: 1px; flex-grow: 1; margin-right: 24px;
          background: rgba(77, 71, 50, 0.5);
        }
        .section-label {
          font-size: 13px; font-weight: 500; letter-spacing: 0.15em;
          color: var(--primary-fixed-dim); text-transform: uppercase;
          white-space: nowrap;
        }
        
        .testimonial-card {
          position: relative;
          padding: 48px 64px;
          border: 1px solid rgba(77, 71, 50, 0.3);
          border-radius: 0.75rem;
          background: rgba(42, 42, 42, 0.4);
          backdrop-filter: blur(12px);
          overflow: hidden;
        }
        .card-id-label {
          position: absolute; top: 16px; right: 24px;
          font-size: 13px; color: rgba(208, 198, 171, 0.5);
          letter-spacing: 0.1em;
        }
        
        .testimonial-content {
          display: flex; gap: 48px; align-items: flex-start;
          position: relative; z-index: 10;
        }
        
        .testimonial-profile {
          display: flex; flex-direction: column; gap: 16px;
          width: 33%; flex-shrink: 0;
        }
        .profile-img-wrapper {
          width: 96px; height: 96px; border-radius: 50%;
          border: 2px solid rgba(233, 196, 0, 0.2);
          overflow: hidden; position: relative;
        }
        .profile-img {
          width: 100%; height: 100%; object-fit: cover;
          filter: grayscale(80%); opacity: 0.8;
          transition: filter 0.7s ease, opacity 0.7s ease;
        }
        .testimonial-card:hover .profile-img {
          filter: grayscale(0%); opacity: 1;
        }
        .profile-name {
          font-size: 24px; font-weight: 600; color: var(--on-surface); line-height: 1.2;
        }
        .profile-role {
          font-size: 13px; color: var(--primary-fixed-dim); letter-spacing: 0.1em; margin-top: 4px; line-height: 1.4;
        }
        
        .testimonial-text-wrapper {
          position: relative; width: 67%;
        }
        .quote-icon {
          position: absolute; top: -16px; left: -16px;
          font-size: 60px !important; color: rgba(233, 196, 0, 0.15);
          z-index: 0; pointer-events: none;
        }
        .testimonial-text {
          position: relative; z-index: 10;
          font-size: 18px; line-height: 1.8; color: var(--on-surface);
          font-style: italic;
        }

        /* Responsive */
        /* ── Tech Stack Marquee ──────────────────────── */
        .tech-stack-section {
          background-image: radial-gradient(circle, rgba(233, 196, 0, 0.1) 1px, transparent 1px);
          background-size: 16px 16px;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .marquee-content {
          display: inline-flex;
          gap: 4rem;
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
        .tech-logo {
          font-size: 2.5rem;
          color: var(--on-surface-variant, #d0c6ab);
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .tech-logo:hover {
          opacity: 1;
          color: var(--primary-fixed, #ffe16d);
          transform: scale(1.1);
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 0 var(--margin-mobile) !important;
            gap: 40px !important;
            padding-top: 32px !important;
            padding-bottom: 96px !important;
          }
          .portrait-wrapper { order: -1; }
          
          .testimonial-section {
            padding: 32px var(--margin-mobile) 96px;
          }
          .testimonial-card {
            padding: 32px 24px;
          }
          .testimonial-content {
            flex-direction: column; gap: 32px;
          }
          .testimonial-profile, .testimonial-text-wrapper {
            width: 100%;
          }
          .quote-icon {
            top: -24px; left: -8px; font-size: 48px !important;
          }
          .testimonial-text {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
