import styles from "./Apropos.module.scss";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/Avatar.svg";
import Item from "../../components/Item";
import mongo from "../../assets/images/languages/mongo.svg";
import node from "../../assets/images/languages/node.svg";
import react from "../../assets/images/languages/react.svg";
import html from "../../assets/images/languages/html.svg";
import sass from "../../assets/images/languages/sass.svg";
import css from "../../assets/images/languages/css.svg";
import javascript from "../../assets/images/languages/javaScript.svg";
import typescript from "../../assets/images/languages/typeScript.svg";
import git from "../../assets/images/outils/git.svg";
import github from "../../assets/images/outils/github.svg";
import vscode from "../../assets/images/outils/vscode.svg";
import postman from "../../assets/images/outils/postman.svg";
import eglise from "../../assets/images/local/eglise.jpg";
import blueLac from "../../assets/images/local/blueLac.jpg";
import horizon from "../../assets/images/local/horizon.jpg";
import logoReact from "../../assets/images/languages/logoREACT_.svg";
import typeScriptLogo from "../../assets/images/languages/logoTypeScript.svg";

function Apropos() {
  return (
    <>
      <div className={` container d-flex flex-column `}>
        <div className={`${styles.top}  d-flex flex-column `}>
          <h1 className={`${styles.titlePrincipal} `}>I'm gerald g.</h1>
          <div className={`${styles.blocPrincipal}  d-flex  `}>
            <img
              className={`${styles.avatar} `}
              src={avatar}
              alt="Ma présentation"
            />
            <div className={`${styles.blocText}  d-flex flex-column `}>
              <span className={`${styles.job} `}>
                Developpeur Web Front-end,
              </span>
              <span className={`${styles.specialisation} `}>
                JavaScript - React.
              </span>
              <p className={`${styles.indications} `}>
                Je crée des solutions web fonctionnelles et engageantes, donnant
                vie aux idées numériques.
                <br />
                <br /> Mon objectif est de répondre aux besoins tout en
                garantissant une expérience utilisateur fluide et captivante.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.itemList} d-flex  flex-column `}>
          <div className={`${styles.one} d-flex `}>
            <Item className={`${styles.itemChildren}  ${styles.small} d-flex `}>
              <span className={`${styles.left}`}>Projets réalisés</span>
              <span className={`${styles.rightbloc}`}>25</span>
            </Item>

            <Item className={`${styles.itemChildren} ${styles.big} d-flex `}>
              <span className={`${styles.left} `}>Technologie dominante</span>
              <span className={`${styles.right} `}>React</span>
              <img
                className={`${styles.gost} `}
                src={logoReact}
                alt="logo react"
              />
            </Item>
          </div>

          <div className={`${styles.two} d-flex`}>
            <Item className={`${styles.itemChildren}  ${styles.big} d-flex `}>
              <span className={`${styles.left} `}>Technologie récente</span>
              <span className={`${styles.right} `}>TypeScript</span>
              <img
                className={`${styles.gost} `}
                src={typeScriptLogo}
                alt="logo typeScript"
              />
            </Item>
          </div>
        </div>

        <div className={`${styles.middle}  d-flex flex-column`}>
          <h2 className={`${styles.middleTitle}`}>Hard Skills</h2>
          <p className={`${styles.middleIndications} `}>
            Mes compétences techniques et mon intérêt pour le développement
            créent des solutions web sur mesure, répondant à vos besoins et
            favorisant votre croissance.
          </p>
        </div>

        <div className={`${styles.competenceList}  d-flex flex-column`}>
          <div className={`${styles.languagesOutils}  d-flex`}>
            <div>
              <span className={`${styles.titleCompetence} `}>Languages</span>
              <p className={`${styles.textCompetence} `}>
                Une introduction aux langages de développement que j'utilise
                pour créer des solutions numériques de qualité.
              </p>
              <div className={`${styles.firstPart} d-flex `}>
                <div className={`${styles.firstColumn} flex-column`}>
                  <img
                    className={`${styles.unitLogosCompetence}`}
                    src={mongo}
                    alt="logo mongo"
                  />
                  <img
                    className={`${styles.unitLogosCompetence}`}
                    src={react}
                    alt="logo react"
                  />
                  <img
                    className={`${styles.unitLogosCompetence}`}
                    src={sass}
                    alt="logo sass"
                  />
                  <img
                    className={`${styles.unitLogosCompetence}`}
                    src={javascript}
                    alt="logo javascript"
                  />
                </div>

                <div className={`${styles.firstColumn} flex-column `}>
                  <img
                    className={`${styles.unitLogosCompetence}`}
                    src={node}
                    alt="logo node"
                  />
                  <img
                    className={`${styles.unitLogosCompetence}`}
                    src={html}
                    alt="logo html"
                  />

                  <img
                    className={`${styles.unitLogosCompetence}`}
                    src={css}
                    alt="logo css"
                  />

                  <img
                    className={`${styles.unitLogosCompetence}`}
                    src={typescript}
                    alt="logo typescript"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.unitLogosOutils}`}>
              <span className={`${styles.titleCompetence} `}>Outils</span>
              <p className={`${styles.textOutil} `}>
                Les outils clés de mon processus créatif.
              </p>
              <div className={`${styles.logosOutils} d-flex flex-column `}>
                <img
                  className={`${styles.unitLogosOutil} `}
                  src={git}
                  alt="logo git"
                />

                <img
                  className={`${styles.unitLogosOutil} `}
                  src={github}
                  alt="logo github"
                />

                <img
                  className={`${styles.unitLogosOutil} `}
                  src={vscode}
                  alt="logo visual studio code"
                />

                <img
                  className={`${styles.unitLogosOutil} `}
                  src={postman}
                  alt="logo postman"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.finalZoneCompetence} d-flex `}>
            <p className={`${styles.finalCompetence} d-flex `}>
              Afin de satisfaire vos attentes, je suis enclin à apprendre de
              nouvelles technologies, enrichissant ma curiosité et mon désir
              d'apprentissage.
            </p>
            <Link className={`${styles.browseProjet} d-flex `} to="/">
              <button >
                Parcourir mes projets
              </button>
            </Link>
           
          </div>
        </div>

        <p className={`${styles.transitionText} d-flex `}>
          Les compétences et les connaissances techniques sont essentielles,
          mais ce sont les "soft skills" qui apportent une dimension humaine et
          une capacité d'adaptation à toute situation.
          <br />
          <br />
          En tant que développeur, ma rigueur et mon esprit critique
          garantissent la qualité et la fiabilité de mes solutions. Mon esprit
          d'équipe favorise la collaboration, et mon autonomie me permet de
          gérer efficacement mes tâches. En restant curieux, j'évolue dans un
          environnement en constante évolution.
        </p>

        <div className={`${styles.brik}  d-flex`}>
          <div className={`${styles.styleBrik} ${styles.middleGrow}`}>
            <span className={`${styles.number}`}>01.</span>
            <h3 className={`${styles.titleBrik}`}>Creer</h3>
            <p className={`${styles.textBrik}`}>
              Créer, imaginer et façonner des expériences web captivantes et
              fonctionnelles en réponse à vos besoins est un défi permanent.
              C'est cette combinaison d'ingéniosité technique et d'engagement
              personnel qui rend chaque projet captivant et épanouissant.
            </p>
          </div>
          <div className={`${styles.styleBrik} ${styles.middleGrow}`}>
            <span className={`${styles.number}`}>02.</span>
            <h3 className={`${styles.titleBrik}`}>Collaborer</h3>
            <p className={`${styles.textBrik}`}>
              Avec une solide expertise technique, je possède d'excellentes
              compétences en communication, en résolution de problèmes, et en
              travail d'équipe. Je suis ainsi en mesure de contribuer
              efficacement à des projets tout en encourageant l'innovation et la
              réussite collective.
            </p>
          </div>
          <div className={` ${styles.grow}`}>
            <div className={`${styles.third}`}>
              <span className={`${styles.number}`}>03.</span>
              <h3 className={`${styles.titleBrik}`}>Satisfaire</h3>
            </div>

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
          <div className={`${styles.eglise}  d-flex flex-column`}>
            <img src={eglise} alt="eglise de Sainte Sigolène" />
          </div>

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
