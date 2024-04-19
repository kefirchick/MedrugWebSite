import {NavLink} from "react-router-dom";
import {Catalog} from "./Catalog"

const Navbar = () => {

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="logo"></NavLink>
        <div className="navlinks">
          <NavLink to="/about">О КОМПАНИИ</NavLink>
          <NavLink to="/">НОВОСТИ</NavLink>
          <Catalog />
          <NavLink to="/">УСЛУГИ</NavLink>
          <NavLink to="/">КОНТАКТЫ</NavLink>
        </div>
      </nav>
    </>
  );
}

export {Navbar}