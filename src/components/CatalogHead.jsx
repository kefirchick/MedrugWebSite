import { useState } from 'react';
import { CatalogMenu } from "./CatalogMenu";

const CatalogHead = ({isMobile}) => {
  let [isCatalogHidden, setCatalogHidden] = useState(true);
  
  const handleToggle = () => {
    setCatalogHidden(!isCatalogHidden);
  };

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

  return (
      <div style={style}>
        <div style={buttonStyle} onClick={handleToggle} >КАТАЛОГ</div>
        <CatalogMenu isMobile={isMobile} isCatalogHidden={isCatalogHidden} />
      </div>
  );
}

export {CatalogHead}