import React from 'react';
import { ProductCard } from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle'; 
import producto1 from '../assets/producto1.jpg';
import producto2 from '../assets/producto2.jpg';

export const Featured: React.FC = () => {
  return (
    <div className="productos">
      <SectionTitle title="Destacados" />
      <div className="productos-grid">
        <ProductCard image={producto1} name="Producto Destacado 1" code="015-12345" />
        <ProductCard image={producto2} name="Producto Destacado 2" code="015-67890" />
      </div>
    </div>
  );
};
