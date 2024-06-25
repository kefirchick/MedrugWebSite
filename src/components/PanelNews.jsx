import { useState,  useRef } from 'react';
import { useMemo } from 'react';
import { useResize } from './ResizeProvider';

const PanelNews = ({caption, id, description, children, isFolded, handleFold}) => {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef(0);
  const isMobile = useResize();

  const style = useMemo(
    () => ({
      display: 'flex',
      flexDirection: isFolded ? 'row' : 'column',
      alignItems: isFolded ? 'flex-start' : 'center',
      height: isFolded ? 160 : 'auto',
      flex: isMobile || !isFolded ?  '0 0 100%' : '1 0 40%',
      overflow: 'hidden',
      color: !isFolded ? 'black' : isHovered ? 'white' : 'dimgrey',
      backgroundColor: isHovered && isFolded ? 'lightseagreen' : 'whitesmoke',
      transition: '.3s',
      cursor: isFolded ? 'pointer' : 'auto',
      margin: isMobile ? 0 : 10,
      overflowWrap: 'anywhere'
    }),
    [isHovered, isFolded, isMobile]
  )

  const imgStyle = useMemo(() => ({
    width: isFolded ? 160 : isMobile ? '100%' : '40%',
    height: isFolded ? 160 : 'auto',
    objectFit: 'cover',
    transition: '.3s'
  }), [isFolded, isMobile]);

  const onFold = () => {
    handleFold(id);
    if (isFolded) {
      setTimeout(() => {
        ref.current.scrollIntoView({behavior: 'smooth' , block: 'start'});
      }, 300);
    }
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onFold}
      style={style}
      ref={ref}
    >
      <img
        style={imgStyle}
        src={process.env.PUBLIC_URL + '/img/news/' + id + '.jpg'}
        alt={caption}
      />
      <div style={{padding: 20, textAlign: 'center', width: '100%'}} >
        <h3>{caption}</h3>
        <br/>
        <h4>{description}</h4>
        <br/>
        <div style={{display: isFolded ? 'none' : 'block'}}>
          {children}
        </div>
      </div>
    </div>
  );
}

export {PanelNews}