import { useState, useEffect } from 'react';
import banner from '../img/banners/about.jpg';

const animationLength = 20;

const style = {
  textAlign: 'center',
  padding: 20,
  width: '100%',
  fontSize: 24,
}

const textStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: 28,
  lineHeight: 2,
  margin: 60
}

const spanStyle = {
  color: 'lightseagreen',
  fontWeight: 'bold'
}

const About = () => {
  const [numbers, setNumbers] = useState([0, 0, 0]);
  const [animationStep, setAnimationStep] = useState(1);

  useEffect(() => {
    const handleNumber = (number) => (Math.floor(number * animationStep / animationLength));

    const timer = setInterval(() => {
      setAnimationStep(animationStep => (
        (animationStep >= animationLength) ? animationLength : animationStep + 1
      ));
      setNumbers(
        numbers => ([handleNumber(60), handleNumber(700), handleNumber(7)])
      );
    }, 50);

    return () => clearInterval(timer);
  }, [animationStep]);

  return (
    <div>
      <img src={banner} style={{width: '100%'}} alt='banner' />

      <div style={textStyle}>
        <p style={{width: '50%'}}>Наша компания является дистрибьютором и партнером <span style={spanStyle}>SonoScape</span> на территории Республики Казахстан.
        Мы предлагаем доступные цены на инновационное, высокопроизводительное оборудование.</p>
      </div>
      
      <table style={style}>
        <caption><h1>SonoScape</h1></caption>
        <tr>
          <td style={{width: '50%'}}>
            <h2>По всему миру</h2>
          </td>
          <td colSpan="2">
            <h2>Общее число специалистов:</h2>
          </td>
        </tr>
        <tr>
          <td><p>имеет представительства более чем в</p></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><h1>{numbers[0]}</h1></td>
          <td><h1>{numbers[1]}</h1></td>
          <td><h1>{numbers[2]}</h1></td>
        </tr>
        <tr>
          <td><p>странах мира.</p></td>
          <td><p>вовлеченных только в разработки оборудования.</p></td>
          <td><p>научно-исследовательских центров.</p></td>
        </tr>
      </table>
    </div>
  );
}

export {About}