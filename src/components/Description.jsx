import { useMemo} from 'react';
import { BuyButton } from './BuyButton';

const Description = ({isFolded, caption, description}) => {
  const style = useMemo(
    () => ({
      display: isFolded ? 'none' : 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    }),
    [isFolded]
  )

  return (
    <div style={style}>
      {description}
      <BuyButton product={caption} />
    </div>
  );
}

export {Description}