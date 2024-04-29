import { NavLink } from "react-router-dom";

const CatalogMenu = ({isMobile, isCatalogHidden}) => {
  const style = () => ({
    display: isCatalogHidden ? 'none' : 'flex',
    flexDirection: 'column',
    position: isMobile ? 'static' : 'absolute',
    top: 90,
    backgroundColor: 'white'
  })

  return (
    <div style={style()}>
      <NavLink to="/catalog">УЗИ</NavLink>
      <NavLink to="/catalog">УЗ ДАТЧИКИ</NavLink>
      <NavLink to="/catalog">ЭНДОСКОПИЯ</NavLink>
      <NavLink to="/catalog">ИНСТРУМЕНТЫ</NavLink>
      <NavLink to="/catalog">ХЕЛИКОБАКТЕР</NavLink>
      <NavLink to="/catalog">ТЕСТЫ ХЕЛИКОБАКТЕР</NavLink>
    </div>
  );
}

export {CatalogMenu}