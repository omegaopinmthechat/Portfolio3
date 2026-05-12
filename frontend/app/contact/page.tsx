"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5502";
      const res = await fetch(`${backendUrl}/send-contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className="contact-main">
        <div className="contact-hero">
          <div className="hero-divider">
            <span className="divider-line" />
            <span className="font-mono hero-label">AVAILABLE FOR TRANSMISSION</span>
            <span className="divider-line" />
          </div>
          <h1 className="font-montserrat hero-title">CONTACT ME</h1>
        </div>

        <div className="form-container">
          <div className="contact-card shimmer-border glass">
            <div className="card-id font-mono">Component ID: CX-772_CONTACT</div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label className="font-mono field-label">Full Name</label>
                  <input
                    type="text"
                    className="field-input font-mono"
                    placeholder="ENTER IDENTITY"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="font-mono field-label">Email Address</label>
                  <input
                    type="email"
                    className="field-input font-mono"
                    placeholder="SECURE_ID@DOMAIN.TLD"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-field">
                <label className="font-mono field-label">Subject</label>
                <input
                  type="text"
                  className="field-input font-mono"
                  placeholder="CLASSIFICATION"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="form-field">
                <label className="font-mono field-label">Message Body</label>
                <textarea
                  className="field-input field-textarea font-mono"
                  placeholder="COMPILE DATA..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn-submit" disabled={status === "sending"}>
                {status === "sending" ? "TRANSMITTING..." : "TRANSMIT DATA"}
                <span className="material-symbols-outlined">send</span>
              </button>
              {status === "success" && <p className="status-msg success">Message sent successfully!</p>}
              {status === "error" && <p className="status-msg error">Failed to send. Please try again.</p>}
            </form>
          </div>
        </div>
      </main>

      <style>{`
        .contact-main {
          padding-top: 80px;
          min-height: 100vh;
          padding-bottom: 64px;
        }
        .contact-hero {
          text-align: center;
          padding: 64px var(--margin-desktop) 48px;
          max-width: 1600px;
          margin: 0 auto;
        }
        .hero-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .divider-line {
          width: 48px;
          height: 1px;
          background: var(--primary-fixed);
        }
        .hero-label {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.15em;
          color: var(--primary-fixed);
          text-transform: uppercase;
        }
        .hero-title {
          font-size: clamp(48px, 6vw, 72px);
          font-weight: 700;
          letter-spacing: 0.05em;
          line-height: 1.1;
          color: var(--primary);
        }
        .form-container {
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 var(--margin-desktop);
        }
        .contact-card {
          position: relative;
          padding: 48px;
          border: 1px solid rgba(77, 71, 50, 0.3);
          border-radius: 0.75rem;
          background: rgba(42, 42, 42, 0.6);
          backdrop-filter: blur(12px);
        }
        .card-id {
          position: absolute;
          top: 16px;
          right: 24px;
          font-size: 10px;
          color: rgba(233, 196, 0, 0.3);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .field-label {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--on-surface-variant);
          text-transform: uppercase;
        }
        .field-input {
          width: 100%;
          background: var(--surface-container-lowest);
          border: 1px solid var(--outline-variant);
          color: var(--on-surface);
          padding: 16px;
          font-size: 13px;
          letter-spacing: 0.05em;
          outline: none;
          transition: border-color 0.2s ease;
          border-radius: 0.125rem;
        }
        .field-input:focus {
          border-color: var(--primary-fixed);
        }
        .field-textarea {
          resize: none;
        }
        .btn-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 48px;
          background: linear-gradient(135deg, #ffe16d 0%, #ffd700 50%, #b8860b 100%);
          color: var(--background);
          font-family: 'Geist Mono', monospace;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: opacity 0.2s ease;
          align-self: flex-start;
        }
        .btn-submit:hover {
          opacity: 0.9;
        }
        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .status-msg {
          font-size: 14px;
          font-weight: 500;
          margin-top: -16px;
        }
        .status-msg.success {
          color: #4ade80;
        }
        .status-msg.error {
          color: var(--error);
        }

        @media (max-width: 900px) {
          .contact-hero {
            padding: 32px var(--margin-mobile) 32px;
          }
          .form-container {
            padding: 0 var(--margin-mobile);
          }
          .contact-card {
            padding: 32px 24px;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .btn-submit {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
