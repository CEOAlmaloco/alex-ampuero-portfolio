import React from 'react';

const SocialLink = ({ 
  href, 
  icon: Icon, 
  label, 
  className = '',
  onClick,
  isButton = false,
  iconSize = 'w-5 h-5'
}) => {
  const commonProps = {
    className,
    'aria-label': label,
    title: label,
  };

  if (isButton) {
    return (
      <button
        {...commonProps}
        onClick={onClick}
        type="button"
      >
        <Icon className={iconSize} />
      </button>
    );
  }

  return (
    <a
      {...commonProps}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={iconSize} />
    </a>
  );
};

export default SocialLink;
