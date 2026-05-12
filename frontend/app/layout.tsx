import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASM.ARCHITECT — Amar Sankar Maitra",
  description:
    "System Architect & Backend Developer specializing in distributed systems, cloud infrastructure, and robust API design for enterprise environments.",
  openGraph: {
    title: "ASM.ARCHITECT — Amar Sankar Maitra",
    description:
      "System Architect & Backend Developer specializing in distributed systems, cloud infrastructure, and robust API design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Material Symbols for icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col blueprint-grid">
        {children}
      </body>
    </html>
  );
}
