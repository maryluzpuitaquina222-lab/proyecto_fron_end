import React from 'react';
import { ProductCard } from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import producto1 from '../assets/producto1.jpg';
import producto3 from '../assets/producto3.jpg';

export const New: React.FC = () => {
  return (
    <div className="productos">
      <SectionTitle title="Nuevos" />
      <div className="productos-grid">
        <ProductCard image={producto1} name="Nuevo Producto 1" code="015-11111" />
        <ProductCard image={producto3} name="Nuevo Producto 2" code="015-22222" />
      </div>
    </div>
  );
};
