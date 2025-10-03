import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'gray';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center rounded-full font-medium';

  const variants = {
    primary: 'bg-blue-100 text-blue-700',
    secondary: 'bg-green-100 text-green-700',
    success: 'bg-green-500 text-white',
    gray: 'bg-gray-100 text-gray-700',
  };

  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
