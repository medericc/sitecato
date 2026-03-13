// app/layout.tsx
import type { Metadata } from 'next';
import './verite.css';
import Navigation from '@/app/verite-catho/components/Navigation';
import Link from 'next/link';
import Footer from '@/app/verite-catho/components/Footer';
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: 'Catholicisme vs Hérésie — Défense de la Foi Catholique, Tradition et Vérité',
  description:
    'Découvrez la foi catholique authentique face aux erreurs doctrinales : Bible, Tradition, Église, Foi et Œuvres, Purgatoire. Études bibliques, histoire, et apologétique catholique pour comprendre et aimer la vérité du Christ.',
  keywords: [
    'catholicisme',
    'foi catholique',
    'Bible et Tradition',
    'Église catholique',
    'protestantisme',
    'apologétique catholique',
    'purgatoire',
    'foi et œuvres',
    'sola scriptura',
    'sola fide',
    'Jean-Paul II',
    'Vatican',
    'histoire de l’Église',
    'Pères de l’Église',
    'messe catholique',
    'tradition apostolique',
  ],
  authors: [{ name: 'Catholicisme vs Hérésie', url: 'cato-heresie.vercel.app' }],
  openGraph: {
    title: 'Catholicisme vs Hérésie — Défense de la Foi Catholique',
    description:
      'Analyse des différences entre la foi catholique et les doctrines protestantes. Bible, Tradition, Foi et Œuvres, Purgatoire expliqués avec clarté et fidélité à l’enseignement de l’Église.',
    url: 'cato-heresie.vercel.app',
    siteName: 'Catholicisme vs Hérésie',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Catholicisme vs Hérésie — Défense de la Foi Catholique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catholicisme vs Hérésie',
    description:
      'Découvrez la foi catholique véritable : la Bible, la Tradition, et l’enseignement de l’Église unis pour la vérité du Christ.',
    creator: '@votre_compte',
    images: ['/preview.jpg'],
  },
  alternates: {
    canonical: 'cato-heresie.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* SEO additionnel */}
        <meta name="robots" content="index, follow" />
        <meta
    name="google-site-verification"
    content="KIssfeT7ogtaHZ_L9xPCYHsk1VK4jjH1JHtdGGPMg_E"
  />
        <link rel="icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Hérétique" />
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased">
        <header
          className="bg-secondary text-white shadow-lg sticky top-0 z-50"
          role="banner"
        >
          <div className="container mx-auto">
            <div className="flex justify-between items-center p-4">
              {/* Logo/Titre */}
              <div className="flex items-center space-x-4">
                <Link
                  href="/"
                  className="flex items-center space-x-3"
                  aria-label="Retour à l'accueil"
                >
                  <div className="bg-white text-secondary p-2 rounded-lg">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-xl font-serif font-bold leading-tight">
                      Catholicisme vs Hérésie
                    </h1>
                    <p className="text-white-200 text-xs hidden sm:block">
                      Défense de la foi catholique à travers les siècles
                    </p>
                  </div>
                </Link>
              </div>

              {/* Navigation */}
              <Navigation />
            </div>
          </div>
        </header>

        <main id="main-content" className="flex-1 min-h-screen">
          {children}
        </main>

        <Footer />
             <Analytics />
      </body>
    </html>
  );
}
