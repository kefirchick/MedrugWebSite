import ultrasound from '../img/home/ultrasound.jpg';
import endoscopy from '../img/home/endoscopy.jpg';

const Home = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly'}} >
      <div style={{display:'flex', flexDirection:'column', width:160}} >
        <img style={{objectFit:'cover', margin:20}} src={ultrasound} />
        <p style={{textAlign:'center'}}>УЛЬТРАЗВУКОВЫЕ СИСТЕМЫ</p>
      </div>
      <div style={{display:'flex', flexDirection:'column', width:160}} >
        <img style={{objectFit:'cover', margin:20}} src={endoscopy} />
        <p style={{textAlign:'center'}}>ЭНДОСКОПИЧЕСКИЕ СИСТЕМЫ</p>
      </div>
    </div>
  );
}

export {Home}