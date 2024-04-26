import { NavLink } from "react-router-dom";
import { FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"

const Footer = () => {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between"
  }
  
  const spanStyle = {
    color: 'teal',
    fontWeight: 'bold'
  }

  const menuStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <div style={style}>
      <div>
        <h3>О компании</h3>
        <p>Являясь дистрибьютором и партнером <span style={spanStyle}> SonoScape</span> на территории Республики Казахстан, <strong>ТОО «Медруг»</strong>, обладает доступными ценами на инновационное, высокопроизводительное оборудование для УЗИ-диагностики и видеоэндоскопии.</p>
      </div>
      <div style={menuStyle}>
        <NavLink to="/about">О компании</NavLink>
        <NavLink to="/news">Новости</NavLink>
        <NavLink to="/service">Услуги</NavLink>
        <NavLink to="/contacts">Контакты</NavLink>
      </div>
      <div>
        <h4>Телефон:</h4>
        <p>+7 700 680-99-11</p>
        <p>+7 775 192-99-11</p>
        <h4>E-mail:</h4>
        <a href="mailto:info@medrug.kz">info@medrug.kz</a>
      </div>
      <div>
        <FaWhatsappSquare size={40} color={'teal'} />
        <FaFacebookSquare size={40} color={'teal'} />
        <FaInstagramSquare size={40} color={'teal'} />
        <FaYoutubeSquare size={40} color={'teal'} />
      </div>
    </div>
  );
}

export {Footer}