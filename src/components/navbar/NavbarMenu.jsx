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

const NavbarMenu = ({isMenuHidden}) => {
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
      <NavLink to="/about">О КОМПАНИИ</NavLink>
      <NavLink to="/news">НОВОСТИ</NavLink>
      <CatalogHead isMenuHidden={isMenuHidden} />
      <NavLink to="/contacts">КОНТАКТЫ</NavLink>
    </div>
  );
}

export {NavbarMenu}