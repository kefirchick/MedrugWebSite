import { useState } from 'react';
import { useMemo } from 'react';
import { NavbarHead } from './NavbarHead';
import { NavbarMenu } from './NavbarMenu';

const Navbar = ({isMobile}) => {
  const [isMenuHidden, setMenuHidden] = useState(true);

  const handleToggler = () => {
    setMenuHidden(isMenuHidden => !isMenuHidden);
  };

  const style = useMemo(
    () => ({
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
      <NavbarHead isMobile={isMobile} handleToggler={handleToggler} />
      <NavbarMenu isMobile={isMobile} isMenuHidden={isMenuHidden} />
    </nav>
  );
}

export {Navbar}