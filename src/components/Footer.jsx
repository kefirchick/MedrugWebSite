import { useMemo } from 'react';
import { Link } from "react-router-dom";
import { SocialsWidget } from './SocialsWidget';
const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "space-between",
  flexWrap: 'wrap'
}

const spanStyle = {
  color: 'lightseagreen',
  fontWeight: 'bold'
}

const menuStyle = {
  flex: '1 0 160px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: 20
}

const Footer = ({isMobile}) => {
const aboutStyle = useMemo(
  () => ({
    display: isMobile ? 'none' : 'block',
    flex: '3 0 320px',
    margin: 20,
  }),
  [isMobile]
);
  return (
    <div style={style}>
      <div style={aboutStyle}>
        <h3>О компании</h3>
        <p>Являясь дистрибьютором и партнером <span style={spanStyle}> SonoScape</span> на территории Республики Казахстан, <strong>ТОО «Медруг»</strong>, обладает доступными ценами на инновационное, высокопроизводительное оборудование для УЗИ-диагностики и видеоэндоскопии.</p>
      </div>
      <div style={menuStyle}>
        <Link to="/about">О компании</Link>
        <Link to="/news">Новости</Link>
        <Link to="/service">Услуги</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
      <div style={{flex: '1 0 160px', margin: 20}}>
        <h4>Телефон:</h4>
        <a href='tel:+77006809911'>+7 700 680 99 11</a><br/>
        <a href='tel:+77751929911'>+7 775 192 99 11</a><br/><br/>
        <h4>E-mail:</h4>
        <a href="mailto:info@medrug.kz">info@medrug.kz</a>
      </div>
      <SocialsWidget />
    </div>
  );
}

export {Footer}