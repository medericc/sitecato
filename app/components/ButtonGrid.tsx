'use client'


export default function ButtonGrid() {
  const buttons = [
    {
      title: "La Vie des Saints",
      description: "Découvrez les témoins exemplaires de la foi chrétienne",
      icon: "🙏",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      url: "https://vie-de-saints.vercel.app/"
    },
    {
      title: "Les Écrits des Docteurs",
      description: "Plongez dans la sagesse des grands théologiens",
      icon: "📚",
      color: "from-purple-600 to-purple-700",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      url: "https://www.sourcetheologique.com/"
    },
    {
      title: "Combattre les Hérésies",
      description: "Défendez la vérité de la foi catholique face aux hérétiques",
      icon: "⚔️",
      color: "from-amber-600 to-amber-700",
      hoverColor: "hover:from-amber-600 hover:to-amber-700",
      url: "https://cato-heresie.vercel.app/"
    },
    {
      title: "Le Béarn Chrétien",
      description: "Plongez dans l'histoire chrétienne du Béarn et sa tradition",
      icon: "🏰",
      color: "from-green-600 to-green-700",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      url: "https://bearn.vercel.app/"
    },
    {
      title: "Films Catholiques",
      description: "Films de saints et de la Bible sur notre chaîne YouTube",
      icon: "🎬",
      color: "from-red-600 to-red-700",
      hoverColor: "hover:from-red-600 hover:to-red-700",
      url: "https://www.youtube.com/@france_jeunesse"
    }
    ,
    {
      title: "Jeux Play Store",
      description: "Jeux de société et quiz sur le christianisme",
      icon: "🎲",
      color: "from-pink-600 to-pink-700",
      hoverColor: "hover:from-pink-600 hover:to-pink-700",
      url: "https://play.google.com/store/apps/developer?id=medericcc&hl=fr"
    }
  ]

  return (
    <div className="w-full mx-auto px-4 pb-12 mb-5 sm:px-3 md:px-4 lg:px-24">
      
      {/* Grille : 1 colonne mobile → 3 colonnes partout ensuite */}
      <div className="
        grid 
        grid-cols-1
        md:grid-cols-3 
        gap-6
        mt-6
      ">
        {buttons.map((button, index) => (
      <div
  key={index}
  className={`
    group cursor-pointer transition duration-300 hover:scale-[1.02]

    /* mobile : full width (grid 1 col) */
    w-full

    /* desktop/tablette : largeur selon rang */
    md:${index < 3 ? "basis-1/3" : "basis-1/4"}

    /* centre automatiquement les lignes */
    md:flex-shrink-0
  `}
  onClick={() => window.open(button.url, '_blank')}
>



            <div className={`
              bg-gradient-to-br ${button.color} ${button.hoverColor}
              rounded-2xl p-6 md:py-10 lg:py-12 md:px-8
 text-white shadow-lg 
              transition-all duration-300 group-hover:shadow-xl 
              flex flex-col h-full min-h-[230px]
            `}>
              
              <div className="text-5xl mb-4 text-center">{button.icon}</div>

              <h3 className="text-xl font-bold text-center mb-2 leading-tight">
                {button.title}
              </h3>

              <p className="text-white/90 text-center text-sm flex-grow leading-snug px-1">
                {button.description}
              </p>

              <div className="mt-4 text-center">
                <span className="
                  inline-block bg-white/25 px-4 py-2 rounded-full 
                  text-sm font-semibold backdrop-blur-sm 
                  transition-all group-hover:bg-white/35 group-hover:scale-105
                ">
                  Accéder
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Citation */}
      <div className="mt-15 text-center max-w-4xl mx-auto sm:block hidden">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            &quot;La vérité vous rendra libres&quot; — Jean 8:32
          </h2>
          <p className="text-slate-700 text-base">
            Ces ressources vous aideront à grandir dans la connaissance et l&apos;amour de Dieu.
          </p>
        </div>
      </div>

    </div>
  )
}
