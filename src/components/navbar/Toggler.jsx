import { useState, useMemo } from 'react';
import { IoMenu } from "react-icons/io5";
import { useResize } from '../ResizeProvider';

const Toggler = ({handleToggler}) => {
  const [isHovered, setHovered] = useState(false);
  const isMobile = useResize();

  const style = useMemo(() => ({
      display: isMobile ? 'flex' : 'none',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 90,
    }), [isMobile] )

    const iconStyle = useMemo(() => ({
      color: isHovered ? 'lightseagreen' : 'black',
      transition: '.3s',
      fontSize: 30,
    }), [isHovered]);

  return (
    <div
      style={style}
      onClick={handleToggler}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <IoMenu style={iconStyle} />
    </div>
  );
}

export {Toggler}