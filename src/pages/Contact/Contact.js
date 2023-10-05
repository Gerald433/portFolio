import React from "react";
import styles from "./Contact.module.scss";
import vector from "../../assets/images/Vector.svg";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className={`${styles.major} d-flex flex-column`}>
      <div
        className={`${styles.global} container d-flex justify-content-center `}
      >
        <div className={`${styles.textZone}`}>
          <span className={`${styles.preTitle}`}>CONTACT</span>
          <h1 className={`${styles.title}`}>Parlons de vos projets</h1>
          <p className={`${styles.descriptif}`}>
            Transformons vos idées en réalité numérique. Collaborons pour créer
            quelque chose d'exeptionnel.
          </p>
        </div>

        <div className={`${styles.formGlobal} d-flex flex-column`}>
          <h2 className={`${styles.formTitle}  d-flex `}>
            Envoyez moi un message
          </h2>
          <p className={`${styles.info}`}>
            J'y repondrai dans les meilleurs delais
          </p>
          <ContactForm className={`${styles.formSection}`}/>
          {/* <form action="">
            <div className={`${styles.formSection}`}>
              <label htmlFor="nameInput">Nom et prenom</label>
              <br />
              <input type="text" />
            </div>

            <div className={`${styles.formSection}`}>
              <label htmlFor="mail">Votre E-mail</label>
              <br />
              <input type="text" />
            </div>

            <div className={`${styles.formSection}`}>
              <label htmlFor="subject">Sujet de votre message</label>
              <br />
              <input type="text" />
            </div>

            <div className={`${styles.formSection}`}>
              <label htmlFor="message">Votre message ici</label>
              <br />
              <input type="text" />
            </div>

            <button>
              Envoyer
              <img
                className={`${styles.vector}`}
                src={vector}
                alt="icone d'envoi de message"
              />
            </button>
          </form> */}
        </div>
      </div>
      <div className={`${styles.blackSpace} d-flex flex-fill `}></div>
    </div>
  );
}

export default Contact;
