const express = require("express");
const bodyParser = require("bodyParser");
const nodeMailer = require("nodemailer");
const app = express();
const port = 3000;

// Middleware pour analyser le corps des requêtes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuration de Nodemailer pour envoyer des e-mails
const transporter = nodeMailer.createTransport({
  service: "Gmail",
  auth: {
    user: "votre-email@gmail.com",
    pass: "votre-mot-de-passe",
  },
});

// Gestionnaire de route pour gérer les requêtes POST du formulaire
app.post("/envoyer-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: "votre-email@gmail.com",
    to: "destinataire@example.com",
    subject: subject,
    text: `De : ${name}\nE-mail : ${email}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erreur lors de l'envoi de l'e-mail");
    } else {
      console.log("E-mail envoyé : " + info.response);
      res.status(200).send("E-mail envoyé avec succès");
    }
  });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'écoute sur le port ${port}`);
});
