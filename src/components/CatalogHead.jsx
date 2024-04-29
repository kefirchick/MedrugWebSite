import { useState } from 'react';
import { CatalogMenu } from "./CatalogMenu";

const style = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}

const buttonStyle = {
  color: 'dimgray',
  margin: 16,
  cursor: 'pointer'
}

const CatalogHead = ({isMobile}) => {
  let [isCatalogHidden, setCatalogHidden] = useState(true);
  
  const handleToggle = () => {
    setCatalogHidden(isCatalogHidden => !isCatalogHidden);
  };

  return (
      <div style={style}>
        <div style={buttonStyle} onClick={handleToggle} >КАТАЛОГ</div>
        <CatalogMenu isMobile={isMobile} isCatalogHidden={isCatalogHidden} />
      </div>
  );
}

export {CatalogHead}