import { NavLink } from "react-router-dom";

const CatalogMenu = ({isMobile, isCatalogHidden}) => {

  const style = (display, position) => ({
    display,
    flexDirection: 'column',
    position,
    top: 90
  })

  return (
    <div style={style(
      isCatalogHidden ? 'none' : 'flex',
      isMobile ? 'static' : 'absolute'
    )}>
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