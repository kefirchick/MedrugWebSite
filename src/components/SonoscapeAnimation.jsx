import { useState, useMemo, useEffect, useRef } from 'react';
import { useResize } from './ResizeProvider';

const animationLength = 50;

const SonoscapeAnimation = () => {
  const [numbers, setNumbers] = useState([0, 0, 0]);
  const [animationStep, setAnimationStep] = useState(1);
  const [wasIntersecting, setWasIntersecting] = useState(false);
  const observerRef = useRef(null);
  const elementRef = useRef(null);
  const isMobile = useResize();

  const style = useMemo(() => ({
    textAlign: 'center',
    padding: 20,
    width: '100%',
    fontSize: isMobile ? 12 : 24,
    overflowWrap: 'anywhere'
  }), [isMobile]);

  const h2Style = useMemo(() => ({
    color: 'lightseagreen',
    fontSize: isMobile ? 18 : 36,
    fontWeight: 'bold'
  }), [isMobile]);

  const h1Style = useMemo(() => ({
    color: 'lightseagreen',
    fontSize: isMobile ? 24 : 48,
    fontWeight: 'bold'
  }), [isMobile]);

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
      <caption><p style={h1Style}>SonoScape</p></caption>
      <tbody>
        <tr>
          <td style={{width: '50%'}}>
            <p style={h2Style}>По всему миру</p>
          </td>
          <td colSpan="2">
            <p style={h2Style}>Общее число специалистов:</p>
          </td>
        </tr>
        <tr>
          <td><p>имеет представительства более чем в</p></td>
          <td></td>
          <td></td>
        </tr>
        <tr ref={elementRef}>
          <td><p style={h1Style}>{numbers[0]}</p></td>
          <td><p style={h1Style}>{numbers[1]}</p></td>
          <td><p style={h1Style}>{numbers[2]}</p></td>
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