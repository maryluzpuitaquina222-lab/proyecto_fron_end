import React from 'react';

interface CategoryCardProps {
  image: string;
  name: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ image, name }) => {
  return (
    <div className="categoria">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};
