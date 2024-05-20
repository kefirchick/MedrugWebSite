import { useState, useMemo } from 'react';
import { BuyButton } from './BuyButton';

const PanelProduct = ({id, caption, children}) => {
  const [isHovered, setHovered] = useState(false);
  const [isFolded, setFolded] = useState(true);

  const style = useMemo(
    () => ({
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      textAlign: 'center',
      height: isFolded ? 360 : 'auto',
      width: isFolded ? 270 : '100%',
      translate: isHovered && isFolded ? '0 -5px 0' : '0 0 0',
      boxShadow: isHovered && isFolded ? '0 10px 10px rgba(0, 0, 0, 0.2)' : '0 0 0 rgba(0, 0, 0, 0)',
      transition: '.3s',
      cursor: isFolded ? 'pointer' : 'auto',
      margin: "20px 10px",
      padding: 10
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

  const descriptionStyle = useMemo(
    () => ({
      display: isFolded ? 'none' : 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      alignItems: 'center',
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
        <div style={descriptionStyle}>
          {children}
          <BuyButton product={caption} />
        </div>
    </div>
  );
}

export {PanelProduct}