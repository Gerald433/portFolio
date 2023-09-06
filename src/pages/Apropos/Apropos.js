import styles from "./Apropos.module.scss";
import avatar from "../../assets/images/Avatar.svg";
import Item from "../../components/Item";
import mongo from "../../assets/images/languages/mongo.svg";
import node from "../../assets/images/languages/node.svg";
import react from "../../assets/images/languages/React.svg";
import html from "../../assets/images/languages/html.svg";
import sass from "../../assets/images/languages/Sass.svg";
import css from "../../assets/images/languages/css.svg";
import javascript from "../../assets/images/languages/JavaScript.svg";
import typescript from "../../assets/images/languages/TypeScript.svg";
import git from "../../assets/images/outils/git.svg";
import github from "../../assets/images/outils/github.svg";
import vscode from "../../assets/images/outils/vscode.svg";
import postman from "../../assets/images/outils/postman.svg";
import eglise from "../../assets/images/local/eglise.svg";
import blueLac from "../../assets/images/local/blueLac.svg";
import horizon from "../../assets/images/local/horizon.svg";

function Apropos() {
  return (
    <>
      <div className={` container d-flex flex-column br`}>
        <div className={`${styles.top}  d-flex flex-column br`}>
          <h1 className={`${styles.titlePrincipal} `}>I'm gerald g.</h1>
          <div className={`${styles.blocPrincipal}  d-flex  br`}>
            <img
              className={`${styles.avatar} `}
              src={avatar}
              alt="Ma présentation"
            />
            <div className={`${styles.blocText}  d-flex flex-column br`}>
              <span className={`${styles.job} br`}>
                Développeur Web Front-end,
              </span>
              <span className={`${styles.specialisation} br`}>
                JavaScript - React.
              </span>
              <p className={`${styles.indications} br`}>
                Je crée des solutions web fonctionnelles et engageantes, donnant
                vie aux idées numériques.
                <br />
                <br /> Mon objectif est de répondre aux besoins tout en
                garantissant une expérience utilisateur fluide et captivante.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.itemList} d-flex  flex-column br`}>
          <div className={`${styles.one} d-flex  br`}>
            <Item
              className={`${styles.itemChildren}  ${styles.small} d-flex br`}
            >
              <span className={`${styles.left}`}>Projets réalisés</span>
              <span className={`${styles.right}`}>25</span>
            </Item>

            <Item className={`${styles.itemChildren} ${styles.big} d-flex br`}>
              <span className={`${styles.left} br`}>
                Technologie la plus utilisée
              </span>
              <span className={`${styles.right} br`}>React</span>
            </Item>
          </div>

          <div className={`${styles.two} d-flex  br`}>
            <Item className={`${styles.itemChildren}  ${styles.big} d-flex br`}>
              <span className={`${styles.left} br`}>
                Technologie récemment utilisée
              </span>
              <span className={`${styles.right} br`}>TypeScript</span>
            </Item>
          </div>
        </div>

        <div className={`${styles.middle}  d-flex flex-column br`}>
          <h2 className={`${styles.middleTitle} br`}>Compétences</h2>
          <p className={`${styles.middleIndications} br`}>
            Mes compétences techniques et mon intérêt pour le développement
            créent des solutions web sur mesure, répondant à vos besoins et
            favorisant votre croissance.
          </p>
        </div>

        <div className={`${styles.competenceList}  d-flex flex-column br`}>
          <div className={`${styles.languagesOutils}  d-flex  br`}>
            <div>
              <span className={`${styles.titleCompetence} br`}>Languages</span>
              <p className={`${styles.textCompetence} br`}>
                Une introduction aux langages de développement que j'utilise
                pour créer des solutions numériques de qualité.
              </p>
              <div className={`${styles.logosCompetence} d-flex br`}>
                <img
                  className={`${styles.unitLogosCompetence} br`}
                  src={mongo}
                  alt="logo mongo"
                />
                <img
                  className={`${styles.unitLogosCompetence} br`}
                  src={node}
                  alt="logo node"
                />
                <img
                  className={`${styles.unitLogosCompetence} br`}
                  src={react}
                  alt="logo react"
                />
                <img
                  className={`${styles.unitLogosCompetence} br`}
                  src={html}
                  alt="logo html"
                />
                <img
                  className={`${styles.unitLogosCompetence} br`}
                  src={sass}
                  alt="logo sass"
                />
                <img
                  className={`${styles.unitLogosCompetence} br`}
                  src={css}
                  alt="logo css"
                />
                <img
                  className={`${styles.unitLogosCompetence} br`}
                  src={javascript}
                  alt="logo javascript"
                />
                <img
                  className={`${styles.unitLogosCompetence} br`}
                  src={typescript}
                  alt="logo typescript"
                />
              </div>
            </div>
            <div>
              <span className={`${styles.titleCompetence} br`}>Outils</span>
              <p className={`${styles.textOutil} br`}>
                Les outils clés de mon processus créatif.
              </p>
              <div className={`${styles.logosOutils} d-flex flex-column br`}>
                <img
                  className={`${styles.unitLogosOutil} br`}
                  src={git}
                  alt="logo git"
                />

                <img
                  className={`${styles.unitLogosOutil} br`}
                  src={github}
                  alt="logo github"
                />

                <img
                  className={`${styles.unitLogosOutil} br`}
                  src={vscode}
                  alt="logo visual studio code"
                />

                <img
                  className={`${styles.unitLogosOutil} br`}
                  src={postman}
                  alt="logo postman"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.finalZoneCompetence} d-flex br`}>
            <p className={`${styles.finalCompetence} d-flex br`}>
              Afin de satisfaire vos attentes, je suis enclin à apprendre de
              nouvelles technologies, enrichissant ma curiosité et mon désir
              d'apprentissage.
            </p>
            <button className={`${styles.browseProjet} d-flex br`}>
              Parcourir mes projets
            </button>
          </div>
        </div>

        <p className={`${styles.transitionText} d-flex br`}>
          Les compétences et les connaissances techniques sont essentielles,
          mais ce sont les "soft skills" qui apportent une dimension humaine et
          une capacité d'adaptation à toute situation. En tant que développeur,
          ma rigueur et mon esprit critique garantissent la qualité et la
          fiabilité de mes solutions. Mon esprit d'équipe favorise la
          collaboration, et mon autonomie me permet de gérer efficacement mes
          tâches. En restant curieux, j'évolue dans un environnement en
          constante évolution.
        </p>

        <div className={`${styles.brik}  d-flex br`}>
          <div className={`${styles.styleBrik}`}>
            <span className={`${styles.number}`}>01.</span>
            <h3 className={`${styles.titleBrik}`}>Créer</h3>
            <p className={`${styles.textBrik}`}>
              Créer, imaginer et façonner des expériences web captivantes et
              fonctionnelles en réponse à vos besoins est un défi permanent.
              C'est cette combinaison d'ingéniosité technique et d'engagement
              personnel qui rend chaque projet captivant et épanouissant.
            </p>
          </div>
          <div className={`${styles.styleBrik}`}>
            <span className={`${styles.number}`}>02.</span>
            <h3 className={`${styles.titleBrik}`}>Collaborer</h3>
            <p className={`${styles.textBrik}`}>
              Bénéficiant d'une solide expertise technique, je suis également
              doté d'excellentes compétences en communication, en résolution de
              problèmes et en travail d'équipe, ce qui me permet de contribuer
              de manière efficace et collaborative aux projets tout en
              favorisant un environnement propice à l'innovation et à la
              réussite collective.
            </p>
          </div>
          <div className={`${styles.styleBrik} ${styles.grow}`}>
            <span className={`${styles.number}`}>03.</span>
            <h3 className={`${styles.titleBrik}`}>Satisfaire</h3>
            <p className={`${styles.textBrik}`}>
              Répondre à vos attentes est au sommet de mes priorités. Mon but
              essentiel est de concevoir des solutions qui comblent vos besoins,
              mais qui également établissent une relation de confiance pérenne
              par le biais de résultats tangibles.
            </p>
          </div>
        </div>

        <p className={`${styles.conclusion} d-flex`}>
          Quand je ne suis pas plongé dans le développement, vous me trouverez
          souvent en train d'explorer les sentiers de randonnée locaux. Cet
          intérêt pour la découverte se reflète dans mon travail, où je
          recherche constamment de nouvelles voies pour créer des solutions
          uniques et adaptées.
        </p>

        <div className={`${styles.localisation} d-flex`}>
          <img src={eglise} alt="eglise de Sainte Sigolène" />
          <div className={`${styles.decor}  d-flex flex-column`}>
            <img src={blueLac} alt="le lac bleu" />
            <img src={horizon} alt="horizon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Apropos;
