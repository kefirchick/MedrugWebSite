import banner from '../img/banners/about.jpg';
import { LinkBlock } from "../components/LinkBlock";
import { SonoscapeAnimation } from '../components/SonoscapeAnimation';

const textStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: 28,
  lineHeight: 2,
  margin: 60
}

const spanStyle = {
  color: 'lightseagreen',
  fontWeight: 'bold'
}

const About = () => {
  return (
    <div>
      <img src={banner} style={{width: '100%'}} alt='banner' />
      <LinkBlock />
      <div style={textStyle}>
        <p style={{width: '50%'}}><br/>Наша компания является дистрибьютором и партнером <span style={spanStyle}>SonoScape</span> на территории Республики Казахстан.
        Мы предлагаем доступные цены на инновационное, высокопроизводительное оборудование.<br/><br/></p>
      </div>
      <SonoscapeAnimation />
    </div>
  );
}

export {About}