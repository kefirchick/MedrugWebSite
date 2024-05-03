import { useState } from 'react';
import { useMemo } from 'react';

const PanelContacts = ({caption, Img, children}) => {
  const [isHovered, setHovered] = useState(false);

  const style = useMemo(
    () => ({
      backgroundColor: isHovered ? 'transparent' : 'lightgrey',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      transition: '1s',
      width: 200,
      height: 200,
      textAlign: 'center'
    }),
    [isHovered]
  )

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      <Img size={60} />
      <h3>{caption}</h3>
      {children}
    </div>
  );
}

export {PanelContacts}