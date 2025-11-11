'use client';
import { useEffect } from 'react';

export default function SWRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((reg) => console.log('✅ Service Worker enregistré', reg))
          .catch((err) => console.error('❌ Erreur SW', err));
      });
    }
  }, []);

  return null;
}
