import React from 'react';
import Layout from '@theme/Layout';
import Form from '../components/Form/Form'; // Assurez-vous que le chemin est correct

const FormPage = () => {
  return (
    <Layout
      title="Contact"
      description="Nous contacter"
    >
      <Form />
    </Layout>
  );
};

export default FormPage;
