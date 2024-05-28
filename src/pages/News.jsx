import { useEffect, useState } from 'react';
import { PanelNews } from '../components/PanelNews';
import banner from '../img/banners/news.jpg';

const style = {
  width: '100%',
  margin: 20,
  display: 'flex',
  flexWrap: 'wrap'
}

const News = ({isMobile}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{overflow: 'hidden'}}>
      <img src={banner} style={{width: '100%'}} alt='banner' />
      <div style={style}>
        {news.map(record => (
          <PanelNews key={record?.id} isMobile={isMobile} id={record?.id} caption={record?.caption}>
            <div dangerouslySetInnerHTML={{__html: record?.html}} />
          </PanelNews>
        ))}
      </div>
    </div>
  );
}

export {News}