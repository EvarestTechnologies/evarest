import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const hoverStyles = hover
    ? 'hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2'
    : '';

  return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border border-transparent transform ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
