"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#@$%&";

function useGlitchText(target: string, running: boolean) {
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!running) { setDisplay(target); return; }
    let frame = 0;
    const totalFrames = 18;
    const id = setInterval(() => {
      setDisplay(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < (frame / totalFrames) * target.length) return char;
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );
      frame++;
      if (frame > totalFrames) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [running, target]);

  return display;
}

export default function NotFound() {
  const [glitching, setGlitching] = useState(false);
  const [booted, setBooted] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const errorCode = useGlitchText("404", glitching);
  const headline  = useGlitchText("SIGNAL LOST", glitching);

  /* boot sequence */
  useEffect(() => {
    const t = setTimeout(() => {
      setBooted(true);
      setGlitching(true);
      setTimeout(() => setGlitching(false), 900);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  /* cursor blink */
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  /* periodic re-glitch */
  useEffect(() => {
    if (!booted) return;
    const id = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 700);
    }, 5000);
    return () => clearInterval(id);
  }, [booted]);

  return (
    <>
      <div id="not-found-root" className={`nf-root${booted ? " nf-booted" : ""}`}>
        {/* Blueprint grid bg */}
        <div className="nf-grid" aria-hidden />

        {/* Scan line sweep */}
        <div className="nf-scan" aria-hidden />

        {/* Horizontal noise lines */}
        <div className="nf-noise" aria-hidden>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="nf-noise-line" style={{ animationDelay: `${i * 0.7}s` }} />
          ))}
        </div>

        {/* Corner brackets */}
        <div className="nf-bracket nf-tl" aria-hidden />
        <div className="nf-bracket nf-tr" aria-hidden />
        <div className="nf-bracket nf-bl" aria-hidden />
        <div className="nf-bracket nf-br" aria-hidden />

        {/* Main content */}
        <main className="nf-content">
          {/* Status bar */}
          <div className="nf-statusbar font-mono">
            <span className="nf-dot nf-dot-red" />
            <span className="nf-dot nf-dot-amber" />
            <span className="nf-dot nf-dot-green" />
            <span className="nf-statusbar-label">ASM.PORTFOLIO // SYSTEM</span>
            <span className="nf-statusbar-right">ERR_ROUTE_UNRESOLVED</span>
          </div>

          {/* Giant 404 */}
          <div className={`nf-code-wrap${glitching ? " glitching" : ""}`} aria-label="404">
            <span className="nf-code font-montserrat" aria-hidden>{errorCode}</span>
            <span className="nf-code nf-code-shadow font-montserrat" aria-hidden>{errorCode}</span>
            <span className="nf-code nf-code-shadow2 font-montserrat" aria-hidden>{errorCode}</span>
          </div>

          {/* Headline */}
          <h1 className={`nf-headline font-montserrat${glitching ? " glitching" : ""}`}>
            {headline}
          </h1>

          {/* Divider */}
          <div className="nf-divider" />

          {/* Terminal block */}
          <div className="nf-terminal font-mono">
            <p><span className="nf-prompt">SYS &gt;</span> Attempting to resolve path…</p>
            <p><span className="nf-prompt">SYS &gt;</span> No route registered at this address.</p>
            <p><span className="nf-prompt">SYS &gt;</span> Fallback handler activated.</p>
            <p>
              <span className="nf-prompt">SYS &gt;</span>
              <span className="nf-cursor-line">
                &nbsp;Awaiting user input
                <span className={`nf-cursor${cursorVisible ? " visible" : ""}`}>█</span>
              </span>
            </p>
          </div>

          {/* CTA buttons */}
          <div className="nf-actions">
            <Link href="/" id="nf-home-link" className="nf-btn nf-btn-primary font-mono">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              RETURN HOME
            </Link>
            <Link href="/projects" id="nf-projects-link" className="nf-btn nf-btn-ghost font-mono">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
              VIEW PROJECTS
            </Link>
          </div>

          {/* Bottom coordinate readout */}
          <div className="nf-coords font-mono">
            <span>LAT: 16.5°N</span>
            <span>LNG: 80.6°E</span>
            <span>SIGNAL: 0.00%</span>
          </div>
        </main>
      </div>

      <style>{`
        /* ── Root & background ───────────────────────────── */
        .nf-root {
          position: fixed; inset: 0;
          background: #0a0a0a;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .nf-root.nf-booted { opacity: 1; }

        /* Blueprint grid */
        .nf-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(233,196,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(233,196,0,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Scan sweep */
        .nf-scan {
          position: absolute; inset: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(233,196,0,0.03) 50%,
            transparent 100%
          );
          background-size: 100% 200%;
          animation: scanSweep 4s linear infinite;
        }
        @keyframes scanSweep {
          0%   { background-position: 0 -100%; }
          100% { background-position: 0 200%; }
        }

        /* Noise lines */
        .nf-noise-line {
          position: absolute; left: 0; right: 0;
          height: 1px;
          background: rgba(233,196,0,0.12);
          animation: noiseDrift 8s ease-in-out infinite;
          opacity: 0;
        }
        .nf-noise-line:nth-child(1) { top: 15%; }
        .nf-noise-line:nth-child(2) { top: 32%; }
        .nf-noise-line:nth-child(3) { top: 50%; }
        .nf-noise-line:nth-child(4) { top: 65%; }
        .nf-noise-line:nth-child(5) { top: 78%; }
        .nf-noise-line:nth-child(6) { top: 90%; }
        @keyframes noiseDrift {
          0%, 90%, 100% { opacity: 0; transform: scaleX(0.1); }
          10%, 80%      { opacity: 1; transform: scaleX(1); }
        }

        /* Corner brackets */
        .nf-bracket {
          position: absolute;
          width: 40px; height: 40px;
          border-color: rgba(233,196,0,0.35);
          border-style: solid;
          border-width: 0;
          animation: bracketPulse 3s ease-in-out infinite alternate;
        }
        .nf-tl { top: 32px; left: 32px;  border-top-width: 2px; border-left-width: 2px; }
        .nf-tr { top: 32px; right: 32px; border-top-width: 2px; border-right-width: 2px; }
        .nf-bl { bottom: 32px; left: 32px;  border-bottom-width: 2px; border-left-width: 2px; }
        .nf-br { bottom: 32px; right: 32px; border-bottom-width: 2px; border-right-width: 2px; }
        @keyframes bracketPulse {
          from { border-color: rgba(233,196,0,0.2); }
          to   { border-color: rgba(233,196,0,0.6); }
        }

        /* ── Main content ───────────────────────────────── */
        .nf-content {
          position: relative; z-index: 10;
          display: flex; flex-direction: column;
          align-items: center; gap: 28px;
          padding: 48px 24px;
          text-align: center;
          max-width: 720px; width: 100%;
        }

        /* Status bar */
        .nf-statusbar {
          display: flex; align-items: center; gap: 10px;
          font-size: 11px; letter-spacing: 0.12em;
          color: rgba(208,198,171,0.5);
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(77,71,50,0.3);
          border-radius: 4px; padding: 8px 16px;
          width: 100%; max-width: 520px;
        }
        .nf-statusbar-right { margin-left: auto; color: rgba(233,196,0,0.6); }

        .nf-dot {
          width: 8px; height: 8px; border-radius: 50%; display: inline-block;
        }
        .nf-dot-red   { background: #e74c3c; }
        .nf-dot-amber { background: rgba(233,196,0,0.8); }
        .nf-dot-green { background: #2ecc71; }

        /* Giant 404 */
        .nf-code-wrap {
          position: relative;
          line-height: 1;
          user-select: none;
        }
        .nf-code {
          display: block;
          font-size: clamp(120px, 20vw, 220px);
          font-weight: 900;
          letter-spacing: -0.02em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(233,196,0,0.5);
          line-height: 1;
          transition: color 0.1s;
        }
        .nf-code-shadow,
        .nf-code-shadow2 {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: clamp(120px, 20vw, 220px);
          font-weight: 900;
          letter-spacing: -0.02em;
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
        }
        .nf-code-shadow  {
          color: rgba(233,196,0,0.15);
          -webkit-text-stroke: 0;
          animation: shadowPulse 3s ease-in-out infinite alternate;
        }
        .nf-code-shadow2 {
          color: rgba(200,40,40,0.1);
          -webkit-text-stroke: 0;
          animation: shadowPulse2 3s ease-in-out infinite alternate;
        }
        @keyframes shadowPulse  {
          from { opacity: 0; transform: translate(-3px, 2px); }
          to   { opacity: 1; transform: translate(-5px, 3px); }
        }
        @keyframes shadowPulse2 {
          from { opacity: 0; transform: translate(3px, -2px); }
          to   { opacity: 1; transform: translate(5px, -3px); }
        }

        /* Glitch shake */
        .nf-code-wrap.glitching .nf-code {
          animation: glitchShake 0.12s steps(2) 6;
          color: rgba(233,196,0,0.06);
          -webkit-text-stroke: 1px rgba(233,196,0,0.9);
        }
        @keyframes glitchShake {
          0%   { transform: translate(0,0) skewX(0deg); }
          25%  { transform: translate(-4px, 2px) skewX(-3deg); }
          50%  { transform: translate(4px,-2px) skewX(3deg); }
          75%  { transform: translate(-2px, 1px) skewX(1deg); }
          100% { transform: translate(0,0) skewX(0deg); }
        }

        /* Headline */
        .nf-headline {
          font-size: clamp(24px, 4vw, 40px);
          font-weight: 700; letter-spacing: 0.15em;
          color: var(--on-surface, #e0d9cc);
          margin: 0;
          transition: letter-spacing 0.1s;
        }
        .nf-headline.glitching {
          animation: headlineGlitch 0.08s steps(1) 8;
        }
        @keyframes headlineGlitch {
          0%, 100% { clip-path: none; opacity: 1; }
          33%       { clip-path: inset(20% 0 60% 0); opacity: 0.8; transform: translateX(3px); }
          66%       { clip-path: inset(60% 0 10% 0); opacity: 0.8; transform: translateX(-3px); }
        }

        /* Divider */
        .nf-divider {
          width: 240px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(233,196,0,0.5), transparent);
        }

        /* Terminal */
        .nf-terminal {
          display: flex; flex-direction: column; gap: 10px;
          background: rgba(10,10,10,0.7);
          border: 1px solid rgba(77,71,50,0.35);
          border-radius: 6px; padding: 24px 28px;
          width: 100%; max-width: 520px;
          text-align: left;
          font-size: 13px; line-height: 1.6;
          color: rgba(208,198,171,0.7);
          animation: terminalFadeIn 0.6s ease 0.5s both;
        }
        @keyframes terminalFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nf-prompt { color: rgba(233,196,0,0.8); margin-right: 6px; }
        .nf-cursor-line { display: inline-flex; align-items: center; }
        .nf-cursor { opacity: 0; transition: opacity 0.1s; }
        .nf-cursor.visible { opacity: 1; }

        /* Actions */
        .nf-actions {
          display: flex; gap: 16px; flex-wrap: wrap; justify-content: center;
          animation: terminalFadeIn 0.6s ease 0.8s both;
        }

        .nf-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; letter-spacing: 0.12em;
          padding: 12px 28px; border-radius: 4px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .nf-btn:hover { transform: translateY(-2px); }

        .nf-btn-primary {
          background: rgba(233,196,0,0.12);
          border: 1px solid rgba(233,196,0,0.45);
          color: rgba(233,196,0,0.95);
          box-shadow: 0 0 0 rgba(233,196,0,0);
        }
        .nf-btn-primary:hover {
          background: rgba(233,196,0,0.2);
          border-color: rgba(233,196,0,0.8);
          box-shadow: 0 0 24px rgba(233,196,0,0.18);
        }

        .nf-btn-ghost {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(77,71,50,0.45);
          color: rgba(208,198,171,0.75);
        }
        .nf-btn-ghost:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(208,198,171,0.5);
          color: rgba(208,198,171,1);
        }

        /* Coordinate readout */
        .nf-coords {
          display: flex; gap: 24px; flex-wrap: wrap; justify-content: center;
          font-size: 11px; letter-spacing: 0.12em;
          color: rgba(208,198,171,0.3);
          animation: terminalFadeIn 0.6s ease 1s both;
        }

        /* Mobile */
        @media (max-width: 600px) {
          .nf-tl, .nf-tr, .nf-bl, .nf-br { width: 24px; height: 24px; inset: auto; }
          .nf-tl { top: 16px; left: 16px; }
          .nf-tr { top: 16px; right: 16px; }
          .nf-bl { bottom: 16px; left: 16px; }
          .nf-br { bottom: 16px; right: 16px; }
          .nf-actions { flex-direction: column; align-items: stretch; }
          .nf-btn { justify-content: center; }
          .nf-terminal { padding: 18px 16px; }
          .nf-statusbar { font-size: 10px; padding: 6px 12px; }
        }
      `}</style>
    </>
  );
}
