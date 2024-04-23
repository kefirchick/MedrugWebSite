import {NavLink} from "react-router-dom";

const CatalogMenu = ({isMobile, isHidden}) => {

  const style = (position, visibility) => ({
    display: 'flex',
    flexDirection: 'column',
    position,
    top: 90,
    visibility
  })

  return (
    <div style={style(
      isMobile ? 'static' : 'absolute',
      isHidden ? 'none' : 'visible'
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