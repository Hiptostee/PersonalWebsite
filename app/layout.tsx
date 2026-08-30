import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joeymarra.com"),
  title: {
    default: "Joseph Marra — Robotics & Autonomous Systems",
    template: "%s | Joseph Marra",
  },
  description: "Joseph Marra is a Georgia Tech computer science honors student building robotics software, embedded control systems, and autonomous systems.",
  keywords: ["Joseph Marra", "robotics", "autonomous systems", "ROS 2", "Georgia Tech", "software engineering", "Paesano"],
  authors: [{ name: "Joseph Marra", url: "https://joeymarra.com" }],
  creator: "Joseph Marra",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Joseph Marra",
    title: "Joseph Marra — Robotics & Autonomous Systems",
    description: "Georgia Tech CS honors student building autonomous robots, embedded control systems, and robotics software.",
    images: [
      {
        url: "/images/joeymarra-city-clean.png",
        width: 1182,
        height: 665,
        alt: "Joseph Marra robotics portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Marra — Robotics & Autonomous Systems",
    description: "Georgia Tech CS honors student building autonomous robots, embedded control systems, and robotics software.",
    images: ["/images/joeymarra-city-clean.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
