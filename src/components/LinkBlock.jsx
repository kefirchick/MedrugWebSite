import ultrasoundImg from '../img/home/ultrasound.jpg';
import probesImg from '../img/home/probes.jpg';
import endoscopyImg from '../img/home/endoscopy.jpg';
import instrumentsImg from '../img/home/instruments.jpg';
import helicobacterImg from '../img/home/helicobacter.jpg';
import veterinaryImg from '../img/home/veterinary.jpg';
import { PanelLink } from "./PanelLink";

const style = {
  display:'flex',
  justifyContent:'space-evenly',
  flexWrap: 'wrap',
  margin: 20
}

const LinkBlock = () => {
  return (
    <div style={style} >
      <PanelLink name={'УЛЬТРАЗВУКОВЫЕ СИСТЕМЫ'} img={ultrasoundImg} link={'/catalog/ultrasound'} />
      <PanelLink name={'УЛЬТРАЗВУКОВЫЕ ДАТЧИКИ'} img={probesImg} link={'/catalog/probes'} />
      <PanelLink name={'ЭНДОСКОПИЧЕСКИЕ СИСТЕМЫ'} img={endoscopyImg} link={'/catalog/endoscopy'} />
      <PanelLink name={'ЭНДОСКОПИЧЕСКИЕ ИНСТРУМЕНТЫ'} img={instrumentsImg} link={'/catalog/endoscopy'} />
      <PanelLink name={'СИСТЕМЫ ДИАГНОСТИКИ HELICOBACTER PYLORY'} img={helicobacterImg} link={'/catalog/helicobacter'} />
      <PanelLink name={'ВЕТЕРИНАРНОЕ ОБОРУДОВАНИЕ'} img={veterinaryImg} link={'/catalog/veterinary'} />
    </div>
  );
}

export {LinkBlock}