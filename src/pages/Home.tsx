import React from 'react';
import { BannerSlider } from '../components/BannerSlider';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';
import { SectionTitle } from '../components/SectionTitle';

import categoria1 from '../assets/categoria1.jpg';
import categoria2 from '../assets/categoria2.jpg';
import categoria3 from '../assets/categoria3.jpg';
import categoria4 from '../assets/categoria4.jpg';

import producto1 from '../assets/producto1.jpg';
import producto2 from '../assets/producto2.jpg';
import producto3 from '../assets/producto3.jpg';

export const Home: React.FC = () => {
  return (
    <div>
      <BannerSlider />

      <SectionTitle title="Categorías" />
      <section className="categorias">
        <CategoryCard image={categoria1} name="Consumibles" />
        <CategoryCard image={categoria2} name="Herramientas Eléctricas" />
        <CategoryCard image={categoria3} name="Generadores" />
        <CategoryCard image={categoria4} name="Herramientas a Batería" />
      </section>

      <SectionTitle title="Nuevos Productos" />
      <section className="productos">
        <div className="productos-grid">
          <ProductCard image={producto1} name="Producto 1" code="015-15884" />
          <ProductCard image={producto2} name="Producto 2" code="015-51416" />
          <ProductCard image={producto3} name="Producto 3" code="015-40104" />
        </div>
      </section>
    </div>
  );
};
