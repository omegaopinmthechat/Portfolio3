"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME",         href: "/",          icon: "home"         },
  { label: "WORK HISTORY", href: "#work",       icon: "work_history" },
  { label: "PROJECTS",     href: "/projects",   icon: "folder_open"  },
  { label: "ACADEMICS",    href: "/academics",  icon: "school"       },
  { label: "CONTACT",      href: "/contact",    icon: "mail"         },
];

export default function Navbar() {
  const pathname = usePathname();

  // A link is "active" when the current path matches its href exactly
  const isActive = (href: string) => {
    if (href.startsWith("#")) return false; // hash links are never path-active
    return pathname === href;
  };

  return (
    <>
      {/* ── Top Navigation Bar ──────────────────────────────────── */}
      <header id="main-nav" className="glass-nav navbar-root">
        <div className="nav-inner">
          {/* Logo — links to home */}
          <Link href="/" id="nav-logo" className="logo-link font-montserrat">
            <span className="material-symbols-outlined logo-icon">terminal</span>
            <span>ASM.PORTFOLIO</span>
          </Link>

          {/* Desktop links */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`nav-link font-mono${isActive(item.href) ? " nav-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Mobile Bottom Navigation ─────────────────────────────── */}
      <nav id="mobile-nav" className="mobile-bottom-nav" aria-label="Mobile navigation">
        {navLinks.map((item) => (
          <Link
            key={item.icon}
            href={item.href}
            className={`mob-link${isActive(item.href) ? " mob-active" : ""}`}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontVariationSettings: isActive(item.href) ? '"FILL" 1' : '"FILL" 0',
              }}
            >
              {item.icon}
            </span>
          </Link>
        ))}
      </nav>

      {/* ── Scoped styles ─────────────────────────────────────────── */}
      <style>{`
        /* Wrapper */
        .navbar-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(77, 71, 50, 0.6);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
        }

        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px var(--margin-desktop);
          max-width: 1600px;
          margin: 0 auto;
          width: 100%;
        }

        /* Logo */
        .logo-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--primary-fixed-dim);
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .logo-link:hover { opacity: 0.8; }
        .logo-icon { font-size: 22px !important; color: var(--primary-fixed-dim); }

        /* Desktop nav */
        .desktop-nav { display: flex; gap: 36px; align-items: center; }

        .nav-link {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-decoration: none;
          color: var(--on-surface-variant);
          border-bottom: 2px solid transparent;
          padding-bottom: 4px;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .nav-link:hover {
          color: var(--primary-fixed-dim);
        }
        .nav-active {
          color: var(--primary-fixed-dim) !important;
          border-bottom-color: var(--primary-fixed-dim) !important;
        }

        /* Mobile bottom nav */
        .mobile-bottom-nav {
          display: none;
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 50;
          background: rgba(14, 14, 14, 0.9);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid rgba(77, 71, 50, 0.5);
          box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.5);
          justify-content: space-around;
          align-items: center;
          height: 64px;
        }

        .mob-link {
          display: flex;
          flex: 1;
          justify-content: center;
          align-items: center;
          color: var(--on-surface-variant);
          opacity: 0.6;
          text-decoration: none;
          transition: color 0.2s ease, opacity 0.2s ease;
        }
        .mob-link:hover { opacity: 0.9; color: var(--primary-fixed-dim); }
        .mob-active { color: var(--primary-fixed-dim) !important; opacity: 1 !important; }

        /* Responsive */
        @media (max-width: 900px) {
          .desktop-nav       { display: none !important; }
          .mobile-bottom-nav { display: flex !important; }
          .nav-inner { padding: 14px var(--margin-mobile) !important; }
        }
        @media (min-width: 901px) {
          .mobile-bottom-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
