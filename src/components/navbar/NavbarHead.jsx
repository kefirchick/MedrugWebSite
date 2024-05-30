import { useMemo } from 'react';
import { Toggler } from './Toggler';
import { Logo } from './Logo';
import { useResize } from '../ResizeProvider';

const NavbarHead = ({handleToggler}) => {
  const isMobile = useResize();

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
      <Toggler handleToggler={handleToggler} />
      <Logo />
    </div>
  );
}

export {NavbarHead}