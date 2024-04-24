import { Toggler } from './Toggler';
import { Logo } from './Logo';

const NavbarHead = ({isMobile, handleToggler}) => {

  const style = (width) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width
  })

  return (
      <div style={style(isMobile ? '100%' : 'auto')}>
        <Toggler isMobile={isMobile} handleToggler={handleToggler} />
        <Logo />
      </div>
  );
}

export {NavbarHead}