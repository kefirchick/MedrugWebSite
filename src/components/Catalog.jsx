import {NavLink} from "react-router-dom";
import {useState} from 'react';

const Catalog = () => {
  const [hidden, setHidden] = useState(true);

  return (
      <div
        className="cat"
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        <div className="cat_button">КАТАЛОГ</div>
        <div className={hidden ? "cat_list_mobile hidden" : "cat_list"}>
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

export {Catalog}