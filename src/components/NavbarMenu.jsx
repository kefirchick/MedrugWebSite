import { NavLink } from "react-router-dom";
import { Catalog } from "./Catalog"

const NavbarMenu = ({isMobile, isMenuHidden}) => {
  const createStyle = () => {
    const style = {
      height: '100%',
      justifyContent: 'space-evenly',
    }
    style.flexDirection = isMobile ? 'column' : 'row';
    style.width = isMobile ? '100%' : 800;
    style.display = (isMobile && isMenuHidden) ? 'none' : 'flex';

    return style;
  };


  return (
      <div style={createStyle()}>
          <NavLink to="/about">О КОМПАНИИ</NavLink>
          <NavLink to="/">НОВОСТИ</NavLink>
          <Catalog isMobile={isMobile} isMenuHidden={isMenuHidden} />
          <NavLink to="/">УСЛУГИ</NavLink>
          <NavLink to="/">КОНТАКТЫ</NavLink>
      </div>
  );
}

export {NavbarMenu}