export default function AProposPage() {
  const sites = [
    {
      id: 'ecrits-catholiques',
      titre: '📚 Écrits Catholiques',
      description: "Découvrez les textes des Pères et Docteurs de l'Église, méditations et enseignements pour approfondir la foi.",
      url: 'https://www.sourcetheologique.com/',
    },
    
    {
       id: 'vie-des-saints',
      titre: "🙏 La Vie des Saints",
      description: "Découvrez les témoins exemplaires de la foi chrétienne à travers leurs enseignements inspirants.",
      url: "https://vie-de-saints.vercel.app/"
    },
    {
      id: 'bearn',
      titre: '🏰 Le Béarn Chrétien',
      description: "Plongez dans l'histoire chrétienne du Béarn, ses églises, traditions et patrimoine spirituel.",
      url: 'https://bearn.vercel.app/',
    },
    {
      id: 'youtube-catholicisme',
      titre: '🎬 Chaîne YouTubee',
      description: "Films, histoires et vidéos sur la foi catholique, pour partager et comprendre la spiritualité chrétienne.",
      url: 'https://www.youtube.com/@france_jeunesse',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-ex text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            À propos de mes projets
          </h1>
          <p className="text-lg text-gray-100 leading-relaxed">
            Voici quelques <strong>autres sites</strong> que j&apos;ai créés en rapport avec le catholicisme, 
            l&apos;histoire chrétienne et la spiritualité.
          </p>
        </div>
      </section>

      {/* Section Sites */}
      <section className="container mx-auto px-6 py-12 max-w-5xl space-y-8">
        {sites.map((site) => (
          <div key={site.id} className="bg-white rounded-xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neufcent mb-2">
              {site.titre}
            </h2>
            <p className="text-slate-900 text-sm sm:text-base mb-4 leading-relaxed">
              {site.description}
            </p>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2  border-2 border-huitcent bg-white hover:bg-green-700 text-huitcent px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-colors"
            >
              Visiter ce site →
              <span className="text-white">🔗</span>
            </a>
          </div>
        ))}
      </section>

   
    </main>
  );
}
