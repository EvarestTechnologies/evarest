import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'purple' | 'coral' | 'outline-purple' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';

  const variants = {
    primary: 'bg-brand-blue-500 hover:bg-brand-blue-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-white hover:bg-gray-50 text-slate-800 shadow-md hover:shadow-lg border border-gray-200',
    ghost: 'text-brand-blue-500 border border-brand-blue-500 hover:bg-brand-blue-50',
    purple: 'bg-brand-blue-500 hover:bg-brand-blue-600 text-white shadow-lg hover:shadow-xl hover:shadow-brand-blue-500/50 transform hover:-translate-y-0.5',
    coral: 'bg-brand-cyan-500 hover:bg-brand-cyan-600 text-white shadow-lg hover:shadow-xl hover:shadow-brand-cyan-500/50 transform hover:-translate-y-0.5',
    'outline-purple': 'bg-transparent hover:bg-brand-blue-500/10 text-white border-2 border-brand-blue-400 hover:border-brand-blue-300 shadow-md hover:shadow-lg',
    outline: 'bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-300 hover:border-slate-400 shadow-sm hover:shadow-md',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
