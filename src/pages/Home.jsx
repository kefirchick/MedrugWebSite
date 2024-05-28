import { LinkBlock } from "../components/LinkBlock";
import { NewsLine } from '../components/NewsLine';

const Home = ({isMobile}) => {
  return (
    <div>
      <LinkBlock />
      <h2 style={{textAlign: 'center'}}><br/>Новости и События</h2>
      <NewsLine isMobile={isMobile} numberOfNews={4} />
    </div>
  );
}

export {Home}