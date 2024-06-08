import { Link } from "react-router-dom";
import { useState, useMemo } from 'react';

const style = {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}

const captionStyle = {
  fontSize: 48,
  color: 'transparent',
  backgroundImage: 'linear-gradient(90deg, whitesmoke 0%, white 45%, transparent 50%, whitesmoke 55%, whitesmoke 100%)',
  backgroundSize: '200% 100%',
  backgroundClip: 'text',
  animation: 'moveGradient 1.5s linear infinite',
}

const SlideCaption = ({children, link}) => {
  const [isHovered, setHovered] = useState(false);
  
  const linkStyle = useMemo(() => ({
    margin: 40,
    width: 200,
    height: 60,
    borderStyle: 'solid',
    borderWidth: 3,
    color: isHovered ? 'white' : 'lightgrey',
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '.3s'
  }), [isHovered]);

  return(
    <div style={style}>
      <h1 style={captionStyle}>{children}</h1>
      <Link
        style={linkStyle}
        to={link}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >Подробнее</Link>
    </div>
  );
};

export {SlideCaption};