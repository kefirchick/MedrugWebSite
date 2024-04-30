import ultrasoundImg from '../img/home/ultrasound.jpg';
import endoscopyImg from '../img/home/endoscopy.jpg';
import { PanelLink } from "../components/PanelLink";

const style = {
  display:'flex',
  justifyContent:'space-evenly',
  flexWrap: 'wrap'
}

const Home = () => {
  return (
    <div style={style} >
      <PanelLink name={'УЛЬТРАЗВУКОВЫЕ СИСТЕМЫ'} img={ultrasoundImg} link={'/catalog'} />
      <PanelLink name={'ЭНДОСКОПИЧЕСКИЕ СИСТЕМЫ'} img={endoscopyImg} link={'/catalog'} />
    </div>
  );
}

export {Home}