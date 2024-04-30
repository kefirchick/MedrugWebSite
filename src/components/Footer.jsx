import { useMemo } from 'react';
import { Link } from "react-router-dom";
import { FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"

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
        <p>+7 700 680-99-11</p>
        <p>+7 775 192-99-11</p><br/>
        <h4>E-mail:</h4>
        <a href="mailto:info@medrug.kz">info@medrug.kz</a>
      </div>
      <div style={{flex: '0 0 80px', margin: 20}}>
        <FaWhatsappSquare size={40} color={'lightseagreen'} />
        <FaFacebookSquare size={40} color={'lightseagreen'} />
        <FaInstagramSquare size={40} color={'lightseagreen'} />
        <FaYoutubeSquare size={40} color={'lightseagreen'} />
      </div>
    </div>
  );
}

export {Footer}