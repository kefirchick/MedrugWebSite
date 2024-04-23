import {useMediaQuery} from 'react-responsive';
import {NavbarHead} from './NavbarHead';
import {NavbarMenu} from './NavbarMenu';

const Navbar = () => {
  let isMobile = useMediaQuery({query: '(max-width: 950px)'});

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  return (
      <nav style={style}>
        <NavbarHead isMobile={isMobile} />
        <NavbarMenu isMobile={isMobile} />
      </nav>
  );
}

export {Navbar}