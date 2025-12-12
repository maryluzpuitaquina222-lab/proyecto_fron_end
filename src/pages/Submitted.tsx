import React, { useContext } from 'react';
import { FormDataContext } from '../contexts/FormDataContext';

export const Submitted: React.FC = () => {
  const { formData } = useContext(FormDataContext);
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>¡Gracias por registrar tu herramienta!</h2>
      <p><b>Nombre:</b> {formData.name}</p>
      <p><b>Correo:</b> {formData.email}</p>
      <p><b>Descripción:</b> {formData.description}</p>
    </div>
  );
};
