import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/public/header";
import Footer from "@/components/public/footer";
import ParticleBackground from "@/components/public/particle-background";
import CommandPalette from "@/components/public/command-palette";
import CustomCursor from "@/components/public/custom-cursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Smruti Ranjan Das | Academic Portfolio & Research Platform",
  description: "Digital identity of Dr. Smruti Ranjan Das - Assistant Professor & Associate Dean (Industry Engagement), School of Economics & Commerce, KIIT Deemed to be University. Academic, researcher, mentor, innovation leader, and industry engagement expert.",
  keywords: [
    "Dr. Smruti Ranjan Das",
    "KIIT University",
    "Associate Dean",
    "Consumer Behaviour",
    "Digital Marketing",
    "Corporate Social Responsibility",
    "Entrepreneurial Management",
    "NSS KIIT",
    "Economics and Commerce"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-custom-bg text-custom-fg pt-24">
        <CustomCursor />
        <ParticleBackground />
        <CommandPalette />
        <Header />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

