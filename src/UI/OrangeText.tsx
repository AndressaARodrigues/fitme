import React from 'react';

interface OrangeTextProps {
  children: React.ReactNode;
}

const OrangeText: React.FC<OrangeTextProps> = ({ children }) => {
  return <span className="orange-text">{children}</span>;
};

export default OrangeText;
