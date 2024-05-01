import { NavLink } from 'react-router-dom';
import LogoImg from '../img/logocolor.png';

const style = {
  backgroundImage: `url(${LogoImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  backgroundPosition: 'center',
  margin: '0px 20px',
  width: 100,
  height: 90,
}

const Logo = () => {
  return (
      <NavLink style={style} to="/"></NavLink>
  );
}

export {Logo}