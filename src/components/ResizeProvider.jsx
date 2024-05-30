import { createContext, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

const ResizeContext = createContext();

export const useResize = () => useContext(ResizeContext);

const ResizeProvider = ({children}) => {
  let isMobile = useMediaQuery({query: '(max-width: 950px)'});

  return (
    <ResizeContext.Provider value={isMobile}>
      {children}
    </ResizeContext.Provider>
  );
};

export {ResizeProvider};