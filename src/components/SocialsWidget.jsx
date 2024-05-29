import { FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"
import { SocialsIcon } from "./SocialsIcon";

const style = {
  position: 'fixed',
  bottom: 20,
  right: 20,
  width: 120,
  display: 'flex',
  flexWrap: 'wrap',
  zIndex: 10
}

const SocialsWidget = () => {
  return (
    <div style={style}>
      <SocialsIcon 
        href="https://api.whatsapp.com/send/?phone=77751929911&text&app_absent=0"
        icon={<FaWhatsappSquare />}
      />
      <SocialsIcon 
        href="https://www.facebook.com/medrug.kz?ref=bookmarks&_rdc=1&_rdr"
        icon={<FaFacebookSquare />}
      />
      <SocialsIcon 
        href="https://www.instagram.com/medrug.kz/"
        icon={<FaInstagramSquare />}
      />
      <SocialsIcon 
        href="https://www.youtube.com/channel/UC_WHReOoJmccm5-FId5lwWw/featured"
        icon={<FaYoutubeSquare />}
      />
    </div>
  );
}

export {SocialsWidget}