import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h3>Nosotros</h3>
          <a href="#">Contacto</a>
        </div>
        <div>
          <h3>Tienda</h3>
          <a href="#">Destacados</a>
          <a href="#">Categorías</a>
          <a href="#">Nuevos</a>
        </div>
        <div>
          <h3>Únete</h3>
          <div className="social">
            <a href="#">📧</a>
            <a href="#">📸</a>
            <a href="#">📘</a>
            <a href="#">🎵</a>
          </div>
        </div>
      </div>
      <p>¡Gracias por tu visita y regresa pronto!</p>
      <p>© Copyright 2025</p>
    </footer>
  );
};
