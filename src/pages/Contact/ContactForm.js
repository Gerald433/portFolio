import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Contact.module.scss";
import vector from "../../assets/images/Vector.svg";

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Votre prénom ne peut pas dépasser 15 caractères")
    .required("Votre prénom est requis"),
  email: Yup.string()
    .email("Adresse e-mail invalide")
    .required("Votre e-mail est requis"),
  subject: Yup.string().required("Le sujet est requis"),
  message: Yup.string().required("Votre message est requis"),
});
function ContactForm() {
    // Utilisation de useFormik pour gérer le formulaire
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        // Vous pouvez ajouter ici la logique d'envoi du formulaire avec les valeurs de "values"
        console.log(values);
      },
    });


  return (
   
      <form onSubmit={formik.handleSubmit}>
        <div className={`${styles.formSection}`}>
          <label htmlFor="nameInput">Nom et prénom</label>
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
          <img className={`${styles.vector}`} src={vector} alt="icone d'envoi de message" />
        </button>
      </form>
    );
  }
  
  export default ContactForm;
