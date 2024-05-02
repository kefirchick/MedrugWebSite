import { useState, useEffect } from 'react';
import banner from '../img/banners/about.jpg';

const animationLength = 20;

const style = {
  textAlign: 'center',
  margin: 20,
  width: '100%'
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