import { NewsLine } from '../components/NewsLine';
import banner from '../img/banners/news.jpg';

const News = ({isMobile}) => {
  return (
    <div style={{overflow: 'hidden'}}>
      <img src={banner} style={{width: '100%'}} alt='banner' />
      <NewsLine isMobile={isMobile} numberOfNews={6} />
    </div>
  );
}

export {News}