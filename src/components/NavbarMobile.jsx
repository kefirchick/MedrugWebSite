import {NavLink} from "react-router-dom";
import {useState} from 'react';
import {IoMenu} from "react-icons/io5";
import {CatalogMobile} from "./CatalogMobile"

const NavbarMobile = () => {
  const [hidden, toggleHidden] = useState(true);

  const handleToggle = () => {
    toggleHidden(!hidden);
  };

  return (
    <>
      <nav className="navbar">
        <div className="toggle" onClick={handleToggle}>
          <IoMenu />
        </div>
        <NavLink to="/" className="logo"></NavLink>
      </nav>
      <div className={hidden ? "navlinks_mobile hidden" : "navlinks_mobile"}>
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