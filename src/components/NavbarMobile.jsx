import {NavLink} from "react-router-dom";
import {useState} from 'react';
import {IoMenu} from "react-icons/io5";
import {CatalogMobile} from "./CatalogMobile"

const NavbarMobile = () => {
  const [hidden, toggleHidden] = useState(true);

  const handleToggle = () => {
    toggleHidden(!hidden);
  };

  const toggleStyle = {
    marginTop: 26,
    marginLeft: 20,
    marginRight: 20,
    cursor: 'pointer'
  };

  const svgStyle = {
    width: 20,
    height: 20
  };

  const navlinksStyle = (hidden) => ({
    display: hidden ? 'none' : 'flex',
    flexDirection: 'column'
  });

  console.log(navlinksStyle);

  return (
    <>
      <nav className="navbar">
        <div style={toggleStyle} onClick={handleToggle}>
          <IoMenu style={svgStyle} />
        </div>
        <NavLink to="/" className="logo"></NavLink>
      </nav>
      <div style={navlinksStyle(hidden)}>
          <NavLink to="/about">О КОМПАНИИ</NavLink>
          <NavLink to="/">НОВОСТИ</NavLink>
          <CatalogMobile />
          <NavLink to="/">УСЛУГИ</NavLink>
          <NavLink to="/">КОНТАКТЫ</NavLink>
      </div>
    </>
  );
}

export {NavbarMobile}