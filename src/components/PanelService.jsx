import { useState } from 'react';
import { useMemo } from 'react';

const PanelService = ({caption, Img, children}) => {
  const [isHovered, setHovered] = useState(false);

  const style = useMemo(
    () => ({
      color: isHovered ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)',
      backgroundColor: isHovered ? 'transparent' : 'lightgrey',
      transition: '.3s',
      width: 200,
      height: 200,
      padding: 20,
      textAlign: 'center'
    }),
    [isHovered]
  )

  const coverStyle = useMemo(
    () => ({
      color: isHovered ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 1)',
      transition: '.3s',
      position: 'absolute',
      width: 160,
      height: 160,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }),
    [isHovered]
)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      <div style={coverStyle} >
        <Img size={60} />
        <h3>{caption}</h3>
      </div>
      <h3>{caption}<br /><br /></h3>
      <p>{children}</p>
    </div>
  );
}

export {PanelService}