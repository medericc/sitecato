export const metadata = {
  title: "Politique de Confidentialité — Catholicisme vs Hérésie",
  description:
    "Politique de confidentialité du site Catholicisme vs Hérésie : collecte, utilisation et protection des données personnelles.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-10 prose prose-slate">
      <h1 className="text-3xl font-bold mb-4">Politique de Confidentialité</h1>

      <p>
        Nous attachons une grande importance à la protection de vos données
        personnelles. Cette politique explique quelles informations nous
        collectons, comment nous les utilisons et quels sont vos droits.
      </p>

      <h2>1. Données collectées</h2>
      <p>
        Nous collectons uniquement les données nécessaires au fonctionnement du
        site, notamment :
      </p>
      <ul>
        <li>Les données techniques (adresse IP, navigateur, pages visitées)</li>
        <li>Les messages envoyés via les formulaires</li>
        <li>Les statistiques anonymisées (Vercel Analytics)</li>
      </ul>

      <h2>2. Utilisation des données</h2>
      <p>Vos données peuvent être utilisées pour :</p>
      <ul>
        <li>Améliorer l’expérience utilisateur</li>
        <li>Assurer la sécurité du site</li>
        <li>Analyser le trafic (anonymisé)</li>
      </ul>

      <h2>3. Cookies</h2>
      <p>
        Le site utilise uniquement des cookies techniques et analytiques.
      </p>

      <h2>4. Vos droits</h2>
      <p>
        Conformément au RGPD, vous pouvez demander la consultation, la
        modification ou la suppression de vos données personnelles.
      </p>

      <h2>5. Contact</h2>
      <p>
        Pour toute demande liée à la confidentialité :  
        <strong>bleufarfe@gmail.com</strong>
      </p>
    </div>
  );
}
