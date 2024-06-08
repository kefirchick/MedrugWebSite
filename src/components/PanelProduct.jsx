import { useState, useMemo, useRef } from 'react';
import { Description } from './Description';
import { ProductImage } from './ProductImage';
import { useResize } from './ResizeProvider';

const PanelProduct = ({id, caption, children, subtitle, isFolded, handleFold}) => {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef(0);
  const isMobile = useResize();

  const style = useMemo(() => ({
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: (isFolded || isMobile) ? 'column' : 'row',
      justifyContent: 'space-evenly',
      alignItems: (isFolded || isMobile) ? 'center' : 'flex-start',
      textAlign: 'center',
      height: isFolded ? 340 : 'auto',
      width: isFolded ? 270 : '100%',
      translate: isHovered && isFolded ? '0 -5px 0' : '0 0 0',
      boxShadow: isHovered && isFolded ? '0 10px 10px rgba(0, 0, 0, 0.2)' : '0 0 0 rgba(0, 0, 0, 0)',
      transition: '.3s',
      cursor: isFolded ? 'pointer' : 'auto',
      margin: "20px 10px",
      padding: 10
  }), [isHovered, isFolded, isMobile])
  
  const onFold = () => {
    handleFold(id);
    if (isFolded) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      <ProductImage isFolded={isFolded} id={id} caption={caption} />
      <div style={{display: isFolded? 'block' : 'none'}}>
        <p>{subtitle}</p>
        <h3>{caption}</h3>
      </div>
      <Description
        isFolded={isFolded}
        caption={caption}
        description={children}
        handleFold={handleFold}
      />
    </div>
  );
}

export {PanelProduct}