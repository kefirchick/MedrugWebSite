import { useMemo} from 'react';
import { BuyButton } from './BuyButton';

const Description = ({isFolded, caption, description}) => {
  const style = useMemo(
    () => ({
      display: isFolded ? 'none' : 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 20
    }),
    [isFolded]
  )

  return (
    <div style={style}>
      <h2>{caption}</h2><br />
      {description}
      <BuyButton product={caption} />
    </div>
  );
}

export {Description}