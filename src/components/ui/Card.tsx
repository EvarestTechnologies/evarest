import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, onClick }) => {
  const hoverStyles = hover
    ? 'hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2'
    : '';

  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border border-transparent transform ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
