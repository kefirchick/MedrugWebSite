import { useMemo } from 'react';
import { Toggler } from './Toggler';
import { Logo } from './Logo';

const NavbarHead = ({isMobile, handleToggler}) => {
  const style = useMemo(
    () => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: isMobile ? '100%' : 'auto'
    }),
  [isMobile]
)

  return (
    <div style={style}>
      <Toggler isMobile={isMobile} handleToggler={handleToggler} />
      <Logo />
    </div>
  );
}

export {NavbarHead}