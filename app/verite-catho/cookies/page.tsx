export const metadata = {
  title: "Gestion des Cookies — Catholicisme vs Hérésie",
  description:
    "Informations sur l'utilisation des cookies sur le site Catholicisme vs Hérésie.",
};

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-10 prose prose-slate">
      <h1 className="text-3xl font-bold mb-4">Gestion des Cookies</h1>

      <h2>1. Qu’est-ce qu’un cookie ?</h2>
      <p>
        Un cookie est un petit fichier enregistré sur votre appareil lors de la
        navigation sur un site internet.
      </p>

      <h2>2. Cookies utilisés sur ce site</h2>
      <ul>
        <li>
          <strong>Cookies techniques</strong> : nécessaires au fonctionnement du
          site.
        </li>
        <li>
          <strong>Cookies analytiques (Vercel Analytics)</strong> : mesure du
          trafic anonymisée.
        </li>
      </ul>

      <h2>3. Aucun cookie publicitaire</h2>
      <p>
        Le site ne diffuse aucune publicité et n’utilise aucun cookie de
        ciblage.
      </p>

      <h2>4. Gestion des cookies</h2>
      <p>
        Vous pouvez désactiver les cookies analytiques via les paramètres de
        votre navigateur.
      </p>

      <h2>5. Contact</h2>
      <p>
        Pour plus d’informations :  
        <strong>bleufarfe@gmail.com</strong>
      </p>
    </div>
  );
}
