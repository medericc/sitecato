import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.appcatholique.com"),
   title: "Source Théologique Catholique – Apprendre la Foi et la Doctrine",
    description:
    "Source théologique catholique complète pour apprendre la doctrine, les écrits des docteurs de l’Église et approfondir la foi chrétienne.",
alternates: {
  canonical: "/",
},
    manifest: '/manifest.json',
  
   keywords: [
    "source théologique catholique",
    "apprendre théologie catholique",
    "doctrine catholique expliquée",
    "formation théologie catholique",
    "écrits docteurs Église"
  ], openGraph: {
    title: 'Ressources Catholiques',
    description: 'Découvrez la vie des saints, les écrits des docteurs et les ressources pour défendre la foi.',
    url: 'https://www.appcatholique.com/',
    siteName: 'Ressources Catholiques',
    images: [
      {
        url: 'https://www.appcatholique.com/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Ressources Catholiques',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ressources Catholiques',
    description: 'Découvrez la vie des saints, les écrits des docteurs et combattez les hérésies.',
    images: ['https://www.appcatholique.com/preview.jpg'],
  },
};

export const viewport = {
  themeColor: "#ffffff"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
          <Analytics />
      </body>
    </html>
  );
}
