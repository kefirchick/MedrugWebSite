import banner from '../img/banners/contacts.jpg';
import { PanelContacts } from "../components/PanelContacts";
import { IoMdCall } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";

const style = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: 20
}

const mapStyle = {
  display: "flex",
  justifyContent: 'center',
  margin: 60
}

const Contacts = () => {
  return (
    <div>
      <img src={banner} style={{width: '100%'}} alt='banner' />

      <div style={style} >
        <PanelContacts caption={'Позвоните нам'} Img={IoMdCall}>
          <a href='tel:+77006809911'>+7 700 680 99 11</a>
          <br/>
          <a href='tel:+77751929911'>+7 775 192 99 11</a>
        </PanelContacts>
        <PanelContacts caption={'Наш адрес'} Img={FaMapLocationDot}>
          <p>г.Алматы, Бостандыкский район, БЦ "Asia Most", ул.Тимирязева д.42 корп.15/108 оф.212</p>
        </PanelContacts>
        <PanelContacts caption={'Напишите нам'} Img={IoIosMail}>
          <a href='mailto:info@medrug.kz'>info@medrug.kz</a>
        </PanelContacts>
        <PanelContacts caption={'Оставьте отзыв'} Img={HiChatBubbleLeftEllipsis}>
          <a href='mailto:a.babich@medrug.kz'>a.babich@medrug.kz</a>
        </PanelContacts>
      </div>

      <div style={mapStyle}>
        {/* <a href="https://yandex.kz/maps/162/almaty/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: 12, position: 'absolute', top: 0}}>Алматы</a> */}
        {/* <a href="https://yandex.kz/maps/162/almaty/house/Y08YfwdlSE0CQFppfX5wdn1rZA==/?ll=76.905584%2C43.217171&utm_campaign=desktop&utm_medium=mapframe&utm_source=maps&z=18.28" style={{color: '#eee', fontSize: 12, position: 'absolute', top: 14}}>Улица Климента Тимирязева, 42к15/109 — Яндекс Карты</a> */}
        <iframe title="map" src="https://yandex.kz/map-widget/v1/?ll=76.905584%2C43.217171&mode=whatshere&utm_campaign=desktop&utm_medium=search&utm_source=maps&whatshere%5Bpoint%5D=76.905468%2C43.217340&whatshere%5Bzoom%5D=17&z=18.28" width="100%" height="400" frameborder="0" allowfullscreen="true" style={{position:'relative'}}></iframe>
      </div>
    </div>
  );
}

export {Contacts}