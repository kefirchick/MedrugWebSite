import { useMemo } from 'react';
import { NavLink } from "react-router-dom";
import { useResize } from '../ResizeProvider';

const CatalogMenu = ({isCatalogHidden, setCatalogHidden, menuClose}) => {
  const isMobile = useResize();

  const style = useMemo(
    () => ({
      display: 'flex',
      flexDirection: 'column',
      position: isMobile ? 'static' : 'absolute',
      top: 90,
      backgroundColor: 'white',
      overflow: 'hidden',
      height: isCatalogHidden ? 0 : 300,
      transition: 'height .3s',
      boxShadow: isMobile ? 'none' : '0px 10px 20px rgba(0, 0, 0, 0.1)',
      marginLeft: isMobile ? 20 : 0,
      zIndex: 1
    }),
    [isMobile, isCatalogHidden]
  )

  return (
    <div
      style={style}
      onMouseEnter={ () => {if (!isMobile) setCatalogHidden(false)} }
      onMouseLeave={ () => {if (!isMobile) setCatalogHidden(true)} }
    >
      <NavLink onClick={menuClose} to="/catalog/ultrasound">УЗИ</NavLink>
      <NavLink onClick={menuClose} to="/catalog/probes">УЗ ДАТЧИКИ</NavLink>
      <NavLink onClick={menuClose} to="/catalog/endoscopy">ЭНДОСКОПИЯ</NavLink>
      <NavLink onClick={menuClose} to="/catalog/instruments">ИНСТРУМЕНТЫ</NavLink>
      <NavLink onClick={menuClose} to="/catalog/helicobacter">ХЕЛИКОБАКТЕР</NavLink>
      <NavLink onClick={menuClose} to="/catalog/veterinary">ВЕТЕРИНАРИЯ</NavLink>
    </div>
  );
}

export {CatalogMenu}