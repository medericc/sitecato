// components/ExpandableQuestion.tsx
'use client';

import { useState } from 'react';

interface ExpandableQuestionProps {
  question: string;
  reponse: string;
  scripture?: string[];
}

export default function ExpandableQuestion({ 
  question, 
  reponse, 
  scripture 
}: ExpandableQuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
      >
        <h3 className="font-semibold text-neufcent text-lg pr-6 leading-relaxed">
          {question}
        </h3>
        <svg
          className={`w-5 h-5 text-green-900 transform transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="p-6 border-t border-gray-100">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {reponse}
            </p>
          </div>

          {scripture && scripture.length > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-slate-800 mb-3 text-sm">Références bibliques :</h4>
              <div className="flex flex-wrap gap-2">
                {scripture.map((ref, index) => (
                  <span 
                    key={index}
                    className="bg-white text-neufcent px-3 py-1 rounded text-sm"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}