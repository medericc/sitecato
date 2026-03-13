'use client'

import { useState } from "react";

type GameButton = {
  title: string;
  description: string;
  icon: string;
  color: string;
  hoverColor: string;
  url: string;
};

export default function ButtonGrid() {

  // const [showModal, setShowModal] = useState(false); // ❌ Modale désactivée

  const buttons = [
    {
      title: "L'Apostat",
      description: "Jeu d’enquête chrétien où vous démasquez l’imposteur",
      icon: "🕵️‍♀️",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      url: "https://www.appcatholique.com/l-apostat"
    },
    {
      title: "Juste Un",
      description: "Jeu d’équipe chrétien où un mot caché doit être retrouvé",
      icon: "💬",
      color: "from-purple-600 to-purple-700",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      url: "https://www.appcatholique.com/juste-un"
    },
    {
      title: "Trivia Biblique",
      description: "Quiz biblique complet pour tester et partager votre foi",
      icon: "📖",
      color: "from-amber-600 to-amber-700",
      hoverColor: "hover:from-amber-600 hover:to-amber-700",
      url: "https://www.appcatholique.com/trivia-biblique"
    }

    // , // { // title: "Jeux Play Store", // description: "Jeux de société et quiz sur le christianisme", // icon: "🎲", // color: "from-pink-600 to-pink-700", // hoverColor: "hover:from-pink-600 hover:to-pink-700", // url: "https://play.google.com/store/apps/developer?id=medericcc&hl=fr" // }
  ];

  const handleClick = (button: GameButton, index: number) => {
    // if (index === 0) {
    //   setShowModal(true);  // ❌ Modale désactivée
    // } else {
      window.open(button.url, "_blank");  // ✅ Tous les liens ouverts normalement
    // }
  };

  return (
    <>
      <div className="w-full mx-auto px-4 sm:px-3 lg:px-4 pb-8 mt-5">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mt-pt-5 md:pb-20">
           */}

          <div 
  className="
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3
    gap-5 sm:gap-6 lg:gap-8 
    mt-pt-8 md:pb-11
    w-full
    px-2 sm:px-4 lg:px-8
    mx-auto
  "
>

  {buttons.map((button, index) => (
    <div
      key={index}
      className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] w-full"
      onClick={() => handleClick(button, index)}
    >
      <div
        className={`
          bg-gradient-to-br ${button.color} ${button.hoverColor} 
          rounded-2xl p-6 sm:p-7 lg:p-8 
          text-white shadow-lg transition-all duration-300 group-hover:shadow-xl 
          h-full flex flex-col 
          min-h-[240px] sm:min-h-[260px] lg:min-h-[300px]   /* ➜ plus grand */
        `}
      >
        <div className="text-5xl sm:text-6xl lg:text-7xl mb-4 text-center">
          {button.icon}
        </div>

        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-center">
          {button.title}
        </h3>

        <p className="text-white/90 text-center flex-grow text-sm sm:text-base lg:text-lg leading-relaxed px-2">
          {button.description}
        </p>

        <div className="mt-5 text-center">
          <span className="inline-block bg-white/25 px-4 py-2 rounded-full text-sm sm:text-base font-semibold backdrop-blur-sm transition-all group-hover:bg-white/35 group-hover:scale-105">
            Accéder
          </span>
        </div>
      </div>
    </div>
  ))}
</div>


        <div className="mt-8 sm:mt-10 lg:mt-12 text-center w-full max-w-5xl mx-auto sm:block hidden">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-7 shadow-md">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-2 sm:mb-3">
              &quot;La vérité vous rendra libres&quot; - Jean 8:32
            </h2>
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg">
              Ces ressources vous aideront à grandir dans la connaissance et l&apos;amour de Dieu
            </p>
          </div>
        </div>
      </div>

      {/*  
      MODALE DÉSACTIVÉE
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center">
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              Patiente 🙏
            </h2>
            <p className="text-slate-600 mb-5">
              Ce jeu n’est pas encore disponible.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Ok
            </button>
          </div>
        </div>
      )}
      */}

    </>
  );
}
