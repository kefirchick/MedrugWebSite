import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavbarHead } from './NavbarHead';
import { NavbarMenu } from './NavbarMenu';

const Navbar = () => {
  let isMobile = useMediaQuery({query: '(max-width: 950px)'});
  const [isMenuHidden, setMenuHidden] = useState(true);

  const handleToggler = () => {
    setMenuHidden(!isMenuHidden);
  };

  const style = () => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
  })

  return (
    <nav style={style()}>
      <NavbarHead isMobile={isMobile} handleToggler={handleToggler} />
      <NavbarMenu isMobile={isMobile} isMenuHidden={isMenuHidden} />
    </nav>
  );
}

export {Navbar}