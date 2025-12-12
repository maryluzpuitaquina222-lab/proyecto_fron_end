import React from 'react';

interface BannerProps {
  image: string;
  alt: string;
}

export const Banner: React.FC<BannerProps> = ({ image, alt }) => {
  return (
    <div className="banner-item">
      <img src={image} alt={alt} />
    </div>
  );
};
