import React, { useState } from 'react';
import axios from 'axios';
import { MailIcon } from '@heroicons/react/solid'; // Import des icônes de Heroicons
import styles from './styles.modules.css'; // Importer le fichier de styles CSS modules

const Form = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    formation: '',
    date: '',
    message: '',
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
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg m-10">
      <h1 className="text-3xl font-bold text-center mb-8">Demande de rendez-vous pour une formation en ligne</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={styles.inputContainer}>
          <input
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
        <div className={styles.inputContainer}>
          <input
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
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="formation"
            name="formation"
            value={formData.formation}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <label htmlFor="formation" className={styles.inputLabel}>Formation</label>
          <div className={styles.inputHighlight}></div>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <label htmlFor="date" className={styles.inputLabel}>Date préférée</label>
          <div className={styles.inputHighlight}></div>
        </div>
        <div className={styles.inputContainer}>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className={styles.inputField}
          ></textarea>
          <label htmlFor="message" className={styles.inputLabel}>Message</label>
          <div className={styles.inputHighlight}></div>
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
          <div className="text-green-500 font-medium text-center">Email envoyé avec succès!</div>
        )}
      </form>
    </div>
  );
};

export default Form;
