import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { GameProvider } from "./components/GameContextProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.appcatholique.com"),

  title: {
    default: "L'Apostat – Jeu Undercover Chrétien",
    template: "%s | L'Apostat"
  },

  description:
    "L'Apostat est un jeu d'infiltration chrétien où les joueurs doivent démasquer l'apostat caché. Un jeu social inspiré des jeux undercover pour apprendre et partager la foi.",

  keywords: [
    "jeu chrétien",
    "undercover chrétien",
    "jeu infiltration chrétien",
    "jeu biblique",
    "jeu apostat",
    "jeu de société chrétien",
    "jeu catholique",
    "jeu en ligne chrétien",
    "L Apostat"
  ],

  authors: [{ name: "Ressources Catholiques" }],
  creator: "Ressources Catholiques",

  alternates: {
    canonical: "/jeux/l-apostat",
  },



  manifest: "/manifest.json",

  openGraph: {
    type: "website",
    url: "https://www.appcatholique.com/jeux/l-apostat",
    title: "L'Apostat – Jeu Undercover Chrétien",
    description:
      "Jeu social chrétien où les joueurs doivent découvrir l'apostat infiltré.",
    siteName: "Ressources Catholiques",
    images: [
      {
        url: "https://www.appcatholique.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "L'Apostat - Jeu Undercover Chrétien"
      }
    ],
    locale: "fr_FR"
  },

  twitter: {
    card: "summary_large_image",
    title: "L'Apostat – Jeu Undercover Chrétien",
    description:
      "Un jeu social chrétien où vous devez démasquer l'apostat caché.",
    images: ["https://www.appcatholique.com/preview.jpg"]
  },

  robots: {
    index: true,
    follow: true
  },

 
};
export const viewport = {
  themeColor: "#1e1b4b"
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <GameProvider>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="container mx-auto px-4 py-6 max-w-4xl">
              {children}
            </div>
          </div>
        </GameProvider>
        <Analytics />
      </body>
    </html>
  );
}