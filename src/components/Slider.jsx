import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide1 from '../img/home/slider/1.mp4';
import slide2 from '../img/home/slider/2.jpg';
import slide3 from '../img/home/slider/3.jpg';
import { SlideCaption } from './SlideCaption';

const slideStyle = {
  objectFit:'cover',
  height:'100%',
  width:'100%'
}

const Slider = () => {
  return (
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
        <SlideCaption link="/catalog/ultrasound">
          Технологии искуственного интеллекта
        </SlideCaption>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} style={slideStyle} alt='slide2' />
        <SlideCaption link="/catalog/endoscopy">
          Максимальное качество изображения
        </SlideCaption>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} style={slideStyle} alt='slide3' />
        <SlideCaption link="/catalog/veterinary">
          Системы для ветеринарии
        </SlideCaption>
      </SwiperSlide>
    </Swiper>
  );
}

export {Slider}