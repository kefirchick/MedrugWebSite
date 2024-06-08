import { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import LogoImg from '../../img/logo.svg';

const Logo = () => {
  const [isHovered, setHovered] = useState(false);

  const style = useMemo(() => ({
    backgroundImage: `url(${LogoImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    margin: '0px 40px',
    width: 160,
    height: 90,
    filter: isHovered ? 'brightness(1.3)' : '',
    transition: '.3s'
  }), [isHovered]);

  return (
      <NavLink
        style={style}
        to="/"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></NavLink>
  );
}

export {Logo}