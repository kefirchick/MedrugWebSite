import { NewsLine } from '../components/NewsLine';
import banner from '../img/banners/news.jpg';

const News = () => {
  return (
    <div style={{overflow: 'hidden'}}>
      <img src={banner} style={{width: '100%'}} alt='banner' />
      <NewsLine numberOfNews={6} />
    </div>
  );
}

export {News}