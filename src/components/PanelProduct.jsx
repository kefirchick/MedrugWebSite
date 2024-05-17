import { useState } from 'react';
import { useMemo } from 'react';

const PanelProduct = ({id, caption, children}) => {
  const [isHovered, setHovered] = useState(false);
  const [isFolded, setFolded] = useState(true);

  const style = useMemo(
    () => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: isFolded ? 350 : 'auto',
      width: isFolded ? 250 : '100%',
      translate: isHovered && isFolded ? '0 -5px 0' : '0 0 0',
      boxShadow: isHovered && isFolded ? '0 10px 10px rgba(0, 0, 0, 0.2)' : '0 0 0 rgba(0, 0, 0, 0)',
      transition: '.3s',
      cursor: 'pointer',
      margin: '2%'
    }),
    [isHovered, isFolded]
  )

  const imgStyle = useMemo(
    () => ({
      width: isFolded ? 200 : '40%',
      objectFit: 'cover',
      transition: '.3s'
    }),
    [isFolded]
  )

  const image = useMemo(() => {
    return isFolded ? '/small.jpg' : '/big.jpg';
  }, [isFolded]);
  
  const handleFold = () => {
    setFolded(isFolded => !isFolded);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleFold}
      style={style}
    >
      <img
        style={imgStyle}
        src={process.env.PUBLIC_URL + '/img/' + id + image}
        alt={caption}
      />
        <h3>{caption}</h3><br />
        <div style={{display: isFolded ? 'none' : 'block'}}>
         {children}
        </div>
    </div>
  );
}

export {PanelProduct}