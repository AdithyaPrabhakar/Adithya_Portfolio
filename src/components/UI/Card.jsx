import React from 'react';

const Card = ({
  children,
  className = '',
  hover = false,
  padding = true,
  ...props   // 👈 IMPORTANT: capture events like onClick
}) => {
  return (
    <div
      {...props} // 👈 IMPORTANT: forward events to DOM
      className={`
        rounded-2xl bg-white border border-gray-200
        ${padding ? 'p-6' : ''}
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-md' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-3 ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={`text-gray-600 text-sm leading-relaxed ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`}>
    {children}
  </div>
);

export default Card;
