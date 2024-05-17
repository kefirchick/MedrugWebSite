import { useEffect, useState } from 'react';
import { PanelProduct } from '../components/PanelProduct';
import banner from '../img/banners/ultrasound.jpg';

const Catalog = () => {
  const [products, setProducts] = useState([]);

  const style = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  }

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style ={style}>
      <img src={banner} style={{width: '100%'}} alt='banner' />
      {products.map(product => (
        <PanelProduct id={product?.id} caption={product?.caption}>
          <div dangerouslySetInnerHTML={{__html: product?.html}} />
        </PanelProduct>
      ))}
    </div>
  );
}

export {Catalog}