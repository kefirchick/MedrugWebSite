import { useState, useEffect, useMemo } from 'react';
import { useResize } from "./ResizeProvider";
import banner1 from '../img/banners/ultrasound.jpg';
import banner2 from '../img/banners/endoscopy.jpg';

const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const img2Style = {
  width: '100%',
  position: 'absolute',
  zIndex: 0
}

const CatalogBanner = () => {
  const isMobile = useResize();
  const [isFirstBanner, setIsFirstBanner] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstBanner(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const captionStyle = useMemo(() => ({
    position: 'absolute',
    color: 'transparent',
    backgroundImage: 'linear-gradient(90deg, whitesmoke 0%, white 45%, transparent 50%, whitesmoke 55%, whitesmoke 100%)',
    backgroundSize: '200% 100%',
    backgroundClip: 'text',
    animation: 'moveGradient 1.5s linear infinite',
    zIndex: 2,
    textAlign: 'center',
    fontSize: isMobile ? 32 : 64,
  }), [isMobile] )

  const img1Style = useMemo(() => ({
      width: '100%',
      transition: '2s',
      opacity: isFirstBanner ? 1 : 0,
      zIndex: 1
    }), [isFirstBanner]);

  return(
    <div style={style}>
      <img src={banner2} style={img2Style} alt='banner' />
      <img src={banner1} style={img1Style} alt='banner' />
      <h1 style={captionStyle}>К А Т А Л О Г</h1>
    </div>
  );
};

export {CatalogBanner};