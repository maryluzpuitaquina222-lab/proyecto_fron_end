import React from 'react';

interface SharedButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const SharedButton: React.FC<SharedButtonProps> = ({ text, onClick, type = 'button', className }) => {
  return (
    <button type={type} onClick={onClick} className={className ? className : 'shared-button'}>
      {text}
    </button>
  );
};
