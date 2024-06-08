import { useState, useEffect, useRef } from 'react';

const animationLength = 50;

const style = {
  textAlign: 'center',
  padding: 20,
  width: '100%',
  fontSize: 24,
}

const SonoscapeAnimation = () => {
  const [numbers, setNumbers] = useState([0, 0, 0]);
  const [animationStep, setAnimationStep] = useState(1);
  const [wasIntersecting, setWasIntersecting] = useState(false);
  const observerRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleNumber = (number) => (Math.floor(number * animationStep / animationLength));

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !wasIntersecting) {
        setWasIntersecting(true);
        setAnimationStep(1);
      } else if (!entry.isIntersecting && wasIntersecting) {
        setWasIntersecting(false);
      }
    }, {threshold: 0.1});
    if (elementRef.current) observerRef.current.observe(elementRef.current);

    const timer = setInterval(() => {
      setAnimationStep(animationStep => (
        (animationStep >= animationLength) ? animationLength : animationStep + 1
      ));
      setNumbers(
        numbers => ([handleNumber(60), handleNumber(700), handleNumber(7)])
      );
    }, 50);

    return () => {
      clearInterval(timer);
      if (observerRef.current) observerRef.current.disconnect();
    }
  }, [animationStep, wasIntersecting]);

  return (
    <table style={style}>
      <caption><h1>SonoScape</h1></caption>
      <tbody>
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
        <tr ref={elementRef}>
          <td><h1>{numbers[0]}</h1></td>
          <td><h1>{numbers[1]}</h1></td>
          <td><h1>{numbers[2]}</h1></td>
        </tr>
        <tr>
          <td><p>странах мира.</p></td>
          <td><p>вовлеченных только в разработки оборудования.</p></td>
          <td><p>научно-исследовательских центров.</p></td>
        </tr>
      </tbody>
    </table>
  );
}

export {SonoscapeAnimation}