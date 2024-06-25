import { useMemo} from 'react';
import { BuyButton } from './BuyButton';
import { ServiceWidget } from './ServiceWidget';
import { CloseButton } from './CloseButton';

const headerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}

const Description = ({isFolded, caption, children, handleFold}) => {
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
      <div style={headerStyle}>
        <div />
        <h2>{caption}</h2>
        <CloseButton handleFold={handleFold} />
      </div>
      <br />
      {children}
      <BuyButton product={caption} />
      <ServiceWidget />
    </div>
  );
}

export {Description}