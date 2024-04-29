import { useMemo } from 'react';
import { IoMenu } from "react-icons/io5";

const Toggler = ({isMobile, handleToggler}) => {
  const style = useMemo(
    () => ({
      display: isMobile ? 'flex' : 'none',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 90,
    }),
    [isMobile]
  )


  return (
    <div
      style={style}
      onClick={handleToggler}
    >
      <IoMenu size={20} />
    </div>
  );
}

export {Toggler}