import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "ASM.PORTFOLIO — Amar Sankar Maitra | Home",
  description:
    "Home of Amar Sankar Maitra — System Architect & Backend Developer engineering scalable, high-performance backend systems with architectural precision.",
};

export default function HomePage() {
  return <HomeClient />;
}
