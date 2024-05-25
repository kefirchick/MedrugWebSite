import ultrasoundImg from '../img/home/ultrasound.jpg';
import endoscopyImg from '../img/home/endoscopy.jpg';
import helicobacterImg from '../img/home/helicobacter.jpg';
import { PanelLink } from "../components/PanelLink";

const style = {
  display:'flex',
  justifyContent:'space-evenly',
  flexWrap: 'wrap'
}

const Home = () => {
  return (
    <div style={style} >
      <PanelLink name={'УЛЬТРАЗВУКОВЫЕ СИСТЕМЫ'} img={ultrasoundImg} link={'/catalog/ultrasound'} />
      <PanelLink name={'ЭНДОСКОПИЧЕСКИЕ СИСТЕМЫ'} img={endoscopyImg} link={'/catalog/endoscopy'} />
      <PanelLink name={'СИСТЕМЫ ДИАГНОСТИКИ HELICOBACTER PYLORY'} img={helicobacterImg} link={'/catalog/helicobacter'} />
    </div>
  );
}

export {Home}