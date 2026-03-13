import React from 'react';

export default function ReponsesPage() {
  return (
    <div className="reponses-document">
      {/* En-tête */}
      <header className="reponses-header">
        <div className="header-frame">
          <div className="logo-container">
            <img
              src="/imagelogo.png"
              alt="Logo BibleEnMain"
              className="main-logo"
            />
            <div className="logo-details">
              <h1 className="document-title">BibleEnMain</h1>
              <div className="title-line"></div>
              <p className="document-subtitle">Réponses à Vie et Lumière</p>
            </div>
          </div>
        </div>
        
        <div className="header-separator">
          <span className="separator-ornament">✠</span>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="reponses-content">
        <div className="columns-container">
          {/* Colonne gauche */}
          <div className="column-left">
            {/* I. Autorité et Succession Apostolique */}
            <section className="reponse-section">
              <h2 className="section-title">
                <span className="section-number">I.</span>
                Autorité et Succession Apostolique
              </h2>
              
              <div className="reponse-item">
                <div className="reponse-number">1</div>
                <div className="reponse-content">
                  <h3>L&apos;énumération des &ldquo;Martyre des Apôtres&ldquo;</h3>
                  <p>C&apos;est la tradition confirmée par les écrits des Pères qui atteste du sacrifice des Apôtres, pas la Bible.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">2</div>
                <div className="reponse-content">
                  <h3>La primauté de Rome est une invention tardive</h3>
                  <p>Ignace d&apos;Antioche précise explicitement que l&apos;Église de Rome &ldquo;préside&ldquo; dans la région des Romains. Clément de Rome, dès le Ier siècle, intervient avec autorité auprès des Corinthiens pour rétablir l&apos;ordre, prouvant une hiérarchie déjà établie.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">3</div>
                <div className="reponse-content">
                  <h3>L&apos;Église aurait changé au 2e/3e siècle en négligeant la Bible</h3>
                  <p>Sophisme chronologique. Le &ldquo;Nouveau Testament&ldquo; tel qu&apos;on le connaît n&apos;existait pas encore physiquement comme un livre unique. C&apos;est l&apos;Église Catholique (celle du 1e siècle comme précisé dans la partie &ldquo;ses erreurs&ldquo;), par sa Tradition, qui a discerné et canonisé les Écritures. On ne peut pas accuser l&apos;Église de négliger un livre qu&apos;elle est elle-même en train de compiler.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">4</div>
                <div className="reponse-content">
                  <h3>La succession apostolique est une invention</h3>
                  <p>Irénée de Lyon, Clément de Rome ou encore Ignace d&apos;Antioche sont unanimes : l&apos;autorité vient des Apôtres et se transmet par la succession des évêques. C&apos;est le rempart historique contre les déviances.</p>
                </div>
              </div>
            </section>

            {/* II. Les Sacrements (Baptême) */}
            <section className="reponse-section">
              <h2 className="section-title">
                <span className="section-number">II.</span>
                Les Sacrements (Baptême)
              </h2>
              
              <div className="reponse-item">
                <div className="reponse-number">5</div>
                <div className="reponse-content">
                  <h3>Le baptême des enfants est une hérésie</h3>
                  <p>L&apos;autorité de cette pratique vient directement de la succession apostolique et est pratiquée par les Églises apostoliques. Dans Actes 2:38-39, le grec utilise le mot &ldquo;teknon&ldquo; comme dans Apocalypse 12, cela désigne le petit enfant, le nouveau-né. Si le texte visait les générations futures, il aurait utilisé le mot genea.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">6</div>
                <div className="reponse-content">
                  <h3>Marc 16:16 prouve que le baptême doit suivre la foi (Causalité)</h3>
                  <p>Erreur d&apos;interprétation. Dans la structure du texte, il s&apos;agit d&apos;une conjonction et non d&apos;une causalité stricte excluant les enfants. Le salut est offert, et le baptême en est le sceau.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">7</div>
                <div className="reponse-content">
                  <h3>Baptême par aspersion vs immersion</h3>
                  <p>Le concept biblique de &ldquo;aspersion&ldquo; est présent (Ézéchiel 36 : &ldquo;Je répandrai (ranô/j&apos;aspergerai) sur vous une eau pure&ldquo;). L&apos;immersion est dans la Trinité. L&apos;histoire du geôlier dans les Actes montre aussi des baptêmes domestiques immédiats.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">8</div>
                <div className="reponse-content">
                  <h3>Le baptême de Jésus</h3>
                  <p>Jésus s&apos;est soumis au baptême de Jean, pas le sien.</p>
                </div>
              </div>
            </section>

            {/* III. Saints, Anges et Hérésies */}
            <section className="reponse-section">
              <h2 className="section-title">
                <span className="section-number">III.</span>
                Saints, Anges et Hérésies
              </h2>
              
              <div className="reponse-item">
                <div className="reponse-number">9</div>
                <div className="reponse-content">
                  <h3>Le culte des anges est interdit par Paul (Colossiens 2:18)</h3>
                  <p>Paul condamne un faux culte lié à des médiateurs spirituels détournant du Christ.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">10</div>
                <div className="reponse-content">
                  <h3>Le culte des saints et des reliques est païen</h3>
                  <p>Dans 2 Rois 13:21, le contact avec les ossements d&apos;Élisée ressuscite un mort. Il y a le martyr de Polycarpe avant l&apos;an 200.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">11</div>
                <div className="reponse-content">
                  <h3>Les Pères de l&apos;Église auraient enseigné la Gnose ou le Marcionisme</h3>
                  <p>Absolument faux. Les Pères (Irénée, Tertullien) ont été les plus grands combattants de la Gnose et de Marcion. Montanus n&apos;a jamais été reconnu comme un Père de l&apos;Église. Justin Martyr et Ignace étaient strictement trinitaires.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Colonne droite */}
          <div className="column-right">
            {/* Suite de la section III */}
            <div className="reponse-item">
              <div className="reponse-number">12</div>
              <div className="reponse-content">
                <h3>Pourquoi prier les morts ? C&apos;est une pratique tardive</h3>
                <p>La correspondance de Cyprien de Carthage (Celerinus) prouve que l&apos;on priait déjà pour les défunts et les martyrs bien avant le VIe siècle. C&apos;est une pratique de l&apos;Église primitive.</p>
              </div>
            </div>

            <div className="reponse-item">
              <div className="reponse-number">13</div>
              <div className="reponse-content">
                <h3>L&apos;intercession de Marie et des femmes n&apos;est pas biblique</h3>
                <p>Dans Jérémie 31, 15, Rachel intercède pour ses fils. Marie, en tant que &ldquo;Reine Mère&ldquo; (tradition biblique de la Gebirah), intercède naturellement pour ses enfants spirituels.</p>
              </div>
            </div>

            <div className="reponse-item">
              <div className="reponse-number">14</div>
              <div className="reponse-content">
                <h3>On donne trop d&apos;importance aux anges</h3>
                <p>Le livre de Tobie (implicitement repris dans l&apos;Apocalypse) montre le rôle crucial des anges comme intermédiaires et protecteurs. Ils portent les prières devant Dieu.</p>
              </div>
            </div>

            <div className="reponse-item">
              <div className="reponse-number">15</div>
              <div className="reponse-content">
                <h3>Paul et Barnabé ont refusé d&apos;être vénérés</h3>
                <p>Ils ont refusé car la foule les prenait pour des dieux païens (Zeus et Hermès). Cela n&apos;exclut pas la vénération due aux saints comme reflets de la gloire de Dieu.</p>
              </div>
            </div>

            <div className="reponse-item">
              <div className="reponse-number">16</div>
              <div className="reponse-content">
                <h3>Le signe de croix et l&apos;omniprésence de la croix sont excessifs</h3>
                <p>Galates 6,14 dit que la croix est notre seul motif de gloire. Justin Martyr (Apologie) explique que la forme de la croix est inscrite partout dans la nature et sur l&apos;être humain (le logos spermatikos).</p>
              </div>
            </div>

            <div className="reponse-item">
              <div className="reponse-number">17</div>
              <div className="reponse-content">
                <h3>Les livres &ldquo;deutérocanoniques&ldquo; (73 livres) sont des ajouts</h3>
                <p>Saint Jérôme a suivi les conciles de la fin du IVe siècle qui valident les 73 livres. Des livres comme Tobie ont été retrouvés à Qumrân, et 1 Maccabées était originellement en hébreu. L&apos;Épître aux Hébreux fait d&apos;ailleurs explicitement référence aux martyrs des Macchabées. De plus, après la parabole des vignerons, les Pharisiens n&apos;avaient plus l&apos;autorité pour fixer le canon.</p>
              </div>
            </div>

            <div className="reponse-item">
              <div className="reponse-number">18</div>
              <div className="reponse-content">
                <h3>Le pèlerinage est une invention humaine</h3>
                <p>Le Nouveau Testament mentionne des personnes venant de loin à Jérusalem pour adorer, une démarche de foi physique et spirituelle.</p>
              </div>
            </div>

            {/* IV. Histoire et Politique */}
            <section className="reponse-section">
              <h2 className="section-title">
                <span className="section-number">IV.</span>
                Histoire et Politique
              </h2>
              
              <div className="reponse-item">
                <div className="reponse-number">19</div>
                <div className="reponse-content">
                  <h3>La Didaché est une œuvre hérétique</h3>
                  <p>Personne dans l&apos;Église primitive n&apos;a dit cela. Origène et d&apos;autres la considéraient comme un manuel d&apos;instruction sérieux et orthodoxe sur la voie de la vie.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">20</div>
                <div className="reponse-content">
                  <h3>Constantin a corrompu l&apos;Église et le Concile de Nicée</h3>
                  <p>Constantin a été baptisé sur son lit de mort par Eusèbe de Nicomédie (et non de Césarée), un aryen. S&apos;il a convoqué le Concile pour la paix de l&apos;Empire, il n&apos;est pas intervenu dans les définitions dogmatiques.</p>
                </div>
              </div>
            </section>

            {/* V. Doctrine, Sacrements et Liturgie */}
            <section className="reponse-section">
              <h2 className="section-title">
                <span className="section-number">V.</span>
                Doctrine, Sacrements et Liturgie
              </h2>
              
              <div className="reponse-item">
                <div className="reponse-number">21</div>
                <div className="reponse-content">
                  <h3>Le Purgatoire est une invention sans fondement biblique</h3>
                  <p>Le concept est présent dans l&apos;Écriture. 1 Corinthiens 3, 13–15 parle d&apos;une œuvre testée par le feu où l&apos;homme est sauvé &ldquo;comme à travers le feu&ldquo;. Matthieu 12, 32 suggère un pardon possible dans &ldquo;le monde à venir&ldquo;. Enfin, Apocalypse 21, 27 affirme que &ldquo;rien de souillé&ldquo; n&apos;entrera au ciel, impliquant un état de purification nécessaire.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">22</div>
                <div className="reponse-content">
                  <h3>La Messe et la Présence Réelle sont des inventions tardives</h3>
                  <p>Saint Ignace d&apos;Antioche (Smyrniotes 7) en témoigne au 2e siècle. Justin Martyr ne voit pas la Cène comme un simple symbole, mais comme une réalité sacramentelle (Apologie).</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">23</div>
                <div className="reponse-content">
                  <h3>L&apos;Église &ldquo;invente&ldquo; des dogmes tardivement (ex: Divinité de Jésus en 325)</h3>
                  <p>Un dogme n&apos;est pas une &ldquo;invention&ldquo; mais une &ldquo;proclamation&ldquo; d&apos;une vérité déjà crue. Si l&apos;Église a proclamé que Jésus est Dieu à Nicée en 325, c&apos;est pour répondre à l&apos;hérésie arienne.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">24</div>
                <div className="reponse-content">
                  <h3>Les images dans les églises sont de l&apos;idolâtrie</h3>
                  <p>La Bible ne bannit pas l&apos;image mais l&apos;idole. Il y avait des images dans le Temple de Salomon et des chérubins sur l&apos;Arche. Josué (7,6) se prosterne devant l&apos;Arche sans que ce soit de l&apos;idolâtrie car elle renvoie à Dieu. Flavius Josèphe confirme cette présence visuelle dans le Temple.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">25</div>
                <div className="reponse-content">
                  <h3>L&apos;épiscopat (les évêques) est apparu bien après les Apôtres</h3>
                  <p>Le terme Episkopé est utilisé dès Actes 1, 20. L&apos;épiscopat monarchique est clairement établi bien avant 130, comme le montrent les lettres d&apos;Ignace d&apos;Antioche.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">26</div>
                <div className="reponse-content">
                  <h3>Rome domine seulement parce qu&apos;elle était la capitale de l&apos;Empire</h3>
                  <p>Saint Irénée de Lyon explique que la primauté de Rome vient de sa fondation par Pierre et Paul (succession apostolique). Bien avant le concile de Chalcédoine, Rome était la référence. Anatole de Constantinople a même dû reconnaître l&apos;erreur d&apos;une tentative d&apos;égalité fondée sur des raisons politiques.</p>
                </div>
              </div>

              <div className="reponse-item">
                <div className="reponse-number">27</div>
                <div className="reponse-content">
                  <h3>&ldquo;Sur cette pierre&ldquo; (Matthieu 16) ne désignerait pas Pierre</h3>
                  <p>L&apos;argument linguistique selon lequel Petros et Petra sont différents ne tient pas. En grec de l&apos;époque, Petros est simplement le masculin de Petra pour l&apos;adapter à un nom d&apos;homme. En Araméen (langue de Jésus), le mot est le même : Kephas.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Note conclusive */}
        <div className="conclusion-box">
          <div className="conclusion-icon">☧</div>
          <p className="conclusion-text">
            <strong>Principes herméneutiques :</strong> La Sainte Écriture ne peut être correctement interprétée hors de la Tradition vivante de l&apos;Église qui l&apos;a engendrée, et sous la guidance du Magistère à qui le Christ a confié l&apos;authentique interprétation de la Parole de Dieu.
          </p>
          <div className="conclusion-icon">☧</div>
        </div>
      </main>

      {/* Pied de page */}
      <footer className="reponses-footer">
        <div className="footer-divider"></div>
        <div className="footer-wrapper">
          <div className="footer-column">
            <p className="footer-verse">« Tenez ferme à la tradition que vous avez reçue »<br /><em>2 Thessaloniciens 2:15</em></p>
          </div>
          <div className="footer-column center">
            <div className="seal">BibleEnMain</div>
            <p className="footer-note">Réponses apologétiques complètes</p>
          </div>
          <div className="footer-column">
            <p className="footer-sources">
              Sources : Écriture Sainte<br />
              Tradition apostolique<br />
              Conciles œcuméniques
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}