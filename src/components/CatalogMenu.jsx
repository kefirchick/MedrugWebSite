import { useMemo } from 'react';
import { NavLink } from "react-router-dom";

const CatalogMenu = ({isMobile, isCatalogHidden, setCatalogHidden}) => {
  const style = useMemo(
    () => ({
      display: isCatalogHidden ? 'none' : 'flex',
      flexDirection: 'column',
      position: isMobile ? 'static' : 'absolute',
      top: 90,
      backgroundColor: 'white'
    }),
    [isMobile, isCatalogHidden]
  )

  return (
    <div
      style={style}
      onMouseEnter={ () => {if (!isMobile) setCatalogHidden(false)} }
      onMouseLeave={ () => {if (!isMobile) setCatalogHidden(true)} }
    >
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