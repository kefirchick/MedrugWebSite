import { PanelService } from './PanelService'
import { BsAward } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { GiAutoRepair } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";

const style = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: 20
}

const ServiceWidget = () => {
  return (
    <div style={style}>
      <PanelService caption={'Гарантия'} Img={BsAward}>
        Гарантия от 36 месяцев на оборудование до 12 месяцев на комплектующие
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

export {ServiceWidget}