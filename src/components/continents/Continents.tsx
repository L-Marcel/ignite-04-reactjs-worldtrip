import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import ContinentItem from "./ContinentItem";
import { continents } from "../../service/data";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

function Continents() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      centeredSlides
      pagination={{ clickable: true,  }}
      autoplay={{ delay: 1000 * 8, disableOnInteraction: false }}
      navigation
      color="red"
      spaceBetween={50}
      slidesPerView={1}
    >
      {
        continents.map(continent => {
          return (
            <SwiperSlide key={continent.slug}>
              { ({ isActive }) => <ContinentItem isActive={isActive} {...continent}/> }
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default Continents;