import { useState } from 'react';
import { useMemo } from 'react';
import { Link } from "react-router-dom";

const imgStyle = {
  objectFit:'contain',
  height:160,
  margin:20
}

const PanelLink = ({name, img, link}) => {
  const [isHovered, setHovered] = useState(false);

  const style = useMemo(
    () => ({
      display:'flex',
      flexDirection:'column',
      alignContent:"center",
      width: 200,
      textAlign: 'center',
      transform: isHovered ? 'translateY(-10px)' : 'none',
      transition: '.3s',
      backgroundColor: 'white',
      margin: 40
    }),
    [isHovered]
  );

  return (
    <Link
      style={style}
      to={link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img style={imgStyle} src={img} alt={''} />
      <h3>{name}</h3>
    </Link>
  );
}

export {PanelLink}