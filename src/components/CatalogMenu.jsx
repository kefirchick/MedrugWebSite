import { NavLink } from "react-router-dom";

const CatalogMenu = ({isMobile, isCatalogHidden}) => {

  const style = () => ({
    display: isCatalogHidden ? 'none' : 'flex',
    flexDirection: 'column',
    position: isMobile ? 'static' : 'absolute',
    top: 90
  })

  return (
    <div style={style()}>
      <NavLink to="/">УЗИ</NavLink>
      <NavLink to="/">УЗ ДАТЧИКИ</NavLink>
      <NavLink to="/">ЭНДОСКОПИЯ</NavLink>
      <NavLink to="/">ИНСТРУМЕНТЫ</NavLink>
      <NavLink to="/">ХЕЛИКОБАКТЕР</NavLink>
      <NavLink to="/">ТЕСТЫ ХЕЛИКОБАКТЕР</NavLink>
    </div>
  );
}

export {CatalogMenu}