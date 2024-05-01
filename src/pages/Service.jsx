import { PanelService } from '../components/PanelService'
import { BsAward } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { GiAutoRepair } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";

const style = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  margin: 20
}

const Service = () => {
  return (
    <div style={style}>
      <PanelService caption={'Гарантия'} Img={BsAward}>
        Гарантия 24 месяца на эндоскопические стойки и аппараты УЗИ, 12 месяцев на комплектующие
      </PanelService>
      <PanelService caption={'Гибкие условия оплаты'} Img={BsCashCoin}>
        Рассрочка до 6 месяцев, действует система Trade-in: старый аппарат в обмен на новый
      </PanelService>
      <PanelService caption={'Сервис'} Img={GiAutoRepair}>
        Оперативная техническая поддержка, гарантийное и постгарантийное обслуживание, выезд по всему Казахстану
      </PanelService>
      <PanelService caption={'Доставка'} Img={BsTruck}>
        Быстрая и надежная доставка до вашего медицинского учреждения, действует по всему Казахстану
      </PanelService>
    </div>
  );
}

export {Service}