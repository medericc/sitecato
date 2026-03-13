'use client';

import { useState } from 'react';
import { Domaine } from '@/app/lib/data';
import ThemeCard from './ThemeCard';

interface ResponsiveGridProps {
  themes: Domaine[];
}

export default function ResponsiveGrid({ themes }: ResponsiveGridProps) {
  const [searchTerm, setSearchTerm] = useState('');

const filteredThemes = themes.filter((theme) =>
  theme.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
  // Correction: Utilisez (theme.description ?? '') pour garantir que vous avez une chaîne
  (theme.description ?? '').toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div className="space-y-6">
      {/* Barre de recherche */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 md:mt-2 md:mb-10">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Rechercher un thème..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-green-700"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredThemes.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} />
        ))}
      </div>

      {filteredThemes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            Aucun thème trouvé. Essayez d&#39;autres mots-clés.
          </p>
        </div>
      )}
    </div>
  );
}
