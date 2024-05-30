import { NewsLine } from '../components/NewsLine';
import { Banner } from '../components/Banner';
import bannerImg from '../img/banners/news.jpg';

const News = () => {
  return (
    <div>
      <Banner image={bannerImg}>Новости и события</Banner>
      <NewsLine numberOfNews={6} />
    </div>
  );
}

export {News}