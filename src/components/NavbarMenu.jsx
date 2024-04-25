import { NavLink } from "react-router-dom";
import { CatalogHead } from "./CatalogHead";

const NavbarMenu = ({isMobile, isMenuHidden}) => {
  const createStyle = () => {
    const style = {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      width: 800
    }
    const styleMobile = {
      display: isMenuHidden ? 'none' : 'flex',
      width: '100%',
      flexDirection: 'column'
    }

    return isMobile ? styleMobile : style;
  };


  return (
    <div style={createStyle()}>
      <NavLink to="/about">О КОМПАНИИ</NavLink>
      <NavLink to="/news">НОВОСТИ</NavLink>
      <CatalogHead isMobile={isMobile} isMenuHidden={isMenuHidden} />
      <NavLink to="/service">УСЛУГИ</NavLink>
      <NavLink to="/contacts">КОНТАКТЫ</NavLink>
    </div>
  );
}

export {NavbarMenu}