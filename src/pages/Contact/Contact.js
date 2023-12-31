import React from "react";
import styles from "./Contact.module.scss";
import vector from "../../assets/images/Vector.svg";
import ContactForm from "./ContactForm";
import { useState } from "react";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          {!isSubmitted ? (
            <>
              <h2 className={`${styles.formTitle} d-flex`}>
                Envoyez moi un message
              </h2>
              <p className={`${styles.info}`}>
                J'y répondrai dans les meilleurs délais
              </p>
            </>
          ) : 
          <>
          <h2 className={`${styles.formTitle} d-flex`}>
          Merci ! 
          </h2>
          <p className={`${styles.info2}`}>
          {/* Je vous remercie pour votre communication.
          <br />
          <br /> */}
          Je prends le temps de lire
            attentivement votre message, et je vous réponds dès que possible.
            <br />
            À bientôt !
          </p>
        </>}
          <ContactForm
            setIsSubmitted={setIsSubmitted}
            isSubmitted={isSubmitted}
            className={`${styles.formSection}`}
          />
          
        </div>
      </div>
      <div className={`${styles.blackSpace} d-flex flex-fill `}></div>
    </div>
  );
}

export default Contact;
