import { useMemo } from 'react';

const ProductImage = ({isFolded, id, caption}) => {
  const style = useMemo(
    () => ({
      width: isFolded ? 200 : '40%',
      height: isFolded ? 200 : 'auto',
      objectFit: 'contain',
      transition: '.3s',
      margin: 20
    }),
    [isFolded]
  )

  const image = useMemo(() => (
    isFolded ? '/small.jpg' : '/big.jpg'
  ), [isFolded]);

  return (
    <img
      style={style}
      src={process.env.PUBLIC_URL + '/img/products/' + id + image}
      alt={caption}
    />
  );
}

export {ProductImage}