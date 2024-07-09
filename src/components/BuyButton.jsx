import { useState, useMemo } from 'react';
import { FaWhatsappSquare } from "react-icons/fa"

const BuyButton = ({product}) => {
  const [isHovered, setHovered] = useState(false);
  const message = encodeURIComponent(`Здравствуйте! Меня интересует "${product}".`);
  const whatsappUrl = `https://wa.me/77751929911?text=${message}`;

  const style = useMemo(() => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 300,
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 15,
    borderColor: 'lightseagreen',
    fontSize: 42,
    fontWeight: 'bold',
    margin: 20,
    backgroundColor: isHovered ? 'lightseagreen' : 'white',
    color: isHovered ? 'white' : 'lightseagreen',
    transition: '.3s'
  }), [isHovered]);

  const iconStyle = useMemo(() => ({
    color: isHovered ? 'white' : 'lightseagreen',
    fontSize: 60
  }), [isHovered]);

  return (
      <a
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={style}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        КУПИТЬ: <FaWhatsappSquare style={iconStyle} />
      </a>
  );
}

export {BuyButton}