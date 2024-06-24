import { useState } from 'react';
import { PanelNews } from './PanelNews';
import news from '../server/news/news';

const style = {
  margin: 20,
  display: 'flex',
  flexWrap: 'wrap',
}

const NewsLine = ({numberOfNews}) => {
  const [unfoldedId, setUnfoldedId] = useState(null);

  const handleFold = (id) => {
    setUnfoldedId(prevId => (prevId === id ? null : id));
  };


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
              <record.content />
            </PanelNews>
        ))}
      </div>
  );
}

export {NewsLine}