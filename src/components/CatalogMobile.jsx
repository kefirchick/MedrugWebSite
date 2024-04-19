import {NavLink} from "react-router-dom";
import {useState} from 'react';

const CatalogMobile = () => {
  const [hidden, toggleHidden] = useState(true);

  const handleToggle = () => {
    toggleHidden(!hidden);
  };

  return (
      <div
        className="cat_mobile"
        onClick={handleToggle}
      >
        <div className="cat_button_mobile">КАТАЛОГ</div>
        <div className={hidden ? "cat_list_mobile hidden" : "cat_list_mobile"}>
          <NavLink to="/">УЗИ</NavLink>
          <NavLink to="/">УЗ ДАТЧИКИ</NavLink>
          <NavLink to="/">ЭНДОСКОПИЯ</NavLink>
          <NavLink to="/">ИНСТРУМЕНТЫ</NavLink>
          <NavLink to="/">ХЕЛИКОБАКТЕР</NavLink>
          <NavLink to="/">ТЕСТЫ ХЕЛИКОБАКТЕР</NavLink>
        </div>
      </div>
  );
}

export {CatalogMobile}