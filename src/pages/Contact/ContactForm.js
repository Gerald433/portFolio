import React, { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.scss";
import vector from "../../assets/images/Vector.svg";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string()
    .max(25, "Votre saisie ne peut pas dépasser 25 caractères")
    .required("Vos nom et prenom sont requis"),
  email: Yup.string()
    .email("Adresse e-mail invalide")
    .required("Votre e-mail est requis"),
  subject: Yup.string().required("Le sujet est requis"),
  message: Yup.string().required("Votre message est requis"),
});

function ContactForm({ setIsSubmitted, isSubmitted }) {
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // Utilisation de useFormik pour gérer le formulaire
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        // Vous pouvez effectuer ici une requête AJAX pour envoyer le formulaire.
        // Par exemple, utiliser fetch() pour envoyer les données au serveur.
        // Remplacez cette partie par la logique d'envoi réelle de votre formulaire.

        // Attendre la réponse (simulée) du serveur.
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // La soumission a réussi, afficher le message de confirmation.
        setIsSubmitted(true);



        console.log("Données du formulaire à envoyer : ", values);
      } catch (error) {
        // Gérer les erreurs d'envoi du formulaire ici.
        console.error("Erreur lors de l'envoi du formulaire :", error);
      }

      //////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////

      // onSubmit: (values) => {

      //    onSubmit();

      // const data = new FormData();
      // data.append("email", values.email);
      // data.append("message", values.message);
      // data.append("name", values.name);
      // data.append("subject", values.subject);
      // fetch("https://formspree.io/f/xleyovdq", {
      //   method: "post",
      //   body: data,
      //   headers: {
      //     Accept: "application/json",
      //   },
      // })
      //   .then(() => {
      //     // Mettre à jour l'état pour indiquer que le formulaire a été soumis avec succès.
      //     setIsSubmitted(true);
      //   })
      //   .catch((error) => {
      //     // Gérer les erreurs d'envoi du formulaire ici
      //     console.error("Erreur lors de l'envoi du formulaire :", error);
      //   });
    },
  });
  useEffect(() => {
    // Ajustez la hauteur du textarea en fonction de son contenu lors du chargement initial de la page
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });

    // Ajustez la hauteur du textarea à chaque modification du contenu
    const adjustTextareaHeight = (event) => {
      const textarea = event.target;
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    };

    textareas.forEach((textarea) => {
      textarea.addEventListener("input", adjustTextareaHeight);
    });

    // Nettoyez les écouteurs d'événements lors du démontage du composant
    return () => {
      textareas.forEach((textarea) => {
        textarea.removeEventListener("input", adjustTextareaHeight);
      });
    };
  }, []);

  return (
    
    <div>
      
      {isSubmitted ? (
        // <div className={`${styles.successMessage}`}>
        //   <span className={`${styles.validationText}`}>
        //     Message bien reçu ! Je vous remercie pour votre communication.
        //   </span>

        //   <p className={`${styles.thanksText}`}>
        //     Merci pour votre message ! Je prends le temps de le lire
        //     attentivement et je vous réponds dès que possible. À bientôt !
        //   </p>

          <Link to="/">
            <button>Retour</button>
          </Link>
      
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className={`${styles.formSection}`}>
            <label htmlFor="nameInput">Nom et prenom</label>
            <br />
            <input
              type="text"
              id="nameInput"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={`${styles.error}`}>{formik.errors.name}</div>
            ) : null}
          </div>

          <div className={`${styles.formSection}`}>
            <label htmlFor="mail">Votre E-mail</label>
            <br />
            <input
              type="text"
              id="mail"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={`${styles.error}`}>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className={`${styles.formSection}`}>
            <label htmlFor="subject">Sujet de votre message</label>
            <br />
            <input
              type="text"
              id="subject"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className={`${styles.error}`}>{formik.errors.subject}</div>
            ) : null}
          </div>

          <div className={`${styles.formSection}`}>
            <label htmlFor="message">Votre message ici</label>
            <br />

            <textarea
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className={`${styles.error}`}>{formik.errors.message}</div>
            ) : null}
          </div>

          <button type="submit">
            Envoyer
            <img
              className={`${styles.vector}`}
              src={vector}
              alt="icone d'envoi de message"
            />
          </button>
        </form>
      )}
    </div>
    
  );
}

export default ContactForm;
