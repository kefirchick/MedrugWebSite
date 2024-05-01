import { PanelService } from '../components/PanelService'
import { FaAward } from "react-icons/fa";

const Service = () => {
  return (
    <div>
      <PanelService caption={'Гарантия'} Img={FaAward}>
        Гарантия 24 месяца на эндоскопические стойки и аппараты УЗИ, 12 месяцев на комплектующие
      </PanelService>
    </div>
  );
}

export {Service}