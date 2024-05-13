import { useEffect, useState } from 'react';
import { PanelProduct } from '../components/PanelProduct';
import banner from '../img/banners/ultrasound.jpg';

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <img src={banner} style={{width: '100%'}} alt='banner' />
      {products.map(product => (
        <PanelProduct caption={product?.caption} image={product?.imgSmall}>
          <div dangerouslySetInnerHTML={{__html: product?.html}} />
        </PanelProduct>
      ))}
    </div>
  );
}

export {Catalog}