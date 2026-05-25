import { Syne, DM_Sans } from "next/font/google";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import PWARegister from "@/src/components/ui/PWARegister";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://resourcesnow.in"),
  title: {
    default: "Resources Now — AI-Powered Digital Engineering",
    template: "%s | Resources Now",
  },
  description:
    "Resources Now is an AI solutions, web development, workflow automation, SaaS development, and enterprise software engineering company based in Adajan, Surat, Gujarat, India.",
  keywords: [
    "AI solutions company",
    "web development company",
    "AI integration services",
    "workflow automation",
    "enterprise software development",
    "SaaS development",
    "business automation",
    "AI agents",
    "software engineering",
    "digital infrastructure",
  ],
  applicationName: "Resources Now",
  authors: [{ name: "Resources Now" }],
  creator: "Resources Now",
  publisher: "Resources Now",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Resources Now",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: "/icons/icon-32.png",
    shortcut: "/icons/icon-32.png",
    apple: "/icons/icon-192.png",
  },
  openGraph: {
    type: "website",
    url: "https://resourcesnow.in",
    siteName: "Resources Now",
    title: "Resources Now — AI-Powered Digital Engineering",
    description:
      "AI-powered software engineering, SaaS development, workflow automation, AI integrations, AI agents, and enterprise digital infrastructure.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Resources Now" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources Now — AI-Powered Digital Engineering",
    description:
      "AI integration services, workflow automation, web development, SaaS engineering, and enterprise software development.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B6CF4",
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Resources Now",
    url: "https://resourcesnow.in",
    logo: "https://resourcesnow.in/logo.png",
    email: "mail@resourcesnow.in",
    telephone: "+91 70411 39115",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    description: "AI-powered digital engineering and enterprise software systems company.",
    knowsAbout: [
      "AI integration services",
      "workflow automation",
      "SaaS development",
      "AI agents",
      "enterprise software development",
      "digital infrastructure",
    ],
  };

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <PWARegister />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
