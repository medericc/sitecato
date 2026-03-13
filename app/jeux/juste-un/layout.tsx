import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
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

  title: {
    default: "Juste Un – Jeu chrétien de mots",
    template: "%s | Juste Un",
  },

  description:
    "Juste Un est un jeu de mots chrétien inspiré du célèbre jeu Just One. Découvrez la Bible, la culture chrétienne et la foi catholique de manière ludique.",

  applicationName: "Juste Un",

  keywords: [
    "Juste Un",
    "jeu chrétien",
    "jeu biblique",
    "jeu de mots chrétien",
    "jeu catholique",
    "jeu bible",
    "jeu culture chrétienne",
    "just one chrétien",
    "catéchèse ludique",
  ],

  authors: [{ name: "Ressources Catholiques" }],
  creator: "Ressources Catholiques",

  alternates: {
    canonical: "/jeux/juste-un",
  },

  openGraph: {
    type: "website",
    url: "https://www.appcatholique.com/jeux/juste-un",
    title: "Juste Un – Jeu chrétien de mots",
    description:
      "Une adaptation chrétienne du jeu Just One pour découvrir la foi, la Bible et la culture chrétienne.",
    siteName: "Ressources Catholiques",
    locale: "fr_FR",
    images: [
      {
        url: "https://www.appcatholique.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Juste Un – Jeu chrétien",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Juste Un – Jeu chrétien",
    description:
      "Une adaptation chrétienne du jeu Just One pour apprendre la foi et la culture chrétienne.",
    images: ["https://www.appcatholique.com/preview.jpg"],
  },

  manifest: "/manifest.json",


  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="min-h-full bg-slate-100">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}