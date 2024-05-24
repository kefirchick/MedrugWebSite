
import { FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"

const style = {
  flex: '0 0 120px',
  position: 'sticky',
  display: 'flex',
  flexWrap: 'wrap',
  bottom: 20,
  float: 'right',
  margin: 20
}

const SocialsWidget = () => {
  return (
    <div style={style}>
      <a
        href="https://api.whatsapp.com/send/?phone=77751929911&text&app_absent=0"
      >
        <FaWhatsappSquare size={60} color={'lightseagreen'} />
      </a>
      <a href="https://www.facebook.com/medrug.kz?ref=bookmarks&_rdc=1&_rdr"
      >
        <FaFacebookSquare size={60} color={'lightseagreen'} />
      </a>
      <a
        href="https://www.instagram.com/medrug.kz/"
      >
        <FaInstagramSquare size={60} color={'lightseagreen'} />
      </a>
      <a
        href="https://www.youtube.com/channel/UC_WHReOoJmccm5-FId5lwWw/featured"
      >
        <FaYoutubeSquare size={60} color={'lightseagreen'} />
      </a>
    </div>
  );
}

export {SocialsWidget}