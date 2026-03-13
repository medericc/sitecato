export const metadata = {
  title: "Mentions Légales — Catholicisme vs Hérésie",
  description:
    "Informations légales concernant le site Catholicisme vs Hérésie : éditeur, hébergeur, responsabilités et portée des contenus.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-10 prose prose-slate">
      <h1 className="text-3xl font-bold mb-4">Mentions Légales</h1>

      <h2>1. Éditeur du site</h2>
      <p>
        Le site <strong>Catholicisme vs Hérésie</strong> est édité par un
        particulier à but non commercial.  
        Contact : <strong>bleufarfe@gmail.com</strong>
      </p>

      <h2>2. Nature et portée des contenus</h2>
      <p>
        Les contenus présentés sur ce site reflètent uniquement{" "}
        <strong>l’analyse personnelle</strong> de l’éditeur concernant la foi
        catholique, la théologie, l’histoire de l’Église ou les doctrines
        chrétiennes.
      </p>
      <p>
        Ce site <strong>n’a aucune valeur officielle</strong>, ne représente pas
        l’Église catholique, une paroisse, un ordre religieux, une communauté
        ecclésiale ou toute autre institution.
      </p>
      <p>
        Malgré la volonté de respecter la doctrine catholique,{" "}
        <strong>des erreurs d’interprétation ou de formulation peuvent se
        produire</strong>. Le visiteur est invité à vérifier les points
        sensibles auprès du Magistère ou de sources ecclésiales reconnues.
      </p>

      <h2>3. Hébergement</h2>
      <p>
        Le site est hébergé par :  
        <strong>Vercel Inc.</strong>  
        440 N Barranca Ave #4133  
        Covina, CA 91723, USA
      </p>

    
  

      <h2>4. Contact</h2>
      <p>
        Pour toute question :  
        <strong>bleufarfe@gmail.com</strong>
      </p>
    </div>
  );
}
