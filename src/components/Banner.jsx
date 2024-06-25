import { useResize } from "./ResizeProvider";
import { useMemo } from 'react';

const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Banner = ({children, image}) => {
  const isMobile = useResize();

  const captionStyle = useMemo(() => ({
    position: 'absolute',
    color: 'transparent',
    backgroundImage: 'linear-gradient(90deg, whitesmoke 0%, white 45%, transparent 50%, whitesmoke 55%, whitesmoke 100%)',
    backgroundSize: '200% 100%',
    backgroundClip: 'text',
    animation: 'moveGradient 1.5s linear infinite',
    textAlign: 'center',
    fontSize: isMobile ? 32 : 64,
  }), [isMobile] )

  return(
    <div style={style}>
      <img src={image} style={{width: '100%'}} alt='banner' />
      <h1 style={captionStyle}>{children}</h1>
    </div>
  );
};

export {Banner};