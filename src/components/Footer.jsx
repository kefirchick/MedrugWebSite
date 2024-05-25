import { useMemo } from 'react';
import { Link } from "react-router-dom";

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  boxShadow: '0px -10px 20px rgba(0, 0, 0, 0.1)',
  height: 160
}

const spanStyle = {
  color: 'lightseagreen',
  fontWeight: 'bold'
}

const menuStyle = {
  flex: '0 0 160px',
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
    textAlign: 'justify'
  }),
  [isMobile]
);

  return (
    <div style={style}>
      <div style={aboutStyle}>
        <p><strong>О компании: </strong>являясь дистрибьютором и партнером <span style={spanStyle}> SonoScape</span> на территории Республики Казахстан, <strong>ТОО «Медруг»</strong>, обладает доступными ценами на инновационное, высокопроизводительное оборудование для УЗИ-диагностики и видеоэндоскопии.</p>
      </div>
      <div style={menuStyle}>
        <Link to="/about"><h4>О компании</h4></Link>
        <Link to="/news"><h4>Новости</h4></Link>
        <Link to="/service"><h4>Услуги</h4></Link>
        <Link to="/contacts"><h4>Контакты</h4></Link>
      </div>
      <div style={{flex: '0 0 160px', margin: 20}}>
        <h4>Телефон:</h4>
        <a href='tel:+77006809911'>+7 700 680 99 11</a><br/>
        <a href='tel:+77751929911'>+7 775 192 99 11</a><br/><br/>
        <h4>E-mail:</h4>
        <a href="mailto:info@medrug.kz">info@medrug.kz</a>
      </div>
      <div style={{flex: '0 0 160px', margin: 20}}></div>
    </div>
  );
}

export {Footer}