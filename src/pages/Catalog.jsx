import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { PanelProduct } from '../components/PanelProduct';
import { CatalogBanner } from '../components/CatalogBanner';

const style = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  backgroundColor: 'whitesmoke'
}

const headerStyle = {
  textAlign: 'center',
  margin: 20,
  fontSize: 28
}

const Catalog = () => {
  const tag = useParams().tag;
  const [products, setProducts] = useState([]);
  const [unfoldedId, setUnfoldedId] = useState(null);

  const handleFold = (id) => {
    if (unfoldedId !== id) setUnfoldedId(id);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts = products.filter(product => product?.group === tag);
  const uniqueSubgroups = [...new Set(filteredProducts.map(product => product.subgroup))];

  return (
    <>
      <CatalogBanner />
      {uniqueSubgroups.map(subgroup => (
        <div key={subgroup}>
          <h2 style={headerStyle}>{subgroup}</h2>
          <div style={style}>
            {filteredProducts
              .filter(product => product?.subgroup === subgroup)
              .map(product => (
                <PanelProduct
                  key={product?.id}
                  id={product?.id}
                  caption={product?.caption}
                  subtitle={product?.subtitle}
                  isFolded={unfoldedId !== product?.id}
                  handleFold={handleFold}
                >
                  <div dangerouslySetInnerHTML={{ __html: product?.html }} />
                </PanelProduct>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}

export {Catalog}