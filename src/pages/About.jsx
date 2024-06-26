import { useResize } from '../components/ResizeProvider';
import { useMemo } from 'react';
import { Banner } from '../components/Banner';
import bannerImg from '../img/banners/about.jpg';
import { LinkBlock } from "../components/LinkBlock";
import { SonoscapeAnimation } from '../components/SonoscapeAnimation';

const spanStyle = {
  color: 'lightseagreen',
  fontWeight: 'bold'
}

const About = () => {
  const isMobile = useResize();

  const textStyle = useMemo(() => ({
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: isMobile ? 14 : 28,
    lineHeight: 2,
    margin: 'auto',
    width: isMobile ? '90%' : '60%',
  }), [isMobile]);

  return (
    <div>
      <Banner image={bannerImg}>Забота о жизни через инновации</Banner>
      <LinkBlock />
      <div style={textStyle}>
        <p><br/>Наша компания является дистрибьютором и партнером <span style={spanStyle}>SonoScape</span> на территории Республики Казахстан.
        Мы предлагаем доступные цены на инновационное, высокопроизводительное оборудование.<br/><br/></p>
      </div>
      <SonoscapeAnimation />
    </div>
  );
}

export {About}