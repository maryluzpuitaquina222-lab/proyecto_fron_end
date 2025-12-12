import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  code: string;
  price?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ image, name, code, price }) => {
  return (
    <div className="producto">
      <img src={image} alt={name} />
      <p>{name}</p>
      <span>{price ? price : code}</span>
    </div>
  );
};
