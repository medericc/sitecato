'use client';

import Link from 'next/link';
import { Domaine } from '@/app/lib/data';

interface ThemeCardProps {
  theme: Domaine;
}

export default function ThemeCard({ theme }: ThemeCardProps) {
  return (
    <div className="bg-white rounded-lg  shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-white">
      {/* En-tête */}
      <div className="bg-neuf text-white p-4 md:p-8">
        <h3 className="text-xl font-serif font-bold mb-2 line-clamp-2">
          {theme.titre}
        </h3>
        <p className="text-white text-sm">{theme.description}</p>
      </div>

      {/* Contenu */}
      <div className="p-4 md:p-8">
       <p className="text-slate-700 text-sm mb-4 line-clamp-3">
          {/* Correction ici : utilise (theme.domaines ?? []) pour garantir un tableau */}
          {(theme.domaines ?? []).length} domaine{(theme.domaines ?? []).length > 1 ? 's' : ''}
        </p>

        {/* Footer */}
        <div className="flex justify-end items-center pt-3 border-t border-gray-100">
          <Link
          href={`/verite-catho/${theme.id}`}
        className="
    
    bg-white 
    text-exploreh 
    hover:bg-white
    px-4 py-2 
    rounded 
    text-sm font-medium 
    transition-colors duration-200 
    flex items-center gap-1
  " >
            Explorer
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
