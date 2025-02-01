import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./modalSwiper.scss";

interface ImagesProps {
  images: string[];
}

const ModalSwiper: React.FC<ImagesProps> = ({ images }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="wrapImg">
            <img src={images[0]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapImg">
            <img src={images[1]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapImg">
            <img src={images[2]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapImg">
            <img src={images[3]} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ModalSwiper;
