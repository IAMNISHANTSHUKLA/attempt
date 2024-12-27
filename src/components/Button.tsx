import React from 'react';

interface ButtonProps {
  variant?: 'outline' | 'filled' | 'text'; // Define acceptable values for the variant
  className?: string; // Optional className for additional styling
  onClick?: () => void; // Optional click handler
  type?: 'button' | 'submit' | 'reset'; // Button type, can be 'button', 'submit', or 'reset'
  children?: React.ReactNode; // Allow for children as an alternative to 'label'
  label?: string; // Optional label for the button
}

const Button: React.FC<ButtonProps> = ({
  variant = 'filled', // Default to 'filled' variant
  className,
  onClick,
  type = 'button', // Default type is 'button'
  children,
  label,
}) => {
  // Define base styles
  const baseStyles = 'px-4 py-2 rounded text-white hover:bg-opacity-90';

  // Define variant-specific styles
  const variantStyles = {
    outline: 'border-2 border-blue-500 text-blue-500 bg-transparent',
    filled: 'bg-blue-500 text-white',
    text: 'bg-transparent text-blue-500',
  };

  // Combine the variant styles with the base styles
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className || ''}`;

  return (
    <button onClick={onClick} type={type} className={buttonClasses}>
      {children || label}
    </button>
  );
};

export default Button;
