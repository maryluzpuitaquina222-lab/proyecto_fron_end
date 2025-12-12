// pages/Register.tsx
import React, { useState, useContext } from 'react';
import { SharedButton } from '../components/SharedButton';
import { FormDataContext } from '../contexts/FormDataContext';
import { useNavigate } from 'react-router-dom';

export const Register: React.FC = () => {
  const { setFormData } = useContext(FormDataContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', description: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(form);
    navigate('/submitted');
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Registra tu herramienta</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '0 auto' }} onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre de la herramienta" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Correo" value={form.email} onChange={handleChange} required />
        <textarea name="description" placeholder="Descripción" value={form.description} onChange={handleChange} required />
        <SharedButton text="Enviar" type="submit" />
      </form>
    </div>
  );
};
