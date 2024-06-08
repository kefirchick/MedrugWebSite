import { LinkBlock } from "../components/LinkBlock";
import { NewsLine } from '../components/NewsLine';
import { Slider } from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider />      
      <LinkBlock />
      <h2 style={{textAlign: 'center'}}><br/>Новости и События</h2>
      <NewsLine numberOfNews={4} />
    </div>
  );
}

export {Home}