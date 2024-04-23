import {NavLink} from "react-router-dom";
import {useState} from 'react';
import {IoMenu} from "react-icons/io5";
import {NavbarMenu} from "./NavbarMenu"

const NavbarHead = ({isMobile}) => {
  const [isHidden, toggleHidden] = useState(true);

  const handleToggle = () => {
    toggleHidden(!isHidden);
  };

  const toggleStyle = (display) => ({
    display,
    cursor: 'pointer'
  });

  const logoStyle = {
    background: 'url(./img/logocolor.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    width: 90,
    height: '100%',
    marginLeft: 20,
    marginRight: 20
  }

  return (
    <div>
      <div
        style={toggleStyle(isMobile ? 'flex' : 'none')}
        onClick={handleToggle}
      >
        <IoMenu size={20} />
      </div>
      <NavLink to="/" style={logoStyle}></NavLink>
    </div>
  );
}

export {NavbarHead}