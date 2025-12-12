import React, { useState, useEffect } from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const banners = [banner1, banner2, banner3];

export const BannerSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 3000); // cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner">
      {banners.map((img, idx) => (
        <div
          key={idx}
          className={`banner-item ${idx === current ? 'active' : ''}`}
        >
          <img src={img} alt={`Banner ${idx + 1}`} />
        </div>
      ))}
    </section>
  );
};
