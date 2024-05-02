import { useState } from 'react';

const PanelNews = ({caption, image, children}) => {
  const [isHovered, setHovered] = useState(false);
  const [isFolded, setFolded] = useState(true);

  const style = () => ({
    display: 'flex',
    flexDirection: isFolded ? 'row' : 'column',
    alignItems: isFolded ? 'flex-start' : 'center',
    height: isFolded ? 200 : 'auto',
    width: isFolded ? "46%" : '100%',
    overflow: 'hidden',
    color: isHovered && isFolded ? 'white' : 'black',
    backgroundColor: isHovered && isFolded ? 'lightseagreen' : 'transparent',
    transition: '.3s',
    cursor: 'pointer',
    margin: '2%'
  })
  
  const imgStyle = () => ({
    width: isFolded ? 200 : '40%',
    height: isFolded ? 200 : 'auto',
    objectFit: 'cover',
    transition: '.3s'
  })

  const handleFold = () => {
    setFolded(isFolded => !isFolded);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleFold}
      style={style()}
    >
      <img style={imgStyle()} src={image} alt={caption} />
      <div style={{margin: 20, textAlign: 'center'}} >
        <h3>{caption}</h3><br />
        {children}
      </div>
    </div>
  );
}

export {PanelNews}