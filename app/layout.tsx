import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DTR GROUP",
  description: "DTR GROUP — Fondation & Solutions multisectorielles",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
