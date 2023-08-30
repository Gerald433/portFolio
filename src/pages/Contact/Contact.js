import React from "react";
import styles from "./Contact.module.scss";
import vector from "../../assets/images/Vector.svg"


// function checkNameFirstName(){
//   let errorMessageFirstName = document.getElementById("firstNameErrorMsg")
//   let regexFirstName = /^[a-zàâäéèêëïîôöùûüÿç-]{1,15}$/i
//   let resultControlFirstName = regexFirstName.test(nameFirstName.value)
//   firstNameHasError = resultControlFirstName
//   if (nameFirstName.value.length > 15) {
//     errorMessageFirstName.textContent = "Votre prénom contient trop de caractères"

//   } else if (nameFirstName.value.length < 1) {
//     errorMessageFirstName.textContent = "Votre prénom n'est pas renseigné"

//   } else if (resultControlFirstName === false) {
//     errorMessageFirstName.textContent = "Ce champ n'accepte que les caractères alphabétiques dans la limite de 1 à 15"

//   } else {
//     errorMessageFirstName.textContent = ""

//   }
// }








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
          <p className={`${styles.info}`}>J'y répondrai dans les meilleurs délais</p>
          <form action="">
            <div className={`${styles.formSection}`}>
              <label htmlFor="nameInput">Nom et prénom</label>
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

            <button>Envoyer
              <img className={`${styles.vector}`} src={vector} alt="icone d'envoi de message" />
            </button>
          </form>
        </div>
      </div>
      <div className={`${styles.blackSpace} d-flex flex-fill `}></div>
    </div>
  );
}

export default Contact;
