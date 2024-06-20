import { useEffect, useState } from 'react';
import { PanelNews } from './PanelNews';

const style = {
  margin: 20,
  display: 'flex',
  flexWrap: 'wrap',
}

const NewsLine = ({numberOfNews}) => {
  const [news, setNews] = useState([]);
  const [unfoldedId, setUnfoldedId] = useState(null);

  const handleFold = (id) => {
    setUnfoldedId(prevId => (prevId === id ? null : id));
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/news`)
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
            <PanelNews
              key={record?.id}
              id={record?.id}
              caption={record?.caption}
              isFolded={unfoldedId !== record?.id}
              handleFold={handleFold}
            >
              <div dangerouslySetInnerHTML={{__html: record?.html}} />
            </PanelNews>
        ))}
      </div>
  );
}

export {NewsLine}