const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'wiki.meosis.fr',
  port: 465,
  secure: true,
  auth: {
    user: 'contact@wiki.meosis.fr',
    pass: 'XH6aH5_2Q',
  },
});

// Désactiver la vérification SSL (pour le développement uniquement)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';

// Route GET pour /test
app.get('/test', (req, res) => {
    res.send('la phrase de test');
  });

app.post('/send-email', (req, res) => {
  const { nom, prenom, email, telephone, formation, date, message } = req.body;

  const mailOptions = {
    from: 'contact@wiki.meosis.fr',
    to: 'vgassmann@meosis.fr',
    subject: 'Demande de rendez-vous pour une formation en ligne',
    text: `
      Nom: ${nom}
      Prénom: ${prenom}
      Email: ${email}
      Téléphone: ${telephone}
      Formation: ${formation}
      Date: ${date}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email envoyé avec succès');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
