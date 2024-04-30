import { Link } from "react-router-dom";
import ultrasoundImg from '../img/home/ultrasound.jpg';
import endoscopyImg from '../img/home/endoscopy.jpg';

const style = {
  display:'flex',
  justifyContent:'space-evenly',
  flexWrap: 'wrap'
}

const wrapperStyle = {
  display:'flex',
  flexDirection:'column',
  alignContent:"center",
  width: 200,
  textAlign: 'center'
}

const imgStyle = {
  objectFit:'contain',
  height:160,
  margin:20
}

const Home = () => {
  return (
    <div style={style} >
      <Link className="animateUp" style={wrapperStyle} to='/catalog'  >
        <img style={imgStyle} src={ultrasoundImg} alt={''} />
        <h3>УЛЬТРАЗВУКОВЫЕ СИСТЕМЫ</h3>
      </Link>
      <Link className="animateUp" style={wrapperStyle} to='/catalog' >
        <img style={imgStyle} src={endoscopyImg} alt={''} />
        <h3>ЭНДОСКОПИЧЕСКИЕ СИСТЕМЫ</h3>
      </Link>
    </div>
  );
}

export {Home}