import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
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

  title: "Trivia Biblique – Quiz sur la Bible et la foi chrétienne",
  description:
    "Testez vos connaissances de la Bible avec Trivia Biblique : un quiz chrétien complet pour apprendre l'Écriture, la foi et la doctrine catholique.",

  alternates: {
    canonical: "/trivia-biblique",
  },

  keywords: [
    "quiz biblique",
    "trivia biblique",
    "jeu bible",
    "quiz chrétien",
    "questions bible",
    "jeu chrétien",
  ],

  openGraph: {
    title: "Trivia Biblique – Quiz chrétien",
    description:
      "Quiz biblique complet pour tester vos connaissances de la Bible et approfondir votre foi.",
    url: "https://www.appcatholique.com/trivia-biblique",
    siteName: "Ressources Catholiques",
    images: [
      {
        url: "https://www.appcatholique.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Trivia Biblique - Quiz chrétien",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trivia Biblique – Quiz chrétien",
    description:
      "Testez vos connaissances de la Bible avec ce quiz chrétien complet.",
    images: ["https://www.appcatholique.com/preview.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

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