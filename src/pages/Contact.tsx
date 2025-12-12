import React, { useState } from 'react';
import { SharedButton } from '../components/SharedButton';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulario enviado');
  };

  return (
    <div className="contact-form">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Correo" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Mensaje" value={form.message} onChange={handleChange} required />
        <SharedButton text="Enviar" type="submit" />
      </form>
    </div>
  );
};
