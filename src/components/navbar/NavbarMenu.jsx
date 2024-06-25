import { useMemo } from 'react';
import { NavLink } from "react-router-dom";
import { CatalogHead } from "./CatalogHead";
import { useResize } from '../ResizeProvider';

const style = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
  width: 800
}

const NavbarMenu = ({isMenuHidden, menuClose}) => {
  const isMobile = useResize();

  const createStyle = useMemo(
    () => {
    const styleMobile = {
      display: isMenuHidden ? 'none' : 'flex',
      width: '100%',
      flexDirection: 'column'
    }
      return isMobile ? styleMobile : style;
    },
    [isMobile, isMenuHidden]
  )


  return (
    <div style={createStyle}>
      <NavLink onClick={menuClose} to="/about">О КОМПАНИИ</NavLink>
      <NavLink onClick={menuClose} to="/news">НОВОСТИ</NavLink>
      <CatalogHead menuClose={menuClose} />
      <NavLink onClick={menuClose} to="/contacts">КОНТАКТЫ</NavLink>
    </div>
  );
}

export {NavbarMenu}