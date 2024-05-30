import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { PanelProduct } from '../components/PanelProduct';
import banner from '../img/banners/ultrasound.jpg';

const style = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  backgroundColor: 'whitesmoke'
}

const Catalog = () => {
  const tag = useParams().tag;
  const [products, setProducts] = useState([]);
  const [unfoldedId, setUnfoldedId] = useState(null);

  const handleFold = (id) => {
    setUnfoldedId(id);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style ={style}>
      <img src={banner} style={{width: '100%'}} alt='banner' />
      {products
        .filter(product => product?.tags[0] === tag)
        .map(product => (
          <PanelProduct
            key={product?.id}
            id={product?.id}
            caption={product?.caption}
            subtitle={product?.subtitle}
            isFolded={unfoldedId !== product?.id}
            handleFold={handleFold}
          >
            <div dangerouslySetInnerHTML={{__html: product?.html}} />
          </PanelProduct>
        ))}
    </div>
  );
}

export {Catalog}