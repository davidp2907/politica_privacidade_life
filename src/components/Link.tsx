import React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, className = '' }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // For an actual app with routing, you would use router navigation here
    // For now, we'll just update window.location
    window.location.href = to;
  };

  return (
    <a 
      href={to} 
      onClick={handleClick} 
      className={className}
    >
      {children}
    </a>
  );
};