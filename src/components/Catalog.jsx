import {useState} from 'react';
import { CatalogMenu } from "./CatalogMenu";

const Catalog = ({isMobile}) => {
  let [isHidden, setHidden] = useState(true);
  
  const handleToggle = () => {
    setHidden(!isHidden);
  };

  const handleHover = (isHovered) => {
    if (isMobile) isHidden = (isHovered) ? false : true;
  }

  const style = {
    height: '100%',
    display: 'flex',
    cursor: 'pointer'
  }

const buttonStyle = {
    color: 'dimgray',
    marginTop: 20
  }

  return (
      <div
        style={style}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <div style={buttonStyle} onClick={handleToggle} >КАТАЛОГ</div>
        <CatalogMenu isMobile={isMobile} isHidden={isHidden} />
      </div>
  );
}

export {Catalog}