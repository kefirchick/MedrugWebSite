import { useState, useMemo } from 'react';

const PanelContacts = ({caption, Img, children}) => {
  const [isHovered, setHovered] = useState(false);

  const style = useMemo(
    () => ({
      backgroundColor: isHovered ? 'transparent' : 'lightgrey',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: '1s',
      width: 280,
      height: 280,
      textAlign: 'center',
      margin: 20
    }),
    [isHovered]
  )

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      <br /><br />
      <Img size={60} />
      <br />
      <h3>{caption}</h3>
      <br />
      {children}
    </div>
  );
}

export {PanelContacts}