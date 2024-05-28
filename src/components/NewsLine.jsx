import { useEffect, useState } from 'react';
import { PanelNews } from './PanelNews';

const style = {
  margin: 20,
  display: 'flex',
  flexWrap: 'wrap',
}

const NewsLine = ({isMobile, numberOfNews}) => {
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
      <div style={style}>
        {news
          .slice(0, numberOfNews)
          .map(record => (
            <PanelNews key={record?.id} isMobile={isMobile} id={record?.id} caption={record?.caption}>
              <div dangerouslySetInnerHTML={{__html: record?.html}} />
            </PanelNews>
        ))}
      </div>
  );
}

export {NewsLine}