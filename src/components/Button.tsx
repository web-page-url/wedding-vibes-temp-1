import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = true, 
  onClick, 
  type = 'button',
  className = '',
  disabled = false
}) => {
  const baseStyles = "font-quicksand font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const primaryStyles = "bg-plum-600 hover:bg-plum-700 text-white focus:ring-plum-500";
  const secondaryStyles = "bg-ivory-100 hover:bg-ivory-200 text-plum-800 border border-plum-200 focus:ring-plum-300";
  
  const buttonStyles = `${baseStyles} ${primary ? primaryStyles : secondaryStyles} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonStyles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;