import React, { useContext } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageContext } from '../contexts/LanguageContext';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <header>
      <div className="top-bar">
        <input type="text" placeholder={language === 'es' ? "Buscar..." : "Search..."} />
        <h1 className="logo">
          <img src={logo} alt="Logo" style={{ height: 40 }} />
        </h1>
        <nav className="menu">
          <ul>
            <li><Link to="/">{language === 'es' ? "Inicio" : "Home"}</Link></li>
            <li><Link to="/featured">{language === 'es' ? "Destacados" : "Featured"}</Link></li>
            <li><Link to="/new">{language === 'es' ? "Nuevos" : "New"}</Link></li>
            <li><Link to="/register">{language === 'es' ? "Registra tu herramienta" : "Register Tool"}</Link></li>
            <li><Link to="/contact">{language === 'es' ? "Contacto" : "Contact"}</Link></li>
          </ul>
        </nav>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
