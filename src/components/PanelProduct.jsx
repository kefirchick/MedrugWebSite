import { useState } from 'react';
import { useMemo } from 'react';

const PanelProduct = ({caption, children}) => {
  const [isHovered, setHovered] = useState(false);
  const [isFolded, setFolded] = useState(true);

  const style = useMemo(
    () => ({
      display: 'flex',
      flexDirection: isFolded ? 'row' : 'column',
      alignItems: isFolded ? 'flex-start' : 'center',
      height: isFolded ? 200 : 'auto',
      flex: isFolded ? '1 0 400px' : '0 0 100%',
      overflow: 'hidden',
      color: isHovered && isFolded ? 'white' : 'black',
      backgroundColor: isHovered && isFolded ? 'lightseagreen' : 'transparent',
      transition: '.3s',
      cursor: 'pointer',
      margin: '2%'
    }),
    [isHovered, isFolded]
  )

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
      <div style={{margin: 20, textAlign: 'center'}} >
        <h3>{caption}</h3><br />
        {children}
      </div>
    </div>
  );
}

export {PanelProduct}