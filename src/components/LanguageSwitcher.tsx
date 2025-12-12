import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
};
