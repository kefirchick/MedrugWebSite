import { useState, useMemo } from 'react';
import { NavbarHead } from './NavbarHead';
import { NavbarMenu } from './NavbarMenu';
import { useResize } from '../ResizeProvider';

const Navbar = () => {
  const [isMenuHidden, setMenuHidden] = useState(true);
  const isMobile = useResize();

  const handleToggler = () => {
    setMenuHidden(isMenuHidden => !isMenuHidden);
  };

  const style = useMemo(
    () => ({
      position: 'sticky',
      top: 0,
      backgroundColor: 'white',
      zIndex: 10,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'stretch',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    }),
    [isMobile]
  )

  return (
    <nav style={style}>
      <NavbarHead handleToggler={handleToggler} />
      <NavbarMenu isMenuHidden={isMenuHidden} />
    </nav>
  );
}

export {Navbar}