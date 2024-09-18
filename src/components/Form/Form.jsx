import React, { useState } from 'react';
import axios from 'axios';
import { MailIcon } from '@heroicons/react/solid';
import styles from './styles.modules.css';

const Form = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    date: '',
    societe: '', // Nouveau champ pour Société
    contrat: '', // Nouveau champ pour Numéro de contrat
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const url = 'https://wiki.meosis.fr/send-email';
      const response = await axios.post(url, formData);
      console.log('Response:', response);
      setSubmitSuccess(true);
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        date: '',
        societe: '', // Réinitialisation des champs après envoi réussi
        contrat: '',
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg m-10 bg-greencustom">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Demande de rendez-vous pour une formation en ligne</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`formGrid ${styles.formGrid}`}>
          {/* Champs pour Nom, Prénom, Email, Téléphone */}
          <div className={styles.inputContainer}>
            <input
              placeholder='Nom'
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <label htmlFor="nom" className={styles.inputLabel}>Nom</label>
            <div className={styles.inputHighlight}></div>
          </div>
          <div className={styles.inputContainer}>
            <input
              placeholder='Prénom'
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <label htmlFor="prenom" className={styles.inputLabel}>Prénom</label>
            <div className={styles.inputHighlight}></div>
          </div>
          <div className={styles.inputContainer}>
            <input
              placeholder='Email'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <label htmlFor="email" className={styles.inputLabel}>Email</label>
            <div className={styles.inputHighlight}></div>
          </div>
          {/* <div className={styles.inputContainer}>
            <input
              placeholder='Téléphone'
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <label htmlFor="telephone" className={styles.inputLabel}>Téléphone</label>
            <div className={styles.inputHighlight}></div>
          </div> */}
          {/* Champ Société */}
          <div className={styles.inputContainer}>
            <input
              placeholder='Société'
              type="text"
              id="societe"
              name="societe"
              value={formData.societe}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <label htmlFor="societe" className={styles.inputLabel}>Société</label>
            <div className={styles.inputHighlight}></div>
          </div>
          {/* Champ Numéro de contrat */}
          <div className={styles.inputContainer}>
            <input
              placeholder='Numéro de contrat'
              type="text"
              id="contrat"
              name="contrat"
              value={formData.contrat}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <label htmlFor="contrat" className={styles.inputLabel}>Numéro de contrat</label>
            <div className={styles.inputHighlight}></div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles.btn} ${isSubmitting ? styles.btnDisabled : ''}`}
          >
            <span className="flex items-center">
              <MailIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </span>
          </button>
        </div>
        {submitSuccess && (
          <div className="text-white font-medium text-center">Email envoyé avec succès!</div>
        )}
      </form>
    </div>
  );
};

export default Form;
