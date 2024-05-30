const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const captionStyle = {
  position: 'absolute',
  color: 'transparent',
  backgroundImage: 'linear-gradient(90deg, whitesmoke 0%, white 45%, transparent 50%, whitesmoke 55%, whitesmoke 100%)',
  backgroundSize: '200% 100%',
  backgroundClip: 'text',
  animation: 'moveGradient 1.5s linear infinite',
}

const Banner = ({children, image}) => {
  return(
    <div style={style}>
      <img src={image} style={{width: '100%'}} alt='banner' />
      <h1 style={captionStyle}>{children}</h1>
    </div>
  );
};

export {Banner};