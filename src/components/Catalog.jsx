import { useState } from 'react';
import { CatalogMenu } from "./CatalogMenu";

const Catalog = ({isMobile}) => {
  let [isCatalogHidden, setCatalogHidden] = useState(true);
  
  const handleToggle = () => {
    if (isMobile) setCatalogHidden(!isCatalogHidden);
  };

  const handleHover = (isHovered) => {
    if (!isMobile) setCatalogHidden(isHovered ? false : true);
  }

  const style = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
  }

  return (
      <div
        style={style}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <div style={{color: 'dimgray', margin: 16}} onClick={handleToggle} >КАТАЛОГ</div>
        <CatalogMenu isMobile={isMobile} isCatalogHidden={isCatalogHidden} />
      </div>
  );
}

export {Catalog}