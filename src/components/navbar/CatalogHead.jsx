import { useState } from 'react';
import { CatalogMenu } from "./CatalogMenu";
import { useResize } from '../ResizeProvider';

const style = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%'
}

const buttonStyle = {
  color: 'dimgray',
  margin: 16,
  cursor: 'pointer'
}

const CatalogHead = () => {
  let [isCatalogHidden, setCatalogHidden] = useState(true);
  const isMobile = useResize();
  
  const handleToggle = () => {
    if (isMobile) setCatalogHidden(isCatalogHidden => !isCatalogHidden);
  };

  return (
      <div
        style={style}
        onMouseEnter={ () => {if (!isMobile) setCatalogHidden(false)} }
        onMouseLeave={ () => {if (!isMobile) setCatalogHidden(true)} }
      >
        <div style={buttonStyle} onClick={handleToggle} >КАТАЛОГ</div>
        <CatalogMenu isCatalogHidden={isCatalogHidden} setCatalogHidden={setCatalogHidden} />
      </div>
  );
}

export {CatalogHead}