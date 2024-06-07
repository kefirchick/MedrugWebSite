import { useState, useMemo } from 'react';
import { IoClose } from "react-icons/io5";

const CloseButton = ({handleFold}) => {
  const [isHovered, setHovered] = useState(false);

    const iconStyle = useMemo(() => ({
      color: isHovered ? 'lightseagreen' : 'black',
      transition: '.3s',
      fontSize: 40,
      cursor: 'pointer'
    }), [isHovered]);

    const onClose = () => handleFold(null);

  return (
    <div
      onClick={onClose}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <IoClose style={iconStyle} />
    </div>
  );
}

export {CloseButton}