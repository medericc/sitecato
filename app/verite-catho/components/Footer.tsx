import Link from 'next/link'; // 👈 N'oubliez pas l'importation

export default function Footer() {
  return (
    <footer className="bg-secondary text-accent-light">

      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          {/* Citation */}
         <div className="flex items-center justify-center">
  {/* Version bureau/tablette */}
  <div className="hidden sm:flex items-center justify-center space-x-2">
    <h3 className="text-lg font-serif font-bold text-accent-light">
      &quot;La vérité vous rendra libres&quot; - Jean 8:32
    </h3>
  </div>

  {/* Version mobile */}
  <div className="flex flex-col sm:hidden items-center justify-center">
    <h3 className="text-lg font-serif font-bold text-accent-light">
      &quot;La vérité vous rendra libres&quot;
    </h3>
    <span className="text-accent-light text-sm mt-1">Jean 8:32</span>
  </div>
</div>


          {/* Liens obligatoires */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 text-sm text-accent-light">
            <Link // 👈 Remplacement de <a> par Link
              href="/politique-confidentialite"
              className="hover:text-white transition-colors duration-200"
            >
              Politique de confidentialité
            </Link>
            <Link // 👈 Remplacement de <a> par Link
              href="/mentions-legales"
              className="hover:text-white transition-colors duration-200"
            >
              Mentions légales
            </Link>
            <Link // 👈 Remplacement de <a> par Link
              href="/cookies"
              className="hover:text-white transition-colors duration-200"
            >
              Gestion des cookies
            </Link>
            <Link // 👈 Remplacement de <a> par Link
              href="/contact"
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
         <div className="pt-4 border-t border-primary-hover">

            <p className="text-accent-light text-sm">
              © {new Date().getFullYear()} Catholicisme vs Hérésie - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}