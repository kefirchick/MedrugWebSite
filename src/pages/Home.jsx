import { LinkBlock } from "../components/LinkBlock";
import { NewsLine } from '../components/NewsLine';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide1 from '../img/home/slider/1.mp4';
import slide2 from '../img/home/slider/2.jpg';
import slide3 from '../img/home/slider/3.jpg';

const slideStyle = {
  objectFit:'cover',
  height:'100%',
  width:'100%'
}

const Home = ({isMobile}) => {
  return (
    <div>
      <Swiper
        style={{height: 600, width: '100%'}}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <video
            src={slide1} style={slideStyle}
            autoPlay="autoPlay" loop="loop" muted="muted"
          ></video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} style={slideStyle} alt='slide2' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} style={slideStyle} alt='slide3' />
        </SwiperSlide>
      </Swiper>
      
      <LinkBlock />
      <h2 style={{textAlign: 'center'}}><br/>Новости и События</h2>
      <NewsLine isMobile={isMobile} numberOfNews={4} />
    </div>
  );
}

export {Home}