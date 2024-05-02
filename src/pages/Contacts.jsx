import banner from '../img/banners/contacts.jpg';
import { PanelContacts } from "../components/PanelContacts";
import { IoMdCall } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";

const style = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  margin: 20
}

const Contacts = () => {
  return (
    <div>
      <img src={banner} style={{width: '100%'}} alt='banner' />

      <div style={style} >
        <PanelContacts caption={'Позвоните нам'} Img={IoMdCall}>
          <a href='tel:+77006809911'>+7 700 680 99 11</a>
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
    </div>
  );
}

export {Contacts}