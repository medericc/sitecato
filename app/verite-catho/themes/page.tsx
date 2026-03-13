'use client';

import { useState, useMemo } from 'react';
import { themes } from '@/app/lib/data';
import ExpandableQuestion from '@/app/verite-catho/components/ExpandableText';
import Link from 'next/link';

export default function ThemeSearchPage() {
  const [query, setQuery] = useState('');

  // 🔍 Filtrage dynamique des questions selon la recherche
  const filteredQuestions = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();

   return themes.flatMap((theme) =>
      (theme.domaines ?? []).flatMap((domaine) =>
        // 💡 Correction 2 : Utilisation de '?? []' pour garantir un tableau sur domaine.questions
        (domaine.questions ?? [])
          .filter(
            (q) =>
              q.question.toLowerCase().includes(lowerQuery) ||
              q.reponse.toLowerCase().includes(lowerQuery) ||
              domaine.titre.toLowerCase().includes(lowerQuery) ||
              theme.titre.toLowerCase().includes(lowerQuery)
          )
          .map((q) => ({
            ...q,
            domaineTitre: domaine.titre,
            themeTitre: theme.titre,
            themeId: theme.id,
            domaineId: domaine.id,
          }))
      )
    );
  }, [query]);

  return (
    <main className="container mx-auto w-full p-6">
      {/* 🔙 Lien retour */}
      <nav className="mb-8">
        <Link
          href="/verite-catho"
          className="text-huitcent hover:text-green-800 inline-flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Retour à l&apos;accueil
        </Link>
      </nav>

      {/* 🧭 Titre */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-serif font-bold text-neufcent mb-5">
          Recherche dans les thèmes
        </h1>
        <p className="text-slate-600 text-lg">
          Tapez un mot-clé (ex: <em>Marie</em>, <em>Tradition</em>, <em>Jésus</em>) pour trouver les questions correspondantes.
        </p>
      </div>

      {/* 🔎 Barre de recherche */}
      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Rechercher une question, un thème ou un mot-clé..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-xl border border-gray-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
        />
      </div>

      {/* 📋 Résultats */}
      {query.trim() ? (
        filteredQuestions.length > 0 ? (
          <div className="space-y-6">
            <p className="text-sm text-slate-500 mb-2">
              {filteredQuestions.length} résultat{filteredQuestions.length > 1 ? 's' : ''} trouvé
              {filteredQuestions.length > 1 ? 's' : ''}.
            </p>

            {filteredQuestions.map((q) => (
              <div key={q.id} className="border-l-4 border-neufcent pl-4 ">
                <p className="text-sm text-slate-500 mb-3">
                  <Link
                    href={`/${q.themeId}/${q.domaineId}`}
                    className="hover:underline text-huitcent font-medium"
                  >
                    {q.themeTitre} → {q.domaineTitre}
                  </Link>
                </p>
                <ExpandableQuestion
                  question={q.question}
                  reponse={q.reponse}
                  scripture={q.scripture}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">
            Aucun résultat pour “{query}”.
          </p>
        )
      ) : (
        <p className="text-center text-slate-400 italic">
          Commencez à taper pour lancer une recherche...
        </p>
      )}
    </main>
  );
}
