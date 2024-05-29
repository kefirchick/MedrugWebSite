import React, { useState, useMemo } from 'react';

const SocialsIcon = ({icon, href}) => {
  const [isHovered, setHovered] = useState(false);

  const iconStyle = useMemo(() => ({
    fontSize: 60,
    borderRadius: 10,
    color: isHovered ? 'white' : 'lightseagreen',
    backgroundColor: isHovered ? 'lightseagreen' : 'transparent',
    transition: '.3s',
  }), [isHovered]);

  const styledIcon = React?.cloneElement(icon, {style: iconStyle});

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {styledIcon}
    </a>
  );
}

export {SocialsIcon}