import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5502;
const MAIL_USER = process.env.MAIL;
const MAIL_PASS = process.env.MAIL_PASS;
const CONTACT_RECEIVER = process.env.CONTACT_RECEIVER || MAIL_USER;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";
const MAX_NAME_LENGTH = 120;
const MAX_SUBJECT_LENGTH = 180;
const MAX_MESSAGE_LENGTH = 4000;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value) {
  return emailPattern.test(String(value || "").trim());
}

function sanitizeText(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeHtmlWithBreaks(value) {
  return escapeHtml(value).replace(/\r?\n/g, "<br/>");
}

// Utilities


// Middleware
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
  }),
);
app.use(express.json({ limit: "8mb" }));

// Transporter
const transporter =
  MAIL_USER && MAIL_PASS
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: MAIL_USER,
          pass: MAIL_PASS,
        },
      })
    : null;

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "contact",
    mailConfigured: Boolean(MAIL_USER && MAIL_PASS),
  });
});

// API
app.post("/send-contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const cleanName = sanitizeText(name);
    const cleanEmail = sanitizeText(email);
    const cleanSubject = sanitizeText(subject) || "General Contact";
    const cleanMessage = sanitizeText(message);

    if (!transporter || !MAIL_USER || !CONTACT_RECEIVER) {
      return res.status(500).json({
        error: "Mail service is not configured correctly.",
      });
    }

    if (!cleanName) {
      return res.status(400).json({ error: "Name is required." });
    }

    if (cleanName.length > MAX_NAME_LENGTH) {
      return res
        .status(400)
        .json({ error: "Name must be 120 characters or fewer." });
    }

    if (!isValidEmail(cleanEmail)) {
      return res.status(400).json({ error: "A valid email is required." });
    }

    if (cleanSubject.length > MAX_SUBJECT_LENGTH) {
      return res
        .status(400)
        .json({ error: "Subject must be 180 characters or fewer." });
    }

    if (!cleanMessage) {
      return res.status(400).json({ error: "Message is required." });
    }

    if (cleanMessage.length > MAX_MESSAGE_LENGTH) {
      return res
        .status(400)
        .json({ error: "Message must be 4000 characters or fewer." });
    }

    const mailOptions = {
      from: `"Contact Form" <${MAIL_USER}>`,
      replyTo: cleanEmail,
      to: CONTACT_RECEIVER,
      subject: `Contact: ${cleanSubject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(cleanSubject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtmlWithBreaks(cleanMessage)}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Contact message sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send contact message." });
  }
});

// Start server
app.listen(PORT, () => {
  if (!MAIL_USER || !MAIL_PASS) {
    console.warn("MAIL/MAIL_PASS not set. Contact email sending will fail.");
  }
  console.log(`Contact server running on http://localhost:${PORT}`);
});
