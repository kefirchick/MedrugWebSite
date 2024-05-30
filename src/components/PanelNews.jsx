import { useState,  useRef } from 'react';
import { useMemo } from 'react';
import { useResize } from './ResizeProvider';

const PanelNews = ({caption, id, children}) => {
  const [isHovered, setHovered] = useState(false);
  const [isFolded, setFolded] = useState(true);
  const ref = useRef(0);
  const isMobile = useResize();

  const style = useMemo(
    () => ({
      display: 'flex',
      flexDirection: isFolded ? 'row' : 'column',
      alignItems: isFolded ? 'flex-start' : 'center',
      height: isFolded ? 200 : 'auto',
      flex: isMobile || !isFolded ?  '0 0 100%' : '1 0 40%',
      overflow: 'hidden',
      color: isHovered && isFolded ? 'white' : 'black',
      backgroundColor: isHovered && isFolded ? 'lightseagreen' : 'whitesmoke',
      transition: '.3s',
      cursor: isFolded ? 'pointer' : 'auto',
      margin: 10
    }),
    [isHovered, isFolded, isMobile]
  )

  const imgStyle = useMemo(() => ({
    width: isFolded ? 200 : isMobile ? '100%' : '40%',
    height: isFolded ? 200 : 'auto',
    objectFit: 'cover',
    transition: '.3s'
  }), [isFolded, isMobile]);

  const handleFold = () => {
    setFolded(isFolded => !isFolded);
    setTimeout(() => {
      if (isFolded) ref.current.scrollIntoView({behavior: 'smooth' , block: 'start'});
    }, 300);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleFold}
      style={style}
      ref={ref}
    >
      <img
        style={imgStyle}
        src={process.env.PUBLIC_URL + '/img/news/' + id + '.jpg'}
        alt={caption}
      />
      <div style={{margin: 20, textAlign: 'center'}} >
        <h3>{caption}</h3><br />
        {children}
      </div>
    </div>
  );
}

export {PanelNews}