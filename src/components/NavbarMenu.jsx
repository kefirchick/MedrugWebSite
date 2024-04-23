import {NavLink} from "react-router-dom";
import {Catalog} from "./Catalog"

const NavbarMenu = ({isMobile, isHidden}) => {
  const style = (flexDirection) => ({
    float: 'right',
    height: '100%',
    width: 800,
    display: 'flex',
    flexDirection,
    alignItems: 'center',
    justifyContent: 'spaceEvenly'
  });

  return (
      <div style={style(isMobile ? 'column' : 'row')}>
          <NavLink to="/about">О КОМПАНИИ</NavLink>
          <NavLink to="/">НОВОСТИ</NavLink>
          <Catalog isHidden={isHidden} />
          <NavLink to="/">УСЛУГИ</NavLink>
          <NavLink to="/">КОНТАКТЫ</NavLink>
      </div>
  );
}

export {NavbarMenu}