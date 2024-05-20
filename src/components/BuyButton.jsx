import { FaWhatsappSquare } from "react-icons/fa"

const style = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: 300,
  borderStyle: 'solid',
  borderWidth: 5,
  borderRadius: 15,
  borderColor: 'lightseagreen',
  fontWeight: 'bold',
  margin: 20
}

const BuyButton = ({product}) => {
  const message = encodeURIComponent(`Здравствуйте! Меня интересует "${product}".`);
  const whatsappUrl = `https://wa.me/77001929911?text=${message}`;

  return (
      <a style={style} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <h2>КУПИТЬ: </h2><FaWhatsappSquare size={60} color={'lightseagreen'} />
      </a>
  );
}

export {BuyButton}