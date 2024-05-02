import { useState } from 'react';
import { useMemo } from 'react';

const PanelNews = ({caption, image, children}) => {
  const [isHovered, setHovered] = useState(false);

  const style = useMemo(
    () => ({
      display: 'flex',
    }),
    [isHovered]
  )

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      <img src={image} style={{width: '100%'}} alt={caption} />
      <div>
        <h3>{caption}</h3>
        {children}
      </div>
    </div>
  );
}

export {PanelNews}