import { PanelLink } from "./PanelLink";
import {
  ultrasoundImg,
  probesImg,
  endoscopyImg,
  instrumentsImg,
  helicobacterImg,
  veterinaryImg,
  laserImg,
  radioImg
} from '../img/home/links/images';

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
      <PanelLink name={'РЕНТГЕНОВСКОЕ ОБОРУДОВАНИЕ'} img={radioImg} link={'/catalog/radiology'} />
      <PanelLink name={'ЛАЗЕРНОЕ ОБОРУДОВАНИЕ'} img={laserImg} link={'/catalog/lasers'} />
    </div>
  );
}

export {LinkBlock}